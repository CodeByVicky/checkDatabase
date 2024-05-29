const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// MySQL connection setup
const connection = mysql.createConnection({
    host: 'ba4i6ttdnarlux5nrhce-mysql.services.clever-cloud.com',
    user: 'ue3vknkck3vnyaxu',
    password: 'ue3vknkck3vnyaxu',
    database: 'ba4i6ttdnarlux5nrhce'
});

connection.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err.stack);
        return;
    }
    console.log('Connected to the database as ID', connection.threadId);
});

// GET endpoint to retrieve items from the database
app.get('/items', (req, res) => {
    connection.query('SELECT * FROM items', (err, results) => {
        if (err) {
            console.error('Error fetching items:', err.stack);
            res.status(500).send('Error fetching items from the database.');
            return;
        }
        res.json(results);
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
