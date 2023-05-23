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

function ClientContainer() {
  const [isCreateModeEnabled, setIsCreateModeEnabled] = React.useState(false);

  function handleCreateMode(isEnabled = true) {
    setIsCreateModeEnabled(isEnabled);
  }

  return (
    <Card flexDirection="column">
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
        <div className="create-client-container">Info client</div>
      )}
    </Card>
  );
}

export default ClientContainer;
