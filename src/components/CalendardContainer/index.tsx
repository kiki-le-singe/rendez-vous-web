import React from "react";
import { CalendardContainerProps } from "./types";
import "./styles.scss";
import Card from "../Card";
import Icon from "../Icon";
import calendarIcon from "../../assets/svg/calendar.svg";
import iconRepeat from "../../assets/svg/repeat.svg";
import TextInput from "../TextInput";
import DoubleInputs from "../DoubleInputs";
import ButtonLink from "../ButtonLink";
import Checkbox from "../Checkbox";

export default function CalendardContainer(props: CalendardContainerProps) {
  const [isChecked, setIsChecked] = React.useState(false);

  const handleCheckboxChange = (checked: boolean) => {
    setIsChecked(checked);
  };

  return (
    <Card className="Calendard-container">
      <div className="column left">
        <Icon icon={calendarIcon} />

        <TextInput
          placeholder="Date"
          value="Lundi 21 mars"
          isLabelDisplayedWithValue={false}
        />

        {!isChecked && (
          <>
            <DoubleInputs display="small" label="de" />
            <DoubleInputs display="small" label="à" />

            <span className="time">(1h)</span>
          </>
        )}

        <Checkbox onChange={handleCheckboxChange} label="Jour entier" />
      </div>

      <div className="column right">
        <ButtonLink icon={iconRepeat} text="Répéter" />
      </div>
    </Card>
  );
}
