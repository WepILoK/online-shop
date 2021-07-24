<template>
  <div class="cart-item">
    <img
        class="cart-item__image"
        :src="require('../assets/images/' + cartItemData.image)" alt="img">
    <div class="cart-item__info">
      <p>{{ cartItemData.name }}</p>
      <p>{{ cartItemData.price }}</p>
      <p>{{ cartItemData.article }}</p>
    </div>
    <div class="cart-item__quantity">
      <p>Кол-во: </p>
      <span>
        <span class="quantity__btn btn" @click="decrement">-</span>
      {{ cartItemData.quantity }}
        <span class="quantity__btn btn" @click="increment">+</span>
      </span>
    </div>
    <div @click="deleteFromCart">Удалить</div>
  </div>
</template>

<script>
export default {
  name: "CartItem",
  props: {
    cartItemData: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    decrement() {
      this.$emit('decrement')
    },
    increment() {
      this.$emit('increment')
    },
    deleteFromCart() {
      this.$emit('deleteFromCart')
    }
  },
}
</script>

<style lang="scss">
.cart-item {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 8px 0 #c0c0c0;
  padding: $padding * 2;
  margin-bottom: $padding * 2;

  &__image {
    max-width: 50px;
  }

  .quantity__btn {
    padding: $padding $padding + 2px;
  }
}
</style>