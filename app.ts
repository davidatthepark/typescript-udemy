// string
let myName = 'David';
// myName = 28;

// number
let myAge = 27;
// myAge = 'David';

// assign types
let myRealAge: number;
myRealAge = 27;
// myRealAge = '27';

// array
let hobbies: string[] = ['Gaming', 'Coding'];
// hobbies = [1000]

// tuples - Express a fixed length array where the elements don't need to be the same type. Order matters.
let address: [number, string] = [2740, 'Mercer'];

// enum - Gives friendly names to sets of numeric values. Benefit - less memory and typos.
enum Color {
  Gray,         // 0
  Green = 100,  // reassigned from 1
  Blue,         // 101
}

let myColor: Color = Color.Blue;
console.log(myColor); // 1

// any - try not to use.
let car: any = 'Honda';
console.log(car);
car = { brand: 'Honda' };
console.log(car);

// functions
function returnMyName(): string {
  return myName;
}
console.log(returnMyName());

// void
function sayHello(): void {
  console.log('Hello!');
}

// argument types
function multiply(num1: number, num2: number): number {
  return num1 * num2;
}

// console.log(multiply(2, 'David'));
console.log(multiply(2, 10));

// function types
let myMultiply: (val1: number, val2: number) => number;
// myMultiply = sayHello;
myMultiply = multiply;

// objects
let userData = {
  name: 'David',
  age: 27,
};

// userData = {}; The type is already inferred. Can't reassign.Properties must match.

// explicit object type
let userData2: { name: string, age: number } = {
  name: 'David',
  age: 27,
}

// complex object
let complex: { data: number[], output: (all: boolean) => number[]} = {
  data: [100, 3.99, 10],
  output: function(all: boolean): number[] {
    return this.data;
  }
}

let complex2: Complex = {
  data: [100, 3.99, 10],
  output: function(all: boolean): number[] {
    return this.data;
  }
}

// type alias - Create a reusable type
type Complex = { data: number[], output: (all: boolean) => number[] };

// union types - Allowing more than 1 type
let myRealRealAge: number | string = 27;
myRealRealAge = '27';
// myRealRealAge = false;

// checking types
let finalValue = 911;
if (typeof finalValue === 'number') {
  console.log('final value is a number');
}

// never - Does not return anything. Will rarely use. Possibly in a function where it shouldn't be reached.
function neverReturns():never {
  throw new Error('An erorr');
}

// nullable types
let canBeNull: number | null = 12;
canBeNull = null;
let canAlsoBeNull; // undefined in JS and TS
canAlsoBeNull = null; // undefined variables can be null
let canThisBeAny = null; // any
canThisBeAny = 12;

// section 1 excercise

type BankAccount = { money: number, deposit(value: number): void };

let bankAccount: BankAccount = {
  money: 2000,
  deposit(value: number): void {
    this.money += value;
  }
};

let myself: { name: string, bankAccount: BankAccount, hobbies: string[] } = {
  name: 'Max',
  bankAccount: bankAccount,
  hobbies: ['Sports', 'Cooking'],
};

myself.bankAccount.deposit(3000);
console.log(myself);
