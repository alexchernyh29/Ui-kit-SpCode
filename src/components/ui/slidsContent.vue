<template>
    <div class="slidsContent">
      <div class="slides">
        <div class="slide">
          <img :src="items.img" :alt="items.title">
        </div>
      </div>
      <!-- <div class="controls">
        <button class="prev" v-on:click="show = !show" @click="prevSlide">Назад</button>
        <button class="next" v-on:click="show = !show" @click="nextSlide">Вперёд</button>
      </div> -->
    </div>
  </template>
   
  <script>
  export default {
    name: 'slidsContent',
    props: {
      items: {
        type: Object,
        default: () => {},
      },
    },
  };
  </script>
   
  <style scoped>
  .slider {
    position: relative;
    width: 100%;
    height: 400px;
    overflow: hidden;
  }
   
  .slides {
    display: flex;
    width: calc(100% * 4);
    height: 100%;
    transition: transform 0.4s ease-in-out;
  }
   
  .slide {
    flex-shrink: 0;
    width: 25%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
   
  .slide img {
    max-width: 600px;
    width: 100%;
    max-height: 100%;
    object-fit: cover;
    border-radius: 20px;
  }
   
  .caption {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 20px;
    color: #fff;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    background-color: #043873;
    width: 100%;
  }
  </style>