import React, { ChangeEvent } from "react";
import { SelectProps, ThemeSelect } from "./types";

export default function Select({
  placeholder,
  selectLabel,
  values = [],
  theme = ThemeSelect.BLUE,
  isReset = false,
  onResetSelect,
  onSelectOption,
}: SelectProps) {
  const [selectedOption, setSelectedOption] = React.useState("");

  const handleOptionChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;

    setSelectedOption(value);
    onSelectOption(Number(value));
  };

  function handleClosePress(item: string) {
    setSelectedOption(item);
    onResetSelect(false);
  }

  function renderOptions(item: string, index: number) {
    return (
      <option key={`Option_${index}`} value={index}>
        {item}
      </option>
    );
  }

  React.useEffect(() => {
    if (selectedOption && isReset) {
      handleClosePress("");
    }
  }, [selectedOption, isReset]);

  return (
    <div className="custom-select">
      <select
        className="Select"
        value={selectedOption}
        onChange={handleOptionChange}
      >
        {values.map(renderOptions)}
      </select>
    </div>
  );
}
