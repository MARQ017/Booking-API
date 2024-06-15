import express from "express";
// import agentRoute from "./routes/agentRoutes.js";
// import bodyParser from "body-parser";
import dotenv from 'dotenv';
// import sequelize from './models/index.js';
import routes from './routes/index.js';
import { authenticateToken, authorizeRole } from './middlewares/auth.js';

dotenv.config();

const app = express();

app.use(express.json());

const authMiddlweare = (req, res, next) => {
    console.log("req.path", req.path)
    if (req.path.startsWith('/api/auth/login')) {
      return next();
    }
    authenticateToken(req, res, next);
  };

app.use(authMiddlweare);

// routes
app.use('/api', routes);

export default app;
