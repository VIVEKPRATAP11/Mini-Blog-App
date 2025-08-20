import React, { useState } from "react";
import toast from "react-hot-toast";
import { useAppDispatch } from "../hooks/redux";
import { addPost } from "../store/postsSlice";

interface AddPostFormProps {
  onClose: () => void;
}

const AddPostForm: React.FC<AddPostFormProps> = ({ onClose }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() && body.trim()) {
      dispatch(
        addPost({
          title: title.trim(),
          body: body.trim(),
          userId: 1, // Default user ID for new posts
        })
      );
      toast.success("Post created successfully!");
      setTitle("");
      setBody("");
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-slate-800 rounded-3xl max-w-2xl w-full p-8 shadow-2xl transform transition-all duration-300 scale-100">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold heading-gradient">
              Create New Post
            </h2>
            <p className="text-gray-600 dark:text-slate-300 mt-2">
              Share your thoughts with the world
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 dark:text-slate-400 hover:text-gray-600 dark:hover:text-slate-200 transition-colors p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-full"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-semibold text-gray-700 mb-3"
            >
              Post Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-4 border border-slate-200 dark:border-slate-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all duration-200 text-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
              placeholder="What's your post about?"
              required
            />
          </div>

          <div>
            <label
              htmlFor="body"
              className="block text-sm font-semibold text-gray-700 mb-3"
            >
              Content
            </label>
            <textarea
              id="body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              rows={6}
              className="w-full px-4 py-4 border border-slate-200 dark:border-slate-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all duration-200 text-lg resize-none bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
              placeholder="Share your story, thoughts, or ideas..."
              required
            />
          </div>

          <div className="flex gap-4 pt-6">
            <button
              type="submit"
              className="flex-1 btn-primary py-4"
            >
              Publish Post
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 btn-outline py-4"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPostForm;
