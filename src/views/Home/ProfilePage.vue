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
          <MusicStats />
        </div>
        <div style="position: relative; background-color: green; width: auto; height: 50px; margin-left: auto;">
            <CustomButton text="Edit" />
            <CustomButton text="Change Account" />
          </div>
        </div>
      </div>
    </template>
  </BaseLayout>
</template>

<script setup>
import BaseLayout from '@/views/components/layout/BaseLayout.vue';
import ImageProfile from '@/views/components/ui/ImageProfile.vue';
import RankBox from '@/views/components/rankings/RankBox.vue';
import CustomButton from '@/views/components/clickable/CustomButton.vue';
import MusicStats from '@/views/components/ui/MusicStats.vue';
</script>

<style scoped>
.profile-info {
  display: flex;
  align-items: center;
}

.stats-container {
  margin-top: -40px;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style> 