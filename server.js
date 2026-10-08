require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');

const app = express();

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: process.env.DB_PASSWORD,
  database: 'magic_balloons'
});

db.connect(err => {
  if (err) throw err;
  console.log('Connected to MySQL');
});

app.use(express.static('public'));

app.get('/test', (req, res) => {
  db.query('SELECT * FROM bundles', (err, rows) => {
    if (err) return res.status(500).send('DB error');
    res.json(rows);
  });
});

app.listen(3000, () => console.log('Running at http://localhost:3000'));