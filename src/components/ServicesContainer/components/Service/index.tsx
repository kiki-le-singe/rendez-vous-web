import React from "react";

import { ServiceProps } from "./types";
import Select from "../../../Select";
import { ThemeSelect } from "../../../Select/types";
import IconButton from "../../../IconButton";
import binIcon from "../../../../assets/svg/bin.svg";
import iconPaper from "../../../../assets/svg/paper.svg";
import "./styles.scss";
import Icon from "../../../Icon";

const dataServices = [
  "Choisir une prestation",
  "Coupe homme (cheveux courts)",
  "Coupe + Balayage + Couleur + Shampoing + Mise en pli (cheveux longs & épais)",
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
  const [selectedOption1, setSelectedOption1] = React.useState(0);
  const [selectedOption2, setSelectedOption2] = React.useState(0);

  function handleResetSelect(isReset: boolean) {
    setIsReset(isReset);
  }

  function handleCleanService() {
    if (servicesLength > 1) {
      removeService(index);
    } else {
      handleResetSelect(true);
    }
    setSelectedOption1(0);
    setSelectedOption2(0);
  }

  function handleSelectOption1(value: number) {
    setSelectedOption1(value);
  }

  function handleSelectOption2(value: number) {
    setSelectedOption2(value);
  }

  function renderRightElements() {
    if (
      ((selectedOption1 > 0 || selectedOption2 > 0) && servicesLength === 1) ||
      servicesLength > 1
    ) {
      return (
        <div className="infos">
          <IconButton
            display="medium"
            onClick={handleCleanService}
            icon={binIcon}
          />
        </div>
      );
    }

    return null;
  }

  return (
    <div className="Service">
      <Icon icon={iconPaper} />

      <div className="selects">
        <Select
          values={dataServices}
          selectLabel="Prestation"
          placeholder="Choisir une prestation"
          theme={ThemeSelect.GREEN}
          isReset={isReset}
          onResetSelect={handleResetSelect}
          onSelectOption={handleSelectOption1}
        />
        <Select
          values={dataCollaborators}
          selectLabel="Avec"
          placeholder="Choisir un collaborateur"
          isReset={isReset}
          onResetSelect={handleResetSelect}
          onSelectOption={handleSelectOption2}
        />
      </div>

      {renderRightElements()}
    </div>
  );
};

export default React.memo(Service);
