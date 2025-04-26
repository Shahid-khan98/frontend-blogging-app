import React, { useState } from 'react';
import { Blog } from '../types';

interface BlogFormProps {
  onAdd: (blog: Blog) => void;
}

const BlogForm: React.FC<BlogFormProps> = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    const newBlog: Blog = {
      id: Date.now(),
      title,
      content,
    };

    onAdd(newBlog);
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Blog Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Blog Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <button type="submit">Add Blog</button>
    </form>
  );
};

export default BlogForm;
