<template>
  <BaseLayout>
    <template #main-content>
      <div class="main-section">
        <div class="content-container">
          <RankingList :ranked-users="rankedUsers" />
          <MusicStats class="music-stats" />
        </div>
      </div>
      <ChampionsBanner class="bottom-banner" />
    </template>
  </BaseLayout>
</template>

<script setup>
import { ref } from 'vue';
import BaseLayout from '../components/layout/BaseLayout.vue';
import MusicStats from '../components/ui/MusicStats.vue';
import RankingList from '../components/clickable/RankingList.vue';

const rankedUsers = ref([
  { name: 'Yassine', points: 4842, image: '../../../assets/images/profile-imgs/pic-yassine.png' },
  { name: 'Brenda', points: 5313, image: '../../../assets/images/profile-imgs/pic-brenda.png' },
  { name: 'CarlosIsaias', points: 2351, image: '../../../assets/images/profile-imgs/pic-carlos.png' },
  { name: 'Rohan', points: 1512, image: '../../../assets/images/profile-imgs/pic-rohan.png' },
  { name: 'Neil', points: 1114, image: '../../../assets/images/profile-imgs/pic-neil.png' },
  { name: 'Roly', points: 848, image: '../../../assets/images/profile-imgs/pic-roly.png' },
  { name: 'Levi', points: 509, image: '../../../assets/images/profile-imgs/pic-levi.png' },
  { name: 'Irene', points: 448, image: '../../../assets/images/profile-imgs/pic-irene.png' },
  { name: 'Zakaria', points: 448, image: '../../../assets/images/profile-imgs/pic-zaka.png' },
  { name: 'Jordi', points: 448, image: '../../../assets/images/profile-imgs/pic-jordi.png' },
]);
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