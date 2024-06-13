import express from "express";
import agentRoute from "./routes/agentRoute.js";

const app = express();

app.use("/agents", agentRoute);

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

export default app;
