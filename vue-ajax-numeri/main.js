var app = new Vue({
    el: '#root',
    data: {
        numero_pc: false,
        numero_utente: false
    },

    mounted() {
        const self = this;
        axios
            .get('https://flynn.boolean.careers/exercises/api/random/int')
            .then(function(risposta) {
                self.numero_pc = risposta.data.response;
            });

        self.numero_utente = parseInt(prompt('Inserisci un numero tra 1 e 9'));

    }
});
