import React, { useRef, useState } from 'react';
import { FaDownload, FaArrowDown } from 'react-icons/fa';

const GameCard = ({ game }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="h-48 bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
        {game.imageUrl ? (
          <img 
            src={game.imageUrl} 
            alt={game.title} 
            className="h-full w-full object-cover"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
        ) : null}
        <div 
          className="text-gray-500 text-lg font-medium flex items-center justify-center h-full w-full bg-gray-100"
          style={{ display: game.imageUrl ? 'none' : 'flex' }}
        >
          {game.title} Image
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{game.title}</h3>
        
        <div className="flex items-center text-gray-600 mb-1">
          <span className="mr-2">⬇️</span>
          <span>{game.downloads} Downloads</span>
        </div>
        
        <div className="flex items-center text-green-600 font-medium mb-1">
          <span className="mr-2">🎁</span>
          <span>₹{game.bonus} Bonus</span>
        </div>
        
        <div className="flex items-center text-gray-700 mb-4">
          <span className="mr-2">💰</span>
          <span>Min. Withdrawal ₹{game.minWithdrawal}/-</span>
        </div>

        <a 
          href={game.downloadLink} 
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg flex items-center justify-center transition-colors duration-300"
        >
          <FaDownload className="mr-2" />
          Download Now
        </a>
      </div>
    </div>
  );
};

