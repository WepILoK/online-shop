<template>
  <div class="main-wrapper" >
    <Catalog/>
    <Cart
        v-if="CART.length"
        :cartData="CART"
    />
  </div>
</template>

<script>
import Catalog from './Catalog'
import Cart from './Cart'
import {mapGetters} from 'vuex'

export default {
  name: 'MainWrapper',
  components: {
    Catalog,
    Cart
  },
  computed: {
    ...mapGetters([
        'CART'
    ])
  }
}
</script>

<style>
.main-wrapper {
  max-width: 900px;
  margin: 0 auto;
}
</style>