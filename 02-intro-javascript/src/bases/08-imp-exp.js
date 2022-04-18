import  heroes from "../data/heroes";

// console.log(heroes);

// Find
// const getHeroeById = (id) => {
//   return heroes.find((h) => (h.id === id));
// };

// Find simplified
/** The find() method returns the first element in the provided array 
 that satisfies the provided testing function. If no values satisfy 
 the testing function, undefined is returned.
 */

export const getHeroeById = (id) => heroes.find((h) => h.id === id);

// console.log(getHeroeById(2));

// Filter
/** The filter() method creates a new array with all elements that pass the
test implemented by the provided function.
*/

export const getHeroesByOwner = (owner) => heroes.filter((h) => h.owner === owner);

// console.log(getHeroesByOwner("DC"));
