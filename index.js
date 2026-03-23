require('dotenv').config()
const express = require('express');

const app = express();

const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/login', (req, res) => {
    res.send('<h1>Please Login First!!!</h1>')
})

app.get('/whatsapp', (req, res) => {
    res.send('Welcome Back')
})

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
});