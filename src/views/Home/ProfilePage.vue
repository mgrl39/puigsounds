<template>
  <BaseLayout>
    <template #main-content>
      <div class="main-section">
        <div class="profile-container">
          <div class="profile-header">
            <div class="profile-info">
              <ion-img class="profile-pic" src="assets/images/profile-pic/principal-profile-pic.png" alt="Profile" />
              <div class="stats-container">
                <RankBox rank-type="GLOBAL" />
                <RankBox rank-type="DAW" />
              </div>
          </div>
          <MusicStats />
        </div>
        <div class="buttons-container">
            <CustomButton text="Edit" />
            <CustomButton text="Change Account" />
          </div>
        </div>
      </div>
    </template>
  </BaseLayout>
</template>

<script setup>
import { IonImg } from '@ionic/vue';
import BaseLayout from '@/views/components/layout/BaseLayout.vue';
import RankBox from '@/views/components/rankings/RankBox.vue';
import CustomButton from '@/views/components/clickable/CustomButton.vue';
import MusicStats from '@/views/components/ui/MusicStats.vue';
</script>

<style scoped>
.profile-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.profile-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 30px;
}

.profile-info {
  display: flex;
  align-items: center;
}

.profile-pic {
  width: 216px;
  height: 226px;
  flex-shrink: 0;
  border-radius: 10px;
  background: url(assets/images/profile-pic/principal-profile-pic.png) lightgray 50% / cover no-repeat;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}

.stats-container {
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.buttons-container {
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  margin-top: 20px;
}
</style>