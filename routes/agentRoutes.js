import express from 'express';
import { getAllAgents } from '../controllers/agentController.js';
import { authorizeRole } from '../middlewares/auth.js';

const router = express.Router();

router.get('/', authorizeRole(['ADMIN']), getAllAgents);

export default router;
