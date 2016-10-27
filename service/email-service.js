angular.module('gostilnaassignment').factory('emailService',function($http) {

    var emailService = {
        sendMail:function(reservation){

            return $http.post('http://localhost:3050/email', reservation);

        }
    };

    return emailService;
});