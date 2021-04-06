const pizzas = [
  { name: 'Pepperoni', toppings: ['pepperoni'] }
];

// const mappedPizzas = pizzas.map(pizza => { /// map function and return explicitly
//   return pizza.name.toUpperCase(); 
// });

const mappedPizzas = pizzas.map(pizza => { pizza.name.toUpperCase() }); ///implicit return
console.log(mappedPizzas);


const pizza = {
  name: 'Blazing Inferno',
  getName: function () {
    setTimeout( () => { /// arrow functions ignore scope
      console.log(this.name); 
    }, 100);
  },
};

console.log(pizza.getName());


function mulitply( a: number, b = 25) { /// default parameters

  return a * b;
}
console.log(mulitply(5, 25)); /// send both parameters
console.log(mulitply(5)); // send one parameter and use default

const pizza2 = {
  name: 'Pepperoni',
  price: 15,
  getName() {
    return this.name;
  }
};


const toppings2 = ['pepperoni'];

// const order = { pizza2, toppings2 }; /// create object with other objects

function createOrder(pizza2: any , toppings2: any) {
  return { pizza2, toppings2 };
}

console.log(createOrder(pizza2,toppings2));


function sumAll(message: string, ...arr: number[]) {
  console.log(message);
  return arr.reduce((prev, next) => prev + next);
}

const sum = sumAll('Hello!', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

console.log(sum); 