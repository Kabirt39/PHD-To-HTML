$(document).ready(function(){

        $(window).on('scroll', function() {
                if ($(window).scrollTop() > 30) {
                    $(".navbar-area").addClass("ds_padding");
                } else {
                    $(".navbar-area").removeClass("ds_padding");
                }
        });

        /*
        =========================================================================================
        10. SERVICE SLIDER  
        =========================================================================================
        */ 
        var testimonial_slider = $("#testimonial_slider");
        testimonial_slider.owlCarousel({
            loop: true,
            margin: 30,
            nav: false,
            responsive: {
                0: {
                    items: 1
                },
                400: {
                    items: 1
                },
                768: {
                    items: 2
                },
                1200: {
                    items: 3
                }
            }
        });

        $('.grid').masonry({
          // options
          itemSelector: '.grid-item'
        });
});