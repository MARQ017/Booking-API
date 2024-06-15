import db from '../models/index.js';

const { User } = db;

const getAllUsers = async (agentId) => {
    try {
        const users = await User.findAll({ where: { agent_id: agentId } });
        return users;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
};

export default { getAllUsers };