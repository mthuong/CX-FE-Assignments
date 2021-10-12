import { useState, useEffect } from 'react';
import environment from '../environment';
import useDebounce from './useDebounce';

export default function useSearchUsers(q) {
  const [users, setUsers] = useState([]);

  const debouncedSearchTerm = useDebounce(q, 300);

  useEffect(
    () => {
      if (debouncedSearchTerm && debouncedSearchTerm.length >= 3) {
        searchUsers(debouncedSearchTerm)
          .then((result) => {
            setUsers(result["items"]);
          })
          .catch(() => {
            setUsers([]);
          })
      } else {
        setUsers([]);
      }
    },
    [debouncedSearchTerm]
  );

  return [users];
}

function searchUsers(search) {
  const request = `${environment.BASE_URL}${environment.SEARCH_USERS}?q=${search}`;
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