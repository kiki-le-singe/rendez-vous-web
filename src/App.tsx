import React from "react";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import ClientContainer from "./components/ClientContainer";

function App() {
  return (
    <div className="App">
      <div className="View">
        <Header />

        <div className="View-content">
          <ClientContainer />

          <Card>
            <p>Card Content</p>
          </Card>

          <Card>
            <p>Card Content</p>
          </Card>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default App;
