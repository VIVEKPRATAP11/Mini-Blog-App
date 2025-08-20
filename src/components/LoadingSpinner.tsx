import React from "react";

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div className="relative">
        {/* Outer ring */}
        <div className="w-20 h-20 border-4 border-brand-200 dark:border-slate-700 rounded-full animate-pulse"></div>
        {/* Inner spinning ring */}
        <div className="absolute top-0 left-0 w-20 h-20 border-4 border-transparent border-t-brand-600 border-r-purple-600 rounded-full animate-spin"></div>
        {/* Center dot */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gradient-to-r from-brand-600 to-purple-600 rounded-full animate-pulse"></div>
      </div>
      <p className="mt-6 text-gray-600 dark:text-slate-300 font-medium animate-pulse">
        Loading amazing content...
      </p>
    </div>
  );
};

export default LoadingSpinner;
