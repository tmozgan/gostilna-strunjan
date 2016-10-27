angular.module('gostilnaassignment').controller('ChooseLanguageCtrl',function($scope, dataService){

    $scope.text = dataService.si;

    $scope.setLanguage = function(lang){

        $scope.text = dataService[lang];

    };

});
