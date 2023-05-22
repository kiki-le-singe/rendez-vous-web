import React from "react";
import { TextInputProps } from "./types";
import "./styles.scss";
import Icon from "../Icon";

export default function TextInput({
  icon = undefined,
  secondIcon = undefined,
  placeholder = "",
  isDisabled = false,
  type = "text",
  name = "client",
  isMaxWidthEnabled = false,
  isCreateMode = false,
}: TextInputProps) {
  const [isTyping, setIsTyping] = React.useState(false);

  const hasIcons = icon || secondIcon;
  const disabledClassName = "disabled";
  const classNameContainer = `TextInput-container ${
    isMaxWidthEnabled && "max-width"
  } ${isDisabled && disabledClassName} ${
    isCreateMode && isTyping ? "create" : ""
  }`;
  const classNameInput = `${hasIcons ? "width-icons" : ""}  ${
    isDisabled && disabledClassName
  }`;

  function handleChange() {
    setIsTyping(true);
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
        name={name}
        placeholder={placeholder}
        disabled={isDisabled}
        onChange={handleChange}
      />
    </div>
  );
}
