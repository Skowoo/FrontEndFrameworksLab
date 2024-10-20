const vm = Vue.createApp({
    created(){
        this.timerId = setInterval(() => this.setTime(), 1000)
    },
    data(){
        return{
            timerId: null,
            time: new Date().toLocaleTimeString()
        }
    },
    methods: {
        setTime() {
            this.time = new Date().toLocaleTimeString();
        }
    },
    unmounted(){
        clearInterval(timerId);
    }
}).mount("#app")