import React, { useCallback, useState } from "react";
import DataTable from "../components/DataTable";
import { getProperty } from '../components/functions';
import SearchInput from '../components/SearchInput';
import UserName from '../components/UserName';
import useSearchUsers from '../hook/useSearchUsers';
import './index.css';

const Question1 = () => {
  const [search, setSearch] = useState("");
  const [users] = useSearchUsers(search);

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
        headerName: "Name",
        renderCell: function cell({ field, value }) {
          const username = getProperty(value, field);
          return (
            <UserName username={username} />
          );
        },
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

  return (
    <div>
      <SearchInput onChange={handleChange} />
      <DataTable
        data={users}
        columns={columns}
        onRowClick={onRowClick}
        rowId="id"
        emptyMessage="No Data"
      />
    </div>
  );
};

export default Question1;
