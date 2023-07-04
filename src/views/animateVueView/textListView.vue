<template>
    <div>
        <input v-model="text"/>
        <button @click="addText">
            Добавить текст
        </button>
        <transition-group tag="ul" name="list">
            <li v-for="(text, idx) in items" :key="text" @click="removeText(idx)">
                {{ text }}
            </li>
        </transition-group>
    </div>
</template>
  
<script>
import {ref, reactive} from "vue"

export default {
    setup() {
        const text = ref("");
        const items = reactive(["First item", "Second item"])
        const addText = () => {
            items.push(text.value);
            text.value = "";
        }
        const removeText = (idx) => {
            items.splice(idx,1);
        }
        return {text, items, addText, removeText};
    },
};
</script>
  
<style scoped>
.list-enter-active,
.list-leave-active {
    animation: all 0.5s ease;
}
.list-enter-form {
    opacity: 0;
    transform: translateX(-30px);
}
.list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}
li {
    cursor: pointer;
}
li:hover {
    transform: scale(1.01);
}
</style>