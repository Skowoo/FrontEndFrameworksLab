const vm = Vue.createApp({
    data() {
        return {
            progress: 0,
            interval: null
        }
    },
    computed: {
        progressColor() {
            const red = 255 - Math.round((this.progress / 100) * 255);
            const green = Math.round((this.progress / 100) * 255);
            return `rgb(${red}, ${green}, 0)`;
        }
    },
    methods: {
        startProgress() {
            this.progress = 0;
            if (this.interval) 
                clearInterval(this.interval);

            this.interval = setInterval(() => {
                if (this.progress >= 100) {
                    clearInterval(this.interval);
                } else {
                    this.progress += 0.2;
                }
            }, 100);
        }
    }
}).mount("#app");
