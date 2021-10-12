import React from 'react';
import useGithubUserName from '../hook/useGithubUserName';

function UserName(props) {
  const { username, ...other } = props;

  const name = useGithubUserName(username);

  return (
    <div {...other} >
      {name}
    </div>
  );
}

export default UserName;