window.pp={};
pp.tap = function(obj,callback){
    if(typeof  obj != 'object') return false;

    var startTime = 0,
        isMove = false;/*来标记我们是否移动过*/
    obj.addEventListener('touchstart',function(){
        /*取当前时间*/
        startTime = Date.now();
    },false);
    obj.addEventListener('touchmove',function(){
        isMove = true;
    },false);
    window.addEventListener('touchend',function(e){
        /*响应时间小于200ms
         * 并且没有滑动过
         * */
        /*模仿的tap事件*/
        if(Date.now()-startTime < 200 && isMove == false){
            callback && callback(e);
        }
        startTime=0;
        isMove=false;
    },false);
}