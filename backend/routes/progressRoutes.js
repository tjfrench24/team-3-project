import express from 'express';
import { getProgress, addProgress } from '../controllers/progressController.js';

const router = express.Router();

router.get('/', getProgress);
router.post('/', addProgress);

export default router;
