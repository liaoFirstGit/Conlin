$(document).ready(function () {
    $(".i-project-con-div").hover(
        function () {
            $(this).addClass("hover");
        },
        function () {
            $(this).removeClass("hover");
        }
    );
});
//轮播移动端滑动
$(function(){
    var myElement= document.getElementById('carousel-example-generic')
    var hm=new Hammer(myElement);
    hm.on("swipeleft",function(){
        $('#carousel-example-generic').carousel('next')
    })
    hm.on("swiperight",function(){
        $('#carousel-example-generic').carousel('prev')
    })
})
