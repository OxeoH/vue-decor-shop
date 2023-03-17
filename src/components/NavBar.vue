<template>
    <div class="plate">
        <nav class="nav">
            <router-link to="/home" class="nav__logo">
                <img src="@/assets/logo.png" alt="Terrazzo Logo">
            </router-link>
            <div class="nav__links ">
                <router-link to="/" class="nav__links-link nav__btns">Главная</router-link>
                <router-link to="/catalog" class="nav__links-link nav__btns">Каталог</router-link>
                <router-link to="/about" class="nav__links-link nav__btns">О компании</router-link>
            </div>
            <router-link to="/cart" class="nav__cart nav__btns">Корзина</router-link>
        </nav>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    @import "@/styles/variables.scss";
    .plate{
        position: fixed;
        z-index: 5;
        background-color:darkslategrey;
        width: 80vw;
        top: 60px;
        left: 50%;
        transform:translate(-50%, -50%);
        padding-top: 60px;
        border-radius: 14px;
    }
    .nav{
        background-color: lightgray;
        box-shadow: 2px 2px 6px gray;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 0 4rem;
        border-radius: 14px;
        &__links{
            display: flex;
            flex-direction: row;
        }

        &__btns{
            padding: 30px 50px;
            border-radius: 14px;
            margin-left: 20px;
            color: $gold;
            font-weight: 700;
            &:first-child{
                margin-left: 0;
            }
            &:hover{
                background-color: $gold;
                color:white;
            }
        }

        &__logo{
            img{
                width: 50%;
                object-fit: contain;
                transform:translate(50%, 0);
            }
        }
    }
</style>