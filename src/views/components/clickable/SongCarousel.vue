<template>
  <ion-card class="song-carousel">
    <ion-card-header>
      <ion-card-title class="carousel-title">Tomorrow's Song</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      <swiper
        :slides-per-view="3"
        :space-between="8"
        :grab-cursor="true"
        @swiper="onSwiper"
      >
        <swiper-slide
          v-for="(song, index) in songs"
          :key="index"
          @click="voteForSong(song)"
        >
          <ion-card class="song-card">
            <ion-img 
              :src="song.image"
              class="song-image"
            ></ion-img>
            <ion-card-subtitle class="song-title">{{ song.title }}</ion-card-subtitle>
          </ion-card>
        </swiper-slide>
      </swiper>
    </ion-card-content>

    <BasePopupOk
      type="vote"
      :is-visible="showPopup"
      logo-path="../../../assets/images/logos/puig-mini.png"
      @close="handlePopupClose"
    />
  </ion-card>
</template>

<script setup>
import { ref } from 'vue';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonCardSubtitle, IonImg, IonToast } from '@ionic/vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

import BasePopupOk from '../popups/BasePopupOk.vue';

const showOverlay = ref(false);
const selectedSong = ref('');
const showPopup = ref(false);

const songs = ref([
  { title: 'Bakamitai', image: '../../../assets/images/songs/song1.png' },
  { title: 'Buleria', image: '../../../assets/images/songs/song2.png' },
  { title: 'Waka Waka', image: '../../../assets/images/songs/song3.png' },
  { title: 'Smooth Criminal', image: '../../../assets/images/songs/song4.png' },
  { title: 'Levantense', image: '../../../assets/images/songs/song5.png' },
  { title: 'Super Shy', image: '../../../assets/images/songs/song6.png' },
  { title: 'Paradise', image: '../../../assets/images/songs/song7.png' },
]);

const voteForSong = (song) => {
  selectedSong.value = song.title.toUpperCase();
  showPopup.value = true;
};

const handlePopupClose = () => {
  showPopup.value = false;
};

const onSwiper = (swiper) => {
  console.log(swiper);
};
</script>

<style scoped>
.song-carousel {
  width: 396px;
  height: 214px;
  flex-shrink: 0;
  --border-radius: 25px;
  --background: #D9D9D9;
  margin: 0;
  padding: 0 15px;
  border: 5px solid #AF3030;
}

.carousel-title {
  color: #850000;
  text-align: center;
  font-family: Montserrat;
  font-size: clamp(16px, 5vw, 20px);
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.3px;
  margin-bottom: 8px;
}

.song-card {
  width: 120px;
  cursor: pointer;
  transition: transform 0.3s ease;
  --background: transparent;
  margin: 0 4px;
  padding: 8px;
  box-shadow: none;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.song-card:hover {
  transform: scale(1.05);
}

.song-image {
  width: 110px;
  height: 110px;
  flex-shrink: 0;
  border-radius: 15px;
  object-fit: cover;
  margin-bottom: 4px;
}

.song-title {
  width: 100%;
  color: #000;
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  font-weight: 700;
  text-align: center;
  line-height: 1.1;
  letter-spacing: -0.3px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0 4px;
}

@media (max-width: 396px) {
  .song-carousel {
    width: 100%;
    height: auto;
  }
  
  .song-image {
    width: 100px;
    height: 100px;
  }
  
  .song-card {
    width: 100px;
  }
}
</style>