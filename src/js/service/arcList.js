/**
 * Created by Laggo on 15/11/6.
 */
app.factory('arcList', ['$http', '$q', 'BASE_URL' , function ($http, $q , BASE_URL) {
    var deferred = $q.defer();
    $http({
        method: 'POST',
        url: BASE_URL+'?json=get_recent_posts',
        data: {
            page: 1
        }
    }).success(function (data, status, headers, config) {
        deferred.resolve(data, status, headers, config);
    }).error(function (data, status, headers, config) {

    })
    return deferred.promise;
}])
