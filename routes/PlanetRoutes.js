'use strict';
module.exports = function(app) {

  

  var planetsCtrl = require('../controllers/PlanetController');

  var swapiCtrl = require('../controllers/SwapiController');

  
  // Routes
  app.get('/',planetsCtrl.index);
  app.get('/create', planetsCtrl.createPlanet);
  app.get('/edit', planetsCtrl.editPlanet);
  app.post('/update-planet', planetsCtrl.updatePlanet).put(planetsCtrl.updatePlanet);
  app.post('/save-planet', planetsCtrl.savePlanet)
  app.get('/select?:id', planetsCtrl.selectPlanet);
  
  app.get('/delete?:id', planetsCtrl.deletePlanet);
  app.get('/search?:name', planetsCtrl.searchPlanet);
  app.get('/list', planetsCtrl.listPlanets);

  app.get('/swapi-planets', swapiCtrl.listPlanets);
  app.get('/swapi-films?:name', swapiCtrl.getPlanetFilms);

};

