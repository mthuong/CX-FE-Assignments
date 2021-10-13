import React from "react";
import "./index.scss";

function User(props) {
  const { user, isSelected, onSelect } = props;

  const classes = isSelected ? "user-active" : "";

  return (
    <div className={`user-default ${classes}`} onClick={onSelect}>
      <div className="circular col-2 col-xs-6">
        <img className="avatar" src={user["avatar_url"]} alt="User avatar" />
      </div>
      <div className="col-10 col-xs-6">
        <p className="username user-data">{user["login"]}</p>
        <p className="user-data">{user["url"]}</p>
      </div>
    </div>
  );
}

export default User;
