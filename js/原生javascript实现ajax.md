### 原生javascript实现ajax

#####创建XHR对象

首先需要新建一个XHR对象，如果你只想兼容ie7及更高版本和其他主流浏览器，那么只需要使用XMLHttpResquest构造函数。

<pre>
    var xhr = new XMLHttpResquest();
</pre>

但是如果必须老版本的ie，那么则可以使用如下函数进行封装。

<pre>
    function getXHR() {
       if (window.ActiveXObject) {
           try {
               return new ActiveXObject('Msxml2.XMLHTTP');
           }
           catch(e) {
               try {
                   return new ActiveXObject('Microsoft.XMLHTTP');
               }
               catch(e) {}
           }
       } else if (window.XMLHttpResquest) {
           return new XMLHttpResquest();
       } else {
           throw new throw('No XHR object available')
       }
   }
</pre>

#####XHR的用法
######向服务器发送请求
调用的第一个方法是open(),接受三个参数：要发送的请求类型（“get”， “post”等），请求的url，和是否异步发送请求的bool值

调用send()函数， 接收一个参数， 即要作为请求主体发送的数据，如果不需要通过主体发送数据，则必须传入null。

<pre>
    xhr.open("get", "example.php", false);
    xhr.send(null)
</pre>
######响应的数据用来填充XHR对象的属性
XHR对象的属性主要有：

+  responseText: 作为响应主体被返回的文本 （一般用于响应成功时传入的参数）    
+  status: http的响应状态 （参考 status code）

如果是同步响应的，javascript代码会等到服务器响应之后再继续执行。如果是异步，javascript继续执行不必等待响应，因为当响应完成后，响应的数据会填充XHR对象属性，所以需要检测XHR对象的readyState和status来检测是否完成响应。

<pre>
     var xhr = getXHR();
     xhr.onreadystatechange = function() {
         if (xhr.readyState == 4) {
             if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
                 console.log(xhr.responseText);
             } else {
                 console.log(xhr.status);
             }
         }
     }
</pre>

#####Get与Post





