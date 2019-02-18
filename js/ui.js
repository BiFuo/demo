/**
 * Created by Administrator on 2019/1/10.
 */
//ui-search定义
$.fn.UiSearh= function () {
    var ui=$(this);
    $(".ui-search-selected",ui).on("click", function () {
        $(".ui-search-select-list").show();
        return false;
});
    $(".ui-search-select-list a",ui).on("click", function () {
        $(".ui-search-selected",ui).text($(this).text());
        $(".ui-search-select-list").hide();
        return false;
    });
    $("body").on("click", function () {
        $(".ui-search-select-list").hide();
    });
    $(".ui-search-select-list").hide();
};

//ui-tab页面
$.fn.UiTab= function (header,content,focus_prefix) {
    var ui=$(this);
    var tabs=$(header,ui);
    var cons=$(content,ui);
    var focus_prefix=focus_prefix || '';

    tabs.on("click", function () {
        var index=$(this).index();
        tabs.removeClass(focus_prefix+"item_focus").eq(index).addClass(focus_prefix+"item_focus");
        cons.hide().eq(index).show();
        return false;
    })
};
//ui-casading
/*$.fn.UiCascading= function () {
    var ui=$(this);
    var selects=$("select",ui);

    selects.on("change", function () {
        var val=$(this.val();
        var index=selects.val(this);

        //触发下一个select的更新
        //触发一下个之后的select的初始化
        iu.find("select:get('+(index+1)+')")
            .attr("data-where","")
            .triggerHandler("reloadOptions");
    })
           .on("reloadOptions", function () {
            var method=$(this).attr("data-search");
            var data=AjaxRemoteGetData[method]();
        });
            selects.eq(0).triggerHandler("reloadOptions");
};
*/
//页面的脚本逻辑

$(document).ready(function () {//隐藏#back-footer
    $("#back-footer").hide();

$(function () {
    $(".ui-search").UiSearh();
    $(".content-tab").UiTab(".caption>.item",".block>.item");
    $(".content-tab .block .item").UiTab(".block-caption>a",".block-content>.block-wrap","block-caption-");

    /*$(".ui-cascading").UiCascading();*/

    //点击返回页面顶部
    //当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失
    $(window).on("scroll", function () {
        if($(window).scrollTop()>80){
            $("#back-footer").fadeIn(1000);
        }else{
            $("#back-footer").fadeOut(1000);
        }
    });

    //点击时，跳回顶部
    $("#back-footer").on("click",function () {
        $("body,html").animate({
            scrollTop:0
        },500);
        return false;
    });
});
});
