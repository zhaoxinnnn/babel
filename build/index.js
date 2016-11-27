(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["babel-poly-fill"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("babel-poly-fill"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.babelPolyFill);
    global.index = mod.exports;
  }
})(this, function () {
  "use strict";

  console.log(Array.from("aaa"));

  var sum = function sum(a, b) {
    return a + b;
  };

  var x = sum(1, 2);
  var g = sum(1, 2);

  console.log(x);
});