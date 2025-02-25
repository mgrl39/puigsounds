<template>
  <BaseLayout>
    <template #main-content>
      <div class="main-section">
        <div class="profile-container">
          <div class="profile-header">
            <div class="profile-info" style="display: flex; align-items: center;">
              <ImageProfile />
              <div class="stats-container" style="margin-left: 20px; display: flex; flex-direction: column; gap: 10px;">
                <RankBox rank-type="GLOBAL" />
                <RankBox rank-type="DAW" />
              </div>
            </div>  
          </div>
          <MusicStats />
        </div>
        <CustomButton />
      </div>
    </template>
  </BaseLayout>
</template>

<script setup>
import BaseLayout from '@/components/BaseLayout.vue';
import ImageProfile from '../components/ui/ImageProfile.vue';
import RankBox from '../../components/RankBox.vue';
import CustomButton from '../components/Clickable/CustomButton.vue';
import MusicStats from '../components/ui/MusicStats.vue';
</script>

<style scoped>
.profile-info {
  display: flex;
  align-items: center;
}

.stats-container {
  margin-top: -60px;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style> 