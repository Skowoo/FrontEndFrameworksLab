const vm = Vue.createApp({
    data(){
        return{
            count: 0
        }
    },
    methods: {
        handleClickRaw(evt) { // Event z przycisku który został naciśnięty
            alert("klikniety " + evt.target.textContent)
        },
        handleClick(message, evt) {
            alert(`${message} (${evt.target.textContent})`)
        },
        handleLink(){
            alert('Otwierasz zewnętrzny link!')
            window.location.href = 'https://wsei.edu.pl/kandydaci/studia-i-stopnia/zarzadzanie/';
        }
    }
}).mount("#app")