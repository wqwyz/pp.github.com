/**
 * Created by Administrator on 2015/12/20.
 */
//top����ʼ
$(function () {
    $(window).scroll(function () {
        var topScroll=$(window).scrollTop();
        if(topScroll>100) {
            $(".viphead").animate({"opacity":.7},200);
        } else {
            $(".viphead").animate({"opacity": 1},100);
        };
    });
});
//top������
//banner��ʱ�����ֿ�ʼ
$(function () {
    var bannerImgs=$(".banner>img");
    var bannerLis=$(".banner li");
    bannerLis.eq(0).css("background-color", "grey");
    bannerImgs[0].style.opacity=1;
    var timer=null,num= 0,flag=true;
    var banner=$(".banner");
    timer=setInterval(autoplay,2000);
    function autoplay() {
        bannerImgs.eq(num).animate({"opacity": 0},"slow");
        ++num>2?num=0:num;
        bannerImgs.eq(num).animate({"opacity": 1},"slow");
        bannerLis.eq(num).css("background-color", "grey").siblings().css("background-color", "#fff");
    }
    banner.on("mouseenter", function () {
        clearInterval(timer);
    });
    banner.on("mouseleave", function () {
        timer=setInterval(autoplay,2000);
    });
    bannerLis.on("mouseenter", function () {
            bannerImgs.eq(num).stop().animate({"opacity": 0},"slow");
            num=$(this).index();
            $(this).css("background-color", "grey").siblings().css("background-color", "#fff");
            bannerImgs.eq(num).stop().animate({"opacity": 1},"slow");
    });
});
//banner��ʱ���������
//�����������ص�������ʼ
//$(function () {
//    $(".goBack>a").on("mouseenter", function () {
//        $(this).animate({"right": "122px"}).siblings().animate({"right": 0});
//    });
//    //$(".goBack").on("mouseleave", function () {
//    //    $(".goBack>a").slideUp();
//    //});
//});
//�����������ص���������
