import React from "react";
import ReactDom from "react-dom";
import * as firebase from "firebase/app";

import "./index.css";

// Initialize firebase app
// eslint-disable-next-line no-undef
firebase.initializeApp(FIREBASE_CONFIG);

// Main React component
class Main extends React.Component {
  constructor(props) {
    super(props);

    this.emailChange = this.emailChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.login = this.login.bind(this);

    this.state = {
      email: "",
      password: "",
      isLoggedin: false,
    };
  }

  emailChange(event) {
    this.setState({ email: event.target.value });
  }

  passwordChange(event) {
    this.setState({ password: event.target.value });
  }

  login(event) {
    alert("Login submitted");
    event.preventDefault();
  }

  render() {
    const { isLoggedin, email, password } = this.state;

    // Proceed to render application
    if (isLoggedin) {
      return <h1>You are logged in!</h1>;
    }

    // Show login form
    return (
      <div className="login">
        <div>Sign In</div>
        <form onSubmit={this.login}>
          <input
            type="text"
            name="email"
            value={email}
            placeholder="Email"
            onChange={this.emailChange}
          />
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={this.passwordChange}
          />
          <input type="submit" name="login" value="Login" />
        </form>
      </div>
    );
  }
}

ReactDom.render(<Main />, document.getElementById("root"));
