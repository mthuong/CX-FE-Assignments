import { useState, useEffect } from 'react';
import environment from '../environment';

export default function useGithubUserName(username) {
  const [fullName, setFullName] = useState('');

  useEffect(() => {
    getUser(username)
      .then((result) => {
        setFullName(result["name"]);
      })
      .catch(() => {
        setFullName("");
      })
  }, [username]);

  return fullName;
}

function getUser(username) {
  const request = `${environment.BASE_URL}${environment.USERS}${username}`;
  return fetch(request, {
      method: "GET",
    })
      .then((res) => res.json())
      .then(
        (result) => {
          return result;
        }
      )
      .catch(error => {
        console.error(error);
        return {};
      })
}