import Icon from "../Icon";
import "./styles.scss";
import { IconButtonProps } from "./types";

function IconButton({
  icon = undefined,
  theme = "light",
  display = "small",
  onClick = () => {},
}: IconButtonProps) {
  if (!icon) return null;

  return (
    <button
      className={`Icon-button Icon-button-${theme} ${display}`}
      onClick={onClick}
    >
      <Icon icon={icon} />
    </button>
  );
}

export default IconButton;
