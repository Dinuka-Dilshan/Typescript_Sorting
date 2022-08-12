import { NumbersCollection } from './NumbersCollection.js';
import { Sorter } from './Sorter.js';

const numbers = new NumbersCollection([8, 6, 4, 7, 5]);
const sorter = new Sorter(numbers);
sorter.sort();
console.log(numbers.values);
