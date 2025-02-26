<template>
  <ion-card class="song-carousel">
    <ion-card-header>
      <ion-card-title class="carousel-title">Tomorrow's Song</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      <div class="carousel-container">
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
          <ion-card
            v-for="(song, index) in songs" 
            :key="index" 
            class="song-card"
            @click="voteForSong(song)"
          >
            <ion-img 
              :src="song.image"
              class="song-image"
            ></ion-img>
            <ion-card-subtitle class="song-title">{{ song.title }}</ion-card-subtitle>
          </ion-card>
        </div>
      </div>
    </ion-card-content>

    <ion-toast
      :is-open="showOverlay"
      :message="`${selectedSong} VOTED SUCCESSFULLY`"
      :duration="1000"
      position="middle"
    ></ion-toast>
  </ion-card>
</template>

<script setup>
import { ref, computed } from 'vue';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonCardSubtitle, IonImg, IonToast } from '@ionic/vue';

const currentSlide = ref(0);
const showOverlay = ref(false);
const selectedSong = ref('');
const isDragging = ref(false);
const startX = ref(0);
const startOffset = ref(0);
const dragOffset = ref(0);
const dragThreshold = 10;
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
  
  const maxOffset = 100;
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

const startTouchDrag = (e) => {
  isDragging.value = true;
  startX.value = e.touches[0].clientX;
  startOffset.value = dragOffset.value;
};

const onTouchDrag = (e) => {
  if (!isDragging.value) return;
  
  const diff = e.touches[0].clientX - startX.value;
  dragOffset.value = startOffset.value + diff;
  
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
  if (isDragging.value || Math.abs(dragOffset.value) > dragThreshold) return;
  
  selectedSong.value = song.title.toUpperCase();
  showOverlay.value = true;
};
</script>

<style scoped>
.song-carousel {
  width: 396px;
  height: 214px;
  --border-radius: 25px;
  --background: #D9D9D9;
  margin: 0;
  padding: 0 15px;
  position: relative;
  overflow: hidden;
}

.carousel-title {
  color: #850000;
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
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
  --background: transparent;
  margin: 0;
  box-shadow: none;
}

.song-card:hover {
  transform: scale(1.05);
}

.song-image {
  width: 120px;
  height: 120px;
  border-radius: 10px;
  object-fit: cover;
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
</style>