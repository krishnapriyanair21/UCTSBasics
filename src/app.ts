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
// class Pizza { 
//   // name: string;
//   toppings: string[] = [];
//   constructor(readonly name: string) {} // name cannot be changed after init
//   addTopping(topping: string) {
//     this.toppings.push(topping);
//   }
// }
// const pizza = new Pizza('Pepperoni');

// pizza.addTopping('pepperoni');
// // pizza.name = 'ABC'; // cannot assign bc readonly
// console.log(pizza);

/* Setters and Getters (Accessors) */
// class Sizes {
//   constructor(public sizes: string[]){}
    
//   set availableSizes(sizes: string[]) {
//     this.sizes = sizes;
//   }
  
//   get availableSizes(){
//     return this.sizes;
//   }
// }
// const sizes = new Sizes(['small', 'medium']);
// console.log(sizes.availableSizes); //invoke getter

// sizes.availableSizes = ['medium', 'large']; // invoke setter
// console.log(sizes.availableSizes); //invoke getter after change

// class Pizza {
//   toppings: string[] = [];
//   constructor(readonly name: string) {}
//   addTopping(topping: string) {
//     this.toppings.push(topping);
//   }
// }

// const pizza = new Pizza('Pepperoni');

// pizza.addTopping('pepperoni');
// console.log(pizza);

/* Classes and Inheritance */
// class Sizes {
//   constructor(public sizes: string[]){}
    
//   set availableSizes(sizes: string[]) {
//     this.sizes = sizes;
//   }
  
//   get availableSizes(){
//     return this.sizes;
//   }
// }

// class Pizza extends Sizes {
//   toppings: string[] = [];
//   constructor(readonly name: string, public sizes: string[]) {
//     super(sizes); // calls parent class
//   }
//   addTopping(topping: string) {
//     this.toppings.push(topping);
//   }
// }

// const pizza = new Pizza('Pepperoni', ['small', 'medium']);
// console.log(pizza.availableSizes);
// pizza.addTopping('pepperoni');

/* Abstract Classes */
// abstract class Sizes {
//   constructor(public sizes: string[]){}
    
//   set availableSizes(sizes: string[]) {
//     this.sizes = sizes;
//   }
  
//   get availableSizes(){
//     return this.sizes;
//   }
// }

// // new Sizes(['small']); // error prone behavior (fixed with abstract class)
// class Pizza extends Sizes {
//   toppings: string[] = [];
//   constructor(readonly name: string, public sizes: string[]) {
//     super(sizes); // calls parent class
//   }
//   addTopping(topping: string) {
//     this.toppings.push(topping);
//   }
// }

// const pizza = new Pizza('Pepperoni', ['small', 'medium']);
// console.log(pizza.availableSizes);
// pizza.addTopping('pepperoni');

/* Protected Members and Inheritance */
// abstract class Sizes {
//   constructor(protected sizes: string[]){} // can access sizes in inheriting classes
    
//   set availableSizes(sizes: string[]) {
//     this.sizes = sizes;
//   }
  
//   get availableSizes(){
//     return this.sizes;
//   }
// }
// class Pizza extends Sizes {
//   toppings: string[] = [];
//   constructor(readonly name: string, sizes: string[]) {
//     super(sizes);
//   }
//   public updateSizes(sizes: string[]) {
//     this.sizes = sizes; // if sizes is private in Sizes class then error
//   }
//   addTopping(topping: string) {
//     this.toppings.push(topping);
//   }
// }

// const pizza = new Pizza('Pepperoni', ['small', 'medium']);
// console.log(pizza.availableSizes); // before change
// pizza.updateSizes(['large']);
// console.log(pizza.availableSizes); // after change

/* Interface Contracts with "implements" */
interface SizesInterface{
  availableSizes: string[];
}
abstract class Sizes implements SizesInterface { // implement for interfaces inheritance
  constructor(protected sizes: string[]){} 
    
  set availableSizes(sizes: string[]) {
    this.sizes = sizes;
  }
  
  get availableSizes(){
    return this.sizes;
  }
}
interface PizzaInterface extends SizesInterface{
  readonly name: string;
  toppings: string[];
  updateSizes(sizes: string[]): void;
  addTopping(topping: string): void;
}
class Pizza extends Sizes implements PizzaInterface {
  toppings: string[] = [];
  constructor(readonly name: string, sizes: string[]) {
    super(sizes);
  }
  public updateSizes(sizes: string[]) {
    this.sizes = sizes; 
  }
  addTopping(topping: string) {
    this.toppings.push(topping);
  }
}
/* States Properties and Methods */
// const date = +new Date();
const date = Date.now();
console.log(date);

class Coupon{
  static allowed = ['Pepperoni', 'Blazing Inferno'];
  static create(perc: number) {
    return `PIZZA_RESTAURANT_${perc}`;
  }
}

console.log(Coupon.allowed);
console.log(Coupon.create(25));
