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

export default router;