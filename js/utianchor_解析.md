###utiAnchor 解析

#####gobal variables：

  configMap: <br>
  
  +  regex_anchor_clean1: 获取字符串开头的#或者！
  +  regex_anchor_clean2: 获取字符串中最后一个？的所有字符<br>
  +  settable_mao_key:              <br>
  +  schema-map:         <br>
  
 ---------------------
 
#####utility methods

+   <pre>
     getErrorReject = function ( message  ) {
	      var error     = new Error();
	      error.name    = 'Anchor Schema Reject';
	      error.message = message;
	      return error;
    };
    </pre>   
    
    
+   <pre>
       // return 'Object', 'Number', 'String', 'Boolean', 'Undefined', 'Array', 'Null'
       
       getVarType = function ( data  ) {
	      if ( data === undefined  ) { return 'Undefined'; }
	      if ( data === null  ) { return 'Null'; }
	      return {}.toString.call( data ).slice(8,-1);
      };
    </pre>
    
    用于判断数据类型
+   <pre>
       getCleanAnchorString = function () {
	      return String( document.location.href.split('#')[1] || '' )
	        // remove any leading pounds or bangs
	        .replace( configMap.regex_anchor_clean1 , '' )
	        // snip off after question-mark ( a ClickStreet bug )
	        .replace( configMap.regex_anchor_clean2 , '' )
	        ;
	    };
    </pre>
    用于除去开头＃号!号，剪掉最后一个？后面的所有字符串
    
＋  <pre>
       parseStringToMap = function ( arg_map  ) {
	      var
	        input_string    = arg_map.input_string    || '',
	        delimit_char    = arg_map.delimit_char    || '&',
	        delimit_kv_char = arg_map.delimit_kv_char || '=',
	        output_map      = {},
	        splitter_array, i, key_val_array;
	        splitter_array = input_string.split( delimit_char );
	        for ( i = 0; i < splitter_array.length; i++  ) {
	        key_val_array = splitter_array[i].split( delimit_kv_char );
	        if ( key_val_array.length === 1  ) {
	          output_map[decodeURIComponent( key_val_array[0] )] = true;
	        }
	        else if ( key_val_array.length === 2  ) {
	          output_map[decodeURIComponent( key_val_array[0] )]
	            = decodeURIComponent( key_val_array[1] )
	            ;
	        }
	      }
	      return output_map;
    };
   </pre>
   
   将传入的参数input_string ＝ 两边的字符，解码存储在output_map中，一个作为key值，一个作为value值
   
   
    
    
    
    
    
    
    
    
    