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