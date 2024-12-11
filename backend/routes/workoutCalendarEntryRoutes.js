const express = require('express');
const workoutCalendarEntryController = require('../controllers/workoutCalendarEntryController');

const router = express.Router();

// GET '/workoutCalendarEntry'
router.get('/workoutCalendarEntry', workoutCalendarEntryController.getAllEntries);

// GET '/workoutCalendarEntry/:id'
router.get('/workoutCalendarEntry/:id', workoutCalendarEntryController.getEntryById);

// POST '/workoutCalendarEntry'
router.post('/workoutCalendarEntry', workoutCalendarEntryController.createEntry);

// PUT '/workoutCalendarEntry/:id'
router.put('/workoutCalendarEntry/:id', workoutCalendarEntryController.updateEntry);

// DELETE '/workoutCalendarEntry/:id'
router.delete('/workoutCalendarEntry/:id', workoutCalendarEntryController.deleteEntry);

module.exports = router;
