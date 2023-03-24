/*

Jsnack5
Scrivi una funzione che accetti tre argomenti:
un array e due numeri ("a" più piccolo di "b" e "b" grande al massimo quanto il numero di elementi dell'array).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra "a" e "b"

*/

const arrayElement = [ 1, 2, 3, 6, 8]
//console.log(arrayElement.length);

const numero1 = 2
const numero2 = arrayElement.length
console.log(numero2);

function createNewArray(array, numb1, numb2) {
    if (numb1 < numb2 && numb2 <= array.lenght) {
        return array.slice(numb1, numb2)
    } else {
        return [];
    }
}

createNewArray(arrayElement, numero1, numero2);
console.log(createNewArray());