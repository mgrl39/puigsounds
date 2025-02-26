<template>
  <BaseLayout>
    <template #main-content>
      <div class="main-section">
        <div class="song-cards">
            <SongCarousel />
          </div>
          <div class="votes-graph">
            <hr style="display: none;">
            <br><br><br>
            <VotingChar />
          </div>
      </div>
    </template>
  </BaseLayout>
</template>

<script setup>
import BaseLayout from '@/views/components/layout/BaseLayout.vue';
import SongCarousel from '@/views/components/clickable/SongCarousel.vue';
import VotingChar from '@/views/components/dashboard/VotingChar.vue';
</script>

<style scoped>
/*
  .vote-container {
    background: rgba(151, 10, 44, 0.47);
    border-radius: 25px;
    padding: 20px;
    width: 896px;
    height: 706px;
  }
*/
</style> 