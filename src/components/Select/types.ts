export enum ThemeSelect {
  BLUE = "blue",
  GREEN = "green",
}
export type SelectedOption = string | number;

export type SelectProps = {
  placeholder: string;
  selectLabel: string;
  values: string[];
  theme?: ThemeSelect;
  isReset?: boolean;
  onResetSelect: (isReset: boolean) => void;
  onSelectOption: (value: number) => void;
};
