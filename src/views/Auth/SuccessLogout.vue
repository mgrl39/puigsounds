<template>
  <div class="success-logout">
    <h1>Successfully logged out</h1>
    <p>You have been successfully logged out.</p>
    <p>Thank you for using Puig.</p>
    <p>See you soon!</p>
    <p>Puig Team</p>
    <p>2025</p>
    <ion-button @click="goToLogin" expand="block" class="ion-margin-top">Go to Login</ion-button>
  </div>
</template>

<script setup>
import { IonButton } from '@ionic/vue';
import { useRouter } from 'vue-router';
// No se necesita lógica aquí ya que solo es un mensaje
console.log("Successfully logged out")
const router = useRouter();
const goToLogin = () => {
  router.push('/login');
}
</script>

<style scoped>
.success-logout {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  padding: 20px;
}

h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

p {
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

ion-button {
  --background: #3880ff;
  --background-activated: #3171e0;
  --background-focused: #4c8dff;
  --background-hover: #4c8dff;
  color: white;
}
</style>
