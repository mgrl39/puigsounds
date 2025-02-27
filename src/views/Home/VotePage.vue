<template>
  <BaseLayout>
    <template #main-content>
      <!-- Añadir UserHeader en la vista móvil -->
      <UserHeader class="mobile-header" />
      
      <div class="main-section">
        <div class="left-column">
          <div class="song-cards">
            <SongCarousel />
          </div>
          <div class="voting-chart">
            <VotingChar />
          </div>
        </div>
        <div class="middle-column">
          <div class="middle-content">
            <div class="voting-stats">
              <VotingStats />
            </div>
          </div>
        </div>
        <TrendingVotes class="trending-votes" />
      </div>
    </template>
  </BaseLayout>
</template>

<script setup>
import BaseLayout from '@/views/components/layout/BaseLayout.vue';
import SongCarousel from '@/views/components/clickable/SongCarousel.vue';
import VotingChar from '@/views/components/dashboard/VotingChar.vue';
import VotingStats from '@/views/components/dashboard/VotingStats.vue';
import TrendingVotes from '@/views/components/dashboard/TrendingVotes.vue';
import SongBattle from '@/views/components/dashboard/SongBattle.vue';
import UserHeader from '../components/layout/UserHeader.vue';
</script>

<style scoped>
.main-section {
  display: flex;
  gap: 1.5rem;
  padding: 1rem;
  justify-content: center;
}

.left-column {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 600px;
}

.middle-column {
  flex: 1;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.middle-content {
  display: flex;
  gap: 1.5rem;
  width: 100%;
  justify-content: center;
}

.right-column {
  flex: 1;
}

.stats-trends-container {
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  align-items: stretch;
}

.voting-stats,
.highlight-card {
  flex: 1;
  min-width: 250px;
}

.highlight-card {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1.5rem;
  backdrop-filter: blur(10px);
}

.text-center {
  text-align: center;
}

@media (max-width: 1417px) {
  .trending-votes {
    display: none;
  }
}

@media (max-width: 1031px) {
  .voting-stats {
    display: none;
  }
}

@media (max-width: 768px) {
  .main-section {
    flex-direction: column;
    padding-bottom: 70px; /* Espacio para la navbar */
  }
  
  .left-column,
  .middle-column {
    max-width: 100%;
  }
  
  .middle-content {
    flex-direction: column;
  }
  
  .highlight-card {
    display: none;
  }
  
  .mobile-header {
    display: block;
  }
}

.mobile-header {
  display: none;
}
</style>