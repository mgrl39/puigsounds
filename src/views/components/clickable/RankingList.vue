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
        <div class="user-avatar" @click="openImagePopup(user.image)">
          <img :src="user.image" alt="User avatar" class="avatar-img">
        </div>
        <div class="user-info" @click="openUserPopup(user)">
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

    <!-- Popup para la imagen -->
    <ion-modal :is-open="showImagePopup" class="image-popup-modal" @didDismiss="closeImagePopup">
      <div class="image-popup-container">
        <img :src="selectedImage" alt="Profile picture" class="popup-image">
        <ion-button class="close-button" @click="closeImagePopup">
          Cerrar
        </ion-button>
      </div>
    </ion-modal>

    <!-- Popup para el usuario -->
    <ion-modal :is-open="showUserPopup" class="user-popup-modal" @didDismiss="closeUserPopup">
      <div class="user-popup-container">
        <img :src="selectedUser?.image" alt="Profile picture" class="user-popup-image">
        <h3 class="user-popup-name">{{ selectedUser?.name }}</h3>
        <p class="user-popup-email">{{ generateEmail(selectedUser?.name) }}</p>
        <div class="user-popup-buttons">
          <ion-button class="follow-button" @click="handleFollow">
            FOLLOW
          </ion-button>
          <ion-button class="go-back-button" @click="closeUserPopup">
            Go back
          </ion-button>
        </div>
      </div>
    </ion-modal>

    <!-- Popup de confirmación de follow -->
    <BasePopupOk
      type="following"
      :is-visible="showFollowConfirmation"
      logo-path="../../../assets/images/logos/puig-mini.png"
      @close="showFollowConfirmation = false"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { IonModal, IonButton } from '@ionic/vue';
import BasePopupOk from '../popups/BasePopupOk.vue';

const props = defineProps({
  rankedUsers: {
    type: Array,
    required: true
  }
});

const showImagePopup = ref(false);
const showUserPopup = ref(false);
const showFollowConfirmation = ref(false);
const selectedImage = ref('');
const selectedUser = ref(null);

const openImagePopup = (image) => {
  selectedImage.value = image;
  showImagePopup.value = true;
};

const closeImagePopup = () => {
  showImagePopup.value = false;
};

const openUserPopup = (user) => {
  selectedUser.value = user;
  showUserPopup.value = true;
};

const closeUserPopup = () => {
  showUserPopup.value = false;
};

const generateEmail = (name) => {
  if (!name) return '';
  return `${name.toLowerCase()}@elpuig.xeill.net`;
};

const handleFollow = () => {
  showUserPopup.value = false;
  showFollowConfirmation.value = true;
};
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
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  transition: transform 0.2s;
}

.user-item:hover {
  transform: translateY(-2px);
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
  cursor: pointer;
  transition: transform 0.2s;
}

.user-avatar:hover {
  transform: scale(1.1);
}

.avatar-img {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #970A2C;
}

.user-info {
  flex: 1;
  cursor: pointer;
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

/* Estilos mejorados del popup de imagen */
.image-popup-modal {
  --width: 350px;
  --height: 450px;
  --border-radius: 25px;
}

.image-popup-container {
  width: 100%;
  height: 100%;
  background: #131313;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 25px;
  border: 3px solid #af3030;
}

.popup-image {
  width: 250px;
  height: 250px;
  border-radius: 20px;
  object-fit: cover;
  margin-bottom: 20px;
  border: 4px solid #FFF;
  box-shadow: 0 8px 16px rgba(0,0,0,0.2);
  transition: transform 0.3s;
}

.popup-image:hover {
  transform: scale(1.05);
}

.close-button {
  --background: #970A2C;
  --border-radius: 15px;
  width: 120px;
  height: 45px;
  font-weight: bold;
  font-size: 16px;
  margin-top: 20px;
  --box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

/* Estilos mejorados del popup de usuario */
.user-popup-modal {
  --width: 350px;
  --height: 500px;
  --border-radius: 25px;
}

.user-popup-container {
  width: 100%;
  height: 100%;
  background: #131313;
  border-radius: 25px;
  border: 3px solid #af3030;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
}

.user-popup-image {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  border: 4px solid #FFF;
  object-fit: cover;
  margin-bottom: 20px;
  box-shadow: 0 8px 16px rgba(0,0,0,0.2);
}

.user-popup-name {
  font-size: 24px;
  font-weight: bold;
  margin: 10px 0;
}

.user-popup-email {
  font-size: 16px;
  color: rgba(255,255,255,0.8);
  margin-bottom: 30px;
}

.user-popup-buttons {
  display: flex;
  gap: 15px;
  margin-top: 20px;
}

.follow-button, .go-back-button {
  --background: #970A2C;
  --border-radius: 15px;
  --padding-start: 25px;
  --padding-end: 25px;
  height: 45px;
  font-weight: bold;
  font-size: 16px;
}
</style> 