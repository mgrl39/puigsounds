<template>
  <div class="main-container">
    <!-- Imagen superpuesta a la derecha -->
    <ion-img 
      :src="imagePath" 
      class="overlay-image"
      alt="Imagen decorativa"
    ></ion-img>

    <!-- Contenedor del gráfico -->
    <div class="chart-container">
      <canvas ref="chartCanvas"></canvas>
    </div>

    <!-- Botón de votación -->
    <ion-button 
      class="vote-button"
      @click="showVoteConfirmation"
    >
      RANDOM VOTE
    </ion-button>

    <!-- Popup de confirmación -->
    <ion-alert
      :is-open="showAlert"
      header="Votación"
      message="¡Votaste correctamente!"
      :buttons="['OK']"
      @didDismiss="showAlert = false"
    ></ion-alert>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { IonButton, IonAlert, IonImg } from '@ionic/vue';
import Chart from 'chart.js/auto';

const chartCanvas = ref(null);
const showAlert = ref(false);
const imagePath = ref('../../assets/images/shades/boy-shade.png');

// Generar datos incrementales para las últimas 24 horas
const generateIncrementalData = () => {
  const data = [];
  let currentValue = 20; // Valor inicial
  for (let i = 0; i < 24; i++) {
    const increment = Math.floor(Math.random() * 10) + 1; // Incremento aleatorio entre 1 y 10
    currentValue += increment;
    data.push(currentValue);
  }
  return data;
};

// Generar etiquetas para las últimas 24 horas
const generateHourLabels = () => {
  const labels = [];
  const now = new Date();
  for (let i = 23; i >= 0; i--) {
    const hour = new Date(now - i * 3600000);
    labels.push(hour.getHours() + ':00');
  }
  return labels;
};

// Configuración del gráfico
const initChart = () => {
  if (chartCanvas.value) {
    new Chart(chartCanvas.value.getContext('2d'), {
      type: 'line',
      data: {
        labels: generateHourLabels(),
        datasets: [{
          label: 'Votos últimas 24h',
          data: generateIncrementalData(),
          borderColor: '#970A2C',
          borderWidth: 2,
          tension: 0.4,
          fill: false
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false }
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              color: 'rgba(255, 255, 255, 0.1)'
            }
          },
          x: {
            grid: {
              display: false
            }
          }
        }
      }
    });
  }
};

const showVoteConfirmation = () => {
  showAlert.value = true;
};

onMounted(() => {
  initChart();
});
</script>

<style scoped>
.main-container {
  position: relative;
  width: 396px;
  height: 362px;
  border-radius: 25px;
  border: 1px solid #D69B9B;
  background: linear-gradient(0deg, rgba(132, 42, 63, 0.13) 0%, rgba(132, 42, 63, 0.13) 100%), #D9D9D9;
  overflow: hidden;
}

.chart-container {
  position: relative;
  width: 100%;
  height: calc(100% - 70px);
  padding: 15px;
}

.overlay-image {
  position: absolute;
  right: 0;
  top: 0;
  width: 196px;
  height: 308px;
  z-index: 1;
}

.vote-button {
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  width: 193px;
  height: 54px;
  --border-radius: 25px;
  --border: 2px solid #970A2C;
  --background: #970A2C;
  --box-shadow: none;
}
</style>