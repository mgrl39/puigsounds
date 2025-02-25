<template>
  <div class="genres-container">
    <h2 class="title">Musical Genres</h2>
    <p class="subtitle">By Puig's Algorithm</p>
    
    <div class="bars-container">
      <div 
        v-for="(genre, index) in displayedGenres" 
        :key="index" 
        class="bar-wrapper"
      >
        <svg 
          class="genre-bar"
          :width="barWidth"
          :height="barHeight"
          viewBox="0 0 22 185"
        >
          <rect 
            class="bar-background" 
            x="0" 
            y="0" 
            rx="10.4665" 
            :width="barWidth" 
            :height="barHeight" 
          />
          <rect 
            class="animated-bar" 
            x="0" 
            :y="calculatedYPositions[index]" 
            rx="10.4665" 
            :width="barWidth" 
            :height="barHeights[index]" 
          />
        </svg>
        <span class="genre-label">{{ genre }}</span>
      </div>
    </div>
  </div>
 <!-- <MusicPlayer @click="handleMusicPlay" /> -->
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import MusicPlayer from './MusicPlayer.vue';
const allGenres = [
  'Pop', 'Rock', 'Metal', 'Jazz', 'Clásica', 
  'Drill', 'Trap', 'Reggaeton', 'House', 'Techno',
  'R&B', 'Soul', 'Blues', 'Country', 'Folk'
];

const displayedGenres = ref([]);
const barWidth = ref(20.933);
const barHeight = ref(183.857);
const barHeights = ref([]);
const calculatedYPositions = ref([]);
const isPlaying = ref(false);

const getRandomGenres = () => {
  const shuffled = [...allGenres].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 5);
};

const generateRandomHeights = () => {
  displayedGenres.value = getRandomGenres();
  barHeights.value = displayedGenres.value.map(() => {
    const minHeight = 30;
    const maxHeight = barHeight.value - 10;
    return Math.floor(Math.random() * (maxHeight - minHeight) + minHeight);
  });
  
  calculatedYPositions.value = barHeights.value.map(height => 
    barHeight.value - height
  );
};

const handleMusicPlay = () => {
  isPlaying.value = !isPlaying.value;
  // Aquí puedes agregar la lógica adicional para reproducir música
  console.log('Estado de reproducción:', isPlaying.value);
};

onMounted(() => {
  generateRandomHeights();
  // Actualizar los géneros cada 100 segundos
  setInterval(() => {
    generateRandomHeights();
  }, 100000);
});
</script>

<style scoped>
.genres-container {
  width: 389.812px;
  height: 315.924px;
  border-radius: 25px;
  background: #5b1c2c;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  color: #EFE173;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 5px;
}

.subtitle {
  color: white;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 30px;
}

.bars-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 200px;
}

.bar-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.genre-bar {
  margin: 0 5px;
}

.bar-background {
  fill: white;
}

.animated-bar {
  fill: #7a2c2e;
  fill-opacity: 0.8;
  transition: all 1.5s ease-in-out;
  transform-origin: bottom;
}

.genre-label {
  color: #EFE173;
  font-family: 'Inter', sans-serif;
  font-size: 8px;
  font-weight: 500;
  margin-top: 10px;
  text-align: center;
  width: 37.652px;
}

@keyframes barGrowth {
  from {
    height: 0;
    y: 185;
  }
  to {
    height: v-bind('barHeight');
    y: v-bind('calculatedYPosition');
  }
}
</style>  