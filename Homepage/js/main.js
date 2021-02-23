
$('.header-bottom-inner').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText:['<i class="fa fa-long-arrow-left" aria-hidden="true"></i>','<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

$('.protfolio-bottom-inner-write').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    navText:['<i class="fa fa-long-arrow-left" aria-hidden="true"></i>','<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});

(function() {

            $(window).on('scroll', function() {
                    /*
                    =========================================================================================
                    2. NAVBAR 
                    =========================================================================================
                    */

                    if ($(window).scrollTop() > 40) {
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
        $(".page > li >a").on('click', function() {
            $(this).parent().addClass("active");
            $(".page > li >a").not(this).parent().removeClass("active");
            var TargetId = $(this).attr('href');
            $('html, body').animate({
                scrollTop: $(TargetId).offset().top - 50
            }, 2000, 'swing');
            return false;
        });


