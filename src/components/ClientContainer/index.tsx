import React from "react";
import Card from "../Card";
import TextInput from "../TextInput";
import clientIcon from "../../assets/svg/client.svg";
import flagIcon from "../../assets/svg/flag.svg";
import downArrowIcon from "../../assets/svg/downArrow.svg";
import binIcon from "../../assets/svg/bin.svg";
import "./styles.scss";
import Icon from "../Icon";
import IconButton from "../IconButton";
import Tabs from "../Tabs";
import genderIcon from "../../assets/svg/gender.svg";
import bdayIcon from "../../assets/svg/bday.svg";
import DoubleInputs from "../DoubleInputs";
import Switch from "../Switch";

const tabsData = ["Homme", "Femme", "Enfant"];

function ClientContainer() {
  const [isCreateModeEnabled, setIsCreateModeEnabled] = React.useState(false);

  function handleCreateMode(isEnabled = true) {
    setIsCreateModeEnabled(isEnabled);
  }

  return (
    <Card className="Client-container" flexDirection="column">
      <div className="inputs-container">
        <Icon icon={clientIcon} />
        <TextInput
          onClick={handleCreateMode}
          placeholder="Choisir un client"
          isReseted={!isCreateModeEnabled}
          isCreateMode
        />
        <TextInput
          type="tel"
          icon={flagIcon}
          secondIcon={downArrowIcon}
          placeholder="Téléphone"
          isDisabled={!isCreateModeEnabled}
          isReseted={!isCreateModeEnabled}
          isMaxWidthEnabled
        />
        <TextInput
          type="email"
          placeholder="Email"
          isDisabled={!isCreateModeEnabled}
          isReseted={!isCreateModeEnabled}
        />

        {isCreateModeEnabled && (
          <IconButton
            onClick={() => handleCreateMode(false)}
            display="medium"
            icon={binIcon}
          />
        )}
      </div>

      {isCreateModeEnabled && (
        <div className="create-client-container">
          <div className="step">
            <Tabs labels={tabsData} icon={genderIcon} />
            <DoubleInputs icon={bdayIcon} />
            <Switch id="sms-rappel" label="SMS de rappel" checked />
            <Switch id="sms-marketing" label="SMS marketing" />
          </div>
        </div>
      )}
    </Card>
  );
}

export default ClientContainer;
