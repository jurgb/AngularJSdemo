app.controller('KlantenController', function($scope, KlantenAPI){
        $scope.klanten = [
//            {"id": 1, "name":"Jef", "totaal": 560},
//            {"id": 2, "name":"Katrien", "totaal": 230},
//            {"id": 3, "name":"Vicky", "totaal": 760},
//            {"id": 4, "name":"Jurgen", "totaal": 40}
        ];

        $scope.index = function(){
          //Alle notifications binnehalen en in scope stoppen
            KlantenAPI.index()
                .success(function(data){
                    $scope.klanten = data;
                });

        };
    });