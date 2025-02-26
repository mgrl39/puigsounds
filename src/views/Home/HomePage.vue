<template>
  <BaseLayout>
    <template #main-content>
      <NextBellIn />
      <ChampionsBanner 
        class="bottom-banner"
        @click="handleChampionsClick"
      />
    </template>
  </BaseLayout>
</template>

<script setup>
import { ref } from 'vue';
import { alertController } from '@ionic/vue';

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

</script>

<style scoped>
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

</style> 