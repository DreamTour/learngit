(function($) {
    $(document).ready(function() {

        //进入主页大图
        if(localStorage.getItem('flag')){

        }else {
            localStorage.setItem('flag',1);
            $('.big-img').show().tap(function () {
                $(this).hide();
            });
        }

    });
})(jQuery);

