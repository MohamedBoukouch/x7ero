import { IoMdClose } from 'react-icons/io';
import { 
  FaHome, FaFire, FaGamepad, FaFutbol, FaCar, FaPuzzlePiece, FaSearch, FaArrowRight 
} from 'react-icons/fa';
import { GiBoxingGlove, GiSwordman } from 'react-icons/gi';
import { BiFootball } from 'react-icons/bi';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { games } from '../gamesData';

const Sidebar = ({ isOpen, onClose }) => {
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
      onClose();
    }
  };

  const handleResultClick = (game) => {
    navigate(`/game/${game.slug}`);
    setSearchTerm('');
    setSearchResults([]);
    setShowResults(false);
    onClose();
  };

  // Function to handle "Voir tous" clicks
  const handleViewAll = (type) => {
    navigate(`/all-games/${type}`);
    onClose();
  };

  return (
    <div className={`
      fixed inset-y-0 left-0 z-50 bg-gray-800 shadow-lg
      transition-all duration-300 ease-in-out
      ${isOpen ? 'translate-x-0 w-64' : '-translate-x-full md:translate-x-0 md:w-16 hover:md:w-64'}
      group
    `}>
      {/* Header - Only visible on mobile */}
      <div className="flex items-center justify-between p-4 border-b border-gray-700 md:hidden">
        <h2 className="text-xl font-bold text-white">Menu</h2>
        <button 
          onClick={onClose}
          className="p-1 rounded-full hover:bg-gray-700"
        >
          <IoMdClose className="text-xl text-white" />
        </button>
      </div>

      {/* Mobile Search - Only visible on mobile */}
      <div className="p-4 border-b border-gray-700 md:hidden relative">
        <form onSubmit={handleSearchSubmit}>
          <div className="relative">
            <input
              type="text"
              placeholder="Search games..."
              className="w-full py-2 pl-10 pr-4 rounded-full bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </form>
        
        {/* Search Results Dropdown */}
        {showResults && searchTerm && (
          <div className="absolute left-0 right-0 mt-2 bg-gray-700 rounded-lg shadow-lg z-50 max-h-80 overflow-y-auto">
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
      </div>

      {/* Navigation */}
      <nav className="p-4">
        {/* Accueil section */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-semibold text-blue-400 md:hidden md:group-hover:block">
              Accueil
            </h3>
            {/* <button 
              onClick={() => handleViewAll('recommande')}
              className="text-xs text-purple-400 hover:text-purple-300 flex items-center md:hidden md:group-hover:flex"
            >
              Voir tous <FaArrowRight className="ml-1" />
            </button> */}
          </div>
          <ul className="space-y-1">
            <SidebarItem 
              icon={<FaFire />} 
              text="Tendance" 
              onClick={() => navigate('/all-games/trending')}
            />
            <SidebarItem 
              icon={<FaHome />} 
              text="Nouveaux" 
              onClick={() => navigate('/all-games/new')}
            />
            <SidebarItem 
              icon={<FaGamepad />} 
              text="Mis à jour" 
              onClick={() => navigate('/all-games/updated')}
            />
            <SidebarItem 
              icon={<GiSwordman />} 
              text="Originals" 
              onClick={() => navigate('/all-games/original')}
            />
            <SidebarItem 
              icon={<FaGamepad />} 
              text="Multijoueur" 
              onClick={() => navigate('/all-games/multiplayer')}
            />
            <SidebarItem 
              icon={<FaGamepad />} 
              text="2 joueurs" 
              onClick={() => navigate('/all-games/two-player')}
            />
          </ul>
        </div>

        {/* Categories section */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-semibold text-blue-400 md:hidden md:group-hover:block">
              CATEGORIES
            </h3>
            {/* <button 
              onClick={() => navigate('/all-games')}
              className="text-xs text-purple-400 hover:text-purple-300 flex items-center md:hidden md:group-hover:flex"
            >
              Voir tous <FaArrowRight className="ml-1" />
            </button> */}
          </div>
          <ul className="space-y-1">
            <SidebarItem 
              icon={<GiSwordman />} 
              text="Action" 
              onClick={() => navigate('/all-games?category=action')}
            />
            <SidebarItem 
              icon={<FaGamepad />} 
              text="Aventure" 
              onClick={() => navigate('/all-games?category=adventure')}
            />
            <SidebarItem 
              icon={<FaFutbol />} 
              text="Sport" 
              onClick={() => navigate('/all-games?category=sport')}
            />
            <SidebarItem 
              icon={<FaGamepad />} 
              text="Beauté" 
              onClick={() => navigate('/all-games?category=beauty')}
            />
            <SidebarItem 
              icon={<GiBoxingGlove />} 
              text="Tir" 
              onClick={() => navigate('/all-games?category=shooting')}
            />
            <SidebarItem 
              icon={<FaCar />} 
              text="Course" 
              onClick={() => navigate('/all-games?category=racing')}
            />
            <SidebarItem 
              icon={<FaPuzzlePiece />} 
              text="Puzzle" 
              onClick={() => navigate('/all-games?category=puzzle')}
            />
            <SidebarItem 
              icon={<GiBoxingGlove />} 
              text="Combat" 
              onClick={() => navigate('/all-games?category=fighting')}
            />
            <SidebarItem 
              icon={<GiSwordman />} 
              text="Défense" 
              onClick={() => navigate('/all-games?category=defense')}
            />
            <SidebarItem 
              icon={<BiFootball />} 
              text="Football" 
              onClick={() => navigate('/all-games?category=football')}
            />
            <SidebarItem 
              icon={<FaFutbol />} 
              text="Vol" 
              onClick={() => navigate('/all-games?category=flight')}
            />
          </ul>
        </div>
      </nav>
    </div>
  );
};

const SidebarItem = ({ icon, text, onClick }) => (
  <li>
    <button 
      className="flex items-center w-full p-3 rounded-lg text-gray-200 hover:bg-gray-700 transition-colors duration-300"
      onClick={onClick}
    >
      <span className="text-xl">{icon}</span>
      <span className="ml-3 text-white md:hidden group-hover:md:inline">
        {text}
      </span>
    </button>
  </li>
);

export default Sidebar;