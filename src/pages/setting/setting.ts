import { defineUxComponent } from "ux-types";

export default defineUxComponent({
  private: {
    name: "setting",
    props: {
      name: {
        type: String,
        default: "setting"
      }
    }
  },
  methods: {
    onClick() {
      console.log("onClick");
    }
  }
});
