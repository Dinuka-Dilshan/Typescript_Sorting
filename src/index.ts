import { CharactorsCollection } from './CharactorsCollection.js';
import { NumbersCollection } from './NumbersCollection.js';
import { Sorter } from './Sorter.js';

import { LinkedList } from './LinkedList.js';


const string = new CharactorsCollection('dasec')
const stringSorter = new Sorter(string);
stringSorter.sort();
console.log(string.values);

const numbers = new NumbersCollection([8, 6, 4, 7, 5])
const numberSorter = new Sorter(numbers);
numberSorter.sort();
console.log(numbers.values);


const list = new LinkedList();
list.add(20);
list.add(10);
list.add(5);
list.add(4);
list.add(85);
list.add(12);
const listSorter = new Sorter(list);
listSorter.sort();
console.log(list.print());
