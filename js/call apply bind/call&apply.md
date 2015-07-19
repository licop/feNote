###call&apply

和bind方法一样call方法和apply方法都是内置对象Function的方法，此外Function还有arguments属性，length属性，caller属性。关于这些属性还将在Function方法中提到。

####用法
这是msdn上关于call方法的定义。

<pre>
call 方法
调用一个对象的一个方法，以另一个对象替换当前对象。

call([thisObj[,arg1[, arg2[,   [,.argN]]]]])

参数
thisObj
可选项。将被用作当前对象的对象。

arg1, arg2,  , argN
可选项。将被传递方法参数序列。

说明
call 方法可以用来代替另一个对象调用一个方法。call 方法可将一个函数的对象上下文从初始的上下文改变为由 thisObj 指定的新对象。

如果没有提供 thisObj 参数，那么 Global 对象被用作 thisObj。
</pre>
说的通俗一点call和apply都是为了改变某个函数值的context上下文而存在的，换句话说就是改变函数内部的指向。
其实如果将一个函数按照正常方式调用有三种方法
<pre>
//一般调用方法
var func1 = function(arr1, arr2){};
func1();
//call
func1.call(this, arr1, arr2);
//apply
func2.apply(this, [arr1, arr2]);
</pre>

其中this是你想指定的上下文，可以是任何javascript对象，call 需要把参数按顺序传递进去，而 apply 则是把参数放在数组里。

如果向call和apply函数的第一个参数传入一个原始值（字符串类型、布尔类型、数字类型）来当作this的绑定对象，这个原始值会被转化为对象形式（也就是new String()、new Boolean()或者new Number()这通常被称为‘装箱’）；

####应用

######ex1
下面是javascript OPP的一个实例
<pre>
  function duck() {}
  duck.prototype = {
      sound: 'gagaga',
      say: function() {
          console.log(this.sound);
      }
  }
  var chicken = {
      sound: 'gegege',
  }
  var duck1 = new duck;
  duck1.say.call(chicken);
</pre>

这里讲duck实例的say方法的this指向了chicken对象，就不用重新定义chicken的方法了。
######ex2
有时候我们可以看到这样一段代码，Array.prototype.slice.call(arguments)，你可能知道它是将参数转换成数组，但是具体的工作原理可能就不清楚了。

以下内容理解自stackoverflow
[how does Array.prototype.slice.call() work?](http://stackoverflow.com/questions/7056925/how-does-array-prototype-slice-call-work)

 当一个数组如[1, 2, 3]调用了slice()方法，[1, 2, 3].slice(),这个数组就决定了slice()方法中的this，但是当我们用call，并传入带有length属性的参数，或者一串数字的序列（我们叫他们伪数组），slice就会把他们当成数组，执行方法。
 
 

























