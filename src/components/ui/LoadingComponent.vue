<template>
  <div class="loader-container">
    <div class="loader"></div>
  </div>
</template>

<style scoped>
.loader-container {
  flex-grow: 1;
  display: flex;
  align-items: center;
}

.loader {
  width: 60px;
  aspect-ratio: 4;
  --c: var(--text-color-green) 90%, #0000;
  background:
    radial-gradient(circle closest-side at left 6px top 50%, var(--c)),
    radial-gradient(circle closest-side, var(--c)),
    radial-gradient(circle closest-side at right 6px top 50%, var(--c));
  background-size: 100% 100%;
  background-repeat: no-repeat;
  animation: l4 1s infinite alternate;
}
@keyframes l4 {
  to {
    width: 25px;
    aspect-ratio: 1;
  }
}
</style>
