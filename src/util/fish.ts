import { fishMap, type FishName } from "./fishList";

export interface FishType {
  name: string;
  size: number;
  range: number;
  level: number;
  img: string;
  description?: string;
}

export class Fish {
  static fishMap = fishMap;

  readonly date = new Date();
  readonly size: number;
  readonly fish: FishType;

  constructor(public name: FishName) {
    const fish = Fish.fishMap.get(name);
    if (!fish) return;
    this.size = fish.size + Number((Math.random() * fish.range).toFixed(2));
    this.fish = fish;
  }
}
