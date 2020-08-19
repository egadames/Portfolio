const express = require('express');
const path = require('path');
const app = express();
// const __dirname = './public/index.html'

app.use(express.static(path.join(__dirname, 'build')));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(9000);