<template>
  <div class="achievements-grid" ref="achievementsGrid" :class="{ 'fade-out': shouldHideDesktop }">
    <div 
      v-for="(achievement, index) in achievements" 
      :key="index"
      class="achievement-item"
      :class="{ 'achieved': achievement.achieved, [`achievement-${index}`]: true }"
      @click="handleClick(index)"
      @mouseenter="handleMouseEnter(index)"
      @mouseleave="handleMouseLeave"
      @touchstart="handleTouchStart(index)"
      @touchend="handleTouchEnd"
    >
      <img src="../../../../assets/images/archievements/arch.png" alt="Achievement badge" />
      
      <!-- Tooltip -->
      <div 
        v-if="activeTooltip === index" 
        class="achievement-tooltip"
        :class="`tooltip-${index}`"
        :style="getTooltipPosition(index)"
      >
        <h3>{{ achievement.title }}</h3>
        <p>{{ achievement.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Achievements',
  data() {
    return {
      activeTooltip: null,
      shouldHideDesktop: false,
      isMobile: false,
      touchTimer: null,
      achievements: [
        { title: 'Nuevo DJ', description: 'Solicita tu primera canción', achieved: false },
        { title: 'DJ en Entrenamiento', description: 'Solicita 10 canciones', achieved: false },
        { title: 'Experto de Expertos', description: 'Solicita 100 canciones', achieved: false },
        { title: 'El Pueblo ha Hablado', description: 'Emite tu primer voto', achieved: false },
        { title: 'Votante Concurrente', description: 'Vota 10 veces', achieved: false }, 
        { title: 'Veterano de la República', description: 'Vota 100 veces', achieved: false },
        { title: 'Victoria del Pueblo', description: 'Gana una canción que votaste', achieved: false },
        { title: 'La Décima Victoria', description: 'Gana 10 veces con tus votos', achieved: false },
        { title: 'Mastermind', description: 'Gana 100 veces con tus votos', achieved: false }
      ]
    }
  },
  mounted() {
    this.checkContainerSize();
    this.checkIfMobile();
    window.addEventListener('resize', this.checkContainerSize);
    window.addEventListener('resize', this.checkIfMobile);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkContainerSize);
    window.removeEventListener('resize', this.checkIfMobile);
  },
  methods: {
    checkIfMobile() {
      this.isMobile = window.innerWidth <= 768;
    },
    checkContainerSize() {
      const container = this.$refs.achievementsGrid;
      if (!container) return;
      
      const containerWidth = container.offsetWidth;
      const minWidthNeeded = 300;
      
      // Only hide on desktop
      this.shouldHideDesktop = !this.isMobile && containerWidth < minWidthNeeded;
    },
    handleClick(index) {
      if (!this.isMobile) {
        if (this.achievements[index].achieved) {
          this.activeTooltip = index;
        }
      }
    },
    handleTouchStart(index) {
      if (this.isMobile) {
        this.touchTimer = setTimeout(() => {
          this.activeTooltip = index;
        }, 500);
      }
    },
    handleTouchEnd() {
      if (this.isMobile) {
        clearTimeout(this.touchTimer);
        setTimeout(() => {
          this.activeTooltip = null;
        }, 2000);
      }
    },
    handleMouseEnter(index) {
      if (!this.isMobile && !this.achievements[index].achieved) {
        this.activeTooltip = index;
      }
    },
    handleMouseLeave() {
      if (!this.isMobile) {
        this.activeTooltip = null;
      }
    },
    getTooltipPosition(index) {
      if (this.isMobile) {
        return {
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '80%',
          maxWidth: '300px'
        }
      }
      
      const row = Math.floor(index / 3);
      const totalRows = Math.ceil(this.achievements.length / 3);
      
      if (row === totalRows - 1) {
        return {
          bottom: '100%',
          top: 'auto',
          transform: 'translateY(-10px)'
        }
      }
      return {}
    }
  }
}
</script>

