/*

Snack 1:
Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza. Calcola quanto pesano tutte le zucchine.

*/

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
        peso: 10,
        lunghezza: 9,
    },
    {
        peso: 10,
        lunghezza: 4,
    },
    {
        peso: 10,
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

let sum = 0;

zucchine.forEach(zucchina => {
    const pesoZucchina = zucchina.lunghezza
    console.log(pesoZucchina);
    sum += pesoZucchina
});

console.log(sum);
