import React from "react";
import { NavLink } from "react-router-dom";

const BlogDetails = ({post}) => {
  return (
    <div className="p-4 rounded-md hover:border hover:shadow-lg transition-all duration-200">
      <NavLink to={`/blog/${post.id}`}>
        <span className="font-bold hover:underline transition-all duration-200">{post.title}</span>
      </NavLink>
      <p className="text-sm font-light">
        By
        <span>{post.author}</span>
        on{" "}
        <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}>
          <span>{post.category}</span>
        </NavLink>
      </p>
      <p className="text-sm font-light">Posted on {post.date}</p>
      <p className="text-lg font-normal">{post.content}</p>
      <div>
        {post.tags.map((tag, index) => (
          <NavLink key={index} to={`/tags/${tag.replaceAll(" ", "-")}`}>
            <span className="underline text-blue-600 mr-6 opacity-70 hover:opacity-100">{`#${tag}`}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default BlogDetails;
