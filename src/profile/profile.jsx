import React from "react";
import "./profile.css";

function Profile(props) {
  let { displayName, photoURL } = props;

  const { email } = props;
  const status = "I am default status.";

  if (photoURL == null) {
    photoURL = "https://via.placeholder.com/64x64";
  }

  if (displayName == null) {
    displayName = "John Doe";
  }

  return (
    <div className="profile-box">
      <img src={photoURL} alt="current user" />
      <div className="profile-info">
        <h2>{displayName}</h2>
        <h4>{email}</h4>
        <h4>{status}</h4>
      </div>
      <button className="submit" type="button">
        Logout
      </button>
    </div>
  );
}

export default Profile;
