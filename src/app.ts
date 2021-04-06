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