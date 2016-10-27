angular.module('gostilnaassignment').controller('ChooseLanguageCtrl',function($state, $scope, $rootScope, dataService){

    $scope.setLanguage = function(lang){

        $scope.text = dataService[lang];

        $rootScope.lang = dataService[lang];

        $state.go('Gostilna-Strunjan.home');

    };

});
