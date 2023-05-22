import React from "react";
import { CardProps } from "./types";
import "./styles.scss";

export default function Card({ children, stylesContainer = {} }: CardProps) {
  return <div className="Card">{children}</div>;
}
