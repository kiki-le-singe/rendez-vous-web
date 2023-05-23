export type themeValues = "green" | "red" | "dark-blue" | "light";
export type displayValues = "big" | "medium" | "small";

export type ButtonProps = {
  label: string;
  display?: displayValues;
  theme?: themeValues;
  onClick?: () => void;
};
