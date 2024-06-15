import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const authenticateToken = (req, res, next) => {
    const token = req.headers['x-agent-id'];
    if (!token) return res.sendStatus(403);

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        // console.log("req.user", user)
        req.user = user;
        next();
    });
};

export const authorizeRole = (roles) => {
    return (req, res, next) => {
        // console.log("req.user", req.user)
        if (!roles.includes(req.user.role)) {
            return res.sendStatus(403);
        }
        next();
    };
};
