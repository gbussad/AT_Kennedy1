import React from "react";

const Navigation = ({ view, setView }) => {
  return (
    <nav>
      {view !== "users" && (
        <button onClick={() => setView("users")}>Usuários</button>
      )}
      {view === "comments" && (
        <button onClick={() => setView("posts")}>Voltar para Posts</button>
      )}
    </nav>
  );
};

export default Navigation;
