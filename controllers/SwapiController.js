'use strict';

const swapi = require('swapi-node');

var Request = require("request");



exports.listPlanets= function(req, res){
  res.render('list-swapi', { title: 'Listar Planetas SWAPI', page: 'Listar planetas SWAPI'});
};


  exports.selectPlanet= function(req, res){

    Request.get("http://swapi.co/api/planets/"+req.params.id, (err, response, body) => {
      if(err) {
        res.send(err);
      }
      
      res.json(JSON.parse(body));
      
     });
  
  }




  exports.getPlanetFilms= function(req, res){

    res.render('search-swapi', { title: 'Listar Filmes Planetas SWAPI', page: 'Listar Filmes planetas SWAPI', name : req.query.name});
  
  }






  exports.getFilms= function(req, res){
    swapi.getFilm().then((result) => {
      res.json(result);
  });
  }

  exports.getPlanets= function(req, res){
    swapi.getPlanets().then((result) => {
      res.json(result);
  });
  }

  exports.getPlanet= function(req, res){
    swapi.getPlanets(req.params.id).then((result) => {
      res.json(result);
  });
  }