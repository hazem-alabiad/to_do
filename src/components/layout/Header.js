import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div style={headerStyle}>
      <h1>Todo List</h1>
      <Link to="/" style={linkStyle}>
        Home{" "}
      </Link>
      |
      <Link to="/About" style={linkStyle}>
        {" "}
        About
      </Link>
    </div>
  );
}

const headerStyle = {
  color: "white",
  background: "#333",
  padding: "1px",
  textAlign: "center"
};

const linkStyle = {
  color: "white"
};
