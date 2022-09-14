import { PrismaClient } from "@prisma/client";
import { Router } from "express";
import GameController from "../controllers/game.controller";
import GamePrismaModel from "../model/PrismaModel";
import GameService from "../services/game.service";

const route = Router();

const prisma = new PrismaClient();
const gameWithPrisma = new GamePrismaModel(prisma);
const gameService = new GameService(gameWithPrisma);
const gameController = new GameController(gameService);

route.get('/', (req, res) => gameController.getAll(req, res));

export default route;