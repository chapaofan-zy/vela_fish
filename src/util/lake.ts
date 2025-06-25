import { Fish } from "./fish";
import { fishList, Level } from "./fishList";

export default class Lake {
  rod = new Rod();
  constructor() {}

  waitForBite() {
    setTimeout(() => {
      console.log(this.getFish());
    }, Math.random() * 3 * 1000);
  }

  private getFish() {
    const level = this.genLevel();
    const fishes = fishList.get(level);
    const fish = fishes.sort(() => Math.random() - 0.5)?.[0];
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
