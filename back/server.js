import express from 'express';
import cors from 'cors';
import mysql from 'mysql2';



const app = express();

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
    })
}) 

app.listen(3000, () => {
    console.log(" ..(oO Escuchando el puerto 3000 Oo)..");
})