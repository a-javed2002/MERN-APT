import animalModel from "../models/animalModel.js";

// Create a new animal
export const createAnimal = async (req, res) => {
  try {
    const { name, type, diseases } = req.body;
    const animal = new animalModel({ name, type, diseases });
    const savedAnimal = await animal.save();
    res.status(201).json(savedAnimal);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all animals
export const getAllAnimals = async (req, res) => {
  try {
    const animals = await animalModel.find();
    res.status(200).json(animals);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single animal by ID
export const getAnimalById = async (req, res) => {
  try {
    const animal = await animalModel.findById(req.params.id);
    if (!animal) {
      return res.status(404).json({ message: "animalModel not found" });
    }
    res.status(200).json(animal);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update an animal
export const updateAnimal = async (req, res) => {
  try {
    const { name, type, diseases } = req.body;
    const animal = await animalModel.findById(req.params.id);
    if (!animal) {
      return res.status(404).json({ message: "animalModel not found" });
    }
    animal.name = name;
    animal.type = type;
    animal.diseases = diseases;
    const updatedAnimal = await animal.save();
    res.status(200).json(updatedAnimal);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete an animal
export const deleteAnimal = async (req, res) => {
  try {
    const animal = await animalModel.findById(req.params.id);
    if (!animal) {
      return res.status(404).json({ message: "animalModel not found" });
    }
    await animal.remove();
    res.status(200).json({ message: "animalModel deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
