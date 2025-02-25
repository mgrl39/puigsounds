<template>
  <ion-page class="container desktop-only">
    <div class="main-content">
      <SideMenu v-model:activeIndex="activeIndex" />
      <ContentArea>
        <div class="content-layout">
          <!-- Contenido principal que será diferente en cada página -->
          <slot name="main-content"></slot>
          


          <!-- Banner inferior (común en todas las páginas) -->
        </div>
      </ContentArea>
    </div>
  </ion-page>
</template>

<script setup>
import { IonPage } from '@ionic/vue';
import { ref } from 'vue';
import SideMenu from '@/components/SideMenu.vue';
import ContentArea from '@/components/ContentArea.vue';
import CurrentSong from '@/components/CurrentSong.vue';
import ChampionsBanner from '@/components/ChampionsBanner.vue';

const activeIndex = ref(0);
</script>

<style scoped>
.container {
  background: #1F1F1F;
  min-height: 100vh;
  display: flex;
}

.main-content {
  display: flex;
  gap: 20px;
  padding: 20px;
  width: 100%;
}

.content-layout {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.right-section {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.bottom-banner {
  width: 100%;
  margin-top: auto;
}

.student-counter {
  background: rgba(151, 10, 44, 0.47);
  border-radius: 25px;
  padding: 20px;
  color: white;
  text-align: center;
}

.counter {
  font-size: 48px;
  font-weight: bold;
  margin: 10px 0;
}

.next-bell {
  font-size: 14px;
}

.timer {
  font-size: 24px;
  font-weight: bold;
  margin-top: 5px;
}
</style> 