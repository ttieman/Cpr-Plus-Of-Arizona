const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 8080;

const app = express();


app.use(express.static(path.join(__dirname, 'public')));

// send the user to index html page inspite of the url
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
});

