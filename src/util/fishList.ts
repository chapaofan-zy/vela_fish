import type { FishType } from "./fish";

export enum Level {
  ONE = 2,
  TWO = 8,
  THREE = 10,
  FOUR = 30,
  FIVE = 50
}

export type FishName = string;

export const fishList = new Map<Level, FishName[]>([[Level.ONE, ["aaa"]]]);

const fishes: [FishName, FishType][] = [
  [
    "aaa",
    {
      name: "aaa",
      size: 10,
      range: 5,
      level: Level.FIVE,
      img: "/common/logo.png",
      description: "A common fish found in lakes."
    }
  ],
  [
    "bbb",
    {
      name: "bbb",
      size: 10,
      range: 5,
      level: Level.FOUR,
      img: "/common/logo.png",
      description: "A common fish found in lakes."
    }
  ],
  [
    "ccc",
    {
      name: "ccc",
      size: 10,
      range: 5,
      level: Level.THREE,
      img: "/common/logo.png",
      description: "A common fish found in lakes."
    }
  ],
  [
    "ddd",
    {
      name: "ddd",
      size: 10,
      range: 5,
      level: Level.TWO,
      img: "/common/logo.png",
      description: "A common fish found in lakes."
    }
  ],
  [
    "eee",
    {
      name: "eee",
      size: 10,
      range: 5,
      level: Level.ONE,
      img: "/common/logo.png",
      description: "A common fish found in lakes."
    }
  ]
];

export const fishMap = new Map<FishName, FishType>(fishes);
