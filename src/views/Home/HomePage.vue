<template>
  <BaseLayout>
    <template #main-content>
      <div class="main-section">
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
    </template>
  </BaseLayout>
</template>

<script setup>
import { IonContent, IonList, IonItem, IonLabel } from '@ionic/vue';
import { ref } from 'vue';
import BaseLayout from '@/components/BaseLayout.vue';

const rankedUsers = ref([
  { name: 'Yassine', points: 4842 },
  { name: 'Brenda', points: 5313 },
  // ... resto de usuarios
]);
</script>

<style scoped>
.main-section {
  flex: 1;
  min-width: 0;
}

.ranking-container {
  width: 896px;
  height: 706px;
  border-radius: 25px;
  background: rgba(151, 10, 44, 0.47);
  border: 10px solid rgba(151, 10, 44, 0.47);
}

// ... resto de estilos específicos del ranking
</style> 