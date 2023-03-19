import React from "react";
import "./SearchBar.css";

export default function SearchBar() {
  return (
    <div className="SearchBar">
      <form className="search-form">
        <div className="row">
          <div className="col-8">
            <input
              type="search"
              className="search-bar"
              placeholder="Type a city..."
              autoFocus="on"
            />
          </div>
          <div className="col-2">
            <input type="submit" className="btn btn-primary btn-2" />
          </div>
          <div className="col-2">
            <input type="submit" value="Current" className="btn btn-success" />
          </div>
        </div>
      </form>
    </div>
  );
}
