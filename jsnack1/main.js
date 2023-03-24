/*Snack 1:
Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza. Calcola quanto pesano tutte le zucchine*/

//Creo array
const zucchine =[
    {
        varietà:'tonda',
        peso: 450,
        lunghezza: 10,
    },
    {
        varietà:'gialle',
        peso: 400,
        lunghezza: 10,
    },
    {
        varietà:'tonda',
        peso: 300,
        lunghezza: 10,
    },
    {
        varietà:'nera',
        peso: 500,
        lunghezza: 10,
    },
    {
        varietà:'gialle',
        peso: 250,
        lunghezza: 10,
    },
    {
        varietà:'tonda',
        peso: 450,
        lunghezza: 10,
    },
    {
        varietà:'gialle',
        peso: 400,
        lunghezza: 10,
    },
    {
        varietà:'tonda',
        peso: 300,
        lunghezza: 10,
    },
    {
        varietà:'nera',
        peso: 500,
        lunghezza: 10,
    },
    {
        varietà:'gialle',
        peso: 250,
        lunghezza: 10,
    },
]


let sum = 0;
zucchine.forEach(zucchina => sum += zucchina.peso);

console.log(`Il peso totale delle zucchine è di ${sum}g`);