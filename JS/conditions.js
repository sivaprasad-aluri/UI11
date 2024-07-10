// if,
// if else
// if else if
//Q: ==, === ? difference b/w == and === ?

const a = 10;
const b = "10";
const isTrue = a == b; // true

console.log(a >= 10);

if (a === b) {
  console.log("Yes Same Values...");
} else if (a !== b) {
  console.log("Not Same Value...");
} else {
  console.log("not a valid comparison");
}

// Ternary | Switch

// Task: Age => 18 = is Major; Age <= 18 Minor;
// Task: Dice:
// 6 = number 6
// 5 = number 5
// 4 = number 4
// 3 = number 3
// 2 = number 2
// 1 = number 1

// Ternary:

a == b && console.log("Testing for && operator");

// condition ? true : false

const result =
  a === b
    ? console.log("Checking for true value")
    : console.log("Checking for false value");

// Switch
switch ("siva") {
  case "siva":
    console.log("the given value is siva");
    break;

  case "hari":
    console.log("the given value is hari");
    break;

  case "nithin":
    console.log("the given value is nithin");
    break;

  default:
    console.log("the given value is not listed...");
    break;
}
