import React from "react";
import { IconProps } from "./types";

export default function Icon({ icon = undefined }: IconProps) {
  return !icon ? null : <img src={icon} alt={icon} />;
}
