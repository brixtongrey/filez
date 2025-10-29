import express from "express";
import db from "../db/client.js";

const router = express.Router();

router.get("/", async (req, res, next) => {
    try {
        const sql = `
        SELECT files.*,
        folders.name AS folder_name
        FROM files
        JOIN folders ON files.folder_id = folders.id
        `;
        const { rows } = await db.query(sql);
        res.json(rows);
    } catch (error) {
        throw error;
    }
});

export default router;
