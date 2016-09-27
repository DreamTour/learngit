(function($) {
    $(document).ready(function() {

        //页面产品展示的图片滚动效果，焱炼的技术实力的文字滚动效果
        (function(){

            $.fn.Scroll = function (options) {
                //将当前上下文对象存入root
                var root = this;

                //默认配置
                var settings = {
                    speed: 40,      //滚动速度,值越大速度越慢
                    direction: "x"  //滚动方向("x"或者"y" [x横向;y纵向])
                };

                //不为空，则合并参数
                if (options)
                    $.extend(settings, options);


                var timer = [];     //计时器
                var marquee;        //滚动器(函数)
                var isRoll;         //判断是否滚动(函数)

                var _ul = $("> ul", root);          //ul标签
                var _li = $("> ul > li", root);     //li标签(集合)

                var li_num = _li.length;    //li标签个数
                var li_first = _li.first();   //获取单个li标签


                //判断为纵向还是横向，并进行相应操作
                if (settings.direction == "x") {

                    var li_w = li_first.outerWidth(true); //单个li标签的宽度
                    var ul_w = li_w * li_num; 　　　　　　 //ul标签的宽度

                    _ul.css({ width: ul_w }); //设置ul宽度

                    marquee = function () {
                        _ul.animate({ right: "-=1" }, 0, function () {
                            var _mleft = Math.abs(parseInt($(this).css("right")));
                            if (_mleft > li_w) { //滚动长度一旦大于单个li的长度
                                $("> li:first", $(this)).appendTo($(this)); //就把第一个li移到最后
                                $(this).css("right", 0); //滚动长度归0
                            }
                        });
                    };
                    //ul长度小于box长度时则不滚动，反之滚动
                    isRoll = function (t) {
                        if (ul_w <= root.width())
                            clearInterval(t);
                        else
                            marquee();
                    }
                }
                else {
                    var li_h = li_first.outerHeight(true); //单个li标签的高度
                    var ul_h = li_h * li_num; //ul标签的高度

                    _ul.css({ height: ul_h });  //设置ul高度

                    marquee = function () {
                        _ul.animate({ marginTop: "-=1" }, 0, function () {
                            var _mtop = Math.abs(parseInt($(this).css("margin-top"))); //取绝对值
                            if (_mtop > li_h) {
                                $("> li:first", $(this)).appendTo($(this));
                                $(this).css("margin-top", 0);
                            }
                        });
                    };
                    //ul长度小于box长度时则不滚动，反之滚动
                    isRoll = function (t) {
                        if (ul_h <= root.height())
                            clearInterval(t);
                        else
                            marquee();
                    }
                }

                //遵循链式原则，并进行初始化
                return root.each(function (i) {
                    //超出内容隐藏，防止用户没写overflow样式
                    $(this).css({ overflow: "hidden" });

                    timer[i] = setInterval(function () {
                        isRoll(timer[i]);
                    }, settings.speed);

                    //鼠标进入停止滚动，离开继续滚动
                    $(this).hover(function () {
                        clearInterval(timer[i]);
                    }, function () {
                        timer[i] = setInterval(function () {
                            isRoll(timer[i]);
                        }, settings.speed);
                    });

                });
            };

            $(".product-display").Scroll();
            $(".technical-strength .list").Scroll({ direction: "y" }); //设置为纵向滚动

        })();



        //企业动态，发展方向的滚动效果
        (function() {
            function scroll(div, ul) {
                var oDiv   = $(div),     //div外部容器
                    oUl    = $(ul),        // 滚动元素
                    timer  = null,     //定时器
                    stepHeight = oUl.find('li').height() + 1 +   //滚动高度
                        parseInt(oUl.find('li').css('padding-top')) + parseInt(oUl.find('li').css('padding-bottom')) + 'px';
                    console.log(oUl.find('li').css('border-bottom'))
                /**
                 *定义滚动动画
                 * */
                var slider = function() {
                    oUl.finish().animate({'marginTop': stepHeight}, 2000, null, callback);
                };

                /**
                 *滚动结束后执行的动作，先让滚动元素的margin归位，然后把最后一个li添加到第一个，最后执行一个淡入的动画
                 * */
                var callback = function() {
                    oUl.css({'marginTop': 0});
                    var last = oUl.find('li:last');
                    last.css('opacity', 0);
                    last.prependTo(oUl);
                    last.animate({'opacity': 1}, 1000);
                }

                /**
                 *自动滚动
                 * */
                var autoSlider = function() {
                    timer = setInterval(slider, 3000);
                }

                /**
                 *取消自动滚动
                 * */
                var clearSlider = function() {
                    clearInterval(timer);
                }

                //给外部容器添加事件，鼠标移入清除自动滚动，移开添加自动滚动
                oDiv.hover(clearSlider, autoSlider);

                //初始化一次自动滚动
                autoSlider();
            }
            scroll('.development-direction', '.development-direction ul');
            scroll('.part-scroll-a', '.part-scroll-a ul');
            scroll('.part-scroll-b', '.part-scroll-b ul');
        })();

    })
})(jQuery);
