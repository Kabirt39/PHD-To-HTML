jQuery(function($) {

        (function() {

            $(window).on('load', function() {

                /*
                =========================================================================================
                1. Spinner 
                =========================================================================================
                */
                $(".outslider_loading").fadeOut("slow");


                /*
                =========================================================================================
                paralax image
                =========================================================================================
                */
                $('.parallax-window').parallax({imageSrc: './images/header-bg.png'});            
                $('.parallax-window2').parallax({imageSrc: './images/quote-bg.png'});            
                $('.parallax-window3').parallax({imageSrc: './images/bringing-bg.png'});            
                $('.parallax-window4').parallax({imageSrc: './images/cristine-bg.png'});            
                $('.parallax-window5').parallax({imageSrc: './images/goal-bg.png'});            
                $('.parallax-window6').parallax({imageSrc: './images/prayer1-bg.png'});            
                $('.parallax-window7').parallax({imageSrc: './images/prayer2-bg.png'});            
                $('.parallax-window8').parallax({imageSrc: './images/prayer3-bg.png'});            
                $('.parallax-window9').parallax({imageSrc: './images/prayer5-bg.png'});            
                $('.parallax-window10').parallax({imageSrc: './images/prayer5-bg.png'});            
                $('.parallax-window11').parallax({imageSrc: './images/prayer6-bg.png'});                       
                $('.parallax-window12').parallax({imageSrc: './images/hand-quote-bg.png'});                       

            });
        }());

        
        (function() {

            $(window).on('scroll', function() {
                    /*
                    =========================================================================================
                    2. NAVBAR 
                    =========================================================================================
                    */

                    if ($(window).scrollTop() > 30) {
                        $(".header-area").addClass("ds_padding");
                    } else {
                        $(".header-area").removeClass("ds_padding");
                    }

                    var offset = $(window).scrollTop();

                    var banner = $('.banner-area').outerHeight();
                    var quote = $('.quote_area').outerHeight();
                    var bringing = $('.bringing_good_area').outerHeight();
                    var christine = $('.christine_area').outerHeight();
                    var goal = $('.goal_area').outerHeight();
                    var all_height = banner + quote + bringing + christine + goal;
                    console.log(all_height);

                    if(offset > all_height){
                        $('.donate_area').addClass('fixed_top_mn');

                    }else{
                        $('.donate_area').removeClass('fixed_top_mn');
                    }
                              
            });

        }());

        $(".scroll").on("click", function (event) {
                event.preventDefault();//the default action of the event will not be triggered
                $("html, body").animate({scrollTop: ($("#" + this.href.split("#")[1]).offset().top-1+"px")}, 600);
            }); 
        /*
        =========================================================================================
        4. MEGA MENU
        =========================================================================================
        */
        $("#menuzord").menuzord();  

            sliderHeight()
            jQuery(window).resize(function(){
                sliderHeight()  
        });
        /*
        =========================================================================================
        5.  BANNER SLIER
        =========================================================================================
        */

        var banner_slider = $("#banner-slider");
        banner_slider.owlCarousel({
            loop: true,
            margin: 0,
            // autoplay:true,
            nav: false,
            dots:false,
            responsive: {
                0: {
                    items: 1
                },
                400: {
                    items: 1
                },
                768: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        });

        /*
        =========================================================================================
        25. wow js
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

         function sliderHeight(){
            var windowHeight=jQuery(window).height();
            jQuery('.banner-area').css({'height':windowHeight+'px'});  
        }  
        $(".prayer_day_content_text").click(function() {
            $(".log-in-up").addClass("open-log-in");
        });
        $(".remove-log-in").click(function() {
            $(".log-in-up").removeClass("open-log-in");
        });


});        