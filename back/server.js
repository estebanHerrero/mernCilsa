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

app.get('/tareas/:id', (req, res) => {
    const { id } =req.params;
    const sql = 'SELECT * FROM tareas WHERE idTarea = ?';

    db.query(sql, [id], (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Error al obtener la tarea.'});
        }
        if (data.length === 0) {
            return res.status(400).json({ message: ' Tarea no encontrada.'});
        }
        res.json(data[0]);
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


app.delete('/tareas/:id', async (req, res) => {
    const { id } = req.params;
    const sql = `DELETE FROM tareas WHERE idTarea = ?`;

    db.query(sql, [id], (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Error al eliminar la tarea.'});
      }
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: 'Tarea no encontrada.'});
      }
      res.status(200).json({ message: 'Tarea eliminada exitosamente.'});
    });
  });

app.post('/registrate', async (req, res) => {
    const { nombre, apellido, correoElectronico, contrasenia } = req.body;

    const [rows] = await db.promise().query('SELECT * FROM usuarios WHERE  correoElectronico = ?', [correoElectronico]);

    if (rows.length > 0) {
        return res.status(409).json({ error: 'El usuario ya existe.'});
    }
    const sql = 'INSERT INTO usuarios (nombre, apellido, correoElectronico, contrasenia) VALUES (?, ?, ?, ?)';
    db.query(sql, [nombre, apellido, correoElectronico, contrasenia], (err, result) => {
        if(err) {
            console.error(err);
            return res.status(500).json({ error: 'Error al registrar el usuario' });
        }
        res.status(201).json({ message: 'Usuario registrado correctamente.'});
    });
});





app.listen(3000, () => {
    console.log(" ..oO) Escuchando el puerto 3000 (Oo..");
})



app.post('Registrate', (req, res) => {
    const sql = "INSERT INTO usuarios ('nombre','apellido','correoElectronico','contrasenia') VALUES (?, ?, ?, ?)";
    const values = [
        req.body.nombre,
        req.body.apellido,
        req.body.correoElectronico,
        req.body,contraenia
    ]
    db.query(sql, values, (err, result) => {
        if(err) return res.json({ message: "Ocurrió un error", err})
        return res.json({ success: "Usuario agregado exitosamente."})
    })
})

