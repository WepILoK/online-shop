<template>
  <div class="catalog-item">
    <img
        class="catalog-item__image"
        :src="require('../assets/images/' + productData.image)" alt="img">
    <div class="catalog-item__name">{{ productData.name }}</div>
    <div class="catalog-item__price">Цена: {{ productData.price }} Р.</div>
    <div
        class="catalog-item__add-to-cart-btn btn"
        @click="addToCart">
      Добавить в корзину
    </div>
  </div>
</template>

<script>
export default {
  name: "CatalogItem",
  props: {
    productData: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    addToCart() {
      if(!this.productData.quantity) {
        this.$set(this.productData, 'quantity', 1)
      }
      this.$emit('addToCart', this.productData)
    }
  },
}
</script>

<style lang="scss">
.catalog-item {
  flex-basis: 25%;
  box-shadow: 0 0 8px 0 #c0c0c0;
  padding: $padding * 2;
  margin-bottom: $padding * 2;

  &__image {
    width: 100px;
  }

  & > div {
    padding: $padding;
  }

  &__add-to-cart-btn {
  }
}
</style>