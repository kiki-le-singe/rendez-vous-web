import React from "react";
import "./styles.scss";
import { SwitchProps } from "./types";

export default function Switch({
  id,
  checked = false,
  label = null,
}: SwitchProps) {
  const [isChecked, setIsChecked] = React.useState(checked);

  function handleChange() {
    setIsChecked(!isChecked);
  }

  return (
    <div className="Switch-container">
      <label className="switch">
        <input
          id={id}
          type="checkbox"
          checked={isChecked}
          onChange={handleChange}
        />
        <span className="slider round"></span>
      </label>

      {label && (
        <label className="label" htmlFor={id}>
          {label}
        </label>
      )}
    </div>
  );
}
