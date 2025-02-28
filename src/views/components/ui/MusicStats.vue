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
            :style="{ fill: barColors[index] }"
          />
        </svg>
        <span class="genre-label">{{ genre }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';

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
const barColors = ref([]);

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const calculateVisibleBars = () => {
  const container = document.querySelector('.genres-container');
  if (!container) return 3; // Default to 3 bars minimum
  
  const containerWidth = container.offsetWidth;
  const minBarSpace = 60; // Reduced space needed for each bar
  
  const calculatedBars = Math.floor(containerWidth / minBarSpace);
  return Math.max(3, Math.min(5, calculatedBars)); // Ensure minimum 3 bars, maximum 5
};

const getRandomGenres = (count) => {
  const shuffled = [...allGenres].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const generateRandomHeights = () => {
  const visibleBars = calculateVisibleBars();
  displayedGenres.value = getRandomGenres(visibleBars);
  
  barHeights.value = displayedGenres.value.map(() => {
    const minHeight = 30;
    const maxHeight = barHeight.value - 10;
    return Math.floor(Math.random() * (maxHeight - minHeight) + minHeight);
  });
  
  calculatedYPositions.value = barHeights.value.map(height => 
    barHeight.value - height
  );
  
  barColors.value = displayedGenres.value.map(() => getRandomColor());
};

onMounted(() => {
  generateRandomHeights();
  
  window.addEventListener('resize', () => {
    generateRandomHeights();
  });
  
  setInterval(() => {
    generateRandomHeights();
  }, 100000);
});
</script>

<style scoped>
.genres-container {
  width: 100%;
  max-width: 389.812px;
  min-width: 200px;
  height: 340px;
  border-radius: 25px;
  background: #5b1c2c;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
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
  margin-bottom: 20px;
}

.bars-container {
  display: flex;
  justify-content: center;
  gap: 20px;
  width: 100%;
  height: 200px;
  flex-wrap: nowrap;
  margin-bottom: 10px;
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

@media (max-width: 400px) {
  .genres-container {
    padding: 15px;
    height: 320px;
  }
  
  .bars-container {
    gap: 15px;
    justify-content: space-evenly;
  }
  
  .bar-wrapper {
    flex: 0 1 auto;
  }
}
</style>