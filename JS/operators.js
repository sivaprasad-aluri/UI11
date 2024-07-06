// +, - , * , / ++, -- +=, -=, *= &&, ||

let firstName = "aluri";
let lastName = "siva";

// concatenation -
let fullName = firstName + " " + lastName;

// best
let userName = `${firstName} ${lastName}`;

console.log(userName);

let a = "100";
let b = "20";
let c = "1020";
console.log(a / b > 10 > true); // false > true

// Booleans

// true && true -> true
// true && false -> false
// false && true -> false
// false && false -> false

console.log(false && false);

// true || true -> true
// true || false -> true
// false || true -> true
// false || false -> false

// ++, --

let num1 = 10;
console.log(num1++);
console.log(num1++);
console.log(num1++);

console.log((num1 += 5));
console.log((num1 += 5));

console.log((num1 -= 5));
console.log((num1 -= 5));

console.log(num1--);
console.log(num1--);
console.log(num1--);
