import React from "react";
import { CheckboxProps } from "./types";
import "./styles.scss";

export default function Checkbox({
  checked = false,
  label = null,
  onChange = (isChecked) => {},
}: CheckboxProps) {
  const [isChecked, setIsChecked] = React.useState(checked);

  function handleChange() {
    setIsChecked(!isChecked);
    onChange(!isChecked);
  }

  return (
    <label className="Checkbox-container">
      <input type="checkbox" checked={isChecked} onChange={handleChange} />
      <span className="checkmark"></span>
      {label && label}
    </label>
  );
}
