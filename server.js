const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'dist','app_name')));

app.listen(process.env.PORT || 8080);

res.sendFile(path.join(__dirname,'dist','app_name','index.html'));

console.log('Console Listening');