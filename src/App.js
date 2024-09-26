import React, { useState } from "react";
import ApiService from "./utils/ApiService";
import User from "./components/User";
import Post from "./components/Post";
import Comment from "./components/Comment";
import Navigation from "./components/Navigation";
import LayoutToggle from "./components/LayoutToggle";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [currentUserId, setCurrentUserId] = useState(null);
  const [currentPostId, setCurrentPostId] = useState(null);
  const [view, setView] = useState("users");
  const [isListView, setIsListView] = useState(false);

  // Funções para carregar os dados da API
  const loadUsers = () => ApiService("/users", setUsers);
  const loadPosts = (userId) => {
    setCurrentUserId(userId);
    ApiService(`/posts?userId=${userId}`, setPosts);
  };
  const loadComments = (postId) => {
    setCurrentPostId(postId);
    ApiService(`/comments?postId=${postId}`, setComments);
  };

  // Inicializa a aplicação carregando os usuários
  useState(() => {
    loadUsers();
  }, []);

  return (
    <div className={`App ${isListView ? "list-view" : "grid-view"}`}>
      <header>
        <h1>Aplicação React Dinâmica</h1>
        <Navigation view={view} setView={setView} />
        <LayoutToggle isListView={isListView} setIsListView={setIsListView} />
      </header>

      <main>
        {view === "users" && (
          <User users={users} onUserClick={loadPosts} setView={setView} />
        )}
        {view === "posts" && (
          <Post posts={posts} onPostClick={loadComments} setView={setView} />
        )}
        {view === "comments" && (
          <Comment comments={comments} setView={setView} />
        )}
      </main>

      <footer>
        <p>&copy; 2024 Minha Aplicação React</p>
      </footer>
    </div>
  );
}

export default App;
