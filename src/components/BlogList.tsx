import React from 'react';
import { Blog } from '../types';
import BlogItem from './BlogItem';

interface BlogListProps {
  blogs: Blog[];
  onDelete: (id: number) => void;
}

const BlogList: React.FC<BlogListProps> = ({ blogs, onDelete }) => {
  return (
    <div className="blog-list">
      {blogs.map((blog) => (
        <BlogItem key={blog.id} blog={blog} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default BlogList;
