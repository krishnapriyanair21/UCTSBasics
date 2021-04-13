/* Type Aliases */
type Size = 'small' | 'medium' | 'large';
type Callback = (size: Size) => void;

let pizzaSize: Size = 'small'; // default small

const selectSize: Callback = (x) => { 
  pizzaSize = x;
}

selectSize('medium');

/* Type Assertions */
