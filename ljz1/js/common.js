(function($) {
    $(document).ready(function() {
        $(".nav a").each(function(){
            $this = $(this);
            if( $this[0].href == String(window.location) ){
                $this.addClass("active");
            }
        });

        var nt = !1;
        $(window).bind("scroll",
            function() {
                var st = $(document).scrollTop();//往下滚的高度
                nt = nt ? nt: $(".header .nav-wrap").offset().top;
                // document.title=st;
                var sel=$(".header .nav-wrap");
                if (nt < st) {
                    sel.addClass("nav_fixed");
                } else {
                    sel.removeClass("nav_fixed");
                }
            });
    })
})(jQuery);