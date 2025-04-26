import React from 'react';
import { Blog } from '../types';

interface BlogItemProps {
  blog: Blog;
  onDelete: (id: number) => void;
}

const BlogItem: React.FC<BlogItemProps> = ({ blog, onDelete }) => {
  return (
    <div className="blog-item">
      <h2>{blog.title}</h2>
      <p>{blog.content}</p>
      <button onClick={() => onDelete(blog.id)}>Delete</button>
    </div>
  );
};

export default BlogItem;
