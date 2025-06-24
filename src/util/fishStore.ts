import storage from "@system.storage";
import { Fish } from "./fish";

export default class FishStore {
  private static _fishStore: Map<string, Fish[]>;

  static async getFishStore(): Promise<Map<string, Fish[]>> {
    if (!this._fishStore) {
      await this.init();
    }
    return this._fishStore;
  }

  static init() {
    return new Promise<void>((resolve) => {
      storage.get({
        key: "fishStore",
        default: "{}",
        success: (data) => {
          for (const [name, fish] of Object.entries<Fish[]>(JSON.parse(data))) {
            FishStore._fishStore.set(name, fish);
          }
          resolve();
        },
        fail: () => {
          FishStore._fishStore = new Map<string, Fish[]>();
          resolve();
        }
      });
    });
  }
}
