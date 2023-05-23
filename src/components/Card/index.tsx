import React from "react";
import { CardProps } from "./types";
import "./styles.scss";

export default function Card({
  children,
  flexDirection = "row",
  className = "",
}: CardProps) {
  return <div className={`Card ${flexDirection} ${className}`}>{children}</div>;
}
