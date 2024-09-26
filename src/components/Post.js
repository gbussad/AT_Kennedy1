import React from "react";

const Post = ({ posts, onPostClick, setView }) => {
  return (
    <div className="post-list">
      {posts.map((post) => (
        <div className="post-item" key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <button
            onClick={() => {
              onPostClick(post.id);
              setView("comments");
            }}
          >
            Ver Comentários
          </button>
        </div>
      ))}
    </div>
  );
};

export default Post;
