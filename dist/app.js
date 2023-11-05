"use strict";
// 'dist', where we put our JS compiled code is --> distributable folder
// ----- Using debugger -----
// let age: number = 20
// if (age < 50)
// age += 10
// console.log(age);
// ----- Using debugger -----
// 1. --------------------------------
let sales = 123;
let course = 'TypeScript';
let is_published = true;
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
let level;
level = 1; //First we can set it to a number
level = 'a'; //And later we can set it to a string
// But this against the whole idea of using TS, because we use TS for type safety,
// so we get type checking and if we use ANY type, we lose that feature
// and major benefit of using TS
function render(document) {
    console.log(document);
}
/*
    In this function, we have an error where document implicitly has ANY type
    Implicitly means we haven't explicitly set the type of this parameter,
    so the compiler is guessing the type of this parameter
    In this case, we have 2 options
    1. --> We can annotate this parameter with ANY
    2. --> In case we have tons of errors of this kind we don't want to explicitly annotate
    various parameters to every function with ANY
    --> There is a nuclear option for that which is not recommended --> Go to tsconfig.json, set 'noImplicitAny' to 'false
*/
// ---------- The ANY type ---------
// ---------- Arrays ---------
// let numbers: number[] = [1, 2, '3']
// This won't work if we pass this array to a function that expects a list of numbers,
// the third element will cause issues
// Code completion(Intellisense)
let numbers = [1, 2, 3];
/* numbers.forEach((n) => n.)
    After typing 'n.', we can see all the properties and methods of number objects,
    because the editor knows the type of 'n', it offers code completion, so we can see
    all the methods of number objects
*/
// ---------- Arrays ---------
// ---------- Tuples ---------
let user = [1, 'Mosh'];
/*
    Tuple is a fixed length array, where each element has a particular type
    We often use them when we work with a pair of values
    First we open a square brackets and then tell the compiler
    that the first element is going to be a number and the second will be a string
    and then we initialize that variable
    We will get an error in case we try to add the third element in the example from above
*/
// Tuples can be useful when we have only 2 values, like key, value pairs
/* One of the methods that can be troublesome is the .push() method
    We can call this method and store the third value in this array
    and compiler will not complain, this is one of the gaps in TS
*/
// ---------- Tuples ---------
// ---------- Enums ---------
/*
    Enums are built-in type which represents a list of related constants
*/
let small = 1;
let medium = 2;
let large = 3;
// We can also group these contants using enum
// We will put memebers inside an enum
// enum Size{small, medium, large}
// By default, the TS compiler assigns the first memeber the value of 0
// and other members 1, 2 and so on
// In case we don't want to use these values, we can explicitly set these values
var anotherSize;
(function (anotherSize) {
    anotherSize[anotherSize["small"] = 30] = "small";
    anotherSize[anotherSize["medium"] = 35] = "medium";
    anotherSize[anotherSize["large"] = 40] = "large";
})(anotherSize || (anotherSize = {}));
// We can also use string values, but then we have to explicitly set a value for each member
var stringifiedSize;
(function (stringifiedSize) {
    stringifiedSize["small"] = "s";
    stringifiedSize["medium"] = "m";
    stringifiedSize["large"] = "l";
})(stringifiedSize || (stringifiedSize = {}));
var Size;
(function (Size) {
    Size[Size["small"] = 1] = "small";
    Size[Size["medium"] = 2] = "medium";
    Size[Size["large"] = 3] = "large";
})(Size || (Size = {}));
// Using this enum, we can declare a new variable:
let mySize = Size.medium;
console.log(mySize);
// If we define our enums using the 'const' keyword, the compiler will generate more optimized code
// ---------- Enums ---------
// ---------- Functions ---------
function calculateTax(income) {
    return 0;
    return income;
}
/*
    The type of return value inside of 'calculateTax' is 'void'
    meaning that this function does not return a value
    function calculateTax(income: number) {
        <empty>
    }

    If we try to return a value(exp: number) and we didn't explicitly set the type
    of our function, the function itself will return a number
    function calculateTax(income: number) {
    return 0
    }
    In this case, the TS compiler assigns the type of the return value automatically
    As a best practice, we should always annotate our functions, all the parameters,
    as well as the return types
    function calculateTax(income: number):number {
        return 0
    }

    Inside of tsconfig -> Type Cheking section, we have a compiler option, called noUnsuedParameters
    We have to explicitly turn it on, because the setting is not part of strict setting

    function calculateTax(income: number): number {
        if (income < 50_000)
        return income * 1.2
        // This will show an error, because if we don't have an
        // else block the return value will be undefined and undefined is not a number
    }

    To stop the compiler of showing that something is undefined, we can turn on a compiler function
    for detecting this kind of issues in case we forget to return a value
    This will detect that not all code paths return a value, so we can just do
    function calculateTax(income: number):number {
        if (income < 50_000)
        return income * 1.2
      return income * 1.3
    }

    There is another compiler setting for detecting local unsued variables
    function calculateTax() {
        let income;
        // In case we don't use this 'income', it's unused
        // We can turn on the setting in tsconfig --> noUnusedLocals
        // When this is turned on, it will inform us that the 'income' is declared, but not used
    }

    If we want to pass-in 3 parameters inside a function and want to use only 2
    We can make that parameter optional by adding '?'
    But if we don't supply that parameter, by default 'undefined' will be used
    and we cannot do anything with 'undefined'
    We can do this:
    function calculateTax(income: number, taxYear?: = 2020): number {
        if ((taxYear) || 2020 < 2022)
        return income * 1.2
      return income * 1.3
      // With this, we can call this function with or without a tax year
      // If we don't supply an argument for the taxYear,
      // the value inside of parameter will be used
      // Otherwise, what we pass as an argument will be used of a function (line: 182) will be used
      // It will overwrite a default value inside of parameter
    }
    console.log(calculateTax(10_000, 2023)
*/
// ---------- Functions --------- 
//# sourceMappingURL=app.js.map