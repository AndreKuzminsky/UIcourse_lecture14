(function() {
	"use strict";

	angular
		.module('git.users-app')
		.controller('GithubUserController', GithubUserController);

	function GithubUserController($scope, $routeParams, $location, GithubService) {
		$scope.users = GithubService.users;
		$scope.username = username;
		$scope.getUser = getUser;
        $scope.user = null;

		activate();

        //
        // Private methods
        //

        function activate() {
            GithubDataService.getUser($routeParams.username)
                .then(function (response) {
                    $scope.user = response.data;
                })
                .then(function() {
                	$scope.users.push({
                	login: 'user.login',
                	name: 'user.name',
                	avatar_url: 'user.avatar_url',
                	location: 'user.location',
                	public_repos: 'user.public_repos'
            		});
                })
                .catch(function () {
                    $location.path('/not-found');
                });
        }
    }
})();