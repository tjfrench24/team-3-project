// import the Cardio model 
const Cardio = require('../models/Cardio');

// function to log a new cardio session 
const logCardio = async (req, res) => {
  const {cardio, duration, distance} = req.body;
  // create a new cardio session in the database
  const newCardio = await Cardio.create({cardio, duration, distance});
  // 201 indicates success in creating a new cardio session 
  res.status(201).json(newCardio);
};

// function for deleting a cardio session by id 
const deleteCardio = async (req, res) => {
  const {id} = req.params;  
  // delete the cardio by ID
  const deletedCardio = await Cardio.destroy({where: {id}});
  // show message if the cardio session doesn't exist 
  if (!deletedCardio) return res.status(404).json({message: 'Cardio session does not exist'});
  // message to show cardio session was deleted (200 used because message is included, something is retrieved)
  res.status(200).json({message: 'Cardio session deleted successfully'});
};

// function to get all cardio sessions from the database
const getAllCardio = async (req, res) => {
  const cardioSessions = await Cardio.findAll();
  // 200 indicates success in retrieving cardio 
  res.status(200).json(cardioSessions);
};

// function to aggregate all distance and duration for each type of cardio to show lifetime totals
const getCardioSummary = async (req, res) => {
  const summary = await Cardio.findAll({
    attributes: [
      // get total distance for specific cardio
      [sequelize.fn('sum', sequelize.col('distance')), 'totalDistance'], 
      // get total duration for specific cardio
      [sequelize.fn('sum', sequelize.col('duration')), 'totalDuration'], 
    ],
    // only want to see data from database 
    raw: true,
  });
  // 200 indicates success in retrieving cardio summary
  res.status(200).json(summary);
};

module.exports = {
  logCardio,
  deleteCardio,
  getAllCardio,
  getCardioSummary,
};