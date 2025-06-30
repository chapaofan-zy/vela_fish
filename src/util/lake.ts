import { Fish } from "./fish";
import { fishList, Level } from "./fishList";
import FishStore from "./fishStore";

export enum LakeLevel {
  ONE = 1,
  TWO = 2,
  THREE = 3
}

interface Probability {
  one: number;
  two: number;
  three: number;
  four: number;
  five: number;
}

export enum RodType {
  ONE = 1,
  TWO = 2,
  THREE = 3
}

export default class Lake {
  private static lakeLevelMap = new Map<LakeLevel, Probability>([
    [LakeLevel.ONE, { one: 2, two: 8, three: 10, four: 30, five: 50 }],
    [LakeLevel.TWO, { one: 2, two: 8, three: 10, four: 30, five: 50 }],
    [LakeLevel.THREE, { one: 2, two: 8, three: 10, four: 30, five: 50 }]
  ]);
  rod = new Rod();
  bite = false;
  isBiting = false;
  private timer?: number;
  level: LakeLevel;
  probability: Probability = Lake.lakeLevelMap.get(LakeLevel.ONE);
  constructor() {
    this.getLevel();
  }

  private _reject?: (r?: any) => void;

  private async getLevel() {
    this.level = (await FishStore.getLake())?.level || LakeLevel.ONE;
    this.probability = Lake.lakeLevelMap.get(LakeLevel.ONE);
  }

  waitForBite() {
    return new Promise<Fish>((resolve, reject) => {
      this._reject = reject;
      setTimeout(async () => {
        try {
          resolve(await this.onBite());
        } catch (e) {
          console.error(e);
          reject();
        }
      }, Math.random() * 3 * 1000);
    });
  }

  private onBite() {
    return new Promise<Fish>((resolve) => {
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
          resolve(this.getFish());
        }
        this.bite = false;
      }, 3000);
    });
  }

  checkLake() {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.bite = false;
      console.log("fail");
      this._reject?.();
    }, 500);
  }

  clickLake(isBiting: boolean) {
    if (!isBiting || !this.bite) return;
    console.log("click");
    this.checkLake();
  }

  private getFish() {
    const level = this.genLevel();
    console.log("levela", level);

    const fishes = fishList.get(level);
    console.log("fishes", fishes);

    const fishType = fishes.sort(() => Math.random() - 0.5)?.[0];
    console.log("fish");
    return new Fish(fishType.name);
  }

  private genLevel() {
    const r = Math.random() * 100;
    return r >= this.probability.five
      ? Level.FIVE
      : r >= this.probability.four
      ? Level.FOUR
      : r >= this.probability.three
      ? Level.THREE
      : r >= this.probability.two
      ? Level.TWO
      : Level.ONE;
  }
}

class Rod {
  type: RodType;
  constructor() {
    this.getRod();
  }
  async getRod() {
    this.type = (await FishStore.getRod())?.type || RodType.ONE;
  }

  drop() {}
}
