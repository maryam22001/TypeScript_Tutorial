"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let name = "maryam";
console.log(name);
//typescript cant compile js to be compatible with older browsers but it can compile to a specific version of js that is compatible with older browsers
//typescript is a superset of js that adds static typing and other features to js
//typescript can be used to catch errors at compile time rather than runtime
//typescript can be used to improve the readability and maintainability of code
let a = 12;
let b = '6';
let c = 6;
//console.log(a/b)
console.log(a * c);
console.log(a / c);
// this will print 126 because of type coercion in 
//javascript but in typescript this will give an error because of type mismatch
//type script has infered thetype of b withouth us specifying it and it is string and a is number so we cant add them together without converting one of them to the other type
//we can convert b to a number using the Number() function or we can convert a to a string using the String() function
let d = a + Number(b); // this will give us 18
let e = String(a) + b; // this will give us "126"
console.log(d);
console.log(e);
//--noEmit is a compiler option that prevents the compiler from emitting any output files.
//  This can be useful for type checking and error reporting without generating JavaScript files.
let album;
album = "Thriller";
album = 1982;
console.log(album);
//any is a type that can hold any value and it disables type checking for that variable. It is generally not recommended to use any as it defeats the purpose of using TypeScript, which is to catch errors at compile time. It is better to use specific types or union types to ensure type safety in your code.
//union types allow us to specify that a variable can hold multiple types of values. For example, we can declare a variable that can hold either a string or a number like this:
let album2;
album2 = "Back in Black";
album2 = 1980;
console.log(album2);
//this way we can have type safety while still allowing for flexibility in the types of values that a variable can hold.
let re = /hello/i; // this is a regular expression that matches the string "hello" case-insensitively
console.log(re.test("Hello")); // this will return true because the regular expression matches the string "Hello" case-insensitively 
