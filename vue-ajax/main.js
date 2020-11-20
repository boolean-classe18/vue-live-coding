var app = new Vue({
    el: '#root',
    data: {
        numero: false
    },
    mounted() {
        const self = this;
        axios.get('https://flynn.boolean.careers/exercises/api/random/int')
            .then(function(risposta) {
                self.numero = risposta.data.response;
            });
    }
});
