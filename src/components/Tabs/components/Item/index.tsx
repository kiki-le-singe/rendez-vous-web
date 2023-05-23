import React from "react";

import { ItemProps } from "./types";
import "./styles.scss";

export default function Item({
  label = "",
  index = 0,
  isSelected = false,
  classNameItem = "",
  onClick = (selectedIndex: number) => {},
}: ItemProps) {
  const classNameLi = `Tab-item ${classNameItem} ${
    isSelected ? "selected-tab" : ""
  }`;
  const classNameSpan = `label ${isSelected ? "selected-label" : ""}`;

  function handleClick(selectedIndex: number) {
    onClick(selectedIndex);
  }

  return (
    <li onClick={() => handleClick(index)} className={classNameLi}>
      <span className={classNameSpan}>{label}</span>
    </li>
  );
}
