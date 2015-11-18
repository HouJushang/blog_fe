/**
 * Created by Laggo on 11/4/15.
 */
var app = angular.module('app', ['ui.router']);
app.run(['$rootScope', function($rootScope) {
    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
        $rootScope.title = toState.title;
    });
}]);