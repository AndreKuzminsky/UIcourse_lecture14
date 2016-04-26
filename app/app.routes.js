(function () {
    "use strict";

    angular.module('git.users-app')
        .config(routes);

    function routes($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'main-page/main-page.tpl.html',
                controller: 'GithubUserController'
            })
            .when('/not-found', {
                templateUrl: 'not-found/not-found.tpl.html',
                controller: 'NotFoundController'
            })
            .otherwise({
                templateUrl: 'not-found/not-found.tpl.html',
                controller: 'NotFoundController'
            });
    }
})();