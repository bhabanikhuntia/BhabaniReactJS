import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/getapi">GetApi</Link></li>
          <li><Link to="/postapi">PostApi</Link></li>
          <li><Link to="/updateapi">UpdateApi</Link></li>
          <li><Link to="/deleteapi">DeleteApi</Link></li>
        </ul>
    </div>
  );
}
