/* Understanding Classes and Constructors */
// class version
// class Pizza {
//   name: string;
//   toppings: string[] = [];
//   constructor(name: string) {
//     this.name = name;
//   }
//   addTopping(topping: string) {
//     this.toppings.push(topping);
//   }
// }
// //function version
// function Pizza(name: string) { // turn off strict mode in tsconfig
//   this.name = name;
//   this.toppings = [];
// }

// Pizza.prototype.addTopping = function addTopping(topping: string) {
//   this.toppings.push(topping);
// }

// const pizza = new Pizza('Pepperoni');

// pizza.addTopping('pepperoni');

// console.log(pizza);
/* Public and Private members */
//continued

// class Pizza { // method default is public
//   // name: string;
//   toppings: string[] = [];
//   constructor(private name: string) {}
//   addTopping(topping: string) {
//     this.toppings.push(topping);
//   }
// }
// const pizza = new Pizza('Pepperoni');

// pizza.addTopping('pepperoni');
// // pizza. // cannot access name
// console.log(pizza);

/*  Readonly Members */
class Pizza { 
  // name: string;
  toppings: string[] = [];
  constructor(readonly name: string) {} // name cannot be changed after init
  addTopping(topping: string) {
    this.toppings.push(topping);
  }
}
const pizza = new Pizza('Pepperoni');

pizza.addTopping('pepperoni');
// pizza.name = 'ABC'; // cannot assign bc readonly
console.log(pizza);