<template>
    <div class="slider">
        <button @click="prevSlider()" class="slider__button">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"/>
            </svg>
        </button>
        <div v-show="sliderActive == index" v-for="(corgi, index) in slider" :key="index">
            <img :src="corgi.path" alt="corgi" class="slider__item-img">
        </div>
        <button @click="nextSlider()" class="slider__button">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
            </svg>
        </button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const slider = ref ([
    {
        name:'1',
        path:'/src/assets/images/1.png'
    },
    {
        name:'2',
        path:'/src/assets/images/2.png'
    },
    {
        name:'3',
        path:'/src/assets/images/3.png'
    },
    {
        name:'4',
        path:'/src/assets/images/4.png'
    },
    {
        name:'5',
        path:'/src/assets/images/5.png'
    },
    {
        name:'6',
        path:'/src/assets/images/6.png'
    },
    {
        name:'7',
        path:'/src/assets/images/7.png'
    },
    {
        name:'9',
        path:'/src/assets/images/9.png'
    },
    {
        name:'10',
        path:'/src/assets/images/10.png'
    },
])

const sliderActive = ref(0)

function prevSlider () {
    if (sliderActive.value) {
        sliderActive.value--
    }else {
        sliderActive.value = slider.value.length - 1
    }
}
function nextSlider () {
    if (sliderActive.value < slider.value.length-1) {
        sliderActive.value++
    }else {
        sliderActive.value = 0
    }
}
</script>

<style scoped>

.slider {
    display: flex;
    justify-content: center;
    align-items: center;
}

.slider__item-img {
    max-width: 300px;
    width: 100%;
    height: 200px;
    border-radius: 20px;
    margin: 0 20px;
}
.slider__button {
    width: 50px;
    height: 50px;
}
</style>