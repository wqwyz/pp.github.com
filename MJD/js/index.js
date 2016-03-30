window.onload=function() {
    search();
    scroll();
    skcount();
};
//搜索栏
var search=function() {
    var bannerDom=document.getElementsByClassName("jd-banner")[0];
    var height=bannerDom.offsetHeight;
    var headerDom=document.getElementsByClassName("jd-header-box")[0];
    window.onscroll=function() {
        var top=document.body.scrollTop;
        var opt=0;
        if(top<=height) {
            opt=top/height*0.85;
        } else {
            opt=0.85;
        }
        headerDom.style.background="rgba(201, 21, 35, "+opt+")";
    }
};
//轮播图 xc
var scroll=function() {
    var banner=document.getElementsByClassName("jd-banner")[0];
    var width=banner.offsetWidth;
    var imgBox=banner.getElementsByTagName("ul")[0];
    var point=banner.getElementsByTagName("ul")[1].children;
    var addTransition=function() {
        imgBox.style.transition="all .2s ease";
        imgBox.style.webkitTransition="all .2s ease";
    };
    var removeTransition=function() {
        imgBox.style.transition="none";
        imgBox.style.webkitTransition="none";
    };
    var changeTranslateX=function(x) {
        imgBox.style.transform="translateX("+x+"px)";
        imgBox.style.webkitTransform="translateX("+x+"px)";
    };
    var index= 1,
        timer=null;
    timer=setInterval(fn,1000);
    function fn() {
        index++;
        addTransition();
        changeTranslateX(-index*width);
    }
    function nf(x) {
        imgBox.addEventListener(x, function() {
            if(index>=9) {
                index=1;
                removeTransition();
                changeTranslateX(-index*width);
            } else if(index<=0) {
                index=8;
                removeTransition();
                changeTranslateX(-index*width);
            };
            setPoint();
        },false);
    };
    nf("transitionEnd");
    nf("webkitTransitionEnd");
    var setPoint=function() {
        for(var i=0; i<point.length; i++) {
            point[i].className="";
        };
        var pointIndex=index;
        if(index>=9) {
            pointIndex=1;
        } else if(index<=0) {
            pointIndex=8
        }
        point[pointIndex-1].className="now";
    }
    var startX= 0,
        endX= 0,
        distanceX=0;
    imgBox.addEventListener("touchstart", function(e) {
        clearInterval(timer);
        startX= e.touches[0].clientX;
    },false);
    imgBox.addEventListener("touchmove", function(e) {
        endX= e.touches[0].clientX;
        distanceX=startX-endX;
        removeTransition();
        changeTranslateX(-index*width-distanceX);
    },false);
    imgBox.addEventListener("touchend", function(e) {
        if(Math.abs(distanceX)>1/3*width && endX!=0) {
            if(distanceX>0) {
                index++;
            } else if(distanceX<0) {
                index--;
            }
        }
        addTransition();
        changeTranslateX(-index*width);
        clearInterval(timer);
        timer=setInterval(fn,1000);
        startX=0;
        endX=0;
        distanceX=0;
    },false);
};
//秒杀倒计时
var skcount=function() {
    var spans=document.getElementsByClassName("sk-time")[0].children;
    var endTime=new Date("2016/1/8 23:59:59").getTime();
    var timer=null;
    timer=setInterval(function() {
        var date=new Date();
        var nowTime=date.getTime();
        var time=(endTime-nowTime)/1000;
        var s=parseInt(time%60);
        var m=parseInt(time/60%60);
        var h=parseInt(time/3600%24);
        spans[0].innerHTML=h>=10?parseInt(h/10):0;
        spans[1].innerHTML=h%10;
        spans[3].innerHTML=m>=10?parseInt(m/10):0;
        spans[4].innerHTML=m%10;
        spans[6].innerHTML=s>=10?parseInt(s/10):0;
        spans[7].innerHTML=s%10;
    },1000)
};













