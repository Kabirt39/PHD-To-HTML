
jQuery(document).ready(function(){
    $('.contant_header').parallax({imageSrc: './images/contant_header_bg.jpg'});            
    $('.contant_banner').parallax({imageSrc: './images/contant_banner_bg.jpg'});        
});

        (function() {

            $(window).on('scroll', function() {
                    /*
                    =========================================================================================
                    2. NAVBAR 
                    =========================================================================================
                    */

                    if ($(window).scrollTop() > 30) {
                        $(".header_navbar").addClass("ds_padding");
                    } else {
                        $(".header_navbar").removeClass("ds_padding");
                    }
                                   
            });

        }());
 $( function() {
    $( "#tabs" ).tabs();
  } );