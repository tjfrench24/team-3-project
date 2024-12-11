const WorkoutCalendarEntry = require('../models/WorkoutCalendarEntry');

// Get all workout calendar entries
exports.getAllEntries = async (req, res) => {
  try {
    const entries = await WorkoutCalendarEntry.find();
    res.status(200).json(entries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single workout calendar entry by ID
exports.getEntryById = async (req, res) => {
  try {
    const entry = await WorkoutCalendarEntry.findById(req.params.id);
    if (!entry) {
      return res.status(404).json({ message: 'Entry not found' });
    }
    res.status(200).json(entry);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new workout calendar entry
exports.createEntry = async (req, res) => {
  const entry = new WorkoutCalendarEntry(req.body);
  try {
    const newEntry = await entry.save();
    res.status(201).json(newEntry);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update an existing workout calendar entry
exports.updateEntry = async (req, res) => {
  try {
    const updatedEntry = await WorkoutCalendarEntry.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedEntry) {
      return res.status(404).json({ message: 'Entry not found' });
    }
    res.status(200).json(updatedEntry);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a workout calendar entry
exports.deleteEntry = async (req, res) => {
  try {
    const deletedEntry = await WorkoutCalendarEntry.findByIdAndDelete(req.params.id);
    if (!deletedEntry) {
      return res.status(404).json({ message: 'Entry not found' });
    }
    res.status(200).json({ message: 'Entry deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};