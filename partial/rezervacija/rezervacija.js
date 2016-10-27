angular.module('gostilnaassignment').controller('RezervacijaCtrl',function($scope, emailService){

    var picker = new Pikaday({ field: $('#datepicker')[0] });
    $scope.sending = false;

    $scope.sendMail = function(){

        $scope.sending = true;

        emailService.sendMail($scope.reservation)
          .then(function(){

              console.log('Email sent');
              $scope.sending = false;
              $scope.sent = true;

          });

    };

});
