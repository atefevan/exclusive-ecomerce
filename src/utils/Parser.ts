import { randomRatingMax, randomRatingMin } from "../mock/data";

export const randRating = (min = randomRatingMin, max = randomRatingMax) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
