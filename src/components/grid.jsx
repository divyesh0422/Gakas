import React, { useRef, useState, useMemo } from 'react';
import { FaDownload, FaArrowDown, FaArrowUp, FaStar, FaRupeeSign } from 'react-icons/fa';

const GameCard = ({ game, index }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(true);
  };

  return (
    <div 
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Game Image */}
      <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 relative overflow-hidden">
        {!imageError ? (
          <>
            <img 
              src={game.imageUrl} 
              alt={game.title} 
              className={`h-full w-full object-cover transition-opacity duration-300 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={handleImageLoad}
              onError={handleImageError}
            />
            {!imageLoaded && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="animate-pulse bg-gray-300 h-full w-full"></div>
              </div>
            )}
          </>
        ) : (
          <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300">
            <div className="text-center">
              <div className="text-4xl mb-2">🎮</div>
              <div className="text-gray-600 font-medium text-sm">{game.title}</div>
            </div>
          </div>
        )}
        
        {/* Popular Badge */}
        {game.downloads.includes('m') && (
          <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center">
            <FaStar className="mr-1" size={8} />
            Popular
          </div>
        )}
        
        {/* Bonus Badge */}
        <div className="absolute top-3 right-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-2 py-1 rounded-full text-xs font-bold">
          ₹{game.bonus}
        </div>
      </div>

      {/* Game Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {game.title}
        </h3>
        
        {/* Game Stats */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-600">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
              <span className="text-blue-600 text-sm">⬇️</span>
            </div>
            <span className="font-medium">{game.downloads} Downloads</span>
          </div>
          
          <div className="flex items-center text-green-600">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
              <span className="text-green-600 text-sm">🎁</span>
            </div>
            <span className="font-semibold">₹{game.bonus} Welcome Bonus</span>
          </div>
          
          <div className="flex items-center text-gray-700">
            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-3">
              <FaRupeeSign className="text-gray-600" size={12} />
            </div>
            <span>Min. Withdrawal: ₹{game.minWithdrawal}</span>
          </div>
        </div>

        {/* Download Button */}
        <a 
          href={game.downloadLink} 
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-center py-3 px-4 rounded-xl flex items-center justify-center transition-all duration-300 group/btn shadow-lg hover:shadow-xl font-semibold"
        >
          <FaDownload className="mr-2 group-hover/btn:scale-110 transition-transform" />
          Download Now
          <span className="ml-2 text-blue-200 group-hover/btn:translate-x-1 transition-transform">→</span>
        </a>
      </div>
    </div>
  );
};

const GameListing = () => {
  // Game data with enhanced information
  const allGames = useMemo(() => [
    {
      id: 1,
      title: "Rummy Legend",
      downloads: "1.2m+",
      bonus: 79,
      minWithdrawal: 150,
      imageUrl: "src/assets/1.webp",
      downloadLink: "src/assets/1.webp",
      rating: 4.5
    },
    {
      id: 2,
      title: "Teen Patti Line",
      downloads: "922k+",
      bonus: 91,
      minWithdrawal: 200,
      imageUrl: "public/images/2.webp",
      downloadLink: "https://invite.aagameclub.com/?code=OO4J7CS",
      rating: 4.3
    },
    {
      id: 3,
      title: "Teen Patti Field",
      downloads: "834k+",
      bonus: 55,
      minWithdrawal: 200,
      imageUrl: "public/images/3.webp",
      downloadLink: "https://invite.ez777c.com/?code=UAU5NFS",
      rating: 4.2
    },
    {
      id: 4,
      title: "Teen Patti Regal",
      downloads: "711k+",
      bonus: 91,
      minWithdrawal: 100,
      imageUrl: "public/images/4.webp",
      downloadLink: "https://g.k9.game/?invite_code=0004a266",
      rating: 4.4
    },
    {
      id: 5,
      title: "Rummy Drive",
      downloads: "1.3m+",
      bonus: 65,
      minWithdrawal: 400,
      imageUrl: "public/images/5.webp",
      downloadLink: "https://example.com/download/5",
      rating: 4.6
    },
    {
      id: 6,
      title: "Rummy Palace",
      downloads: "950k+",
      bonus: 85,
      minWithdrawal: 250,
      imageUrl: "public/images/6.webp",
      downloadLink: "https://d.seaflygames.live/s/8000000/1771548/31411a39f",
      rating: 4.7
    },
    {
      id: 7,
      title: "Teen Patti Gold",
      downloads: "1.1m+",
      bonus: 99,
      minWithdrawal: 300,
      imageUrl: "public/images/7.webp",
      downloadLink: "https://invite.ez777c.com/?code=UAU5NFS",
      rating: 4.8
    },
    {
      id: 8,
      title: "Rummy Circle Pro",
      downloads: "890k+",
      bonus: 75,
      minWithdrawal: 350,
      imageUrl: "public/images/jaiho.webp",
      downloadLink: "https://invite.ez777c.com/?code=UAU5NFS",
      rating: 4.5
    },
    {
      id: 9,
      title: "Teen Patti Diamond",
      downloads: "650k+",
      bonus: 110,
      minWithdrawal: 500,
      imageUrl: "public/images/9.webp",
      downloadLink: "https://invite.p77.game/?code=JFDR6LS",
      rating: 4.4
    },
    {
      id: 10,
      title: "Rummy Stars",
      downloads: "720k+",
      bonus: 60,
      minWithdrawal: 200,
      imageUrl: "public/images/91.webp",
      downloadLink: "https://invite.slotinr.game/?code=DZZI7IZ",
      rating: 4.3
    },
    {
      id: 11,
      title: "Teen Patti Winner",
      downloads: "980k+",
      bonus: 120,
      minWithdrawal: 400,
      imageUrl: "public/images/img8.jpeg",
      downloadLink: "https://cdn8.tp3win.com/cdn/download/sagar_new_v2/index.html?i=16306849&c=Tp3winpoker363GG01&e=pro&s=a",
      rating: 4.7
    },
    {
      id: 12,
      title: "Rummy Jayho",
      downloads: "520k+",
      bonus: 80,
      minWithdrawal: 100,
      imageUrl: "public/images/img9.jpeg",
      downloadLink: "https://jaiho77702.com/?code=6WY4W5GHHUS&t=1740925545",
      rating: 4.2
    },
    {
      id: 13,
      title: "Rummy Empire",
      downloads: "620k+",
      bonus: 80,
      minWithdrawal: 100,
      imageUrl: "public/images/img10.jpeg",
      downloadLink: "https://acc.dream77.info/Dream77/share/index.html?ic=AAWWBQ58&ts=1746005700",
      rating: 4.1
    },
    {
      id: 14,
      title: "Rummy Master",
      downloads: "580k+",
      bonus: 80,
      minWithdrawal: 200,
      imageUrl: "public/images/img11.jpeg",
      downloadLink: "https://invite.slotinr.game/?code=DZZI7IZ",
      rating: 4.3
    },
    {
      id: 15,
      title: "Teen Patti Pro",
      downloads: "690k+",
      bonus: 80,
      minWithdrawal: 300,
      imageUrl: "public/images/jaiho.webp",
      downloadLink: "https://ap.game/?inviteCode=GFK1AJPC",
      rating: 4.5
    },
    {
      id: 16,
      title: "Rummy King",
      downloads: "810k+",
      bonus: 80,
      minWithdrawal: 300,
      imageUrl: "public/images/msw.webp",
      downloadLink: "https://g.k9.game/?invite_code=0004a266",
      rating: 4.6
    },
    {
      id: 17,
      title: "RR9 Game",
      downloads: "430k+",
      bonus: 500,
      minWithdrawal: 300,
      imageUrl: "public/images/new.webp",
      downloadLink: "https://invite.rr9.game/?code=LHSI5IS",
      rating: 4.0
    },
    {
      id: 18,
      title: "Dreaming55",
      downloads: "380k+",
      bonus: 80,
      minWithdrawal: 300,
      imageUrl: "public/images/new.webp",
      downloadLink: "https://share.dreaming55.com/Dream55/share/index.html?ic=AD0L46D4&ts=1759115520",
      rating: 4.2
    }
  ], []);

  const [visibleGames, setVisibleGames] = useState(8);
  const moreGamesRef = useRef(null);

  const loadMoreGames = () => {
    const newVisibleCount = Math.min(visibleGames + 8, allGames.length);
    setVisibleGames(newVisibleCount);
    
    setTimeout(() => {
      moreGamesRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }, 150);
  };

  const showLessGames = () => {
    setVisibleGames(8);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const displayedGames = allGames.slice(0, visibleGames);

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-blue-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Popular <span className="text-blue-600">Card Games</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the most exciting rummy and teen patti games with amazing bonuses and quick withdrawals
          </p>
        </div>
        
        {/* Games Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {displayedGames.map((game, index) => (
            <GameCard key={game.id} game={game} index={index} />
          ))}
        </div>

        {/* Load More / Show Less Button */}
        <div className="mt-16 text-center">
          {visibleGames < allGames.length ? (
            <button
              onClick={loadMoreGames}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-12 rounded-full inline-flex items-center transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <FaArrowDown className="mr-3" />
              Load More Games ({allGames.length - visibleGames} remaining)
            </button>
          ) : (
            <button
              onClick={showLessGames}
              className="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white font-semibold py-4 px-12 rounded-full inline-flex items-center transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <FaArrowUp className="mr-3" />
              Show Less Games
            </button>
          )}
        </div>

        {/* Games Counter */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 font-medium">
            Showing {displayedGames.length} of {allGames.length} games
          </p>
        </div>

        {/* Scroll reference */}
        <div ref={moreGamesRef} className="h-2"></div>
      </div>
    </div>
  );
};

export default GameListing;