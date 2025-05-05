import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./components/Login";
import Todo from "./components/Todo";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
    };
  }

  handleLogin = (userName) => {
    this.setState({ userName });
  };

  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route
            path="/login"
            element={
              this.state.userName ? (
                <Navigate to="/todo" />
              ) : (
                <Login onLogin={this.handleLogin} />
              )
            }
          />
          <Route
            path="/todo"
            element={<Todo userName={this.state.userName} />}
          />
        </Routes>
      </Router>
    );
  }
}

export default App;
