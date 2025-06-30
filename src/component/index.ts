import { defineUxComponent } from "ux-types";
import type { Fish } from "../util/fish";
import router from "@system.router";

export default defineUxComponent({
  props: {
    fish: {
      type: Object,
      required: true
    },
    cb: {
      type: Function,
      required: false
    }
  },
  computed: {
    fishInfo() {
      const fish = this.fish as Fish;
      return [
        {
          label: "名称",
          value: fish.name
        },
        {
          label: "等级",
          value: fish.level
        },
        {
          label: "大小",
          value: fish.size
        },
        {
          label: "描述",
          value: fish.description
        }
      ];
    }
  },
  go() {
    this.cb();
    router.push({ uri: "/pages/detail", params: { fish: JSON.stringify(this.fish) } });
  }
});
