import express from 'express';
import {
  createTicket,
  getAllTickets,
  getTicketById,
  updateTicket,
  deleteTicket
} from '../controllers/ticketController.js';
import { requireSignIn } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Create a new ticket
router.post("/", requireSignIn, createTicket);

// Get all tickets
router.get("/", requireSignIn, getAllTickets);

// Get a single ticket by ID
router.get("/:id", requireSignIn, getTicketById);

// Update a ticket
router.put("/:id", requireSignIn, updateTicket);

// Delete a ticket
router.delete("/:id", requireSignIn, deleteTicket);

export default router;
