<template>
    <div style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
        <h1 style="padding-bottom: 15px;">Компонет Accardion</h1>
        <FaqCollapse title="title accordion" text="info accordion"/>
    </div>
</template>

<script setup>
import FaqCollapse from '../../components/ui/faq-collapse.vue';


</script>

<style scoped>

.wrap__link {
    display: flex;
    flex-direction: column;
}
</style>