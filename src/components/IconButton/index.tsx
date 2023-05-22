import "./styles.scss";
import { IconButtonProps } from "./types";

function IconButton({ icon = undefined, theme = "light" }: IconButtonProps) {
  if (!icon) return null;

  return (
    <button className={`Icon-button Icon-button-${theme}`}>
      <img src={icon} alt={icon} />
    </button>
  );
}

export default IconButton;
