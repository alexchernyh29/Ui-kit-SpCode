<template>
  <div>
    <h1>Я обретаю цвет при наведении</h1>
    <div class="animate">
      <img alt="Vue logo" class="first" src="@/assets/logo-color.png"/>
      <img alt="Vue logo" class="second" src="@/assets/logo.png"/>
    </div>
  </div>
</template>

<script setup>
</script>

<style>
.animate{
  position:relative;
  margin:0 auto;
  width: 170px;
  height: 70px;              
}

.animate img {
  position:absolute;
  left: 0;
  top: 0; 
}

.animate img.first {
  opacity:0;
  filter:alpha (opacity=0);
}

.animate:hover img.first {
  opacity:1;
  filter:alpha (opacity=100);
}

.animate:hover img.second, .animate img.second:hover {
  opacity:0;
  filter:alpha (opacity=0);
}

.animate:hover img.second, .animate img.second:hover {
  opacity:0;
  filter:alpha (opacity=0);
  -moz-transition: all 2s ease;
  -webkit-transition: all 2s ease;
  -o-transition: all 2s ease;
  transition: all 2s ease;
}
</style>