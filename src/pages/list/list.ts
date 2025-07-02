import { defineUxComponent } from "ux-types";
import router from "@system.router";
import { LevelColor } from "../../util/fishList";
export default defineUxComponent({
  private: {
    levelList: [
      LevelColor.ORANGE,
      LevelColor.PURPLE,
      LevelColor.BLUE,
      LevelColor.GREEN,
      LevelColor.WHITE
    ]
  },
  go(level: number) {
    router.push({ uri: "/pages/level", params: { level: `${level}` } });
  }
});
