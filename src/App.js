import React, { Component } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import uuid from "uuid";
import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";
import About from "./components/pages/About";

export default class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: "Movie One",
        completed: false
      },
      {
        id: uuid.v4(),
        title: "Movie Two",
        completed: true
      },
      {
        id: uuid.v4(),
        title: "Movie Three",
        completed: true
      }
    ]
  };

  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (id === todo.id) todo.completed = !todo.completed;
        return todo;
      })
    });
  };

  delItem = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => id !== todo.id)]
    });
  };

  addTodo = title => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
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
                    delItem={this.delItem}
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
