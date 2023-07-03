<template>
	<a :href="href" :class="cssClass"><slot>{{ text }}</slot></a>
</template>
<script setup>
	const props = defineProps({
		text: {
			default: "Button",
			type: String
		},
        href: {
			default: "/",
			type: String
		},
		cssClass: {
			default: "buttons",
		}
    })
</script>
<style scoped>
a.buttons {
	text-decoration: none;
	padding: 10px;
	color: #a675b3;
	text-align: center;
	line-height: 20px;
	display: block;
	margin: 20px auto;
	font: normal 17px arial;
	border-radius: 20px;
}

a.buttons:not(.active) {
	box-shadow: inset 0 1px 1px rgba(111, 55, 125, 0.8), inset 0 -1px 0px rgba(63, 59, 113, 0.2), 0 9px 16px 0 rgba(0, 0, 0, 0.3), 0 4px 3px 0 rgba(0, 0, 0, 0.3), 0 0 0 1px #150a1e;
	background-image: linear-gradient(#3b2751, #271739);
	text-shadow: 0 0 21px rgba(223, 206, 228, 0.5), 0 -1px 0 #311d47;
}

a.buttons:not(.active):hover,
a.buttons:not(.active):focus {
	transition: color 900ms linear, text-shadow 500ms linear, background-image 900ms linear;
	color: #fff;
	background-image: linear-gradient(#1400FF, #FD6FDE);
	text-shadow: 0 0 21px rgba(223, 206, 228, 0.5), 0 0 10px rgba(223, 206, 228, 0.4), 0 0 2px #2a153c;
}
a.buttons:not(:hover) {
	transition: 0.6s;
}
.disabled {
	transition: color 900ms linear, text-shadow 500ms linear, background-image 900ms linear;
	padding: 10px;
	color: #fff;
	background-image: linear-gradient(#828897, #5F697C);
	border-radius: 20px;
	text-shadow: 0 0 21px rgba(223, 206, 228, 0.5), 0 0 10px rgba(223, 206, 228, 0.4), 0 0 2px #2a153c;
	pointer-events: none;
	margin: 20px auto;
}
</style>