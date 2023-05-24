import React from "react";
import { SelectProps, ThemeSelect } from "./types";
import "./styles.scss";
import Icon from "../Icon";
import dropDownArrowIcon from "../../assets/svg/dropDownArrow.svg";

export default function Select({
  placeholder,
  selectLabel,
  values = [],
  theme = ThemeSelect.BLUE,
  isReset = false,
  onResetSelect,
  onSelectOption,
}: SelectProps) {
  const [selectedIndexOption, setSelectedIndexOption] = React.useState(0);
  const [selectedOption, setSelectedOption] = React.useState("");
  const [isOpen, setIsOpen] = React.useState(false);

  const isFirstOption = selectedIndexOption === 0;

  const handleSelectOption = (item: string, index: number) => {
    setSelectedIndexOption(index);
    setSelectedOption(item);
    onSelectOption(index);
    setIsOpen(false);
  };

  function handleClosePress() {
    setIsOpen(false);
    setSelectedIndexOption(0);
    setSelectedOption("");
    onResetSelect(false);
  }

  function handleOpenOptions() {
    setIsOpen(true);
  }

  function renderOptions(item: string, index: number) {
    return (
      <div
        onClick={() => handleSelectOption(item, index)}
        className="option"
        key={`Option_${index}`}
      >
        {item}
      </div>
    );
  }

  React.useEffect(() => {
    if (selectedOption && isReset) {
      handleClosePress();
    }
  }, [selectedOption, isReset]);

  return (
    <div className="Select-container">
      <div className="select" onClick={handleOpenOptions}>
        {!isFirstOption && <div className={`left ${theme}`} />}
        <div className="middle">
          {!isFirstOption && <span className="placeholder">{selectLabel}</span>}
          <span className="value">
            {isFirstOption ? placeholder : selectedOption}
          </span>
        </div>
        <div className="right">
          <Icon icon={dropDownArrowIcon} />
        </div>
      </div>

      {isOpen && <div className="options">{values.map(renderOptions)}</div>}
    </div>
  );
}
