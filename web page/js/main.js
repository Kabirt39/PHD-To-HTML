 
$(document).ready(function(){
    $('.portfolio_img_show').mixItUp();
    $('.zoom').magnify();
    $(".page2 > li >a").on('click', function() {
            $(this).parent().addClass("active");
            $(".page2 > li >a").not(this).parent().removeClass("active");
            var TargetId = $(this).attr('href');
            $('html, body').animate({
                scrollTop: $(TargetId).offset().top - 50
            }, 1000, 'swing');
            return false;
        });
        /*active class add */
    $(".page2").each(function() {
        var bb = $(this).attr("id");
        var hei = $(this).outerHeight();
        var grttop = $(this).offset().top - 80;
        if ($(window).scrollTop() > grttop - 1 && $(window).scrollTop() < grttop + hei - 1) {
            var uu = $(".page2 > li >a[href='#" + bb + "']").parent().addClass("active");
        } else {
            var uu = $(".page2 > li >a[href='#" + bb + "']").parent().removeClass("active");
        }
    });
});