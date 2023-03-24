/*

Snack 1:
Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza. Calcola quanto pesano tutte le zucchine.

*/

//creo l'array contenente gli object
const zucchine = [
    {
        peso: 13,
        lunghezza: 9,
    },
    {
        peso: 8,
        lunghezza: 13,
    },
    {
        peso: 5,
        lunghezza: 19,
    },
    {
        peso: 3,
        lunghezza: 10,
    },
    {
        peso: 12,
        lunghezza: 9,
    },
    {
        peso: 14,
        lunghezza: 4,
    },
    {
        peso: 6,
        lunghezza: 9,
    },
    {
        peso: 20,
        lunghezza: 2,
    },
    {
        peso: 5,
        lunghezza: 12,
    },
    {
        peso: 11,
        lunghezza: 9,
    },
]

//creo una variabile nella quale sommerò le varie proprietà
let sum = 0;

//creo un ciclo forEach per ciclare nell'array
zucchine.forEach(zucchina => {
    //salvo una variabile con i singoli valori
    const pesoSingolaZucchina = zucchina.peso
    console.log(pesoSingolaZucchina);
    sum += pesoSingolaZucchina
});

//loggo in console la somma dei pesi
console.log(sum);
