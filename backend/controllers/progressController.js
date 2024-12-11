import Progress from '../models/progressModel.js';

export const getProgress = async (req, res) => {
  try {
    const progress = await Progress.findAll();
    res.json(progress);
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};

export const addProgress = async (req, res) => {
  try {
    const newProgress = await Progress.create(req.body);
    res.status(201).json(newProgress);
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};
