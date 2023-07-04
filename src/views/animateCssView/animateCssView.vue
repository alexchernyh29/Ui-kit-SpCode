<template>
  <div>
    <h1>Выбери нужный раздел</h1>
    <div class="wrap__link">
      <RouterLink to="/animate/animateCssView/animateBackgroundView">Animate Background</RouterLink>
      <RouterLink to="/animate/animateCssView/animateImageView">Animate Image</RouterLink>
      <RouterLink to="/animate/animateCssView/animateImageColorView">Animate Image Color</RouterLink>
      <RouterLink to="/animate/animateCssView/animateTextView">Animate Text</RouterLink>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>

.wrap__link {
  display: flex;
  flex-direction: column;
}
</style>