import React, { Component } from "react";
import TaskList from "./TaskList.jsx";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskLists: [{ id: 1, name: "Default List" }],
      newTaskList: "",
    };
  }

  handleListNameChange = (event) => {
    this.setState({ newTaskList: event.target.value });
  };

  handleAddList = (event) => {
    event.preventDefault();
    console.log(this.state.newTaskList);
    this.setState((prevState) => ({
      taskLists: [
        ...prevState.taskLists,
        { id: Date.now(), name: prevState.newTaskList },
      ],
      newTaskList: "",
    }));
    console.log(this.state.taskLists);
  };

  handleDeleteTaskList = (taskListId) => {
    this.setState((prevState) => ({
      taskLists: prevState.taskLists.filter(
        (taskList) => taskList.id !== taskListId
      ),
    }));
  };

  render() {
    return (
      <div className="todo-container">
        <header>
          <h2>Welcome, {this.props.userName}!</h2>
        </header>

        <form onSubmit={this.handleAddList}>
          <input
            type="text"
            placeholder="Enter a list name"
            value={this.state.newTaskList}
            onChange={this.handleListNameChange}
            required
          />
          <button type="submit">Add Task List</button>
        </form>

        <div className="task-lists">
          {this.state.taskLists.map((list) => (
            <TaskList
              key={list.id}
              list={list}
              deleteTaskList={this.handleDeleteTaskList}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Todo;
