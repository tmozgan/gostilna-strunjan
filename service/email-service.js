angular.module('gostilnaassignment').factory('emailService',function($http) {

    var emailService = {
        sendMail:function(reservation){

            return $http.post('http://46.101.228.43:3050/email', reservation);

        }
    };

    return emailService;
});
