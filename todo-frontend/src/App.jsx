import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./components/Login";
// import Todo from "./components/Todo";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/todo" element={<Todo />} /> */}
        </Routes>
      </Router>
    );
  }
}

export default App;
