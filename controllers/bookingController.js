import bookingService from '../services/bookingService.js';

export const getScheduler = async (req, res) => {
    const { week } = req.query;
    try {
        const bookings = await bookingService.getScheduler(req.user.id, week);
        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const createBooking = async (req, res) => {
    try {
        const { userId, start_at, finish_at } = req.body;
        const booking = await bookingService.createBooking(req.user.id, userId, start_at, finish_at);
        res.status(201).json(booking);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteBooking = async (req, res) => {
    const { id } = req.params;

    try {
        const result = await bookingService.deleteBooking(id);
        res.status(200).json(result);
    } catch (error) {
        if (error.message === 'Booking not found') {
            res.status(404).json({ error: error.message });
        } else {
            res.status(500).json({ error: error.message });
        }
    }
};
