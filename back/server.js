import express from 'express';
import cors from 'cors';
import db from './db.js';



const app = express();

app.use(cors());
app.use(express.json());


//Obtener todas las tareas
app.get('/tareas', async (req, res) => {
    try {
        const [rows] = await db.query("SELECT * FROM tareas");
        res.json(rows);
    } catch (error) {
        console.error("Error al obtener las tareas:", error);
        res.status(500).send("Error al obtener las tareas");
    }
});

//Obtener las tareas por ID
app.get('/tareas/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const [rows] = await db.query("SELECT * FROM tareas WHERE idTarea = ?", [id]);
        if (rows.length === 0) {
            return res.status(404).send("Tarea no encontrada.");
        }
        res.json(rows[0]);
    }catch (error) {
        console.error("Error al obtener la tarea:", error);
        res.status(500).send("Error al obtener la tarea.");
    }
});

//Crear una nueva tarea
 app.post('/tareas', async (req, res) => {
    try {
        const { nombre, descripcion } = req.body;

        if(!nombre || !descripcion) {
            return res.status(400).send('Los campos nombre y descripción son obligatorios.');
        }
        const [result] = await db.query('INSERT INTO tareas (nombre, descripcion, estado) VALUES (?, ?, ?)', [nombre, descripcion, 'pendiente']);

        res.status(201).json({ id: result.insertId, ...req.body});
    }catch (error) {
        console.error("Error al crear una nueva tarea:", error);
        res.status(500).send("Error al crear la tarea.");
    }
 });


//Actualizar una tarea por ID
app.put('/tareas/:id', async (req, res) => {
    const { id } = req.params;
    const { nombre, descripcion, estado } = req.body;

    try {
        const [result] = await db.query('UPDATE tareas SET nombre = ?, descripcion = ?, estado = ? WHERE idTarea = ?', [nombre, descripcion, estado, id]);

        if (result.affectedRows === 0) {
            return res.status(404).send('Tarea no encontrada.');
        }
        res.json({ message: 'Tarea actualizada correctamente' });
    }catch (error) {
        console.error('Error al actualizar la tarea:', error);
        res.status(500).send('Error al actualizar la tarea.');
    }
});


// Eliminar una tarea
app.delete('/tareas/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const [result] = await db.query('DELETE FROM tareas WHERE idTarea = ?', [id]);

        if (result.affectedRows === 0) {
            return res.status(404).send('Tarea no encontrada.');
        }
        res.sendStatus(204);
    }catch (error) {
        console.error('ERror al eliminar la tarea:', error);
        res.status(500).send('Error al aliminar la tarea.');
    }
});

  
app.listen(3000, () => {
    console.log(" ..oO) Escuchando el puerto 3000 (Oo..");
})







