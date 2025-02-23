<template>
  <div class="logo-container">
    <div class="logo"></div>
    <h1 class="title">PuigSounds</h1>
  </div>
</template>

<style scoped>
.logo-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

.logo {
  width: 76px;
  height: 71px;
  flex-shrink: 0;
  background: url('@/assets/favicon.png') lightgray -24.68px -24.73px / 164.433% 179.213% no-repeat;
}

.title {
  width: 274px;
  height: 49px;
  text-align: center;
  color: #CACACA;
  font-family: Montserrat, sans-serif;
  font-size: 40px;
  font-weight: 700;
  line-height: normal;
}
</style>