<style scoped>
.achievements-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 2rem auto;
  padding: 2rem;
  background: rgba(42, 42, 42, 0.6);
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 2px solid #650d22;
  opacity: 1;
  visibility: visible;
  transition: opacity 0.5s ease, visibility 0.5s ease;
}

.achievements-grid.fade-out {
  opacity: 0;
  visibility: hidden;
}

.achievement-item {
  position: relative;
  cursor: pointer;
  width: 40%;
  margin: 0 auto;
  transition: transform 0.3s ease;
}

.achievement-item:hover {
  transform: scale(1.1);
}

.achievement-item img {
  width: 100%;
  height: auto;
  transition: all 0.3s ease;
  border-radius: 15px;
  filter: drop-shadow(0 4px 8px rgba(133, 0, 0, 0.2)) brightness(1.1) contrast(1.1);
}

.achievement-item:not(.achieved) img {
  opacity: 0.5;
  filter: grayscale(100%) brightness(0.7) contrast(0.9);
}

/* Achievement specific filters */
.achievement-0 img { filter: drop-shadow(0 0 8px rgba(255, 0, 0, 0.6)) brightness(1.2); }
.achievement-1 img { filter: drop-shadow(0 0 8px rgba(0, 255, 0, 0.6)) brightness(1.2); }
.achievement-2 img { filter: drop-shadow(0 0 8px rgba(0, 0, 255, 0.6)) brightness(1.2); }
.achievement-3 img { filter: drop-shadow(0 0 8px rgba(255, 255, 0, 0.6)) brightness(1.2); }
.achievement-4 img { filter: drop-shadow(0 0 8px rgba(255, 0, 255, 0.6)) brightness(1.2); }
.achievement-5 img { filter: drop-shadow(0 0 8px rgba(0, 255, 255, 0.6)) brightness(1.2); }
.achievement-6 img { filter: drop-shadow(0 0 8px rgba(128, 0, 128, 0.6)) brightness(1.2); }
.achievement-7 img { filter: drop-shadow(0 0 8px rgba(128, 128, 0, 0.6)) brightness(1.2); }
.achievement-8 img { filter: drop-shadow(0 0 8px rgba(0, 128, 128, 0.6)) brightness(1.2); }

.achievement-tooltip {
  position: absolute;
  right: -180px;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 25px;
  background: rgba(42, 42, 42, 0.95);
  box-shadow: 0 8px 16px rgba(133, 0, 0, 0.3);
  width: 200px;
  min-height: 100px;
  padding: 1rem;
  z-index: 10;
  color: #FFFFFF;
  backdrop-filter: blur(5px);
}

/* Tooltip glow effects */
.tooltip-0 { box-shadow: 0 0 15px rgba(255, 0, 0, 0.3); }
.tooltip-1 { box-shadow: 0 0 15px rgba(0, 255, 0, 0.3); }
.tooltip-2 { box-shadow: 0 0 15px rgba(0, 0, 255, 0.3); }
.tooltip-3 { box-shadow: 0 0 15px rgba(255, 255, 0, 0.3); }
.tooltip-4 { box-shadow: 0 0 15px rgba(255, 0, 255, 0.3); }
.tooltip-5 { box-shadow: 0 0 15px rgba(0, 255, 255, 0.3); }
.tooltip-6 { box-shadow: 0 0 15px rgba(128, 0, 128, 0.3); }
.tooltip-7 { box-shadow: 0 0 15px rgba(128, 128, 0, 0.3); }
.tooltip-8 { box-shadow: 0 0 15px rgba(0, 128, 128, 0.3); }

.achievement-tooltip h3 {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: #FFFFFF;
  text-align: center;
  font-weight: bold;
}

.achievement-tooltip p {
  font-size: 0.9rem;
  margin: 0;
  color: #E0E0E0;
  text-align: center;
  line-height: 1.4;
}

@media (max-width: 768px) {
  .achievements-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    padding: 1rem;
    margin: 1rem auto;
  }
  
  .achievement-item {
    width: 50%;
  }
  
  .achievement-tooltip {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    max-width: 300px;
    height: auto;
    font-size: 0.9rem;
    z-index: 1000;
  }
}
</style>
