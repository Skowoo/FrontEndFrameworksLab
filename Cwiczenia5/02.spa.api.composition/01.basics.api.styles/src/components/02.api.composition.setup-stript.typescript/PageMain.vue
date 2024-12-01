<template>
  <div class="col-4">
    <h1>COMPOSITION API</h1>
    <p>with script setup and typescript</p>
    <button class="btn btn-primary my-3" @click="expanded = !expanded">
      {{ expanded ? 'COLLAPSE' : 'EXPAND' }}
    </button>
    <alert
      :type="a.type"
      :text="a.message"
      :key="a.id"
      :description="a.description"
      :model-value="expanded"
      dismissable
      @dismissed="handleDismissed"
      v-for="a in alerts"
    >
    </alert>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import Alert from './AlertMessage.vue'
import type { AlertMessageProps } from './AlertMessage.vue'

const types: AllowedAlertTypes[] = [
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'light',
  'dark',
]
const alerts = createAlerts(types)
const expanded = ref(false)

function createAlerts(types: AllowedAlertTypes[]) {
  return types.map((t, idx) => ({
    id: idx,
    type: t,
    message: `A simple ${t} alert is displayed here...`,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  }))
}
function handleDismissed() {
  alert('dismissed event emitted!')
}

type AllowedAlertTypes = AlertMessageProps['type']
</script>
