//window.onload = function() {
//    var scrollWrap1 = document.getElementsByClassName('scrollIndexWrap')[0];
//    var scrollWrap2 = document.getElementsByClassName('scrollIndexWrap')[1];
//
//    scrollIndex(scrollWrap1, 30);
//    scrollIndex(scrollWrap2, 30);
//
//    function scrollIndex(scrollWrap, speed) {
//        //复制内容  改变滚动容器位置
//        scrollWrap.children[0].children[1].innerHTML = scrollWrap.children[0].children[0].innerHTML;
//        scrollWrap.scrollLeft = scrollWrap.scrollWidth;
//
//        //自动滚动
//        scrollWrap.timer = setInterval(function () {
//            textScroll(scrollWrap);
//        }, speed);
//
//        //给滚动容器添加事件，鼠标移入清除自动滚动，
//        scrollWrap.onmouseover = function () {
//            console.log(this.timer+'----')
//            clearInterval(this.timer)
//        };
//
//        //移开添加自动滚动
//        scrollWrap.onmouseout = function () {
//            console.log(this.timer+'+++++')
//            this.timer = setInterval(function () {
//                textScroll(scrollWrap);
//            }, speed);
//        };
//    }
//
//    //定义文本滚动函数
//    var textScroll = function (scrollWrap) {
//        if (scrollWrap.scrollLeft <= 0) {
//            scrollWrap.scrollLeft += scrollWrap.children[0].children[1].offsetWidth;
//        } else {
//            scrollWrap.scrollLeft--;
//        }
//    };
//
//};
$(function(){
    function ScrollText(scrollWrap,speed){
        this.scrollWrap=scrollWrap;
        this.speed=speed;
        this.timer=null;
        this.init();
    }
    ScrollText.prototype={
        init:function(){
            var scrollWrap=this.scrollWrap;
            scrollWrap.children[0].children[1].innerHTML = scrollWrap.children[0].children[0].innerHTML;
            scrollWrap.scrollLeft = scrollWrap.scrollWidth;
            this.autoScroll();
            this.stopScroll();
        },
        autoScroll:function(){
            var self=this;
            this.timer= setInterval(function () {
                self.textScroll();
            }, this.speed);
        },
        textScroll:function(){
            var scrollWrap=this.scrollWrap;
            if (scrollWrap.scrollLeft <= 0) {
                scrollWrap.scrollLeft += scrollWrap.children[0].children[1].offsetWidth;
            } else {
                scrollWrap.scrollLeft--;
            }
        },
        stopScroll:function(){
            var self=this;
            var scrollWrap=this.scrollWrap;
           // scrollWrap.onmouseover= function () {
           //     console.log(self.timer+'-------')
           //     clearInterval(self.timer)
           // };
           //scrollWrap.onmouseout=function () {
           //     console.log(self.timer+'++++')
           //     self.timer = setInterval(function () {
           //         self.textScroll();
           //     }, self.speed);
           // };
            $(scrollWrap).mouseenter( function () {
                console.log(self.timer+'-------')
                clearInterval(self.timer)
            });
            $(scrollWrap).mouseleave(function () {
                console.log(self.timer+'++++')
                self.timer = setInterval(function () {
                    self.textScroll();
                }, self.speed);
            });
        }
    };
    var scrollWrap1 = document.getElementsByClassName('scrollIndexWrap')[0];
    var scrollWrap2 = document.getElementsByClassName('scrollIndexWrap')[1];
    new ScrollText(scrollWrap1, 30);
    new ScrollText(scrollWrap2, 30);
})

