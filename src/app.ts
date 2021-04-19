/* Creating Interfaces */

// interface Pizza {
//   name: string;
//   sizes: string[];
// }

// interface Pizzas{  // can use interface in making new interfaces
//   data: Pizza[]
// }

let pizza: Pizza;

// function createPizza(name: string, sizes: string[]): Pizza {
//   return {
//     name,
//     sizes
//     // deal: true // will cause error
//   };
// }

pizza = createPizza('Pepperoni', ['small', 'medium']);

/* Interfaces with Function Types */
// continues from last code
interface Pizza {
  name: string;
  sizes: string[];
  getAvailableSizes(): string[];
}
// type getAvailableSizes = () => string[]; // observe difference bw type and interface

function createPizza(name: string, sizes: string[]): Pizza {
  return {
    name,
    sizes,
    getAvailableSizes() { // pass function with interface
      return this.sizes;
    }
  };
}
