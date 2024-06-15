import userService from '../services/userService.js';

export const getAllUsers = async (req, res) => {
    try {
        const agentId = req.user.id;
        const users = await userService.getAllUsers(agentId);
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};