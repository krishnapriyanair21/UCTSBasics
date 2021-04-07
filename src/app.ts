/// number types, aruguments and functions
      // Number, Boolean, String (Java types)

const pizzaCost = 10;  // infered type number
let tempVar: number = 12; // explict type

 // pizzaCost = '25'; /// type string is not assignable to number

const pizzaToppings: number = 2;

function calculatePrice(cost: number, toppings: number) : number {
  return (cost + 1.5 * toppings)
  /// return (cost + 1.5 * toppings).toString();  
    // will throw error because return is assigned number
}
const cost: number = calculatePrice(pizzaCost, pizzaToppings);
console.log(`Pizza costs: ${cost}`);  /// use ` for ES string and ' for others

//String type, String Literal

const coupon: string = 'pizza25'; // double or single quote

function normalizeCoupon(code: string): string{
  return code.toUpperCase();
}

// const couponMessage: string =  `
//   I am a string
// `;
// multi line string

const couponMessage: string = `Final coupon is ${normalizeCoupon(coupon)}`;

console.log(couponMessage);

// Boolean Type Boolean Literal

const item: number = 5;

function offerDiscout(orders: number): boolean{
  return orders >= 3;
}

if (offerDiscout(item)) {
  console.log(`You're entitiled to a discount!`);
} else {
  console.log(`Order 3 or more pizzas for a discount`);
}