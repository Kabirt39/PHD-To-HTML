jQuery(function($){

    
    (function() {

            $(window).on('scroll', function() {
                    /*
                    =========================================================================================
                    1. NAVBAR 
                    =========================================================================================
                    */

                    if ($(window).scrollTop() > 80) {
                        $(".header-top").addClass("ds_padding");
                    } else {
                        $(".header-top").removeClass("ds_padding");
                    }
                              
            });

        }());
     /*=========================================================================================
        2. MEGA MENU
        =========================================================================================
        */
        $(".page2 > li >a").on('click', function() {
            $(this).parent().addClass("active");
            $(".page2 > li >a").not(this).parent().removeClass("active");
            var TargetId = $(this).attr('href');
            $('html, body').animate({
                scrollTop: $(TargetId).offset().top - 50
            }, 3000, 'swing');
            return false;
        });
     /*
        =========================================================================================
        3.  WOW
        =========================================================================================
        */    
        var wow = new WOW(
          {
            boxClass:     'wow',     
            animateClass: 'animated',
            offset:       0,        
            mobile:       true,     
            live:         true,
            callback:     function(box) {
            },
            scrollContainer: null
          }
        );
        wow.init();
});
