import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";

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
      <Navbar
        title="TextUtils"
        about="About TextUtils"
        mode={mode}
        toggleMode={toggleMode}
        draculaMode={draculaMode}
      />
      <Alert alert={alert} />
      <div className="container my-5">
        <TextForm
          heading="Enter the text to analyze"
          mode={mode}
          showAlert={showAlert}
        />
        {/* <About/> */}
      </div>
    </>
  );
};

export default App;
