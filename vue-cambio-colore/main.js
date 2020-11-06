var app = new Vue(
    {
        el: '#root',
        data: {
            messaggio: 'Hello world!',
            coloreTitolo: 'rosso',
        },
        methods: {
            cambiaColore() {
                if(this.coloreTitolo == 'rosso') {
                    // se il colore attuale è rosso => lo imposto a blu
                    this.coloreTitolo = 'blu';
                } else {
                    // se il colore attuale è blu => lo imposto a rosso
                    this.coloreTitolo = 'rosso';
                }
            }
        }
    }
);
