import express from "express";
import db from "../db/client.js";

const router = express.Router();

// GET /folders - all folders
router.get("/", async (req, res, next) => {
  try {
    const { rows } = await db.query("SELECT * FROM folders");
    res.json(rows);
  } catch (err) {
    next(err);
  }
});

// GET /folders/:id - folder by id with files
router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;

    const { rows: folders } = await db.query(
      "SELECT * FROM folders WHERE id = $1",
      [id]
    );
    if (folders.length === 0) return res.status(404).json({ error: "Folder not found" });
      } catch (err) {
    next(err);
  }
});

export default router;