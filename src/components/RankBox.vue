<template>
  <div class="rank-container">
    <div class="rank-type">{{ rankType }}</div>
    <div class="rank-number">#{{ randomRank }}</div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
  rankType: {
    type: String,
    default: 'GLOBAL',
    validator: value => ['GLOBAL', 'DAW', 'ASIX', 'DAM', 'SMX'].includes(value)
  }
});

const randomRank = ref(0);

const generateRandomRank = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

onMounted(() => {
  // Generar números diferentes para Global y DAW Rank
  if(props.rankType === 'GLOBAL') {
    randomRank.value = generateRandomRank(24, 520);
  } else {
    randomRank.value = generateRandomRank(2, 30);
  }
});
</script>

<style scoped>
.rank-container {
  width: 179px;
  height: 108px;
  border-radius: 25px;
  background: #FFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 15px;
}

.rank-type {
  color: #888;
  font-family: 'Montserrat', sans-serif;
  font-size: 25px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 5px;
  width: 100%;
}

.rank-number {
  color: #434040;
  font-family: 'Montserrat', sans-serif;
  font-size: 50px;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  width: 100%;
}

/* Efecto hover para interactividad */
.rank-container:hover {
  transform: translateY(-2px);
  transition: transform 0.2s ease;
}
</style>