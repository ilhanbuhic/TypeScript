// 'dist', where we put our JS compiled code is --> distributable folder
// ----- Using debugger -----
// let age: number = 20
// if (age < 50)
// age += 10
// console.log(age);
// ----- Using debugger -----
// 1. --------------------------------
var sales = 123;
var course = 'TypeStric';
var is_published = true;
/*
In TypeScript we don't always have to annotate our variables,
because the TS compiler can detect the type of our variables based on their value

If we initialise a variable to a number the TS compiler knows that variable is a number,
so we don't have to annote it, so instead we can just type --> let sales = 123
*/
// 1. --------------------------------
// ---------- The ANY type ---------
/*
In TS, we have a type called ANY, which can represent any kind of values
So if we declare a value and don't initialize it, the TS complier assumes this
variable is a type of ANY
*/
var level;
level = 1; //First we can set it to a number
level = 'a'; //And later we can set it to a string
// But this against the whole idea of using TS, because we use TS for type safety,
// so we get type checking and if we use ANY type, we lose that feature
// and major benefit of using TS
function render(document) {
    console.log(document);
}
// In this function, we have an error where document implicitly has ANY type
// Implicitly means we haven't explicitly set the type of this parameter,
// so the compiler is guessing the type of this parameter
// In this case, we have 2 options
// 1. --> We can annotate this parameter with ANY
// 2. --> In case we have tons of errors of this kind we don't want to explicitly annotate
// various parameters to every function with ANY
// --> There is a nuclear option for that which is not recommended --> Go to tsconfig.json, set 'noImplicitAny' to 'false
// ---------- The ANY type ---------
// ---------- Arrays ---------
// let numbers: number[] = [1, 2, '3']
// This won't work if we pass this array to a function that expects a list of numbers,
// the third element will cause issues
// Code completion(Intellisense)
var numbers = [1, 2, 3];
// numbers.forEach((n) => n.)
// After typing 'n.', we can see all the properties and methods of number objects,
// because the editor knows the type of 'n', it offers code completion, so we can see
// all the methods of number objects
// ---------- Arrays ---------
// ---------- Tuples ---------
var user = [1, 'Mosh'];
/*
Tuple is a fixed length array, where each element has a particular type
We often use them when we work with a pair of values
First we open a square brackets and then tell the compiler
that the first element is going to be a number and the second will be a string
and then we initialize that variable
We will get an error in case we try to add the third element in the example from above
*/
// Tuples can be useful when we have only 2 values, like key, value pairs
// One of the methods that can be troublesome is the .push() method
// We can call this method and store the third value in this array
// and compiler will not complain, this is one of the gaps in TS
// ---------- Tuples ---------
// ---------- Enums ---------
// ---------- Enums ---------
