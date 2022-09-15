import { prisma } from "../repository";
import { Router } from "express";
import AdPrismaModel from '../model/AdPrismaModel';
import AdService from "../services/ad.service";
import AdController from "../controllers/ad.controller";

const route = Router();

const adWithPrisma = new AdPrismaModel(prisma);
const adService = new AdService(adWithPrisma);
const adController = new AdController(adService);

route.get('/:id/discord', (req, res) => adController.getById(req, res));

export default route;