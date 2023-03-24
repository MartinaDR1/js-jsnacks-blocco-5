/*Scrivi una funzione che accetti tre argomenti:
un array e due numeri ("a" più piccolo di "b" e "b" grande al massimo quanto il numero di elementi dell'array).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra "a" e "b"*/


const arr =[1,2,3,4,5,6,7,8,9,10];

myFunction(arr, 1, 10);


function myFunction (arr, min, max) {
  const newArray = arr.filter(i => {
    if (i > min && i < max) {
      return true;
    }
  });
  console.log(newArray);
}