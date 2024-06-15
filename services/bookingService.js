import db from '../models/index.js';
import { Op } from 'sequelize';

const getScheduler = async (agentId, week) => {
    const startOfWeek = new Date(week);
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(endOfWeek.getDate() + 7);

    return await db.Booking.findAll({
        where: {
            agent_id: agentId,
            start_at: {
                [Op.between]: [startOfWeek, endOfWeek]
            }
        },
        include: ['User']
    });
};

const createBooking = async (agentId, userId, start_at, finish_at) => {
    return await db.Booking.create({
        agent_id: agentId,
        user_id: userId,
        start_at,
        finish_at
    });
};

const deleteBooking = async (id) => {
    try {
        const deletedRows = await db.Booking.destroy({ where: { id } });

        if (deletedRows === 0) {
            throw new Error('Booking not found');
        }

        return { message: 'Booking deleted successfully' };
    } catch (error) {
        console.error('Error deleting booking:', error);
        throw error;
    }
};

export default { getScheduler, createBooking, deleteBooking };
