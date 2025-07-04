import { getFishType, type FishName, type FishType } from "./fishList";

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

  get price() {
    return this.fishInfo.price;
  }

  constructor(public name: FishName) {
    const fishType = getFishType(name);
    if (!fishType) return;
    this.size = fishType.size + Number((Math.random() * fishType.range).toFixed(2));
    this.fishInfo = fishType;
  }
}
