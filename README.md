# H5-project 总结
1. 基本上都是图片的叠加展示。布局基本都是绝对定位，再设置top、bottom等

2. 防止在不同的页面大小下会变形：设置 min-width、min-height

3. 设置不同层级的优先：

   ```css
   z-index: 1;
   z-index: 2;  // 优先级较高。当两者重叠在一起时，优先级高的压在底的下面。
   z-index: -1;  // 降低层级
   ```

4. 水平居中布局（绝对定位前提下）

   ```css
   left: 50%;
   transform: translateX(-50%);
   ```

5. 设置背景图片

   ```css
   background: url("../images/search.png") no-repeat center bottom;
   // 一张图片在原图片中不是居中的，可以设置居中等
   ```

6. 如果某一屏的内容比较长，在前一屏或后一屏能看到，但是又不能给该屏设置overflow:hidden（因为会影响其他效果），可以这样：单独给比较长的内容设置一个盒子，这个盒子透明，绝对定位（相对这一屏）、top和left都是0，宽高100%，再设置overflow:hidden就完美解决。

   ```css
   .overFlow{
       position: absolute;
       top: 0;
       left: 0;
       width: 100%;
       height: 100%;
       overflow: hidden;
   }
   ```

7. 动画

   ```css
   .next-upDown{
       animation: next 1s linear infinite; // linear线性，infinite无限循环
   }
   @keyframes next {
   	// 0%时就是 .next-upDown 原来设置的css样式，所以可以不用写
       50%{
           bottom: 100px;
       }
       100%{
           bottom: 120px;
       }
   }
   ```

   > 注意：css引用动画时用 animation
   >
   > ​			js里设置动画时用animate

8. 获取浏览器相关位置

   ```js
   var h = $(window).height();  // 获取浏览器高度
   // 根据高度改变位置：
   $('.t1f-05').animate({"bottom":-(h-500),"left":"40%","width":65},1500)
   ```

9. 实现淡入淡出

   ```js
   // 1.先设置原透明度为0，后面根据动画改变
   opacity: 0;
   $('.search-words ').animate({"opacity":1},500)
   
   // 2.使用jQuery的fadeIn()和fadeOut()方法
   $('.next').fadeIn();  // 淡入
   $('.next').fadeOut();  // 淡出
   ```

10. 鼠标移动的显示与隐藏

    ```js
    $('.goShopping-08').hover(function () {
    	$('.btn-08-a').toggle();  // toggle 进行隐藏和显示的切换
    });
    ```

11. attr() 方法

    ```js
    // attr() 方法设置或返回被选元素的属性值。
    $('img').attr("style","");  // 复原所有样式
    ```

12. JS中增加CSS样式

    ```js
    $('.words-05').addClass("words-05-transform");  // 通过jQuery
    ```
