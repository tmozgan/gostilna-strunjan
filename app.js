angular.module('gostilnaassignment', ['ui.bootstrap','ui.router','ngAnimate', 'ngMap']);

angular.module('gostilnaassignment').config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('Gostilna-Strunjan', {
        abstract:true,
        views:{
            main:{
                templateUrl:'partial/main/main.html',
                controller:'MainCtrl'
            },
            sidebar:{
                templateUrl:'partial/sidebar/sidebar.html',
                controller:'SidebarCtrl'
            }
        }
    });

    $stateProvider.state('Gostilna-Strunjan.home', {
        url: '/home',
        views:{
            content:{
                templateUrl: 'partial/home/home.html',
                controller:'HomeCtrl'
            }
        }

    });
    $stateProvider.state('Gostilna-Strunjan.menu', {
        url: '/menu',
        views:{
            content:{
                templateUrl: 'partial/menu/menu.html',
                controller:'MenuCtrl'
            }
        }

    });
    $stateProvider.state('Gostilna-Strunjan.rezervacija', {
        url: '/rezervacija',
        views:{
           content:{
               templateUrl: 'partial/rezervacija/rezervacija.html',
               controller:'RezervacijaCtrl'
           }
        }
    });
    $stateProvider.state('Gostilna-Strunjan.kontakt', {
        url: '/kontakt',
        views:{
            content:{
                templateUrl: 'partial/kontakt/kontakt.html',
                controller:'KontaktCtrl'
            }
        }
    });

    $stateProvider.state('Gostilna-Strunjan.choose-language', {
        url: '/choose-language',
        views:{
            content:{
                templateUrl: 'partial/choose-language/choose-language.html',
                controller:'ChooseLanguageCtrl'
            }
        }
    });
    /* Add New States Above */
    $urlRouterProvider.otherwise('/choose-language');

});

angular.module('gostilnaassignment').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});

