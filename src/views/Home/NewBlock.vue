<template>
  <ion-page class="container desktop-only">
    <div class="main-content">
      <SideMenu v-model:activeIndex="activeIndex" />
      <ContentArea>
        <div class="content-layout">
          <!-- Contenido principal -->
          <div class="main-section">
            <!-- Ranking list -->
            <ion-content class="ranking-container">
              <ion-list class="ranking-list">
                <ion-item 
                  v-for="(user, index) in rankedUsers"
                  :key="user.name"
                  class="user-item"
                >
                  <div class="rank-circle">
                    {{ index + 1 }}
                  </div>
                  <ion-label class="user-info">
                    <h2>{{ user.name }}</h2>
                    <p>{{ user.points }} points</p>
                  </ion-label>
                </ion-item>
              </ion-list>
            </ion-content>
          </div>
          
          <!-- Sección lateral derecha -->
          <div class="right-section">
            <CurrentSong />
            <div class="student-counter">
              <h2>STUDENTS</h2>
              <div class="counter">1014</div>
              <div class="next-bell">
                Next Bell in:
                <div class="timer">1:59:59</div>
              </div>
            </div>
          </div>
          
          <!-- Banner en la parte inferior -->
          <ChampionsBanner class="bottom-banner" />
        </div>
      </ContentArea>
    </div>
  </ion-page>
</template>

<script setup>
import { IonPage, IonContent, IonList, IonItem, IonLabel } from '@ionic/vue';
import { ref } from 'vue';
import SideMenu from '@/components/SideMenu.vue';
import ContentArea from '@/components/ContentArea.vue';
import CurrentSong from '@/components/CurrentSong.vue';
import ChampionsBanner from '@/components/ChampionsBanner.vue';

const activeIndex = ref(0);

// Ranking data
const rankedUsers = ref([
  { name: 'Yassine', points: 4842 },
  { name: 'Brenda', points: 5313 },
  { name: 'CarlosIsaías', points: 2351 },
  { name: 'Rohan', points: 1512 },
  { name: 'Neil', points: 1114 },
  { name: 'Roly', points: 848 },
  { name: 'Levi', points: 509 },
  { name: 'Irene', points: 448 },
  { name: 'Zakaria', points: 448 },
  { name: 'jordi', points: 448 },
]);

// Songs data for voting page
const songs = ref([
  // ... existing code ...
]);

const vote = (id) => {
  console.log('Votaste por la canción', id);
};

const logout = () => {
  console.log('Cerrando sesión...');
};
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

.main-section {
  flex: 1;
  min-width: 0;
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

.ranking-container {
  width: 896px;
  height: 706px;
  border-radius: 25px;
  background: rgba(151, 10, 44, 0.47);
  border: 10px solid rgba(151, 10, 44, 0.47);
}

.user-item {
  --background: transparent;
  --padding-start: 0;
  margin-bottom: 10px;
}

.rank-circle {
  width: 24px;
  height: 24px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  color: #858494;
  font-family: 'Rubik', sans-serif;
  font-size: 12px;
}

.user-info h2 {
  color: #0C092A;
  font-family: 'Rubik', sans-serif;
  font-size: 16px;
  margin: 0;
}

.user-info p {
  color: #858494;
  font-family: 'Rubik', sans-serif;
  font-size: 14px;
  margin: 0;
}

.logo-container {
  display: flex;
  justify-content: center;
  padding: 20px 0;
}

.logo {
  width: 159px;
  height: 91px;
  flex-shrink: 0;
  background: url('../../assets/images/logos/puig-logo.png') 50% / cover no-repeat;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}
</style>