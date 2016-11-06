angular.module('gostilnaassignment').directive('tmArrow', function() {
    return {
        restrict: 'A',
        replace: true,
        scope: {

        },
        templateUrl: 'directive/tm-arrow/tm-arrow.html',
        link: function(scope, element, attrs, fn) {

            $(element).on('click', function(){

                $("html, body").animate({ scrollTop: 0 }, "slow");
                return false;

            });


            $(window).on('scroll', function(){

                var scrollTop = $(window).scrollTop();

                if(scrollTop > 1850){

                    $('.button-top').css({
                        'margin-top':'-135px',
                        'transition':'all 0.5s',
                        'opacity': '1',
                        

                    });

                }else{

                    $('.button-top').css({
                        'margin-top':'-90px',
                        'zIndex': '-10',
                        'opacity': '0'

                    });
                }
            });
        }
    };
});
