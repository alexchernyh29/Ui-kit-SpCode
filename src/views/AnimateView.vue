<template>
  <div>
      <h1>Выбери нужный раздел</h1>
      <div class="wrap__link">
        <RouterLink to="/animate/animateCssView">CSS Animate</RouterLink>
        <RouterLink to="/animate/animateGsapView">GSAP</RouterLink>
        <RouterLink to="/animate/animateVueView">VUE</RouterLink>
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