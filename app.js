import express from "express";
import db from "#db/client";
import foldersRouter from "./routes/folders.js";
import filesRouter from "./routes/files.js";

const app = express();

app.use(express.json());

app.use("/folders", foldersRouter);
app.use("/files", filesRouter);

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
});

export default app;