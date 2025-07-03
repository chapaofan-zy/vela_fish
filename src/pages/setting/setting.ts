import { defineUxComponent } from "ux-types";
import FishStore from "../../util/fishStore";

export default defineUxComponent({
  private: {
    lake: 1,
    rod: 1
  },
  async onShow() {
    this.lake = Number(await FishStore.getLake()) || 1;
    this.rod = Number(await FishStore.getRod()) || 1;
  },
  async changeLake(n: number) {
    if (n === 1) {
      this.lake = ((this.lake + 3) % 3) + 1;
    } else {
      this.lake = this.lake - 1;
      if (this.lake <= 0) this.lake += 3;
    }
    await FishStore.saveLake({ level: this.lake });
  },
  async changeRod(n: number) {
    if (n === 1) {
      this.rod = ((this.rod + 3) % 3) + 1;
    } else {
      this.rod = this.rod - 1;
      if (this.rod <= 0) this.rod += 3;
    }
    await FishStore.saveRod({ type: this.rod });
  }
});
