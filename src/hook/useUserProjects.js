import { useState, useEffect } from "react";
import environment from "../environment";

export default function useUserProjects(userId) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    if (!userId) {
      setProjects([]);
      return;
    }

    console.log('useUserProjects');

    getProjects(userId)
      .then((result) => {
        setProjects(result);
      })
      .catch(() => {
        setProjects([]);
      });
  }, [userId]);

  return [projects];
}

function getProjects(userId) {
  const request = `${environment.BASE_URL}${environment.USERS}${userId}${environment.PROJECTS}?state=all`;
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
    .then((result) => {
      console.log('getProjects', result);
      return result;
    })
    .catch((error) => {
      console.error(error);
      return [];
    });
}
