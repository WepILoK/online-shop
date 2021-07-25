<template>
  <div class='select'>
    <p class="select__title"
       @click="areOptionsVisible = !areOptionsVisible"
    >
      {{ selected }}
    </p>
    <div
        class="select__options"
        v-if="areOptionsVisible || isExpanded"
    >
      <p v-for="option in options"
         :key="option.value"
         @click="selectOption(option)"
      >
        {{ option.name }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Select",
  props: {
    options: {
      type: Array,
      default() {
        return []
      }
    },
    selected: {
      type: String,
      default: ''
    },
    isExpanded: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      areOptionsVisible: false
    }
  },
  methods: {
    selectOption(option) {
      this.$emit('select', option)
      this.areOptionsVisible = false;
    },
    hideSelect() {
      this.areOptionsVisible = false;
    }
  },
  mounted() {
    document.addEventListener('click', this.hideSelect.bind(this), true)
  },
  beforeDestroy() {
    document.removeEventListener('click', this.hideSelect)
  }
}
</script>

<style lang="scss">
.select {
  position: relative;
  width: 200px;
  cursor: pointer;
  text-align: left;

  &__title {
    border: solid 1px #aeaeae;
    padding: 8px;
  }

  &__options {
    border: solid 1px #aeaeae;
    background: #ffffff;
    position: absolute;
    top: 30px;
    left: 0;
    width: 100%;
    padding: 8px;
  }

  p {
    margin: 0;

    &:hover {
      background: #e7e7e7;
    }
  }
}
</style>