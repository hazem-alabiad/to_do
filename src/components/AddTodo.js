import React, { Component } from "react";

export default class AddTodo extends Component {
  state = {
    title: ''
  }

  getTitle = (_input) =>{
    this.setState({ [_input.target.name]: _input.target.value })
  }

  submit = (title) => {
    title.preventDefault();
    this.props.addTodo(this.state.title)
    this.setState({ title: '' })
  }

  render() {
    return (
      <form onSubmit={this.submit} style={{display: "flex"}}>
        <input
          type="text"
          name="title"
          placeholder="Add todo item .."
          style={{ flex: "10", padding: "7px" }}
          value={this.state.title}
          onChange={this.getTitle}
        />
        <input
          type="submit"
          value="Submit"
          className="btn"
          style={{ flex: "1", float: "right" }}
        />
      </form>
    );
  }
}
