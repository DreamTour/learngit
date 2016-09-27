(function($) {
    $(document).ready(function() {

        //侧边栏
        $(".am-offcanvas-content a").each(function(){
            if( String(window.location).match($(this)[0].href) ){
               $(this).find('.animation').addClass("active");
                return false;
            }
        });
        $('#off-canvas-aside').on('open.offcanvas.amui', function() {
            $(".am-offcanvas-content .body .animation").each(function(index){
                var self=this;
                setTimeout(function(){
                    $(self).addClass('fin')
                },index*100)
            });
            $('#off-canvas').one('click',function(){
                $('#off-canvas-aside').offCanvas('close');
            })
        });
        $('#off-canvas-aside').on('close.offcanvas.amui', function() {
            $(".am-offcanvas-content .body .animation").removeClass('fin');
        });

        //地图层
        $('.map-btn').tap(function(){
            $('.map').addClass('map-current');
        });
        $('.map .close').tap(function(){
            $('.map').removeClass('map-current');
        });

    })
})(jQuery);




