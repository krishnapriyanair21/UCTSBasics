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
