angular.module('gostilnaassignment').directive('tmParallax', function() {
    return {
        restrict: 'A',
        scope: {
            tmImagePath:'@'
        },
        link: function(scope, element, attrs, fn) {

            //$('.parallax-window').parallax('destroy');

            $(element).parallax({imageSrc: scope.tmImagePath});

        }
    };
});
