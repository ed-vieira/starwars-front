var app = angular.module('stwPlanetas', []);


app.controller('planetasCtrlList', function($scope, $http){
    $scope.loadData= function(){ 
        let url = "http://localhost:3000/api/planetas";             
        $http.get(url)
         .then(function(response) {
           $scope.listarPlanetas = response.data.planets;
         })
         .catch(function(error) {
            $scope.error = error;
        })};
    $scope.loadData();
});



app.controller('planetasCtrlSelect', function($scope, $http) {   
    $scope.loadDataById= function (id){       
        let url = "http://localhost:3000/api/planeta/"+id;          
        $http.get(url)
        .then(function(response) {
           $scope.planet = response.data.planet;
        })
        .catch(function(error) {
            $scope.error = error;
        });           
    };    
});



app.controller('planetasCtrlEdit', function($scope, $http) {  
    $scope.loadDataById= function (id){       
        let url = "http://localhost:3000/api/planeta/"+id;          
        $http.get(url)
        .then(function(response) {
           $scope.planet = response.data.planet;
           $scope._id = response.data.planet._id;
           $scope._name = response.data.planet.name;
           $scope._climate = response.data.planet.climate;
           $scope._terrain = response.data.planet.terrain;
        })
        .catch(function(error) {
            $scope.error = error;
        });      
    };
     
});


app.controller('planetasCtrlSearch', function($scope, $http) {
    
    $scope.loadDataBySearch= function (name){       
        let url = "http://localhost:3000/api/buscar-planeta/"+name;          
        $http.get(url)
        .then(function(response) {
           $scope.listarPlanetas = response.data.planet;
        })
        .catch(function(error) {
            $scope.error = error;
        });
        $scope.loadDataFilms(name);     
    };
     

    $scope.loadDataFilms= function (name){       
        let url = "http://localhost:3000/api/swappi/planet-films/"+name;          
        $http.get(url)
        .then(function(response) {
           $scope.listarFilmes = response.data.results[0].films;
        })
        .catch(function(error) {
            $scope.error = error;
        });      
    };

    
    $scope.filmData= function(url){
        $http.get(url)
        .then(function(response) {
           $scope.film = response.data;
        })
        .catch(function(error) {
            $scope.error = error;
        }); 
    };

});


app.controller('planetasCtrlSWAPI', function($scope, $http){
   
    $scope.loadData= function(){ 
        let url = "http://localhost:3000/api/swappi/planets";             
        $http.get(url)
         .then(function(response) {
           $scope.listarPlanetas = response.data.results;
         })
         .catch(function(error) {
            $scope.error = error;
        })

    };
    $scope.loadData();
});
     


app.controller('planetasCtrlSWAPIFilms', function($scope, $http){

    $scope.loadDataBySearch= function (name){       
        let url = "http://localhost:3000/api/swappi/planet-films/"+name;          
        $http.get(url)
        .then(function(response) {
           $scope.listarPlanetas = response.data.results;
           $scope.listarFilmes = response.data.results[0].films;
        })
        .catch(function(error) {
            $scope.error = error;
        });  
       
    };

});