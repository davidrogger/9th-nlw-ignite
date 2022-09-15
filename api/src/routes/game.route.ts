import { prisma } from "../repository";
import { Router } from "express";
import GameController from "../controllers/game.controller";
import GamePrismaModel from "../model/GamePrismaModel";
import GameService from "../services/game.service";
import AdPrismaModel from "../model/AdPrismaModel";
import AdService from "../services/ad.service";
import AdController from "../controllers/ad.controller";

const route = Router();

const gameWithPrisma = new GamePrismaModel(prisma);
const gameService = new GameService(gameWithPrisma);
const gameController = new GameController(gameService);

const adWithPrisma = new AdPrismaModel(prisma);
const adService = new AdService(adWithPrisma);
const adController = new AdController(adService);


route.get('/:id/ads', (req, res) => adController.getById(req, res));
route.post('/:id/ads', (req, res) => adController.create(req, res));
route.get('/', (req, res) => gameController.getAll(req, res));

export default route;