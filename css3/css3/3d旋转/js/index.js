// 实现功能，即判断鼠标移入还有移除的方向
// 通过移入和移出的方向来增加属性选择器
var oLi = Array.prototype.slice.call(document.getElementsByTagName('li'));

oLi.forEach(function(ele,index){
    ele.addEventListener('mouseenter',function(e){
        addClass(this,e,'in');
    })
    ele.addEventListener('mouseleave',function(e){
        addClass(this,e,'out')
    })
})

function addClass(ele,e,state){
    // 获取到坐标轴的位置
    var x = e.offsetX - ele.offsetWidth/2;
    var y = e.offsetY - ele.offsetHeight/2;

    // 通过一系列处理得到0 1 2 3 分别表示鼠标移入移出的方向
    var d = (Math.round((Math.atan2(y,x)*(180/Math.PI) + 180) / 90) + 3) % 4;
    var direction;

    switch(d){
        case 0:
            direction = '-top';
            break;
        case 1:
            direction = '-right';
            break;
        case 2:
            direction = '-bottom';
            break;
        case 3:
            direction = '-left';
            break;
    }
    ele.className = state + direction;
}