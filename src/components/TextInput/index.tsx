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
  isReseted = false,
}: TextInputProps) {
  const [inputValue, setInputValue] = React.useState(value);
  const [isTyping, setIsTyping] = React.useState(false);

  React.useEffect(() => {
    if (isReseted) {
      setInputValue("");
    }
  }, [isReseted]);

  const isCreateModeEnabled = isCreateMode && isTyping;
  const hasIcons = icon || secondIcon;
  const disabledClassName = "disabled";
  const classNameContainer = `TextInput-container ${
    isMaxWidthEnabled && "max-width"
  } ${isDisabled && disabledClassName} ${isCreateModeEnabled ? "create" : ""}`;
  const classNameInput = `${hasIcons ? "width-icons" : ""}  ${
    isDisabled && disabledClassName
  } ${inputValue ? "isNotEmpty" : ""}`;

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;

    setIsTyping(value ? true : false);
    setInputValue(value);
  }

  function handleClick() {
    setIsTyping(false);
    onClick();
  }

  return (
    <div className={classNameContainer}>
      {icon && (
        <div className="icons">
          <Icon icon={icon} />
          {secondIcon && <Icon icon={secondIcon} />}
        </div>
      )}

      <div className="input-content">
        {inputValue && <label className="label">{placeholder}</label>}
        <input
          className={classNameInput}
          type={type}
          placeholder={placeholder}
          disabled={isDisabled}
          onChange={handleChange}
          value={inputValue}
        />
      </div>

      {isCreateModeEnabled && (
        <div className="button-container">
          <Button onClick={handleClick} label="Créer" theme="green" />
        </div>
      )}
    </div>
  );
}
