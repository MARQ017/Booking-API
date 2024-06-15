import agentService from '../services/agentService.js';

export const getAllAgents = async (req, res) => {
    try {
        const agents = await agentService.getAllAgents();
        res.status(200).json(agents);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
