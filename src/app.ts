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