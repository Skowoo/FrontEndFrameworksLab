<template>
  <div class="alert" :class="[`alert-${type}`, { dismissable }]" role="alert">
    <div>
      <b>SCRIPT SETUP:</b> {{ text }}
      <div v-if="description">
        <a href="#" @click="toggleDesc">
          <template v-if="!expanded">show more » </template>
          <template v-else>« hide more</template>
        </a>
        <div v-if="expanded">
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

<script setup lang="ts">
// https://vuejs.org/api/sfc-script-setup.html

// Defining component properties type.
export type AlertMessageProps = {
  text?: string
  description?: string
  type: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'
  dismissable?: boolean
}

// Define component properties.
// https://vuejs.org/api/sfc-script-setup.html#defineprops-defineemits
const $props = withDefaults(defineProps<AlertMessageProps>(), {
  type: 'primary',
  dismissable: false,
})

// Define component model.
// https://vuejs.org/api/sfc-script-setup.html#definemodel
const expanded = defineModel()

// Define component emits (Events)
// https://vuejs.org/api/sfc-script-setup.html#defineprops-defineemits
const $emit = defineEmits<{
  (e: 'dismissed'): void
}>()

// Define component method
// options api: methods.toggleDesc
function toggleDesc() {
  // synchronizacja inner => external
  expanded.value = !expanded.value
}

// Define component method
// options api: methods.handleDismiss
function handleDismiss() {
  $emit('dismissed')
}
</script>

<style scoped>
.dismissable {
  display: flex;
}
</style>
