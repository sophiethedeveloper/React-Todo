import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./components/Todo.css"

const todoItems = [
  {
    name: "Laundry",
    id: 345,
    completed: false,
  },
  {
    name: "Feed the Cats",
    id: 200,
    completed: false,
  },
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todoItems: todoItems,
    };
  }

  addItem = (e, item) => {
    e.preventDefault();
    const newItem = {
      name: item,
      id: Date.now(),
      completed: false,
    };

    this.setState({
      todoItems: [...this.state.todoItems, newItem],
    });
  };

  toggleItem = (itemId) => {
    console.log(itemId);

    this.setState({
      todoItems: this.state.todoItems.map((item) => {
        if (itemId === item.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      }),
    });
  };

  clearPurchased = (e) => {
    e.preventDefault();

    this.setState({
      todoItems: this.state.todoItems.filter((item) => !item.completed)
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addItem={this.addItem} />
        <TodoList
          todoItems={this.state.todoItems}
          toggleItem={this.toggleItem}
          clearPurchased={this.clearPurchased}
        />
      </div>
    );
  }
}

export default App;
