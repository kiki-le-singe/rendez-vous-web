import { TIcon } from "../Icon/types";

export type TextInputProps = React.PropsWithChildren<{
  placeholder?: string;
  type?: string;
  name?: string;
  value?: string;
  icon?: TIcon;
  secondIcon?: TIcon;
  isDisabled?: boolean;
  isMaxWidthEnabled?: boolean;
  isCreateMode?: boolean;
}>;
