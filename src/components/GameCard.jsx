import { useNavigate } from 'react-router-dom';

const GameCard = ({ game, size = 'small' }) => {
  const navigate = useNavigate();

  const sizeClasses = {
    large: 'h-48 sm:h-64',
    small: 'h-32 sm:h-40'
  };

  // Convert Google Drive links to direct image URL
  const getImageSrc = (url) => {
    const match = url.match(/\/file\/d\/(.+?)\//);
    return match ? `https://drive.google.com/uc?export=view&id=${match[1]}` : url;
  };

  return (
    <div 
      className={`bg-gray-700 rounded-lg overflow-hidden shadow-sm cursor-pointer hover:shadow-md transition-all duration-300 relative ${sizeClasses[size]}`}
      onClick={() => navigate(`/game/${game.slug}`)}
    >
      {/* Image container */}
      <div className="relative h-full w-full">
        <img 
          src={getImageSrc(game.image)} 
          alt={game.name} 
          className="h-full w-full object-cover"
          loading="lazy"
        />

        {/* Game name overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent p-2 flex flex-col justify-end">
          <h3 className={`text-white font-bold ${size === 'large' ? 'text-sm sm:text-lg' : 'text-xs sm:text-sm'}`}>
            {game.name.length > 15 ? `${game.name.substring(0, 15)}...` : game.name}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
