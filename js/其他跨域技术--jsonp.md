### 其他跨域技术--jsonp
   
   由于通过XHR实现Ajax具有跨域安全的限制，XHR对象只能与包含它的页面位于同一个域的资源，同一个域即域名，协议，端口都相同。所以就诞生了一些跨域的技术，比如CORS(Cross-Origin Resource Sharing, 跨源资源共享)，还有就是今天要讲的jsonp技术。
   
####JSONP是什么
   
   JSONP(JSON with padding),是应用JSON的一种新方法，再后来的web服务中非常流行。看起来和JSON差不多，只不过是被包含在函数调用中的JSON,像下面这样：
   
   callback({"name": "licop"});
   
   JSONP由两部分组成：回调函数和数据。回调函数是响应到来时在页面中调用的函数。回调函数的名字一般在请求中指定。数据就是传入回调函数中的JSON数据。
   