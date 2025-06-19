// components/BlogPost.jsx
import React from 'react';

const BlogPost = ({ title, author, date, excerpt, image, game }) => {
  return (
    <div className="blog-post bg-white rounded-lg shadow-md overflow-hidden mb-8 transition-transform hover:scale-[1.02]">
      {image && (
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-600">{date}</span>
          {game && (
            <span className="px-2 py-1 bg-indigo-100 text-indigo-800 rounded-full text-xs font-semibold">
              {game}
            </span>
          )}
        </div>
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700 mb-4">{excerpt}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium">By {author}</span>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;