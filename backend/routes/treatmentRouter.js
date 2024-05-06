import express from 'express';
import {
  createTreatment,
  getAllTreatments,
  getTreatmentById,
  updateTreatment,
  deleteTreatment
} from '../controllers/treatmentController.js';
import { requireSignIn } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Create a new treatment
router.post("/", requireSignIn, createTreatment);

// Get all treatments
router.get("/", requireSignIn, getAllTreatments);

// Get a single treatment by ID
router.get("/:id", requireSignIn, getTreatmentById);

// Update a treatment
router.put("/:id", requireSignIn, updateTreatment);

// Delete a treatment
router.delete("/:id", requireSignIn, deleteTreatment);

export default router;
