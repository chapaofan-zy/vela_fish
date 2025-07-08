import type { Fish } from "../../util/fish";
import { defineUxComponent } from "ux-types";
import router from "@system.router";
import FishStore from "../../util/fishStore";

export default defineUxComponent({
  public: {
    showTip: false,
    fish: undefined,
    dropped: false,
    lake: undefined
  },
  onShow() {
    this.dropped = false;
    this.lake = this.$app.$def.data.lake;
    const water = this.$element("water") as any;
    this.lake.cb = (v: boolean) => {
      v ? water.start() : water.stop();
    };
    setTimeout(() => {
      (this.$element("lake") as any).start();
    }, 500);
  },
  showOnFish() {
    this.showTip = true;
  },
  async drop() {
    if (this.dropped) return;
    (this.$element("rod") as any).start();
    this.dropped = true;
    try {
      const water = this.$element("water") as any;
      const startWater = () => water.start();
      const endWatrt = () => water.stop();
      this.fish = (await this.lake.waitForBite(startWater, endWatrt)) as Fish;
      await FishStore.saveFish(this.fish);
      this.showOnFish();
    } catch (e) {
      console.error(e);
    } finally {
      this.dropped = false;
    }
  },
  go(uri: string, params?: any) {
    router.push({ uri, params });
  }
});
