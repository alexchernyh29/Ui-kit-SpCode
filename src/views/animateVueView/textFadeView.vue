<template>
    <div id="example-1">
        <button @click="visible = !visible">
            трахтибидох
        </button>
        <transition name="slide-fade">
            <p v-if="visible">привет</p>
        </transition>
    </div>
</template>
  
<script>
import {ref} from "vue"

export default {
    setup() {
        const visible = ref(false);
        return {visible};
    }
}
</script>
  
<style scoped>
.slide-fade-enter-active {
    transition: all .3s ease;
}
.slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active до версии 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
}
</style>