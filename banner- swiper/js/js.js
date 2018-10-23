$(function () {
    var timer=null;
    var pic_index=0;

    showTime();
    $(".banner ol span").mouseover(function () {
        $(this).addClass("active").siblings().removeClass("active");
        pic_index=$(this).index();
        $(".banner ul li").eq(pic_index).show().siblings().hide();
    })

    $(".prev").click(function () {
        if(pic_index==0)
        {
            pic_index=5;
        }
        pic_index--;
        $(".banner ul li").eq(pic_index).show().siblings().hide();
        $(".banner ol span").eq(pic_index).addClass("active").siblings().removeClass("active");
    })
    $(".next").click(function () {
        pic_index++;
        if(pic_index==5)
        {
            pic_index=0;
        }

        $(".banner ul li").eq(pic_index).show().siblings().hide();
        $(".banner ol span").eq(pic_index).addClass("active").siblings().removeClass("active");
    })
    $(".banner").hover(function () {
        clearInterval(timer)
    },function () {
        showTime();
    })

    function showTime() {
        timer=setInterval(function () {
            $(".banner ul li").eq(pic_index).show().siblings().hide();
            $(".banner ol span").eq(pic_index).addClass("active").siblings().removeClass("active");
            pic_index++;
            if(pic_index==5){
                pic_index=0;
            }
        },3000)
    }
})