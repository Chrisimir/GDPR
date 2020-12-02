const express = require("express");
const bodyParser = require('body-parser');
import sqlite3 from 'sqlite3'

const app = express();

const db = new sqlite3.Database('./server/resources.db', (err) => {
    if (err) {
        console.error("Error abriendo base de datos " + err.message);
    } else {

        // Crear tabla ejemplo DONACIONES
        db.run('CREATE TABLE donations( \
            donation_id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,\
            account_name NVARCHAR(200)  NOT NULL,\
            contact_name NVARCHAR(200)  NOT NULL,\
            email NVARCHAR(200),\
            title NVARCHAR(200),\
            direction NVARCHAR(500),\
            phone NVARCHAR(200),\
            details NVARCHAR(500),\
            join_team INTEGER,\
            state INTEGER,\
            quantity INTEGER\
        )', (err) => {
            if (err) {
                console.log("La tabla ya existe!");
            }
            let insert = 'INSERT INTO donations (account_name, contact_name, email, title, direction, phone, details, join_team, state, quantity) VALUES (?,?,?,?,?,?,?,?,?,?)';
            db.run(insert, ["Empresa test", "Jose", "jose@test.com", "titulo prueba", "dirección prueba", "454545454", "detalles detallísimos", 1, 0, 2]);
            db.run(insert, ["Empresa test", "pepe", "pepe@test.com", "titulo prueba", "dirección prueba", "454545454", "detalles detallísimos", 1, 0, 2]);
            db.run(insert, ["Empresa test", "miguel", "miguel@test.com", "titulo prueba", "dirección prueba", "454545454", "detalles detallísimos", 1, 0, 2]);
        });

        // Crear tabla ejemplo SOLICITUDES
        db.run('CREATE TABLE requests( \
            request_id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,\
            account_name NVARCHAR(200)  NOT NULL,\
            contact_name NVARCHAR(200)  NOT NULL,\
            email NVARCHAR(200),\
            title NVARCHAR(200),\
            direction NVARCHAR(500),\
            phone NVARCHAR(200),\
            details NVARCHAR(500),\
            join_team INTEGER,\
            state INTEGER,\
            quantity INTEGER\
        )', (err) => {
            if (err) {
                console.log("La tabla ya existe!");
            }
            let insert = 'INSERT INTO requests (account_name, contact_name, email, title, direction, phone, details, join_team, state, quantity) VALUES (?,?,?,?,?,?,?,?,?,?)';
            db.run(insert, ["Empresa test", "Jose", "jose@test.com", "titulo prueba", "dirección prueba", "454545454", "detalles detallísimos", 1, 0, 2]);
            db.run(insert, ["Empresa test", "pepe", "pepe@test.com", "titulo prueba", "dirección prueba", "454545454", "detalles detallísimos", 1, 0, 2]);
            db.run(insert, ["Empresa test", "miguel", "miguel@test.com", "titulo prueba", "dirección prueba", "454545454", "detalles detallísimos", 1, 0, 2]);
        });
    }
});

app.use(bodyParser.json({ limit: "50mb" }));


// DONACIONES
// Recuperar la información de una donación
app.get("/donations/:id", (req, res, next) => {
    var params = [req.params.id]
    db.get(`SELECT * FROM donations where donation_id = ?`, [req.params.id], (err, row) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.status(200).json(row);
      });
});

// Recuperar la información de todas las donaciones
app.get("/donations", (req, res, next) => {
    db.all("SELECT * FROM donations", [], (err, rows) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.status(200).json({rows});
      });
});

// Nueva donación
app.post("/donations/", (req, res, next) => {
    var postBody = req.body;
    db.run(`INSERT INTO donations (account_name, contact_name, email, title, direction, phone, details, join_team, state, quantity) VALUES (?,?,?,?,?,?,?,?,?,?)`,
        [postBody.account_name, postBody.contact_name, postBody.email, postBody.title, postBody.direction, postBody.phone, postBody.details, postBody.join_team, postBody.state, postBody.quantity],
        function (err, result) {
            if (err) {
                res.status(400).json({ "error": err.message })
                return;
            }
             res.status(201).json({
                "donation_id": this.lastID
            })
        });
});

// SOLICITUDES
// Recuperar la información de una solicitud
app.get("/requests/:id", (req, res, next) => {
    var params = [req.params.id]
    db.get(`SELECT * FROM requests where request_id = ?`, [req.params.id], (err, row) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.status(200).json(row);
      });
});

// Recuperar la información de todas las solicitudes
app.get("/requests", (req, res, next) => {
    db.all("SELECT * FROM requests", [], (err, rows) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.status(200).json({rows});
      });
});

// Nueva solicitud
app.post("/requests/", (req, res, next) => {
    var postBody = req.body;
    db.run(`INSERT INTO donations (account_name, contact_name, email, title, direction, phone, details, join_team, state, quantity) VALUES (?,?,?,?,?,?,?,?,?,?)`,
        [postBody.account_name, postBody.contact_name, postBody.email, postBody.title, postBody.direction, postBody.phone, postBody.details, postBody.join_team, postBody.state, postBody.quantity],
        function (err, result) {
            if (err) {
                res.status(400).json({ "error": err.message })
                return;
            }
            res.status(201).json({
                "request_id": this.lastID
            })
        });
});

module.exports = {
    path: "/backend",
    handler: app
};
