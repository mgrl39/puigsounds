<template>
  <div class="home-page-wrapper">
    <BaseLayout>
      <template #main-content>
        <div class="home-container">
          <div class="top-content">
            <div class="left-content">
              <UserHeader class="mobile-header" :userName="userName" />
              <MusicPlayer class="music-player" />
              <NextBellIn class="next-bell" />
            </div>
            <div class="right-content">
              <IonImg 
                src="../../../assets/images/logos/puig-love2.png"
                class="heart-background"
              ></IonImg>
            </div>
          </div>
          <div class="bottom-content">
            <ChampionsBanner 
              class="champions-banner"
              @click="handleChampionsClick"
            />
          </div>
        </div>
      </template>
    </BaseLayout>

    <PopupOkNo
      type="puig"
      :is-visible="showChampionsPopup"
      logo-path="/assets/images/logos/champions.png"
      @cancel="closeChampionsPopup"
      @confirm="handleConfirm"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { IonImg } from '@ionic/vue';
const showClickText = ref(false);
const userName = ref('Daniel Martinez');
const showChampionsPopup = ref(false);

const handleChampionsClick = () => {
  showChampionsPopup.value = true;
};

const closeChampionsPopup = () => {
  showChampionsPopup.value = false;
};

const handleConfirm = () => {
  window.location.href = 'https://elpuig.xeill.net/Members/daniel.martinez/noticies/24-25/champions/index_html';
};

import BaseLayout from '../components/layout/BaseLayout.vue';
import ChampionsBanner from '../components/background/ChampionsBanner.vue';
import NextBellIn from '../components/ui/NextBellIn.vue';
import MusicPlayer from '../components/ui/MusicPlayer.vue';
import UserHeader from '../components/layout/UserHeader.vue';
import PopupOkNo from '../components/popups/PopupOkNo.vue';
</script>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

.top-content {
  display: flex;
  flex: 1;
}

.left-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1rem;
}

.right-content {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.bottom-content {
  width: 100%;
  padding: 1rem;
}

.champions-banner {
  width: 100%;
}

.student-image {
  max-height: 120%;
  max-width: 120%;
  opacity: 1;
  transform: scale(1.2);
  position: relative;
  z-index: 2;
}

.heart-background {
  position: absolute;
  width: 250px;
  height: 250px;
  opacity: 0.4;
  z-index: 1;
  transform: scale(1.5);
}

.music-player {
  margin-bottom: 1rem;
}

.next-bell {
  margin-bottom: 1rem;
}

.main-section {
  flex: 1;
  min-width: 0;
}

.content-container {
  display: flex;
  gap: 20px;
}

.ranking-container {
  width: 450px;
  height: 706px;
  border-radius: 25px;
  background: rgba(151, 10, 44, 0.47);
  border: 10px solid rgba(151, 10, 44, 0.47);
}

.music-stats {
  margin-left: 20px;
}

@media (max-width: 1210px) {
  .heart-background {
    display: none;
  }
}

.mobile-header {
  display: none;
}

@media (max-width: 768px) {
  .mobile-header {
    display: block;
  }
  
  .top-content {
    flex-direction: column;
    flex: initial;
  }
  
  .right-content {
    display: none;
  }
  
  .left-content {
    padding: 0.5rem;
  }

  .music-player,
  .next-bell {
    margin-bottom: 0.5rem;
  }

  .bottom-content {
    padding: 0.5rem;
  }
}

.home-page-wrapper {
  display: contents;
  padding-bottom: 59px; /* Height of mobile navbar */
}
</style> 