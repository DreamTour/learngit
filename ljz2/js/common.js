(function($) {
    $(document).ready(function() {

        $(".nav a").each(function(){
            $this = $(this);
            if( $this[0].href == String(window.location) ){
                $this.parent().addClass("active");
            }
        });

        //滚动条滚动的时候导航在页面的顶部
        var nt = !1;
        $(window).bind("scroll",
            function() {
                var st = $(document).scrollTop();//往下滚的高度
                nt = nt ? nt : $(".header .nav").offset().top;
                // document.title=st;
                var oNav = $(".header .nav");
                if (nt < st) {
                    oNav.css('position', 'fixed');
                    oNav.css('top', '0px');
                } else {
                    oNav.css('position', 'absolute');
                    oNav.css('top', '24px');
                }
            });
    })
})(jQuery);