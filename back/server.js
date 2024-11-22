import express from 'express';
import cors from 'cors';
import mysql from 'mysql2';



const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "mernCilsa"
})


app.get("/", (req, res) => {
    const sql = "SELECT * FROM tareas";
    db.query(sql, (err, data) => {
        if(err) return res.json("Error");
        return res.json(data);
    });
});

app.post('/', (req, res) => {
    const { nombre, descripcion } = req.body;
    const sql = 'INSERT INTO tareas (nombre, descripcion) VALUES (?, ?)';
    db.query(sql, [nombre, descripcion], (err, reslut) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Error al agregar la nueva tarea.'});
        }
        res.status(200).json({ message: 'Tarea agregada correctamente.'});
    });
});

app.put('tareas/:id', async (req, res) =>{
    const { id } = req.params;
    const { nombre, descripcion } = req.body;

    const sql = `UPDATE tareas SET nombre = ?, descripcion = ? W_HEE id = ? `;
    db.query(sql, [nombre, descripcion, id] , (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Erro al actualizar la tarea.'});
        }
        if (result.affectedRows === 0) {
            return res.status(400).json({ message: 'Tarea no encontrada.'});
        }
        res.status(200).json({ message: 'Tarea actualizada exitosamente.'});
    });
});


app.listen(3000, () => {
    console.log(" ..oO) Escuchando el puerto 3000 (Oo..");
})