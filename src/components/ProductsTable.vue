<template>
    <div class="products">
        <div class="products__table">
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </div>
    </div>
</template>

<script>
    import ProductCard from './ProductCard.vue';
    export default {
        components:{
            ProductCard
        }
    }
</script>

<style lang="scss" scoped>
    .products{
        padding-right: 10px;
        grid-column-start: 2;
        &__table{
            display: grid;
            grid-template: repeat(3, 1fr)/repeat(3,1fr);
            gap:20px;
            justify-items: center;
            align-items: center;
        }
    }
</style>