const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Database connection
const db = mysql.createConnection({
    host: 'localhost', http://localhost:3000/submit
    user: 'root',
    password: 'password',
    database: 'testdb'
});

db.connect(err => {
    if (err) throw err;
    console.log('Connected to database');
});

// Handle form submission
app.post('/submit', (req, res) => {
    const { lastname, firstname, gender, email, password } = req.body;

    const sql = 'INSERT INTO users (lastname, firstname, gender, email, password) VALUES (?, ?, ?, ?, ?)';
    db.query(sql, [lastname, firstname, gender, email, password], (err, result) => {
        if (err) throw err;
        res.send('Form submitted successfully!');
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});