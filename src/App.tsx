import React, { useState, useEffect } from 'react';
import BlogForm from './components/BlogForm';
import BlogList from './components/BlogList';
import { Blog } from './types';
import './App.css';

const App: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const savedBlogs = JSON.parse(localStorage.getItem('blogs') || '[]');
    setBlogs(savedBlogs);
  }, []);

  useEffect(() => {
    localStorage.setItem('blogs', JSON.stringify(blogs));
  }, [blogs]);

  const addBlog = (blog: Blog) => {
    setBlogs([...blogs, blog]);
  };

  const deleteBlog = (id: number) => {
    setBlogs(blogs.filter((blog) => blog.id !== id));
  };

  return (
    <div className="container">
      <h1>My Blogging App</h1>
      <BlogForm onAdd={addBlog} />
      <BlogList blogs={blogs} onDelete={deleteBlog} />
    </div>
  );
};

export default App;
