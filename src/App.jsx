import React from "react";
import login from "./Pages/login/login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import register from "./Pages/register/register";
import Posts from "./Pages/Posts/Posts";
import Post from "./Pages/Post/Post";

const App = () => {
  return (
    <main className="app">
      <login />
      <Routes>
      <Route path="/" element={<login />} />
      <Route path="/register" element={<register />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/post/:id" element={<Post />} />
      </Routes>
    </main>
  );
};

export default App;
