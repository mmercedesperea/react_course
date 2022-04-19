let active = true;
const message = active ? "Active" : "Inactive";
active = false;
const message2 = !active ? "Inactive" : "Active";

console.log(message);
console.log(message2);

// if the variable is True it shows what it has next
const message3 = !active && "Inactive";
console.log(message3);
