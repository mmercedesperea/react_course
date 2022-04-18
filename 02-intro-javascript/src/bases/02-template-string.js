const nameM = "Frank";
const surname = "Frank";

const completeName = `${nameM} ${surname}`;

console.log(completeName);

function getHello(name) {
  return 'Hello world '+ name;
}

console.log(`This is a text: ${getHello(nameM)}`);