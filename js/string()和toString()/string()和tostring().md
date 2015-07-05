###string()和toString()

两种方法都可以把一个值转化为字符串格式。

#####toString()
  
 例子： 
 
      var age = 11;
      var ageAsString = age.toString(); //字符串“11”
      var found = true;
      var foundAsString = found.toString(); //字符串“true”
 
 数值，布尔值，对象和字符串值都有toString()方法。但null和undefined值没有这个方法，这是因为JavaScript中所有的变量都是对象，除了两个例外null，undefined。
 
 一个常见的误解是数字的字面量（literal）不是对象。这个因为JavaScript解析器的一个错误，它试图将点操作符解析为浮点数字面值的一部分。
 
      2.toString();//出错：SyntaxError
      
   有很多变通方法可以让数字的字面值看起来像对象。
      
      2..toString();//第二个点号可以正常解析
      2 .toString();//注意点号前面的空格
      (2).toString(); //2先被计算
      
  参考[javascript-garden](http://bonsaiden.github.io/JavaScript-Garden/zh/#object)
 
 而当toString()方法传入参数时，toString()可以输出二进制，八进制，十六进制，乃至其他任意有效进制格式表示的字符串值。
 
      var num = 10;
      alert(num.toString());   //'10'
      alert(num.toString(2));  //'1010'      
      alert(num.toString(8));  //'12'
      alert(num.toString(10)); //'10'
      alert(num.toString(16)); //'a'
    
#####string()

可以将任意类型的值转换成字符串。

     var value1 = 10;
     var value2 = true;
     var value3 = null;
     var value4 = undefined; 
     
     alert(value1);  //"10"
     alert(value2);  //"true"
     alert(value3);  //"null"
     alert(value4);  //"undefined"
     
 