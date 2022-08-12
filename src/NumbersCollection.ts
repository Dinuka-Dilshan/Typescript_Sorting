import { Sortable } from './Sorter';

export class NumbersCollection implements Sortable {
  constructor(private data: number[]) {}

  get length(): number {
    return this.data.length;
  }

  get values() {
    return this.data;
  }

  compare = (leftIndex: number, rightIndex: number): boolean =>
    this.data[leftIndex] > this.data[rightIndex];

  swap = (leftIndex: number, rightIndex: number): void => {
    const left = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = left;
  };
}
