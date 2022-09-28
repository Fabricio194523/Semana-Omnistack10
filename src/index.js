const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');


const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0.t7gksfs.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


app.use(express.json()); 
// (cadastrado para que o express entenda requisições que tenha o corpo no formato json))
app.use(routes);





app.listen(3333);


