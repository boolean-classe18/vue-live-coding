var app = new Vue(
    {
        el: '#root',
        data: {
            visibile: true,
            numero: 5,
            nomi: ['pippo', 'pluto', 'paperino', 'topolino', 'minnie', 'paperina', 'qui', 'quo', 'qua']
        },
        methods: {
            is_visibile() {
                return this.numero < 10;
            }
        }
    }
);
