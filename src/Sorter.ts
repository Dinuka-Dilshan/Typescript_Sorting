
export interface Sortable{
    length:number,
    swap:(leftIndex:number,rightIndex:number)=>void ,
    compare:(leftIndex:number,rightIndex:number)=>boolean
}

export class Sorter {
  constructor(public collection: Sortable) {}

  sort = (): void => {
    for (let x = 0; x < this.collection.length; x++) {
      for (let y = 0; y < this.collection.length - x - 1; y++) {
        if (this.collection.compare(y, y + 1)) {
          this.collection.swap(y, y + 1);
        }
      }
    }
  };
}
