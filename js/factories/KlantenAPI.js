app.factory("KlantenAPI", function($http){

    var KlantenAPI = {};
    
    KlantenAPI.index = function(){
        return $http.get('http://jsonplaceholder.typicode.com/users');   
    };
    
    return KlantenAPI;
//    var AdminAPI = {};
//    
//    AdminAPI.index = function(){
//        
//        return  $http.get("/api/v1/member");
//    }
//    
//    AdminAPI.show = function(data){
//        
//        return  $http.get("/api/v1/member/" + data);
//    };
//    
//    AdminAPI.delete = function(id){
//        
//        /*return $http.delete("/api/v1/portfolio/" + id.portfolios.id, id); 
//        return $http.delete("/api/v1/todo/" + id.todos.id, id); 
//        return $http.delete("/api/v1/calendar/" + id.calendars.id, id);*/
//        return $http.delete("/api/v1/member/" + id.id, id);
//    };
//    
//    AdminAPI.deleteEvents = function(id){
//        
//        return $http.delete("/api/v1/calendar/" + id.calendars.id);  
//    };
//    
//    return AdminAPI;
//    
});