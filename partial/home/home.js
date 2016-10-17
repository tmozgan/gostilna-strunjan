angular.module('gostilnaassignment').controller('HomeCtrl',function($scope){



    var isHidden = false;

    $(document).on('scroll', function(event){

        var top = $(document).scrollTop();

        // height of parallax window  = 400
        // title is at approximately 200
        // top is the value of current scroll offset

        console.log(top);

        var myRatio = 1-top/400;


        if(myRatio >= 0){
            $('.main-title').css({opacity:myRatio});
            $('.top-title').css({opacity:myRatio});
            $('.line').css({opacity:myRatio, scale:myRatio});

        }

    });

    $(window).on('scroll', function(){

        var scrollTop = $(window).scrollTop();

        if(scrollTop > 600){

            $('.toggle-nav').css({
                'background-color':'#fff',
                color:'#333',

            });

        }else{

            $('.toggle-nav').css({
                'background':'none',
                color:'#fff'
            });
        }
    });



    $("div[class='button-top']").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });


    $(window).on('scroll', function(){

        var scrollTop = $(window).scrollTop();

        if(scrollTop > 1850){

            $('.button-top').css({
                'margin-top':'-145px',
                transition:'all 0.5s',
                opacity: '1'

            });

        }else{

            $('.button-top').css({
                'margin-top':'-90px',
                zIndex: '-10',
                opacity: '0'

            });
        }
    });


    jQuery(document).ready(function() {
        jQuery('.toggle-nav').click(function(e) {
            jQuery(this).toggleClass('active');
            jQuery('.menu ul').toggleClass('active');

            e.preventDefault();
        });
    });






});
