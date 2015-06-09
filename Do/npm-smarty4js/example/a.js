(function(){var __ret={render:function(__tn, __da){if(typeof __tn=="object"){__da=__tn;__tn=undefined;}if(typeof __tn=="string"){__da=__da||{};}
var __h="",__cap={},__ext={},__assign,__sec={},__for={},smarty={foreach:{},capture:{},ldelim:"{{",rdelim:"}}"},__dre=/^\d+(\.\d+)?$/g,__nre=/[\.\(\)\[\]\{\}\+\-\*\?\|\^\$]/g,
__v=function(){var __va=Array.prototype.slice.call(arguments);for(var __vi=0,__vl=__va.length;__vi<__vl;__vi++){var __vd=__va[__vi];if(__vd!=undefined&&""+__vd!="NaN"){if(typeof __vd=="function"){return __vd();}else{return __vd;}}}};
__h+="<html><head> <title>";function undefinedtitle(__p){__p.c();return 1;};undefinedtitle({c: function(){
__h+="Default Page Title";return 1;}});
__h+="</title> <style> div { width:200px; } </style></head><body> <div>City: ";
__h+=__v(__v(__v(__da["info"],{}).location,{}).city);
__h+="</div> <div>Street: ";
__h+=__v(__v(__v(__da["info"],{}).location,{}).street);
__h+="</div> <script src=\"a.js\"></script> <script> var aaa = 1000; </script></body></html>";
if(__tn){return __func["__fn__"+__tn](__da);}
return __h;}};
if (typeof exports=="object" && typeof module=="object"){exports=module.exports=__ret;}
else if (typeof define=="function" && define.amd){define(__ret);}
return __ret;})();