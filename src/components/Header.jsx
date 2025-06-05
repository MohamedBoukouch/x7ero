import { FaSearch, FaBars, FaUserCog } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { games } from '../gamesData';

const Header = ({ onMenuClick }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    
    if (term.trim() === '') {
      setSearchResults([]);
      setShowResults(false);
      return;
    }
    
    const results = games.filter(game => 
      game.name.toLowerCase().includes(term.toLowerCase())
    );
    setSearchResults(results);
    setShowResults(true);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
      setSearchTerm('');
      setSearchResults([]);
      setShowResults(false);
    }
  };

  const handleResultClick = (game) => {
    navigate(`/game/${game.slug}`);
    setSearchTerm('');
    setSearchResults([]);
    setShowResults(false);
  };

  return (
    <header className="bg-gray-900 text-white shadow-md relative">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Mobile menu button */}
        <button 
          onClick={onMenuClick}
          className="md:hidden p-2 rounded-lg hover:bg-gray-700"
        >
          <FaBars className="text-xl" />
        </button>

        {/* Logo */}
        <div 
          className="flex items-center cursor-pointer" 
          onClick={() => navigate('/')}
        >
          <h1 className="text-2xl font-bold pl-10">x7ero</h1>
        </div>

        {/* Desktop Search */}
        <form 
          onSubmit={handleSearchSubmit}
          className="hidden md:flex flex-1 max-w-md mx-4 relative"
        >
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search games..."
              className="w-full py-2 pl-10 pr-4 rounded-full bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          
          {/* Search Results Dropdown */}
          {showResults && searchTerm && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-gray-700 rounded-lg shadow-lg z-50 max-h-80 overflow-y-auto">
              {searchResults.length > 0 ? (
                searchResults.map(game => (
                  <div 
                    key={game.id}
                    className="p-3 hover:bg-gray-600 cursor-pointer flex items-center"
                    onClick={() => handleResultClick(game)}
                  >
                    <img 
                      src={game.image} 
                      alt={game.name}
                      className="w-10 h-10 object-cover rounded"
                    />
                    <span className="ml-3 text-white">{game.name}</span>
                  </div>
                ))
              ) : (
                <div className="p-3 text-gray-300">No games found</div>
              )}
            </div>
          )}
        </form>

        {/* User menu */}
        <div className="flex items-center space-x-4">
          {/* <button className="p-2 rounded-full hover:bg-gray-700">
            <FaUserCog className="text-xl" />
          </button> */}
        </div>
      </div>
    </header>
  );
};

export default Header;