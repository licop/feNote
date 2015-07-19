###内容剪裁 clip

+  clip 只适使用于绝对定位元素
+  clip: rect(30px, 200px, 200px, 20px);顺序和margin的四个值的顺序一致，top>>right>>bottom>>left, 代表剪裁后的每条边距离左上角的距离，所以right应该大于left，bottom应该大于top，也就是中间的两个值要相对于较大。

 



[靠谱的传送门](http://www.zhangxinxu.com/wordpress/2011/04/css-clip-rect/)

[clip实现sprite图demo](clip_sprite.html)