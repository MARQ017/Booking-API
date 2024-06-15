import authService from '../services/authService.js';

export const login = async (req, res) => {
  const { email, password, type } = req.body; // Assuming type is either 'user' or 'agent'

  try {
    let token;
    if (type === 'user') {
      token = await authService.loginUser(email, password);
    } else if (type === 'agent') {
      token = await authService.loginAgent(email, password);
    } else {
      return res.status(400).json({ error: 'Invalid login type' });
    }

    res.status(200).json(token);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
