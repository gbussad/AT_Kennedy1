import React from "react";

const Comment = ({ comments, setView }) => {
  const formatEmail = (email) => "@" + email.split("@")[0];

  return (
    <div className="comment-list">
      {comments.map((comment) => (
        <div className="comment-item" key={comment.id}>
          <h4>{comment.name.split(" ").slice(0, 2).join(" ")}</h4>
          <p>{formatEmail(comment.email)}</p>
          <p>{comment.body.slice(0, 140)}</p>
          <button>Excluir</button>
        </div>
      ))}
      <button onClick={() => setView("posts")}>Voltar para Posts</button>
    </div>
  );
};

export default Comment;
