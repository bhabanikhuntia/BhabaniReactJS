import React, { useState } from "react";

export default function Datetime() {
  let [color, setColor] = useState("red");

  let current = new Date().toLocaleString();
  let [show, setShow] = useState(false);

  return (
    <div>
      <div style={{ background: color, paddingTop: "10rem" }}>
        <button
          className="btn btn-primary"
          onClick={() => {
            setColor("blue");
          }}
        >
          Click here to change color
        </button>
        <div style={{ paddingTop: "5rem", paddingBottom: "29rem" }}>
          {show ? current : null}
          <button
            className="btn btn-primary"
            onClick={() => {
              setShow(true);
            }}
          >
            Click here to see the date & time
          </button>
        </div>
      </div>
    </div>
  );
}
