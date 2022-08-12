import { Sortable } from './Sorter';

class LinkedListNode {
  next: LinkedListNode | null = null;

  constructor(public value: number) {}
}

export class LinkedList implements Sortable {
  private head: LinkedListNode | null = null;
  private count: number = 0;

  get length(): number {
    return this.count;
  }

  add = (value: number): void => {
    const node = new LinkedListNode(value);
    this.count++;

    if (!this.head) {
      this.head = node;
      return;
    }

    let tail = this.head;

    while (tail.next) {
      tail = tail.next;
    }

    tail.next = node;
  };

  at = (index: number): LinkedListNode => {
    if (index > this.count) {
      throw new Error('index out of bound');
    }

    let node = this.head;

    for (let x = 0; x < index ; x++) {
      node = node!.next;
    }

    return node!;
  };

  compare = (leftIndex: number, rightIndex: number): boolean => {
    if (!this.head) throw new Error('index out of bound');

    return this.at(leftIndex).value > this.at(rightIndex).value;
  };

  swap = (leftIndex: number, rightIndex: number) => {
    const leftValue = this.at(leftIndex).value;
    this.at(leftIndex).value = this.at(rightIndex).value;
    this.at(rightIndex).value = leftValue;
  };

  print = ():string =>{
    let node = this.head;
    let str = ''
    for (let x = 0; x < this.count; x++) {
        str = str +  `${node!.value}, `
        node = node!.next;
    }

    return str;
  }
}
