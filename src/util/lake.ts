import { Fish } from "./fish";
import { fishList, Level } from "./fishList";

export default class Lake {
  rod = new Rod();
  bite = false;
  isBiting = false;
  private timer?: number;
  constructor() {}

  waitForBite() {
    setTimeout(() => {
      this.onBite();
    }, Math.random() * 3 * 1000);
  }

  private onBite() {
    this.bite = true;
    this.isBiting = true;
    console.log("shang gou", this.bite);
    clearTimeout(this.timer);
    this.checkLake();
    setTimeout(() => {
      this.isBiting = false;
      if (this.bite) {
        clearTimeout(this.timer);
        console.log("shang yu", this.bite);
        this.getFish();
      }
      this.bite = false;
    }, 3000);
  }

  checkLake() {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.bite = false;
      console.log("fail");
    }, 500);
  }

  clickLake(isBiting: boolean) {
    if (!isBiting || !this.bite) return;
    console.log("click");
    this.checkLake();
  }

  private getFish() {
    const level = this.genLevel();
    const fishes = fishList.get(level);
    const fish = fishes.sort(() => Math.random() - 0.5)?.[0];
    console.log("fish");

    return Fish.fishMap.get(fish) || null;
  }

  private genLevel() {
    const r = Math.random() * 100;
    return r >= Level.FIVE
      ? Level.FIVE
      : r >= Level.FOUR
      ? Level.FOUR
      : r >= Level.THREE
      ? Level.THREE
      : r >= Level.TWO
      ? Level.TWO
      : Level.ONE;
  }
}

class Rod {
  constructor() {}

  drop() {}
}
