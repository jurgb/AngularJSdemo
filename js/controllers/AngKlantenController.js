app.controller('KlantenController', function($scope){
        $scope.klanten = [
            {"id": 1, "naam":"Jef", "totaal": 560},
            {"id": 2, "naam":"Katrien", "totaal": 230},
            {"id": 3, "naam":"Vicky", "totaal": 760},
            {"id": 4, "naam":"Jurgen", "totaal": 40}
        ];

//        $scope.index = function(){
//            KlantenAPI.index()
//                .success(function(data){
//                    $scope.klanten = data;
//                });
//        };
    });