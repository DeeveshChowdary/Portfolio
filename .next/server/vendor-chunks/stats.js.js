/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/stats.js";
exports.ids = ["vendor-chunks/stats.js"];
exports.modules = {

/***/ "(ssr)/./node_modules/stats.js/build/stats.min.js":
/*!**************************************************!*\
  !*** ./node_modules/stats.js/build/stats.min.js ***!
  \**************************************************/
/***/ (function(module) {

eval("// stats.js - http://github.com/mrdoob/stats.js\n(function(f,e){ true?module.exports=e():0})(this,function(){var f=function(){function e(a){c.appendChild(a.dom);return a}function u(a){for(var d=0;d<c.children.length;d++)c.children[d].style.display=d===a?\"block\":\"none\";l=a}var l=0,c=document.createElement(\"div\");c.style.cssText=\"position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000\";c.addEventListener(\"click\",function(a){a.preventDefault();\nu(++l%c.children.length)},!1);var k=(performance||Date).now(),g=k,a=0,r=e(new f.Panel(\"FPS\",\"#0ff\",\"#002\")),h=e(new f.Panel(\"MS\",\"#0f0\",\"#020\"));if(self.performance&&self.performance.memory)var t=e(new f.Panel(\"MB\",\"#f08\",\"#201\"));u(0);return{REVISION:16,dom:c,addPanel:e,showPanel:u,begin:function(){k=(performance||Date).now()},end:function(){a++;var c=(performance||Date).now();h.update(c-k,200);if(c>g+1E3&&(r.update(1E3*a/(c-g),100),g=c,a=0,t)){var d=performance.memory;t.update(d.usedJSHeapSize/\n1048576,d.jsHeapSizeLimit/1048576)}return c},update:function(){k=this.end()},domElement:c,setMode:u}};f.Panel=function(e,f,l){var c=Infinity,k=0,g=Math.round,a=g(window.devicePixelRatio||1),r=80*a,h=48*a,t=3*a,v=2*a,d=3*a,m=15*a,n=74*a,p=30*a,q=document.createElement(\"canvas\");q.width=r;q.height=h;q.style.cssText=\"width:80px;height:48px\";var b=q.getContext(\"2d\");b.font=\"bold \"+9*a+\"px Helvetica,Arial,sans-serif\";b.textBaseline=\"top\";b.fillStyle=l;b.fillRect(0,0,r,h);b.fillStyle=f;b.fillText(e,t,v);\nb.fillRect(d,m,n,p);b.fillStyle=l;b.globalAlpha=.9;b.fillRect(d,m,n,p);return{dom:q,update:function(h,w){c=Math.min(c,h);k=Math.max(k,h);b.fillStyle=l;b.globalAlpha=1;b.fillRect(0,0,r,m);b.fillStyle=f;b.fillText(g(h)+\" \"+e+\" (\"+g(c)+\"-\"+g(k)+\")\",t,v);b.drawImage(q,d+a,m,n-a,p,d,m,n-a,p);b.fillRect(d+n-a,m,a,p);b.fillStyle=l;b.globalAlpha=.9;b.fillRect(d+n-a,m,a,g((1-h/w)*p))}}};return f});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvc3RhdHMuanMvYnVpbGQvc3RhdHMubWluLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsZUFBZSxLQUFzRCxvQkFBb0IsQ0FBNEQsQ0FBQyxrQkFBa0IsaUJBQWlCLGNBQWMscUJBQXFCLFNBQVMsY0FBYyxZQUFZLG9CQUFvQixxREFBcUQsSUFBSSx3Q0FBd0MsZ0NBQWdDLE1BQU0sT0FBTyxlQUFlLFlBQVksZUFBZSx1Q0FBdUM7QUFDbGYseUJBQXlCLEtBQUssbUhBQW1ILHNGQUFzRixLQUFLLE9BQU8sMERBQTBELDRCQUE0QixnQkFBZ0IsSUFBSSxnQ0FBZ0Msa0JBQWtCLG1EQUFtRCx5QkFBeUI7QUFDM2QsbUNBQW1DLFNBQVMsbUJBQW1CLGFBQWEsMEJBQTBCLHdCQUF3Qix3SkFBd0osVUFBVSxXQUFXLDRCQUE0QixhQUFhLHlCQUF5QixtREFBbUQscUJBQXFCLGNBQWMsb0JBQW9CLGNBQWM7QUFDcmUsb0JBQW9CLGNBQWMsaUJBQWlCLG9CQUFvQixPQUFPLDJCQUEyQixnQkFBZ0IsZ0JBQWdCLGNBQWMsZ0JBQWdCLG9CQUFvQixjQUFjLGtEQUFrRCxxQ0FBcUMsd0JBQXdCLGNBQWMsaUJBQWlCLHNDQUFzQyxTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGVyc29uYWwtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9zdGF0cy5qcy9idWlsZC9zdGF0cy5taW4uanM/ODhlYiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzdGF0cy5qcyAtIGh0dHA6Ly9naXRodWIuY29tL21yZG9vYi9zdGF0cy5qc1xuKGZ1bmN0aW9uKGYsZSl7XCJvYmplY3RcIj09PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT09dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1lKCk6XCJmdW5jdGlvblwiPT09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoZSk6Zi5TdGF0cz1lKCl9KSh0aGlzLGZ1bmN0aW9uKCl7dmFyIGY9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGEpe2MuYXBwZW5kQ2hpbGQoYS5kb20pO3JldHVybiBhfWZ1bmN0aW9uIHUoYSl7Zm9yKHZhciBkPTA7ZDxjLmNoaWxkcmVuLmxlbmd0aDtkKyspYy5jaGlsZHJlbltkXS5zdHlsZS5kaXNwbGF5PWQ9PT1hP1wiYmxvY2tcIjpcIm5vbmVcIjtsPWF9dmFyIGw9MCxjPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7Yy5zdHlsZS5jc3NUZXh0PVwicG9zaXRpb246Zml4ZWQ7dG9wOjA7bGVmdDowO2N1cnNvcjpwb2ludGVyO29wYWNpdHk6MC45O3otaW5kZXg6MTAwMDBcIjtjLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGZ1bmN0aW9uKGEpe2EucHJldmVudERlZmF1bHQoKTtcbnUoKytsJWMuY2hpbGRyZW4ubGVuZ3RoKX0sITEpO3ZhciBrPShwZXJmb3JtYW5jZXx8RGF0ZSkubm93KCksZz1rLGE9MCxyPWUobmV3IGYuUGFuZWwoXCJGUFNcIixcIiMwZmZcIixcIiMwMDJcIikpLGg9ZShuZXcgZi5QYW5lbChcIk1TXCIsXCIjMGYwXCIsXCIjMDIwXCIpKTtpZihzZWxmLnBlcmZvcm1hbmNlJiZzZWxmLnBlcmZvcm1hbmNlLm1lbW9yeSl2YXIgdD1lKG5ldyBmLlBhbmVsKFwiTUJcIixcIiNmMDhcIixcIiMyMDFcIikpO3UoMCk7cmV0dXJue1JFVklTSU9OOjE2LGRvbTpjLGFkZFBhbmVsOmUsc2hvd1BhbmVsOnUsYmVnaW46ZnVuY3Rpb24oKXtrPShwZXJmb3JtYW5jZXx8RGF0ZSkubm93KCl9LGVuZDpmdW5jdGlvbigpe2ErKzt2YXIgYz0ocGVyZm9ybWFuY2V8fERhdGUpLm5vdygpO2gudXBkYXRlKGMtaywyMDApO2lmKGM+ZysxRTMmJihyLnVwZGF0ZSgxRTMqYS8oYy1nKSwxMDApLGc9YyxhPTAsdCkpe3ZhciBkPXBlcmZvcm1hbmNlLm1lbW9yeTt0LnVwZGF0ZShkLnVzZWRKU0hlYXBTaXplL1xuMTA0ODU3NixkLmpzSGVhcFNpemVMaW1pdC8xMDQ4NTc2KX1yZXR1cm4gY30sdXBkYXRlOmZ1bmN0aW9uKCl7az10aGlzLmVuZCgpfSxkb21FbGVtZW50OmMsc2V0TW9kZTp1fX07Zi5QYW5lbD1mdW5jdGlvbihlLGYsbCl7dmFyIGM9SW5maW5pdHksaz0wLGc9TWF0aC5yb3VuZCxhPWcod2luZG93LmRldmljZVBpeGVsUmF0aW98fDEpLHI9ODAqYSxoPTQ4KmEsdD0zKmEsdj0yKmEsZD0zKmEsbT0xNSphLG49NzQqYSxwPTMwKmEscT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO3Eud2lkdGg9cjtxLmhlaWdodD1oO3Euc3R5bGUuY3NzVGV4dD1cIndpZHRoOjgwcHg7aGVpZ2h0OjQ4cHhcIjt2YXIgYj1xLmdldENvbnRleHQoXCIyZFwiKTtiLmZvbnQ9XCJib2xkIFwiKzkqYStcInB4IEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmXCI7Yi50ZXh0QmFzZWxpbmU9XCJ0b3BcIjtiLmZpbGxTdHlsZT1sO2IuZmlsbFJlY3QoMCwwLHIsaCk7Yi5maWxsU3R5bGU9ZjtiLmZpbGxUZXh0KGUsdCx2KTtcbmIuZmlsbFJlY3QoZCxtLG4scCk7Yi5maWxsU3R5bGU9bDtiLmdsb2JhbEFscGhhPS45O2IuZmlsbFJlY3QoZCxtLG4scCk7cmV0dXJue2RvbTpxLHVwZGF0ZTpmdW5jdGlvbihoLHcpe2M9TWF0aC5taW4oYyxoKTtrPU1hdGgubWF4KGssaCk7Yi5maWxsU3R5bGU9bDtiLmdsb2JhbEFscGhhPTE7Yi5maWxsUmVjdCgwLDAscixtKTtiLmZpbGxTdHlsZT1mO2IuZmlsbFRleHQoZyhoKStcIiBcIitlK1wiIChcIitnKGMpK1wiLVwiK2coaykrXCIpXCIsdCx2KTtiLmRyYXdJbWFnZShxLGQrYSxtLG4tYSxwLGQsbSxuLWEscCk7Yi5maWxsUmVjdChkK24tYSxtLGEscCk7Yi5maWxsU3R5bGU9bDtiLmdsb2JhbEFscGhhPS45O2IuZmlsbFJlY3QoZCtuLWEsbSxhLGcoKDEtaC93KSpwKSl9fX07cmV0dXJuIGZ9KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/stats.js/build/stats.min.js\n");

/***/ })

};
;