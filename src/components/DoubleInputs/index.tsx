import React, { ChangeEvent } from "react";
import { DoubleInputsProps } from "./types";
import "./styles.scss";
import Icon from "../Icon";

export default function DoubleInputs({
  value1 = "20",
  value2 = "Sept",
  icon = undefined,
  label = "",
  display = "big",
}: DoubleInputsProps) {
  const [inputValue1, setValue1] = React.useState(value1);
  const [inputValue2, setValue2] = React.useState(value2);

  function handleValue1Change(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;

    setValue1(value);
  }

  function handleValue2Change(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;

    setValue2(value);
  }

  return (
    <div className="DoubleInputs-container">
      {icon && <Icon icon={icon} />}
      {label && <span>{label}</span>}

      <div className={`inputs ${display}`}>
        <input onChange={handleValue1Change} value={inputValue1} />
        <input onChange={handleValue2Change} value={inputValue2} />
      </div>
    </div>
  );
}
