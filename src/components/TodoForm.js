import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      item: "",
    };
  }

  handleChanges = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitItem = (e) => {
    e.preventDefault();
    this.setState({ item: "" });
    this.props.addItem(e, this.state.item);
  };

  render() {
    console.log("Rendering Form");
    return (
      <form onSubmit={this.submitItem}>
        <input
          type="text"
          value={this.state.item}
          name="item"
          onChange={this.handleChanges}
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default TodoForm;