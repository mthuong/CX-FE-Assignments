import React, { useCallback, useState } from "react";
import SearchInput from "../components/SearchInput";
import useSearchUsers from "../hook/useSearchUsers";
import "./index.scss";
import User from "../components/User";
import useUserDetail from '../hook/useUserDetail';
import useUserProjects from '../hook/useUserProjects';
import UserDetail from '../components/UserDetail';
import UserProjects from '../components/UserProjects';

function Question3() {
  const [search, setSearch] = useState("");
  const [selectedUser, setSelectedUser] = useState();
  const [users] = useSearchUsers(search);
  const [userDetail] = useUserDetail(selectedUser?.login);
  const [projects] = useUserProjects(selectedUser?.login);

  const handleChange = useCallback((e) => {
    setSearch(e.target.value);
    setSelectedUser();
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
          <UserDetail user={userDetail} />
          <UserProjects projects={projects} />
        </div>
      </div>
    </div>
  );
}

export default React.memo(Question3);
