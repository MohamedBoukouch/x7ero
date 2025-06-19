import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaCalendarAlt, FaClock, FaShareAlt } from 'react-icons/fa';
import { articles } from '../data/articlesData'; // Import from articledate.js

const Article = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Convert id to number and find article
  const articleId = Number(id);
  const article = articles.find(post => post.id === articleId);

  // Handle case where article is not found
  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-center p-6 rounded-lg bg-gray-800 shadow-lg">
          <h1 className="text-2xl font-bold text-white mb-4">Article non trouvé</h1>
          <button 
            onClick={() => navigate('/blogs')}
            className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
          >
            Retour au blog
          </button>
        </div>
      </div>
    );
  }

  // Handle case where article content is missing
  if (!article.content || article.content.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-center p-6 rounded-lg bg-gray-800 shadow-lg">
          <h1 className="text-2xl font-bold text-white mb-4">Contenu indisponible</h1>
          <p className="text-gray-300 mb-4">Cet article ne contient pas de contenu.</p>
          <button 
            onClick={() => navigate('/blogs')}
            className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
          >
            Retour au blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center text-purple-400 hover:text-purple-300 mb-8 transition-colors"
        >
          <FaArrowLeft className="mr-2" />
          Retour aux articles
        </button>

        <article className="bg-gray-800 rounded-xl shadow-md p-6 md:p-8">
          <header className="mb-8">
            <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-purple-900/70 text-purple-300 mb-4">
              {article.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center text-gray-400 gap-4">
              <div className="flex items-center">
                <FaCalendarAlt className="mr-2" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center">
                <FaClock className="mr-2" />
                <span>{article.readTime} de lecture</span>
              </div>
            </div>
          </header>

          {article.image && (
            <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
              <img 
                src={article.image} 
                alt={article.title} 
                className="w-full h-auto object-cover"
              />
            </div>
          )}

          <div className="prose prose-invert max-w-none">
            {article.content.map((section, index) => {
              switch (section.type) {
                case 'paragraph':
                  return (
                    <p key={index} className="mb-4 text-gray-300">
                      {section.text}
                    </p>
                  );
                case 'heading':
                  return (
                    <h2 key={index} className="text-2xl font-bold mt-8 mb-4 text-white">
                      {section.text}
                    </h2>
                  );
                case 'image':
                  return (
                    <div key={index} className="my-6">
                      <img 
                        src={section.src} 
                        alt={section.alt} 
                        className="rounded-lg w-full h-auto shadow-md"
                      />
                    </div>
                  );
                default:
                  return null;
              }
            })}
          </div>

          <footer className="mt-12 pt-6 border-t border-gray-700">
            <h3 className="flex items-center text-lg font-medium mb-4 text-white">
              <FaShareAlt className="mr-2" />
              Partager cet article
            </h3>
            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors flex items-center">
                Twitter
              </button>
              <button className="px-4 py-2 rounded-lg bg-blue-800 hover:bg-blue-900 text-white transition-colors flex items-center">
                Facebook
              </button>
            </div>
          </footer>
        </article>
      </div>
    </div>
  );
};

export default Article;