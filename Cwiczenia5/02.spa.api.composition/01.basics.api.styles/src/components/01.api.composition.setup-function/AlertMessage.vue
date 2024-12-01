<template>
  <div class="alert" :class="[`alert-${type}`, { dismissable }]" role="alert">
    <div>
      <b>SETUP FUNCTION:</b> {{ text }}
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
// This example illustrates composition API usage for Boostrap https://getbootstrap.com/docs/5.3/components/alerts/ implementation as vue component.
// Component provides same "logic" as ../00.api.options/AlertMessage.vue
// Composition API with setup function can be used as in-browser Options API alternative.
// https://vuejs.org/api/composition-api-setup

import { onMounted, watch, ref } from 'vue'

export default {
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
  setup(props, { emit: $emit }) {
    // options: data.expandedState
    // https://vuejs.org/guide/essentials/reactivity-fundamentals.html#declaring-reactive-state-1
    // (docs tip: in the left top corner you can switch docs mode between options and composition API)
    const expandedState = ref(props.modelValue)

    // options: mounted
    // https://vuejs.org/guide/essentials/lifecycle.html#registering-lifecycle-hooks
    // (docs tip: in the left top corner you can switch docs mode between options and composition API)
    onMounted(() => {
      // inner state => external state
      expandedState.value = props.modelValue
    })

    //options: methods.toggleDesc
    function toggleDesc() {
      expandedState.value = !expandedState.value
      // inner state => external state
      $emit('update:modelValue', expandedState.value)

      // Direct modification of property (external) is not allowed in vue by default and would cause console error.
      // this.modelValue = !this.modelValue
    }

    // options: methods.handleDismiss
    function handleDismiss() {
      $emit('dismissed')
    }

    // options: watch.modelValue
    // https://vuejs.org/guide/essentials/watchers.html#basic-example
    // (docs tip: in the left top corner you can switch docs mode between options and composition API)
    watch(
      () => props.modelValue,
      (val) => {
        // synchronizacja external => inner
        expandedState.value = val
      },
    )

    return {
      expandedState,
      toggleDesc,
      handleDismiss,
    }
  },
}
</script>

<style scoped>
.dismissable {
  display: flex;
}
</style>
