const express = require('express')
bodyParser = require('body-parser');
const app = express()
const port = 3301

app.set('view engine', 'pug') 
app.use(express.static('public')); //pasta de arquivos estáticos
var routes = require('./routes/PlanetRoutes'); //importando rotas
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app); //registrando as rotas

  app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' não encontrado'})
  });

app.listen(port, () => console.log(`Servidor iniciado em http://localhost:${port}!`));