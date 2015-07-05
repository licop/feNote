/*
 * licodo.shell.js
 * Shell.module for Licodo
*/

licodo.shell = (function() {
    //------------Begin module scope variables
    var configmap = {
        main_html: String()
            + '<div class = "licodo-shell-head">'
                + '<div class = "licodo-shell-logo"></div>'
                + '<ul class = "licodo-shell-links">'
                    + '<li id = "link-item1"><a href = "http://www.cnblogs.com/licop/" target = "_blank"></a></li>'
                    + '<li id = "link-item2"><a href = "https://github.com/licop" target = "_blank"></a></li>'
                    + '<li id = "link-item3"><a href = "http://weibo.com/licoop" target = "_blank"></a></li>'
                +  '</ul>'
            + '</div>'
            + '<div class = "licodo-shell-contain">'
                + '<div class = "licodo-shell-classify"></div>'
                + '<div class = "licodo-shell-task"></div>'
                + '<div class = "licodo-shell-text"></div>'
            + '</div>'
            + '<div class = "licodo-shell-overlay"></div>'
            + '<div class = "licodo-shell-info"></div>',
    },
        stateMap = {

        },
        selectorMap = {},
        initModule, setSelectorMap;
    //------------Begin dom method
    setSelectorMap = function() {
        selectorMap = {
            $classify: $('.licodo-shell-classify')[0],
            $task: $('.licodo-shell-task')[0],
            $text: $('.licodo-shell-text')[0],
        }

    }
    //------------Begin public method
    initModule = function(selector) {
        //localStorage.clear();
        selector.innerHTML = configmap.main_html;
        setSelectorMap();
        licodo.data.initModule();
        licodo.classify.initModule(selectorMap.$classify);
        licodo.task.initModule(selectorMap.$task);
        licodo.text.initModule(selectorMap.$text);

    }

    return {initModule: initModule};
})()