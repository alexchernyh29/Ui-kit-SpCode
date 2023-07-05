<template>
    <div>
        <h1>Выбери нужный раздел</h1>
        <div class="wrap__link">
            <RouterLink to="/slider/sliderHorizontalView/sliderHorizontalView">Default slider</RouterLink>
            <RouterLink to="/slider/sliderVerticalView/sliderVerticalView">Анимированный слайдер</RouterLink>
            <RouterLink to="/bad">Вертикальный слайдер</RouterLink>
            <RouterLink to="/bad">Двойной слайдер</RouterLink>
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