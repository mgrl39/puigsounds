<template>
  <ion-card class="song-battle">
    <div class="battle-container">
      <ion-card class="song-card" :class="{ 'winning': leftVotes > rightVotes }">
        <ion-thumbnail>
          <ion-img :src="leftSong.image" :alt="leftSong.title"></ion-img>
        </ion-thumbnail>
        <ion-label class="song-info">
          <h3>{{ leftSong.title }}</h3>
          <p>{{ leftSong.artist }}</p>
          <ion-note>{{ leftVotes }} votos</ion-note>
        </ion-label>
      </ion-card>

      <div class="versus">VS</div>

      <ion-card class="song-card" :class="{ 'winning': rightVotes > leftVotes }">
        <ion-thumbnail>
          <ion-img :src="rightSong.image" :alt="rightSong.title"></ion-img>
        </ion-thumbnail>
        <ion-label class="song-info">
          <h3>{{ rightSong.title }}</h3>
          <p>{{ rightSong.artist }}</p>
          <ion-note>{{ rightVotes }} votos</ion-note>
        </ion-label>
      </ion-card>
    </div>
    
    <div class="battle-progress">
      <div class="progress-bar">
        <div class="left-progress" :style="{ width: leftPercentage + '%' }"></div>
        <div class="right-progress" :style="{ width: rightPercentage + '%' }"></div>
      </div>
    </div>
  </ion-card>
</template>

<script setup>
import { ref, computed } from 'vue';
import {
  IonCard,
  IonThumbnail,
  IonImg,
  IonLabel,
  IonNote
} from '@ionic/vue';

// Simulación de datos - Reemplazar con datos reales de tu API
const leftSong = ref({
  title: 'Bulería',
  artist: 'David Bisbal',
  image: '/path/to/image1.jpg',
});

const rightSong = ref({
  title: 'Waka Waka',
  artist: 'Shakira',
  image: '/path/to/image2.jpg',
});

const leftVotes = ref(120);
const rightVotes = ref(80);

const totalVotes = computed(() => leftVotes.value + rightVotes.value);
const leftPercentage = computed(() => (leftVotes.value / totalVotes.value) * 100);
const rightPercentage = computed(() => (rightVotes.value / totalVotes.value) * 100);
</script>

<style scoped>
ion-card.song-battle {
  margin: 0;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.battle-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1rem;
}

ion-card.song-card {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  margin: 0;
  background: rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
}

ion-card.song-card.winning {
  background: rgba(255, 255, 255, 0.15);
  transform: scale(1.05);
}

ion-thumbnail {
  --size: 80px;
  margin-bottom: 0.5rem;
}

ion-thumbnail::part(image) {
  border-radius: 50%;
}

.song-info {
  text-align: center;
}

ion-label h3 {
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 4px;
}

ion-label p {
  color: var(--ion-color-medium);
  font-size: 0.9rem;
  margin: 4px 0;
}

ion-note {
  font-weight: bold;
  color: var(--ion-color-primary);
}

.versus {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--ion-color-primary);
}

.battle-progress {
  width: 100%;
  margin-top: 1rem;
}

.progress-bar {
  height: 6px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  display: flex;
  overflow: hidden;
}

.left-progress {
  height: 100%;
  background: linear-gradient(90deg, #ff4081 0%, #ff6b6b 100%);
  transition: width 0.3s ease;
}

.right-progress {
  height: 100%;
  background: linear-gradient(90deg, #4a90e2 0%, #67b8f7 100%);
  transition: width 0.3s ease;
}

@media (max-width: 480px) {
  .battle-container {
    display: none;
  }
  
  .battle-progress {
    display: none;
  }
}
</style> 