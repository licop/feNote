##JSON用法
   
   JSON(JavaScript Object Notation)是一种轻量级的数据交换格式，在ECMAScript标准中JSON是javascript的内部特性, 是javascript的一个严格的子集，利用javascript中的一些模式来表示结构化数据，可以把JSON直接传给eval，而不必创建dom对象。<br>
   JSON是一种数据格式，而不是一种编程语言。虽然具有相同的语法形式，但是JSON并不从属于javascript,并不是只有javascript才使用JSON,很多编程语言都有JSON的解析器和序列化器。<br>

### 1.语法 
#####1.1 简单值
   比如 5， "javaScript", true  <br>
   注： 与javascript字符串表达方式不同的JSON必须使用双引号，单引号会出现错误 
#####1.2 对象
   与javascript字面量不同的是，JSON对象中要求给属性家双引号，没有变量声明，末尾没有分号，例如
   <pre>
      {
		  "name": "licop",
		  "age": 20, 
		  "school": "upc"
	  }
   </pre>
   属性值可以是简单值，也可以是复杂值，属性值可以嵌套对象，例如
   <pre>
      {
		  "name": "licop",
		  "age": 20,  
		  "school": {
		       "name": "upc",
		       "location": "qingdao"
		  }
	  }
   </pre>
   
   ![object](object.gif)
#####1.3 数组
   数组的用法和javascript的用法相同,没有变量和分号。
    <pre>["licop", 20, "upc"]</pre>
    ![array](array.gif)
    把数组和对象结合起来，可以构成更复杂的数据集合， 例如：
    <pre>
	    [
		  {
		    "name": "licop",
		    "age": 20,  
		    "school": "upc"
		  },
		  {
		    "name": "licodo",
		    "age": 20,  
		    "school": {
		       "name": "upc",
		       "location": "qingdao"
		    } 
		  }
		]
    </pre>
    数组和对象通常是json数据结构的最外层形式，能够利用他们创造出各种各样的数据结构。
 
###2.解析与序列化

   ECMAScript5定义了一个原生的JSON对象， 分别用JSON.stringify()和JSON.parse()将对象序列化为JSON字符串或者将JSON字符串解析成一个javascript对象，原生的JSON对象支持ie8+。

#####2.1 序列化
    
  JSON.stringify()除了要接受咬序列化的javascript对象外，还可以接受另外两个参数，一个参数是过滤器，可以是一个数组，也可以是一个函数，另一个参数，表示是否在JSON字符串中保留缩进。
   例如：
   <pre>
       var people = {
                name: "licop",
                age: 20,
                school: {
                    name: "upc",
                    location: "qingdao"
                }
            }
        var jsonText = JSON.stringify(people);
    
   则 jsonText = {"name":"licop","age":20,"school":{"name":"upc","location":"qingdao"}} 
   </pre>
   
   加入数组过滤器：
   <pre>
	   var jsonText = JSON.stringify(people, ["name", "school"]);
	     
则 jsonText = {"name":"licop","school":{"name":"upc"}} , 只会序列化数组中包含的对象（包括嵌套的对象）。
   </pre>
   
   加入函数过滤器
   <pre>
        var jsonText = JSON.stringify(people, function(key, value) {
            switch(key) {
                case "name":
                    return "licodo";
                case "age":
                    return 21;
                case "school":
                    return undefined;
                default:
                    return value;
            }
        });
        函数接受两个参数，属性名和属性值，根据属性名就可以知道如何处理要序列化对象中的属性，要注意一点如果属性值是undefined,那么相应的属性就会被忽略。
   </pre>
   字符串缩进
   <pre>
       var  jsonText = JSON.stringify(people, null, 4);
   </pre>
   则字符串会自动换行，并缩进四个空格。
   
   toJSON方法
     可以为任何对象添加toString方法，例如：
     <pre>
        var people = {
                name: "licop",
                age: 20,
                school: {
                    name: "upc",
                    location: "qingdao"
                },
                toJSON: function() {
                    return this.age;
                }
            };
     </pre>
   如果要序列化的对象中有toJSON方法，并能返回有效的值，则首先调用改方法。  
   则jsonText为20。
   
#####2.2 解析
   可以将json字符串解析成函数对象
   <pre>
       var peopleCopy = JSON.parse(jsonText, function(key, value) {
                if (key == "birth") {
                    return new Date(value);
                } else {
                    return value;
                }
            });
   </pre>
   
   可以向其传递一个函数，函数有两个参数，一个键一个值。

###3. 兼容性
    
  原生的javascript对象只支持ie8以上和其他的主流浏览器，如果想兼容ie8及以下，可以使用Douglas Crockford的json2.js， [JSON-js](https://github.com/douglascrockford/JSON-js), 使用方法和原生的js类似。
  
###4. sublime插件

  当然sublime上还是有好的JSON插件的，比如[Pretty JSON](https://packagecontrol.io/packages/Pretty%20JSON),就可以帮助你美化，差错，压缩json代码。
   
   
   
   
   
   
   
   
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
   
   
  
