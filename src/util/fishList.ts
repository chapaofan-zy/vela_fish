import type { FishType } from "./fish";

export enum Level {
  ONE = 1,
  TWO = 2,
  THREE = 3,
  FOUR = 4,
  FIVE = 5
}

export type FishName = string;

interface ILevelList {
  name: FishName;
  size: number;
  range: number;
  level: Level;
  img: string;
  description?: string;
}

const levelOne: ILevelList[] = [
  {
    name: "eee",
    size: 10,
    range: 5,
    level: Level.ONE,
    img: "/common/logo.png",
    description: "A common fish found in lakes."
  }
];

const levelTwo: ILevelList[] = [
  {
    name: "ddd",
    size: 10,
    range: 5,
    level: Level.TWO,
    img: "/common/logo.png",
    description: "A common fish found in lakes."
  }
];

const levelThree: ILevelList[] = [
  {
    name: "ccc",
    size: 10,
    range: 5,
    level: Level.THREE,
    img: "/common/logo.png",
    description: "A common fish found in lakes."
  }
];

const levelFour: ILevelList[] = [
  {
    name: "bbb",
    size: 10,
    range: 5,
    level: Level.FOUR,
    img: "/common/logo.png",
    description: "A common fish found in lakes."
  }
];

const levelFive: ILevelList[] = [
  {
    name: "aaa",
    size: 10,
    range: 5,
    level: Level.FIVE,
    img: "/common/logo.png",
    description: "A common fish found in lakes."
  }
];

export const fishList = new Map<Level, FishType[]>([
  [Level.ONE, levelOne],
  [Level.TWO, levelTwo],
  [Level.THREE, levelThree],
  [Level.FOUR, levelFour],
  [Level.FIVE, levelFive]
]);

export const getFishType = (name: FishName) => {
  for (const [_level, list] of fishList) {
    const fish = list.find((fish) => fish.name === name);
    if (fish) return fish;
  }
  return;
};
