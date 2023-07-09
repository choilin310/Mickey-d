import { useState, useEffect } from "react";
// // import { useNavigate } from "react-router-dom";
import { getAllUsers, updateuser } from "../api/userAuth";

export default function allUsers() {
  const [users, setUsers] = useState([]);
  const [admin, setadmin] = useState(false);
  useEffect(() => {
    async function fetchUsers() {
      try {
        const fetchedUsers = await getAllUsers();
        setUsers(fetchedUsers);
      } catch (error) {
        console.log(error);
      }
    }

    fetchUsers();
  }, []);

  async function handlesubmit(e, userid) {
    e.preventDefault();
    confirm("confirm update");
    let updateObj = admin;
    await updateuser(updateObj, userid);
  }
  return (
    <div>
      <h2>Users</h2>
      {users.map((user) => (
        <div key={user.user_id} className="users">
          <p>User Id: {user.user_id}</p>
          <p>Username: {user.username}</p>
          <p>email: {user.email}</p>
          <select
            defaultValue={user.adm}
            onChange={(e) => setadmin(e.target.value)}
          >
            <option value="true">true</option>
            <option value="false">false</option>
          </select>
          <button
            value={user.user_id}
            onClick={(e) => handlesubmit(e, user.user_id)}
          >
            confirm update
          </button>
        </div>
      ))}
    </div>
  );
}