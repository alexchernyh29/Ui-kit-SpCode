<template>
    <div>
        <h1>Выбери нужный раздел</h1>
        <div class="wrap__link">
          <RouterLink to="/animate/animateGsapView/bounseOutView">Bounse out</RouterLink>
          <RouterLink to="/animate/animateGsapView/bounseUpView">Bounse up</RouterLink>
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