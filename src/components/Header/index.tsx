import React from "react";
import checkIcon from "../../assets/svg/check.svg";
import backArrow from "../../assets/svg/backArrow.svg";
import "./styles.scss";
import IconButton from "../IconButton";

function Header() {
  return (
    <header className="App-header">
      <h3 className="title">Rendez-vous</h3>

      <div className="actions">
        <IconButton icon={backArrow} />
        <IconButton icon={checkIcon} theme="green" />
      </div>
    </header>
  );
}

export default Header;
