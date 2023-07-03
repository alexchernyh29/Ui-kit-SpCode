<template>
	<ul class="breadcrumb__list">
        <li class="breadcrumb__list-item"><a class="breadcrumb__list-text" :href="href">{{ text }}</a></li>
        <li class="breadcrumb__list-item"><a class="breadcrumb__list-text" :href="href_1">{{ text_1 }}</a></li>
        <li class="breadcrumb__list-item"><span>{{ text_2 }}</span></li>
    </ul>
</template>
<script setup>
	const props = defineProps({
		text: {
			default: "я хлебный мякиш ссылки",
			type: String
		},
        text_1: {
			default: "я такой же как первый",
			type: String
		},
        text_2: {
			default: "я просто мякиш",
			type: String
		},
        href: {
			default: "/",
			type: String
		},
        href_1: {
			default: "/",
			type: String
		}
    })
</script>
<style scoped>
li {
    list-style-type: none; /* Убираем маркеры */    
}
ul {
    margin-left: 0; /* Отступ слева в браузере IE и Opera */
    padding-left: 0; /* Отступ слева в браузере Firefox, Safari, Chrome */
}
.breadcrumb__list{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
}
.breadcrumb__list-item {
    padding-left: 15px;
    margin-left: 15px;
    border-left: 1px solid rgba(84, 84, 84, 0.48);
}
.breadcrumb__list-item:first-child {
    padding-left: 0px;
    margin-left: 0px;
    border-left: none;
}
</style>