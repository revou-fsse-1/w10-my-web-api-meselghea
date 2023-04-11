import React from "react";
import Login from "./Pages/Login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Pages/Register/Register";
import Posts from "./Pages/Posts/Posts";
import Post from "./Pages/Post/Post";

const App = () => {
  return (
    <main className="app">
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/post/:id" element={<Post />} />
      </Routes>
    </main>
  );
};

export default App;
