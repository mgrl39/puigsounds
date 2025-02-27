<template>
  <BaseLayout>
    <template #main-content>
      <div class="home-container">
        <div class="left-content">
          <MusicPlayer class="music-player" />
          <NextBellIn class="next-bell" />
          <ChampionsBanner 
            class="bottom-banner"
            @click="handleChampionsClick"
          />
        </div>
        <div class="right-content">
          <IonImg 
            src="../../../assets/images/logos/puig-love2.png"
            class="heart-background"
          ></IonImg>
        </div>
      </div>
    </template>
  </BaseLayout>
</template>

<script setup>
import { ref } from 'vue';
import { alertController, IonImg } from '@ionic/vue';

const showClickText = ref(false);

const handleChampionsClick = async () => {
  const alert = await alertController.create({
    header: 'Champions',
    message: '¿Quieres abrir el enlace de Champions?',
    buttons: [
      {
        text: 'Cancelar',
        role: 'cancel'
      },
      {
        text: 'Aceptar',
        handler: () => {
          window.location.href = 'https://elpuig.xeill.net/Members/daniel.martinez/noticies/24-25/champions/index_html';
        }
      }
    ]
  });

  await alert.present();
};

import BaseLayout from '../components/layout/BaseLayout.vue';
import ChampionsBanner from '../components/background/ChampionsBanner.vue';
import NextBellIn from '../components/ui/NextBellIn.vue';
import MusicPlayer from '../components/ui/MusicPlayer.vue';
</script>

<style scoped>
.home-container {
  display: flex;
  width: 100%;
  height: 100%;
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
  margin-bottom: auto;
}

.bottom-banner {
  margin-top: 1rem;
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

@media (max-width: 768px) {
  .home-container {
    flex-direction: column;
  }
  
  .right-content {
    display: none;
  }
}
</style> 