var timer = setTimeout(function(){
    $('.wrapper').removeClass('init');
},50);

//设置点击事件，使用class中的增加来实现动画的生成
$('.item').click(function(){
    $(this).addClass('active');
    $('.wrapper').addClass('wrapper-active');
})

// 设置close关闭事件
$('.closer').click(function(e){
    // 在这里要阻止冒泡事件
    e.stopPropagation();
    $('.wrapper').removeClass('wrapper-active');
    $('.item').removeClass('active');
})