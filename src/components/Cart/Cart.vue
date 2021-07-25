<template>
  <div class="cart">
    <router-link to="/">
      <div class="cart__link-to-catalog link">
        Каталог
      </div>
    </router-link>
    <h1>Корзина</h1>
    <p v-if="!cartData.length">
      В корзине нет товаров...
    </p>
    <CartItem
        v-for="(item, index) in cartData"
        :key="item.article"
        :cartItemData="item"
        @deleteFromCart="deleteFromCart(index)"
        @decrement="decrementItem(index)"
        @increment="incrementItem(index)"/>
    <div
        class="cart__total"
        v-if="cartData.length"
    >
      <p class="total__name">Сумма:</p>
      <p>{{ cartTotalCost }} Р.</p>
    </div>
  </div>
</template>

<script>
import CartItem from "./CartItem";
import {mapActions} from 'vuex'

export default {
  name: "Cart",
  components: {
    CartItem
  },
  props: {
    cartData: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  computed: {
    cartTotalCost() {
      return this.cartData.reduce((res, item) => res + item.price * item.quantity, 0)
    }
  },
  methods: {
    ...mapActions([
      'DELETE_FROM_CART',
      'INCREMENT_ITEM_CART',
      'DECREMENT_ITEM_CART'
    ]),
    decrementItem(index) {
      this.DECREMENT_ITEM_CART(index)
    },
    incrementItem(index) {
      this.INCREMENT_ITEM_CART(index)
    },
    deleteFromCart(index) {
      this.DELETE_FROM_CART(index)
      console.log(index)
    }
  }
}
</script>

<style lang="scss">
.cart {
  margin-bottom: 100px;

  &__total {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    padding: $padding * 2 $padding * 3;
    display: flex;
    justify-content: center;
    background-color: #2c3e50;
    color: #ffffff;
    font-size: 20px;

    .total__name {
      margin-right: $padding * 2;
    }
  }
}
</style>