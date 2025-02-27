<template>
  <ion-card class="trending-card">
    <ion-card-header>
      <ion-card-title class="stats-title">Voting Statistics</ion-card-title>
    </ion-card-header>
    
    <ion-card-content>
      <ion-list class="trending-list">
        <ion-item class="song-item">
          <ion-icon :icon="peopleOutline" slot="start" class="stats-icon"></ion-icon>
          <ion-label>
            <h2 class="song-title">Active Voters</h2>
            <p class="song-artist">{{ activeVoters }} in the last 24h</p>
          </ion-label>
          <ion-badge color="danger" slot="end" class="stats-badge">{{ activeVoters }}</ion-badge>
        </ion-item>

        <ion-item class="song-item">
          <ion-icon :icon="trendingUpOutline" slot="start" class="stats-icon"></ion-icon>
          <ion-label>
            <h2 class="song-title">Total Votes Today</h2>
            <p class="song-artist">{{ todayVotes }} votes</p>
          </ion-label>
          <ion-badge color="danger" slot="end" class="stats-badge">+{{ votesIncrease }}%</ion-badge>
        </ion-item>

        <ion-item class="song-item">
          <ion-icon :icon="timeOutline" slot="start" class="stats-icon"></ion-icon>
          <ion-label>
            <h2 class="song-title">Peak Hour</h2>
            <p class="song-artist">{{ peakHour }}:00 - {{ peakVotes }} votes</p>
          </ion-label>
        </ion-item>
      </ion-list>

      <div class="progress-container">
        <ion-progress-bar 
          type="determinate" 
          :value="dailyGoalProgress" 
          color="danger"
          class="goal-progress">
        </ion-progress-bar>
        <ion-note class="votes-count">
          {{ Math.round(dailyGoalProgress * 100) }}% of daily goal
        </ion-note>
      </div>
    </ion-card-content>
  </ion-card>
</template>

<script setup>
import { ref } from 'vue';
import { 
  IonCard, IonCardHeader, IonCardTitle, IonCardContent,
  IonList, IonItem, IonLabel, IonBadge, IonIcon,
  IonProgressBar, IonNote
} from '@ionic/vue';
import { 
  peopleOutline, 
  trendingUpOutline, 
  timeOutline 
} from 'ionicons/icons';

// Simulated data - Replace with real data
const activeVoters = ref(620);
const todayVotes = ref(5678);
const votesIncrease = ref(15);
const peakHour = ref(20);
const peakVotes = ref(456);
const dailyGoalProgress = ref(0.75);
</script>

<style scoped>
.trending-card {
  margin: 0;
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(12px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  height: 100%;
}

.trending-list {
  padding: 0.5rem 0;
}

.song-item {
  --background: transparent;
  --border-color: rgba(255, 255, 255, 0.08);
  margin: 0.5rem 0;
  border-radius: 12px;
  transition: all 0.3s ease;
}

.song-item:hover {
  --background: rgba(var(--ion-color-danger-rgb), 0.1);
}

.stats-icon {
  font-size: 1.5rem;
  color: rgba(209, 213, 219, 0.8);
  margin-right: 1rem;
}

.song-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: rgba(209, 213, 219, 0.8);
  margin-bottom: 4px;
}

.song-artist {
  color: rgba(209, 213, 219, 0.8);
  font-size: 0.9rem;
}

.stats-badge {
  --background: var(--ion-color-danger);
  --padding-end: 12px;
  --padding-start: 12px;
  font-weight: 600;
  border-radius: 8px;
}

.progress-container {
  padding: 1rem 0.5rem;
  margin-top: 1rem;
  background: rgba(var(--ion-color-danger-rgb), 0.1);
  border-radius: 12px;
}

.goal-progress {
  height: 8px;
  border-radius: 4px;
}

.votes-count {
  display: block;
  text-align: center;
  margin-top: 0.8rem;
  font-size: 0.9rem;
  color: rgba(209, 213, 219, 0.8);
  font-weight: 500;
}

@media (max-width: 480px) {
  .song-title {
    font-size: 1rem;
  }

  .song-artist {
    font-size: 0.85rem;
  }
}

@media (max-width: 340px) {
  .stats-icon {
    font-size: 1.25rem;
  }
}
</style> 