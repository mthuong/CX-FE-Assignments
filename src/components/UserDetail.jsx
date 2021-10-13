import React from "react";
import "./index.scss";
import { ReactComponent as FollowersSVG } from "../assets/svg/followers.svg";

function UserDetailComponent(props) {
  const { user } = props;
  if (!user) {
    return null;
  }

  return (
    <div className="user-info-container">
      <h1 className="username user-info">{user["name"]}</h1>
      <h6 className="user-info">{user["login"]}</h6>
      <p className="user-info">{user["company"]}</p>
      <p className="user-info">{user["blog"]}</p>
      <p className="user-info">{user["location"]}</p>
      <p className="user-info">{user["email"]}</p>
      <p className="user-info">{user["bio"]}</p>
      <p className="user-info">{user["twitter_username"]}</p>

      <div className="row user-info following">
        <a
          className="link no-underline no-wrap"
          href={`https://github.com/${user["login"]}?tab=followers`}
        >
          <div className="icon">
            <FollowersSVG />
          </div>{" "}
          <span className="text-bold">{user["followers"]}</span> followers
        </a>
        {" · "}
        <a
          className="link no-underline no-wrap"
          href={`https://github.com/${user["login"]}?tab=following`}
        >
          <span className="text-bold">{user["following"]}</span> following
        </a>
      </div>
    </div>
  );
}

const UserDetail = React.memo(UserDetailComponent, (prevProps, nextProps) => {
  if (prevProps.user === nextProps.user) {
    // don't re-render/update
    return true;
  }
})

export default UserDetail;
