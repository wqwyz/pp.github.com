window.onload=function() {
    leftCategory();
};
var leftCategory=function() {
    var parent=document.getElementsByClassName("jd-category-left")[0];
    var child=document.getElementsByClassName("jd-category-left-con")[0];
    var parentHeight=parent.offsetHeight;
    var childHeight=child.offsetHeight;
    var maxY= 0,
        minY=-(childHeight-parentHeight),
        distance=150;
    var addTransition=function() {
        child.style.transition="all .2s ease";
        child.style.webkitTransition="all .2s ease";
    };
    var removeTransition=function() {
        child.style.transition="none";
        child.style.webkitTransition="none";
    };
    var changeTranslateY=function(x) {
        child.style.transform="translateY("+x+"px)";
        child.style.webkitTransform="translateY("+x+"px)";
    };
    var startY= 0,
        endY= 0,
        distanceY= 0,
        currY=0;
    child.addEventListener("touchstart", function(e) {
        startY= e.touches[0].clientY;
    },false);
    child.addEventListener("touchmove", function(e) {
        endY= e.touches[0].clientY;
        distanceY=startY-endY;
        if((currY-distanceY)<(maxY+distance)&&(currY-distanceY)>(minY-distance)) {
            removeTransition();
            changeTranslateY(currY-distanceY);
        }
    },false);
    child.addEventListener("touchend", function(e) {
        if((currY-distanceY)>maxY) {
            currY=maxY;
            addTransition();
            changeTranslateY(currY);
        } else if((currY-distanceY)<minY) {
            currY=minY;
            addTransition();
            changeTranslateY(currY);
        } else {
            currY=currY-distanceY;
        }
        startY=0;
        endY=0;
        distanceY=0;
    },false);
    var liList=child.children;
    pp.tap(child, function(e) {
        for(var i=0; i<liList.length; i++) {
            liList[i].className="";
            liList[i].index=i;
        }
        var li= e.target;
        li.className="now";
        var translateY=-li.index*50;
        if(translateY>minY) {
            addTransition();
            changeTranslateY(translateY);
            currY=translateY;
        } else {
            changeTranslateY(minY);
            currY=minY;
        }

    });
}














