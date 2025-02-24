<template>
  <BaseLayout>
    <template #main-content>
      <div class="main-section">
        <div class="profile-container">
          <div class="profile-header">
            <img :src="profileImage" alt="Profile" class="profile-image">
            <div class="profile-info">
              <h2>@daniel.martinez</h2>
              <!-- Aquí irían más detalles del perfil -->
            </div>
          </div>
          <div class="achievements">
            <!-- Aquí irían los logros y badges -->
          </div>
        </div>
      </div>
    </template>
  </BaseLayout>
</template>

<script setup>
import BaseLayout from '@/components/BaseLayout.vue';
</script>

<style scoped>
.profile-container {
  background: rgba(151, 10, 44, 0.47);
  border-radius: 25px;
  padding: 20px;
  width: 896px;
  height: 706px;
}
</style> 