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

    this.state = {
      email: "",
      password: "",
      isLoggedin: false,
    };
  }

  render() {
    const { isLoggedin, email, password } = this.state;

    // Proceed to render application
    if (isLoggedin) {
      return <h1>You are logged in!</h1>;
    }

    // Show login form
    return (
      <div className="login-box">
        <form className="login-form">
          <label className="label" htmlFor="email">
            Email
          </label>
          <input
            className="text"
            type="text"
            name="email"
            value={email}
            placeholder="Email"
            onChange={(event) => {
              this.setState({ email: event.target.value });
            }}
          />
          <label className="label" htmlFor="passwordl">
            Password
          </label>
          <input
            className="password"
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={(event) => {
              this.setState({ password: event.target.value });
            }}
          />
          <input
            className="submit"
            type="button"
            name="login"
            value="Login"
            // eslint-disable-next-line no-alert
            onClick={() => alert("Not implemented yet")}
          />
        </form>
      </div>
    );
  }
}

ReactDom.render(<Main />, document.getElementById("root"));
