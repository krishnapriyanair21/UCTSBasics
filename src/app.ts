/* Creating Interfaces */

// interface Pizza {
//   name: string;
//   sizes: string[];
// }

// interface Pizzas{  // can use interface in making new interfaces
//   data: Pizza[]
// }

// let pizza: Pizza;

// function createPizza(name: string, sizes: string[]): Pizza {
//   return {
//     name,
//     sizes
//     // deal: true // will cause error
//   };
// }

// pizza = createPizza('Pepperoni', ['small', 'medium']);

/* Interfaces with Function Types */
// continues from last code
// interface Pizza {
//   name: string;
//   sizes: string[];
//   getAvailableSizes(): string[];
// }
// type getAvailableSizes = () => string[]; // observe difference bw type and interface

// function createPizza(name: string, sizes: string[]): Pizza {
//   return {
//     name,
//     sizes,
//     getAvailableSizes() { // pass function with interface
//       return this.sizes;
//     }
//   };
// }

/* Extending interfaces */
// continued 

// interface Sizes{
//   sizes: string[];
// }
// interface Pizza extends Sizes { // inherit properties from Sizes
//   name: string;
//   getAvailableSizes(): string[];
// }

// let pizza: Pizza;

// function createPizza(name: string, sizes: string[]): Pizza {
//   return {
//     name,
//     sizes,
//     getAvailableSizes() { // pass function with interface
//       return this.sizes;
//     }
//   };
// }
// pizza = createPizza('Pepperoni', ['small', 'medium']);

/* Interfaces and Optional Properties */
// continued
// interface Sizes{
//   sizes: string[];
// }
// interface Pizza extends Sizes { // inherit properties from Sizes
//   name: string;
//   toppings?: number;  // toppings is optional
//   getAvailableSizes(): string[];
// }

// let pizza: Pizza;

// function createPizza(name: string, sizes: string[]): Pizza {
//   return {
//     name,
//     sizes,
//     // toppings: 1,  // may not be what we want
//     getAvailableSizes() { 
//       return this.sizes;
//     }
//   };
// }
// pizza = createPizza('Pepperoni', ['small', 'medium']);
// pizza.toppings = 1;

/* Interfaces with Index Signatures */
interface Sizes{
  sizes: string[];
}
interface Pizza extends Sizes { // inherit properties from Sizes
  name: string;
  toppings?: number;  // toppings is optional
  getAvailableSizes(): string[];
  [key: number]: string; // give data index signature
  // number stored as string (i.e "1")
  // [key: string]: any; 
}

let pizza: Pizza;

function createPizza(name: string, sizes: string[]): Pizza {
  return {
    name,
    sizes,
    // toppings: 1,  // may not be what we want
    getAvailableSizes() { 
      return this.sizes;
    }
  };
}
pizza = createPizza('Pepperoni', ['small', 'medium']);
pizza[1] = 'xyz'
pizza.toppings = 1;