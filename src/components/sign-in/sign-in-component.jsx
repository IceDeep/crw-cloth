import React from "react";

import "./sign-in.styles.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div classname="sign-in">
        <h2>I already have an account</h2>
        <span>sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <input
            name="email"
            type="email"
            onChange={this.handleChange}
            value={this.state.email}
            required
          />
          <label htmlFor="email">Email</label>
          <input
            name="password"
            type="password"
            onChange={this.handleChange}
            value={this.state.password}
            required
          />
          <label htmlFor="password">Password</label>
          <input type="submit" value="Submit Form" />
        </form>
      </div>
    );
  }
}

export default SignIn;
