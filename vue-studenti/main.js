var app = new Vue({
    el: '#root',
    data: {
        studenti: [
            {
                nome: "Renato",
                cognome: "Battaglia",
                matricola: 1002350,
                voti: {
                        italiano: [9, 8, 6],
                        matematica: [3.5, 7, 5.5],
                        inglese: [7.5, 5, 5.5],
                        informatica: [8.5, 6.5, 5],
                }
            },
            {
                nome: "Domenico",
                cognome: "De Angelis",
                matricola: 1002351,
                voti: {
                        italiano: [4, 5, 5],
                        matematica: [6.5, 4, 3],
                        inglese: [3, 6.5, 6.5],
                        informatica: [9, 7.5, 7.5],
                }
            },
            {
                nome: "Sabina",
                cognome: "Mariani",
                matricola: 1002352,
                voti: {
                        italiano: [7.5, 4.5, 6],
                        matematica: [9, 8, 9],
                        inglese: [5.5, 9, 7],
                        informatica: [5, 4.5, 4.5],
                }
            },
            {
                nome: "Edoardo",
                cognome: "Martini",
                matricola: 1002353,
                voti: {
                        italiano: [6, 5, 4],
                        matematica: [8, 5, 9],
                        inglese: [4, 5.5, 4],
                        informatica: [3, 5, 8],
                }
            },
            {
                nome: "Clarissa",
                cognome: "Milani",
                matricola: 1002354,
                voti: {
                        italiano: [5, 6, 5],
                        matematica: [6, 6.5, 7.5],
                        inglese: [8.5, 8, 7],
                        informatica: [3.5, 4, 6],
                }
            },
            {
                nome: "Ornella",
                cognome: "Monti",
                matricola: 1002355,
                voti: {
                        italiano: [3.5, 5, 4],
                        matematica: [5.5, 9, 8.5],
                        inglese: [6, 4, 3],
                        informatica: [7, 8.5, 6.5],
                }
            },
            {
                nome: "Luigi",
                cognome: "Pagano",
                matricola: 1002356,
                voti: {
                        italiano: [6, 6, 4.5],
                        matematica: [8.5, 6.5, 8.5],
                        inglese: [3, 5, 3.5],
                        informatica: [3.5, 3.5, 3.5],
                }
            },
            {
                nome: "Alessio",
                cognome: "Rossetti",
                matricola: 1002357,
                voti: {
                        italiano: [5, 3, 4],
                        matematica: [6, 7.5, 7],
                        inglese: [5.5, 6.5, 6.5],
                        informatica: [8.5, 5.5, 6.5],
                }
            },
            {
                nome: "Flaviana",
                cognome: "Russo",
                matricola: 1002358,
                voti: {
                        italiano: [5.5, 8.5, 6.5],
                        matematica: [8.5, 5, 6.5],
                        inglese: [5, 9, 7.5],
                        informatica: [9, 8, 8.5],
                }
            },
            {
                nome: "Romeo",
                cognome: "Serra",
                matricola: 1002359,
                voti: {
                        italiano: [4.5, 6, 3],
                        matematica: [7.5, 5.5, 4],
                        inglese: [4, 3.5, 6.5],
                        informatica: [4, 5.5, 4],
                }
            },
        ]
    },
    methods: {
        media_voti(array) {
            if(array.length > 0) {
                let somma = 0;
                array.forEach((voto) => {
                    somma = somma + voto;
                });
                return somma / array.length;
            } else {
                return 'n.a.';
            }
        },
        media_totale(indice_studente) {
            /*
            // operatore spread applicato manualmente alle varie materie
            let tutti_voti = [
                ...this.studenti[indice_studente].voti.italiano,
                ...this.studenti[indice_studente].voti.matematica,
                ...this.studenti[indice_studente].voti.inglese,
                ...this.studenti[indice_studente].voti.informatica
            ];
            */

            // operatore spread applicato tramite un ciclo for-in
            let tutti_voti = [];
            let voti_studente = this.studenti[indice_studente].voti;
            for (let materia in voti_studente) {
                let voti_array = voti_studente[materia];
                // tutti_voti = [...tutti_voti, ...voti_array];
                tutti_voti.push(...voti_array);
            }

            // invoco la funzione definita in precendenza per fare la media totale
            let media = this.media_voti(tutti_voti);
            return media;

            /*
            // sommo manualmente tutti i voti con un forEach dentro ad un for-in
            let voti_studente = this.studenti[indice_studente].voti;
            let somma = 0;
            let voti_sommati = 0;
            for (let materia in voti_studente) {
                let voti_array = voti_studente[materia];
                voti_array.forEach((voto) => {
                    somma = somma + voto;
                    voti_sommati++;
                });
            }
            if(voti_sommati > 0) {
                return somma / voti_sommati;
            } else {
                return 'n.a.';
            }
            */
        },
        is_promosso(indice_studente) {
            return Math.round(this.media_totale(indice_studente)) >= 6;
        }
    }
});
