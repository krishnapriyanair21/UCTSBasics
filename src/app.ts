/* any */
let coupon; // implied any

coupon = 25; // number
coupon = '25'; // string
coupon = true;  // bool

/* Implicit vs Explict Types */
let implicitCoupon = 'pizza23';
let explicitCoupon: string; 


explicitCoupon = 'pizza25';

/* Void Type */
/// doesn't exist in Java Script
let selectedTopping: string = 'pepperoni';

function selectTopping(topping: string): void { 
  selectedTopping = topping;
} /// impure function

selectTopping('bacon');
console.log(selectedTopping);

/* Never Type */
function orderError(error: string): never {
  throw new Error(error);
  // never going to return a value
  // technically void 
  // anything after line 28 will not execute
}

// orderError('Something went wrong');  // uncomment to check will not execute anything past line 35

/* Null, Undefined, Strict Null checks */
// change tsconfig.json strict to false

// let coupon1:string = 'pizza20';
let coupon1: string | null = 'pizza20'; 

function removeCoupon(): void {
  coupon1 = null;  // or undefined
}

console.log(coupon1);  // before null
removeCoupon();
console.log(coupon1); // after null 
// change tsconfig.json strictNullChecks to true
  // will not allow undefined for type string
// change tsconfig.json strict to true

/* Union and Literal Types */
let pizzaSize: string = 'small';
function selectSize(size: 'small' | 'medium' | 'large'): void{
  pizzaSize = size;
} /// only size small medium or large allowed
selectSize('medium');
console.log(`Pizza size: ${pizzaSize}`);

// works with numbers, bool, and enums as well

/* Function Types */
function sumOrder(price: number, quantity: number): number{
  return price * quantity;
}
// let sumOrder2: Function;
let sumOrder2: (price: number, quantity: number) => number;
sumOrder2 = (x, y) => x * y;

const sum = sumOrder(25, 2);
const sum2 = sumOrder2(25, 2);

console.log(`Total Sum 1: ${sum}`);
console.log(`Total Sum 2: ${sum2}`);

/* Functions and Optional Arguments */
 // continuation of last section

let sumOrder3: (price: number, quantity?: number) => number;
sumOrder3 = (x, y) => {
  if (y) {
    return x * y;
  }
  return x;
}

const sum3 = sumOrder3(25);
console.log(`Total Sum 3: ${sum3}`);

/* Typed Functions and Default Parameters */
// continuation of last section
let sumOrder4: (price: number, quantity?: number) => number;
// sumOrder4 = (x, y) => {
//   const q = y || 1;
//   return x * q;
// }

sumOrder4 = (x, y = 1) =>  x * y; 

const sum4 = sumOrder4(25);
console.log(`Total Sum 4: ${sum4}`);

/* Object Types */

let pizza: { name: string, price: number, getName(): string } = {
  name: 'Plain old Pepperoni',
  price: 20,
  getName() {
    return pizza.name;
  }
};

console.log(pizza.getName());

/* Array Types and Generics */

let sizes: string[];
sizes = ['small', 'medium', 'large'];

let sizesNum: number[];
sizesNum = [1, 2, 3];

let toppingsArr: Array<string>; // requires type in < >
toppingsArr = ['pepperoni', 'tomato', 'bacon'];

/* Tuple Types for Arrays */
const pizzaTupleEx = ['Pepperoni', 20, '', 20, true]; /// still valid but not what we want

let pizzaTuple: [string, number, boolean];
pizzaTuple = ['Pepperoni', 20, true]; // order matters
