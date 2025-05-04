import React, {Component} from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: ""
    }
  }

  handleChange = (event) => {
    this.setState({userName: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.state.userName && this.props.onLogin(this.state.userName);
    this.setState({userName: ""});
  }

  render() {
    return (
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Enter your name"
            value={this.state.userName}
            onChange={this.handleChange}
          />
          <button type="submit">Login</button>
        </form>
      </div>

    )
  }
}

export default Login;