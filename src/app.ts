/* Creating Interfaces */

interface Pizza {
  name: string;
  sizes: string[];
}

// interface Pizzas{  // can use interface in making new interfaces
//   data: Pizza[]
// }

let pizza: Pizza;

function createPizza(name: string, sizes: string[]): Pizza {
  return {
    name,
    sizes
    // deal: true // will cause error
  };
}

pizza = createPizza('Pepperoni', ['small', 'medium']);