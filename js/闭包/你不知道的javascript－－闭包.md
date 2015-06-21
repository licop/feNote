###你不知道的javascript－－闭包

首先来一个直接了当的定义：
<pre>
    当函数可以记住并访问所在的词法作用域时，就产生了闭包，即使函数是在当前词法作用域执行之外。
</pre>

下面用一些代码来解释这个定义：
<pre>
  function fun() {
     var a = 2;
     function bar() {
         console.log(a);
     } 
     bar();
  }
  fun();
</pre>
可以看到以上代码，bar声明和调用都在函数内部，bar函数可以记住和访问fun函数内所声明的变量，当然也可以访问全局变量。可以看到这段代码满足以上的条件，但是它并没有发挥闭包神奇的功能。

既然bar()可以访问和记住fun函数内的作用域，那么我们不能浪费这一点，下面我们利用闭包，更充分地发挥bar()的作用。

<pre>
   function fun() {
       var a = 2;

       function bar() {
           console.log(a);
       }

       return bar;
   }

   var baz = fun();
   baz(); //2,  这就是闭包
</pre>

我们把bar() 函数当作一个值来传递，这里我们将bar所引用的函数对象本身当作返回值。

可以看到这里bar在所在的作用域外执行，我们可以访问到fun函数内部作用域的变量a，而且一般情况下在fun函数执行过后，fun()整个内部的作用域都被销毁，称作垃圾回收，然而在这里由于bar()对内部作用域的引用，上面情况并没有发生，这都就是闭包的神奇之处，也是其不足吧。

所以可以看出一下的情况也属于闭包：
<pre>

  //example 3
  function fun() {
      var a = 2;
      function bar() {
           console.log(a);
       }
       foo(bar);
   }
   
   function foo(fun) {
       fun();
   }
   foo();
   
   //example 4
	 var fn;
	 function fun() {
	     var a = 2;
	     function bar() {
	         console.log(a);
	     }
	     fn = bar;
	 }
     function baz() {
	     fun();
	 }
	 fun();
	 baz();
</pre>


#####循环与闭包

我们可以使用一下代码实现间隔1s依次输出数字，

<pre>
  //利用IIFE
  for (var i = 0; i < 5; i++) {
      (function (j) {
          setTimeout(function() {
              document.write(j);
          }, j*1000); 
      })(i);
  };

  //闭包和块作用域联手,还不支持浏览器，支持服务器端
  //let 用于声明块作用域的变量
  for (let i = 0; i < 5; i++) {
      setTimeout(function timer() {
          document.write(i);
      }, i*1000);
  }

</pre>


















