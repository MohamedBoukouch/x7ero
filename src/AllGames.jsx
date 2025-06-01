import React from 'react';
import { useNavigate } from 'react-router-dom';
import { games } from './gamesData';
import { TiArrowLeft } from "react-icons/ti";

const AllGames = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100 text-gray-800 p-4">
      {/* Header */}
      <header className="flex flex-col items-center mb-8">
        <div className="flex items-center w-full justify-between max-w-6xl">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center text-purple-600 font-semibold hover:text-purple-800"
          >
            <TiArrowLeft className="mr-1" /> Back
          </button>
          <h1 className="text-5xl font-bold text-purple-600">x7ero</h1>
          <div className="w-24"></div> {/* Spacer for alignment */}
        </div>
        <p className="text-xl text-gray-600 my-6">All Games Collection</p>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto">
        {/* All Games Grid */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-purple-600">All Games</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {games.map((game) => (
              <div 
                key={game.id} 
                className="bg-white rounded-xl overflow-hidden shadow-md cursor-pointer hover:shadow-lg transition-shadow hover:transform hover:-translate-y-1"
                onClick={() => navigate(`/game/${game.id}`)}
              >
                <img 
                  src={game.image} 
                  alt={game.name} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{game.name}</h3>
                  <div className="flex justify-between items-center">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                      {game.category}
                    </span>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-12 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} x7ero. All rights reserved.</p>
      </footer>

      {/* Responsive Media Queries */}
      <style jsx>{`
        @media (max-width: 640px) {
          .text-5xl {
            font-size: 2.5rem;
          }
          .grid-cols-2 {
            grid-template-columns: repeat(1, 1fr);
          }
        }
        @media (max-width: 768px) {
          .grid-cols-3 {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 1024px) {
          .grid-cols-4 {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
    </div>
  );
};

export default AllGames;