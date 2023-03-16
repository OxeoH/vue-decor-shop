<template>
    <nav class="nav">
        <div class="nav__logo nav__btns">
            Logo
        </div>
        <div class="nav__links ">
            <div class="nav__links-link nav__btns">Главная</div>
            <div class="nav__links-link nav__btns">Каталог</div>
            <div class="nav__links-link nav__btns">Отзывы</div>
            <div class="nav__links-link nav__btns">О компании</div>
        </div>
        <div class="nav__cart nav__btns">Корзина</div>
    </nav>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    .nav{
        background-color: lightgray;

        position: absolute;
        z-index: 5;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 0 4rem;
        width: 80%;
        top: 10%;
        left: 50%;
        transform:translate(-50%, -50%);
        border-radius: 14px;

        &__links{
            display: flex;
            flex-direction: row;
        }

        &__btns{
            padding: 40px;
            &:hover{
                background-color: rgb(226, 203, 207);
            }
        }
    }
</style>