###安装gulp遇见的问题和解决

首先你可以根据以下两个教程安装gulp，如果你一次性就安装成功了，那么恭喜你, you are very lucky, 为什么我就这么悲催。  

[前端构建工具gulp入门教程](http://segmentfault.com/a/1190000000372547)

[gulp入门](http://www.open-open.com/lib/view/open1417068223049.html)

首先要在你的项目里建一个格式正确的package.json文件，注意格式正确，格式一定要正确，重要的事情要说三遍。

具体package.json是什么，以及该怎么写，可以参考[阮一峰的教程](http://javascript.ruanyifeng.com/nodejs/packagejson.html)

+  着重要强调的是，如果出现 No repository field  错误，
  可能是package.json文件中缺失一下元素

<pre>
  "repository": {
      "type": "git",
      "url": "git://github.com/username/repository.git"
   }
</pre>

具体可以参考[npm WARN package.json: No repository field](http://stackoverflow.com/questions/16827858/npm-warn-package-json-no-repository-field)



+   当出现以下错误时，"Error: Attempt to unlock XXX, which hasn't been locked"， 
可以参考如下回答  [NPM cannot install dependencies - Attempt to unlock something which hasn't been locked](http://stackoverflow.com/questions/22152162/npm-cannot-install-dependencies-attempt-to-unlock-something-which-hasnt-been/22207869#22207869)
