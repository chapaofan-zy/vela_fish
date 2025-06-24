export default class Lake {
  constructor() {}

  waitForBite() {
    setTimeout(() => {
      console.log("bite");
    }, Math.random() * 30 * 1000);
  }
}
