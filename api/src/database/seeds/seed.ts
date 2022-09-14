import { Prisma, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#create

async function main() {
  let games: Prisma.GameCreateInput[] = [
    {
      title: 'Lost Ark',
      bannerUrl: 'https://static-cdn.jtvnw.net/ttv-boxart/490100-188x250.jpg'
    },
    {
      title: 'Black Desert',
      bannerUrl: 'https://static-cdn.jtvnw.net/ttv-boxart/386821_IGDB-188x250.jpg'
    },
    {
      title: 'New World',
      bannerUrl: 'https://static-cdn.jtvnw.net/ttv-boxart/493597_IGDB-188x250.jpg'
    },
    {
      title: 'Path of Exile',
      bannerUrl: 'https://static-cdn.jtvnw.net/ttv-boxart/29307_IGDB-188x250.jpg'
    },
    {
      title: 'Destiny',
      bannerUrl: 'https://static-cdn.jtvnw.net/ttv-boxart/497057-188x250.jpg'
    },
    {
      title: 'Guild Wars',
      bannerUrl: 'https://static-cdn.jtvnw.net/ttv-boxart/19357_IGDB-188x250.jpg'
    },
  ];

  await Promise.all(
    games.map(async (game) => {
      await prisma.game.create({
        data: game,
      })
    })
  )
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  })