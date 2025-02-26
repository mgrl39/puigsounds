<template>
  <BaseLayout>
    <template #main-content>
      <div class="main-section">
        <div class="right-section">
            <RankingList :ranked-users="rankedUsers" />
            <button class="popup-button" @click="openPopup('¡Este es un mensaje de prueba!')">
              Mostrar Popup
            </button>
          </div>
      </div>
      <BasePopupOk
        type="server" 
        :is-visible="showPopup"
        logo-path="../../../assets/images/logos/puig-mini.png"
        @close="showPopup = false"
      />
    </template>
  </BaseLayout>
</template>

<script setup>
import { ref } from 'vue';
import BaseLayout from '../components/layout/BaseLayout.vue';
import RankingList from '../components/clickable/RankingList.vue';
import BasePopupOk from '../components/popups/BasePopupOk.vue';

const rankedUsers = ref([
  { name: 'Yassine', points: 4842, image: '../../../assets/images/profile-pic/pic-yassine.png' },
  { name: 'Brenda', points: 5313, image: '../../../assets/images/profile-pic/pic-brenda.png' },
  { name: 'CarlosIsaias', points: 2351, image: '../../../assets/images/profile-pic/pic-carlos.png' },
  { name: 'Rohan', points: 1512, image: '../../../assets/images/profile-pic/pic-rohan.png' },
  { name: 'Neil', points: 1114, image: '../../../assets/images/profile-pic/pic-neil.png' },
  { name: 'Roly', points: 848, image: '../../../assets/images/profile-pic/pic-roly.png' },
  { name: 'Levi', points: 509, image: '../../../assets/images/profile-pic/pic-levi.png' },
  { name: 'Irene', points: 448, image: '../../../assets/images/profile-pic/pic-irene.png' },
  { name: 'Zakaria', points: 448, image: '../../../assets/images/profile-pic/pic-zaka.png' },
  { name: 'Jordi', points: 448, image: '../../../assets/images/profile-pic/pic-jordi.png' },
]);

const showPopup = ref(false);

const openPopup = (type) => {
  showPopup.value = true;
};
</script>

<style scoped>
.stats-container {
  background: rgba(151, 10, 44, 0.47);
  border-radius: 25px;
  padding: 20px;
  width: 896px;
  height: 706px;
  display: flex;
  gap: 20px;
}

.left-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.right-section {
  width: 450px;
}

.global-rank {
  background: rgba(151, 10, 44, 0.3);
  border-radius: 15px;
  padding: 20px;
}

.global-rank h2, .global-rank h3 {
  margin: 0;
  color: white;
}

.musical-genres {
  background: rgba(151, 10, 44, 0.3);
  border-radius: 15px;
  padding: 20px;
  flex: 1;
}

.musical-genres h3 {
  margin: 0 0 20px 0;
  color: white;
}

.popup-button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: rgba(151, 10, 44, 0.8);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.popup-button:hover {
  background-color: rgba(151, 10, 44, 1);
}

@media (max-width: 768px) {
  .stats-container {
    width: 100%;
    height: auto;
    flex-direction: column;
  }

  .right-section {
    width: 100%;
  }
}
</style>