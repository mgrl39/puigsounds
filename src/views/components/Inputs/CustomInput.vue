<template>
  <ion-item class="custom-input">
    <ion-icon :icon="personOutline" class="input-icon"></ion-icon>
    <input
      type="text"
      placeholder="Username"
      class="custom-placeholder"
    />
    <ion-icon class="svg-icon" v-html="eyeIcon"></ion-icon>
  </ion-item>
</template>

<script setup>
import { IonItem, IonIcon } from '@ionic/vue';
import { personOutline } from 'ionicons/icons';

// SVG del icono a la derecha
const eyeIcon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g opacity="0.25">
    <path d="M19.6515 19.4054C20.2043 19.2902 20.5336 18.7117 20.2589 18.2183C19.6533 17.1307 18.6993 16.1749 17.4788 15.4465C15.907 14.5085 13.9812 14 12 14C10.0188 14 8.09292 14.5085 6.52112 15.4465C5.30069 16.1749 4.34666 17.1307 3.74108 18.2183C3.46638 18.7117 3.79562 19.2902 4.34843 19.4054C9.39524 20.4572 14.6047 20.4572 19.6515 19.4054Z" fill="#222222"/>
    <circle cx="12" cy="8" r="5" fill="#222222"/>
  </g>
</svg>`;
</script>

<style scoped>
/* Estilos generales del input */
.custom-input {
  display: flex;
  width: 368px;
  height: 54px;
  padding: 16px 0px 16px 20px;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 25px;
  border: 2px solid #CFCFD8;
  background: #CFCFD8;
}

/* Icono a la izquierda */
.input-icon {
  width: 22px;
  height: 22px;
  color: #888;
}

/* Estilo del input */
.custom-placeholder {
  width: 100%;
  border: none;
  background: transparent;
  font-family: Montserrat, sans-serif;
  font-size: 22px;
  font-weight: 400;
  color: #C0C0C2;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: rgba(0, 0, 0, 0.20);
  outline: none;
}

/* SVG a la derecha */
.svg-icon {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  opacity: 0.25;
}
</style>
