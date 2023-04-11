import addNumbers, {addStrings, printFormat, introduce, getName} from "./functions";

console.log(addNumbers(1, 2));

console.log(addStrings("a"))

console.log(addStrings("added","strings"));

console.log(printFormat("ny", "sux"))

console.log(introduce("Good morning", ...["Paul", "Jack", "Kristen"]))

console.log(getName({first:"Paul", last:"Shivers"}))