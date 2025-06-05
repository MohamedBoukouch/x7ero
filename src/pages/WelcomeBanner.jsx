const WelcomeBanner = () => {
    return (
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white rounded-xl p-6 mb-8 shadow-lg">
        <h2 className="text-3xl font-bold mb-3">Bienvenue sur x7ero</h2>
        <p className="text-lg mb-5">Découvrez des milliers de jeux gratuits directement dans votre navigateur.</p>
        
        <div className="flex flex-wrap gap-3">
          <div className="flex items-center bg-white/20 px-3 py-1 rounded-full">
            <span className="text-sm font-medium">5000+ jeux</span>
          </div>
          <div className="flex items-center bg-white/20 px-3 py-1 rounded-full">
            <span className="text-sm font-medium">Aucune installation</span>
          </div>
          <div className="flex items-center bg-white/20 px-3 py-1 rounded-full">
            <span className="text-sm font-medium">Jeune porteur</span>
          </div>
          <div className="flex items-center bg-white/20 px-3 py-1 rounded-full">
            <span className="text-sm font-medium">Multiplieur</span>
          </div>
        </div>
      </div>
    );
  };
  
  export default WelcomeBanner;