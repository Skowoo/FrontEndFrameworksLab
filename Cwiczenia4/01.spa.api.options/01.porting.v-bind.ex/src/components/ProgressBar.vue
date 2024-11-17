<template>
  <div>
    <div
      class="progress"
      role="progressbar"
      aria-label="Success example"
      :aria-valuenow="progress"
      aria-valuemin="0"
      aria-valuemax="100"
      style="height: 50px"
      :style="barStyle"
    >
      <div
        class="progress-bar"
        :class="[progressCss]"
        :style="{
          width: `${progress}%`,
          transition: `width ${stepDuration}ms ease`,
        }"
      >
        {{ progress }}%
      </div>
    </div>
    <button @click="start()" class="btn btn-dark mt-2">START</button>
  </div>
</template>

<script>
export default {
  // component properties can be defined in props attribute
  // each property has its own name that will "map" to component attribute. Those attributes can be binded when component used.
  props: {
    // this property will accept object and will "feed" bar dev element styles.
    barStyle: {
      type: Object,
    },
    // this property will set inital value for progress bar
    initialValue: {
      type: Number,
    },
  },
  data() {
    return {
      timerId: null,
      progress: this.initialValue ?? 0,
      stepDuration: 50,
    }
  },
  computed: {
    progressCss() {
      return this.progress >= 21
        ? this.progress >= 51
          ? 'bg-danger'
          : 'bg-warning text-dark'
        : 'bg-dark'
    },
  },
  methods: {
    start() {
      this.progress = this.initialValue ?? 0
      clearInterval(this.timerId)
      this.timerId = setInterval(() => {
        if (this.progress === 100) {
          clearInterval(this.timerId)
        } else {
          this.progress++
        }
      }, this.stepDuration)
    },
  },
  unmounted() {
    // timer cleanup
    clearInterval(this.timerId)
  },
}
</script>
