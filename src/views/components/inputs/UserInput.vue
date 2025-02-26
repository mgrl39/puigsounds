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
    <path d="M19.6515 19.4054C20.2043 19.2902 20.5336 18.7117 20.2589 18.2183C19.6533 17.1307 18.6993 16.1749 17.4788 15.4465C15.907 14.5085 13.9812 14 12 14C10.0188 14 8.09292 14.5085 6.52112 15.4465C5.30069 16.1749 4.34666 17.1307 3.74108 18.2183C3.46638 18.7117 3.79562 19.2902 4.34843 19.4054C9.39524 20.4572 14.6047 20.4572 19.6515 19.4054Z" fill="#222222"/>
    <circle cx="12" cy="8" r="5" fill="#222222"/>
  </g>
</svg>`;

const lockIcon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g opacity="0.25">
    <path d="M3 7C3 5.59987 3 4.8998 3.27248 4.36502C3.51217 3.89462 3.89462 3.51217 4.36502 3.27248C4.8998 3 5.59987 3 7 3H17C18.4001 3 19.1002 3 19.635 3.27248C20.1054 3.51217 20.4878 3.89462 20.7275 4.36502C21 4.8998 21 5.59987 21 7V17C21 18.4001 21 19.1002 20.7275 19.635C20.4878 20.1054 20.1054 20.4878 19.635 20.7275C19.1002 21 18.4001 21 17 21H7C5.59987 21 4.8998 21 4.36502 20.7275C3.89462 20.4878 3.51217 20.1054 3.27248 19.635C3 19.1002 3 18.4001 3 17V7Z" stroke="#222222" stroke-width="2"/>
    <circle cx="8" cy="12" r="2" stroke="#222222" stroke-width="2"/>
    <path d="M10 12H14M17 14V12.15C17 12.0672 16.9328 12 16.85 12H14M14 12V14" stroke="#222222" stroke-width="2" stroke-linecap="round"/>
  </g>
</svg>`;

const computedIcon = computed(() => (props.type === 'password' ? lockIcon : eyeIcon));
</script>

<style scoped>
.custom-input {
  display: flex;
  width: 100%;
  max-width: 368px;
  min-width: 280px;
  height: 54px;
  padding: 16px 0px 16px 20px;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 25px;
  border: 2px solid #CFCFD8;
  background: #CFCFD8;
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
  font-size: clamp(16px, 4vw, 22px);
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

@media screen and (max-width: 400px) {
  .custom-input {
    padding: 12px 0px 12px 15px;
    height: 48px;
  }
  
  .input-icon {
    width: 18px;
    height: 18px;
  }
  
  .svg-icon {
    width: 20px;
    height: 20px;
  }
}
</style>
