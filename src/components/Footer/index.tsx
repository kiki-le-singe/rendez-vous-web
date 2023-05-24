import React from "react";
import "./styles.scss";
import Button from "../Button";
import ButtonLink from "../ButtonLink";
import binIcon from "../../assets/svg/bin.svg";
import cutIcon from "../../assets/svg/cut.svg";
import copyIcon from "../../assets/svg/copy.svg";

function Footer() {
  const [isChoose, setIsChoose] = React.useState(false);
  const [isCome, setIsCome] = React.useState(false);
  const [isNotCome, setIsNotCome] = React.useState(false);

  const chooseText = "Choisi(e)";
  const comeText = "Venu";
  const notComeText = "Pas venu";

  function handleChoose() {
    setIsChoose(!isChoose);
  }
  function handleCome() {
    setIsCome(!isCome);
    isNotCome && setIsNotCome(false);
  }
  function handleNotCome() {
    setIsNotCome(!isNotCome);
    isCome && setIsCome(false);
  }

  return (
    <footer className="App-footer">
      <div className="Footer-left">
        {isChoose ? (
          <Button onClick={handleChoose} label={chooseText} theme="green" />
        ) : (
          <ButtonLink onClick={handleChoose} text={chooseText} />
        )}

        {isCome ? (
          <Button onClick={handleCome} label={comeText} theme="dark-blue" />
        ) : (
          <ButtonLink onClick={handleCome} text={comeText} />
        )}

        {isNotCome ? (
          <Button onClick={handleNotCome} label={notComeText} theme="red" />
        ) : (
          <ButtonLink onClick={handleNotCome} text={notComeText} />
        )}

        <div className="Footer-divider" />

        <ButtonLink icon={copyIcon} text="Copier" />
        <ButtonLink icon={cutIcon} text="Couper" />
        <ButtonLink icon={binIcon} text="Supprimer" />
      </div>

      <div className="Footer-right">
        <Button
          label="Plus d'options (produits, remises, ...)"
          theme="light"
          display="big"
        />
        <Button label="Encaisser 30,00 €" theme="green" display="big" />
      </div>
    </footer>
  );
}

export default Footer;
