<template>
    <div class="dropdown">
        <input type="checkbox" id="dropdown">
        <label class="dropdown__face" for="dropdown">
            <h4 class="dropdown__text">Dropdown</h4>
            <div class="dropdown__arrow"></div>
        </label>
        <ul class="dropdown__items">
            <li>🙂</li>
            <li>😺</li>
            <li>😽</li>
            <li>😎</li>
            <li>🤗</li>
        </ul>
    </div>
    <svg>
    <filter id="goo">
        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
        <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
        <feBlend in="SourceGraphic" in2="goo" />
    </filter>
    </svg>
</template>

<script setup>

</script>

<style scoped>

.dropdown {
  position: relative;
  width: 230px;
  filter: url(#goo);
}
.dropdown__face, .dropdown__items {
  background-color: #fff;
  padding: 20px;
  border-radius: 25px;
}
.dropdown__face {
  display: block;
  position: relative;
}
.dropdown__text {
    color: #000;
}
.dropdown__items {
  margin: 0;
  position: absolute;
  right: 0;
  top: 50%;
  width: 100%;
  list-style: none;
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  visibility: hidden;
  z-index: -1;
  opacity: 0;
  transition: all 0.4s cubic-bezier(0.93, 0.88, 0.1, 0.8);
}
.dropdown__items::before {
  content: "";
  background-color: #fff;
  position: absolute;
  bottom: 100%;
  right: 20%;
  height: 40px;
  width: 20px;
}
.dropdown__arrow {
  border-bottom: 2px solid #000;
  border-right: 2px solid #000;
  position: absolute;
  top: 50%;
  right: 30px;
  width: 10px;
  height: 10px;
  transform: rotate(45deg) translateY(-50%);
  transform-origin: right;
}
.dropdown input {
  display: none;
}
.dropdown input:checked ~ .dropdown__items {
  top: calc(100% + 25px);
  visibility: visible;
  opacity: 1;
}

.dropdown input:checked > .dropdown__arrow {
    transform: rotate(185deg) translateY(-50%);
}

* {
  box-sizing: border-box;
}

svg {
  display: none;
}
</style>