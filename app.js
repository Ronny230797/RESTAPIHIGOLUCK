const express = require('express');
const bodyParser = require('body-parser');
const routerUsers  = require('./routes/users');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/users',routerUsers);

app.get('/',(req,res)=> res.send('Hello from main page'));

app.listen(PORT, ()=> console.log(`Server running on PORT: http://localhost:${PORT}`));

