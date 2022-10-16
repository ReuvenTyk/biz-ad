import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./component/About/About";
import Login from "./component/Auth/Login";
import LogOut from "./component/Auth/LogOut";
import PrivateRoute from "./component/Auth/PrivateRoute";
import SignUp from "./component/Auth/SignUp";
import Header from "./component/Header/Header";
import Main, { displayMode } from "./component/Main/Main";
import Services from "./component/Services/Services";
import UpdateService from "./component/Services/UpdateService/UpdateService";

function App() {
  return (
    <>
      <Header />

      <Routes>
        {
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Main defaultDisplay={displayMode.grid} />
              </PrivateRoute>
            }
          ></Route>
        }
        <Route
          path="services"
          element={
            <PrivateRoute>
              <Services />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="updateService"
          element={
            <PrivateRoute>
              <UpdateService />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="about"
          element={
            <PrivateRoute>
              <About />
            </PrivateRoute>
          }
        ></Route>
        <Route path="signup" element={<SignUp />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route
          path="logout"
          element={
            <PrivateRoute>
              <LogOut />
            </PrivateRoute>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
