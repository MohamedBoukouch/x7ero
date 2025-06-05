import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import WelcomeBanner from './pages/WelcomeBanner';
import GameSection from './components/GameSection';
import { FaSearch } from 'react-icons/fa';
import { games } from './gamesData';

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const recommendedGames = games.filter(game => game.type === 'recommande');
  const newGames = games.filter(game => game.type === 'new');
  const originalsGames = games.filter(game => game.type === 'Originals');

  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <Header onMenuClick={() => setSidebarOpen(true)} />
      
      <div className="flex flex-1 overflow-hidden">
        <Sidebar 
          isOpen={sidebarOpen} 
          onClose={() => setSidebarOpen(false)}
        />
        
        <main className={`flex-1 overflow-y-auto p-4 transition-all duration-300 ${
          sidebarOpen ? 'ml-0' : 'md:ml-16'
        }`}>
          
          <WelcomeBanner />
          <GameSection title="RECOMMANDÉS" games={recommendedGames} type="recommande" />
          <GameSection title="NOUVEAUX JEUX" games={newGames} type="new" />
          <GameSection title="ORIGIALS" games={originalsGames} type="Originals" />
          
        </main>    
      </div>
    </div>
  );
};

export default App;