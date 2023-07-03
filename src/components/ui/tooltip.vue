<template>
    <div class="tooltip">
        <slot></slot>
        <span class="tooltip__text" :class="cssClass">{{text}}</span>
    </div>
    
</template>

<script setup>
const props = defineProps({
		text: {
			default: "Button",
			type: String
		},
		cssClass: {
			default: "top",
		}
    })
</script>

<style scoped>
.tooltip {
    position: relative;
    display: inline-block;
}

.tooltip .tooltip__text {
    visibility: hidden;
    width: 120px;
    background-color: #ffffff;
    border: 2px solid #538EFF;
    color: #538EFF;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    /* Position the tooltip */
    position: absolute;
    z-index: 1;
}

.left {
    top: -5px;
    right: 105%;
}

.right {
    top: -5px;
    left: 105%;
}

.top {
    width: 120px;
    bottom: 100%;
    left: 50%;
    margin-left: -60px;
}

.bottom {
    width: 120px;
    top: 100%;
    left: 50%;
    margin-left: -60px;
}

.tooltip:hover > .tooltip__text {
    visibility: visible;
}
</style>