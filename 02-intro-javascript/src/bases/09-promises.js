import { getHeroeById } from "../bases/08-imp-exp";

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("2 seconds before");
    const heroe = getHeroeById(2);
    resolve(heroe);
  }, 2000);
});

promise
  .then((response) => {
    console.log("Then in promise  // when the promise is ok", response);
  })
  .catch((err) => {
    console.log("Catch in promise  // when the promise is KO", err);
  })
  .finally(() => {
    console.log(
      "Finally the promise is finish  // when the promise is finish always run .Finally even if it is OK or KO"
    );
  });

// to pass an argument to the promise through a function
const getHerroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("3 seconds before");
      const heroe = getHeroeById(id);
      heroe ? resolve(heroe) : reject("We dont have a Heroe");
    }, 3000);
  });
};

getHerroeByIdAsync(2221)
  .then(console.log)
  .catch(console.warm)
  .finally(() => {
    console.log("Finally the promise is finish ");
  });
