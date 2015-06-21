###JavaScript中的offset、scroll、client

![size](size.gif)

####offset

#####offsetHeight和offsetWidth: 

obj.offsetWidth 指 obj 控件自身的绝对宽度，不包括因 overflow 而未显示的部分，也就是其实际占据的宽度，整型，单位像素。

obj.offsetHeight 指 obj 控件自身的绝对高度，不包括因 overflow 而未显示的部分，也就是其实际占据的高度，整型，单位像素。

offsetWidth=(border-width)*2+(padding-left)+(width)+(padding-right)

offsetHeight=(border-width)*2+(padding-top)+(height)+(padding-bottom)

#####offsetTop和offsetLeft
obj.offsetTop 元素上外边框到包含元素的上内边框的之间的像素距离

obj.offsetLeft 元素左外边框到元素左内边框的距离。

#####offsetParent
offsetParent属性返回一个对象的引用，这个对象是距离调用offsetParent的元素最近的（在包含层次中最靠近的），并且是已进行过CSS定位的容器元素。 如果这个容器元素未进行CSS定位, 则offsetParent属性的取值为根元素的引用。

　　总的来说两条规则：

　　1、如果当前元素的父级元素没有进行CSS定位（position为absolute或relative），offsetParent为body。

　　2、如果当前元素的父级元素中有CSS定位（position为absolute或relative），offsetParent取最近的那个父级元素。
　　
　　<pre>
　　//循环至跟获取元素的当前页面的偏移量
　　function getElementLeft(element) {
      var actualTop = element.offsetTop;
      var current = element.offsetParent;
      while(current !== null) {
          actualTop += current.offsetTop;
          current = current.offsetParent;
      } 
      return actualTop;
    }
　　</pre>
 
###client

#####clientWidth和clientHeight

clientWidth: 元素内容的宽度加上左右边距的宽度。

clientHeight: 元素内容的高度加上上下边距的宽度。

<pre>
   //demo 用于获取页面的视口的尺寸
   function getViewPort() {
       if (document.compatMode == "BackCompat") {
           return {
               width: document.documentElement.clientWidth,
               height: document.documentElement.clientHeight
           };
       } else {
           return {
               width: document.body.clientWidth,
               height: document.body.clientHeight
           };
       }
   }
</pre>


###scroll

指的包含滚动内容的元素的大小，有些元素（如html元素），即使没有执行任何代码也能自动添加滚动条。另外一些元素，则需要通过css的overflow属性才能设置。

#####scrollHeight和scrollWidth

scrollHeight: 在没有滚动条的情况下，元素内容的总高度

scrollWidth: 在没有滚动条的情况下，元素内容的总宽度

二者主要用于确定元素内容的实际大小，因此带有垂直滚动条的总页面高度就是document.documentElement.scrollHeight

对于不存在滚动条的页面client和scroll之间的关系并不清晰，需要获取最大值才能保持在夸浏览器环境下的一致性。

<pre>
  var docHeight = Math.max(document.documentElement.scrollHeight, document.documentElement.clientHeight);
        var docWidth = Math.max(document.documentElement.scrollWidth, document.documentElement.clientHeight);  
</pre>

#####scrollTop和scrollLeft

可以理解为滚动条向下滚动和向右滚动的距离，二者既可以确定当前元素的滚动状态，也可以设置元素的滚动位置，以上都是只读的，只有scrollTop和scrollLeft可以更改值。
 <pre>
     function scrollToTop(element) {
         if (element.scrollTop != 0) {
             element.scrollTop = 0;
         }
     }
 </pre>
 
###getBoundingClientRect

Element.getBoundingClientRect()方法的返回值是一个包含了一组文本矩形的文本矩形对象.
<pre>
    function getPosition(element) {
        var rectObj = element.getBoundingClientRect();
        return rectObj;
    }
</pre>
其中对象的属性有height，width， top， bottom， right， left；

其中height，width在ie8以下不兼容，而且认为坐上角的起始坐标为（2，2），其余皆从（0，0）开始；


更多参考[CSSOM视图模式相关整理 by 张鑫旭](http://www.zhangxinxu.com/wordpress/2011/09/cssom%E8%A7%86%E5%9B%BE%E6%A8%A1%E5%BC%8Fcssom-view-module%E7%9B%B8%E5%85%B3%E6%95%B4%E7%90%86%E4%B8%8E%E4%BB%8B%E7%BB%8D/)


 
