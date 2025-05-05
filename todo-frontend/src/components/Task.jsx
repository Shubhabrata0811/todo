import React, { Component } from "react";

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false,
    };
  }

  handleToggle = () => {
    this.setState((prevState) => ({
      done: !prevState.done,
    }));
  }
  
  handleDelete = () => {
    this.props.deleteTask(this.props.task.id);
  }

  render() {
    return (
      <div className="task-container">
        <p
          key={this.props.task.id}
          style={this.state.done ? { textDecoration: "line-through" } : {}}
          onClick={this.handleToggle}
        >
          {this.props.task.name}
        </p>
        <button onClick={this.handleDelete}>Delete</button>
      </div>
    );
  }
}

export default Task;

/*
createElement(
      "li",
      {
        key: idx,
        style: task.done ? { textDecoration: "line-through" } : {},
        onClick: () => this.props.toggleTask(idx),
      },
      task.taskDes
    );
*/