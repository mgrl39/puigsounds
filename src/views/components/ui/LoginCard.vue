<template>
  <div class="container">
    <div class="login-card">
      <Logo />
      <LoginForm />
    </div>
  </div>
</template>

<script setup>
import Logo from './Logo.vue';
import LoginForm from './LoginForm.vue';
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
}

.login-card {
  width: 410px;
  height: 354px;
  flex-shrink: 0;
  border-radius: 6px;
  opacity: 0.6;
  background: rgba(151, 10, 44, 0.47);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}
</style>
