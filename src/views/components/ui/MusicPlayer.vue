<template>
  <div class="music-player">
    <div class="player-container">
      <!-- Imagen del álbum -->
      <div 
        class="album-art"
        :style="{ backgroundImage: `url(${coverImage})` }"
      ></div>

      <!-- Información de la canción -->
      <div class="song-info">
        <h2 class="song-title">{{ title }}</h2>
        <p class="song-artist">{{ artist }}</p>
      </div>

      <!-- Botón de reproducción -->
      <button class="play-button" @click="showPlayPopup">
        <svg class="button-background" viewBox="0 0 71 71" fill="none">
          <path d="M0 25C0 11.1929 11.1929 0 25 0H46C59.8071 0 71 11.1929 71 25V46C71 59.8071 59.8071 71 46 71H25C11.1929 71 0 59.8071 0 46V25Z" 
                fill="#626262" fill-opacity="0.28"/>
        </svg>
        <svg class="play-icon" viewBox="0 0 47 47" fill="none">
          <path d="M33.4611 22.6056L17.4033 14.5767C16.6054 14.1777 15.6667 14.7579 15.6667 15.65V31.35C15.6667 32.2421 16.6054 32.8223 17.4033 32.4233L33.4611 24.3944C34.1982 24.0259 34.1982 22.9741 33.4611 22.6056Z" 
                stroke="#222222" stroke-width="2"/>
        </svg>
      </button>
    </div>

    <!-- Popup de reproducción -->
    <ion-modal 
      :is-open="isPopupVisible" 
      class="custom-modal"
      @didDismiss="closePopup"
    >
      <div class="popup-container">
        <div 
          class="popup-album-art"
          :style="{ backgroundImage: `url(${coverImage})` }"
        ></div>

        <div class="song-details">
          <h3>{{ title }}</h3>
          <p>{{ artist }}</p>
        </div>

        <div class="progress-bar">
          <div class="progress" :style="{ width: `${progress}%` }"></div>
        </div>

        <div class="time-display">
          <span>{{ currentTime }}</span>
          <span>{{ duration }}</span>
        </div>

        <div class="buttons-container">
          <ion-button 
            class="cancel-button"
            @click="closePopup"
          >
            CERRAR
          </ion-button>
          <ion-button 
            class="play-pause-button"
            @click="togglePlay"
          >
            {{ isPlaying ? 'PAUSE' : 'PLAY' }}
          </ion-button>
        </div>
      </div>
    </ion-modal>
  </div>
</template>

<script setup>
import { ref, onBeforeUnmount } from 'vue';
import { IonModal, IonButton } from '@ionic/vue';
import { Howl } from 'howler';

const props = defineProps({
  title: {
    type: String,
    default: 'Victory'
  },
  artist: {
    type: String,
    default: 'Thomas Bergersen'
  },
  coverImage: {
    type: String,
    default: '/assets/images/songs/most-voted.png'
  },
  audioFile: {
    type: String,
    default: 'assets/audio/most-voted.mp3'
  }
});

const isPlaying = ref(false);
const isPopupVisible = ref(false);
const progress = ref(0);
const currentTime = ref('0:00');
const duration = ref('0:00');
let sound = null;
let progressInterval = null;

const formatTime = (secs) => {
  const minutes = Math.floor(secs / 60);
  const seconds = Math.floor(secs % 60);
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
};

const updateProgress = () => {
  if (sound && isPlaying.value) {
    const seek = sound.seek();
    const total = sound.duration();
    progress.value = (seek / total) * 100;
    currentTime.value = formatTime(seek);
    duration.value = formatTime(total);
  }
};

const initAudio = () => {
  sound = new Howl({
    src: [props.audioFile],
    html5: true,
    onend: () => {
      isPlaying.value = false;
      clearInterval(progressInterval);
    }
  });
};

const showPlayPopup = () => {
  if (!sound) {
    initAudio();
  }
  isPopupVisible.value = true;
};

const closePopup = () => {
  if (sound && isPlaying.value) {
    sound.pause();
    isPlaying.value = false;
  }
  isPopupVisible.value = false;
  clearInterval(progressInterval);
};

const togglePlay = () => {
  if (!sound) {
    initAudio();
  }
  
  if (isPlaying.value) {
    sound.pause();
    clearInterval(progressInterval);
  } else {
    sound.play();
    progressInterval = setInterval(updateProgress, 1000);
  }
  isPlaying.value = !isPlaying.value;
};

onBeforeUnmount(() => {
  if (sound) {
    sound.unload();
  }
  clearInterval(progressInterval);
});

</script>

<style scoped>
.music-player {
  padding: 5px;
  width: 100%;
  display: flex;
  justify-content: center;
}

.player-container {
  width: 100%;
  max-width: 388px;
  min-height: 120px;
  border-radius: 25px;
  background: #D9D9D9;
  box-shadow: inset 0px -2px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  padding: 5px 15px;
  position: relative;
  gap: 15px;
}

.album-art {
  width: 109px;
  height: 109px;
  border-radius: 25px;
  border: 1px solid #000;
  background-size: cover;
  background-position: center;
  box-shadow: 0px 1px 3px 2px rgba(11, 14, 29, 0.5);
  flex-shrink: 0;
}

.song-info {
  flex-grow: 1;
  min-width: 0;
}

.song-title {
  color: #131313;
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(18px, 5vw, 25px);
  font-weight: 700;
  margin: 0;
  line-height: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.song-artist {
  color: rgba(19, 19, 19, 0.6);
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(12px, 3vw, 15px);
  font-weight: 700;
  margin: 5px 0 0 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.play-button {
  position: relative;
  width: clamp(50px, 15vw, 71px);
  height: clamp(50px, 15vw, 71px);
  border: none;
  background: none;
  cursor: pointer;
  flex-shrink: 0;
}

.button-background {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
}

.play-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 66%;
  height: 66%;
  transition: transform 0.2s ease;
}

.play-button:hover .play-icon {
  transform: translate(-50%, -50%) scale(1.1);
}

/* Estilos del popup */
.custom-modal {
  --width: 396px;
  --height: 400px;
  --border-radius: 25px;
}

.popup-container {
  width: 100%;
  height: 100%;
  background: #131313;
  border: 5px solid #AF3030;
  border-radius: 25px;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  position: relative;
}

.popup-album-art {
  width: 200px;
  height: 200px;
  border-radius: 25px;
  background-size: cover;
  background-position: center;
  margin-bottom: 20px;
}

.song-details {
  text-align: center;
  color: #FFF;
  margin-bottom: 20px;
}

.song-details h3 {
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  font-weight: 700;
  margin: 0;
}

.song-details p {
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  opacity: 0.8;
  margin: 5px 0 0;
}

.progress-bar {
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 2px;
  margin-bottom: 10px;
}

.progress {
  height: 100%;
  background: #AF3030;
  border-radius: 2px;
  transition: width 0.1s linear;
}

.time-display {
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: #FFF;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  margin-bottom: 20px;
}

.buttons-container {
  display: flex;
  gap: 20px;
  margin-top: auto;
}

.play-pause-button, .cancel-button {
  --background: #970A2C;
  --border-radius: 25px;
  --border: 2px solid #970A2C;
  width: 120px;
  height: 54px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
}

.cancel-button {
  --background: transparent;
  --color: #970A2C;
}

@media (max-width: 480px) {
  .player-container {
    padding: 5px 10px;
  }

  .album-art {
    width: 80px;
    height: 80px;
  }
}

@media (max-width: 320px) {
  .album-art {
    width: 60px;
    height: 60px;
  }
  
  .player-container {
    min-height: 90px;
  }
}
</style>  