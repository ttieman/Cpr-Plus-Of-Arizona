const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 8080;

const app = express();


app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/ASM', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'AMSAF.html'));
});

app.get('/cpr', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'cpr.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

// send the user to index html page inspite of the url
app.get(`/home`, (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
});

