<template>
    <div class="card__item">
        <transition-group 
        appear
        tag="ul"
        @before-enter="beforeEnter"
        @enter="enter"
        >
        <li v-for="(icon, index) in icons" :key="icon.name" :data-index="index">
            <span class="icons"><img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /></span>
            <div>{{ icon.text }}</div>
        </li>
        </transition-group>
    </div>
</template>

<script>
import { ref } from 'vue'
import gsap from 'gsap'

export default {
setup() {
    const icons = ref([
    { name: '1', text: 'я первый'},
    { name: '2', text: 'второй'},
    { name: '3', text: 'третий'},
    { name: '4', text: 'четвртый'},
    ])

    const beforeEnter = (el) => {
    el.style.opacity = 0
    el.style.transform = 'translateY(100px)'
    }

    const enter = (el, done) => {
    gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        onComplete: done,
        delay: el.dataset.index * 0.2
    })
    }

    return { icons, beforeEnter, enter }
}
}
</script>

<style>
.card__item ul {
    padding: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    max-width: 400px;
    margin: 60px auto;
}
.card__item li {
    list-style-type: none;
    background: #C4C7CF;
    color: black;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
    cursor: pointer;
    line-height: 1.5em;
}
</style>