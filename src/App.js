import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import SearchBar from "./SearchBar";
import TempConvertLinks from "./TempConvertLinks";
import CurrentTemp from "./CurrentTemp";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card mx-auto">
          <div className="card-body">
            <SearchBar />
            <TempConvertLinks />
            <CurrentTemp />
          </div>
        </div>
        <div className="end-tag">
          <a href="https://github.com/dzmoney/Weather-App">Open-source code</a>{" "}
          by Deanna Tyndall
        </div>
      </div>
    </div>
  );
}
