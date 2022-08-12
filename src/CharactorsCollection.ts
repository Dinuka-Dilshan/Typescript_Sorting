import {  Sorter } from './Sorter.js';

export class CharactorsCollection extends Sorter {
  constructor(private data: string) {
    super();
  }

  get length(): number {
    return this.data.length;
  }

  get values() {
    return this.data;
  }

  compare = (leftIndex: number, rightIndex: number): boolean =>
    this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase();

  swap = (leftIndex: number, rightIndex: number): void => {
    const characters = this.data.split('');
    const temp = characters[leftIndex];
    characters[leftIndex] = characters[rightIndex];
    characters[rightIndex] = temp;
    this.data = characters.join('');
  };
}
