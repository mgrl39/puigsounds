<template>
  <div>
    <BaseLayout>
      <template #main-content>
        <!-- Mobile header -->
        <UserHeader class="mobile-header" :userName="userName" />
        
        <div class="main-section">
          <div class="profile-container">
            <!-- Left side -->
            <div class="left-side">
              <div class="profile-info">
                <div class="profile-header">
                  <ion-img class="profile-pic" :src="previewImage || 'assets/images/profile-pic/principal-profile-pic.png'" alt="Profile" />
                  <div class="stats-container">
                    <div class="rank-boxes">
                      <RankBox rank-type="GLOBAL" />
                      <RankBox rank-type="DAW" />
                    </div>
                  </div>
                </div>
              </div>
              <MusicStats class="music-stats" />
            </div>

            <!-- Right side -->
            <div class="right-side">
              <div class="achievements-wrapper">
                <Achievements class="achievements-section" />
              </div>
            </div>
          </div>

          <div class="action-buttons">
            <CustomButton text="Edit" @click="showEditPopup = true" />
            <CustomButton text="Logout" @click="showLogoutPopup = true" />
          </div>
        </div>
      </template>
    </BaseLayout>

    <!-- Edit Profile Popup -->
    <ion-modal :is-open="showEditPopup" class="custom-modal">
      <div class="popup-container">
        <h2 class="modal-title">Editar Perfil</h2>
        <form @submit.prevent="submitForm" class="form">
          <div class="form-group">
            <label for="username">Usuario</label>
            <input type="text" v-model="username" id="username" required class="form-input" />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" v-model="email" id="email" required class="form-input" />
          </div>
          <div class="form-group">
            <label for="password">Contraseña</label>
            <input type="password" v-model="password" id="password" required class="form-input" />
          </div>
          <div class="form-group">
            <label for="profile-image">Imagen de Perfil</label>
            <input type="file" id="profile-image" accept="image/*" class="form-input file-input" @change="handleImageChange" />
          </div>
          <ion-button type="submit" class="submit-button">Guardar Cambios</ion-button>
        </form>
        <ion-button class="close-button" @click="cancelEdit">Cerrar</ion-button>
      </div>
    </ion-modal>

    <!-- Preview Confirmation Popup -->
    <BasePopupOk
      type="preview"
      :is-visible="showPreviewPopup"
      logo-path="/assets/images/logos/profile.png"
      @close="closePreviewPopup"
    />

    <!-- Logout Popup -->
    <PopupOkNo
      :is-visible="showLogoutPopup"
      type="logout"
      logo-path="/assets/images/logos/puig-mini.png"
      @cancel="showLogoutPopup = false"
      @confirm="confirmLogout"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { IonImg, IonModal, IonButton } from '@ionic/vue';
import BaseLayout from '@/views/components/layout/BaseLayout.vue';
import RankBox from '@/views/components/rankings/RankBox.vue';
import CustomButton from '@/views/components/clickable/CustomButton.vue';
import MusicStats from '@/views/components/ui/MusicStats.vue';
import UserHeader from '@/views/components/layout/UserHeader.vue';
import Achievements from '@/views/components/ui/Archievements.vue';
import BasePopupOk from '@/views/components/popups/BasePopupOk.vue';
import PopupOkNo from '@/views/components/popups/PopupOkNo.vue';

const router = useRouter();
const userName = ref('Daniel Martinez');
const showEditPopup = ref(false);
const showPreviewPopup = ref(false);
const showLogoutPopup = ref(false);
const username = ref('');
const email = ref('');
const password = ref('');
const selectedImage = ref(null);
const previewImage = ref(null);

const handleImageChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    selectedImage.value = file;
    const reader = new FileReader();
    reader.onload = (e) => {
      previewImage.value = e.target.result;
    };
    reader.readAsDataURL(file);
  }
};

const submitForm = () => {
  console.log('Form submitted:', {
    username: username.value,
    email: email.value,
    password: password.value,
    image: selectedImage.value
  });
  showEditPopup.value = false;
  showPreviewPopup.value = true;
};

const cancelEdit = () => {
  showEditPopup.value = false;
  previewImage.value = 'assets/images/profile-pic/principal-profile-pic.png';
};

const closePreviewPopup = () => {
  showPreviewPopup.value = false;
};

const confirmLogout = () => {
  showLogoutPopup.value = false;
  router.push('/login');
};
</script>

<style scoped>
.main-section {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.profile-container {
  flex: 1;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
}

.left-side {
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  align-items: center;
}

.profile-info {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
}

.profile-header {
  display: flex;
  align-items: center;
  gap: 20px;
}

.profile-pic {
  width: 216px;
  height: 226px;
  border-radius: 10px;
  object-fit: cover;
  background-color: lightgray;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}

.stats-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
}

.rank-boxes {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
}

.right-side {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}

.achievements-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.achievements-section {
  width: 100%;
  height: 100%;
}

.action-buttons {
  display: flex;
  gap: 20px;
  justify-content: flex-end;
  padding: 0 20px 20px;
}

.mobile-header {
  display: none;
}

/* Modal Styles */
.custom-modal {
  --width: 450px;
  --height: auto;
  --border-radius: 20px;
  --background: #1F1F1F;
}

.popup-container {
  width: 100%;
  padding: 30px;
  background: #2A2A2A;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
}

.modal-title {
  color: #FFF;
  margin-bottom: 20px;
  font-size: 24px;
  text-align: center;
}

.form {
  width: 100%;
}

.form-group {
  margin-bottom: 20px;
  width: 100%;
}

label {
  display: block;
  margin-bottom: 5px;
  color: #FFF;
  font-weight: bold;
}

.form-input {
  width: 100%;
  padding: 12px;
  border: 1px solid #AF3030;
  border-radius: 10px;
  background: #333;
  color: #FFF;
  font-size: 16px;
}

.file-input {
  padding: 8px;
}

.submit-button {
  --background: #970A2C;
  width: 100%;
  margin-top: 10px;
}

.close-button {
  margin-top: 15px;
  --background: #555;
}

@media (max-width: 768px) {
  .mobile-header {
    display: block;
  }

  .profile-container {
    grid-template-columns: 1fr;
    padding-bottom: 20px;
  }

  .profile-header {
    flex-direction: column;
  }

  .profile-info {
    align-items: center;
  }

  .stats-container {
    width: 100%;
    align-items: center;
  }

  .music-stats {
    width: 100%;
  }

  .action-buttons {
    margin-bottom: 70px;
  }
}
</style>