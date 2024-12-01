<script setup>
import PageMainOpts from './components/00.api.options/PageMain.vue'
import PageMainSetupFuc from './components/01.api.composition.setup-function/PageMain.vue'
import PageMainSetupScript from './components/02.api.composition.setup-stript.typescript/PageMain.vue'
</script>

<MainOptions />

<template>
  <div class="p-3">
    <div class="row">
      <PageMainOpts />
      <PageMainSetupFuc />
      <PageMainSetupScript />
    </div>
  </div>
</template>

<style scoped></style>
