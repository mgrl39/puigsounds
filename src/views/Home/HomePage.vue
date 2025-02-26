<template>
  <BaseLayout>
    <template #main-content>
      <NextBellIn />
      <ChampionsBanner class="bottom-banner" />
    </template>
  </BaseLayout>
</template>

<script setup>
import { ref } from 'vue';
import BaseLayout from '../components/layout/BaseLayout.vue';
import ChampionsBanner from '../components/background/ChampionsBanner.vue';
import NextBellIn from '../components/ui/NextBellIn.vue';

</script>

<style scoped>
.main-section {
  flex: 1;
  min-width: 0;
}

.content-container {
  display: flex;
  gap: 20px;
}

.ranking-container {
  width: 450px;
  height: 706px;
  border-radius: 25px;
  background: rgba(151, 10, 44, 0.47);
  border: 10px solid rgba(151, 10, 44, 0.47);
}

.music-stats {
  margin-left: 20px;
}

</style> 