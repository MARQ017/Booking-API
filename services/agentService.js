import db from '../models/index.js';

const getAllAgents = async () => {
    return await db.Agent.findAll();
};

export default { getAllAgents };
