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
          />
        ) : (
          <div className="text-gray-500 text-lg font-medium">
            {game.title} Image
          </div>
        )}
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
          className=" w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg flex items-center justify-center transition-colors duration-300"
        >
          <FaDownload className="mr-2" />
          Download Now
        </a>
      </div>
    </div>
  );
};

const GameListing = () => {
  // Sample game data - first 8 shown initially
  const allGames = [
    {
      id: 1,
      title: "Rummy Legend",
      downloads: "302k+",
      bonus: 79,
      minWithdrawal: 150,
      imageUrl: "./public/images/1.webp",
      downloadLink: "./https://invite.bfgame9.com/?code=JP0SDPZ"
    },
    {
      id: 2,
      title: "Teen Patti Line",
      downloads: "922k+",
      bonus: 91,
      minWithdrawal: 200,
      imageUrl: "src/assets/2.webp",
      downloadLink: "./https://invite.aagameclub.com/?code=OO4J7CS"
    },
    {
      id: 3,
      title: "Teen Patti Field",
      downloads: "234k+",
      bonus: 55,
      minWithdrawal: 200,
      imageUrl: "src/assets/3.webp",
      downloadLink: "./https://invite.ez777c.com/?code=UAU5NFS"
    },
    {
      id: 4,
      title: "Teen Patti Regal",
      downloads: "211k+",
      bonus: 91,
      minWithdrawal: 100,
      imageUrl: "src/assets/4.webp",
      downloadLink: "./https://g.k9.game/?invite_code=0004a266"
    },
    {
      id: 5,
      title: "Rummy Drive",
      downloads: "1.3m+",
      bonus: 65,
      minWithdrawal: 400,
      imageUrl: "src/assets/5.webp",
      downloadLink: "./public/images/1.webp"
    },
    {
      id: 6,
      title: "Rummy Palace",
      downloads: "450k+",
      bonus: 85,
      minWithdrawal: 250,
      imageUrl: "src/assets/6.webp",
      downloadLink: "https://d.seaflygames.live/s/8000000/1771548/31411a39f"
    },
    {
      id: 7,
      title: "Teen Patti Gold",
      downloads: "1.1m+",
      bonus: 99,
      minWithdrawal: 300,
      imageUrl: "src/assets/7.webp",
      downloadLink: "https://invite.ez777c.com/?code=UAU5NFS"
    },
    {
      id: 8,
      title: "Rummy Circle Pro",
      downloads: "890k+",
      bonus: 75,
      minWithdrawal: 350,
      imageUrl: "src/assets/91.webp",
      downloadLink: "https://invite.ez777c.com/?code=UAU5NFS"
    },
    {
      id: 9,
      title: "Teen Patti Diamond",
      downloads: "650k+",
      bonus: 110,
      minWithdrawal: 500,
      imageUrl: "src/assets/9.webp",
      downloadLink: "https://invite.p77.game/?code=JFDR6LS"
    },
    {
      id: 10,
      title: "Rummy Stars",
      downloads: "320k+",
      bonus: 60,
      minWithdrawal: 200,
      imageUrl: "src/assets/10.webp",
      downloadLink: "https://invite.slotinr.game/?code=DZZI7IZ"
    },
    {
      id: 11,
      title: "Teen Patti Winner",
      downloads: "780k+",
      bonus: 120,
      minWithdrawal: 400,
      imageUrl: "src/assets/img9.jpeg",
      downloadLink: "https://cdn8.tp3win.com/cdn/download/sagar_new_v2/index.html?i=16306849&c=Tp3winpoker363GG01&e=pro&s=a"
    },
    {
      id: 12,
      title: "Rummy Jayho",
      downloads: "520k+",
      bonus: 80,
      minWithdrawal: 100,
      imageUrl: "src/assets/img12.jpeg",
      downloadLink: "https://jaiho77702.com/?code=6WY4W5GHHUS&t=1740925545"
    },
    {
      id: 13,
      title: "Rummy Empire",
      downloads: "520k+",
      bonus: 80,
      minWithdrawal: 100,
      imageUrl: "src/assets/jaiho.webp",
      downloadLink: "https://acc.dream77.info/Dream77/share/index.html?ic=AAWWBQ58&ts=1746005700"
    },
    {
      id: 14,
      title: "Rummy Empire",
      downloads: "520k+",
      bonus: 80,
      minWithdrawal: 200,
      imageUrl: "src/assets/lcg.webp",
      downloadLink: "https://invite.slotinr.game/?code=DZZI7IZ"
    },
    {
      id: 15,
      title: "Rummy Empire",
      downloads: "520k+",
      bonus: 80,
      minWithdrawal: 300,
      imageUrl: "src/assets/img11.jpeg",
      downloadLink: "https://ap.game/?inviteCode=GFK1AJPC"
    },
    {
      id: 16,
      title: "Rummy Empire",
      downloads: "520k+",
      bonus: 80,
      minWithdrawal: 300,
      imageUrl: "src/assets/K-3.png",
      downloadLink: "https://g.k9.game/?invite_code=0004a266"
    },
    {
      id: 17,
      title: "rr9.game",
      downloads: "520k+",
      bonus: 500,
      minWithdrawal: 300,
      imageUrl: "src/assets/K-3.png",
      downloadLink: "https://invite.rr9.game/?code=LHSI5IS"
    },
    { id: 18,
      title: "dreaming55",
      downloads: "520k+",
      bonus: 80,
      minWithdrawal: 300,
      imageUrl: "src/assets/K-3.png",
      downloadLink: "https://share.dreaming55.com/Dream55/share/index.html?ic=AD0L46D4&ts=1759115520"
    }

  ];

  const [visibleGames, setVisibleGames] = useState(8);
  const moreGamesRef = useRef(null);

  const loadMoreGames = () => {
    setVisibleGames(allGames.length);
    
    // Smooth scroll to the newly loaded games
    setTimeout(() => {
      moreGamesRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
      });
    }, 100);
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

        {visibleGames < allGames.length && (
          <div className="mt-12 text-center">
            <button
              onClick={loadMoreGames}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full inline-flex items-center transition-colors duration-300"
            >
              View More Games
              <FaArrowDown className="ml-2" />
            </button>
          </div>
        )}

        {/* This is the reference point for scrolling */}
        <div ref={moreGamesRef} className="h-1"></div>
      </div>
    </div>
  );
};

export default GameListing;