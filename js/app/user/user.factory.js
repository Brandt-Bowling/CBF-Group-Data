'use strict';

angular.module('SocialSkillsDC')
    .factory('user', ['localConfig', function(localConfig) {
        var _allUsers;
        var _currentUser;
        if (!_allUsers) {
            localConfig.then(function (response) {
                console.log(response);
                _allUsers = response.users;
            }).catch(function(reason) {
                console.error(reason);
            });
        }

        var _getCurrentUser = function() {
            return _currentUser;
        };

        var _authenticateUser = function(signin) {
            for (var i = 0; i < allUsers.length; i++) {
                if (_allUsers[i].username === signin.username && _allUsers[i].test_password === signin.password) {
                    _currentUser = _allUsers[i];
                    _currentUser[isAuthenticated] = true;
                    return true;
                }
            }

            return false;
        };

        return {
            getCurrentUser: _getCurrentUser,
            authenticateUser: _authenticateUser
        }
    }])
;