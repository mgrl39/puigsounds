<template>
  <div class="side-menu">
    <PuigLogo class="puig-logo" />
    <div class="menu-items">
      <ion-button 
        v-for="(item, index) in menuItems" 
        :key="index"
        @click="handleMenuClick(index)"
        :class="['menu-button', { active: activeIndex === index }]"
        fill="clear"
      >
        {{ item }}
      </ion-button>
    </div>
    <div class="bottom-content">
      <div class="quote-container">
        <p class="quote" v-if="currentQuoteIndex === 0">"La música es el arte más directo, entra por el oído y va al corazón"</p>
        <p class="author" v-if="currentQuoteIndex === 0">- Magdalena Martínez</p>
        
        <p class="quote" v-if="currentQuoteIndex === 1">"La música puede cambiar el mundo porque puede cambiar a las personas"</p>
        <p class="author" v-if="currentQuoteIndex === 1">- Bono</p>
        
        <p class="quote" v-if="currentQuoteIndex === 2">"Sin música, la vida sería un error"</p>
        <p class="author" v-if="currentQuoteIndex === 2">- Friedrich Nietzsche</p>
        
        <p class="quote" v-if="currentQuoteIndex === 3">"La música expresa lo que no puede ser dicho y aquello sobre lo que es imposible permanecer en silencio"</p>
        <p class="author" v-if="currentQuoteIndex === 3">- Victor Hugo</p>
      </div>
      <div class="time-container">
        <div class="time-display">
          <div class="time-value">
            <span>{{ formattedHours }}</span>
            <span class="time-label">Hours</span>
          </div>
          <div class="time-value">
            <span>{{ formattedMinutes }}</span>
            <span class="time-label">Minutes</span>
          </div>
          <div class="time-value">
            <span>{{ formattedSeconds }}</span>
            <span class="time-label">Seconds</span>
          </div>
        </div>
      </div>
    </div>

    <PopupOkNo
      :is-visible="showLogoutPopup"
      type="logout"
      logo-path="/assets/images/logos/puig-mini.png"
      @cancel="showLogoutPopup = false"
      @confirm="confirmLogout"
    />
  </div>
</template>

<script setup>
import { IonButton } from '@ionic/vue';
import { ref, computed, onMounted, onBeforeUnmount, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import PuigLogo from '@/views/components/common/PuigLogo.vue';
import PopupOkNo from '@/views/components/popups/PopupOkNo.vue';

const props = defineProps({
  activeIndex: {
    type: Number,
    required: true
  }
});

const emit = defineEmits(['update:activeIndex']);
const router = useRouter();
const route = useRoute();
const showLogoutPopup = ref(false);

const menuItems = ref(['HOME', 'VOTING PAGE', 'MY PROFILE', 'TOP TIER', 'LOG OUT']);
const routes = ['/home', '/vote', '/profile', '/stats', '/logout'];

// Quote rotation logic
const currentQuoteIndex = ref(0);
const QUOTE_INTERVAL = 5000; // Change quote every 5 seconds

onMounted(() => {
  const currentPath = route.path;
  const routeIndex = routes.findIndex(r => r === currentPath);
  if (routeIndex !== -1 && routeIndex !== props.activeIndex) {
    emit('update:activeIndex', routeIndex);
  }

  // Start quote rotation
  setInterval(() => {
    currentQuoteIndex.value = (currentQuoteIndex.value + 1) % 4;
  }, QUOTE_INTERVAL);
});

watch(
  () => route.path,
  (newPath) => {
    const routeIndex = routes.findIndex(r => r === newPath);
    if (routeIndex !== -1 && routeIndex !== props.activeIndex) {
      emit('update:activeIndex', routeIndex);
    }
  }
);

const handleMenuClick = (index) => {
  if (index === menuItems.value.length - 1) { // If it's the logout button
    showLogoutPopup.value = true;
  } else {
    navigateTo(index);
  }
};

const navigateTo = (index) => {
  emit('update:activeIndex', index);
  router.push(routes[index]);
};

const confirmLogout = () => {
  showLogoutPopup.value = false;
  navigateTo(menuItems.value.length - 1);
};

// Timer logic using localStorage
const TIMER_KEY = 'countdown-timer';
const LAST_UPDATE_KEY = 'last-timer-update';

const getInitialTimer = () => {
  const savedTimer = localStorage.getItem(TIMER_KEY);
  const lastUpdate = localStorage.getItem(LAST_UPDATE_KEY);
  
  if (savedTimer && lastUpdate) {
    const elapsedTime = Math.floor((Date.now() - parseInt(lastUpdate)) / 1000);
    const remainingTime = Math.max(0, parseInt(savedTimer) - elapsedTime);
    return remainingTime;
  }
  
  return 3 * 3600; // 3 hours in seconds
};

const timer = ref(getInitialTimer());

const formattedHours = computed(() => {
  return Math.floor(timer.value / 3600).toString().padStart(2, '0');
});

const formattedMinutes = computed(() => {
  return Math.floor((timer.value % 3600) / 60).toString().padStart(2, '0');
});

const formattedSeconds = computed(() => {
  return Math.floor(timer.value % 60).toString().padStart(2, '0');
});

let interval;

onMounted(() => {
  interval = setInterval(() => {
    if(timer.value > 0) {
      timer.value--;
      localStorage.setItem(TIMER_KEY, timer.value.toString());
      localStorage.setItem(LAST_UPDATE_KEY, Date.now().toString());
    }
  }, 1000);
});

onBeforeUnmount(() => {
  clearInterval(interval);
});
</script>

<style scoped>
.side-menu {
  width: 264px;
  height: calc(100vh - 40px);
  border: 10px solid rgba(151, 10, 44, 0.47);
  border-radius: 25px;
  background: rgba(151, 10, 44, 0.47);
  padding: 20px;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
}

.puig-logo {
  width: 159px;
  height: 91px;
  margin: 0 auto;
}

.menu-items {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  width: 100%;
  padding: 20px 0;
}

.menu-button {
  width: 228px;
  height: 54px;
  border: 2px solid #970A2C;
  border-radius: 10px;
  background: #970A2C;
  color: white;
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  --background: #970A2C;
  --border-color: #970A2C;
  --border-style: solid;
  --border-width: 2px;
}

.menu-button.active {
  --background: rgba(192, 192, 194, 0.19);
  background: rgba(192, 192, 194, 0.19);
  border-color: #ffffff;
  --border-color: #ffffff;
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.5);
}

.bottom-content {
  margin-top: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
}

.quote-container {
  background: rgba(31, 31, 31, 0.7);
  padding: 15px;
  border-radius: 15px;
  text-align: center;
  width: 90%;
}

.quote {
  color: #FFF;
  font-size: 14px;
  font-style: italic;
  margin: 0 0 8px 0;
}

.author {
  color: #FFF;
  font-size: 12px;
  margin: 0;
  text-align: right;
}

.time-container {
  width: 90%;
  padding: 15px;
  background: #1F1F1F;
  border-radius: 15px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}

.time-display {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 8px;
  flex-wrap: wrap;
}

.time-value {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #FFF;
  font-family: 'Open Sans', sans-serif;
  font-size: 32px;
  font-weight: 400;
  letter-spacing: 0.32px;
}

.time-label {
  color: var(--text-text-invert, #FFF);
  text-align: center;
  font-family: 'Open Sans';
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 100%;
  text-align: center;
}
</style>