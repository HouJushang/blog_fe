/**
 * Created by Laggo on 15/11/7.
 */
app.controller('DetailController',['$rootScope','$scope','$stateParams','$http','BASE_URL','$timeout',function($rootScope,$scope,$stateParams,$http,BASE_URL,$timeout){
    $rootScope.nav = true;
    console.log($stateParams.id);
    $http({
        method: 'POST',
        url: BASE_URL+'?json=get_post&post_id='+$stateParams.id,
    }).success(function (data, status, headers, config) {
        $scope.detail = data.post;
        $timeout(function() {
            prettyPrint();
        }, 0);
    }).error(function (data, status, headers, config) {

    })
}])
