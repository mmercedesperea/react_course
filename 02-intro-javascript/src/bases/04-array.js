const array = [1, 2, 3, 4];

// expand array with spreed operator
let array2 = [...array, 5, 6, 7];

// map, return a new array with new values
let array3 = array2.map((number) => {
 return  number *  2;
});


console.log(array);
console.log(array2);
console.log(array3);
