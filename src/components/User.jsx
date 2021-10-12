import React from "react";
import "./index.css";

function User(props) {
  const { user, isSelected, onSelect } = props;

  const classes = isSelected ? "user-active" : "";

  return (
    <div className={`user-default ${classes}`} onClick={onSelect}>
      <img
        src={user["avatar_url"]}
        className="img-thumbnail avatar"
        alt="User avatar"
      />
      <div className="col">
        <p className="username user-data">{user["login"]}</p>
        <p className="user-data">{user["url"]}</p>
      </div>
    </div>
  );
}

export default User;
