// -------------- Object types --------------
/*
    Object types are not great sometimes,
    because while it does prevent us from storing
    different types inside a variable, it does not
    give us any hints regarding the structure of the object
 */
var user;
user = {
    name: 'Ilhan',
    age: 25,
    isAdmin: true,
    id: 'abc', // 123
};
user = {};
/*
        Because we annotated user as an object, it allows us to
        store different number of properties inside of an object,
        but it also allows us to redeclare an object wihtout any key, value pairs
        And in most situations that's not what we want
    
        In usual cases, we want to make sure that user must always be an object
        with exactly specific structure
    */
// Instead of setting user like this --> let user: object
// We can do this instead --> let user: {}
// Now, inside of this user object, we can define everything that we want in specific
/*
        let user = {
            name: string;
            age: number;
            isAdmin: boolean;
            id: string | number;
            // When defining a type, we should use ';', instead of a ','
            // When defining a value, we should use ',', instead of a ';'
        }
        With this, we are setting the user of the shape that we want
    
        Now if we try to redeclare this user to an empty object, we would get an error
        user = {} --> ERROR
        Because an empty object doesn't have the same shape as the one we declared above
    */
// -------------- Object types --------------
// -------------- Array types --------------
// let hobbies: Array
// hobbies = ['Sports', 'Cooking', 'Reading']
// This array type 'Array' only works if we give it more information
// about other related types
// Therefore an array type that consists of string elements inside of an array
// needs to be written like this -->
// Option #1:
var hobbies1;
hobbies1 = ['Sports', 'Cooking', 'Reading'];
// We put it like this we we want an array of string values
// We are not able to mutate this array afterwards
// hobbies = [1. 2, 3] --> ERROR
// Option #2:
var hobbies2;
hobbies2 = ['Sports', 'Cooking', 'Reading'];
// We can also have number[], boolean[]
// We can also have arrays of object
// {name: string, age: number}[]
// We can do this when we want to have objects of this structure in an array
// -------------- Array types --------------
// -------------- Adding types to function --------------
function add1(a, b) {
    var result = a + b;
    return result;
}
// In case we have a function that doesn't return anything, we should use VOID
// We can also add a function parameter to a function
function caculate1(a, b, calcFn) {
    calcFn(a, b);
}
caculate1(2, 5, add1);
function add2(a, b) {
    var result = a + b;
    return result;
}
function caculate2(a, b, calcFn) {
    calcFn(a, b);
}
caculate2(2, 5, add2);
var customUser;
var creds;
creds = {
    email: 'ilhanbuhic@hotmail.com',
    password: 'ilhan123',
};
// -------------- Defining Object Types with Interfaces --------------
// -------------- Interface vs Custom Type --------------
// We can use both 'interface' and 'type' for defining object type
// We can generally always use the 'type' keyword
// which also allows us to define other types than object types --> (line: 101)
// 'Interface' is limited, because we can't store a union type like we can with 'type'
// -------------- Interface vs Custom Type --------------
