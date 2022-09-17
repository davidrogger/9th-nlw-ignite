import { useEffect, useState } from "react";
import axios from 'axios';

import { IGamesData } from '../interfaces/IGamesData';

function GamesDisplay() {
  const [games, setGames] = useState<IGamesData[]>([]);

  useEffect(() => {
    async function getGames() {
      const apiGames = await axios.get('http://localhost:3333/games');
      setGames(apiGames.data);
    }

    getGames();

  }, []);

  return (
    <div className="grid grid-cols-6 gap-6 mt-16">
        {games.map((game) => {
          return (
            <a key={game.id} href='' className="relative rounded-lg overflow-hidden">
              <img src={game.bannerUrl} />
              <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
                <strong className="font-bold text-white block mt-1">{game.title}</strong>
                <span className="text-zinc-300 text-sm block">{game._count.ads} anúncio{game._count.ads > 1 ? 's' : ''}</span>
              </div>
            </a>
          )
        })}
      </div>
  );
}

export default GamesDisplay;
