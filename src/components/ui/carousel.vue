<template>
    <div class="carousel"  @keydown="checkSlide($event)" tabindex="0">
        <carouselSlide
            v-for=" item in carousel_data"
            :key="item.id"
            :item_data="item"
        />
        <button @click.prevent="next" class="btn btn-next"><i class="fa fa-angle-right"></i></button>
        <button @click.prevent="prev" class="btn btn-prev"><i class="fa fa-angle-left"></i></button>
    </div>
</template>
<script>
import carouselSlide from './carouselSlide.vue';
export default {
    components: {
        carouselSlide
    },
    props: {
        carousel_data: {
            type: Array,
            default: ()=>[]
        }
    },
    data() {
        return{}
    }
}
</script>
<style>
    
</style>