let name : string="maryam"
console.log(name)
//typescript cant compile js to be compatible with older browsers but it can compile to a specific version of js that is compatible with older browsers
//typescript is a superset of js that adds static typing and other features to js
//typescript can be used to catch errors at compile time rather than runtime
//typescript can be used to improve the readability and maintainability of code

let a: number = 12
let b: string = '6'
let c: number = 6
//console.log(a/b)
console.log(a*c)
console.log(a/c)
// this will print 126 because of type coercion in 
//javascript but in typescript this will give an error because of type mismatch
//type script has infered thetype of b withouth us specifying it and it is string and a is number so we cant add them together without converting one of them to the other type
//we can convert b to a number using the Number() function or we can convert a to a string using the String() function
let d = a + Number(b) // this will give us 18
let e = String(a) + b // this will give us "126"
console.log(d)
console.log(e)
//--noEmit is a compiler option that prevents the compiler from emitting any output files.
//  This can be useful for type checking and error reporting without generating JavaScript files.
let album :any;
album = "Thriller"
album = 1982
console.log(album)
//any is a type that can hold any value and it disables type checking for that variable. It is generally not recommended to use any as it defeats the purpose of using TypeScript, which is to catch errors at compile time. It is better to use specific types or union types to ensure type safety in your code.

//union types allow us to specify that a variable can hold multiple types of values. For example, we can declare a variable that can hold either a string or a number like this:
let album2: string | number;
album2 = "Back in Black";
album2 = 1980;
console.log(album2)
//this way we can have type safety while still allowing for flexibility in the types of values that a variable can hold.

let re: RegExp = /hello/i; // this is a regular expression that matches the string "hello" case-insensitively
console.log(re.test("Hello")) // this will return true because the regular expression matches the string "Hello" case-insensitively 

let stringArray: string[] = ["hello", "world", "typescript"];
let numberArray: number[] = [1, 2, 3, 4, 5];
let booleanArray: boolean[] = [true, false, true, false];
let mixedArray: (string | number | boolean)[] = ["hello", 1, true, "world", 2, false];

stringArray.push("typescript is great");// this will add the string "typescript is great" to the end of the stringArray

//stringArray.push(123) this will give us an error because 123 is a number and stringArray can only hold strings
//tuples are a special type of array that can hold a fixed number of elements of different types. For example, we can declare a tuple that holds a string and a number like this:
let tuple: [string, number];
tuple = ["hello", 123]; // this is valid
//tuple = [123, "hello"] this will give us an error because the first element of the tuple must be a string and the second element must be a number 

//enums are a way to define a set of named constants. For example, we can define an enum for the days of the week like this:
enum DaysOfWeek {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}
console.log(DaysOfWeek.Monday) // this will print 1 because the enum starts with 0 for Sunday, 1 for Monday, and so on
console.log(DaysOfWeek[1]) // this will print "Monday" because we can also access the enum values by their numeric index
// we can also assign specific values to the enum members like this:
enum Colors {
    Red = 1,    
    Green = 2,
    Blue = 4
}
console.log(Colors.Red) // this will print 1

// we can also use bitwise operators with enums to create combinations of values. For example, we can define an enum for file permissions like this:
enum FilePermissions {
    Read = 1,    // 001 in binary
    Write = 2,   // 010 in binary
    Execute = 4  // 100 in binary
}
let permissions: FilePermissions = FilePermissions.Read | FilePermissions.Write;
console.log(permissions) // this will print 3 because Read and Write permissions are combined (001 | 010 = 011 in binary)

// we can also check if a specific permission is set using bitwise AND operator like this:
let hasReadPermission = (permissions & FilePermissions.Read) === FilePermissions.Read;
console.log(hasReadPermission) // this will print true because the Read permission is set in the permissions variable   

//Objects in TypeScript can be defined using interfaces or type aliases. For example, we can define an interface for a person object like this:
interface Person {
    name: string;
    age: number;
    isStudent: boolean;
}
let person: Person = {
    name: "John",
    age: 30,
    isStudent: false
    };
  console.log(person.age) // this will print 30 because we can access the properties of the person object using dot notation

 /* type gutarist = {
    name: string;
    active?: boolean;// the ? symbol indicates that the active property is optional
    albums: (string | number)[];
  }*/
interface gutarist  {
    name: string;
    active?: boolean;// the ? symbol indicates that the active property is optional
    albums: (string | number)[];
  }

    let guitarPlayer_1: gutarist = {
        name: "Jimmy Page",
        active: false,
        albums: ["Led Zeppelin IV", "Physical Graffiti", 1971]
    }
    console.log(guitarPlayer_1.albums) // this will print the albums of the guitar player

let guitarPlayer_2: gutarist = {
    name: "Jimmy ",
    active:true,
    albums: ["Led Zeppelin IV", "Physical Graffiti", 1971]
}   
console.log(guitarPlayer_2.albums) // this will print the albums of the guitar player
//guitarPlayer.years=30 > this will give us an error because 
// the years property is not defined in the gutarist type

const greetgutarisr = (guitarist: gutarist) => {
    return `Hello ${guitarist.name}!`
}
console.log(greetgutarisr(guitarPlayer_1)) // this will print Hello Jimmy Page!
