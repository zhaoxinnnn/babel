(function (global, factory) {
	if (typeof define === "function" && define.amd) {
		define([], factory);
	} else if (typeof exports !== "undefined") {
		factory();
	} else {
		var mod = {
			exports: {}
		};
		factory();
		global.p1autoWatch = mod.exports;
	}
})(this, function () {
	'use strict';

	var employ = { name: 'zhaoxin', salay: "1.5" };
	var interceptor = {
		set: function set(receiver, property, value) {
			console.log('${property} is changed to ${value}');
			receiver[property] = value;
		}
	};
	employ = Proxy(employ, interceptor);
	employ.salay = 2.0;
});