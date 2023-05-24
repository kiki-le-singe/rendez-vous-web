import { TIcon } from "../Icon/types";

export type TextInputProps = React.PropsWithChildren<{
  placeholder?: string;
  type?: string;
  value?: string;
  icon?: TIcon;
  secondIcon?: TIcon;
  isDisabled?: boolean;
  isMaxWidthEnabled?: boolean;
  isCreateMode?: boolean;
  isReseted?: boolean;
  isLabelDisplayedWithValue?: boolean;
  onClick?: () => void;
}>;
