import storage from "@system.storage";
import { Fish } from "./fish";
import { fishList, Level, type FishName } from "./fishList";

export default class FishStore {
  private static _fishStore: { [k: FishName]: Fish } & { lake: any; rod: any };

  static _fishStoreKey = "fishStore";

  static async getFish(name?: FishName | number): Promise<{ [k: FishName]: Fish } | Fish[] | Fish> {
    if (!this._fishStore) {
      await this.init();
    }
    if (typeof name === "number") {
      const store = this._fishStore;
      const level =
        name === 1
          ? Level.ONE
          : name === 2
          ? Level.TWO
          : name === 3
          ? Level.THREE
          : name === 4
          ? Level.FOUR
          : Level.FIVE;
      const fishNames = fishList.get(level);
      const res = [];
      for (const fishName of fishNames) {
        store[fishName.name] && res.push(store[fishName.name]);
      }
      return res;
    }
    return name ? this._fishStore[name] : this._fishStore;
  }

  static async saveFish(fish: Fish) {
    if (!FishStore._fishStore) {
      await this.init();
    }
    if (!FishStore._fishStore[fish.name]) {
      FishStore._fishStore[fish.name] = fish;
    } else {
      const oldFish = FishStore._fishStore[fish.name];
      if (fish.size > oldFish.size) FishStore._fishStore[fish.name] = fish;
    }
    await FishStore.save();
  }

  static async getLake() {
    if (!FishStore._fishStore) {
      await this.init();
    }
    return FishStore._fishStore.lake;
  }

  static async saveLake(lake: any) {
    if (!FishStore._fishStore) {
      await this.init();
    }
    FishStore._fishStore.lake = lake;
    await FishStore.save();
  }

  static async getRod() {
    if (!FishStore._fishStore) {
      await this.init();
    }
    return FishStore._fishStore.rod;
  }

  static async saveRod(rod: any) {
    if (!FishStore._fishStore) {
      await this.init();
    }
    FishStore._fishStore.rod = rod;
    await FishStore.save();
  }

  static save() {
    return new Promise<void>((resolve, reject) => {
      storage.set({
        key: FishStore._fishStoreKey,
        value: JSON.stringify(FishStore._fishStore),
        success() {
          resolve();
        },
        fail() {
          reject();
        }
      });
    });
  }

  static init() {
    return new Promise<void>((resolve) => {
      storage.get({
        key: FishStore._fishStoreKey,
        default: "{}",
        success: (data) => {
          FishStore._fishStore = JSON.parse(data);
          resolve();
        },
        fail: () => {
          FishStore._fishStore = { lake: {}, rod: {} } as any;
          resolve();
        }
      });
    });
  }
}
