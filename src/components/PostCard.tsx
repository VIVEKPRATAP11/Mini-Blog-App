import React from "react";
import { Link } from "react-router-dom";
import type { Post } from "../types";

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <article className="card card-hover-rise overflow-hidden group flex flex-col h-full">
      <div className="p-8 flex flex-col h-full">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-semibold text-brand-700 bg-brand-100 px-3 py-1 rounded-full">
            Article #{post.id}
          </span>
          <span className="text-xs text-gray-500">User {post.userId}</span>
        </div>

        <h2 className="text-xl font-bold text-gray-900 dark:text-slate-100 mb-4 line-clamp-2 group-hover:text-brand-600 transition-colors duration-200">
          {post.title}
        </h2>

        <p className="text-gray-600 dark:text-slate-300 mb-6 line-clamp-3 leading-relaxed flex-1">
          {post.body}
        </p>

        <div className="flex items-center justify-between mt-auto">
          <Link to={`/posts/${post.id}`} className="btn-primary">
            <span>Read More</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>

          <div className="flex items-center space-x-2 text-gray-400">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            <span className="text-sm">Comments</span>
          </div>
        </div>
      </div>

      {/* Gradient border on hover */}
      <div className="h-1 bg-gradient-to-r from-brand-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
    </article>
  );
};

export default PostCard;
