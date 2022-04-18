const person = {
  name: "Pepe",
  surname: "Lopez",
  edad: 45,
  adress:{
      city:'NY',
      zip:555,
      lat:14.654,
      lng: 34.543,
  }
};

// clon the obj person with spread operator.
const person2= {...person};
person2.name = 'Luca';

console.log(person);
console.log(person2);
