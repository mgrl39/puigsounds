<template>
  <div class="user-header">
    <div class="header-content">
      <div class="greeting-container">
        <div class="greeting">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_299_2808)">
              <path d="M9.99996 13.3333C11.8409 13.3333 13.3333 11.8409 13.3333 9.99996C13.3333 8.15901 11.8409 6.66663 9.99996 6.66663C8.15901 6.66663 6.66663 8.15901 6.66663 9.99996C6.66663 11.8409 8.15901 13.3333 9.99996 13.3333Z" stroke="#FFD6DD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M5.25 14.75L4.66667 15.3333M2.5 10H3.33333H2.5ZM10 2.5V3.33333V2.5ZM16.6667 10H17.5H16.6667ZM10 16.6667V17.5V16.6667ZM4.66667 4.66667L5.25 5.25L4.66667 4.66667ZM15.3333 4.66667L14.75 5.25L15.3333 4.66667ZM14.75 14.75L15.3333 15.3333L14.75 14.75Z" stroke="#FFD6DD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <defs>
              <clipPath id="clip0_299_2808">
                <rect width="20" height="20" fill="white"/>
              </clipPath>
            </defs>
          </svg>
          <span class="greeting-text">{{ greetingMessage }}</span>
        </div>
        <h1 class="user-name">{{ userName }}</h1>
      </div>
      <div class="profile-pic-container">
        <img :src="profilePicture" alt="Profile picture" class="profile-pic" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  userName: {
    type: String,
    default: 'Daniel Martinez'
  },
  profilePicture: {
    type: String,
    default: '/assets/images/profile-pic/principal-profile-pic.png'
  },
  greeting: {
    type: String,
    default: ''
  }
});

// Determinar el saludo según la hora del día si no se proporciona uno
const greetingMessage = computed(() => {
  if (props.greeting) return props.greeting;
  
  const hour = new Date().getHours();
  if (hour < 12) return 'GOOD MORNING';
  if (hour < 18) return 'GOOD AFTERNOON';
  return 'GOOD EVENING';
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap');

.user-header {
  width: 100%;
  padding: 16px;
  background-color: #1F1F1F;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.greeting-container {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.greeting {
  display: flex;
  align-items: center;
  gap: 8px;
}

.greeting-text {
  color: #D9D9D9;
  text-align: center;
  font-family: Montserrat, sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: 0.48px;
  text-transform: uppercase;
}

.user-name {
  color: #FFF;
  font-family: Montserrat, sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  margin: 0;
}

.profile-pic-container {
  display: flex;
  justify-content: flex-end;
}

.profile-pic {
  width: 50px;
  height: 50px;
  border-radius: 10px;
  object-fit: cover;
  background-color: lightgray;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}

@media (min-width: 768px) {
  .user-header {
    display: none; /* Ocultar en vista desktop */
  }
}
</style> 