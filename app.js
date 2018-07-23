"use strict";
// string
var myName = 'David';
// myName = 28;
// number
var myAge = 27;
// myAge = 'David';
// assign types
var myRealAge;
myRealAge = 27;
// myRealAge = '27';
// array
var hobbies = ['Gaming', 'Coding'];
// hobbies = [1000]
// tuples - Express a fixed length array where the elements don't need to be the same type. Order matters.
var address = [2740, 'Mercer'];
// enum - Gives friendly names to sets of numeric values. Benefit - less memory and typos.
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 101] = "Blue";
})(Color || (Color = {}));
var myColor = Color.Blue;
console.log(myColor); // 1
// any - try not to use.
var car = 'Honda';
console.log(car);
car = { brand: 'Honda' };
console.log(car);
// functions
function returnMyName() {
    return myName;
}
console.log(returnMyName());
// void
function sayHello() {
    console.log('Hello!');
}
// argument types
function multiply(num1, num2) {
    return num1 * num2;
}
// console.log(multiply(2, 'David'));
console.log(multiply(2, 10));
// function types
var myMultiply;
// myMultiply = sayHello;
myMultiply = multiply;
// objects
var userData = {
    name: 'David',
    age: 27,
};
// userData = {}; The type is already inferred. Can't reassign.Properties must match.
// explicit object type
var userData2 = {
    name: 'David',
    age: 27,
};
// complex object
var complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
// union types - Allowing more than 1 type
var myRealRealAge = 27;
myRealRealAge = '27';
// myRealRealAge = false;
// checking types
var finalValue = 911;
if (typeof finalValue === 'number') {
    console.log('final value is a number');
}
// never - Does not return anything. Will rarely use. Possibly in a function where it shouldn't be reached.
function neverReturns() {
    throw new Error('An erorr');
}
// nullable types
var canBeNull = 12;
canBeNull = null;
var canAlsoBeNull; // undefined in JS and TS
canAlsoBeNull = null; // undefined variables can be null
var canThisBeAny = null; // any
canThisBeAny = 12;
// section 1 excercise
var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: 'Max',
    bankAccount: bankAccount,
    hobbies: ['Sports', 'Cooking'],
};
myself.bankAccount.deposit(3000);
console.log(myself);
