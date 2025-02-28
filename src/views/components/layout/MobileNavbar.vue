<template>
  <nav class="mobile-navbar">
    <router-link to="/home" class="nav-item" :class="{ active: currentRoute === '/home' }">
      <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.686153 11.2859C0 12.5873 0 14.0679 0 17.0289V26.2766C0 30.3888 0 32.445 1.46447 33.7225C2.92893 35 5.28595 35 10 35H10.2499V24.096C10.2499 22.2154 11.9495 20.9152 13.7499 20.9152H21.2499C23.0502 20.9152 24.7499 22.2154 24.7499 24.096V35H25C29.714 35 32.0711 35 33.5355 33.7225C35 32.445 35 30.3888 35 26.2766V17.0289C35 14.0679 35 12.5873 34.3138 11.2859C33.6277 9.98452 32.3391 9.021 29.7619 7.09396L27.2619 5.22466C22.6036 1.74155 20.2744 0 17.5 0C14.7256 0 12.3964 1.74155 7.73813 5.22466L5.23813 7.09396L5.23813 7.09396C2.66091 9.021 1.37231 9.98452 0.686153 11.2859ZM22.7499 35V24.096C22.7499 23.5677 22.2109 22.9152 21.2499 22.9152H13.7499C12.7888 22.9152 12.2499 23.5677 12.2499 24.096V35H22.7499Z" />
      </svg>
    </router-link>

    <router-link to="/vote" class="nav-item" :class="{ active: currentRoute === '/vote' }">
      <svg width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.8979 35C27.5629 35 35.3979 27.165 35.3979 17.5C35.3979 7.83502 27.5629 0 17.8979 0C8.23297 0 0.397949 7.83502 0.397949 17.5C0.397949 27.165 8.23297 35 17.8979 35ZM16.7215 23.9734L26.4438 12.3067L24.9073 11.0264L15.8861 21.8518L10.8271 16.7928L9.41288 18.207L15.2462 24.0403L16.0205 24.8146L16.7215 23.9734Z" />
      </svg>
    </router-link>

    <router-link to="/stats" class="nav-item" :class="{ active: currentRoute === '/stats' }">
      <svg width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.43679 0.87868C0.558105 1.75736 0.558105 3.17157 0.558105 6V29C0.558105 31.8284 0.558105 33.2426 1.43679 34.1213C2.31546 35 3.72968 35 6.5581 35H29.5581C32.3865 35 33.8007 35 34.6794 34.1213C35.5581 33.2426 35.5581 31.8284 35.5581 29V6C35.5581 3.17157 35.5581 1.75736 34.6794 0.87868C33.8007 0 32.3865 0 29.5581 0H6.55811C3.72968 0 2.31546 0 1.43679 0.87868ZM27.6402 12.8047C27.9465 12.3452 27.8223 11.7243 27.3628 11.4179C26.9033 11.1116 26.2824 11.2358 25.9761 11.6953L19.9319 20.7615L17.9732 16.844C17.2864 15.4705 15.372 15.3513 14.5202 16.6291L8.47606 25.6953C8.1697 26.1548 8.29388 26.7757 8.75341 27.0821C9.21294 27.3884 9.83381 27.2642 10.1402 26.8047L16.1843 17.7385L18.143 21.656C18.8298 23.0295 20.7442 23.1487 21.596 21.8709L27.6402 12.8047Z" />
      </svg>
    </router-link>

    <router-link to="/profile" class="nav-item" :class="{ active: currentRoute === '/profile' }">
      <svg width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M34.2691 31.9592C34.8839 31.8447 35.2451 31.1982 34.9525 30.6455C33.7726 28.4175 31.7068 26.4586 28.9806 25.0038C25.8165 23.3153 21.9397 22.4 17.9514 22.4C13.9632 22.4 10.0864 23.3153 6.92229 25.0038C4.19605 26.4586 2.1302 28.4175 0.950377 30.6455C0.657711 31.1982 1.01894 31.8447 1.63375 31.9592L10.6236 33.6345C15.4671 34.5371 20.4357 34.5371 25.2793 33.6345L34.2691 31.9592Z" />
        <circle cx="17.2514" cy="9.8" r="9.8" />
      </svg>
    </router-link>
  </nav>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const currentRoute = computed(() => route.path);
</script>

<style scoped>
.mobile-navbar {
  width: 100%;
  max-width: 396px;
  height: 59px;
  flex-shrink: 0;
  border-radius: 15px 15px 0 0;
  background-color: #970A2C !important;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  padding: 0 15px;
  box-sizing: border-box;
}

.nav-item {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  cursor: pointer;
  width: 100%;
  max-width: 60px;
}

.nav-item svg {
  width: 35px;
  height: 35px;
  flex-shrink: 0;
  fill: #222;
  transition: fill 0.3s ease;
}

.nav-item.active svg {
  fill: #ffffff;
}

/* Responsive adjustments */
@media (max-width: 400px) {
  .mobile-navbar {
    max-width: 100%;
    border-radius: 15px 15px 0 0;
  }
  
  .nav-item svg {
    width: 28px;
    height: 28px;
  }
}

@media (min-width: 768px) {
  .mobile-navbar {
    display: none;
  }
}
</style> 