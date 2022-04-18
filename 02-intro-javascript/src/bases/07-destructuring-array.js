const characters = ["Frank", "Peter", "Steve"];

const [p1] = characters;

console.log(p1);

const [, p2] = characters;

console.log(p2);

const [, , p3] = characters;

console.log(p3);

const returnArray = () => {
  return ["ABC", 123];
};

const [letters, numbers] = returnArray();

console.log(numbers, letters);

const arrayTask = (value) => {
  return [
    value,
    () => {
      console.log("Hello world");
    },
  ];
};

const [nameA, setname] = arrayTask("Goku");

console.log(nameA);
setname();

const arrayTask2 = (value) => {
  return [
    value,
    () => {
      return "Hello world";
    },
  ];
};

const [nameB, setname2] = arrayTask2("Frank");

console.log(setname2(), nameB);
