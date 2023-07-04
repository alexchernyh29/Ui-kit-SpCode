<template>
    <div>
        <h1>Выбери нужный раздел</h1>
        <div class="wrap__link">
            <RouterLink to="/animate/sliderHorizontalView/sliderHorizontalView">Горизонтальные слайдеры</RouterLink>
            <RouterLink to="/about">Вертикальные</RouterLink>
            <RouterLink to="/about">Двойные</RouterLink>
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