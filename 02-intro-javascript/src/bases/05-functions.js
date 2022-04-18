//función que retorna un objeto implicito
const getActiveUser = (name) => ({ uid: "AB123", userName: name });

const getActiveUser2 = (name) => {
  return { uid: "AB123", userName: name };
};

const activeUser = getActiveUser("Pepito");

const activeUser2= getActiveUser2('Luisa');

console.log(activeUser);
console.log(activeUser2);