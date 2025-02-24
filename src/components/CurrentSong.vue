<template>
  <div class="current-song-container">
    <div class="song-image"></div>
    <div class="song-info">
      <h3 class="song-title">Victory</h3>
      <p class="song-artist">Thomas Bergersen</p>
    </div>
    <div class="play-button">
      <ion-icon :icon="playCircleOutline" size="large"></ion-icon>
    </div>
  </div>
</template>

<script setup>
import { IonIcon } from '@ionic/vue';
import { playCircleOutline } from 'ionicons/icons';
</script>

<style scoped>
.current-song-container {
  width: 388px;
  height: 120px;
  flex-shrink: 0;
  background: rgba(151, 10, 44, 0.47);
  border-radius: 25px;
  padding: 5px;
  display: flex;
  align-items: center;
  gap: 15px;
}

.song-image {
  width: 109px;
  height: 109px;
  flex-shrink: 0;
  border-radius: 25px;
  border: 1px solid #000;
  background: url('../assets/victory-cover.jpg') lightgray 50% / cover no-repeat;
  box-shadow: 0px 1px 3px 2px rgba(11, 14, 29, 0.50);
}

.song-info {
  flex-grow: 1;
}

.song-title {
  width: 105px;
  height: 30px;
  flex-shrink: 0;
  color: #FFFFFF;
  font-family: 'Rubik', sans-serif;
  font-size: 18px;
  margin: 0;
}

.song-artist {
  color: #858494;
  font-family: 'Rubik', sans-serif;
  font-size: 14px;
  margin: 5px 0 0 0;
}

.play-button {
  color: white;
  cursor: pointer;
  padding: 10px;
}
</style> 