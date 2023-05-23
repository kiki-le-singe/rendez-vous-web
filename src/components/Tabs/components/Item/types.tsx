export type ItemProps = {
  label: string;
  index: number;
  isSelected: boolean;
  onClick?: (selectedIndex: number) => void;
  classNameItem: string;
};
