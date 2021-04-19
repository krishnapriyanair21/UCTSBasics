/* Understanding Classes and Constructors */
// class version
class Pizza {
  name: string;
  toppings: string[] = [];
  constructor(name: string) {
    this.name = name;
  }
  addTopping(topping: string) {
    this.toppings.push(topping);
  }
}
// //function version
// function Pizza(name: string) { // turn off strict mode in tsconfig
//   this.name = name;
//   this.toppings = [];
// }

// Pizza.prototype.addTopping = function addTopping(topping: string) {
//   this.toppings.push(topping);
// }

const pizza = new Pizza('Pepperoni');

pizza.addTopping('pepperoni');

console.log(pizza);