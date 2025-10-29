import db from "./client.js";

// GET all folders
export async function getFolders() {
    try {
        const sql = `
        SELECT *
        FROM folders
        `;
        const { rows } = await db.query(sql);
        return rows;
    } catch (error) {
        console.error("Error fetching folders", error);
        throw error;
    }
}
