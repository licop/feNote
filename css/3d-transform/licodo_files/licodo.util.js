/*
 * licodo.util.js
 * General Javascript Untilities
*/

licodo.util = (function() {
    var makeError, setConfigMap, getObjByKey, 
        getIndexByKey, addClassOn, filterXSS;
    
    makeError = function(name_text, msg_text, data) {
        var error = new Error();
        error.name = name_text;
        error.message = msg_text;
        if (data) {
            error.data = data;
        }
        return error;
    }
    //用于同步对象
    setConfigMap = function(arg_map) {
        var input_map = arg_map.input_map,
            settable_map = arg_map.settable_map,
            config_map = arg_map.config_map,
            keyName, error;
        for (keyName in input_map) {
            if (input_map.hasOwnProperty(keyName)) {
                if (settable_map.hasOwnProperty(keyName)) {
                    config_map[keyName] = input_map[keyName];
                }
                else {
                    error = makeError("Bad input", "setting config key" + keyName + "is not support");
                    throw(error);
                }
            }
        }
    }
    //根据键值获取对象
    getObjByKey = function(obj, key, value) {
        for (var i = 0; i < obj.length; i++) {
            if (obj[i][key] === value) {
                return obj[i];
            } 
        }  
    }
    //根据键值获得多个对象
    getObjsByKey = function(obj, key, value) {
        var objArr = [];
        for (var i = 0; i < obj.length; i++) {
            if (obj[i][key] === value) {
                objArr.push(obj[i]);
            } 
        } 
        return objArr;
    }
    //根据键值获得对象所在的位置
    getIndexByKey = function(obj, key, value) {
        for (var i = 0; i < obj.length; i++) {
            if (obj[i][key] === value) {
                return i;
            } 
        }  
    }
   
    addClassOn = function(target, classNameOn) {
        removeClass($('.' + classNameOn)[0], classNameOn);
        addClass(target, classNameOn);
    }
    
    //用于html转码，防止xss注入
    filterXSS = function(html) {
        return html.replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/&/g, "&amp;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#x27;")
            .replace(/\//g, "&#x2f")
    } 

    return {
        makeError: makeError,
        setConfigMap: setConfigMap,
        getObjByKey: getObjByKey,
        getObjsByKey: getObjsByKey,
        getIndexByKey: getIndexByKey,
        addClassOn: addClassOn,
        filterXSS: filterXSS,
    }
})();

