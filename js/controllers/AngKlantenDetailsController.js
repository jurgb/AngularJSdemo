app.controller('KlantenDetailsController', function($scope, KlantenAPI, $routeParams){
        $scope.klanten = [
//            {"id": 1, "name":"Jef", "totaal": 560},
//            {"id": 2, "name":"Katrien", "totaal": 230},
//            {"id": 3, "name":"Vicky", "totaal": 760},
//            {"id": 4, "name":"Jurgen", "totaal": 40}
        ];
    
        $scope.klantdetail = [

        ];
    
        $scope.index = function(){
            var userid = $routeParams.user_id;
            KlantenAPI.show(userid)
                .success(function(data){
                    $scope.klantdetail = data;
                });
        };
    });