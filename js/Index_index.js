//导航栏
$('.head_nav_box').children().hover(function(){
    $(this).children('.nav_name').css({"color":"#3197F9","font-weight":"bold"});
    $(this).children(".nav_item .dropdown_menu").show();
},function(){
    $(this).children('.nav_name').css({"color":"#333","font-weight":"inherit"});
    $(this).children(".nav_item .dropdown_menu").hide();
});


//菜单栏的显示
$('.fl_top_menu').children().hover(function(){
    $(this).children('.color_blue').css("color","#3197F9");
    $(this).children(".fl_menu .fl_menu_con").show();
},function(){
    $(this).children('.color_blue').css("color","#333");
    $(this).children(".fl_menu .fl_menu_con").hide();
});

//查询切换内容
$('.inquire_box_tab .tab_linkbg').click(function(){
    $('.inquire_box_tab .tab_linkbg').removeClass('tab_linkbg_a')
    $(this).addClass('tab_linkbg_a')
    var shu=$('.inquire_box_tab .tab_linkbg').index(this)
    $('.tab_con').removeClass('tab_con_show')
    $('.tab_con').eq(shu).addClass('tab_con_show')
});

// 轮播图
var swiper = new Swiper('.slideshow_box', {
    spaceBetween: 30,
    effect: 'fade',
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.slideshow_box_pagination',
        clickable: true,
    },
});

//专业排名
var ary = location.href.split("&");
jQuery(".two_box_fl").slide( { titCell:".hd ul",mainCell:".two_fl_list ul",autoPage:true,
    startFun:function(i){
        jQuery(".two_box_fl .txt li").eq(i).animate({"bottom":0}).siblings().animate({"bottom":-36});
    }
});

//申请推荐
$(function(){
    $('.two_box_nav .nav_item').mouseover(function(){
        $('.two_box_nav .nav_item').removeClass('two_nav_selected');//去掉类名
        $(this).addClass('two_nav_selected');//add加上类
        var sindex=$('.two_box_nav .nav_item').index(this)//获取下标
        $('.two_box_con').removeClass('two_box_selected');
        $(".two_box_con:eq("+sindex+")").addClass('two_box_selected');
    });
});

/*文字滚动*/
(function($){
    $.fn.myScroll = function(options){
        //默认配置
        var defaults = {
            speed:30,  //滚动速度,值越大速度越慢
            rowHeight:33 //每行的高度
        };
        var opts = $.extend({}, defaults, options),intId = [];
        function marquee(obj, step){
            obj.find("ul").animate({
                marginTop: '-=1'
            },0,function(){
                var s = Math.abs(parseInt($(this).css("margin-top")));
                if(s >= step){
                    $(this).find("li").slice(0, 1).appendTo($(this));
                    $(this).css("margin-top", 0);
                }
            });
        }
        this.each(function(i){
            var sh = opts["rowHeight"],speed = opts["speed"],_this = $(this);
            intId[i] = setInterval(function(){
                if(_this.find("ul").height()<=_this.height()){
                    clearInterval(intId[i]);
                }else{
                    marquee(_this, sh);
                }
            }, speed);

            _this.hover(function(){
                clearInterval(intId[i]);
            },function(){
                intId[i] = setInterval(function(){
                    if(_this.find("ul").height()<=_this.height()){
                        clearInterval(intId[i]);
                    }else{
                        marquee(_this, sh);
                    }
                }, speed);
            });
        });
    }
})(jQuery);
/*文字滚动*/

//留德准备
$(function(){
    $('.three_box_nav .nav_item').mouseover(function(){
        $('.three_box_nav .nav_item').removeClass('three_nav_selected');//去掉类名
        $(this).addClass('three_nav_selected');//add加上类
        var sindex=$('.three_box_nav .nav_item').index(this)//获取下标
        $('.three_fr_con').removeClass('three_box_selected');
        $(".three_fr_con:eq("+sindex+")").addClass('three_box_selected');
    });
});

// 留德攻略
var swiper = new Swiper('.four_box_swiper', {
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.four_box_pagination',
        clickable: true,
    },
});


$(function(){
    $('.four_box_nav .nav_item').mouseover(function(){
        $('.four_box_nav .nav_item').removeClass('four_nav_selected');//去掉类名
        $(this).addClass('four_nav_selected');//add加上类
        var sindex=$('.four_box_nav .nav_item').index(this)//获取下标
        $('.box_fr_list').removeClass('four_list_selected');
        $(".box_fr_list:eq("+sindex+")").addClass('four_list_selected');
    });
});

//社区商城
$(function(){
    $('.six_box_nav .nav_item').mouseover(function(){
        $('.six_box_nav .nav_item').removeClass('six_nav_selected');//去掉类名
        $(this).addClass('six_nav_selected');//add加上类
        var sindex=$('.six_box_nav .nav_item').index(this)//获取下标
        $('.section_six_con').removeClass('section_six_selected');
        $(".section_six_con:eq("+sindex+")").addClass('section_six_selected');
    });
});
