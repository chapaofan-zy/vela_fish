import { getFishType, type FishName } from "./fishList";

export interface FishType {
  name: string;
  size: number;
  range: number;
  level: number;
  img: string;
  description?: string;
}

export class Fish {
  readonly date = new Date().toLocaleString();
  readonly size: number;
  readonly fishInfo: FishType;

  get level() {
    return this.fishInfo.level;
  }

  get description() {
    return this.fishInfo.description;
  }

  get img() {
    return this.fishInfo.img;
  }

  constructor(public name: FishName) {
    const fishType = getFishType(name);
    if (!fishType) return;
    this.size = fishType.size + Number((Math.random() * fishType.range).toFixed(2));
    this.fishInfo = fishType;
  }
}
