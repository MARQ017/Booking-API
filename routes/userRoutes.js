import express from 'express';
import { getAllUsers } from '../controllers/userController.js';
import { authorizeRole } from '../middlewares/auth.js';

const router = express.Router();

router.get('/users', authorizeRole(['ADMIN', 'REGULAR']), getAllUsers);

export default router;
