import React, { Component } from "react";
import Task from "./Task";

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      newTask: "",
    };
  }

  handleDeleteTaskList = () => {
    this.props.deleteTaskList(this.props.list.id);
  };

  handleTaskNameChange = (event) => {
    this.setState({ newTask: event.target.value });
  };

  handleAddTask = (event) => {
    event.preventDefault();
    this.setState((prevState) => ({
      tasks: [...prevState.tasks, { id: Date.now(), name: prevState.newTask }],
      newTask: "",
    }));
  };

  handleDeleteTask = (taskId) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((task) => task.id !== taskId),
    }));
  };

  render() {
    return (
      <div className="task-list">
        <h1>{this.props.list.name}</h1>
        <button onClick={this.handleDeleteTaskList}>Delete List</button>

        <form onSubmit={this.handleAddTask}>
          <input
            type="text"
            placeholder="Enter a list name"
            value={this.state.newTask}
            onChange={this.handleTaskNameChange}
            required
          />
          <button type="submit">Add Task</button>
        </form>

        <div className="task-lists">
          {this.state.tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              deleteTask={this.handleDeleteTask}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default TaskList;
