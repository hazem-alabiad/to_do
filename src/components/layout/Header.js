import React from "react";

export default function Header() {
  return (
    <div style={headerStyle}>
      <h1>Todo List</h1>
    </div>
  );
}

const headerStyle = {
  color: "white",
  background: "#333",
  padding: "1px",
  textAlign: "center"
};
