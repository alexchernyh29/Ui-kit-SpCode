<template>
  <div>
      <h1>Выбери нужный компонент</h1>
      <div>
          <div class="wrap__link">
              <RouterLink to="/component/accordion">Accordion</RouterLink>
              <RouterLink to="/component/breadcrumb">Breadcrumb</RouterLink>
              <RouterLink to="/component/button">Button</RouterLink>
              <RouterLink to="/component/tabs">Tabs</RouterLink>
              <RouterLink to="/component/dropdown">Dropdown</RouterLink>
          </div>
          <div class="wrap__link">
              <RouterLink to="/component/switch">Switcher</RouterLink>
              <RouterLink to="/bad">Toggle</RouterLink>
              <RouterLink to="/component/tooltip">Tooltip</RouterLink>
              <RouterLink to="/bad">Video</RouterLink>
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