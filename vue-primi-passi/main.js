// avvio Vue
var app = new Vue({
    el: '#root', // div "radice" di vue
    data: { // contenitore di tutte le informazioni necessarie
        nome: '',
        cognome: '',
        placeholderNome: 'inserisci il tuo nome',
        placeholderCognome: 'inserisci il tuo cognome',
        mieClassi: 'test test2'
    },
    methods: { // contenitore di tutte le funzioni necessarie
        saluta() {
            alert(`ciao ${this.nome}`);
        }
    }
});
