<template>
  <div class="main-wrapper">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'MainWrapper',
  components: {
  },
  computed: {
  }
}
</script>

<style>
.main-wrapper {
  max-width: 900px;
  margin: 0 auto;
}
</style>