var coreLoaded=false;document.addEventListener("DOMContentLoaded",function(event){loadCore()});function loadCore(){loadScript("../GeoGebraCore.wdgt/","scripts/deployggb.js",loadApplet);for(var index=1;index<10;index++){loadScript("../GeoGebraCore-"+index+".wdgt/","scripts/deployggb.js",loadApplet)}}function loadScript(basedir,path,callback){var script=document.createElement("script");script.type="text/javascript";script.src=basedir+path;script.onload=function(){callback(basedir)};document.getElementsByTagName("head")[0].appendChild(script)}function loadStyle(basedir,path){var style=document.createElement("link");style.type="text/css";style.rel="stylesheet";style.media="screen";style.href=basedir+path;document.getElementsByTagName("head")[0].appendChild(style)}function loadApplet(basedir){if(!coreLoaded){coreLoaded=true;start(basedir)}}