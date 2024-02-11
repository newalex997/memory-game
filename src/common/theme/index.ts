import { DefaultTheme } from "styled-components";

const primaryColors = {
  gray: "#c3c3c3",
  violet: "#9757D7",
  pink: "#EF466F",
  green: "#45B26B",
  white: "#ffffff",
  black: "#000000",
};

const namedColors = {
  wood: "#ba843f",
  board: "#45B26B",
};

export const createTheme = (): DefaultTheme => ({
  palette: {
    primary: primaryColors,
    named: namedColors,
  },
  spacing: (multiplier: number, unit: string = "px") =>
    `${4 * multiplier}${unit}`,
});

export default createTheme();
