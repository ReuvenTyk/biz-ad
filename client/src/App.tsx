import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./component/About/About";
import Login from "./component/Auth/Login";
import LogOut from "./component/Auth/LogOut";
import SignUp from "./component/Auth/SignUp";
import Header from "./component/Header/Header";
import Main, { displayMode } from "./component/Main/Main";
import Services from "./component/Services/Services";

function App() {
  return (
    <>
      <Header />

      <Routes>
        {
          <Route
            path="main"
            element={<Main defaultDisplay={displayMode.grid} />}
          ></Route>
        }
        <Route path="services" element={<Services />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="signup" element={<SignUp />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="logout" element={<LogOut />}></Route>
      </Routes>
    </>
  );
}

export default App;
