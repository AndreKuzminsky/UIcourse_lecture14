(function() {
    "use strict";

    angular.module('git.users-app')
        .factory('GithubService', GithubService);

    function GithubService($http) {
        var users = [{
            login: 'AndreKuzminsky',
            name: 'Andre',
            avatar_url: 'https://avatars.githubusercontent.com/u/17429505?v=3',
            location: 'Lviv',
            public_repos: 11
        }];
        var user = null;
        return {
            searchUser: searchUser,
            users: users,
            user: user
        };

        //
        // Public methods
        //
        function searchUser(name) {
            var SERVER_URL = 'http://api.github.com';
            return $http({
                    method: 'GET',
                    url: SERVER_URL + '/users/' + name
                }).then(function(response) {
                    user = response.data;
                    users.push({
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
        }
    }
}());
