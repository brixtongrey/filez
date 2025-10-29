import express from "express";
const app = express();

app.use(express.json());

app.use("/folders", foldersRouter);
app.use("/files", filesRouter);

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
});

export default app;