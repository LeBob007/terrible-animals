require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;
const router = require('./routes');

const clientDirPath = path.join(__dirname, '/../client/dist');
const clientIndexHtml = path.join(clientDirPath, 'index.html');

app.use(express.static(clientDirPath));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', router);

app.get('/*', (req, res) => {
  res.sendFile(clientIndexHtml);
});

app.listen(PORT, console.log(`Now listening on http://localhost:${PORT}`));
