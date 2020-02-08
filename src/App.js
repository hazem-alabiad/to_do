import React, { Component } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import uuid from "uuid";
import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";
import About from "./components/pages/About";
import Axios from "axios";

export default class App extends Component {
  state = {
    todos: []
  };

  componentDidMount() {
    Axios.get(
      "https://jsonplaceholder.typicode.com/todos?_limit=10"
    ).then(res => this.setState({ todos: res.data }));
  }

  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (id === todo.id) todo.completed = !todo.completed;
        return todo;
      })
    });
  };

  delTodo = id => {
    Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res =>
      this.setState({
        todos: [...this.state.todos.filter(todo => id !== todo.id)]
      })
    );
  };

  addTodo = title => {
    Axios.post("https://jsonplaceholder.typicode.com/todos", {
      title,
      completed: false
    }).then(res => this.setState({ todos: [...this.state.todos, res.data] }));
  };

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Route
              exact
              path="/"
              render={props => (
                <React.Fragment>
                  <Header />
                  <AddTodo addTodo={this.addTodo} />
                  <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    delTodo={this.delTodo}
                  />
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}
