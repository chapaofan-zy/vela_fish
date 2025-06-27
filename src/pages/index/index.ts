import Lake from "../../util/lake";
import { defineUxComponent } from "ux-types";

export default defineUxComponent({
  public: {
    lake: new Lake()
  },
  onShow() {
    this.lake.waitForBite();
  }
});
