const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://LuisAntonio:Luis35356819@servidor-4j5nn.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json()); //para o express entender requisições em Json 
app.use(routes); // para o "app" acessar as rotas

app.listen(3333);

// Com a função express, o "app" pode fazer uma requisição e acessar a rota "localhost:3333"