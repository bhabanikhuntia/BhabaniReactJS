import React from "react";
import GetApi from "./Components/GetApi";
import Home from "./Components/Home";
import PostApi from "./Components/PostApi";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UpdateApi from "./Components/UpdateApi";
import DeleteApi from "./Components/DeleteApi";

export default function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/getapi" element={<GetApi />}/>
          <Route path="/postapi" element={<PostApi />}/>
          <Route path="/updateapi" element={<UpdateApi />}/>
          <Route path="/deleteapi" element={<DeleteApi />}/>
        </Routes>
      </Router>
  );
}
