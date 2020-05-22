import React from "react";
import ReactDom from "react-dom";
import * as firebase from "firebase/app";

// Initialize firebase app
// eslint-disable-next-line no-undef
firebase.initializeApp(FIREBASE_CONFIG);

// Main React component
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedin: false,
    };
  }

  render() {
    const { isLoggedin } = this.state;

    // Proceed to render application
    if (isLoggedin) {
      return <h1>You are logged in!</h1>;
    }

    // Show login form
    return (
      <div>
        <h1>You are not logged in!</h1>
        <button
          type="submit"
          onClick={() => this.setState({ isLoggedin: true })}
        >
          Login
        </button>
      </div>
    );
  }
}

ReactDom.render(<Main />, document.getElementById("root"));
