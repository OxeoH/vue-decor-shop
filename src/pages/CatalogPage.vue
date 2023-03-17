<template>
    <div class="catalog">
        <SideBarVue/>
        <ProductsTable/>
    </div>
</template>

<script>
    import SideBarVue from '@/components/SideBar.vue'
    import ProductsTable from '@/components/ProductsTable.vue';
    export default {
        components:{
            SideBarVue, ProductsTable
        }
    }
</script>

<style lang="scss" scoped>
    .catalog{
        display: grid;
        grid-template-columns: 1fr 3fr;
        gap: 30px;
        padding-top: 60px;
    }

</style>