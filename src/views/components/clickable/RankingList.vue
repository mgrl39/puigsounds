<template>
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
</template>

<script setup>
import { IonContent, IonList, IonItem, IonLabel } from '@ionic/vue';

defineProps({
  rankedUsers: {
    type: Array,
    required: true
  }
});
</script>

<style scoped>
.ranking-container {
  width: 450px;
  height: 706px;
  border-radius: 25px;
  background: rgba(151, 10, 44, 0.47);
  border: 10px solid rgba(151, 10, 44, 0.47);
}
</style> 