<template>
  <div class="catalog">
    <router-link :to="{name: 'cart', params: {cartData: CART}}">
      <div class="catalog__link-to-cart link">
        Корзина: {{ CART.length }}
      </div>
    </router-link>
    <h1>Каталог</h1>
    <div class="catalog__list">
      <CatalogItem
          v-for="product in PRODUCTS"
          :key="product.article"
          :productData="product"
          @addToCart="addToCart"/>
    </div>
  </div>
</template>

<script>
import CatalogItem from "./CatalogItem";
import {mapActions, mapGetters} from "vuex"

export default {
  name: "Catalog",
  components: {
    CatalogItem
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters([
      'PRODUCTS',
      'CART'
    ])
  },
  methods: {
    ...mapActions([
      'GET_PRODUCTS',
      'ADD_TO_CART'
    ]),
    addToCart(data) {
      this.ADD_TO_CART(data)
    }
  },
  mounted() {
    this.GET_PRODUCTS()
  }
}
</script>

<style lang="scss">
.catalog {
  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
}
</style>