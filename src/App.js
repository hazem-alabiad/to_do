import React, { Component } from "react";
import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";
import './App.css'

export default class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Movie One",
        completed: false
      },
      {
        id: 2,
        title: "Movie Two",
        completed: true
      },
      {
        id: 3,
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

  addTodo = (title) =>{
    const newTodo = {
      id: 4,
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] })
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo}/>
          <Todos
            todos={this.state.todos}
            markComplete={this.markComplete}
            delItem={this.delItem}
          />
        </div>
      </div>
    );
  }
}
