import { defineUxComponent } from "ux-types";
import { Fish } from "../../util/fish";
import router from "@system.router";

export default defineUxComponent({
  protected: {
    fish: "",
    info: {} as Fish
  },
  onShow() {
    console.log("onShow", this.fish);

    const fish = JSON.parse(this.fish || "{}") as Fish;
    this.info = fish;
    console.log("info", this.info);
  },
  computed: {
    fishInfo() {
      return [
        {
          label: "名称",
          value: this.info.name
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
  },
  back() {
    router.back();
  }
});
