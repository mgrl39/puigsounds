<template>
  <BaseLayout>
    <template #main-content>
      <div class="main-section">
        <div class="vote-container">
          <h2>Tomorrow's Song</h2>
          <div class="song-cards">
            <SongCarousel />
          </div>
          <div class="votes-graph">
            <h3>VOTES: 700</h3>
            <!-- Aquí iría el gráfico de votos -->
          </div>
        </div>
      </div>
    </template>
  </BaseLayout>
</template>

<script setup>
import BaseLayout from '@/views/components/layout/BaseLayout.vue';
import SongCarousel from '@/views/components/clickable/SongCarousel.vue';
</script>

<style scoped>
.vote-container {
  background: rgba(151, 10, 44, 0.47);
  border-radius: 25px;
  padding: 20px;
  width: 896px;
  height: 706px;
}
</style> 