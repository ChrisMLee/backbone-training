/*! backbone-localstorage v0.3.2 08-06-2014, 12:18:47 */
(function(a){var b="unknown",c="",d=a.Backbone.sync,e=a.Backbone.LocalStorage={};e.VERSION="0.3.1",e._setData=function(c,d){a.localStorage.setItem(b+":"+c,JSON.stringify(d))},e._getData=function(c){var d=a.localStorage.getItem(b+":"+c);return"string"==typeof d?JSON.parse(d):d},e._clear=function(c){if(c)a.localStorage.clear();else for(var d in a.localStorage)0===d.indexOf(b)&&a.localStorage.removeItem(d)},e.sync=function(a,b,c){if("read"===a&&("object"==typeof this.localStorage||void 0!==this.localStorage&&null!==this.localStorage&&"true"===this.localStorage.toString().toLowerCase())){var f=_.result(b,"url"),g=e._getData(f+":timestamp");if(void 0!==f&&null!==f){var h=e._getData(f);if(null===h||void 0===h||c.forceRefresh||void 0!==g&&b.localStorage.maxRefresh&&(new Date).getTime()-g>b.localStorage.maxRefresh){var i=c.success;c.success=function(a){try{e._setData(f,a),e._setData(f+":timestamp",(new Date).getTime())}catch(b){b===QUOTA_EXCEEDED_ERR&&e._clear()}i&&i.apply(this,arguments)},d.apply(this,[a,b,c])}else c.success.apply(this,[h,"success",null])}else d.apply(this,arguments)}else d.apply(this,arguments)},e.setVersion=function(a){var b=e._getData("version");null!==b&&b!==a&&e._clear(!1),e._setData("version",a),c=a},e.getVersion=function(){return c},e.setPrefix=function(a){b=a},e.getPrefix=function(){return b},e.isSupported=function(){try{var b=void 0!==a.localStorage;return b&&(localStorage.setItem("storage",""),localStorage.removeItem("storage")),b}catch(c){return!1}},e.isSupported()&&(a.Backbone.sync=e.sync)}).call(this,window,Backbone);
