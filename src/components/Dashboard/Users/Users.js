import React, { useState, useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import User from "./User";

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);
  console.log(users.name);
  return (
    <div>
      <div>
        <Sidebar></Sidebar>
      </div>
      <div className="container my-12 mx-auto px-4 md:px-12">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          {users.map((user) => (
            <User user={user}></User>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Users;
