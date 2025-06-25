import Lake from "../../util/lake";
import { defineComponent } from "ux-types";

export default defineComponent({
  public: {
    lake: new Lake()
  },
  onShow() {
    this.lake.waitForBite();
  }
});
