import express from 'express';
import { createAnimal, getAllAnimals,getAnimalById,updateAnimal,deleteAnimal} from "../controllers/animalController.js";
import { requireSignIn } from '../middlewares/authMiddleware.js';
// router object
const router = express.Router();

//routing
router.post("/", createAnimal);
router.get("/", getAllAnimals);
router.get("/:id", getAnimalById);
router.put("/:id", updateAnimal);
router.delete("/:id", deleteAnimal);

export default router;