<template>
  <div class="main-wrapper" >
    <Cart/>
    <Catalog/>
  </div>
</template>

<script>
import Catalog from './Catalog'
import Cart from './Cart'

export default {
  name: 'MainWrapper',
  components: {
    Catalog,
    Cart
  }
}
</script>

<style></style>