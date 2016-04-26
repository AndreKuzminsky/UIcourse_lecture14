(function() {
    "use strict";

    angular.module('git.users-app')
        .factory('GithubService', GithubService);

    function GithubService($http) {
        var SERVER_URL = 'http://api.github.com';
        var users = [{
            login: 'AndreKuzminsky',
            name: 'Andre',
            avatar_url: 'https://avatars.githubusercontent.com/u/17429505?v=3',
            location: 'Lviv',
            public_repos: 11
        }];

        return {
            getUser: getUser,
            users: users
        };

        //
        // Public methods
        //

        function getUser(username) {
            return $http({
                method: 'GET',
                url: SERVER_URL + '/users/' + username
            });
        }

        /*function addUser(name, shop, quantity) {
            userList.push({
                login: '',
                name: '',
                avatar_url: '',
                location: '',
                public_repos: ''
            });
        }*/
    }
}());
