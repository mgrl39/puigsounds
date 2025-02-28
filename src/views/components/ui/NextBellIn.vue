<template>
  <div class="container">
    <!-- Students Card -->
    <div class="students-card" @click="handleStudentsClick">
      <div class="students-text">STUDENTS</div>
      <div class="students-number">{{ studentsCount }}</div>
    </div>

    <!-- Next Bell -->
    <div class="next-bell-text">Next Bell in:</div>
    
    <!-- Countdown -->
    <div class="countdown-container">
      <div class="time-block">
        <div class="time-number">{{ formattedHours }}</div>
        <div class="time-label">Hours</div>
      </div>
      <div class="time-block">
        <div class="time-number">{{ formattedMinutes }}</div>
        <div class="time-label">Minutes</div>
      </div>
      <div class="time-block">
        <div class="time-number">{{ formattedSeconds }}</div>
        <div class="time-label">Seconds</div>
      </div>
    </div>

    <img 
      src="../../../../public/assets/images/shades/girl-shade.png" 
      alt="Illustration"
      class="side-image"
    />

    <PopupOkNo
      type="students"
      :is-visible="showStudentsPopup"
      title="Welcome to El Puig!"
      message="We are a vibrant community of students and teachers working together to create an amazing learning environment. Join us in making education fun and engaging!"
      @cancel="closeStudentsPopup"
      @confirm="closeStudentsPopup"
    />
  </div>
</template>

<script>
import { IonGrid, IonRow, IonCol } from '@ionic/vue';
import { defineComponent, ref } from 'vue';
import PopupOkNo from '../popups/PopupOkNo.vue';

export default defineComponent({
  components: { IonGrid, IonRow, IonCol, PopupOkNo },
  data() {
    return {
      studentsCount: 1014,
      timeLeft: 7199, // 1 hora 59 min 59 seg en segundos
      showStudentsPopup: false
    }
  },
  computed: {
    formattedHours() {
      return Math.floor(this.timeLeft / 3600).toString().padStart(2, '0');
    },
    formattedMinutes() {
      return Math.floor((this.timeLeft % 3600) / 60).toString().padStart(2, '0');
    },
    formattedSeconds() {
      return (this.timeLeft % 60).toString().padStart(2, '0');
    }
  },
  methods: {
    handleStudentsClick() {
      this.showStudentsPopup = true;
    },
    closeStudentsPopup() {
      this.showStudentsPopup = false;
    }
  },
  mounted() {
    this.timer = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        clearInterval(this.timer);
      }
    }, 1000);
  },
  beforeUnmount() {
    clearInterval(this.timer);
  }
});
</script>

<style scoped>
.container {
  padding: 20px;
  background: #f5f5f5;
  border-radius: 25px;
  position: relative;
  overflow: hidden;
  max-width: 100%;
}

.students-card {
  width: 100%;
  max-width: 253px;
  min-height: 108px;
  border-radius: 25px;
  background: #FFF;
  padding: 15px;
  margin-bottom: 20px;
  cursor: pointer;
  transition: transform 0.2s;
}

.students-card:hover {
  transform: scale(1.02);
}

.students-text {
  color: #888;
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(18px, 5vw, 25px);
  font-weight: 700;
  margin-bottom: 5px;
}

.students-number {
  color: #434040;
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(40px, 10vw, 70px);
  font-weight: 700;
  line-height: 0.8;
}

.next-bell-text {
  color: #1F1F1F;
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(18px, 5vw, 25px);
  font-weight: 700;
  margin: 20px 0;
}

.countdown-container {
  display: flex;
  gap: clamp(10px, 3vw, 24px);
  background: #434040;
  padding: clamp(15px, 4vw, 24px);
  border-radius: 15px;
  width: 100%;
  max-width: 365px;
}

.time-block {
  text-align: center;
  flex: 1;
}

.time-number {
  color: #FFF;
  font-family: 'Open Sans', sans-serif;
  font-size: clamp(24px, 6vw, 32px);
  font-weight: 400;
  letter-spacing: 0.32px;
  margin-bottom: 5px;
}

.time-label {
  color: #FFF;
  font-family: 'Open Sans', sans-serif;
  font-size: clamp(9px, 2.5vw, 11px);
  font-weight: 400;
}

.side-image {
  position: absolute;
  right: -75px;
  top: 50%;
  transform: translateY(-50%);
  width: 50%;
  max-width: 300px;
  height: auto;
  opacity: 0.5;
  object-fit: cover;
}

@media (max-width: 480px) {
  .container {
    padding: 15px;
  }
  
  .side-image {
    width: 40%;
    right: -40px;
  }
}

@media (max-width: 360px) {
  .side-image {
    display: none;
  }
  
  .countdown-container {
    padding: 12px;
  }
}

/* Importar fuentes */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Open+Sans&display=swap');
</style>