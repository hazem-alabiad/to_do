import React, { Component } from "react";
import PropTypes from "prop-types";

export default class TodoItem extends Component {
  getStyle = () => {
    return {
      backgroundColor: "gray",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none"
    };
  };

  render() {
    // destructing
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <input
          type="checkbox"
          onChange={this.props.markComplete.bind(this, id)}
        />
        {title}
        <button style={btnStyle} onClick={this.props.delItem.bind(this, id)}>
          x
        </button>
      </div>
    );
  }
}

// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
};

// btn style
const btnStyle = {
  background: "red",
  color: "white",
  float: "right",
  cursor: "pointer",
  borderRadius: "50%"
};
