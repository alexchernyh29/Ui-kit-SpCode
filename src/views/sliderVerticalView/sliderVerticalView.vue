<template style="position:relative">
    <div class="app">
        <transition name="slide-fade" mode="out-in">
            <!-- <slidsContent :items="slides"/> -->
            <component
            :is="'slidsContent'"
            :key="currentSlide"
            :items="slides[currentSlide]"
          />
        </transition>
    </div>
    <div class="controls">
        <button class="slider__button" @click="prevSlide" :class="{ disabled: currentSlide <= 0 }">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"/>
            </svg>
        </button>
        <button class="slider__button" @click="nextSlide" :class="{ disabled: currentSlide > 1 }">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
            </svg>
        </button>
      </div>
  </template>
   
  <script>
 import slidsContent from "/src/components/ui/slidsContent.vue";
   
  export default {
    name: 'App',
    components: {
        slidsContent,
    },
    data() {
      return {
        slides: [
          {
            id: 0,
            img: '/src/assets/images/1.png',
          },
          {
            id: 1,
            img: '/src/assets/images/2.png',
          },
          {
            id: 2,
            img: '/src/assets/images/3.png',
          },
          {
            id: 3,
            img: '/src/assets/images/4.png',
          },
        ],
        currentSlide: 0,
      };
    },
    methods: {
      prevSlide() {
        if (this.currentSlide > 0) {
        this.currentSlide--;
      }
      },
      nextSlide() {
        if (this.currentSlide < this.slides.length - 1) {
        this.currentSlide++;
      }
      },
    },
    props: {
    carousel_data: {
      type: Array,
      default: () => [],
    },
  },
  };
  </script>

<style scoped>
.app{
    width: 40vw;
    overflow: hidden;
    position: relative;
}
.controls {
    position: absolute;
    max-width: 770px;
    width: 51%;
    top: 46%;
    left: 70%;
    transform: translateX(-50%);
    display: flex;
    justify-content: space-between;
}
.slide-fade-enter-active {
    transition: all 0.8s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from {
    transform: translateX(-100%);
    opacity: 0;
}
.slide-fade-leave-to {
    transform: translateX(100%);
    opacity: 0;
}
.slider__button {
    width: 50px;
    height: 50px;
}
</style>