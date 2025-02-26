<template>
  <div class="side-menu">
    <PuigLogo class="puig-logo" />
    <div class="menu-items" style="margin-bottom: 40px;"> <!-- Aumentada la separación -->
      <ion-button 
        v-for="(item, index) in menuItems" 
        :key="index"
        @click="navigateTo(index)"
        :class="['menu-button', { active: activeIndex === index }]"
        fill="clear"
      >
        {{ item }}
      </ion-button>
    </div>
    <div class="time-container" style="margin-top: 40px;"> <!-- Aumentada la separación -->
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
</template>

<script setup>
import { IonButton } from '@ionic/vue';
import { ref, computed, onMounted, onBeforeUnmount, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import PuigLogo from '@/views/components/common/PuigLogo.vue';

const props = defineProps({
  activeIndex: {
    type: Number,
    required: true
  }
});

const emit = defineEmits(['update:activeIndex']);
const router = useRouter();
const route = useRoute();

const menuItems = ref(['HOME', 'VOTING PAGE', 'MY PROFILE', 'TOP TIER', 'LOG OUT']);
const routes = ['/', '/vote', '/profile', '/stats', '/logout'];

// Actualizar el índice activo basado en la ruta actual
onMounted(() => {
  const currentPath = route.path;
  const routeIndex = routes.findIndex(r => r === currentPath);
  if (routeIndex !== -1 && routeIndex !== props.activeIndex) {
    emit('update:activeIndex', routeIndex);
  }
});

// Observar cambios en la ruta para mantener sincronizado el botón activo
watch(
  () => route.path,
  (newPath) => {
    const routeIndex = routes.findIndex(r => r === newPath);
    if (routeIndex !== -1 && routeIndex !== props.activeIndex) {
      emit('update:activeIndex', routeIndex);
    }
  }
);

const navigateTo = (index) => {
  emit('update:activeIndex', index);
  router.push(routes[index]);
};

// Timer logic
const timer = ref(3 * 3600);

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
    if(timer.value > 0) timer.value--;
  }, 1000);
});

onBeforeUnmount(() => {
  clearInterval(interval);
});
</script>

<style scoped>
.side-menu {
  width: 264px;
  height: 650px; /* Increased height */
  border: 10px solid rgba(151, 10, 44, 0.47);
  border-radius: 25px;
  background: rgba(151, 10, 44, 0.47);
  padding: 20px;
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 40px; /* Aumentada la separación */
  align-items: center; /* Centered items */
}

.puig-logo {
  width: 159px;
  height: 91px;
  margin: 0 auto;
}

.menu-items {
  display: flex;
  flex-direction: column;
  gap: 40px; /* Aumentada la separación */
  align-items: center; /* Centered buttons */
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

.time-container {
  display: flex;
  flex-direction: column;
  width: 264px;
  height: 98px;
  padding: 24px;
  align-items: center;
  gap: 20px; /* Aumentada la separación */
  flex-shrink: 0;
  border-radius: 25px;
  border: 10px solid #720D25;
  background: #1F1F1F;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}

.time-display {
  display: flex;
  justify-content: center;
  gap: 20px; /* Aumentada la separación */
  margin-bottom: 8px;
  flex-wrap: wrap; /* Allow labels to be below values */
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
  padding-bottom: 10px; /* Added padding to center the text vertically */
}

.time-label {
  color: var(--text-text-invert, #FFF);
  text-align: center;
  font-family: 'Open Sans';
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 100%; /* Ensure labels take full width */
  text-align: center;
}
</style>