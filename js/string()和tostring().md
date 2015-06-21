###string()和toString()

两种方法都可以把一个值转化为字符串格式。

#####toString()
  
 例子： 
 
      var age = 11;
      var ageAsString = age.toString(); //字符串“11”
      var found = true;
      var foundAsString = found.toString(); //字符串“true”
 
 数值，布尔值，对象和字符串值都有toString()方法。但null和undefined值没有这个方法。
 
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
     
 