<template>
  <!-- Sección lateral derecha (común en todas las páginas) -->
  <div class="right-section">
    <CurrentSong />
    <div class="student-counter">
      <h2>ESTUDIANTES</h2>
      <div class="counter">{{ studentCount }}</div>
      <div class="next-bell">
        Próximo timbre en:
        <div class="timer">{{ formatTime(timeUntilNextBell) }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      studentCount: 1014,
      timeUntilNextBell: 7199 // segundos (1:59:59)
    }
  },
  methods: {
    formatTime(seconds) {
      const hours = Math.floor(seconds / 3600);
      const minutes = Math.floor((seconds % 3600) / 60);
      const secs = seconds % 60;
      return `${hours}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }
  }
}
</script>

<style scoped>
.student-counter {
  background-color: #f5f5f5;
  padding: 1rem;
  border-radius: 8px;
  margin: 1rem 0;
}

.counter {
  font-size: 2.5rem;
  font-weight: bold;
  color: #2c3e50;
  margin: 0.5rem 0;
}

.next-bell {
  font-size: 1rem;
  color: #666;
}

.timer {
  font-size: 1.5rem;
  font-weight: bold;
  color: #e74c3c;
  margin-top: 0.5rem;
}
</style>