import React, { useCallback, useEffect, useState } from "react";
import DataTable from "./components/DataTable";
import { getProperty } from './components/functions';
import SearchInput from './components/SearchInput';
import environment from "./environment";
import useDebounce from './hook/useDebounce';
import './index.css';

const Question1 = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setLoading] = useState(false);

  const columns = React.useMemo(
    () => [
      {
        field: "avatar_url",
        headerName: "Avatar",
        width: "100px",
        renderCell: function cell({ field, value }) {
          return (
            <img
              src={getProperty(value, field)}
              className="img-thumbnail avatar"
              alt="User avatar"
            />
          );
        },
      },
      {
        field: "login",
        headerName: "Username",
      },
      {
        field: "repos_url",
        headerName: "Repos URL",
        renderCell: function cell({ field, value }) {
          const url = getProperty(value, field);
          return (
            <a href={url}>{url}</a>
          );
        },
      },
    ],
    []
  );

  const onRowClick = React.useCallback((row) => {
    console.log(row);
  }, []);

  const handleChange = useCallback((e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  }, []);

  const debouncedSearchTerm = useDebounce(search, 300);

  useEffect(
    () => {
      if (debouncedSearchTerm && debouncedSearchTerm.length >= 3) {
        setLoading(true);
        searchUsers(debouncedSearchTerm).then(results => {
          setLoading(false);
          setUsers(results["items"]);
        });
      } else {
        setUsers([]);
      }
    },
    [debouncedSearchTerm]
  );

  return (
    <div>
      <SearchInput onChange={handleChange} />
      <DataTable
        data={users}
        columns={columns}
        isLoading={isLoading}
        onRowClick={onRowClick}
        rowId="id"
        emptyMessage="No Data"
      />
    </div>
  );
};

export default Question1;


function searchUsers(search) {
  const request = `${environment.BASE_URL}${environment.SEARCH_USER}?q=${search}`;
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