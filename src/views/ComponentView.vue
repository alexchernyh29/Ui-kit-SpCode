<template>
  <div>
      <h1>Выбери нужный компонент</h1>
      <div>
          <div class="wrap__link">
              <RouterLink to="/about">Accordion</RouterLink>
              <RouterLink to="/about">Breadcrumb</RouterLink>
              <RouterLink to="/about">Button</RouterLink>
              <RouterLink to="/about">Tabs</RouterLink>
              <RouterLink to="/about">Dropdown</RouterLink>
          </div>
          <div class="wrap__link">
              <RouterLink to="/about">Switcher</RouterLink>
              <RouterLink to="/about">Toggle</RouterLink>
              <RouterLink to="/about">Tooltip</RouterLink>
              <RouterLink to="/about">Video</RouterLink>
          </div>
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