import React from "react";
import Card from "../Card";
import TextInput from "../TextInput";
import clientIcon from "../../assets/svg/client.svg";
import flagIcon from "../../assets/svg/flag.svg";
import downArrowIcon from "../../assets/svg/downArrow.svg";
import "./styles.scss";
import Icon from "../Icon";

function ClientContainer() {
  return (
    <Card flexDirection="column">
      <div className="inputs-container">
        <Icon icon={clientIcon} />
        <TextInput placeholder="Choisir un client" />
        <TextInput
          type="tel"
          icon={flagIcon}
          secondIcon={downArrowIcon}
          placeholder="Téléphone"
          isMaxWidthEnabled
          isDisabled
        />
        <TextInput type="email" placeholder="Email" isDisabled />
      </div>
    </Card>
  );
}

export default ClientContainer;
