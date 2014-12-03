app.controller('KlantenDetailsController', function($scope, KlantenAPI){
        $scope.klantdetail = [

        ];
    
        $scope.index = function(){
            var userid = 1;
            KlantenAPI.show(userid)
                .success(function(data){
                    $scope.klantdetail = data;
                });
        };
    });