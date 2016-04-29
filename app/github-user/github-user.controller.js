(function() {
	"use strict";

	angular
		.module('git.users-app')
		.controller('GithubUserController', GithubUserController);

	function GithubUserController($scope, $location, GithubService) {
		
        $scope.searchUser = GithubService.searchUser;
        $scope.users = GithubService.users;
        $scope.user = GithubService.user;

        /* //Solution without Service:

        $scope.SERVER_URL = 'http://api.github.com';
        $scope.users = [{
            login: 'AndreKuzminsky',
            name: 'Andre',
            avatar_url: 'https://avatars.githubusercontent.com/u/17429505?v=3',
            location: 'Lviv',
            public_repos: 11
        }];


        $scope.searchUser = function(name) {
            $http({
                method: 'GET',
                url: $scope.SERVER_URL + '/users/' + name
            }).then(function(response) {
                var user = response.data;
                $scope.users.push({
                    login: user.login,
                    name: user.name,
                    avatar_url: user.avatar_url,
                    location: user.location,
                    public_repos: user.public_repos
                });
              })
              .catch(function() {
                    $location.path('/not-found');
              })

        }*/   
    }
})();