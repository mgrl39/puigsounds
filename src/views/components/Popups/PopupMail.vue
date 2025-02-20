<template>
  <ion-modal :is-open="isOpen" @didDismiss="closeModal">
    <ion-header>
      <ion-toolbar>
        <ion-title>Correo Enviado</ion-title>
        <ion-buttons slot="end">
          <ion-button @click="closeModal">Cerrar</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <p>Hemos enviado un correo con instrucciones para restablecer tu contraseña.</p>
    </ion-content>
  </ion-modal>
</template>

<script setup>
import { ref } from 'vue';

const isOpen = ref(false);

const openModal = () => { isOpen.value = true; };
const closeModal = () => { isOpen.value = false; };
</script>
