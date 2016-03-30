$(function() {
    $(window).on("resize", resize).trigger('resize');
    function resize() {
        //轮播图
        var windowWidth=$(window).width();
        var isSmallScreen=windowWidth<768;
        $(".carousel-inner>.item").each(function(index,ele) {
            var $ele=$(ele);
            var bgc=$ele.data(isSmallScreen? 'image-small' : 'image-large');
            var alt=$ele.data('image-alt');
            $ele.html('<img src="' + bgc + '" alt="' + alt + '" />');
            $ele.css('backgroundImage', 'url("' + bgc + '")');
        });

        //产品
        var ul=$(".products .scroll>ul");
        var lis=ul.children("li");
        var lisWidth=0;
        lis.each(function(index,ele) {
            lisWidth+=$(ele).width();
        });
        ul.width(lisWidth);
    }
});