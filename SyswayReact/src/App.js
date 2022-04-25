import React from "react";
import SignUp from "./Pages/SignUp/SignUp";
import SignIn from "./Pages/SignIn/SignIn";
import Design from "./Pages/Design/Design";
import OneCard from "./Pages/Cards/OneCard";
import Fhome from "./Pages/Home/Fhome";
import Welcome from "./Pages/Home/Welcome";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Usestatehook from "./Pages/Hooks/Usestatehook";
export default function App() {
  return (
    <BrowserRouter>
    <Fhome />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="sysway" element={<Welcome />} />
        <Route path="design" element={<Design />} />
        <Route path="cards" element={<OneCard />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="usestatehook" element={<Usestatehook />} />
      </Routes>
    </BrowserRouter>
  );
}
