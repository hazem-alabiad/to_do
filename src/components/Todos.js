import React, { Component } from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

export default class Todos extends Component {
  render() {
    return this.props.todos.map(todo => (
      <TodoItem
        key={todo.id}
        todo={todo}
        markComplete={this.props.markComplete}
        delItem={this.props.delItem}
      />
    ));
  }
}

// propTypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired
};
