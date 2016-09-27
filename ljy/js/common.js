(function($) {
    $(document).ready(function() {
        //顶部购物车
        $('.header_top .shopCart').hover(function() {
            $('.header_top .shopCart_select').show();
        },function() {
            $('.header_top .shopCart_select').hide();
        })

        //顶部导航跳转
        $(".header_nav a").each(function(){
            if( String(window.location).match($(this)[0].href) ){
                $(this).find('li').addClass("navList_li-active");
                return false;
            }
        });

        //管理登录
        $('.manageSignIn_openBtn').click(function() {
            $('.manageSignInWrap').css('display', 'block');
        });
        $('.manageSignIn .head_closeIcon').click(function() {
            $('.manageSignInWrap').css('display', 'none');
        });

        $('.manageSignIn .manageSignIn_head').mousedown(function(event) {
            var isMove = true;
            var nowX = event.pageX - parseInt($('.manageSignIn').css('left'));
            var nowY = event.pageY - parseInt($('.manageSignIn').css('top'));
            $(document).mousemove(function(event) {
                if(isMove) {
                    $('.manageSignIn').css({
                        left: event.pageX - nowX + 'px' ,
                        top: event.pageY - nowY + 'px'
                    })
                }
            }).mouseup(function() {
                isMove = false;
            })
        })


    })
})(jQuery);