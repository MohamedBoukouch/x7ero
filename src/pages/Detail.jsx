import React, { useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { games } from '../data/gamesData';
import { FaExpand, FaCompress, FaArrowLeft, FaGamepad, FaKeyboard, FaMouse } from 'react-icons/fa';
import { Helmet } from 'react-helmet';

const Detail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const game = games.find(game => game.slug === slug);
  const iframeRef = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      iframeRef.current?.requestFullscreen().then(() => {
        setIsFullscreen(true);
      });
    } else {
      document.exitFullscreen().then(() => {
        setIsFullscreen(false);
      });
    }
  };

  if (!game) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white flex items-center justify-center">
        <div className="text-center p-6 bg-gray-800 rounded-xl border border-gray-700 max-w-md">
          <FaGamepad className="mx-auto text-5xl text-purple-500 mb-4" />
          <h2 className="text-2xl font-bold mb-2">Game Not Found</h2>
          <p className="text-gray-300 mb-4">The game you're looking for doesn't exist or may have been removed.</p>
          <button
            onClick={() => navigate('/')}
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-full transition-colors duration-300 flex items-center mx-auto"
          >
            <FaArrowLeft className="mr-2" />
            Back to Games
          </button>
        </div>
      </div>
    );
  }

  // Get the display name for the type
  const getTypeDisplayName = () => {
    if (!game.type) return "No Type Specified";
    switch(game.type.toLowerCase()) {
      case 'tendance': return 'Tendance';
      case 'nouveaux': return 'Nouveaux';
      case 'updated': return 'Mis à jour';
      case 'originals': return 'Originals';
      case 'multiplayer': return 'Multijoueur';
      case '2players': return '2 Joueurs';
      case 'action': return 'Action';
      case 'adventure': return 'Aventure';
      case 'sport': return 'Sport';
      case 'beauty': return 'Beauté';
      case 'shooting': return 'Tir';
      case 'racing': return 'Course';
      case 'puzzle': return 'Puzzle';
      case 'fighting': return 'Combat';
      case 'defense': return 'Défense';
      case 'football': return 'Football';
      case 'flying': return 'Vol';
      default: return game.type;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white p-4">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>{game.name} - Play Online | x7ero</title>
        <meta name="description" content={game.description} />
        <link rel="canonical" href={`https://x7ero.com/games/${game.slug}`} />
        {/* OpenGraph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://x7ero.com/games/${game.slug}`} />
        <meta property="og:title" content={`${game.name} - Play Online | x7ero`} />
        <meta property="og:description" content={game.description} />
        <meta property="og:image" content={game.image} />
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={`https://x7ero.com/games/${game.slug}`} />
        <meta property="twitter:title" content={`${game.name} - Play Online | x7ero`} />
        <meta property="twitter:description" content={game.description} />
        <meta property="twitter:image" content={game.image} />
      </Helmet>

      <div className="max-w-6xl mx-auto">
        {/* Breadcrumbs Navigation */}
        <nav className="text-sm mb-4 text-gray-400">
          <ol className="flex space-x-2">
            <li><button onClick={() => navigate('/')} className="hover:text-purple-400">Home</button></li>
            <li>/</li>
            {game.type && (
              <>
                <li>
                  <button 
                    onClick={() => navigate(`/type/${game.type.toLowerCase()}`)} 
                    className="hover:text-purple-400"
                  >
                    {getTypeDisplayName()}
                  </button>
                </li>
                <li>/</li>
              </>
            )}
            <li className="text-purple-300">{game.name}</li>
          </ol>
        </nav>

        {/* Game Header */}
        <div className="flex justify-between items-center mb-6">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center text-purple-400 hover:text-purple-300 transition-colors group"
          >
            <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Back
          </button>
          <div className="flex items-center space-x-2 text-sm">
            <span className="bg-purple-900/50 text-purple-300 px-3 py-1 rounded-full">
              ★ {game.rating}/5
            </span>
            <span className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full">
              {game.plays || '1.2M'} plays
            </span>
          </div>
        </div>

        {/* Game Info Section */}
        <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 mb-6 border border-gray-700 shadow-lg">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/3 relative group">
              <img 
                src={game.image} 
                alt={`${game.name} thumbnail`} 
                className="w-full h-48 md:h-64 object-cover rounded-lg border border-gray-700 group-hover:opacity-90 transition-opacity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-white font-medium">Game Preview</span>
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <div className="flex justify-between items-start mb-2">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  {game.name}
                </h1>
                <div className="flex flex-col items-end">
                  <span className="bg-gray-700 text-amber-300 px-3 py-1 rounded-full text-sm font-medium mb-1">
                    {game.category}
                  </span>
                  {game.type && (
                    <span className="bg-gray-700 text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                      {getTypeDisplayName()}
                    </span>
                  )}
                </div>
              </div>
              <p className="text-gray-300 mb-6">{game.description}</p>
              <div className="flex flex-wrap gap-3">
                <button 
                  onClick={() => document.querySelector('iframe')?.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'center'
                  })}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Start Playing!
                </button>
                <button 
                  onClick={toggleFullscreen}
                  className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-4 rounded-full transition-colors duration-300 flex items-center gap-2"
                >
                  {isFullscreen ? (
                    <>
                      <FaCompress /> Exit Fullscreen
                    </>
                  ) : (
                    <>
                      <FaExpand /> Fullscreen
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Game Container */}
        <div className="relative bg-gray-800/80 backdrop-blur-sm rounded-xl p-2 border border-gray-700 shadow-xl">
          <div className="absolute top-4 right-4 z-10">
            <button 
              onClick={toggleFullscreen}
              className="bg-gray-900/80 hover:bg-gray-800 text-white p-2 rounded-full transition-colors duration-300"
              title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
            >
              {isFullscreen ? <FaCompress /> : <FaExpand />}
            </button>
          </div>
          <iframe
            ref={iframeRef}
            src={game.url}
            width="100%"
            height="750"
            scrolling="no"
            frameBorder="0"
            className="rounded-lg shadow-lg"
            allowFullScreen
            title={`Play ${game.name} on x7ero`}
          />
        </div>

        {/* Game Footer */}
        <div className="mt-6 text-center text-gray-400 text-sm flex flex-col sm:flex-row justify-center items-center gap-2">
          <div className="flex items-center gap-2">
            <FaKeyboard className="text-purple-400" />
            <FaMouse className="text-purple-400" />
            <span>Keyboard/Mouse controls</span>
          </div>
          <span className="hidden sm:block">•</span>
          <button 
            onClick={toggleFullscreen}
            className="text-purple-400 hover:text-purple-300 flex items-center gap-1 transition-colors"
          >
            <FaExpand className="text-sm" />
            Press for Fullscreen
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detail;