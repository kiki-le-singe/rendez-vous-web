import React, { ChangeEvent } from "react";
import { TextInputProps } from "./types";
import "./styles.scss";
import Icon from "../Icon";
import Button from "../Button";

export default function TextInput({
  icon = undefined,
  secondIcon = undefined,
  placeholder = "",
  isDisabled = false,
  type = "text",
  isMaxWidthEnabled = false,
  isCreateMode = false,
  value = "",
  onClick = () => {},
}: TextInputProps) {
  const [inputValue, setInputValue] = React.useState(value);
  const [isTyping, setIsTyping] = React.useState(false);

  const isCreateModeEnabled = isCreateMode && isTyping;
  const hasIcons = icon || secondIcon;
  const disabledClassName = "disabled";
  const classNameContainer = `TextInput-container ${
    isMaxWidthEnabled && "max-width"
  } ${isDisabled && disabledClassName} ${isCreateModeEnabled ? "create" : ""}`;
  const classNameInput = `${hasIcons ? "width-icons" : ""}  ${
    isDisabled && disabledClassName
  }`;

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;

    setIsTyping(value ? true : false);
    setInputValue(value);
  }

  return (
    <div className={classNameContainer}>
      {icon && (
        <div className="icons">
          <Icon icon={icon} />
          {secondIcon && <Icon icon={secondIcon} />}
        </div>
      )}

      <input
        className={classNameInput}
        type={type}
        placeholder={placeholder}
        disabled={isDisabled}
        onChange={handleChange}
        value={inputValue}
      />

      {isCreateModeEnabled && (
        <div className="button-container">
          <Button
            display="small"
            onClick={onClick}
            label="Créer"
            theme="green"
          />
        </div>
      )}
    </div>
  );
}
