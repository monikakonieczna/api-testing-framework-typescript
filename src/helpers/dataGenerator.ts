import Chance from "chance";

const chance = new Chance();

export const generateRandomAnimal = (): string => {
  return chance.animal();
};

export const generateRandomString = (length: number = 10): string => {
  return chance.string({ length });
};
