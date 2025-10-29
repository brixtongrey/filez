import db from "./client.js";

// GET all files, including folder name they belong to
export async function getFiles() {
    try {
        const sql = `
        SELECT files.*,
        folders_name AS folder_name
        FROM files
        JOIN folders ON files.folder_id = folders.id;
        `;
        const { rows } = await db.query(sql);
        return rows
    } catch (error) {
        console.error("Error fetching files", error);
        throw error;
    }
}

