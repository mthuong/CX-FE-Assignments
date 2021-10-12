import React, { useCallback, useState } from "react";
import SearchInput from "../components/SearchInput";
import useSearchUsers from "../hook/useSearchUsers";
import "./index.css";
import User from "../components/User";

function Question3(props) {
  const [search, setSearch] = useState("mth");
  const [selectedUser, setSelectedUser] = useState();
  const [users] = useSearchUsers(search);

  const handleChange = useCallback((e) => {
    setSearch(e.target.value);
  }, []);

  const userComponents = useCallback(() => {
    return users.map((u) => {
      return (
        <User
          key={u["id"]}
          user={u}
          isSelected={selectedUser === u}
          onSelect={() => setSelectedUser(u)}
        />
      );
    });
  }, [selectedUser, users]);

  return (
    <div className="page-content">
      <SearchInput className="search-input" onChange={handleChange} />
      <div className="data-container">
        <div className="left-panel">
          {userComponents()}
        </div>
        <div className="right-panel">
        </div>
      </div>
    </div>
  );
}

export default Question3;
