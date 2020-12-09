//最新下载滚动
$(".picMarquee-top").slide({mainCell:".bd ul",autoPlay:true,effect:"topMarquee",vis:5,interTime:40,trigger:"click"});
$(document).ready(function(){
    // fr_a_box
    $(".hyh_switch_a").bind("click",function(e){
        var nindex = $(".fr_a_box").index($(".fr_a_box:visible").next(".fr_a_box"));
        if(nindex == -1){
            $(".fr_a_box:visible").toggle();
            $(".fr_a_box").eq(0).toggle();
        }else{
            $(".fr_a_box:visible").toggle().next(".fr_a_box").toggle();
        }
    });
    // fr_b_box
    $(".hyh_switch_b").bind("click",function(e){
        var nindex = $(".fr_b_box").index($(".fr_b_box:visible").next(".fr_b_box"));
        if(nindex == -1){
            $(".fr_b_box:visible").toggle();
            $(".fr_b_box").eq(0).toggle();
        }else{
            $(".fr_b_box:visible").toggle().next(".fr_b_box").toggle();
        }
    });
    // fr_c_box
    $(".hyh_switch_c").bind("click",function(e){
        var nindex = $(".fr_c_box").index($(".fr_c_box:visible").next(".fr_c_box"));
        if(nindex == -1){
            $(".fr_c_box:visible").toggle();
            $(".fr_c_box").eq(0).toggle();
        }else{
            $(".fr_c_box:visible").toggle().next(".fr_c_box").toggle();
        }
    });
    // fr_d_box
    $(".hyh_switch_d").bind("click",function(e){
        var nindex = $(".fr_d_box").index($(".fr_d_box:visible").next(".fr_d_box"));
        if(nindex == -1){
            $(".fr_d_box:visible").toggle();
            $(".fr_d_box").eq(0).toggle();
        }else{
            $(".fr_d_box:visible").toggle().next(".fr_d_box").toggle();
        }
    });
    // fr_e_box
    $(".hyh_switch_e").bind("click",function(e){
        var nindex = $(".fr_e_box").index($(".fr_e_box:visible").next(".fr_e_box"));
        if(nindex == -1){
            $(".fr_e_box:visible").toggle();
            $(".fr_e_box").eq(0).toggle();
        }else{
            $(".fr_e_box:visible").toggle().next(".fr_e_box").toggle();
        }
    });
    // fr_f_box
    $(".hyh_switch_f").bind("click",function(e){
        var nindex = $(".fr_f_box").index($(".fr_f_box:visible").next(".fr_f_box"));
        if(nindex == -1){
            $(".fr_f_box:visible").toggle();
            $(".fr_f_box").eq(0).toggle();
        }else{
            $(".fr_f_box:visible").toggle().next(".fr_f_box").toggle();
        }
    });

    // fr_g_box
    $(".hyh_switch_g").bind("click",function(e){
        var nindex = $(".fr_g_box").index($(".fr_g_box:visible").next(".fr_g_box"));
        if(nindex == -1){
            $(".fr_g_box:visible").toggle();
            $(".fr_g_box").eq(0).toggle();
        }else{
            $(".fr_g_box:visible").toggle().next(".fr_g_box").toggle();
        }
    });

});
