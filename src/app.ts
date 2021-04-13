/* Type Aliases */
type Size = 'small' | 'medium' | 'large';
type Callback = (size: Size) => void;

let pizzaSize: Size = 'small'; // default small

const selectSize: Callback = (x) => { 
  pizzaSize = x;
}

selectSize('medium');

/* Type Assertions */

type Pizza = { name: string, toppings: number };
const pizza: Pizza = { name: 'Blazing Inferno', toppings: 5 };
const serialized = JSON.stringify(pizza);
function getNameFromJSON(obj: string) {
  // return (<Pizza>JSON.parse(obj)).name;  // old way of doing this
  return (JSON.parse(obj) as Pizza).name; // newer way
}

getNameFromJSON(serialized);