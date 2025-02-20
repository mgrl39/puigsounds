<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Votaciones</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content>
      <ion-list>
        <ion-item v-for="song in songs" :key="song.id">
          <ion-label>{{ song.name }} - {{ song.artist }}</ion-label>
          <ion-button @click="vote(song.id)">Votar</ion-button>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { ref } from 'vue';

const songs = ref([
  { id: 1, name: 'Song 1', artist: 'Artist 1' },
  { id: 2, name: 'Song 2', artist: 'Artist 2' }
]);

const vote = (id) => {
  console.log('Votaste por la canción', id);
};
</script>
