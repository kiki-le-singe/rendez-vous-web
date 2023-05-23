import { TIcon } from "../Icon/types";

export type displayValues = "small" | "big";

export type DoubleInputsProps = {
  value1?: string;
  value2?: string;
  icon?: TIcon;
  label?: string;
  display?: displayValues;
};
