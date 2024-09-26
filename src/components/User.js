import React from "react";

const User = ({ users, onUserClick, setView }) => {
  return (
    <div className="user-grid">
      {users.map((user) => (
        <div className="user-card" key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.company.catchPhrase}</p>
          <button
            onClick={() => {
              onUserClick(user.id);
              setView("posts");
            }}
          >
            Ver Posts
          </button>
        </div>
      ))}
    </div>
  );
};

export default User;
