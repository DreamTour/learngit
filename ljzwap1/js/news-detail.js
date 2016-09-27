(function($) {
    $(document).ready(function() {

        //分享到
        $('.shareTo-btn').tap(function(){
            $('.shareTo-wrap').addClass('shareTo-current');
            $('.shareTo').addClass('shareTo-current');
        });
        $('.shareTo .close').tap(function(){
            $('.shareTo-wrap').removeClass('shareTo-current');
            $('.shareTo').removeClass('shareTo-current');
        });

    });
})(jQuery);
