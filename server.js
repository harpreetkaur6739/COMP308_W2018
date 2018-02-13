process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const express = require('./config/express'),
    mongoose = require('./config/mongoose');
const app = express();
app.listen(3000);
module.exports = app;
console.log('Server running at port 3000...');