const mysql = require('mysql');
const express = require('express');
const cors = require('cors');
const { creatNote, getNotes, getSingleNote, updateNote, deleteNote } = require('./Controllers/notesController')
const app = express()
const PORT = 5000;
app.use(cors());
app.use(express.json());
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'notes'
});

app.get('/notes', getNotes);
app.get('/notes/:id', getSingleNote);
app.post('/notes', creatNote);
app.put('/notes/update/:id', updateNote);
app.delete('/notes/delete/:id', deleteNote);
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});