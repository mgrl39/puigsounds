<template>
  <div class="side-menu">
    <PuigLogo />
    <div class="menu">
      <ion-button 
        v-for="(item, index) in menuItems" 
        :key="index"
        @click="selectItem(index)"
        :class="['menu-item', { active: activeIndex === index }]"
        fill="clear"
      >
        {{ item }}
      </ion-button>
    </div>
    <div class="timer-display">
      <div>{{ formattedHours }}:{{ formattedMinutes }}:{{ formattedSeconds }}</div>
    </div>
  </div>
</template>

<script setup>
import { IonButton } from '@ionic/vue';
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import PuigLogo from './PuigLogo.vue';

const props = defineProps({
  activeIndex: {
    type: Number,
    required: true
  }
});

const emit = defineEmits(['update:activeIndex']);

const menuItems = ref(['HOME', 'VOTING PAGE', 'MY PROFILE', 'TOP TIER', 'LOG OUT']);

const selectItem = (index) => {
  emit('update:activeIndex', index);
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
  background: rgba(151, 10, 44, 0.47);
  border-radius: 25px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  position: relative;
}

.menu-item {
  width: 100%;
  height: 54px;
  border-radius: 10px;
  background: rgba(151, 10, 44, 0.8);
  color: white;
  margin-bottom: 10px;
  --background: transparent;
  --border-color: #970A2C;
  --border-style: solid;
  --border-width: 2px;
}

.menu-item.active {
  --background: #970A2C;
}

.timer-display {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: #000;
  padding: 10px 20px;
  border-radius: 15px;
  color: white;
}
</style> 