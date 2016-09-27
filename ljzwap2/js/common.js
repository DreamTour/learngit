(function($) {
    $(document).ready(function() {
        $('.qq-service-btn').click(function(){
            $('.qq-service').addClass('current');
        })
        $('.qq-service .btn').click(function(){
            $('.qq-service').remove('current');
        })
    })
})(jQuery);




