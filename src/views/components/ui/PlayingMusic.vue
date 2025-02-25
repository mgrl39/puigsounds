<template>
  <div class="music-popup">
    <!-- Botón de retroceso -->
    <button class="back-button">
      <svg width="9" height="17" viewBox="0 0 9 17">
        <path d="M7.97594 2.35745C8.38046 1.95652 8.38338 1.30358 7.98245 0.899057C7.58152 0.494536 6.92858 0.491623 6.52406 0.89255L4.0563 3.33838C3.12684 4.25956 2.36719 5.01243 1.82845 5.68326C1.26824 6.38083 0.862706 7.08887 0.754375 7.93878C0.706875 8.31144 0.706875 8.68856 0.754375 9.06122C0.862706 9.91113 1.26824 10.6192 1.82845 11.3167C2.36718 11.9876 3.12683 12.7404 4.05628 13.6616L6.52406 16.1075C6.92858 16.5084 7.58152 16.5055 7.98245 16.1009C8.38338 15.6964 8.38046 15.0435 7.97594 14.6425L5.55186 12.24C4.56806 11.2649 3.89321 10.5939 3.43657 10.0253C2.99299 9.47295 2.84082 9.11818 2.80032 8.80044C2.77489 8.60093 2.77489 8.39907 2.80032 8.19956C2.84082 7.88182 2.99299 7.52705 3.43657 6.97472C3.8932 6.40612 4.56806 5.73506 5.55186 4.76L7.97594 2.35745Z" fill="#DDDDDD"/>
      </svg>
    </button>

    <!-- Álbum art -->
    <div class="album-art"></div>

    <!-- Barra de progreso -->
    <div class="progress-container">
      <div class="progress-bar">
        <div class="progress-indicator"></div>
      </div>
      <div class="time-display">
        <span>2:25</span>
        <span>4:02</span>
      </div>
    </div>

    <!-- Controles -->
    <div class="controls">
      <button class="control-btn">
        <svg width="30" height="33" viewBox="0 0 30 33">
          <path d="M2.91671 27.9962V4.75373M26.25 26.9397V5.8102L12.6389 16.375L26.25 26.9397Z" stroke="#EAF0FF" stroke-width="3"/>
        </svg>
      </button>

      <button class="play-btn">
        <svg width="39" height="41" viewBox="0 0 39 41">
          <path d="M14.5181 8.15002V32.6001M24.518 8.15002V32.6001" stroke="#EAF0FF" stroke-width="3"/>
        </svg>
      </button>

      <button class="control-btn">
        <svg width="31" height="33" viewBox="0 0 31 33">
          <path d="M27.1198 4.75374V27.9962M3.78638 5.81021V26.9397L17.3975 16.375L3.78638 5.81021Z" stroke="#EAF0FF" stroke-width="3"/>
        </svg>
      </button>
    </div>

    <!-- Corazón -->
    <button class="heart-btn">
      <svg width="41" height="37" viewBox="0 0 41 37">
        <path d="M36.097 3.7997C31.6231 -0.762719 26.4425 1.16149 23.2346 3.19636C21.4221 4.34615 18.9112 4.34615 17.0986 3.19637C13.8908 1.16151 8.7102 -0.762669 4.23635 3.79971C-6.38393 14.6301 11.8289 35.5 20.1667 35.5C28.5045 35.5 46.7173 14.6301 36.097 3.7997Z" stroke="#AF3030" stroke-width="1.5"/>
      </svg>
    </button>
  </div>
</template>

<style scoped>
.music-popup {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 396px;
  padding: 0 117px 135px 117px;
  border-radius: 25px;
  border: 5px solid #AF3030;
  background: #131313;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  position: relative;
}

.back-button {
  position: absolute;
  left: 20px;
  top: 20px;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
}

.album-art {
  width: 162px;
  height: 162px;
  border-radius: 62.5px;
  background: lightgray 50% / cover;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 40px 0;
  opacity: 0.75;
}

.progress-container {
  width: 100%;
  margin-bottom: 30px;
}

.progress-bar {
  width: 329px;
  height: 2px;
  background: #EAF0FF;
  position: relative;
  margin: 0 auto;
}

.progress-indicator {
  position: absolute;
  left: 30%;
  width: 17px;
  height: 17px;
  background: #AF3030;
  border-radius: 50%;
  transform: translateY(-50%);
}

.time-display {
  display: flex;
  justify-content: space-between;
  width: 329px;
  margin: 8px auto 0;
  color: #878787;
  font-family: 'Satoshi', sans-serif;
  font-size: 12px;
  font-weight: 700;
}

.controls {
  display: flex;
  gap: 25px;
  align-items: center;
  margin-bottom: 30px;
}

.control-btn {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
}

.play-btn {
  background: rgba(255, 255, 255, 0.04);
  border-radius: 50%;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
}

.heart-btn {
  position: absolute;
  right: 20px;
  bottom: 20px;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
}
</style>