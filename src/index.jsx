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
        <div>Sign In</div>
        <form
          onSubmit={() => {
            // eslint-disable-next-line no-alert
            alert("Not implemented yet");
          }}
        >
          <input
            type="text"
            name="email"
            value={email}
            placeholder="Email"
            onChange={(event) => {
              this.setState({ email: event.target.value });
            }}
          />
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={(event) => {
              this.setState({ password: event.target.value });
            }}
          />
          <input type="submit" name="login" value="Login" />
        </form>
      </div>
    );
  }
}

ReactDom.render(<Main />, document.getElementById("root"));
