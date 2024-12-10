import express from 'express';
import { validateLogCardio, validateDeleteCardio} from '../middleware/cardioValidation.js';
import { logCardio, getAllCardio, deleteCardio, getCardioSummary } from '../controllers/cardioController.js';
// handle HTTP requests with express package 
//const express = require('express');
// import cardioController 
//const cardioController = require('../controllers/cardioController');  
// import middleware for validation 
//const cardioValidation = require('../middleware/cardioValidation');  

// create router to handle route requests 
const router = express.Router();

// POST route to create a new cardio session and add to the database 
router.post('/', validateLogCardio, logCardio);

// GET route to get all cardio sessions from the database 
router.get('/', getAllCardio);

// DELETE route to remove a cardio session from the database by its id. 
router.delete('/:id', validateDeleteCardio, deleteCardio);

// GET route to get workout lifetime total duration and distance of each type of cardio
router.get('/summary', getCardioSummary);

// export the router 
// module.exports = router;

export default router;  