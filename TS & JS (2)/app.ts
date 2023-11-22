// -------------- Object types --------------

/*
    Object types are not great sometimes,
    because while it does prevent us from storing
    different types inside a variable, it does not
    give us any hints regarding the structure of the object
 */

let user: object

user = {
  name: 'Ilhan',
  age: 25,
  isAdmin: true,
  id: 'abc', // 123
}
user = {}
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
let hobbies1: Array<string>
hobbies1 = ['Sports', 'Cooking', 'Reading']
// We put it like this we we want an array of string values
// We are not able to mutate this array afterwards
// hobbies = [1. 2, 3] --> ERROR

// Option #2:
let hobbies2: string[]
hobbies2 = ['Sports', 'Cooking', 'Reading']
// We can also have number[], boolean[]

// We can also have arrays of object
// {name: string, age: number}[]
// We can do this when we want to have objects of this structure in an array

// -------------- Array types --------------

// -------------- Adding types to function --------------
function add1(a: number, b: number) {
  const result = a + b
  return result
}
// In case we have a function that doesn't return anything, we should use VOID

// We can also add a function parameter to a function

function caculate1(
  a: number,
  b: number,
  calcFn: (a: number, b: number) => number
) {
  calcFn(a, b)
}
caculate1(2, 5, add1)

// -------------- Adding types to function --------------

// -------------- Creating custom types / type aliases --------------
// 'type' keyword is a TS keyword that allows us to create custom types
// To actually add a name to a custom type

// We can create an AddFn and use it as a custom type and then reuse it
type AddFn = (a: number, b: number) => number

function add2(a: number, b: number) {
  const result = a + b
  return result
}

function caculate2(a: number, b: number, calcFn: AddFn) {
  calcFn(a, b)
}
caculate2(2, 5, add2)

type customUser = {
  name: string
  age: number
  isAdmin: boolean
  id: string | number
}

let customUser: customUser

// -------------- Creating custom types / type aliases --------------

// -------------- Defining Object Types with Interfaces --------------
// When it comes to defining objects, in addition to using 'type' keyword
// We can also do the same thing by creating an 'interface'
// The only difference between 'type' and 'interface' keyword is that
// we don't define the type with an '=' sign, instead we only curly braces to it
interface Credentials {
  email: string
  password: string
}

let creds: Credentials

creds = {
  email: 'ilhanbuhic@hotmail.com',
  password: 'ilhan123',
}

// -------------- Defining Object Types with Interfaces --------------


// -------------- Interface vs Custom Type --------------
/*
  We can use both 'interface' and 'type' for defining object type
  We can generally always use the 'type' keyword
  which also allows us to define other types than object types --> (line: 101)
  'Interface' is limited, because we can't store a union type like we can with 'type'
*/

// If we're defining a class of credentials,
// we can use the 'implements' keyword to implement an interface

class AuthCredentials implements Credentials {
  /*
    We have to add the email and password,
    key, value pairs to this class
    We can also add additional properties to this class,
    but we have to at least implement these properties from an interface
  */
  email: string;
  password: string;
  userName: string;
}
// This then forces us to add the properties and methods
// that are defined in  the object of that interface in our class

// We can also create a login function,
// where we expect to get credentials of type 'Credentials'

function login(credentials: Credentials) {

}

// login could be then called with both 'creds' object
login(creds)

// But we could also call login with a new instance of AuthCredentials, 
// since that also implements 'Credentials'
login(new AuthCredentials())
// This works, because an instance 'AuthCredentials' of 'Credentials' interface
// has the ALL SAME methods and properties as the 'Credentials' interface

// This feature where we can implement 'interfaces' into classes
// can be a reason for using 'interfaces' over the 'type' keyword
// if we are working on a project where we're using classes

// Another reason for using the 'interface' keyword
// for defining an object type is that it's easily extendable
// We can easily redefine the same 'interface', with the same name,
// without getting an error and add more properties and methods to it

// interface Credentials {
//   mode: string;
// }

/*
  The reason why we should do it like this and not just add up there
  because this method can be useful if we're for example creating a library
  which we are sharing with other developers from all over the world
  and I have my own interface definition in some part of my library,
  but I want to allow those developers to easily extend my interface
  This feature is called 'declaration merging'
  With this, other developers can just redefine my interface with my name
  and add any properties or methods they need
*/

// -------------- Interface vs Custom Type --------------