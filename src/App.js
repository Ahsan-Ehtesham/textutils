import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#24292e";
      showAlert("Dark Mode has been enabled", "success");
      // document.title="TextUtils | Dark Mode"
      // setInterval(() => {
      //   document.title="Install TextUtils Now"
      // }, 2000);
      // setInterval(() => {
      //   document.title="Check out the Dracula Mode"
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#fff";
      showAlert("Light Mode has been enabled", "success");
      // document.title="TextUtils | Light Mode"
    }
  };

  const draculaMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#aa0505";
      showAlert("Dracula Mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#fff";
      showAlert("Light Mode has been enabled", "success");
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          about="About"
          mode={mode}
          toggleMode={toggleMode}
          draculaMode={draculaMode}
        />
        <Alert alert={alert} />
        <div className="container my-5">
          <Switch>
            <Route exact path="/about">
              <About mode={mode} />
            </Route>
            <Route exact path="/">
              <TextForm
                heading="Enter the text to analyze"
                mode={mode}
                showAlert={showAlert}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default App;
