<template>
  <ion-item class="custom-input">
    <ion-icon :icon="personOutline" class="input-icon"></ion-icon>
    <input
      :type="type"
      :placeholder="placeholder"
      class="custom-placeholder"
    />
    <ion-icon class="svg-icon" v-html="computedIcon"></ion-icon>
  </ion-item>
</template>

<script setup>
import { IonItem, IonIcon } from '@ionic/vue';
import { personOutline } from 'ionicons/icons';
import { computed } from 'vue';

const props = defineProps({
  type: {
    type: String,
    default: 'text',
  },
  placeholder: {
    type: String,
    default: 'Username',
  },
});

const eyeIcon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g opacity="0.25">
    <path d="M3 7C3 5.59987 3 4.8998 3.27248 4.36502C3.51217 3.89462 3.89462 3.51217 4.36502 3.27248C4.8998 3 5.59987 3 7 3H17C18.4001 3 19.1002 3 19.635 3.27248C20.1054 3.51217 20.4878 3.89462 20.7275 4.36502C21 4.8998 21 5.59987 21 7V17C21 18.4001 21 19.1002 20.7275 19.635C20.4878 20.1054 20.1054 20.4878 19.635 20.7275C19.1002 21 18.4001 21 17 21H7C5.59987 21 4.8998 21 4.36502 20.7275C3.89462 20.4878 3.51217 20.1054 3.27248 19.635C3 19.1002 3 18.4001 3 17V7Z" stroke="#222222" stroke-width="2"/>
    <circle cx="8" cy="12" r="2" stroke="#222222" stroke-width="2"/>
    <path d="M10 12H14M17 14V12.15C17 12.0672 16.9328 12 16.85 12H14M14 12V14" stroke="#222222" stroke-width="2" stroke-linecap="round"/>
  </g>
</svg>`;


const computedIcon = eyeIcon;
</script>

<style scoped>
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
  background: #CFCFD8 !important;
  background-color: #CFCFD8 !important;
}

.input-icon {
  width: 22px;
  height: 22px;
  color: #888;
}

.custom-placeholder {
  width: 100%;
  border: none;
  background: transparent;
  font-family: Montserrat, sans-serif;
  font-size: 22px;
  font-weight: 400;
  padding-left: 10px;
  color: #C0C0C2;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: rgba(0, 0, 0, 0.20);
  outline: none;
}

.svg-icon {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  opacity: 0.25;
}
</style>
