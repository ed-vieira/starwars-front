'use strict';

var Request = require("request");


exports.createPlanet = function(req, res) {
    res.render('create', { title: 'Novo Planeta' });
};

exports.savePlanet = function(req, res){
  saveData(req.body._name, req.body._climate, req.body._terrain);
 res.redirect('/list');
}

exports.editPlanet=function(req, res){ 
  res.render('edit', { title: 'StarWars', page: 'Editar planeta' , id : req.query.id});
};



exports.listPlanets= function(req, res){
  res.render('list', { title: 'Listar Planetas', page: 'Listar planetas'});
};

exports.updatePlanet = function(req, res) {
   updateData(req.body._id, req.body._name, req.body._climate, req.body._terrain);
  res.redirect('/list');
};


exports.searchPlanet = function(req, res) {
  res.render('search', { title: 'Buscar Planeta', page: 'Buscar planeta por nome', name : req.query._name });
};

exports.deletePlanet = function(req, res) {
  
    Request.delete("http://localhost:3300/api/planeta/"+req.query.id, (err, response, body) => {
      if(err) {
        console.log(err);
      }else{
        console.log(JSON.parse(body))
      };
    });

  res.redirect('/list');
};



exports.selectPlanet=function(req, res){
  
  res.render('select', { title: 'StarWars', page: 'Selecionar por ID' , id : req.query.id});
};



exports.index= function(req, res){
  res.render('index', { title: 'StarWars'});
};





function saveData(name,climate, terrain){
  var options = {
    method: 'POST',
    url: 'http://localhost:3000/api/novo-planeta',
    headers: 
     {      
       'cache-control': 'no-cache',
       'Content-Type': 'application/x-www-form-urlencoded' 
     },
    form: 
      { 
        name: "",
        climate: "",
        terrain: "",
      } 
    };
  
    options.form.name= name;
    options.form.climate= climate;
    options.form.terrain= terrain;
  
   Request.post(options, function (error, response, body) {    
    if (error) throw new Error(error);
     console.log(body);
  });
}


function updateData(id, name,climate, terrain){
  var options = {
    method: 'PUT',
    url: 'http://localhost:3300/api/planeta/'+id,
    headers: 
     {      
       'cache-control': 'no-cache',
       'Content-Type': 'application/x-www-form-urlencoded' 
     },
    form: 
      { 
        name: "",
        climate: "",
        terrain: "",
      } 
    };
  
    options.form.name= name;
    options.form.climate= climate;
    options.form.terrain= terrain;
  
   Request.put(options, function (error, response, body) {    
    if (error) throw new Error(error);
     console.log(body);
  });
}


