<template>
  <div class="title-container">
    <h1 class="app-title">Puig<span class="highlight">Sounds</span></h1>
  </div>
</template>

<script>
export default {
  name: "AppTitle"
};
</script>

<style scoped>
.title-container {
  width: 412px;
  height: 73px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.app-title {
  font-family: Montserrat, sans-serif;
  font-size: 40px;
  font-weight: 700;
  line-height: normal;
  color: #fff;
  text-align: center;
}

.highlight {
  color: #CACACA;
}
</style>
