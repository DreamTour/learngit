(function($) {
    $(document).ready(function() {
        bannerTab('.banner', '.banner_pic img', '.banner_pic', '.banner_pic_1', '.banner_pic_1', 1000, 450/1920, 1000);

        function bannerTab(pBannerDiv, pAllImg, pWrapDiv ,pPartWidth, pPartHeight, pDistance, pScale, pDuration) {

            //添加图片结构
            addPicStructure();
            //声明变量
            var bannerDiv   = $(pBannerDiv),              //整个banner的DIV
                allImg      = $(pAllImg),                 //所有图片
                wrapDiv     = $(pWrapDiv),                //包裹图片真个的容器
                partWidth   = $(pPartWidth).width(),      //包裹图片1/4 DIV的容器
                partHeight  = $(pPartHeight).height(),    //包裹图片的容器
                imgWidth    = allImg.width(),             //取得图片的实际宽度
                imgHeight   = allImg.height(),            //取得图片的实际高度
                iNow        = 0,                          //初始化一个现在的索引值
                iPrev       = 0,
                timer       = null;                       //定时器
            $(wrapDiv).eq(0).css({
                "zIndex": 2
            });
            //自动播放
            autoPlay();
            //鼠标点击
            clickEvent();
            //鼠标移入移除
            bannerDiv.hover(clearAutoPlay, autoPlay);



            /**
             * 添加图片结构
             * */
            function addPicStructure() {
                $('.banner').find('img').each(function(){          //循环每张图片
                    var node=$(this).prop('outerHTML');            //获得src属性
                    $('<div class="banner_pic">'                    //把内容添加到容器里面
                        +'<div class="banner_pic_1">'+node+'</div>'
                        +'<div class="banner_pic_2">'+node+'</div>'
                        +'<div class="banner_pic_3">'+node+'</div>'
                        +'<div class="banner_pic_4">'+node+'</div>'
                        +'</div>').appendTo('.banner');
                    $(this).remove();                               //删除当前图片
                })
            }

            /**
             * 定义动画
             * */
            function fnFade() {
                var distance    = pDistance;    //图片放大的距离
                var scale       = pScale;       //图片放大的比例
                var duration    = pDuration;    //动画执行的速度
                $(wrapDiv).css({
                    "zIndex": 0
                });
                $(wrapDiv).eq(iNow).css({
                    "zIndex": 1
                });
                $(wrapDiv).eq(iPrev).css({
                    "zIndex": 2
                });

                //图片放大淡出
                $(wrapDiv).eq(iPrev).find('img').each(function(index){
                    $(this).animate({
                        width: imgWidth + distance + 'px',
                        height: imgHeight + distance*scale + 'px',
                        marginLeft: -partWidth/2*(index+1) + 'px',
                        marginTop: -partHeight/2 + 'px',
                        opacity: 0
                    },duration);
                });

                //图片放大淡出
                $(wrapDiv.eq( iNow )).find('img').each(function(index){
                    $(this).css({
                        width: imgWidth + distance + 'px',
                        height: imgHeight + distance*scale + 'px',
                        marginLeft: -partWidth/2*(index+1) + 'px',
                        marginTop: -partHeight/2 + 'px'
                    })
                });

                //图片还原淡入
                $(wrapDiv.eq( iNow )).find('img').animate({
                    width: imgWidth + 'px',
                    height: imgHeight  + 'px',
                    marginLeft: 0 + 'px',
                    marginTop: 0 + 'px',
                    opacity: 1
                },duration)
            }

            /**
             *点击事件
             * */
            function clickEvent() {
                //向右点击事件
                $('.next').click(function() {
                    iPrev = iNow;
                    if( iNow < wrapDiv.length - 1 ) {
                        iNow++;
                    } else {
                        iNow = 0;
                    }
                    fnFade();
                });

                //向左点击事件
                $('.prev').click(function() {
                    iPrev = iNow;
                    if( iNow > 0) {
                        iNow--;
                    } else {
                        iNow = wrapDiv.length - 1;
                    }
                    fnFade();
                });
            }


            /**
             * 自动播放
             * */
            function autoPlay() {
                clearAutoPlay();
                timer = setInterval(function() {
                    iPrev = iNow;
                    iNow++;
                    iNow %= wrapDiv.length;
                    fnFade();
                },4000)
            }

            /**
             * 清除自动播放
             * */
            function clearAutoPlay() {
                clearInterval(timer);
            }


        }
    });
})(window.jQuery);