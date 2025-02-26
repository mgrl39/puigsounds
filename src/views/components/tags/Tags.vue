<template>
  <ion-chip :style="estilos">
    <ion-label>{{ texto }}</ion-label>
  </ion-chip>
</template>

<script setup>
import { computed } from "vue";
import { IonChip, IonLabel } from "@ionic/vue";

const props = defineProps({
  texto: String, // El nombre del tag (SMX, DAW, DAM, ASIX)
});

// Definir los colores asociados a cada texto
const colores = {
  SMX: { colorTexto: "#008518", colorFondo: "#DCFFE0" },
  DAW: { colorTexto: "#6223A9", colorFondo: "#D1ADFF" },
  DAM: { colorTexto: "#242DD8", colorFondo: "#BAD8FF" },
  ASIX: { colorTexto: "#850000", colorFondo: "#FFD0D0" },
};

// Calcular estilos automáticamente según el texto
const estilos = computed(() => {
  const { colorTexto, colorFondo } = colores[props.texto] || {
    colorTexto: "#000000",
    colorFondo: "#E0E0E0",
  };
  return {
    color: colorTexto,
    background: colorFondo,
    borderRadius: "5px",
    padding: "5px 10px",
    fontWeight: "bold",
    fontSize: "16px",
  };
});
</script>

<style scoped>
ion-chip {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
}
</style>
