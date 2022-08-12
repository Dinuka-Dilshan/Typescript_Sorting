import { CharactorsCollection } from './CharactorsCollection.js';
import { NumbersCollection } from './NumbersCollection.js';
import { Sorter } from './Sorter.js';

import { LinkedList } from './LinkedList.js';

const stringCollection = new CharactorsCollection('dasec');
stringCollection.sort();

console.log(stringCollection.values);

const numbersCollection = new NumbersCollection([8, 6, 4, 7, 5]);
numbersCollection.sort();
console.log(numbersCollection.values);

const list = new LinkedList();
list.add(20);
list.add(10);
list.add(5);
list.add(4);
list.add(85);
list.add(12);

list.sort();
console.log(list.print());
