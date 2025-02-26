<template>
  <div class="ranking-container">
    <div class="ranking-list">
      <div 
        v-for="(user, index) in rankedUsers"
        :key="user.name"
        class="user-item"
      >
        <div class="rank-number">
          <div class="rank-circle">
            {{ index + 1 }}
          </div>
        </div>
        <div class="user-avatar">
          <img :src="user.image" alt="User avatar" class="avatar-img">
        </div>
        <div class="user-info">
          <h2 class="user-name">{{ user.name }}</h2>
          <p class="user-points">{{ user.points }} points</p>
        </div>
        <div v-if="index < 3" class="trophy-icon">
          <img 
            :src="index === 0 ? '/assets/images/trophy/gold.png' : 
                 index === 1 ? '/assets/images/trophy/silver.png' : 
                 '/assets/images/trophy/bronze.png'"
            :alt="index === 0 ? 'Gold trophy' :
                  index === 1 ? 'Silver trophy' :
                  'Bronze trophy'"
            class="trophy-img"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  rankedUsers: {
    type: Array,
    required: true
  }
});
</script>

<style scoped>
.ranking-container {
  width: 450px;
  height: 706px;
  border-radius: 25px;
  background: rgba(151, 10, 44, 0.47);
  border: 10px solid rgba(151, 10, 44, 0.47);
  padding: 16px;
  overflow-y: auto;
}

.ranking-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.user-item {
  width: 327px;
  height: 92px;
  flex-shrink: 0;
  border-radius: 20px;
  background: var(--Neutral-White, #FFF);
  display: flex;
  align-items: center;
  padding: 0 16px;
  position: relative;
}

.rank-number {
  margin-right: 16px;
}

.rank-circle {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  border-radius: 50%;
  border: 1.5px solid var(--Neutral-Grey-4, #E6E6E6);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--Neutral-Grey-2, #858494);
  text-align: center;
  font-family: Rubik, sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
}

.user-avatar {
  margin-right: 16px;
}

.avatar-img {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
}

.user-info {
  flex: 1;
}

.user-name {
  color: var(--Neutral-Black, #0C092A);
  font-family: Rubik, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  margin: 0;
  padding: 0;
}

.user-points {
  color: var(--Neutral-Grey-2, #858494);
  font-family: Rubik, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  margin: 0;
  padding: 0;
}

.trophy-icon {
  font-size: 24px;
  margin-left: 16px;
}
</style> 