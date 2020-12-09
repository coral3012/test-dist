//导航下拉菜单
// $('.nav_item').hover(
//     function(){
//         $(this).find('.dropdown_menu').stop().slideDown(200);
//     },
//     function(){
//         $(this).find('.dropdown_menu').stop().slideUp(200);
//     }
// );
// $(function(){
//     $('.head_nav_box .nav_item').mouseover(function(){
//         $('.head_nav_box .nav_item').removeClass('nav_selected');//去掉类名
//         $(this).addClass('nav_selected');//add加上类
//     });
// });
$('.head_nav_box').children().hover(function(){
    $(this).children('.nav_name').css({"color":"#3197F9","font-weight":"bold"});
    //$(this).children(".nav_item .dropdown_menu").show();
    $(this).find('.nav_item .dropdown_menu').stop().slideDown(200);
},function(){
    $(this).children('.nav_name').css({"color":"#333","font-weight":"inherit"});
    //$(this).children(".nav_item .dropdown_menu").hide();
    $(this).find('.nav_item .dropdown_menu').stop().slideUp(200);
});


$(function(){
    // 头像下拉菜单
    $(".user_box").hover(function(){
        $(".user_box_list").stop().fadeIn("fast");
    },function(){
        $(".user_box_list").stop().fadeOut("fast");
    });

    // 消息下拉菜单
    $(".news_box").hover(function(){
        $(".news_box_list").stop().fadeIn("fast");
    },function(){
        $(".news_box_list").stop().fadeOut("fast");
    });

    // 消息内容切换
    $('.news_tab .news_tab_a').click(function(){
        $('.news_tab .news_tab_a').removeClass('news_tab_selected');//去掉类名
        $(this).addClass('news_tab_selected');//add加上类
        var sindex=$('.news_tab .news_tab_a').index(this)//获取下标
        $('.news_tab_con').removeClass('news_con_selected');
        $(".news_tab_con:eq("+sindex+")").addClass('news_con_selected');
    });

});


