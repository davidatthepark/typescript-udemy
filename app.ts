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

// tuples - order matters
let address: [number, string] = [2740, 'Mercer'];

// enum - less memory and typos
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
