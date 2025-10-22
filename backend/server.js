const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Saurav124@',
    database: 'student_system'
});

db.connect(err => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL database.');
});

app.get('/api/students', (req, res) => {
    const sql = 'SELECT * FROM students';
    db.query(sql, (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
});

app.post('/api/students', (req, res) => {
    const { first_name, last_name, email, class_name } = req.body;
    
    const sql = 'INSERT INTO students (first_name, last_name, email, class) VALUES (?, ?, ?, ?)';
    const values = [first_name, last_name, email, class_name];
    
    db.query(sql, values, (err, result) => {
        if (err) return res.status(500).json(err);
        res.status(201).json({ id: result.insertId, ...req.body });
    });
});

app.delete('/api/students/:id', (req, res) => {
    const sql = 'DELETE FROM students WHERE id = ?';
    db.query(sql, [req.params.id], (err, result) => {
        if (err) return res.status(500).json(err);
        res.status(204).send();
    });
});

app.listen(3001, () => {
    console.log('Student management server running on http://localhost:3001');
});