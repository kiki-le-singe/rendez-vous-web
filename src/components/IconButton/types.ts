import { TIcon } from "../Icon/types";

export type displayValues = "small" | "medium" | "big";
export type themeValues = "green" | "light";

export type IconButtonProps = {
  icon?: TIcon;
  theme?: themeValues;
  onClick?: () => void;
  display?: displayValues;
};
