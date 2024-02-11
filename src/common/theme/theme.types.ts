export type ColorWithShades = {
  gray: string;
  violet: string;
  pink: string;
  green: string;
  white: string;
  black: string;
};

export type Palette = {
  primary: ColorWithShades;
  named: {
    wood: string;
    board: string;
  };
};

export type Theme = {
  spacing: (multiplier: number, unit?: string) => string;
  palette: Palette;
};
