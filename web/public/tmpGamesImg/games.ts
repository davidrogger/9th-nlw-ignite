interface gamesData {
  id: number;
  title: string;
  path: string;
}

const games:gamesData[] = [
  {
    id: 1,
    title: 'League of Legends',
    path: '/tmpGamesImg/game-01.png'
  },
  {
    id: 2,
    title: 'Dota 2',
    path: '/tmpGamesImg/game-02.png'
  },
  {
    id: 3,
    title: 'Counter Strike',
    path: '/tmpGamesImg/game-03.png'
  },
  {
    id: 4,
    title: 'Apex Legends',
    path: '/tmpGamesImg/game-04.png'
  },
  {
    id: 5,
    title: 'Fortnite',
    path: '/tmpGamesImg/game-05.png'
  },
  {
    id: 6,
    title: 'World of WarCraft',
    path: '/tmpGamesImg/game-06.png'
  },
];

export default games;
