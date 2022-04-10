// Task 1
let x = 20;
let y = 58;
let z = 42;

let sum = x + y + z;

console.log(sum);

//Task 2

let seconds = 60;
let minutes = 60;
let hours = 24;
let days = 365;

let age = 25;

let myAgeInSeconds = age * days * hours * minutes * seconds;
console.log(myAgeInSeconds);

//Task 3

let count = 42;
let userName = '42';

//Task 3_Option 1

console.log(count.toString());
console.log(Number(userName));

//Task 3_Option 2
console.log(count + '');
console.log(+userName);

//Task 4

let i = 1;
let j = 2;
let k = "белых медведей";

console.log(`${i}${j}` + " " + `${k}`);

//Task 5

let a = "доступ";
let b = "морпех";
let c = "наледь";
let d = "попрек";
let e = "рубило";

let sumWords = a + b + c + d + e;
console.log(sumWords.length);

//Task 6

let strValue = "строка";
let numberValue = 13;
let booleanValue = true;

console.log(`Variable: ` + "strValue" + ` have type: ${typeof strValue}`);
console.log(`Variable: ` + "numberValue" + ` have type: ${typeof numberValue}`);
console.log(`Variable: ` + "booleanValue" + ` have type: ${typeof booleanValue}`);

// Task 7
let years = +prompt('Enter your age', '');
let yourName = prompt('Enter your name', '');

alert("Name: " + yourName + ", years:" + years);

//Advanced Task 1

let a1 = 4;
let b1 = 3;

a1 = a1 + b1;
b1 = a1 - b1;
a1 = a1 - b1;

console.log(a1);
console.log(b1);

//Advanced Task 2

let codeWord1 = "обернись";
let codeWord2 = "неужели";
let codeWord3 = "огурцы";
let codeWord4 = "липкие";
let codeWord5 = "?!";

let cipher = codeWord1.charAt(1) + codeWord2.charAt(1) + codeWord3.charAt(1) + codeWord4.charAt(1) + codeWord5.charAt(1);

console.log(cipher);