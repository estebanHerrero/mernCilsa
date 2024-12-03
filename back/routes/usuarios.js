import express from 'express';
import db from '../config/db.js';


const router = express.Router();

router.get("/usuarios", (req, res) => {
    const sql = "SELECT * FROM usuarios";

    db.query(sql, (err, data) => {
        if(err) return res.json("Error");
        return res.json(data);
    });
});

router.post('Registrate', (req, res) => {
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
});

export default router;