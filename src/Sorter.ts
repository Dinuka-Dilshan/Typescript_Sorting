export interface Sortable {
  length: number;
  swap: (leftIndex: number, rightIndex: number) => void;
  compare: (leftIndex: number, rightIndex: number) => boolean;
}

export abstract class Sorter implements Sortable {
  abstract compare: (leftIndex: number, rightIndex: number) => boolean;
  abstract swap: (leftIndex: number, rightIndex: number) => void;
  abstract length: number;

  sort = (): void => {
    for (let x = 0; x < this.length; x++) {
      for (let y = 0; y < this.length - x - 1; y++) {
        if (this.compare(y, y + 1)) {
          this.swap(y, y + 1);
        }
      }
    }
  };
}
