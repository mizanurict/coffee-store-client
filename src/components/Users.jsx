/** @format */

import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
  const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);
    
    const handleDelete = id => {
        fetch(`http://localhost:5000/user/${id}`, {
        method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) { 
                    console.log('delete successfully');
                    //remove the user from the UI
                    setUsers(users.filter(user => user._id!== id));
                }

        })
}

  return (
    <div>
      <h2>Users : {users.length} </h2>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Email</th>
                          <th>Created At</th>
                          <th>Last Logged</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
                      {
                          users.map(user => <tr key={user._id}>
                              <td>{ user.email } </td>
                              <td>{ user.createdAt } </td>
                              <td>{user.lastLoggedAt} </td>
                              <td> <button onClick={()=>handleDelete(user._id)} className="btn">X</button> </td>
                          </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
