<template>
    <div>
        <button @click="visible = !visible">
            трахтибидох
        </button>
        <transition name="bounce">
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
.bounce-enter-active {
    animation: bounce-in 0.5s;
}
.bounce-leave-active {
    animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
    0% {
        transform: scale(0);
    }
    50% {
        transform: scale(1.25);
    }
    100% {
        transform: scale(1);
    }
}
</style>