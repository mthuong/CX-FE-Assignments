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

  return [fullName];
}

function getUser(username) {
  const request = `${environment.BASE_URL}${environment.USERS}${username}`;
  return fetch(request, {
      method: "GET",
    })
      .then(async (res) => {
        if (res.status === 200) {
          return res.json();
        }
  
        const error = await res.json();
        throw error;
      })
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