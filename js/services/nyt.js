app.factory('nyt', ['$http', function($http) {
    return $http.get('https://api.nytimes.com/svc/topstories/v2/technology.json', 
        {params: {'api-key': 'b133c6bb5eb94acfa681cc31799dcd6d'}})

        .success(function(data) {
            return data
        })

        .error(function(data) {
            return err
        })
}])