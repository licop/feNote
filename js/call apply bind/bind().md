### bind()

call和apply函数总是弄不明白该如何应用，看到知乎上有人说可以先学习一下ECMAScript5中的API中的bind方法，会对了解有帮助。

bind和call, apply一样都是为了改变某个函数运行时的上下文（context）而存在的，也就是改变函数体内部的指向。

<pre>
    var obj = {
        a : 1,
        b : 2,
        getCount : function(c, d) {
            console.log(this.a + this.b + c + d);
        }
    }

    window.a = window.b = 0;
    obj.getCount(3, 4);  // 10
    //fuc的this指向了window
    var fuc = obj.getCount;  //7
    fuc();
</pre>

   此时fuc在上下文中的this已经变成了window，这是javascript新手经常犯的错误，把一个方法从对象中拿出来，殊不知this的指向已经改变，bind的存在就是为了改变方法的this指向。
 <pre>
     var obj = {
         a : 1,
         b : 2,
         getCount : function(c, d) {
             console.log(this.a + this.b + c + d);
         }
     }
    window.a = window.b = 0;
    obj.getCount(3, 4);
    // 使用bind来改变this的指向
    var fuc = obj.getCount.bind(obj, 3, 4);
    fuc();
 </pre>  
 
 bind是function的一个函数的扩展方法，但是不兼容IE6-8。
 
##### 使用bind进行柯里化
<pre>
		function f(y,z){
		    return this.x+y+z;
		}
		var m=f.bind({x:1},2); 
		console.log(m(3));  // 6
</pre>

这是因为 bind()方法会把传入它的第一个实参绑定给f函数体内的 this，从第二个实参起，将依此传递给原始函数，因此 {x:1}传递给this ,2传递给形参y，m(3) 调用时的3 传递给形参z。

其实这个例子 f() 函数能够处理部分参数，分步计算 （ bind() 时处理了参数x，和参数y，调用 m(3)时处理了参数z ）的过程其实是一个典型的Curry过程(Currying)

[bind](http://www.cnblogs.com/zztt/p/4122352.html)


#####bind方法和call方法的区别
 
 [Why did ECMAScript 5 add .bind()?](http://stackoverflow.com/questions/9625600/why-did-ecmascript-5-add-bind)
 
 <pre>
   obj.getCount.call(obj, 3, 4);
 </pre>
 注意到区别了吗，我们不用再调用一遍函数，用call调用就可以直接执行了，而用bind方法就产生了一个函数而已。
 
 
 
 
   

    