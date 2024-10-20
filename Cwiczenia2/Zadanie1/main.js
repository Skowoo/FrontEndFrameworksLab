const vm = Vue.createApp({
    data(){
        return{
            primary: false,
            secondary: false,
            success: false,
            danger: false
        }
    }
}).mount("#app")