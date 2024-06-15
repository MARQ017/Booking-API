import express from 'express';
import agentRoutes from './agentRoutes.js';
import bookingRoutes from './bookingRoutes.js';
import userRoutes from './userRoutes.js';
import authRoutes from './authRoutes.js';

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/agents', agentRoutes);
router.use('/bookings', bookingRoutes);
router.use('/users', userRoutes);

export default router;
