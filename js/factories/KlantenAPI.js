app.factory("KlantenAPI", function($http){

    var KlantenAPI = {};
    
    KlantenAPI.index = function(){
        return $http.get('http://jsonplaceholder.typicode.com/users');   
    };
    
    KlantenAPI.show = function(data){
        return  $http.get("http://jsonplaceholder.typicode.com/users/" + data);
    };
    
    return KlantenAPI;   
});