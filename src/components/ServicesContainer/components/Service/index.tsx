import React from "react";

import { ServiceProps } from "./types";
import Select from "../../../Select";
import { ThemeSelect } from "../../../Select/types";
import IconButton from "../../../IconButton";
import binIcon from "../../../../assets/svg/bin.svg";

const dataServices = [
  "Choisir une prestation",
  "Coupe homme (cheveux courts)",
  "Coloration",
  "Coupe barbe",
  "Coupe femme (cheveux courts)",
  "Shampoing",
  "Massage",
];
const dataCollaborators = [
  "Choisir un collaborateur",
  "Ponnappa",
  "John",
  "Hayman",
  "Salome",
  "Daly",
  "Natalie",
];

const Service = ({ index, servicesLength, removeService }: ServiceProps) => {
  const [isReset, setIsReset] = React.useState(false);
  const [selectedOption, setSelectedOption] = React.useState(0);

  React.useEffect(() => {
    console.log("selectedOption", selectedOption);
  }, [selectedOption]);

  function handleResetSelect(isReset: boolean) {
    setIsReset(isReset);
  }

  function handleCleanService() {
    if (servicesLength > 1) {
      removeService(index);
    } else {
      handleResetSelect(true);
    }
    setSelectedOption(0);
  }

  function handleSelectOption(value: number) {
    setSelectedOption(value);
  }

  function renderRightElements() {
    if (selectedOption === 0 && servicesLength === 1) {
      return null;
    }

    if (selectedOption !== 0 || servicesLength > 1) {
      return <IconButton onClick={handleCleanService} icon={binIcon} />;
    }
  }

  return (
    <div className="Service">
      <div>CIcon</div>

      <div className="selects">
        <Select
          values={dataServices}
          selectLabel="Prestation"
          placeholder="Choisir une prestation"
          theme={ThemeSelect.GREEN}
          isReset={isReset}
          onResetSelect={handleResetSelect}
          onSelectOption={handleSelectOption}
        />
        <Select
          values={dataCollaborators}
          selectLabel="Avec"
          placeholder="Choisir un collaborateur"
          isReset={isReset}
          onResetSelect={handleResetSelect}
          onSelectOption={handleSelectOption}
        />
      </div>

      {renderRightElements()}
    </div>
  );
};

export default React.memo(Service);
