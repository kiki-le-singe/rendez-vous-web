import React from "react";
import Card from "../Card";
import plusIcon from "../../assets/svg/plus.svg";
import ButtonLink from "../ButtonLink";
import Service from "./components/Service";
import "./styles.scss";

const ServicesContainer = () => {
  const [services, setServices] = React.useState([Date.now()]);

  const servicesLength = services.length;

  function handleAddServices() {
    setServices([...services, Date.now()]);
  }

  function handleRemoveService(indexToRemove: number) {
    if (servicesLength > 1) {
      const newArray = [...services];
      newArray.splice(indexToRemove, 1);
      setServices(newArray);
    }
  }

  function renderServices() {
    return services.map((service, index) => (
      <Card key={`ServiceContainer_${service}`}>
        <Service
          index={index}
          servicesLength={servicesLength}
          removeService={handleRemoveService}
        />
      </Card>
    ));
  }

  return (
    <div className="Services">
      {renderServices()}

      <div className="add-service-container">
        <ButtonLink
          onClick={handleAddServices}
          text="Ajouter une prestation à la suite"
          icon={plusIcon}
        />
      </div>
    </div>
  );
};

export default React.memo(ServicesContainer);
