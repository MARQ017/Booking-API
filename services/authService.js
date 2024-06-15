import db from '../models/index.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const { User, Agent } = db;

const loginUser = async (email, password) => {
  const user = await User.findOne({ where: { email } });
  if (!user) {
    throw new Error('User not found');
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error('Invalid password');
  }

  const token = jwt.sign(
    { id: user.id, role: 'REGULAR' }, // Assuming all users are 'REGULAR' by default
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );

  return { token };
};

const loginAgent = async (email, password) => {
  const agent = await Agent.findOne({ where: { email } });
  if (!agent) {
    throw new Error('Agent not found');
  }

  const isPasswordValid = await bcrypt.compare(password, agent.password);
  if (!isPasswordValid) {
    throw new Error('Invalid password');
  }

  const token = jwt.sign(
    { id: agent.id, role: 'ADMIN' }, // Assuming all agents are 'ADMIN' by default
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );

  return { token };
};

export default { loginUser, loginAgent };