const GameListing = () => {
  // Fixed game data with proper image paths and download links
  const allGames = [
    {
      id: 1,
      title: "Rummy Legend",
      downloads: "302k+",
      bonus: 79,
      minWithdrawal: 150,
      imageUrl: "/images/1.webp",
      downloadLink: "https://invite.bfgame9.com/?code=JP0SDPZ"
    },
    {
      id: 2,
      title: "Teen Patti Line",
      downloads: "922k+",
      bonus: 91,
      minWithdrawal: 200,
      imageUrl: "/images/2.webp",
      downloadLink: "https://invite.aagameclub.com/?code=OO4J7CS"
    },
    {
      id: 3,
      title: "Teen Patti Field",
      downloads: "234k+",
      bonus: 55,
      minWithdrawal: 200,
      imageUrl: "/images/3.webp",
      downloadLink: "https://invite.ez777c.com/?code=UAU5NFS"
    },
    {
      id: 4,
      title: "Teen Patti Regal",
      downloads: "211k+",
      bonus: 91,
      minWithdrawal: 100,
      imageUrl: "/images/4.webp",
      downloadLink: "https://g.k9.game/?invite_code=0004a266"
    },
    {
      id: 5,
      title: "Rummy Drive",
      downloads: "1.3m+",
      bonus: 65,
      minWithdrawal: 400,
      imageUrl: "/images/5.webp",
      downloadLink: "https://example.com/download/5"
    },
    {
      id: 6,
      title: "Rummy Palace",
      downloads: "450k+",
      bonus: 85,
      minWithdrawal: 250,
      imageUrl: "/images/6.webp",
      downloadLink: "https://d.seaflygames.live/s/8000000/1771548/31411a39f"
    },
    {
      id: 7,
      title: "Teen Patti Gold",
      downloads: "1.1m+",
      bonus: 99,
      minWithdrawal: 300,
      imageUrl: "/images/7.webp",
      downloadLink: "https://invite.ez777c.com/?code=UAU5NFS"
    },
    {
      id: 8,
      title: "Rummy Circle Pro",
      downloads: "890k+",
      bonus: 75,
      minWithdrawal: 350,
      imageUrl: "/images/8.webp",
      downloadLink: "https://invite.ez777c.com/?code=UAU5NFS"
    },
    {
      id: 9,
      title: "Teen Patti Diamond",
      downloads: "650k+",
      bonus: 110,
      minWithdrawal: 500,
      imageUrl: "/images/9.webp",
      downloadLink: "https://invite.p77.game/?code=JFDR6LS"
    },
    {
      id: 10,
      title: "Rummy Stars",
      downloads: "320k+",
      bonus: 60,
      minWithdrawal: 200,
      imageUrl: "/images/10.webp",
      downloadLink: "https://invite.slotinr.game/?code=DZZI7IZ"
    },
    {
      id: 11,
      title: "Teen Patti Winner",
      downloads: "780k+",
      bonus: 120,
      minWithdrawal: 400,
      imageUrl: "/images/11.webp",
      downloadLink: "https://cdn8.tp3win.com/cdn/download/sagar_new_v2/index.html?i=16306849&c=Tp3winpoker363GG01&e=pro&s=a"
    },
    {
      id: 12,
      title: "Rummy Jayho",
      downloads: "520k+",
      bonus: 80,
      minWithdrawal: 100,
      imageUrl: "/images/12.webp",
      downloadLink: "https://jaiho77702.com/?code=6WY4W5GHHUS&t=1740925545"
    },
    {
      id: 13,
      title: "Rummy Empire",
      downloads: "520k+",
      bonus: 80,
      minWithdrawal: 100,
      imageUrl: "/images/13.webp",
      downloadLink: "https://acc.dream77.info/Dream77/share/index.html?ic=AAWWBQ58&ts=1746005700"
    },
    {
      id: 14,
      title: "Rummy Master",
      downloads: "520k+",
      bonus: 80,
      minWithdrawal: 200,
      imageUrl: "/images/14.webp",
      downloadLink: "https://invite.slotinr.game/?code=DZZI7IZ"
    },
    {
      id: 15,
      title: "Teen Patti Pro",
      downloads: "520k+",
      bonus: 80,
      minWithdrawal: 300,
      imageUrl: "/images/15.webp",
      downloadLink: "https://ap.game/?inviteCode=GFK1AJPC"
    },
    {
      id: 16,
      title: "Rummy King",
      downloads: "520k+",
      bonus: 80,
      minWithdrawal: 300,
      imageUrl: "/images/16.webp",
      downloadLink: "https://g.k9.game/?invite_code=0004a266"
    },
    {
      id: 17,
      title: "RR9 Game",
      downloads: "520k+",
      bonus: 500,
      minWithdrawal: 300,
      imageUrl: "/images/17.webp",
      downloadLink: "https://invite.rr9.game/?code=LHSI5IS"
    },
    {
      id: 18,
      title: "Dreaming55",
      downloads: "520k+",
      bonus: 80,
      minWithdrawal: 300,
      imageUrl: "/images/18.webp",
      downloadLink: "https://share.dreaming55.com/Dream55/share/index.html?ic=AD0L46D4&ts=1759115520"
    }
  ];

  const [visibleGames, setVisibleGames] = useState(8);
  const moreGamesRef = useRef(null);

  const loadMoreGames = () => {
    const newVisibleCount = Math.min(visibleGames + 8, allGames.length);
    setVisibleGames(newVisibleCount);
    
    // Smooth scroll to the newly loaded games
    setTimeout(() => {
      moreGamesRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
      });
    }, 100);
  };

  const showLessGames = () => {
    setVisibleGames(8);
    // Scroll to top when showing less games
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Popular Card Games
        </h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {allGames.slice(0, visibleGames).map(game => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>

        <div className="mt-12 text-center">
          {visibleGames < allGames.length ? (
            <button
              onClick={loadMoreGames}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full inline-flex items-center transition-colors duration-300"
            >
              View More Games
              <FaArrowDown className="ml-2" />
            </button>
          ) : (
            <button
              onClick={showLessGames}
              className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-3 px-8 rounded-full inline-flex items-center transition-colors duration-300"
            >
              Show Less Games
            </button>
          )}
        </div>

        {/* This is the reference point for scrolling */}
        <div ref={moreGamesRef} className="h-1"></div>
      </div>
    </div>
  );
};

export default GameListing;