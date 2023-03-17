<template>
    <div class="sidebar">
        <ul class="sidebar__categories">
            <li class="sidebar__categories-category">Шкатулки</li>
            <li class="sidebar__categories-category">Тарелочки</li>
            <li class="sidebar__categories-category">Вазочки</li>
            <li class="sidebar__categories-category">Подсвечники</li>
            <li class="sidebar__categories-category">Свечки</li>
            <li class="sidebar__categories-category">Подставки</li>
            <li class="sidebar__categories-category">Мыльницы</li>
        </ul>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    @import "@/styles/variables.scss";
    .sidebar{
        background-color: lightgray;
        box-shadow: 2px 2px 6px gray;
        padding: 2rem;
        border-radius: 14px;
        position: fixed;
        width: 20%;

        &__categories{
            display: flex;
            flex-wrap: nowrap;
            flex-direction: column;
            justify-content: space-around;
            &-category{
                font-weight: 700;
                color: $gold;
                padding: 20px 36px;
                border-radius: 14px;
                margin-bottom: 10px;
                &:last-child{
                    margin-bottom: 0;
                }
                &:hover{
                    background-color: $gold;
                    color:white;
                }
            }
        }
    }
</style>