import React from "react";

import { ButtonLinkProps } from "./types";
import "./styles.scss";
import Icon from "../Icon";

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
      <Icon icon={icon} /> <span className="label">{text}</span>
    </button>
  );
}
