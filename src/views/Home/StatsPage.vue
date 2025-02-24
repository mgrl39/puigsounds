<template>
  <BaseLayout>
    <template #main-content>
      <div class="main-section">
        <div class="stats-container">
          <div class="global-rank">
            <h2>GLOBAL #127</h2>
            <h3>DAW RANK #7</h3>
          </div>
          <div class="musical-genres">
            <h3>Musical Genres</h3>
            <!-- Aquí irían las barras de géneros musicales -->
            <MusicStats />
          </div>
        </div>
      </div>
    </template>
  </BaseLayout>
</template>

<script setup>
import BaseLayout from '@/components/BaseLayout.vue';
import MusicStats from '../components/ui/MusicStats.vue';
</script>

<style scoped>
.stats-container {
  background: rgba(151, 10, 44, 0.47);
  border-radius: 25px;
  padding: 20px;
  width: 896px;
  height: 706px;
}
</style> 