<template>
  <div class="catalog">
    <router-link :to="{name: 'cart', params: {cartData: CART}}">
      <div class="catalog__link-to-cart link">
        Корзина: {{ CART.length }}
      </div>
    </router-link>
    <h1>Каталог</h1>
    <Select
        :selected="selected"
        :options="categories"
        @select="sortByCategories"
    />
    <div class="catalog__list">
      <CatalogItem
          v-for="product in filteredProducts"
          :key="product.article"
          :productData="product"
          @addToCart="addToCart"/>
    </div>
  </div>
</template>

<script>
import CatalogItem from "./CatalogItem";
import {mapActions, mapGetters} from "vuex"
import Select from "../Select";

export default {
  name: "Catalog",
  components: {
    CatalogItem,
    Select,
  },
  data() {
    return {
      categories: [
        {name: 'Все', value: 'all'},
        {name: 'Мужские', value: 'м'},
        {name: 'Женские', value: 'ж'}
      ],
      selected: 'Все',
      sortedProducts: []
    }
  },
  computed: {
    ...mapGetters([
      'PRODUCTS',
      'CART'
    ]),
    filteredProducts () {
      if (this.sortedProducts.length) {
        return this.sortedProducts
      } else {
        return this.PRODUCTS
      }
    }
  },
  methods: {
    ...mapActions([
      'GET_PRODUCTS',
      'ADD_TO_CART'
    ]),
    addToCart(data) {
      this.ADD_TO_CART(data)
    },
    sortByCategories (category) {
      this.sortedProducts = []
      let vm = this
      this.PRODUCTS.map( item => {
        if (item.category === category.name) {
          vm.sortedProducts.push(item)
        }
      })
      this.selected = category.name
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