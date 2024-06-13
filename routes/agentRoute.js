import express from 'express';
import agentController from '../controllers/agent.controller.js';

const router = express.Router();

router.get('/', agentController.index);

export default router;