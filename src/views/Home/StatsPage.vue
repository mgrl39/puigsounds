<template>
  <BaseLayout>
    <template #main-content>
      <div class="main-section">
        <div class="stats-container">
          <div class="left-section">
            <div class="global-rank">
              <h2>GLOBAL #127</h2>
              <h3>DAW RANK #7</h3>
            </div>
            <div class="musical-genres">
              <h3>Musical Genres</h3>
              <MusicStats />
            </div>
          </div>
          <div class="right-section">
            <RankingList :ranked-users="rankedUsers" />
          </div>
        </div>
      </div>
    </template>
  </BaseLayout>
</template>

<script setup>
import { ref } from 'vue';
import BaseLayout from '../components/layout/BaseLayout.vue';
import MusicStats from '../components/ui/MusicStats.vue';
import RankingList from '../components/clickable/RankingList.vue';

const rankedUsers = ref([
  { name: 'Yassine', points: 4842, image: '../../../assets/images/profile-pic/pic-yassine.png' },
  { name: 'Brenda', points: 5313, image: '../../../assets/images/profile-pic/pic-brenda.png' },
  { name: 'CarlosIsaias', points: 2351, image: '../../../assets/images/profile-pic/pic-carlos.png' },
  { name: 'Rohan', points: 1512, image: '../../../assets/images/profile-pic/pic-rohan.png' },
  { name: 'Neil', points: 1114, image: '../../../assets/images/profile-pic/pic-neil.png' },
  { name: 'Roly', points: 848, image: '../../../assets/images/profile-pic/pic-roly.png' },
  { name: 'Levi', points: 509, image: '../../../assets/images/profile-pic/pic-levi.png' },
  { name: 'Irene', points: 448, image: '../../../assets/images/profile-pic/pic-irene.png' },
  { name: 'Zakaria', points: 448, image: '../../../assets/images/profile-pic/pic-zaka.png' },
  { name: 'Jordi', points: 448, image: '../../../assets/images/profile-pic/pic-jordi.png' },
]);
</script>

<style scoped>
.stats-container {
  background: rgba(151, 10, 44, 0.47);
  border-radius: 25px;
  padding: 20px;
  width: 896px;
  height: 706px;
  display: flex;
  gap: 20px;
}

.left-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.right-section {
  width: 450px;
}

.global-rank {
  background: rgba(151, 10, 44, 0.3);
  border-radius: 15px;
  padding: 20px;
}

.global-rank h2, .global-rank h3 {
  margin: 0;
  color: white;
}

.musical-genres {
  background: rgba(151, 10, 44, 0.3);
  border-radius: 15px;
  padding: 20px;
  flex: 1;
}

.musical-genres h3 {
  margin: 0 0 20px 0;
  color: white;
}

@media (max-width: 768px) {
  .stats-container {
    width: 100%;
    height: auto;
    flex-direction: column;
  }

  .right-section {
    width: 100%;
  }
}
</style>