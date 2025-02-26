<template>
  <ion-page>
    <!-- <LoadingScreen v-if="isLoading" ref="loadingScreen" /> -->
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Blank</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header>

      <HeartInput />
      <div id="container">
        <strong>Ready to create an app?</strong>
        <p>Start with Ionic <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
        <CustomInput />
        <!-- 
        <Tag texto="SMX" />
      <Tag texto="DAW" />
      <Tag texto="DAM" />
      <Tag texto="ASIX" />
      -->
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">  
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import HeartInput from './components/clickable/HeartInput.vue';
import { ref, onMounted } from 'vue';
// import LoadingScreen from '@/views/components/ui/LoadingScreen.vue';

const isLoading = ref(true);
const loadingScreen = ref(null);
import { useRoute } from 'vue-router';

const route = useRoute();
const fromLogin = ref(route.query.fromLogin === 'true');

// Solo mostrar la animación de carga si viene desde el login
// Si no viene desde el login, establecer isLoading a false inmediatamente
if (!fromLogin) {
  isLoading.value = false;
}

onMounted(() => {
  // Iniciar la animación de fade out después de 2.5 segundos
  setTimeout(() => {
    if (loadingScreen.value && typeof loadingScreen.value === 'object' && 'startFadeOut' in loadingScreen.value) {
      (loadingScreen.value as any).startFadeOut();
    }
  }, 2500);

  // Remover el componente después de 3 segundos
  setTimeout(() => {
    isLoading.value = false;
  }, 3000);
});
</script>

<style scoped>
#container {
  text-align: center;
  
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  
  color: #8c8c8c;
  
  margin: 0;
}

#container a {
  text-decoration: none;
}

</style>
