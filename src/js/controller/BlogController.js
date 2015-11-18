/**
 * Created by Laggo on 15/11/6.
 */
app.controller('BlogController', ['$rootScope', '$scope', '$http', 'BASE_URL','$window',function ($rootScope, $scope, $http, BASE_URL,$window) {
    $rootScope.nav = true;
    $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
    $scope.blogList = function (e) {
        var req = {
            method: 'POST',
            url: BASE_URL + '?json=get_recent_posts',
            data: "page=" + e
        }
        $http(req)
            .success(function (data, status, headers, config) {
                $scope.list = data.posts;
                console.log($scope.list);
                $scope.conut = data.pages;
                $scope.page = e;
                $window.scrollTo(0,0);
            })
            .error(function (data, status, headers, config) {

            })
    }
    $scope.blogList(1);
}])