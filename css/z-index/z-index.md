###z-index

不管何种定位都会遇到一种情况：两个元素试图放在同一个位置上，显然其中一个必须盖住另一个，这时我们可以使用z-index属性来控制叠放的顺序。

所有的整数都可以用作为z-index的值，包括负数。如果为元素指定一个负的z-index值，会将其移到离读者更远的位置。

#####父元素和子元素的叠放关系
HTML元素
<code>
    
    <p id="one">Web Design and Applications involve the standards for building and Rendering Web pages, including HTML, CSS, SVG, Ajax, and other technologies for Web Applications (“WebApps”).Web Design and Applications involve the standards for building and Rendering Web pages, including HTML, CSS, SVG, Ajax, and other technologies for Web Applications (“WebApps”). Web Design and Applications involve the standards for building and Rendering Web pages, including HTML, CSS, SVG, Ajax, and other technologies for Web Applications (“WebApps”).  
    </p>
    
    <p id="two"><em>W3C is focusing on technologies</em> to <b>enable Web access anywhere</b>, anytime, using any device. This includes Web access from mobile phones and other mobile devices as well as use of Web technology in consumer electronics, printers, interactive television, and even automobiles.
    </p>  
</code>

CSS元素

<code>
  
    p {
		border: 1px solid;
		background: #ddd;
		margin: 0px;
	}
	#one {
		position: absolute;
		background: #f6f;
		top: 0;
		left: 0;
		width: 50%;
		height: 10em;
		z-index: 10;
		color: #fff;
	}
	#two {
		position: absolute;
		top: 5em;
		left: 25%;
		width: 50%;
		height: 10em;
		background: #6ff;
		z-index: 11;
		color: #Fff;
	}
	#two em {
		position: absolute;
		left: 7em;
		top: auto;
		z-index: 36;
		color: #666;
	}
	#two b {
		position: absolute;
		left: 0em;
		top: auto;
		z-index: -42;
		color: #000;
	}
	
</code>

这里p#two在p#one的前面，值得注意的是p#two的 em 和 b 标签，尽管 em 在父标签的前面，b在父标签的后面但是它们都在p#one的前面，这是因为z-index值36和－42都是相对于p#two，而不是相对于整体文档。可以说，p#two及其所有的子元素都有共同的z-index 11,而在这个p#two上下文中各元素又有其自己的次级z-index.

如下可见各元素的层级：

p#one 10

p#two 11

p#two em 11 36

p#two b  11 42

[demo](z-index.html)






