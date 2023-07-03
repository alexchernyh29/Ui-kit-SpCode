<template>
    <div style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
        <h1 style="padding-bottom: 15px;">Компонет Dropdown</h1>
        <Dropdown/>
    </div>
</template>

<script setup>
import Dropdown from '../../components/ui/dropdown.vue';
</script>

<style scoped>

.wrap__link {
    display: flex;
    flex-direction: column;
}
</style>