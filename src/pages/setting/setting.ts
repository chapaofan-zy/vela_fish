import { defineUxComponent } from "ux-types";
import FishStore from "../../util/fishStore";

export default defineUxComponent({
  private: {
    lake: undefined,
    lakeLevel: 1,
    rodType: 1
  },
  onShow() {
    this.lake = this.$app.$def.data.lake;
    console.log(this.lake);

    this.lakeLevel = this.lake.level;
    this.rodType = this.lake.rod.type;
  },
  async changeLake(n: number) {
    if (n === 1) {
      this.lakeLevel = ((this.lakeLevel + 3) % 3) + 1;
    } else {
      this.lakeLevel = this.lakeLevel - 1;
      if (this.lakeLevel <= 0) this.lakeLevel += 3;
    }
    this.lake.changeLevel(this.lakeLevel);
    await FishStore.saveLake({ level: this.lakeLevel });
  },
  async changeRod(n: number) {
    if (n === 1) {
      this.rodType = ((this.rodType + 3) % 3) + 1;
    } else {
      this.rodType = this.rodType - 1;
      if (this.rodType <= 0) this.rodType += 3;
    }
    this.lake.changeRod(this.rodType);
    await FishStore.saveRod({ type: this.rodType });
  }
});
