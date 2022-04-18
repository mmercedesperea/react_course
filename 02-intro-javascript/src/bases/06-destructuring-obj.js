const person = {
    name: "Pepito",
    age: 45,
    pin: "sadwd3344",
  };
  
  const returnPerson1 = (person) => {
    const { name, age, pin } = person;
    console.log("person1", name, age, pin);
  };
  
  const returnPerson2 = ({ name, age, job = "QA" }) => {
    console.log("person2", name, age, job);
  };
  
  returnPerson1(person);
  returnPerson2(person);
  
  const returnPerson3 = ({ pin, name, age }) => {
    return {
      namePin: name + pin,
      ageold: age,
      body: {
        weight: 35,
        height: 200,
      },
    };
  };
  
  const {
    namePin,
    ageold,
    body: { weight, height }
  } = returnPerson3(person);
  
  console.log("Person3", namePin, ageold, weight, height);
  