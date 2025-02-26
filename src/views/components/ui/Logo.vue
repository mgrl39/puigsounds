<template>
  <div class="logo-container">
    <img src="../../../../favicon.png" class="logo" alt="Logo" />
    <h1 class="title"><span class="title-span-puig">Puig</span><span class="title-span-sounds">Sounds</span></h1>
  </div>
</template>

<style scoped>
.logo-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding-left:10px;
  width: 100%;
  /* margin-bottom: 20px; */
}

.title-span-puig {
  color: #FFF;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.title-span-sounds {
  color: #CACACA;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  /* El color #CACACA es un gris claro que da apariencia de opacidad baja */
}

.logo {
  width: 76px;
  height: 71px;
  flex-shrink: 0;
  object-fit: contain;
  margin-right: 10px;
  margin-left: 0;
  /* No tiene opacidad configurada, se muestra al 100% */
}

.title {
  color: #CACACA;
  font-family: Montserrat, sans-serif;
  font-size: 40px;
  font-weight: 700;
  line-height: normal;
  /* El color #CACACA es un gris claro que da apariencia de opacidad baja */
}
</style>
