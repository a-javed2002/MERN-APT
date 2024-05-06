import animalModel from "../models/animalModel.js";
import orderModel from "../models/ordersModel.js";
import userModel from "../models/userModel.js";
import ticketModel from "../models/ticketModel.js";
import treatmentModel from "../models/treatmentModel.js";

export const getCounts = async () => {
  try {
    const animalCount = await animalModel.countDocuments();
    const orderCount = await orderModel.countDocuments();
    const userCount = await userModel.countDocuments();
    const ticketCount = await ticketModel.countDocuments();
    const treatmentCount = await treatmentModel.countDocuments();
    return { animalCount, orderCount,userCount,ticketCount,treatmentCount };
  } catch (error) {
    throw new Error(`Error fetching counts: ${error.message}`);
  }
};