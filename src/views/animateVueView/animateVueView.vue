<template>
    <div>
        <h1>Выбери нужный раздел</h1>
        <div class="wrap__link">
            <RouterLink to="/animate/animateVueView/textFadeView">Animate Text Fade</RouterLink>
            <RouterLink to="/animate/animateVueView/textBounceView">Animate Bounce Text</RouterLink>
            <RouterLink to="/animate/animateVueView/textTransitionsView">Animate Text Transitions</RouterLink>
            <RouterLink to="/animate/animateVueView/textListView">Animate List</RouterLink>
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