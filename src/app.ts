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