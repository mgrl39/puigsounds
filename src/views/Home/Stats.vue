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
        <UserInput type="text" placeholder="Nombre del alumno" />
        <PasswordInput type="password" placeholder="Password" />
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
import UserInput from '../components/Inputs/UserInput.vue';
import PasswordInput from '../components/Inputs/PasswordInput.vue';
import Tag from '../components/Tags/Tags.vue';
</script>