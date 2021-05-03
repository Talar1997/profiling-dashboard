import React from "react";
import "./../../assets/Logo.scss";
import { Link } from "react-router-dom";

function Logo(props) {
  return (
    <div className="logo">
      <Link to="/">
        <img
          src={process.env.PUBLIC_URL + "/android-chrome-192x192.png"}
          alt="Fuzzy monitor logo"
        />
      </Link>

      {props.collapsed ? "" : <strong>Fuzzy monitor</strong>}
    </div>
  );
}

export default Logo;
