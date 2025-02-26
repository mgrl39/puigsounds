<template>
  <div class="song-carousel">
    <h2 class="carousel-title">Tomorrow's Song</h2>
    
    <div class="carousel-container">
      <button class="nav-button left" @click="prevSlide">&lt;</button>
      
      <div 
        class="carousel-track" 
        :style="trackStyle"
        @mousedown="startDrag"
        @mousemove="onDrag"
        @mouseup="endDrag"
        @mouseleave="endDrag"
        @touchstart="startTouchDrag"
        @touchmove="onTouchDrag"
        @touchend="endTouchDrag"
      >
        <div 
          v-for="(song, index) in songs" 
          :key="index" 
          class="song-card"
          @click="voteForSong(song)"
        >
          <div 
            class="song-image" 
            :style="{ backgroundImage: `url(${song.image})` }"
          ></div>
          <div class="song-title">{{ song.title }}</div>
        </div>
      </div>
      
      <button class="nav-button right" @click="nextSlide">&gt;</button>
    </div>

    <div v-if="showOverlay" class="vote-overlay">
      {{ selectedSong }} VOTED SUCCESSFULLY
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const currentSlide = ref(0);
const showOverlay = ref(false);
const selectedSong = ref('');
const isDragging = ref(false);
const startX = ref(0);
const startOffset = ref(0);
const dragOffset = ref(0);
const dragThreshold = 10; // Umbral para distinguir entre clic y arrastre
const isAnimating = ref(false);

const songs = ref([
  { title: 'Bakamitai', image: '../../../assets/images/songs/song1.png' },
  { title: 'Buleria', image: '../../../assets/images/songs/song2.png' },
  { title: 'Waka Waka', image: '../../../assets/images/songs/song3.png' },
  { title: 'Smooth Criminal', image: '../../../assets/images/songs/song4.png' },
  { title: 'Levantense', image: '../../../assets/images/songs/song5.png' },
  { title: 'Super Shy', image: '../../../assets/images/songs/song6.png' },
  { title: 'Paradise', image: '../../../assets/images/songs/song7.png' },
]);

const trackStyle = computed(() => ({
  transform: `translateX(${-currentSlide.value * 136 + dragOffset.value}px)`,
  cursor: isDragging.value ? 'grabbing' : 'grab',
  transition: isDragging.value ? 'none' : isAnimating.value ? 'transform 0.5s ease-out' : 'transform 0.3s ease-out'
}));

const prevSlide = () => {
  currentSlide.value = Math.max(0, currentSlide.value - 1);
  dragOffset.value = 0;
};

const nextSlide = () => {
  currentSlide.value = Math.min(songs.value.length - 3, currentSlide.value + 1);
  dragOffset.value = 0;
};

const startDrag = (e) => {
  isDragging.value = true;
  startX.value = e.clientX;
  startOffset.value = dragOffset.value;
  e.preventDefault();
};

const onDrag = (e) => {
  if (!isDragging.value) return;
  
  const diff = e.clientX - startX.value;
  dragOffset.value = startOffset.value + diff;
  
  // Limitar el arrastre con efecto de resistencia
  const maxOffset = 100; // Permitir un poco más para el efecto elástico
  const minOffset = -((songs.value.length - 3) * 136) - 100;
  
  if (dragOffset.value > maxOffset) {
    dragOffset.value = maxOffset * 0.8;
  } else if (dragOffset.value < minOffset) {
    dragOffset.value = minOffset * 0.8;
  }
  
  e.preventDefault();
};

const endDrag = (e) => {
  if (!isDragging.value) return;
  
  isDragging.value = false;
  
  // Verificar si estamos en los extremos para aplicar animación suave de retorno
  const maxOffset = 0;
  const minOffset = -((songs.value.length - 3) * 136);
  
  if (dragOffset.value > maxOffset) {
    isAnimating.value = true;
    dragOffset.value = 0;
    setTimeout(() => {
      isAnimating.value = false;
    }, 500);
  } else if (dragOffset.value < minOffset) {
    isAnimating.value = true;
    dragOffset.value = minOffset;
    setTimeout(() => {
      isAnimating.value = false;
    }, 500);
  }
  
  e.preventDefault();
};

// Soporte para dispositivos táctiles
const startTouchDrag = (e) => {
  isDragging.value = true;
  startX.value = e.touches[0].clientX;
  startOffset.value = dragOffset.value;
};

const onTouchDrag = (e) => {
  if (!isDragging.value) return;
  
  const diff = e.touches[0].clientX - startX.value;
  dragOffset.value = startOffset.value + diff;
  
  // Limitar el arrastre con efecto de resistencia
  const maxOffset = 100;
  const minOffset = -((songs.value.length - 3) * 136) - 100;
  
  if (dragOffset.value > maxOffset) {
    dragOffset.value = maxOffset * 0.8;
  } else if (dragOffset.value < minOffset) {
    dragOffset.value = minOffset * 0.8;
  }
  
  e.preventDefault();
};

const endTouchDrag = (e) => {
  if (!isDragging.value) return;
  
  isDragging.value = false;
  
  // Verificar si estamos en los extremos para aplicar animación suave de retorno
  const maxOffset = 0;
  const minOffset = -((songs.value.length - 3) * 136);
  
  if (dragOffset.value > maxOffset) {
    isAnimating.value = true;
    dragOffset.value = 0;
    setTimeout(() => {
      isAnimating.value = false;
    }, 500);
  } else if (dragOffset.value < minOffset) {
    isAnimating.value = true;
    dragOffset.value = minOffset;
    setTimeout(() => {
      isAnimating.value = false;
    }, 500);
  }
};

const voteForSong = (song) => {
  // No votar si estamos arrastrando
  if (isDragging.value || Math.abs(dragOffset.value) > dragThreshold) return;
  
  selectedSong.value = song.title.toUpperCase();
  showOverlay.value = true;
  setTimeout(() => {
    showOverlay.value = false;
  }, 1000);
};
</script>

<style scoped>
.song-carousel {
  width: 396px;
  height: 214px;
  border-radius: 25px;
  background: #D9D9D9;
  padding: 15px;
  position: relative;
  overflow: hidden;
}

.carousel-title {
  color: #850000;
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  text-align: center;
  margin-bottom: 15px;
  letter-spacing: -0.3px;
}

.carousel-container {
  display: flex;
  align-items: center;
  gap: 8px;
}

.carousel-track {
  display: flex;
  gap: 8px;
  transition: transform 0.5s ease;
  cursor: grab;
  user-select: none;
  touch-action: pan-y;
}

.carousel-track:active {
  cursor: grabbing;
  transition: none;
}

.song-card {
  flex: 0 0 120px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.song-card:hover {
  transform: scale(1.05);
}

.song-image {
  width: 120px;
  height: 120px;
  border-radius: 10px;
  background-size: cover;
  background-position: center;
  margin-bottom: 8px;
}

.song-title {
  width: 100%;
  color: #000;
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  font-weight: 700;
  text-align: center;
  line-height: 1.1;
  letter-spacing: -0.3px;
}

.nav-button {
  background: rgba(151, 10, 44, 0.8);
  border: none;
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-button:hover {
  background: #970A2C;
}

.vote-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.9);
  color: white;
  padding: 15px 25px;
  border-radius: 10px;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  animation: fadeOut 1s forwards;
}

@keyframes fadeOut {
  0% { opacity: 1; }
  100% { opacity: 0; }
}
</style>