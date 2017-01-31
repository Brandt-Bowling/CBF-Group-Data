(function() {
    'use strict';

angular
    .module('SocialSkills')
    .service('authService', authService);

  function authService(lock, authManager, $location) {

    function login() {
      lock.show();
    }

    // Set up the logic for when a user authenticates
    // This method is called from app.run.js
    function registerAuthenticationListener() {
      lock.on('authenticated', function (authResult) {
        localStorage.setItem('id_token', authResult.idToken);
        authManager.authenticate();
      });
    }

    function logout() {
      localStorage.removeItem('id_token');
      authManager.unauthenticate();
      $location.path('/home');
    }


    return {
      login: login,
      logout: logout,
      registerAuthenticationListener: registerAuthenticationListener
    }
  }
})();