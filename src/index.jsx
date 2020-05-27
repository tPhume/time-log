import React from "react";
import ReactDom from "react-dom";

// Firebase modules
import * as firebase from "firebase/app";
import "firebase/auth";

import "./index.css";

// Initialize firebase app
// eslint-disable-next-line no-undef
firebase.initializeApp(FIREBASE_CONFIG);

firebase
  .auth()
  .setPersistence(firebase.auth.Auth.Persistence.SESSION)
  .catch((error) => {
    const { code, message } = error;
    // eslint-disable-next-line no-alert
    alert(`An Error occured. Code: ${code}. Message: ${message}`);
  });

// Main React component
class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      user: firebase.auth().currentUser,
    };

    // Bind functions to this object context
    this.login = this.login.bind(this);

    // Attach observable to firebase user
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ user });
    });
  }

  // Handles login button event
  login() {
    const { email, password } = this.state;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => {
        const { code, message } = error;
        // eslint-disable-next-line no-alert
        alert(`An Error occured. Code: ${code}. Message: ${message}`);
      });
  }

  render() {
    const { email, password, user } = this.state;

    // Proceed to render application
    if (user) {
      return <h1>You are logged in as {user.email}!</h1>;
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
            onClick={this.login}
          />
        </form>
      </div>
    );
  }
}

ReactDom.render(<Main />, document.getElementById("root"));
