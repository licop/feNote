  *   css的class的渲染的先后顺序，取决于的css文件的先后顺序，后出现可以将前面的覆盖；
  *   placeholder属性会在所属的区域内显示文本，而当所属区域内有文字输入时，placeholder 的文本将被隐藏，HTML5属性。
   <pre>
       //checking for placeholder support
       function hasPlaceholder() {
          var input = document.createElement('input');
          return ('placeholder' in input);
       }
   </pre>   
   