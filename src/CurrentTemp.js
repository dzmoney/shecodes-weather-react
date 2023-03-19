import React from "react";
import "./CurrentTemp.css";

export default function CurrentTemp() {
  return (
    <div className="CurrentTemp">
      <div className="container text-center">
        <div className="row flex-nowrap top-row">
          <div className="col">
            <ul>
              <li>Sat 25</li>
              <li>1:00pm</li>
            </ul>
          </div>
          <div className="card custom-card">
            <div className="card-body">
              <div className="col">
                <ul>
                  <li>Toronto</li>
                  <li>8°C</li>
                  <li>☀️</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col stats">
            <ul>
              <li>Humidity: 80%</li>
              <li>Wind: 40km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
