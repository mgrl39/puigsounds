<template>
  <ion-card class="trending-card">
    <ion-list class="trending-list">
      <ion-item v-for="song in trendingSongs" :key="song.id" class="song-item">
        <ion-thumbnail slot="start" class="song-thumbnail">
          <ion-img :src="song.image" :alt="song.title" class="song-image"></ion-img>
        </ion-thumbnail>
        
        <ion-label class="song-details">
          <div class="song-info">
            <h3 class="song-title">{{ song.title }}</h3>
            <p class="song-artist">{{ song.artist }}</p>
          </div>
          <div class="trend-info">
            <ion-chip 
              :color="song.trend > 0 ? 'success' : 'danger'" 
              class="trend-chip"
              :class="{ 'trend-up': song.trend > 0, 'trend-down': song.trend < 0 }"
            >
              <ion-icon :icon="song.trend > 0 ? arrowUpOutline : arrowDownOutline"></ion-icon>
              {{ Math.abs(song.trend) }}%
            </ion-chip>
            <ion-note class="votes-count">{{ song.votes }} votos</ion-note>
          </div>
        </ion-label>
      </ion-item>
    </ion-list>
  </ion-card>
</template>

<script setup>
import { ref } from 'vue';
import {
  IonCard, IonList, IonItem, IonThumbnail, IonImg,
  IonLabel, IonChip, IonIcon, IonNote
} from '@ionic/vue';
import {
  arrowUpOutline,
  arrowDownOutline,
} from 'ionicons/icons';

// Datos simulados - Reemplazar con datos reales
const trendingSongs = ref([
  {
    id: 1,
    title: 'Bulería',
    artist: 'David Bisbal',
    image: '../../../public/assets/images/songs/song2.png',
    votes: 55,
    trend: 15
  },
  {
    id: 2,
    title: 'Waka Waka',
    artist: 'Shakira',
    image: '../../../public/assets/images/songs/song3.png',
    votes: 42,
    trend: -5
  },
  {
    id: 3,
    title: 'Bakamitai',
    artist: 'Yakuza',
    image: '../../../public/assets/images/songs/song1.png',
    votes: 103,
    trend: 8
  }
]);
</script>

<style scoped>
.trending-card {
  margin: 0;
  background: rgba(31, 41, 55, 0.8);
  backdrop-filter: blur(12px);
  border-radius: 16px;
  padding: 12px 0;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(75, 85, 99, 0.3);
  width: 100%;
  height: 100%;
}

.trending-list {
  background: transparent;
  height: 100%;
}

.song-item {
  --background: transparent;
  --border-color: rgba(75, 85, 99, 0.2);
  margin: 8px 0;
  --padding-start: 16px;
  --padding-end: 16px;
  border-radius: 12px;
  transition: all 0.3s ease;
  min-width: 0;
}

.song-item:hover {
  --background: rgba(55, 65, 81, 0.5);
  transform: translateX(4px);
}

.song-thumbnail {
  --size: 56px;
  margin-right: 16px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  flex-shrink: 0;
}

.song-image {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.song-details {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-width: 0;
}

.song-info {
  flex: 1;
  min-width: 0;
  margin-right: 16px;
}

.song-title {
  font-weight: 700;
  font-size: 1.1rem;
  margin-bottom: 6px;
  color: rgba(243, 244, 246, 1);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.song-artist {
  color: rgba(209, 213, 219, 0.8);
  font-size: 0.9rem;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.trend-info {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
}

.trend-chip {
  margin: 0;
  font-size: 0.9rem;
  height: 28px;
  font-weight: 600;
  padding: 0 10px;
  border-radius: 8px;
  transition: transform 0.2s ease;
}

.trend-chip.trend-up {
  --background: rgba(16, 185, 129, 0.2);
  --color: rgb(52, 211, 153);
}

.trend-chip.trend-down {
  --background: rgba(239, 68, 68, 0.2);
  --color: rgb(248, 113, 113);
}

.trend-chip:hover {
  transform: scale(1.05);
}

.votes-count {
  font-size: 0.85rem;
  opacity: 0.9;
  font-weight: 500;
  color: rgba(209, 213, 219, 0.8);
  white-space: nowrap;
}

@media (max-width: 480px) {
  .song-thumbnail {
    --size: 48px;
    margin-right: 12px;
  }

  .song-title {
    font-size: 1rem;
  }

  .song-artist {
    font-size: 0.85rem;
  }
  
  .trend-info {
    flex-direction: column;
    align-items: flex-end;
    gap: 4px;
  }
}

@media (max-width: 340px) {
  .trend-info {
    display: none;
  }
  
  .song-thumbnail {
    --size: 44px;
  }
}
</style> 