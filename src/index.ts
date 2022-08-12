import { CharactorsCollection } from './CharactorsCollection.js';
import { NumbersCollection } from './NumbersCollection.js';
import { Sorter } from './Sorter.js';

const numbers = new NumbersCollection([8, 6, 4, 7, 5]);
const string = new CharactorsCollection('dasec')
const sorter = new Sorter(string);
sorter.sort();
console.log(string.values);