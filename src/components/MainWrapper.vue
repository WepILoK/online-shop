<template>
  <div class="main-wrapper" >
    <Catalog/>
    <Cart/>
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

<style>
.main-wrapper {
  max-width: 900px;
  margin: 0 auto;
}
</style>