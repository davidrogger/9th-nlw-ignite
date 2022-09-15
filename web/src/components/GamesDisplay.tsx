import games from "../../public/tmpGamesImg/games";

function GamesDisplay() {
  return (
    <div className="grid grid-cols-6 gap-6 mt-16">
        {games.map((game) => {
          return (
            <a href='' className="relative rounded-lg overflow-hidden">
              <img src={game.path} />
              <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
                <strong className="font-bold text-white block mt-1">{game.title}</strong>
                <span className="text-zinc-300 text-sm block">4 anúncios</span>
              </div>
            </a>
          )
        })}
      </div>
  );
}

export default GamesDisplay;
