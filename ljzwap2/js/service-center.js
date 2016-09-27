(function($) {
    $(document).ready(function() {
        $('.shareTo-btn').tap(function(){
            $('.shareTo-wrap').addClass('shareTo-current');
            $('.shareTo').addClass('shareTo-current');
        });
        $('.shareTo .close').tap(function(){
            $('.shareTo-wrap').removeClass('shareTo-current');
            $('.shareTo').removeClass('shareTo-current');
        })
    })
})(jQuery);
