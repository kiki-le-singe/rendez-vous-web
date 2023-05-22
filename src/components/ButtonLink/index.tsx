import React from "react";

import { ButtonLinkProps } from "./types";
import "./styles.scss";

export default function ButtonLink({
  icon = undefined,
  onClick = () => {},
  text,
}: ButtonLinkProps) {
  function handleClick() {
    onClick();
  }

  return (
    <button onClick={handleClick} className="ButtonLink">
      <img src={icon} alt={icon} /> <span className="label">{text}</span>
    </button>
  );
}
