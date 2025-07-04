export enum Level {
  ONE = 1,
  TWO = 2,
  THREE = 3,
  FOUR = 4,
  FIVE = 5
}

export enum LevelColor {
  RED = "red",
  ORANGE = "orange",
  PURPLE = "purple",
  BLUE = "blue",
  GREEN = "green",
  WHITE = "white"
}

export const getLevelColor = (level: number) =>
  Number(level) === Level.FIVE
    ? LevelColor.WHITE
    : level === Level.FOUR
    ? LevelColor.GREEN
    : level === Level.THREE
    ? LevelColor.BLUE
    : level === Level.TWO
    ? LevelColor.PURPLE
    : LevelColor.ORANGE;

export type FishName = string;

export interface FishType {
  name: string;
  size: number;
  range: number;
  level: number;
  img: string;
  price: number;
  description?: string;
}

const levelOne: FishType[] = [
  {
    name: "eee",
    size: 10,
    range: 5,
    level: Level.ONE,
    img: "/common/logo.png",
    price: 80,
    description: "A common fish found in lakes."
  }
];

const levelTwo: FishType[] = [
  {
    name: "ddd",
    size: 10,
    range: 5,
    level: Level.TWO,
    img: "/common/logo.png",
    price: 40,
    description: "A common fish found in lakes."
  }
];

const levelThree: FishType[] = [
  {
    name: "ccc",
    size: 10,
    range: 5,
    level: Level.THREE,
    img: "/common/logo.png",
    price: 20,
    description: "A common fish found in lakes."
  }
];

const levelFour: FishType[] = [
  {
    name: "bbb",
    size: 10,
    range: 5,
    level: Level.FOUR,
    img: "/common/logo.png",
    price: 10,
    description: "A common fish found in lakes."
  }
];

const levelFive: FishType[] = [
  {
    name: "aaa",
    size: 10,
    range: 5,
    level: Level.FIVE,
    img: "/common/logo.png",
    price: 5,
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
