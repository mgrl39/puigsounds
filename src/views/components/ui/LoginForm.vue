<template>
  <div class="form-container">
    <label class="input-label">Username</label>
    <input class="custom-input" type="text" placeholder="Username" v-model="username" />

    <label class="input-label">Password</label>
    <input class="custom-input" type="password" placeholder="Password" v-model="password" />
    
    <div class="remember-me">
      <input type="checkbox" id="remember" />
      <label for="remember">Remember me</label>
    </div>
    
    <button class="login-button" @click="login">Login</button>
    <p class="signup-text">Don't have an account? <a href="#">Sign Up</a></p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const username = ref('');
const password = ref('');

const login = () => {
  console.log('Iniciar sesión con', username.value, password.value);
};
</script>

<style scoped>
.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.input-label {
  display: flex;
  width: 353px;
  height: 22px;
  color: #FFF;
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 28px;
  margin-bottom: 5px;
}

.custom-input {
  display: flex;
  width: 100%; /* Cambiado a 100% para ser más responsivo */
  max-width: 353px; /* Mantiene el ancho máximo */
  height: 43px;
  padding: 16px 20px;
  border-radius: 15px;
  border: 2px solid #CFCFD8;
  background: #CFCFD8;
  margin-bottom: 15px;
  outline: none;
}

.remember-me {
  display: flex;
  align-items: center;
  color: #FFF;
  margin-bottom: 20px;
}

.login-button {
  width: 368px;
  height: 54px;
  border: none;
  border-radius: 15px;
  background-color: #970A2C;
  color: white;
  font-family: Inter, sans-serif;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
  opacity: 0.8;
}

.signup-text {
  color: #FFF;
  margin-top: 20px;
}

.signup-text a {
  color: #FFD700;
  text-decoration: none;
}
</style>
