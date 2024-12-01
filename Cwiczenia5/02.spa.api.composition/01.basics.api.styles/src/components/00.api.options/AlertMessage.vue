<template>
  <div class="alert" :class="[`alert-${type}`, { dismissable }]" role="alert">
    <div>
      <b>OPTIONS:</b> {{ text }}
      <div v-if="description">
        <a href="#" @click="toggleDesc">
          <template v-if="!expandedState">show more » </template>
          <template v-else>« hide more</template>
        </a>
        <div v-if="expandedState">
          <hr />
          {{ description }}
        </div>
      </div>
    </div>

    <button
      type="button"
      class="btn-close"
      data-bs-dismiss="alert"
      aria-label="Close"
      v-if="dismissable"
      @click="handleDismiss"
    ></button>
  </div>
</template>

<script>
// This example illustrates options API usage for Boostrap https://getbootstrap.com/docs/5.3/components/alerts/ implementation as vue component

export default {
  mounted() {
    // on monuted assign inner state from external
    this.expandedState = this.modelValue
  },
  props: {
    /* Specifies alert text */
    text: { type: String },
    /* Specified alert additional description */
    description: { type: String },
    /* Specifies alert type   */
    type: {
      type: String,
      default: 'primary',
      validate(val) {
        // value must be one of below
        return [
          'primary',
          'secondary',
          'success',
          'danger',
          'warning',
          'info',
          'light',
          'dark',
        ].includes(val)
      },
    },
    /* Enables dismiss button X - on dismiss click component event will be emitted */
    dismissable: { type: Boolean, default: false },
    /* Allows to pass reference for expanded / collpased description. modelValue is defulat prop for v-model binding */
    modelValue: { type: Boolean, default: false },
  },
  emits: [, 'update:modelValue', 'dismissed'],
  data() {
    return {
      // holds component inner state
      expandedState: false,
    }
  },
  methods: {
    handleDismiss() {
      this.$emit('dismissed')
    },
    toggleDesc() {
      this.expandedState = !this.expandedState
      // inner state => external state
      this.$emit('update:modelValue', this.expandedState)

      // Direct modification of property (modelValue) is not allowed in vue by default and would cause console error.
      // this.modelValue = !this.modelValue
    },
  },
  watch: {
    modelValue(val) {
      // https://vuejs.org/guide/essentials/watchers (docs tip: in the left top corner you can switch docs mode between options and composition API)
      // external state => inner state
      this.expandedState = val
    },
  },
}
</script>

<style scoped>
.dismissable {
  display: flex;
}
</style>
