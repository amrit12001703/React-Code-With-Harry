import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
import About from "./components/About";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode Has Been Enabled", "success");
      document.title = "TextUtil-Dark";
    } else if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Has Been Enabled", "success");
      document.title = "TextUtil-Light";
    }
  };

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} aboutText="About"/>
        <Alert alert={alert} />
        <div className="container my-3">
        <Routes>
            <Route path="/about" element={<About />}>
            </Route>
            <Route path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}>
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
