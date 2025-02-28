<template>
  <div class="main-container">
    <!-- Imagen superpuesta a la derecha -->
    <ion-img 
      :src="imagePath" 
      class="overlay-image"
      alt="Imagen decorativa"
      :style="{ width: imageWidth + 'px', height: imageHeight + 'px' }"
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

    <!-- Popup personalizado -->
    <BasePopupOk
      type="vote"
      :is-visible="showAlert"
      logo-path="/assets/images/logos/puig-mini.png"
      @close="showAlert = false"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { IonButton, IonImg } from '@ionic/vue';
import Chart from 'chart.js/auto';
import BasePopupOk from '../popups/BasePopupOk.vue';

const chartCanvas = ref(null);
const showAlert = ref(false);
const imagePath = ref('/assets/images/shades/boy-shade.png');

// Dimensiones originales de la imagen
const originalWidth = 196;
const originalHeight = 308;

// Calcula las dimensiones ajustadas manteniendo la proporción
const containerHeight = 362;
const maxImageHeight = containerHeight * 0.85; // 85% del contenedor

const imageScale = computed(() => {
  if (originalHeight > maxImageHeight) {
    return maxImageHeight / originalHeight * 0.75; // Reducir a 75% si es mayor
  } else if (originalHeight > maxImageHeight / 2) {
    return maxImageHeight / originalHeight * 0.5; // Reducir a 50% si es mayor que la mitad
  }
  return maxImageHeight / originalHeight * 0.25; // Reducir a 25% en otros casos
});

const imageWidth = computed(() => Math.round(originalWidth * imageScale.value));
const imageHeight = computed(() => Math.round(originalHeight * imageScale.value));

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
          borderColor: '#AF3030',
          backgroundColor: 'rgba(175, 48, 48, 0.1)',
          borderWidth: 3,
          tension: 0.4,
          fill: true,
          pointBackgroundColor: '#AF3030',
          pointBorderColor: '#FFF',
          pointRadius: 4,
          pointHoverRadius: 6
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: 'rgba(175, 48, 48, 0.9)',
            titleColor: '#FFF',
            bodyColor: '#FFF',
            padding: 12,
            displayColors: false,
            titleFont: {
              family: 'Montserrat',
              size: 14,
              weight: 'bold'
            },
            bodyFont: {
              family: 'Montserrat',
              size: 12
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              color: 'rgba(175, 48, 48, 0.1)',
              drawBorder: false
            },
            ticks: {
              font: {
                family: 'Montserrat',
                size: 12
              },
              color: '#AF3030'
            }
          },
          x: {
            grid: {
              display: false
            },
            ticks: {
              font: {
                family: 'Montserrat',
                size: 12
              },
              color: '#AF3030'
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
  border: 5px solid #AF3030;
  background: linear-gradient(135deg, rgba(175, 48, 48, 0.05) 0%, rgba(175, 48, 48, 0.15) 100%), #FFF;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(175, 48, 48, 0.1);
}

.chart-container {
  position: relative;
  width: 100%;
  height: calc(100% - 70px);
  padding: 20px;
}

.overlay-image {
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;
  opacity: 0.6;
  filter: drop-shadow(0 0 10px rgba(175, 48, 48, 0.2));
}

.vote-button {
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  width: 193px;
  height: 54px;
  --border-radius: 25px;
  --background: #AF3030;
  --background-hover: #8B2626;
  --background-activated: #8B2626;
  --box-shadow: 0 4px 10px rgba(175, 48, 48, 0.3);
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  letter-spacing: 1px;
  transition: all 0.3s ease;
}

.vote-button:hover {
  --box-shadow: 0 6px 15px rgba(175, 48, 48, 0.4);
  transform: translateX(-50%) translateY(-2px);
}

</style>