import React from 'react';
import { BarChart2, LineChart, Coins } from 'lucide-react';

const TradingPlatformButtons = () => {
  const platforms = [
    {
      name: 'DexTools',
      icon: <BarChart2 className="w-5 h-5" />,
      url: 'https://www.dextools.io/',
      gradient: 'from-blue-400 to-purple-500'
    },
    {
      name: 'DexScreener',
      icon: <LineChart className="w-5 h-5" />,
      url: 'https://dexscreener.com/',
      gradient: 'from-green-400 to-blue-500'
    },
    {
      name: 'CoinGecko',
      icon: <Coins className="w-5 h-5" />,
      url: 'https://www.coingecko.com/',
      gradient: 'from-yellow-400 to-orange-500'
    }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black/80 backdrop-blur-md border-t border-emerald-900 py-4">
      <div className="max-w-2xl mx-auto px-4 flex justify-center gap-4">
        {platforms.map((platform) => (
          <a
            key={platform.name}
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              flex items-center gap-2 px-4 py-2 rounded-lg
              bg-gradient-to-r ${platform.gradient}
              text-black font-medium
              transform transition-all duration-300
              hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/20
            `}
          >
            {platform.icon}
            <span>{platform.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default TradingPlatformButtons;