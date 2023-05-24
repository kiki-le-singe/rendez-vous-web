import React from "react";
import { IconProps } from "./types";

export default function Icon({
  icon = undefined,
  onClick = () => {},
}: IconProps) {
  function handleClick() {
    onClick();
  }

  return !icon ? null : (
    <img className="Icon" onClick={handleClick} src={icon} alt={icon} />
  );
}
