import React from "react";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ClientContainer from "./components/ClientContainer";
import CalendardContainer from "./components/CalendardContainer";
import ServicesContainer from "./components/ServicesContainer";

function App() {
  return (
    <div className="App">
      <div className="View">
        <Header />

        <div className="View-content">
          <ClientContainer />
          <CalendardContainer />
          <ServicesContainer />
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default App;
