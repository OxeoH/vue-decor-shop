<template>
    <div class="product">
        <div class="product__img">
            <img src="@/assets/products/template.jpg" alt="Product Photo">
        </div>
        <h4 class="product__name">{{ name }}</h4>
        <div class="buttons__container">
            <my-button class="product__add">
                <div class="product__add-text">В корзину</div>
                <div class="product__add-price">
                    {{ price }} BYN
                </div>
            </my-button>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            name:{
                type: String,
                default: 'Подсвечник "Ладони"'
            },
            price:{
                type: Number,
                default: 25
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '@/styles/variables.scss';
    .product{
        width: 100%;
        padding: 20px;
        background-color: white;
        border: 2px solid lightgray;
        box-shadow: 2px 2px 4px gray;
        border-radius: 14px;
        max-height: fit-content;


        display: flex;
        flex-direction: column;
        justify-content: space-around;

        .buttons__container{
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            align-items: center;
        }

        &__add{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            &-text{
                margin-bottom: 6px;
            }
            &-price{
            }
        }
        &__img{
            margin-bottom: 12px;
            img{
                width: 100%;
                object-fit: cover;
            }
        }

        &__name{
            text-align: left;
            margin-bottom: 12px;
            color: $gold;
        }
    }
</style>