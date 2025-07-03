import type { Fish } from "../../util/fish";
import Lake from "../../util/lake";
import { defineUxComponent } from "ux-types";
import router from "@system.router";
import FishStore from "../../util/fishStore";

export default defineUxComponent({
  public: {
    lake: new Lake(),
    showTip: false,
    fish: undefined,
    dropped: false
  },
  showOnFish() {
    this.showTip = true;
  },
  async drop() {
    console.log(this.lake);
    console.log(await FishStore.getLake());
    console.log(await FishStore.getRod());

    this.dropped = true;
    try {
      this.fish = (await this.lake.waitForBite()) as Fish;
      console.log("fffff", this.fish);

      await FishStore.saveFish(this.fish);
      this.showOnFish();
    } catch (e) {
      console.error(e);
    } finally {
      this.dropped = false;
    }
  },
  go(uri: string) {
    router.push({ uri });
  }
});
