<template>
  <div class="catalog">
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
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'PRODUCTS'
    ])
  },
  methods: {
    ...mapActions([
      'GET_PRODUCTS'
    ]),
    addToCart (article) {
      console.log(article)
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