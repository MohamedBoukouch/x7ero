import React, { useState } from 'react';
import { FaSearch, FaStar, FaArrowLeft, FaMoon, FaSun, FaCalendarAlt, FaClock } from 'react-icons/fa';
import { IoGameController } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { articles } from '../data/articlesData';

const Blogs = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Tous');
  const [searchTerm, setSearchTerm] = useState('');
  const [darkMode, setDarkMode] = useState(true); // Forced to dark mode

  const categories = ['Tous', 'Actualités', 'Guides', 'Interviews', 'Technologie', 'Tendances'];

  const filteredPosts = articles.filter(post => 
    (activeTab === 'Tous' || post.category === activeTab) &&
    (post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
     post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-4 md:p-8">
      <header className="max-w-7xl mx-auto mb-8">
        <div className="flex items-center justify-between mb-8">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center text-purple-400 hover:text-purple-300 transition-colors group"
          >
            <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Retour
          </button>
          
          <h1 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Blog X7ero
          </h1>
          
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="p-2"
            disabled // Dark mode forced on
          >
            {/* <FaSun /> */}
          </button>
        </div>
        
        <div className="text-center mb-8">
          <p className="text-lg mb-2 text-purple-200">
            Actualités, guides, interviews et analyses sur l'univers des jeux en ligne.
          </p>
          <p className="text-gray-400">
            Restez informé des dernières tendances et découvertes dans le monde du gaming.
          </p>
        </div>
        
        <div className="relative max-w-2xl mx-auto mb-8">
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-400">
            <FaSearch />
          </div>
          <input
            type="text"
            placeholder="Rechercher des articles..."
            className="w-full py-2 pl-12 pr-6 rounded-full bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map(category => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === category 
                  ? 'bg-purple-600 text-white' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
              onClick={() => setActiveTab(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </header>

      <main className="max-w-7xl mx-auto">
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-6 flex items-center text-purple-300">
            <IoGameController className="mr-2" />
            Articles récents
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.slice(0, 3).map(post => (
              <div 
                key={post.id}
                className="rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg bg-gray-800/50 border border-gray-700 hover:border-purple-500/30 cursor-pointer"
                onClick={() => navigate(`/blogs/article/${post.id}`)}
              >
                <div className="relative aspect-video">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                    <div className="flex text-yellow-400 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className={i < 4 ? "text-yellow-400" : "text-yellow-400/30"} />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <span className="text-xs px-2 py-1 rounded-full mb-3 inline-block bg-purple-900/50 text-purple-300">
                    {post.category}
                  </span>
                  <h3 className="font-bold mb-2 line-clamp-2 text-white">{post.title}</h3>
                  <p className="text-sm mb-4 line-clamp-2 text-gray-400">{post.excerpt}</p>
                  <div className="flex justify-between items-center text-xs text-gray-500">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-6 text-purple-300">
            {activeTab === 'Tous' ? 'Tous les articles' : activeTab}
          </h2>
          
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map(post => (
                <div 
                  key={post.id}
                  className="rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg bg-gray-800/50 border border-gray-700 hover:border-purple-500/30 cursor-pointer"
                  onClick={() => navigate(`/blogs/article/${post.id}`)}
                >
                  <div className="relative aspect-video">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                      <div className="flex text-yellow-400 mb-1">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} className={i < 4 ? "text-yellow-400" : "text-yellow-400/30"} />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <span className="text-xs px-2 py-1 rounded-full mb-3 inline-block bg-purple-900/50 text-purple-300">
                      {post.category}
                    </span>
                    <h3 className="font-bold mb-2 line-clamp-2 text-white">{post.title}</h3>
                    <p className="text-sm mb-4 line-clamp-2 text-gray-400">{post.excerpt}</p>
                    <div className="flex justify-between items-center text-xs text-gray-500">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 rounded-xl border bg-gray-800/50 border-gray-700">
              <FaGamepad className="mx-auto text-5xl mb-4 text-purple-500" />
              <h3 className="text-lg font-bold mb-2">Aucun article trouvé</h3>
              <p className="text-gray-400">
                Essayez un autre terme de recherche ou catégorie
              </p>
            </div>
          )}
        </section>
      </main>

      <footer className="mt-16 text-center text-sm pb-8 text-gray-500">
        <p>© {new Date().getFullYear()} x7ero.com Tous droits réservés.</p>
      </footer>
    </div>
  );
};

export default Blogs;