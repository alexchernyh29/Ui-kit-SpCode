<template>
    <div style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
        <h1 style="padding-bottom: 15px;">Компонет Tooltip</h1>
        <Tooltip style="margin: 30px;" text="это наш крутой лого" >Tooltip defailt</Tooltip>
        <Tooltip style="margin: 30px;" text="это наш крутой лого" cssClass="left">Tooltip left</Tooltip>
        <Tooltip style="margin: 30px;" text="это наш крутой лого" cssClass="right">Tooltip right</Tooltip>
        <Tooltip style="margin: 30px;" text="это наш крутой лого" cssClass="bottom">Tooltip bottom</Tooltip>
    </div>
</template>

<script setup>
import Tooltip from '../../components/ui/tooltip.vue';
import LogoIcon from '../../components/icons/IconLogo.vue';
</script>

<style scoped>

.wrap__link {
    display: flex;
    flex-direction: column;
}
</style>