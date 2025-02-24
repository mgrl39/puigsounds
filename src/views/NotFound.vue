<template>
  <div class="not-found">
    <div class="not-found__content">
      <h1 class="not-found__title">404</h1>
      <p class="not-found__text">Ups, parece que te has perdido!</p>
      <p class="not-found__text">No te preocupes, puedes volver al inicio</p>
      <router-link to="/" class="not-found__button not-found__button-home red-button">
        Clicando aquí
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style scoped>
.not-found {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
}

.not-found__content {
  text-align: center;
  max-width: 600px;
  width: 100%;
}

.not-found__title {
  font-size: 6rem;
  margin-bottom: 1rem;
  color: #970A2C;
}

.not-found__text {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.not-found__button {
  display: flex;
  padding: 16px 0px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 25px;
  border: 2px solid #970A2C;
  background: #970A2C;
  color: white;
  font-size: 18px;
  cursor: pointer;
  transition: all 100ms ease-out;
  text-decoration: none;
  width: 90%;
  max-width: 368px;
  height: auto;
  min-height: 54px;
  margin: 2rem auto 0;
}

.not-found__button:hover {
  background: #7c0824;
  border-color: #7c0824;
}

@media (max-width: 480px) {
  .not-found__title {
    font-size: 4rem;
  }
  
  .not-found__text {
    font-size: 1rem;
  }
}
</style>
