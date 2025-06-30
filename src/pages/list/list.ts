import { defineUxComponent } from "ux-types";
import router from "@system.router";
export default defineUxComponent({
  private: {
    levelList: [0, 1, 2, 3, 4]
  },
  go(level: number) {
    router.push({ uri: "/pages/level", params: { level: `${level}` } });
  }
});
