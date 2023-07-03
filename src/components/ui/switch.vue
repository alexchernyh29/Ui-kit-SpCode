<template>
    <input type="checkbox" id="switch" /><label for="switch">Toggle</label>
</template>

<script setup>

</script>

<style scoped>
input[type=checkbox]{
  height: 0;
  width: 0;
  visibility: hidden;
}

label {
  cursor: pointer;
  text-indent: -9999px;
  width: 100px;
  height: 50px;
  background: #FFFFFF;
  border: 4px solid #538EFF;
  display: block;
  border-radius: 100px;
  position: relative;
}

label:after {
  content: '';
  position: absolute;
  top: 6px;
  left: 10px;
  width: 30px;
  height: 30px;
  background: #538EFF;
  border-radius: 90px;
  transition: 0.3s;
}

input:checked + label {
  background: #FFFFFF;
}

input:checked + label:after {
  left: calc(100% - 5px);
  transform: translateX(-100%);
}

label:active:after {
  width: 50px;
}
</style>