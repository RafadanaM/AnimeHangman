export const alphaNumeric = /[a-z0-9]/gi;

export const isAlphanumeric = (character: string) => {
  return /^[a-z0-9]+$/i.test(character);
};

const state = ["correct", "incorrect"] as const;
export type State = typeof state[number];

const status = ["in_progress", "win", "lose"] as const;
export type Status = typeof status[number];

const theme = ["dark", "light"] as const;
export type Theme = typeof theme[number];

export const keys = {
  firstRow: [
    { key: "Q" },
    { key: "W" },
    { key: "E" },
    { key: "R" },
    { key: "T" },
    { key: "Y" },
    { key: "U" },
    { key: "I" },
    { key: "O" },
    { key: "P" },
  ],
  secondRow: [
    { key: "A" },
    { key: "S" },
    { key: "D" },
    { key: "F" },
    { key: "G" },
    { key: "H" },
    { key: "J" },
    { key: "K" },
    { key: "L" },
  ],
  thirdRow: [
    { key: "Z" },
    { key: "X" },
    { key: "C" },
    { key: "V" },
    { key: "B" },
    { key: "N" },
    { key: "M" },
  ],
};
