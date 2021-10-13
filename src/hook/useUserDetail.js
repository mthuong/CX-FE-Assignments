import { useState, useEffect } from "react";
import environment from "../environment";

export default function useUserDetail(userId) {
  const [userDetail, setUserDetail] = useState();

  useEffect(() => {
    if (!userId) {
      setUserDetail();
      return;
    }

    console.log('useUserDetail');

    getUserDetail(userId)
      .then((result) => {
        setUserDetail(result);
      })
      .catch(() => {
        setUserDetail(undefined);
      });
  }, [userId]);

  return [userDetail];
}

function getUserDetail(userId) {
  const request = `${environment.BASE_URL}${environment.USERS}${userId}`;
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
      console.log('getUserDetail', result);
      return result;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
}