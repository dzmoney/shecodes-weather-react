import React from "react";
import "./TempConvertLinks.css";

export default function TempConvertLinks() {
  return (
    <div className="TempConvertLinks">
      <ul className="nav justify-content-end degree-type">
        <li className="nav-item">
          <a className="nav-link active celcius" aria-current="page" href="/">
            °C
          </a>
        </li>
        <li className="nav-item farenheit">
          <a className="nav-link" href="/">
            °F
          </a>
        </li>
      </ul>
    </div>
  );
}
