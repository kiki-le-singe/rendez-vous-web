import React from "react";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ClientContainer from "./components/ClientContainer";
import CalendardContainer from "./components/CalendardContainer";
import ServicesContainer from "./components/ServicesContainer";
import ButtonLink from "./components/ButtonLink";
import paperIcon from "./assets/svg/paper.svg";
import penIcon from "./assets/svg/pen.svg";

function App() {
  return (
    <div className="App">
      <div className="View">
        <Header />

        <div className="View-content">
          <ClientContainer />
          <CalendardContainer />
          <ServicesContainer />

          <div className="bottom-actions">
            <ButtonLink icon={paperIcon} text="Ajouter un titre" />
            <ButtonLink icon={penIcon} text="Ajouter une note" />
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default App;
