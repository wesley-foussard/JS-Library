require('dotenv').config();

const path = require('path');
const express = require('express');
const router = require('./app/routers');

const port = process.env.PORT || `port number`;

const app = express();

app.set('view engine', 'template engine');
app.set('views', './app/views');

app.use(express.static(path.join(__dirname, './public')));

app.use(router);

app.listen(port, () => {
    console.log(`Server ready: http://localhost:${port}`);
});