/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/potpack";
exports.ids = ["vendor-chunks/potpack"];
exports.modules = {

/***/ "(ssr)/./node_modules/potpack/index.js":
/*!***************************************!*\
  !*** ./node_modules/potpack/index.js ***!
  \***************************************/
/***/ (function(module) {

eval("(function (global, factory) {\n true ? module.exports = factory() :\n0;\n})(this, (function () { 'use strict';\n\nfunction potpack(boxes) {\n\n    // calculate total box area and maximum box width\n    var area = 0;\n    var maxWidth = 0;\n\n    for (var i$1 = 0, list = boxes; i$1 < list.length; i$1 += 1) {\n        var box = list[i$1];\n\n        area += box.w * box.h;\n        maxWidth = Math.max(maxWidth, box.w);\n    }\n\n    // sort the boxes for insertion by height, descending\n    boxes.sort(function (a, b) { return b.h - a.h; });\n\n    // aim for a squarish resulting container,\n    // slightly adjusted for sub-100% space utilization\n    var startWidth = Math.max(Math.ceil(Math.sqrt(area / 0.95)), maxWidth);\n\n    // start with a single empty space, unbounded at the bottom\n    var spaces = [{x: 0, y: 0, w: startWidth, h: Infinity}];\n\n    var width = 0;\n    var height = 0;\n\n    for (var i$2 = 0, list$1 = boxes; i$2 < list$1.length; i$2 += 1) {\n        // look through spaces backwards so that we check smaller spaces first\n        var box$1 = list$1[i$2];\n\n        for (var i = spaces.length - 1; i >= 0; i--) {\n            var space = spaces[i];\n\n            // look for empty spaces that can accommodate the current box\n            if (box$1.w > space.w || box$1.h > space.h) { continue; }\n\n            // found the space; add the box to its top-left corner\n            // |-------|-------|\n            // |  box  |       |\n            // |_______|       |\n            // |         space |\n            // |_______________|\n            box$1.x = space.x;\n            box$1.y = space.y;\n\n            height = Math.max(height, box$1.y + box$1.h);\n            width = Math.max(width, box$1.x + box$1.w);\n\n            if (box$1.w === space.w && box$1.h === space.h) {\n                // space matches the box exactly; remove it\n                var last = spaces.pop();\n                if (i < spaces.length) { spaces[i] = last; }\n\n            } else if (box$1.h === space.h) {\n                // space matches the box height; update it accordingly\n                // |-------|---------------|\n                // |  box  | updated space |\n                // |_______|_______________|\n                space.x += box$1.w;\n                space.w -= box$1.w;\n\n            } else if (box$1.w === space.w) {\n                // space matches the box width; update it accordingly\n                // |---------------|\n                // |      box      |\n                // |_______________|\n                // | updated space |\n                // |_______________|\n                space.y += box$1.h;\n                space.h -= box$1.h;\n\n            } else {\n                // otherwise the box splits the space into two spaces\n                // |-------|-----------|\n                // |  box  | new space |\n                // |_______|___________|\n                // | updated space     |\n                // |___________________|\n                spaces.push({\n                    x: space.x + box$1.w,\n                    y: space.y,\n                    w: space.w - box$1.w,\n                    h: box$1.h\n                });\n                space.y += box$1.h;\n                space.h -= box$1.h;\n            }\n            break;\n        }\n    }\n\n    return {\n        w: width, // container width\n        h: height, // container height\n        fill: (area / (width * height)) || 0 // space utilization\n    };\n}\n\nreturn potpack;\n\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcG90cGFjay9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBLEtBQTREO0FBQzVELENBQ3NHO0FBQ3RHLENBQUMsdUJBQXVCOztBQUV4Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsb0NBQW9DLG1CQUFtQjtBQUN2RDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQ0FBaUMsbUJBQW1COztBQUVwRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsdUNBQXVDOztBQUUxRDtBQUNBOztBQUVBLHNDQUFzQyxxQkFBcUI7QUFDM0Q7QUFDQTs7QUFFQSx3Q0FBd0MsUUFBUTtBQUNoRDs7QUFFQTtBQUNBLDBEQUEwRDs7QUFFMUQsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQSx5Q0FBeUM7O0FBRXpDLGNBQWM7QUFDZCxpREFBaUQ7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxjQUFjO0FBQ2QsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BlcnNvbmFsLXdlYnNpdGUvLi9ub2RlX21vZHVsZXMvcG90cGFjay9pbmRleC5qcz8xYTRkIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG50eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKSA6XG50eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoZmFjdG9yeSkgOlxuKGdsb2JhbCA9IHR5cGVvZiBnbG9iYWxUaGlzICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbFRoaXMgOiBnbG9iYWwgfHwgc2VsZiwgZ2xvYmFsLnBvdHBhY2sgPSBmYWN0b3J5KCkpO1xufSkodGhpcywgKGZ1bmN0aW9uICgpIHsgJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBwb3RwYWNrKGJveGVzKSB7XG5cbiAgICAvLyBjYWxjdWxhdGUgdG90YWwgYm94IGFyZWEgYW5kIG1heGltdW0gYm94IHdpZHRoXG4gICAgdmFyIGFyZWEgPSAwO1xuICAgIHZhciBtYXhXaWR0aCA9IDA7XG5cbiAgICBmb3IgKHZhciBpJDEgPSAwLCBsaXN0ID0gYm94ZXM7IGkkMSA8IGxpc3QubGVuZ3RoOyBpJDEgKz0gMSkge1xuICAgICAgICB2YXIgYm94ID0gbGlzdFtpJDFdO1xuXG4gICAgICAgIGFyZWEgKz0gYm94LncgKiBib3guaDtcbiAgICAgICAgbWF4V2lkdGggPSBNYXRoLm1heChtYXhXaWR0aCwgYm94LncpO1xuICAgIH1cblxuICAgIC8vIHNvcnQgdGhlIGJveGVzIGZvciBpbnNlcnRpb24gYnkgaGVpZ2h0LCBkZXNjZW5kaW5nXG4gICAgYm94ZXMuc29ydChmdW5jdGlvbiAoYSwgYikgeyByZXR1cm4gYi5oIC0gYS5oOyB9KTtcblxuICAgIC8vIGFpbSBmb3IgYSBzcXVhcmlzaCByZXN1bHRpbmcgY29udGFpbmVyLFxuICAgIC8vIHNsaWdodGx5IGFkanVzdGVkIGZvciBzdWItMTAwJSBzcGFjZSB1dGlsaXphdGlvblxuICAgIHZhciBzdGFydFdpZHRoID0gTWF0aC5tYXgoTWF0aC5jZWlsKE1hdGguc3FydChhcmVhIC8gMC45NSkpLCBtYXhXaWR0aCk7XG5cbiAgICAvLyBzdGFydCB3aXRoIGEgc2luZ2xlIGVtcHR5IHNwYWNlLCB1bmJvdW5kZWQgYXQgdGhlIGJvdHRvbVxuICAgIHZhciBzcGFjZXMgPSBbe3g6IDAsIHk6IDAsIHc6IHN0YXJ0V2lkdGgsIGg6IEluZmluaXR5fV07XG5cbiAgICB2YXIgd2lkdGggPSAwO1xuICAgIHZhciBoZWlnaHQgPSAwO1xuXG4gICAgZm9yICh2YXIgaSQyID0gMCwgbGlzdCQxID0gYm94ZXM7IGkkMiA8IGxpc3QkMS5sZW5ndGg7IGkkMiArPSAxKSB7XG4gICAgICAgIC8vIGxvb2sgdGhyb3VnaCBzcGFjZXMgYmFja3dhcmRzIHNvIHRoYXQgd2UgY2hlY2sgc21hbGxlciBzcGFjZXMgZmlyc3RcbiAgICAgICAgdmFyIGJveCQxID0gbGlzdCQxW2kkMl07XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IHNwYWNlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgdmFyIHNwYWNlID0gc3BhY2VzW2ldO1xuXG4gICAgICAgICAgICAvLyBsb29rIGZvciBlbXB0eSBzcGFjZXMgdGhhdCBjYW4gYWNjb21tb2RhdGUgdGhlIGN1cnJlbnQgYm94XG4gICAgICAgICAgICBpZiAoYm94JDEudyA+IHNwYWNlLncgfHwgYm94JDEuaCA+IHNwYWNlLmgpIHsgY29udGludWU7IH1cblxuICAgICAgICAgICAgLy8gZm91bmQgdGhlIHNwYWNlOyBhZGQgdGhlIGJveCB0byBpdHMgdG9wLWxlZnQgY29ybmVyXG4gICAgICAgICAgICAvLyB8LS0tLS0tLXwtLS0tLS0tfFxuICAgICAgICAgICAgLy8gfCAgYm94ICB8ICAgICAgIHxcbiAgICAgICAgICAgIC8vIHxfX19fX19ffCAgICAgICB8XG4gICAgICAgICAgICAvLyB8ICAgICAgICAgc3BhY2UgfFxuICAgICAgICAgICAgLy8gfF9fX19fX19fX19fX19fX3xcbiAgICAgICAgICAgIGJveCQxLnggPSBzcGFjZS54O1xuICAgICAgICAgICAgYm94JDEueSA9IHNwYWNlLnk7XG5cbiAgICAgICAgICAgIGhlaWdodCA9IE1hdGgubWF4KGhlaWdodCwgYm94JDEueSArIGJveCQxLmgpO1xuICAgICAgICAgICAgd2lkdGggPSBNYXRoLm1heCh3aWR0aCwgYm94JDEueCArIGJveCQxLncpO1xuXG4gICAgICAgICAgICBpZiAoYm94JDEudyA9PT0gc3BhY2UudyAmJiBib3gkMS5oID09PSBzcGFjZS5oKSB7XG4gICAgICAgICAgICAgICAgLy8gc3BhY2UgbWF0Y2hlcyB0aGUgYm94IGV4YWN0bHk7IHJlbW92ZSBpdFxuICAgICAgICAgICAgICAgIHZhciBsYXN0ID0gc3BhY2VzLnBvcCgpO1xuICAgICAgICAgICAgICAgIGlmIChpIDwgc3BhY2VzLmxlbmd0aCkgeyBzcGFjZXNbaV0gPSBsYXN0OyB9XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYm94JDEuaCA9PT0gc3BhY2UuaCkge1xuICAgICAgICAgICAgICAgIC8vIHNwYWNlIG1hdGNoZXMgdGhlIGJveCBoZWlnaHQ7IHVwZGF0ZSBpdCBhY2NvcmRpbmdseVxuICAgICAgICAgICAgICAgIC8vIHwtLS0tLS0tfC0tLS0tLS0tLS0tLS0tLXxcbiAgICAgICAgICAgICAgICAvLyB8ICBib3ggIHwgdXBkYXRlZCBzcGFjZSB8XG4gICAgICAgICAgICAgICAgLy8gfF9fX19fX198X19fX19fX19fX19fX19ffFxuICAgICAgICAgICAgICAgIHNwYWNlLnggKz0gYm94JDEudztcbiAgICAgICAgICAgICAgICBzcGFjZS53IC09IGJveCQxLnc7XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYm94JDEudyA9PT0gc3BhY2Uudykge1xuICAgICAgICAgICAgICAgIC8vIHNwYWNlIG1hdGNoZXMgdGhlIGJveCB3aWR0aDsgdXBkYXRlIGl0IGFjY29yZGluZ2x5XG4gICAgICAgICAgICAgICAgLy8gfC0tLS0tLS0tLS0tLS0tLXxcbiAgICAgICAgICAgICAgICAvLyB8ICAgICAgYm94ICAgICAgfFxuICAgICAgICAgICAgICAgIC8vIHxfX19fX19fX19fX19fX198XG4gICAgICAgICAgICAgICAgLy8gfCB1cGRhdGVkIHNwYWNlIHxcbiAgICAgICAgICAgICAgICAvLyB8X19fX19fX19fX19fX19ffFxuICAgICAgICAgICAgICAgIHNwYWNlLnkgKz0gYm94JDEuaDtcbiAgICAgICAgICAgICAgICBzcGFjZS5oIC09IGJveCQxLmg7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gb3RoZXJ3aXNlIHRoZSBib3ggc3BsaXRzIHRoZSBzcGFjZSBpbnRvIHR3byBzcGFjZXNcbiAgICAgICAgICAgICAgICAvLyB8LS0tLS0tLXwtLS0tLS0tLS0tLXxcbiAgICAgICAgICAgICAgICAvLyB8ICBib3ggIHwgbmV3IHNwYWNlIHxcbiAgICAgICAgICAgICAgICAvLyB8X19fX19fX3xfX19fX19fX19fX3xcbiAgICAgICAgICAgICAgICAvLyB8IHVwZGF0ZWQgc3BhY2UgICAgIHxcbiAgICAgICAgICAgICAgICAvLyB8X19fX19fX19fX19fX19fX19fX3xcbiAgICAgICAgICAgICAgICBzcGFjZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHg6IHNwYWNlLnggKyBib3gkMS53LFxuICAgICAgICAgICAgICAgICAgICB5OiBzcGFjZS55LFxuICAgICAgICAgICAgICAgICAgICB3OiBzcGFjZS53IC0gYm94JDEudyxcbiAgICAgICAgICAgICAgICAgICAgaDogYm94JDEuaFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHNwYWNlLnkgKz0gYm94JDEuaDtcbiAgICAgICAgICAgICAgICBzcGFjZS5oIC09IGJveCQxLmg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHc6IHdpZHRoLCAvLyBjb250YWluZXIgd2lkdGhcbiAgICAgICAgaDogaGVpZ2h0LCAvLyBjb250YWluZXIgaGVpZ2h0XG4gICAgICAgIGZpbGw6IChhcmVhIC8gKHdpZHRoICogaGVpZ2h0KSkgfHwgMCAvLyBzcGFjZSB1dGlsaXphdGlvblxuICAgIH07XG59XG5cbnJldHVybiBwb3RwYWNrO1xuXG59KSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/potpack/index.js\n");

/***/ })

};
;