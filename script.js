// Part 1: Type Converter

// number
console.log(Number(false));
console.log(Number(true));
console.log(Number(0));
console.log(Number(1));
console.log(Number("0"));
console.log(Number("000"));
console.log(Number("1"));
console.log(Number(NaN));
console.log(Number(Infinity));
console.log(Number(-Infinity));
console.log(Number(""));
console.log(Number("20"));
console.log(Number("twenty"));
console.log(Number(null));
console.log(Number(undefined));

// string
console.log(String(false));
console.log(String(true));
console.log(String(0));
console.log(String(1));
console.log(String("0"));
console.log(String("000"));
console.log(String("1"));
console.log(String(NaN));
console.log(String(Infinity));
console.log(String(-Infinity));
console.log(String(""));
console.log(String("20"));
console.log(String("twenty"));
console.log(String(null));
console.log(String(undefined));

// boolean
console.log(Boolean(false));
console.log(Boolean(true));
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean("0"));
console.log(Boolean("000"));
console.log(Boolean("1"));
console.log(Boolean(NaN));
console.log(Boolean(Infinity));
console.log(Boolean(-Infinity));
console.log(Boolean(""));
console.log(Boolean("20"));
console.log(Boolean("twenty"));
console.log(Boolean(null));
console.log(Boolean(undefined));

// Challenge 1: Create an Age Calculator
let birthYear = 1996;
let futureYear = 2080;

console.log(futureYear - birthYear);

// Challenge 2: Create an information card
let Name = "Mai";
let Location = "Chiang Mai";
let Hobby = "Learning Dutch";
console.log(
  `Hi, my name is ${Name}. I live in ${Location} and enjoy ${Hobby}.`
);