;(function($){
    $(document).ready(function() {
        //顶部信息列表滚动动画
        (function () {

            scroll($('.content_sentence .sentenceListWrap'), $('.content_sentence .sentenceList'));
            $('.content_topMessage .messageList_li').each(function () {
                scroll($(this), $(this).find('.noticeList'));
            });

            function scroll(divWrap, scrollUl) {                   // divWrap div外部容器 scrollUl  // 滚动元素
                var timer = null;                                   //定时器
                var stepHeight = scrollUl.find('a').height() + 1 +   //滚动高度
                    parseInt(scrollUl.find('a').css('padding-top')) + parseInt(scrollUl.find('a').css('padding-bottom'));

                // 定义滚动动画
                var slider = function () {
                    scrollUl.finish().animate({'marginTop': stepHeight + 'px'}, 500, null, callback);
                };

                // 滚动结束后执行的动作，先让滚动元素的margin归位，然后把最后一个li添加到第一个，最后执行一个淡入的动画
                var callback = function () {
                    scrollUl.css({'marginTop': 0});
                    var last = scrollUl.find('a:last');
                    last.css('opacity', 0);
                    last.prependTo(scrollUl);
                    last.animate({'opacity': 1}, 500);
                };

                // 自动滚动
                var autoSlider = function () {
                    timer = setInterval(slider, 3000);
                };

                // 取消自动滚动
                var clearSlider = function () {
                    clearInterval(timer);
                };

                //给外部容器添加事件，鼠标移入清除自动滚动，移开添加自动滚动
                divWrap.hover(clearSlider, autoSlider);

                //初始化一次自动滚动
                autoSlider();
            }

        })();

        (function () {

            $('.content_regenerate .regenerate_body').each(function () {
                scroll($(this), $(this).find('.body_list'));
            });

            function scroll(divWrap, scrollUl) {                   // divWrap div外部容器 scrollUl  // 滚动元素
                var timer = null;                                   //定时器
                var stepHeight = scrollUl.find('li').height() + 1 +   //滚动高度
                    parseInt(scrollUl.find('li').css('padding-top')) + parseInt(scrollUl.find('li').css('padding-bottom'));

                // 定义滚动动画
                var slider = function () {
                    scrollUl.finish().animate({'marginTop': -stepHeight + 'px'}, 500, null, callback);
                };

                // 滚动结束后执行的动作，先让滚动元素的margin归位，然后把最后一个li添加到第一个，最后执行一个淡入的动画
                var callback = function () {
                    scrollUl.css({'marginTop': 0});
                    var first = scrollUl.find('li:first');
                    first.css('opacity', 0);
                    first.appendTo(scrollUl);
                    first.animate({'opacity': 1}, 500);
                };

                // 自动滚动
                var autoSlider = function () {
                    clearInterval(timer);
                    timer = setInterval(slider, 3000);
                };

                // 取消自动滚动
                var clearSlider = function () {
                    clearInterval(timer);
                };

                //给外部容器添加事件，鼠标移入清除自动滚动，移开添加自动滚动
                divWrap.hover(clearSlider, autoSlider);

                //初始化一次自动滚动
                autoSlider();
            }

        })();
    });
})(jQuery);
//$(function(){
//    function ScrollText(scrollWrap,speed){
//        this.scrollWrap=scrollWrap;
//        this.speed=speed;
//        this.timer=null;
//        this.init();
//    }
//    ScrollText.prototype={
//        init:function(){
//            this.scrollWrap.children[0].children[1].innerHTML = this.scrollWrap.children[0].children[0].innerHTML;
//            this.scrollWrap.scrollLeft = this.scrollWrap.scrollWidth;
//            this.autoScroll();
//            this.stopScroll();
//        },
//        autoScroll:function(){
//            var self=this;
//            this.timer= setInterval(function () {
//                self.textScroll();
//            }, this.speed);
//        },
//        textScroll:function(){
//            if (this.scrollWrap.scrollLeft <= 0) {
//                this.scrollWrap.scrollLeft += this.scrollWrap.children[0].children[1].offsetWidth;
//            } else {
//                this.scrollWrap.scrollLeft--;
//            }
//        },
//        stopScroll:function(){
//            var self=this;
//            $(this.scrollWrap).mouseenter( function () {
//                clearInterval(self.timer)
//            });
//            $(this.scrollWrap).mouseleave(function () {
//                self.timer = setInterval(function () {
//                    self.textScroll();
//                }, self.speed);
//            });
//        }
//    };
//    var scrollWrap1 = document.getElementsByClassName('scrollIndexWrap')[0];
//    var scrollWrap2 = document.getElementsByClassName('scrollIndexWrap')[1];
//    new ScrollText(scrollWrap1, 30);
//    new ScrollText(scrollWrap2, 30);
//})
