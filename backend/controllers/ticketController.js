import TicketModel from "../models/ticketModel.js";

// Create a new ticket
export const createTicket = async (req, res) => {
  try {
    const { age_group, price } = req.body;
    const ticket = new TicketModel({ age_group, price });
    const savedTicket = await ticket.save();
    res.status(201).json(savedTicket);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all tickets
export const getAllTickets = async (req, res) => {
  try {
    const tickets = await TicketModel.find();
    res.status(200).json(tickets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single ticket by ID
export const getTicketById = async (req, res) => {
  try {
    const ticket = await TicketModel.findById(req.params.id);
    if (!ticket) {
      return res.status(404).json({ message: "Ticket not found" });
    }
    res.status(200).json(ticket);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a ticket
export const updateTicket = async (req, res) => {
  try {
    const { age_group, price } = req.body;
    const ticket = await TicketModel.findById(req.params.id);
    if (!ticket) {
      return res.status(404).json({ message: "Ticket not found" });
    }
    ticket.age_group = age_group;
    ticket.price = price;
    const updatedTicket = await ticket.save();
    res.status(200).json(updatedTicket);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a ticket
export const deleteTicket = async (req, res) => {
  try {
    const ticket = await TicketModel.findById(req.params.id);
    if (!ticket) {
      return res.status(404).json({ message: "Ticket not found" });
    }
    await ticket.remove();
    res.status(200).json({ message: "Ticket deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
