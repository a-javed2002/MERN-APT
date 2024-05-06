import TreatmentModel from "../models/treatmentModel.js";

// Create a new treatment
export const createTreatment = async (req, res) => {
    try {
        const { description, animal_id, vet_id } = req.body;
        const treatment = new TreatmentModel({ description, animal_id, vet_id });
        const savedTreatment = await treatment.save();
        res.status(201).json(savedTreatment);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all treatments
export const getAllTreatments = async (req, res) => {
    try {
        const treatments = await TreatmentModel.find();
        res.status(200).json(treatments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single treatment by ID
export const getTreatmentById = async (req, res) => {
    try {
        const treatment = await TreatmentModel.findById(req.params.id);
        if (!treatment) {
            return res.status(404).json({ message: "Treatment not found" });
        }
        res.status(200).json(treatment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a treatment
export const updateTreatment = async (req, res) => {
    try {
        const { description, animal_id, vet_id } = req.body;
        const treatment = await TreatmentModel.findById(req.params.id);
        if (!treatment) {
            return res.status(404).json({ message: "Treatment not found" });
        }
        treatment.description = description;
        treatment.animal_id = animal_id;
        treatment.vet_id = vet_id;
        const updatedTreatment = await treatment.save();
        res.status(200).json(updatedTreatment);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a treatment
export const deleteTreatment = async (req, res) => {
    try {
        const treatment = await TreatmentModel.findById(req.params.id);
        if (!treatment) {
            return res.status(404).json({ message: "Treatment not found" });
        }
        await treatment.remove();
        res.status(200).json({ message: "Treatment deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
