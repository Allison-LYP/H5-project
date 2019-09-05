$(function () {
    var h = $(window).height();
    $('.next').click(function () {
        $.fn.fullpage.moveSectionDown()
    })
    $('#fullpage').fullpage({
        // loopBottom: true,
        keyboardScrolling:true,
        navigation:true,

        // 回调函数
        // afterLoad : 滚动到某一屏后的回调函数，接收 anchorLink 和 index 两个参数.
            // anchorLink 是锚链接的名称，index 是序号，从1开始计算
        afterLoad: function (anchorLink,index) {
            if (index == 1){
                $('.next').fadeIn();
            }
            // 第二屏
            if (index == 2){
                $('.next').fadeOut();  // 刚开始让“继续下一屏”先隐藏
                // alert(index)
                $('.search').show().animate({"right":370},1500,"easeOutElastic",function () {
                    // 回调函数。在搜索框走进来后，里面的文字慢慢显示
                    $('.search-words ').animate({"opacity":1},500,function () {
                        // 整个搜索框隐藏
                        $('.search').hide();
                        // 另一张带沙发文字的一模一样的图片显示，并缩放至右上角
                        $('.search-02-1').show().animate({"height":30,"right":250,"bottom":450},1000);
                        // 沙发商品图片 显示，变回原高度
                        $('.goods-sofa').show().animate({"height":217},1000,"easeInQuart");
                        $('.words-02').animate({"opacity":1},500,function () {
                            $('.next').fadeIn();  // 最后让“继续下一屏”显示
                        });
                    });
                })
            }
            // 第七屏
            if(index == 7){
                $('.next').fadeOut();
                $('.star-07').animate({"width":120},1500,function () {
                    $('.good-07').show();
                    $('.next').fadeIn();
                })
            }
            // 第八屏
            if (index == 8){
                $('.next').fadeOut();
                $('.goShopping-08').hover(function () {
                    $('.btn-08-a').toggle();  // toggle 进行隐藏和显示的切换
                });
                // 手随着鼠标移动
                $(document).mousemove(function (event) {
                    var minH = h-449;
                    var x = event.pageX - $('.hand-08').width()/2 ;
                    var y = event.pageY + 10 < minH ? minH : event.pageY + 10;
                    $('.hand-08').css({"left":x,"top":y})
                    // console.log("x:"+x+",y:"+y)
                })
                // 点击再来一次
                $('.again-08').click(function () {
                    // 回到第一页
                    $.fn.fullpage.moveTo(1);
                    // 所有动画复原
                    $('img,.move').attr("style","");
                })
            }
        },

        // onLeave: 滚动前的回调函数，接收 index、nextIndex 和 direction 3个参数：
            // index 是离开的“页面”的序号，从1开始计算；
            // nextIndex 是滚动到的“页面”的序号，从1开始计算；
            // direction 判断往上滚动还是往下滚动，值是 up 或 down。
        onLeave:function (index,nextIndex,direction) {
            $('.next').fadeOut();
            // 第二屏到第三屏过渡
            if (index === 2 && nextIndex === 3){
                $('.sofa-02').show().animate({"bottom": - (h - 250), "width":207, "left":260},2000,"easeOutBack",function () {
                    $('.img-a').animate({"opacity":1},500);
                    $('.btn-a').animate({"opacity":1},500,function () {
                        $('.next').fadeIn();
                    });
                });
                $('.cover-sofa').show();
            }
            // 第三屏到第四屏过渡
            if (index === 3 && nextIndex === 4){
                $('.sofa-02').hide();
                $('.t1f').show().animate({"bottom":- ((h-250)+50),"left":250},2000,function () {
                    $(this).hide();
                    $('.t1f-04').show();
                    $('.carContainer').animate({"left":"150%"},3000,"easeInBack",function () {
                        $('.next').fadeIn();
                        $('.msg').show();
                        $('.add-04,.word-04-a').animate({"opacity":1},1000,"easeOutQuint");
                    })
                });
            }
            // 第四屏到第五屏过渡
            if (index === 4 && nextIndex === 5){
                // 手上移
                $('.hand-05').animate({"bottom":-20},2000,function () {
                    // 鼠标被点击的图片显示
                    $('.mouse-05-a').animate({"opacity":1});
                    // 沙发往下掉
                    $('.t1f-05').show().animate({"bottom":70},1000,function () {
                        // order往上移
                        $('.order-05').animate({"bottom":390},1000,function () {
                            $('.words-05').addClass("words-05-transform");
                            $('.next').fadeIn();
                        })
                    })
                })
            }
            // 第五屏到第六屏过渡
            if (index === 5 && nextIndex === 6){
                $('.t1f-05').animate({"bottom":-(h-500),"left":"40%","width":65},1500,function () {
                    $('.t1f-05').hide();
                });
                $('.box-06').animate({"left":"38%"},1500,function () {
                    $(this).animate({"bottom":40},500,"easeOutCirc",function () {
                        $(this).hide();
                        $('.add-06').show();
                        // 改变背景坐标比较麻烦，所以可以用 backgroundPositionX
                        $('.section6').animate({"backgroundPositionX":"100%"},4000,function () {
                            $('.man-06').show().animate({"height":305,"bottom":116},1000,function () {
                                $(this).animate({"right":500},500,function () {
                                    // 开门效果
                                    $('.door-06').animate({"opacity":1},500,function () {
                                        // girl 变化
                                        $('.women-06').show().animate({"height":305,"right":350},500,function () {
                                            // 出现请收货图标
                                            $('.accept-06').show();
                                            $('.next').fadeIn();
                                        })
                                    })
                                })
                            })
                        })
                        $('.words-06-a').show().animate({"left":"30%"},2000,"easeOutElastic")
                    })
                })
            }
        },
    });
})
