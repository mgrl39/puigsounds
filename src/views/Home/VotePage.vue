<template>
  <div>
    <BaseLayout>
      <template #main-content>
        <UserHeader class="mobile-header" :userName="userName" />
        
        <div class="mobile-only">
          <h2 class="vote-message">Don't be a loser...</h2>
        </div>

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

    <PopupOkNo
      :is-visible="showConfirmationPopup" 
      type="confirmation"
      :logo-path="'/assets/images/logos/puig-mini.png'"
      @cancel="showConfirmationPopup = false"
      @confirm="confirmVote"
    />

    <PopupOkNo
      :is-visible="showLogoutPopup"
      type="logout"
      :logo-path="'/assets/images/logos/puig-mini.png'"
      @cancel="showLogoutPopup = false"
      @confirm="confirmLogout"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import BaseLayout from '@/views/components/layout/BaseLayout.vue';
import SongCarousel from '@/views/components/clickable/SongCarousel.vue';
import VotingChar from '@/views/components/dashboard/VotingChar.vue';
import VotingStats from '@/views/components/dashboard/VotingStats.vue';
import TrendingVotes from '@/views/components/dashboard/TrendingVotes.vue';
import UserHeader from '../components/layout/UserHeader.vue';
import PopupOkNo from '@/views/components/popups/PopupOkNo.vue';

const router = useRouter();
const userName = ref('Daniel Martinez');
const showLogoutPopup = ref(false);
const showConfirmationPopup = ref(false);

const confirmLogout = () => {
  showLogoutPopup.value = false;
  router.push('/login');
};

const confirmVote = () => {
  showConfirmationPopup.value = false;
  // Add vote confirmation logic here
};
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

.vote-message {
  color: white;
  text-align: center;
  margin: 1rem 0;
  font-size: 1.2rem;
}

.mobile-only {
  display: none;
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
  .mobile-only {
    display: block;
  }

  .main-section {
    flex-direction: column;
    padding-bottom: 70px;
  }
  
  .left-column,
  .middle-column {
    max-width: 100%;
    width: 100%;
  }
  
  .middle-content {
    flex-direction: column;
  }
  
  .highlight-card {
    display: none;
  }
  
  .mobile-header {
    display: block !important;
  }

  .voting-chart {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .song-cards {
    display: flex;
    justify-content: center;
  }
}

.mobile-header {
  display: none;
}
</style>