// tareasRoutes.js
import express from 'express';
import db from '../db';

const router = express.Router();

// Obtener todas las tareas
router.get('/tareas', async (req, res) => {
    try {
        const [rows] = await db.query("SELECT * FROM tareas");
        res.json(rows);
    } catch (error) {
        console.error("Error al obtener las tareas:", error);
        res.status(500).send("Error al obtener las tareas");
    }
});

// ... other routes

export default router;