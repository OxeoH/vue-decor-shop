<template>
    <button class="button">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: 'my-button'
    }
</script>

<style lang="scss" scoped>
    @import '@/styles/variables.scss';

    .button{
        cursor:pointer; 
        border: none;
        padding: 14px 36px;
        border-radius: 14px;
        font-weight: 700;
        color: $gold;
        &:hover{
            background-color: $gold;
            color:white;
        }

    }
</style>