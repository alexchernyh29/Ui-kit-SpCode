<template>
    <div style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
        <h1 style="padding-bottom: 15px;">Компонет Button</h1>
        <h4>Default button</h4>
        <Button href="/component/button">buttons</Button>
        <h4>Кноипка с logo</h4>
        <Button href="/component/button"><LogoIcon/></Button>
        <h4>Ты не пройдёшь!</h4>
        <Button href="/component/button" cssClass="disabled">buttons</Button>
    </div>
</template>

<script setup>
import Button from '../../components/ui/button.vue';
import LogoIcon from '../../components/icons/IconLogo.vue';
</script>

<style scoped>

.wrap__link {
    display: flex;
    flex-direction: column;
}
</style>