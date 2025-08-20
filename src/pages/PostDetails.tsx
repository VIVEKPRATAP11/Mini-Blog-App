import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchComments } from "../store/commentsSlice";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";

const PostDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { posts } = useAppSelector((state) => state.posts);
  const {
    comments,
    loading: commentsLoading,
    error: commentsError,
  } = useAppSelector((state) => state.comments);

  const postId = id ? parseInt(id, 10) : null;
  const post = posts.find((p) => p.id === postId);

  useEffect(() => {
    if (postId) {
      dispatch(fetchComments(postId));
    }
  }, [dispatch, postId]);

  const handleRetryComments = () => {
    if (postId) {
      dispatch(fetchComments(postId));
    }
  };

  if (!postId || isNaN(postId)) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 flex items-center justify-center">
        <ErrorMessage message="Invalid post ID" />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 flex items-center justify-center">
        <ErrorMessage message="Post not found" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-8 inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors duration-200 group"
        >
          <div className="p-2 rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors duration-200">
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
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </div>
          <span className="font-medium">Back to Posts</span>
        </button>

        {/* Post Article */}
        <article className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-12 mb-12">
          {/* Post Meta */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-4 py-2 rounded-full">
                Article #{post.id}
              </span>
              <span className="text-sm text-gray-500">
                by User {post.userId}
              </span>
            </div>
            <div className="text-sm text-gray-400">
              {new Date().toLocaleDateString()}
            </div>
          </div>

          {/* Post Content */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-slate-100 mb-8 leading-tight">
            {post.title}
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 dark:text-slate-300 leading-relaxed whitespace-pre-wrap">
              {post.body}
            </p>
          </div>

          {/* Social Actions */}
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-slate-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6">
                <button className="flex items-center space-x-2 text-gray-500 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                  <span>Like</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-500 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                    />
                  </svg>
                  <span>Share</span>
                </button>
              </div>
              <span className="text-sm text-gray-500 dark:text-slate-400">
                {comments.length} comments
              </span>
            </div>
          </div>
        </article>

        {/* Comments Section */}
        <section className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-slate-100 mb-8 flex items-center">
            <svg
              className="w-8 h-8 mr-3 text-brand-600"
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
            Comments ({comments.length})
          </h2>

          {commentsLoading && <LoadingSpinner />}

          {commentsError && (
            <ErrorMessage
              message={commentsError}
              onRetry={handleRetryComments}
            />
          )}

          {!commentsLoading && !commentsError && comments.length === 0 && (
            <div className="text-center py-12">
              <svg
                className="mx-auto h-16 w-16 text-gray-400 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                />
              </svg>
              <p className="text-gray-500 dark:text-slate-400 text-lg">
                No comments yet. Be the first to share your thoughts!
              </p>
            </div>
          )}

          {!commentsLoading && !commentsError && comments.length > 0 && (
            <div className="space-y-8">
              {comments.map((comment) => (
                <div
                  key={comment.id}
                  className="bg-gray-50 dark:bg-slate-700/50 rounded-2xl p-8 hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors duration-200"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-slate-100 text-lg">
                        {comment.name}
                      </h3>
                      <p className="text-brand-600 text-sm font-medium">
                        {comment.email}
                      </p>
                    </div>
                    <span className="text-xs text-gray-500 dark:text-slate-400 bg-white dark:bg-slate-700 px-3 py-1 rounded-full">
                      Comment #{comment.id}
                    </span>
                  </div>
                  <p className="text-gray-700 dark:text-slate-300 leading-relaxed text-lg">
                    {comment.body}
                  </p>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default PostDetails;
