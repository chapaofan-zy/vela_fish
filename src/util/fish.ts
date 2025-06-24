export interface FishType {
  name: string;
  size: number;
  range: number;
  level: number;
  img: string;
  probability: number;
  description?: string;
}

export enum FishName {
  AAA
}

export class Fish {
  static fishTypes = new Map<FishName, FishType>();

  readonly date = new Date();
  readonly size: number;
  readonly fish: FishType;

  constructor(public name: FishName) {
    const fish = Fish.fishTypes.get(name);
    if (!fish) return;
    this.size = fish.size + Number((Math.random() * fish.range).toFixed(2));
    this.fish = fish;
  }
}
