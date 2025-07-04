import { defineUxComponent } from "ux-types";
import { Fish } from "../../util/fish";
import { getLevelColor } from "../../util/fishList";

export default defineUxComponent({
  protected: {
    fish: "",
    info: {} as Fish
  },
  onShow() {
    const fish = JSON.parse(this.fish || "{}") as Fish;
    this.info = fish;
  },
  computed: {
    fishInfo() {
      return [
        {
          label: "名称",
          value: this.info.name,
          color: getLevelColor(this.info.fishInfo.level)
        },
        {
          label: "等级",
          value: this.info.fishInfo.level
        },
        {
          label: "大小",
          value: this.info.size
        },
        {
          label: "价值",
          value: this.info.fishInfo.price
        },
        {
          label: "描述",
          value: this.info.fishInfo.description
        },
        {
          label: "日期",
          value: this.info.date
        }
      ];
    },
    img() {
      return this.info.img;
    }
  }
});
