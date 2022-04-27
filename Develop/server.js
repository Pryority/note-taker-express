const express = require('express');
const path = '';
const dbData = require('./db/db.json');

const PORT = 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

app.get('/api', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})

app.get('/api/json', (req, res) => res.json(dbData));

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);

}); ``