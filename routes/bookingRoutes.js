import express from 'express';
import { getScheduler, createBooking, deleteBooking } from '../controllers/bookingController.js';
import { authorizeRole } from '../middlewares/auth.js';

const router = express.Router();

router.get('/scheduler', authorizeRole(['ADMIN', 'REGULAR']), getScheduler);
router.post('/booking', authorizeRole(['ADMIN']), createBooking);
router.delete('/booking/:id', authorizeRole(['ADMIN']), deleteBooking);

export default router;
