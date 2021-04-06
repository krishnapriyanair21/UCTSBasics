// arrow function
const pizzas = [
  { name: 'Pepperoni', toppings: ['pepperoni'] }
];

// const mappedPizzas = pizzas.map(pizza => { /// map function and return explicitly
//   return pizza.name.toUpperCase(); 
// });

const mappedPizzas = pizzas.map(pizza => { pizza.name.toUpperCase() }); ///implicit return
console.log(mappedPizzas);


// const pizza = {
//   name: 'Blazing Inferno',
//   getName: function () {
//     setTimeout( () => { /// arrow functions ignore scope
//     //   console.log(this.name); 
//     // }, 100); logs name with 100 ms
//   },
// };

// console.log(pizza.getName());

 // default parameters
function mulitply( a: number, b = 25) { /// default parameters

  return a * b;
}
console.log(mulitply(5, 25)); /// send both parameters
console.log(mulitply(5)); // send one parameter and use default

// object literals
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

// rest parameter
function sumAll(message: string, ...arr: number[]) {
  console.log(message);
  return arr.reduce((prev, next) => prev + next);
}

const sum = sumAll('Hello!', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

console.log(sum); 

// array spread operator

const toppings3 = ['bacon', 'chili'];

const newToppings = ['pepperoni'];

const allToppings = [...toppings3, ...newToppings]; 

console.log(allToppings);

// object spread operator

const pizza4 = {
  name: 'Pepperoni'
};

const toppings4 = ['pepperoni'];

const order = {   ...pizza4,  toppings4 };


const finalOrder = {...order}
console.log(finalOrder);

// Destructing Arrays and Objects

const pizza5 = {
  name5: 'Pepperoni',
  toppings5: ['pepperoni']
};

function order5({ name5: pizzaName, toppings5: pizzaToppings}) {
  return { pizzaName, pizzaToppings };
}

// const myOrder = order5(pizza5);
const { pizzaName } = order5(pizza5);


const toppingsArray = ['pepperoni', 'bacon', 'chili'];

const [first, second, third] = toppingsArray;

console.log(first, second, third);

function logToppings([first, second, third]:any) {
  console.log(first, second, third);
}

logToppings(toppingsArray);