<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Estadísticas</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
        <Tag texto="SMX" />
      <Tag texto="DAW" />
      <Tag texto="DAM" />
      <Tag texto="ASIX" />
        <CheckboxToggle />
        <HeartInput />
      <div class="stats-container">
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import CheckboxToggle from '../components/Clickable/CheckboxToggle.vue';
import HeartInput from '../components/Clickable/HeartInput.vue';
import Tag from '../components/Tags/Tags.vue';
</script>