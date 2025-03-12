import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Badge from "./components/Badge";
import Banner from "./components/Banner";
import Card from "./components/Card";

function App() {
  return (
    <>
      <div className="badge-container">
        <Badge>Badge</Badge>
        <Badge className="red pilled" onClick={() => console.log("hello")}>
          Badge
        </Badge>
        <Badge className="blue">Badge</Badge>
        <Badge className="green">Badge</Badge>
        <Badge className="pilled">Badge</Badge>
      </div>
      <br />
      <br />
      <Banner variant="success">
        {{ title: "Congratulations", message: "This is a succes message!" }}
      </Banner>
      <br />
      <Banner variant="warning">
        {{ title: "Attention", message: "This is a warning message!" }}
      </Banner>
      <br />
      <Banner variant="error">
        {{
          title: "There is a problem with your application",
          message: "This is an error message!",
        }}
      </Banner>
      <br />
      <Banner variant="info">
        {{
          title: "Update available",
          message:
            "This is a long info message! Magna Lorem nisi qui quis tempor.Pariatur consequat officia non est exercitation sint sint fugiat tempor Lorem reprehenderit ipsum dolor.",
        }}
      </Banner>
        <br />
      <Card>
      {{
          title: "There is a problem with your application",
          message: "This is an error message!",
        }}
      </Card>
    </>
  );
}

export default App;
