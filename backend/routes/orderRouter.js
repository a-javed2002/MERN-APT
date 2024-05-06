import express from 'express';
import {
    createOrder,
    getAllOrders,
    getOrderById,
    updateOrder,
    deleteOrder
} from '../controllers/orderController.js';
import { requireSignIn } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Create a new order
router.post("/", requireSignIn, createOrder);

// Get all orders
router.get("/", requireSignIn, getAllOrders);

// Get a single order by ID
router.get("/:id", requireSignIn, getOrderById);

// Update an order
router.put("/:id", requireSignIn, updateOrder);

// Delete an order
router.delete("/:id", requireSignIn, deleteOrder);

export default router;