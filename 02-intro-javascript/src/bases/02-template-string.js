const nameM = "Merche";
const surname = "Pe";

const completeName = `${nameM} ${surname}`;

console.log(completeName);

function getHello(name) {
  return 'Hello world '+ name;
}

console.log(`This is a text: ${getHello(nameM)}`);