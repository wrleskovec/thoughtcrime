/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _ifvisible = __webpack_require__(660);
	
	var _ifvisible2 = _interopRequireDefault(_ifvisible);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function sendFocus(focus) {
	  console.log('Sending: ' + focus);
	  chrome.runtime.sendMessage({ focus: focus });
	}
	sendFocus('focus');
	
	_ifvisible2.default.on('blur', function () {
	  return sendFocus('blur');
	});
	_ifvisible2.default.on('focus', function () {
	  return sendFocus('focus');
	});

/***/ },

/***/ 660:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;(function() {
	  (function(root, factory) {
	    if (true) {
	      return !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	        return factory();
	      }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports === 'object') {
	      return module.exports = factory();
	    } else {
	      return root.ifvisible = factory();
	    }
	  })(this, function() {
	    var addEvent, customEvent, doc, fireEvent, hidden, idleStartedTime, idleTime, ie, ifvisible, init, initialized, status, trackIdleStatus, visibilityChange;
	    ifvisible = {};
	    doc = document;
	    initialized = false;
	    status = "active";
	    idleTime = 60000;
	    idleStartedTime = false;
	    customEvent = (function() {
	      var S4, addCustomEvent, cgid, fireCustomEvent, guid, listeners, removeCustomEvent;
	      S4 = function() {
	        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
	      };
	      guid = function() {
	        return S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4();
	      };
	      listeners = {};
	      cgid = '__ceGUID';
	      addCustomEvent = function(obj, event, callback) {
	        obj[cgid] = undefined;
	        if (!obj[cgid]) {
	          obj[cgid] = "ifvisible.object.event.identifier";
	        }
	        if (!listeners[obj[cgid]]) {
	          listeners[obj[cgid]] = {};
	        }
	        if (!listeners[obj[cgid]][event]) {
	          listeners[obj[cgid]][event] = [];
	        }
	        return listeners[obj[cgid]][event].push(callback);
	      };
	      fireCustomEvent = function(obj, event, memo) {
	        var ev, j, len, ref, results;
	        if (obj[cgid] && listeners[obj[cgid]] && listeners[obj[cgid]][event]) {
	          ref = listeners[obj[cgid]][event];
	          results = [];
	          for (j = 0, len = ref.length; j < len; j++) {
	            ev = ref[j];
	            results.push(ev(memo || {}));
	          }
	          return results;
	        }
	      };
	      removeCustomEvent = function(obj, event, callback) {
	        var cl, i, j, len, ref;
	        if (callback) {
	          if (obj[cgid] && listeners[obj[cgid]] && listeners[obj[cgid]][event]) {
	            ref = listeners[obj[cgid]][event];
	            for (i = j = 0, len = ref.length; j < len; i = ++j) {
	              cl = ref[i];
	              if (cl === callback) {
	                listeners[obj[cgid]][event].splice(i, 1);
	                return cl;
	              }
	            }
	          }
	        } else {
	          if (obj[cgid] && listeners[obj[cgid]] && listeners[obj[cgid]][event]) {
	            return delete listeners[obj[cgid]][event];
	          }
	        }
	      };
	      return {
	        add: addCustomEvent,
	        remove: removeCustomEvent,
	        fire: fireCustomEvent
	      };
	    })();
	    addEvent = (function() {
	      var setListener;
	      setListener = false;
	      return function(el, ev, fn) {
	        if (!setListener) {
	          if (el.addEventListener) {
	            setListener = function(el, ev, fn) {
	              return el.addEventListener(ev, fn, false);
	            };
	          } else if (el.attachEvent) {
	            setListener = function(el, ev, fn) {
	              return el.attachEvent('on' + ev, fn, false);
	            };
	          } else {
	            setListener = function(el, ev, fn) {
	              return el['on' + ev] = fn;
	            };
	          }
	        }
	        return setListener(el, ev, fn);
	      };
	    })();
	    fireEvent = function(element, event) {
	      var evt;
	      if (doc.createEventObject) {
	        return element.fireEvent('on' + event, evt);
	      } else {
	        evt = doc.createEvent('HTMLEvents');
	        evt.initEvent(event, true, true);
	        return !element.dispatchEvent(evt);
	      }
	    };
	    ie = (function() {
	      var all, check, div, undef, v;
	      undef = void 0;
	      v = 3;
	      div = doc.createElement("div");
	      all = div.getElementsByTagName("i");
	      check = function() {
	        return (div.innerHTML = "<!--[if gt IE " + (++v) + "]><i></i><![endif]-->", all[0]);
	      };
	      while (check()) {
	        continue;
	      }
	      if (v > 4) {
	        return v;
	      } else {
	        return undef;
	      }
	    })();
	    hidden = false;
	    visibilityChange = void 0;
	    if (typeof doc.hidden !== "undefined") {
	      hidden = "hidden";
	      visibilityChange = "visibilitychange";
	    } else if (typeof doc.mozHidden !== "undefined") {
	      hidden = "mozHidden";
	      visibilityChange = "mozvisibilitychange";
	    } else if (typeof doc.msHidden !== "undefined") {
	      hidden = "msHidden";
	      visibilityChange = "msvisibilitychange";
	    } else if (typeof doc.webkitHidden !== "undefined") {
	      hidden = "webkitHidden";
	      visibilityChange = "webkitvisibilitychange";
	    }
	    trackIdleStatus = function() {
	      var timer, wakeUp;
	      timer = false;
	      wakeUp = function() {
	        clearTimeout(timer);
	        if (status !== "active") {
	          ifvisible.wakeup();
	        }
	        idleStartedTime = +(new Date());
	        return timer = setTimeout(function() {
	          if (status === "active") {
	            return ifvisible.idle();
	          }
	        }, idleTime);
	      };
	      wakeUp();
	      addEvent(doc, "mousemove", wakeUp);
	      addEvent(doc, "keyup", wakeUp);
	      addEvent(doc, "touchstart", wakeUp);
	      addEvent(window, "scroll", wakeUp);
	      ifvisible.focus(wakeUp);
	      return ifvisible.wakeup(wakeUp);
	    };
	    init = function() {
	      var blur;
	      if (initialized) {
	        return true;
	      }
	      if (hidden === false) {
	        blur = "blur";
	        if (ie < 9) {
	          blur = "focusout";
	        }
	        addEvent(window, blur, function() {
	          return ifvisible.blur();
	        });
	        addEvent(window, "focus", function() {
	          return ifvisible.focus();
	        });
	      } else {
	        addEvent(doc, visibilityChange, function() {
	          if (doc[hidden]) {
	            return ifvisible.blur();
	          } else {
	            return ifvisible.focus();
	          }
	        }, false);
	      }
	      initialized = true;
	      return trackIdleStatus();
	    };
	    ifvisible = {
	      setIdleDuration: function(seconds) {
	        return idleTime = seconds * 1000;
	      },
	      getIdleDuration: function() {
	        return idleTime;
	      },
	      getIdleInfo: function() {
	        var now, res;
	        now = +(new Date());
	        res = {};
	        if (status === "idle") {
	          res.isIdle = true;
	          res.idleFor = now - idleStartedTime;
	          res.timeLeft = 0;
	          res.timeLeftPer = 100;
	        } else {
	          res.isIdle = false;
	          res.idleFor = now - idleStartedTime;
	          res.timeLeft = (idleStartedTime + idleTime) - now;
	          res.timeLeftPer = (100 - (res.timeLeft * 100 / idleTime)).toFixed(2);
	        }
	        return res;
	      },
	      focus: function(callback) {
	        if (typeof callback === "function") {
	          this.on("focus", callback);
	        } else {
	          status = "active";
	          customEvent.fire(this, "focus");
	          customEvent.fire(this, "wakeup");
	          customEvent.fire(this, "statusChanged", {
	            status: status
	          });
	        }
	        return this;
	      },
	      blur: function(callback) {
	        if (typeof callback === "function") {
	          this.on("blur", callback);
	        } else {
	          status = "hidden";
	          customEvent.fire(this, "blur");
	          customEvent.fire(this, "idle");
	          customEvent.fire(this, "statusChanged", {
	            status: status
	          });
	        }
	        return this;
	      },
	      idle: function(callback) {
	        if (typeof callback === "function") {
	          this.on("idle", callback);
	        } else {
	          status = "idle";
	          customEvent.fire(this, "idle");
	          customEvent.fire(this, "statusChanged", {
	            status: status
	          });
	        }
	        return this;
	      },
	      wakeup: function(callback) {
	        if (typeof callback === "function") {
	          this.on("wakeup", callback);
	        } else {
	          status = "active";
	          customEvent.fire(this, "wakeup");
	          customEvent.fire(this, "statusChanged", {
	            status: status
	          });
	        }
	        return this;
	      },
	      on: function(name, callback) {
	        init();
	        customEvent.add(this, name, callback);
	        return this;
	      },
	      off: function(name, callback) {
	        init();
	        customEvent.remove(this, name, callback);
	        return this;
	      },
	      onEvery: function(seconds, callback) {
	        var paused, t;
	        init();
	        paused = false;
	        if (callback) {
	          t = setInterval(function() {
	            if (status === "active" && paused === false) {
	              return callback();
	            }
	          }, seconds * 1000);
	        }
	        return {
	          stop: function() {
	            return clearInterval(t);
	          },
	          pause: function() {
	            return paused = true;
	          },
	          resume: function() {
	            return paused = false;
	          },
	          code: t,
	          callback: callback
	        };
	      },
	      now: function(check) {
	        init();
	        return status === (check || "active");
	      }
	    };
	    return ifvisible;
	  });
	
	}).call(this);
	
	//# sourceMappingURL=ifvisible.js.map


/***/ }

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgY2NlZmUwYTY2Mzg1NTVhYmZhN2IiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9pZnZpc2libGUuanMvc3JjL2lmdmlzaWJsZS5qcyJdLCJuYW1lcyI6WyJzZW5kRm9jdXMiLCJmb2N1cyIsImNvbnNvbGUiLCJsb2ciLCJjaHJvbWUiLCJydW50aW1lIiwic2VuZE1lc3NhZ2UiLCJvbiJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUN0Q0E7Ozs7OztBQUVBLFVBQVNBLFNBQVQsQ0FBbUJDLEtBQW5CLEVBQTBCO0FBQ3hCQyxXQUFRQyxHQUFSLGVBQXdCRixLQUF4QjtBQUNBRyxVQUFPQyxPQUFQLENBQWVDLFdBQWYsQ0FBMkIsRUFBRUwsWUFBRixFQUEzQjtBQUNEO0FBQ0RELFdBQVUsT0FBVjs7QUFFQSxxQkFBVU8sRUFBVixDQUFhLE1BQWIsRUFBcUI7QUFBQSxVQUFNUCxVQUFVLE1BQVYsQ0FBTjtBQUFBLEVBQXJCO0FBQ0EscUJBQVVPLEVBQVYsQ0FBYSxPQUFiLEVBQXNCO0FBQUEsVUFBTVAsVUFBVSxPQUFWLENBQU47QUFBQSxFQUF0QixFOzs7Ozs7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUCxNQUFLO0FBQ0w7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXVDLFNBQVM7QUFDaEQ7QUFDQSx1Q0FBc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQTZDLFNBQVM7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFlBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsVUFBUztBQUNULFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxZQUFXO0FBQ1g7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXO0FBQ1g7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVc7QUFDWDtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVc7QUFDWDtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVc7QUFDWDtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVc7QUFDWDtBQUNBO0FBQ0EsWUFBVztBQUNYO0FBQ0E7QUFDQSxZQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUgsRUFBQzs7QUFFRCIsImZpbGUiOiJjb250ZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgY2NlZmUwYTY2Mzg1NTVhYmZhN2IiLCJpbXBvcnQgaWZ2aXNpYmxlIGZyb20gJ2lmdmlzaWJsZS5qcyc7XG5cbmZ1bmN0aW9uIHNlbmRGb2N1cyhmb2N1cykge1xuICBjb25zb2xlLmxvZyhgU2VuZGluZzogJHtmb2N1c31gKTtcbiAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoeyBmb2N1cyB9KTtcbn1cbnNlbmRGb2N1cygnZm9jdXMnKTtcblxuaWZ2aXNpYmxlLm9uKCdibHVyJywgKCkgPT4gc2VuZEZvY3VzKCdibHVyJykpO1xuaWZ2aXNpYmxlLm9uKCdmb2N1cycsICgpID0+IHNlbmRGb2N1cygnZm9jdXMnKSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29udGVudC5qcyIsIihmdW5jdGlvbigpIHtcbiAgKGZ1bmN0aW9uKHJvb3QsIGZhY3RvcnkpIHtcbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICByZXR1cm4gZGVmaW5lKGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gZmFjdG9yeSgpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHJvb3QuaWZ2aXNpYmxlID0gZmFjdG9yeSgpO1xuICAgIH1cbiAgfSkodGhpcywgZnVuY3Rpb24oKSB7XG4gICAgdmFyIGFkZEV2ZW50LCBjdXN0b21FdmVudCwgZG9jLCBmaXJlRXZlbnQsIGhpZGRlbiwgaWRsZVN0YXJ0ZWRUaW1lLCBpZGxlVGltZSwgaWUsIGlmdmlzaWJsZSwgaW5pdCwgaW5pdGlhbGl6ZWQsIHN0YXR1cywgdHJhY2tJZGxlU3RhdHVzLCB2aXNpYmlsaXR5Q2hhbmdlO1xuICAgIGlmdmlzaWJsZSA9IHt9O1xuICAgIGRvYyA9IGRvY3VtZW50O1xuICAgIGluaXRpYWxpemVkID0gZmFsc2U7XG4gICAgc3RhdHVzID0gXCJhY3RpdmVcIjtcbiAgICBpZGxlVGltZSA9IDYwMDAwO1xuICAgIGlkbGVTdGFydGVkVGltZSA9IGZhbHNlO1xuICAgIGN1c3RvbUV2ZW50ID0gKGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIFM0LCBhZGRDdXN0b21FdmVudCwgY2dpZCwgZmlyZUN1c3RvbUV2ZW50LCBndWlkLCBsaXN0ZW5lcnMsIHJlbW92ZUN1c3RvbUV2ZW50O1xuICAgICAgUzQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuICgoKDEgKyBNYXRoLnJhbmRvbSgpKSAqIDB4MTAwMDApIHwgMCkudG9TdHJpbmcoMTYpLnN1YnN0cmluZygxKTtcbiAgICAgIH07XG4gICAgICBndWlkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBTNCgpICsgUzQoKSArIFwiLVwiICsgUzQoKSArIFwiLVwiICsgUzQoKSArIFwiLVwiICsgUzQoKSArIFwiLVwiICsgUzQoKSArIFM0KCkgKyBTNCgpO1xuICAgICAgfTtcbiAgICAgIGxpc3RlbmVycyA9IHt9O1xuICAgICAgY2dpZCA9ICdfX2NlR1VJRCc7XG4gICAgICBhZGRDdXN0b21FdmVudCA9IGZ1bmN0aW9uKG9iaiwgZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICAgIG9ialtjZ2lkXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKCFvYmpbY2dpZF0pIHtcbiAgICAgICAgICBvYmpbY2dpZF0gPSBcImlmdmlzaWJsZS5vYmplY3QuZXZlbnQuaWRlbnRpZmllclwiO1xuICAgICAgICB9XG4gICAgICAgIGlmICghbGlzdGVuZXJzW29ialtjZ2lkXV0pIHtcbiAgICAgICAgICBsaXN0ZW5lcnNbb2JqW2NnaWRdXSA9IHt9O1xuICAgICAgICB9XG4gICAgICAgIGlmICghbGlzdGVuZXJzW29ialtjZ2lkXV1bZXZlbnRdKSB7XG4gICAgICAgICAgbGlzdGVuZXJzW29ialtjZ2lkXV1bZXZlbnRdID0gW107XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxpc3RlbmVyc1tvYmpbY2dpZF1dW2V2ZW50XS5wdXNoKGNhbGxiYWNrKTtcbiAgICAgIH07XG4gICAgICBmaXJlQ3VzdG9tRXZlbnQgPSBmdW5jdGlvbihvYmosIGV2ZW50LCBtZW1vKSB7XG4gICAgICAgIHZhciBldiwgaiwgbGVuLCByZWYsIHJlc3VsdHM7XG4gICAgICAgIGlmIChvYmpbY2dpZF0gJiYgbGlzdGVuZXJzW29ialtjZ2lkXV0gJiYgbGlzdGVuZXJzW29ialtjZ2lkXV1bZXZlbnRdKSB7XG4gICAgICAgICAgcmVmID0gbGlzdGVuZXJzW29ialtjZ2lkXV1bZXZlbnRdO1xuICAgICAgICAgIHJlc3VsdHMgPSBbXTtcbiAgICAgICAgICBmb3IgKGogPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBqIDwgbGVuOyBqKyspIHtcbiAgICAgICAgICAgIGV2ID0gcmVmW2pdO1xuICAgICAgICAgICAgcmVzdWx0cy5wdXNoKGV2KG1lbW8gfHwge30pKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICByZW1vdmVDdXN0b21FdmVudCA9IGZ1bmN0aW9uKG9iaiwgZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBjbCwgaSwgaiwgbGVuLCByZWY7XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgIGlmIChvYmpbY2dpZF0gJiYgbGlzdGVuZXJzW29ialtjZ2lkXV0gJiYgbGlzdGVuZXJzW29ialtjZ2lkXV1bZXZlbnRdKSB7XG4gICAgICAgICAgICByZWYgPSBsaXN0ZW5lcnNbb2JqW2NnaWRdXVtldmVudF07XG4gICAgICAgICAgICBmb3IgKGkgPSBqID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaiA8IGxlbjsgaSA9ICsraikge1xuICAgICAgICAgICAgICBjbCA9IHJlZltpXTtcbiAgICAgICAgICAgICAgaWYgKGNsID09PSBjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIGxpc3RlbmVyc1tvYmpbY2dpZF1dW2V2ZW50XS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNsO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChvYmpbY2dpZF0gJiYgbGlzdGVuZXJzW29ialtjZ2lkXV0gJiYgbGlzdGVuZXJzW29ialtjZ2lkXV1bZXZlbnRdKSB7XG4gICAgICAgICAgICByZXR1cm4gZGVsZXRlIGxpc3RlbmVyc1tvYmpbY2dpZF1dW2V2ZW50XTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICByZXR1cm4ge1xuICAgICAgICBhZGQ6IGFkZEN1c3RvbUV2ZW50LFxuICAgICAgICByZW1vdmU6IHJlbW92ZUN1c3RvbUV2ZW50LFxuICAgICAgICBmaXJlOiBmaXJlQ3VzdG9tRXZlbnRcbiAgICAgIH07XG4gICAgfSkoKTtcbiAgICBhZGRFdmVudCA9IChmdW5jdGlvbigpIHtcbiAgICAgIHZhciBzZXRMaXN0ZW5lcjtcbiAgICAgIHNldExpc3RlbmVyID0gZmFsc2U7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oZWwsIGV2LCBmbikge1xuICAgICAgICBpZiAoIXNldExpc3RlbmVyKSB7XG4gICAgICAgICAgaWYgKGVsLmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgICAgIHNldExpc3RlbmVyID0gZnVuY3Rpb24oZWwsIGV2LCBmbikge1xuICAgICAgICAgICAgICByZXR1cm4gZWwuYWRkRXZlbnRMaXN0ZW5lcihldiwgZm4sIGZhbHNlKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSBlbHNlIGlmIChlbC5hdHRhY2hFdmVudCkge1xuICAgICAgICAgICAgc2V0TGlzdGVuZXIgPSBmdW5jdGlvbihlbCwgZXYsIGZuKSB7XG4gICAgICAgICAgICAgIHJldHVybiBlbC5hdHRhY2hFdmVudCgnb24nICsgZXYsIGZuLCBmYWxzZSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRMaXN0ZW5lciA9IGZ1bmN0aW9uKGVsLCBldiwgZm4pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGVsWydvbicgKyBldl0gPSBmbjtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzZXRMaXN0ZW5lcihlbCwgZXYsIGZuKTtcbiAgICAgIH07XG4gICAgfSkoKTtcbiAgICBmaXJlRXZlbnQgPSBmdW5jdGlvbihlbGVtZW50LCBldmVudCkge1xuICAgICAgdmFyIGV2dDtcbiAgICAgIGlmIChkb2MuY3JlYXRlRXZlbnRPYmplY3QpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQuZmlyZUV2ZW50KCdvbicgKyBldmVudCwgZXZ0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGV2dCA9IGRvYy5jcmVhdGVFdmVudCgnSFRNTEV2ZW50cycpO1xuICAgICAgICBldnQuaW5pdEV2ZW50KGV2ZW50LCB0cnVlLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuICFlbGVtZW50LmRpc3BhdGNoRXZlbnQoZXZ0KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGllID0gKGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGFsbCwgY2hlY2ssIGRpdiwgdW5kZWYsIHY7XG4gICAgICB1bmRlZiA9IHZvaWQgMDtcbiAgICAgIHYgPSAzO1xuICAgICAgZGl2ID0gZG9jLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBhbGwgPSBkaXYuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJpXCIpO1xuICAgICAgY2hlY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIChkaXYuaW5uZXJIVE1MID0gXCI8IS0tW2lmIGd0IElFIFwiICsgKCsrdikgKyBcIl0+PGk+PC9pPjwhW2VuZGlmXS0tPlwiLCBhbGxbMF0pO1xuICAgICAgfTtcbiAgICAgIHdoaWxlIChjaGVjaygpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHYgPiA0KSB7XG4gICAgICAgIHJldHVybiB2O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmO1xuICAgICAgfVxuICAgIH0pKCk7XG4gICAgaGlkZGVuID0gZmFsc2U7XG4gICAgdmlzaWJpbGl0eUNoYW5nZSA9IHZvaWQgMDtcbiAgICBpZiAodHlwZW9mIGRvYy5oaWRkZW4gIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIGhpZGRlbiA9IFwiaGlkZGVuXCI7XG4gICAgICB2aXNpYmlsaXR5Q2hhbmdlID0gXCJ2aXNpYmlsaXR5Y2hhbmdlXCI7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZG9jLm1vekhpZGRlbiAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgaGlkZGVuID0gXCJtb3pIaWRkZW5cIjtcbiAgICAgIHZpc2liaWxpdHlDaGFuZ2UgPSBcIm1venZpc2liaWxpdHljaGFuZ2VcIjtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBkb2MubXNIaWRkZW4gIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIGhpZGRlbiA9IFwibXNIaWRkZW5cIjtcbiAgICAgIHZpc2liaWxpdHlDaGFuZ2UgPSBcIm1zdmlzaWJpbGl0eWNoYW5nZVwiO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGRvYy53ZWJraXRIaWRkZW4gIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIGhpZGRlbiA9IFwid2Via2l0SGlkZGVuXCI7XG4gICAgICB2aXNpYmlsaXR5Q2hhbmdlID0gXCJ3ZWJraXR2aXNpYmlsaXR5Y2hhbmdlXCI7XG4gICAgfVxuICAgIHRyYWNrSWRsZVN0YXR1cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHRpbWVyLCB3YWtlVXA7XG4gICAgICB0aW1lciA9IGZhbHNlO1xuICAgICAgd2FrZVVwID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICAgIGlmIChzdGF0dXMgIT09IFwiYWN0aXZlXCIpIHtcbiAgICAgICAgICBpZnZpc2libGUud2FrZXVwKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWRsZVN0YXJ0ZWRUaW1lID0gKyhuZXcgRGF0ZSgpKTtcbiAgICAgICAgcmV0dXJuIHRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICBpZiAoc3RhdHVzID09PSBcImFjdGl2ZVwiKSB7XG4gICAgICAgICAgICByZXR1cm4gaWZ2aXNpYmxlLmlkbGUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIGlkbGVUaW1lKTtcbiAgICAgIH07XG4gICAgICB3YWtlVXAoKTtcbiAgICAgIGFkZEV2ZW50KGRvYywgXCJtb3VzZW1vdmVcIiwgd2FrZVVwKTtcbiAgICAgIGFkZEV2ZW50KGRvYywgXCJrZXl1cFwiLCB3YWtlVXApO1xuICAgICAgYWRkRXZlbnQoZG9jLCBcInRvdWNoc3RhcnRcIiwgd2FrZVVwKTtcbiAgICAgIGFkZEV2ZW50KHdpbmRvdywgXCJzY3JvbGxcIiwgd2FrZVVwKTtcbiAgICAgIGlmdmlzaWJsZS5mb2N1cyh3YWtlVXApO1xuICAgICAgcmV0dXJuIGlmdmlzaWJsZS53YWtldXAod2FrZVVwKTtcbiAgICB9O1xuICAgIGluaXQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBibHVyO1xuICAgICAgaWYgKGluaXRpYWxpemVkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKGhpZGRlbiA9PT0gZmFsc2UpIHtcbiAgICAgICAgYmx1ciA9IFwiYmx1clwiO1xuICAgICAgICBpZiAoaWUgPCA5KSB7XG4gICAgICAgICAgYmx1ciA9IFwiZm9jdXNvdXRcIjtcbiAgICAgICAgfVxuICAgICAgICBhZGRFdmVudCh3aW5kb3csIGJsdXIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBpZnZpc2libGUuYmx1cigpO1xuICAgICAgICB9KTtcbiAgICAgICAgYWRkRXZlbnQod2luZG93LCBcImZvY3VzXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBpZnZpc2libGUuZm9jdXMoKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhZGRFdmVudChkb2MsIHZpc2liaWxpdHlDaGFuZ2UsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGlmIChkb2NbaGlkZGVuXSkge1xuICAgICAgICAgICAgcmV0dXJuIGlmdmlzaWJsZS5ibHVyKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBpZnZpc2libGUuZm9jdXMoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIGZhbHNlKTtcbiAgICAgIH1cbiAgICAgIGluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgIHJldHVybiB0cmFja0lkbGVTdGF0dXMoKTtcbiAgICB9O1xuICAgIGlmdmlzaWJsZSA9IHtcbiAgICAgIHNldElkbGVEdXJhdGlvbjogZnVuY3Rpb24oc2Vjb25kcykge1xuICAgICAgICByZXR1cm4gaWRsZVRpbWUgPSBzZWNvbmRzICogMTAwMDtcbiAgICAgIH0sXG4gICAgICBnZXRJZGxlRHVyYXRpb246IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gaWRsZVRpbWU7XG4gICAgICB9LFxuICAgICAgZ2V0SWRsZUluZm86IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgbm93LCByZXM7XG4gICAgICAgIG5vdyA9ICsobmV3IERhdGUoKSk7XG4gICAgICAgIHJlcyA9IHt9O1xuICAgICAgICBpZiAoc3RhdHVzID09PSBcImlkbGVcIikge1xuICAgICAgICAgIHJlcy5pc0lkbGUgPSB0cnVlO1xuICAgICAgICAgIHJlcy5pZGxlRm9yID0gbm93IC0gaWRsZVN0YXJ0ZWRUaW1lO1xuICAgICAgICAgIHJlcy50aW1lTGVmdCA9IDA7XG4gICAgICAgICAgcmVzLnRpbWVMZWZ0UGVyID0gMTAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlcy5pc0lkbGUgPSBmYWxzZTtcbiAgICAgICAgICByZXMuaWRsZUZvciA9IG5vdyAtIGlkbGVTdGFydGVkVGltZTtcbiAgICAgICAgICByZXMudGltZUxlZnQgPSAoaWRsZVN0YXJ0ZWRUaW1lICsgaWRsZVRpbWUpIC0gbm93O1xuICAgICAgICAgIHJlcy50aW1lTGVmdFBlciA9ICgxMDAgLSAocmVzLnRpbWVMZWZ0ICogMTAwIC8gaWRsZVRpbWUpKS50b0ZpeGVkKDIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgICB9LFxuICAgICAgZm9jdXM6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgIHRoaXMub24oXCJmb2N1c1wiLCBjYWxsYmFjayk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3RhdHVzID0gXCJhY3RpdmVcIjtcbiAgICAgICAgICBjdXN0b21FdmVudC5maXJlKHRoaXMsIFwiZm9jdXNcIik7XG4gICAgICAgICAgY3VzdG9tRXZlbnQuZmlyZSh0aGlzLCBcIndha2V1cFwiKTtcbiAgICAgICAgICBjdXN0b21FdmVudC5maXJlKHRoaXMsIFwic3RhdHVzQ2hhbmdlZFwiLCB7XG4gICAgICAgICAgICBzdGF0dXM6IHN0YXR1c1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfSxcbiAgICAgIGJsdXI6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgIHRoaXMub24oXCJibHVyXCIsIGNhbGxiYWNrKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdGF0dXMgPSBcImhpZGRlblwiO1xuICAgICAgICAgIGN1c3RvbUV2ZW50LmZpcmUodGhpcywgXCJibHVyXCIpO1xuICAgICAgICAgIGN1c3RvbUV2ZW50LmZpcmUodGhpcywgXCJpZGxlXCIpO1xuICAgICAgICAgIGN1c3RvbUV2ZW50LmZpcmUodGhpcywgXCJzdGF0dXNDaGFuZ2VkXCIsIHtcbiAgICAgICAgICAgIHN0YXR1czogc3RhdHVzXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9LFxuICAgICAgaWRsZTogZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgdGhpcy5vbihcImlkbGVcIiwgY2FsbGJhY2spO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN0YXR1cyA9IFwiaWRsZVwiO1xuICAgICAgICAgIGN1c3RvbUV2ZW50LmZpcmUodGhpcywgXCJpZGxlXCIpO1xuICAgICAgICAgIGN1c3RvbUV2ZW50LmZpcmUodGhpcywgXCJzdGF0dXNDaGFuZ2VkXCIsIHtcbiAgICAgICAgICAgIHN0YXR1czogc3RhdHVzXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9LFxuICAgICAgd2FrZXVwOiBmdW5jdGlvbihjYWxsYmFjaykge1xuICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICB0aGlzLm9uKFwid2FrZXVwXCIsIGNhbGxiYWNrKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdGF0dXMgPSBcImFjdGl2ZVwiO1xuICAgICAgICAgIGN1c3RvbUV2ZW50LmZpcmUodGhpcywgXCJ3YWtldXBcIik7XG4gICAgICAgICAgY3VzdG9tRXZlbnQuZmlyZSh0aGlzLCBcInN0YXR1c0NoYW5nZWRcIiwge1xuICAgICAgICAgICAgc3RhdHVzOiBzdGF0dXNcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH0sXG4gICAgICBvbjogZnVuY3Rpb24obmFtZSwgY2FsbGJhY2spIHtcbiAgICAgICAgaW5pdCgpO1xuICAgICAgICBjdXN0b21FdmVudC5hZGQodGhpcywgbmFtZSwgY2FsbGJhY2spO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH0sXG4gICAgICBvZmY6IGZ1bmN0aW9uKG5hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAgIGluaXQoKTtcbiAgICAgICAgY3VzdG9tRXZlbnQucmVtb3ZlKHRoaXMsIG5hbWUsIGNhbGxiYWNrKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9LFxuICAgICAgb25FdmVyeTogZnVuY3Rpb24oc2Vjb25kcywgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIHBhdXNlZCwgdDtcbiAgICAgICAgaW5pdCgpO1xuICAgICAgICBwYXVzZWQgPSBmYWxzZTtcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgdCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKHN0YXR1cyA9PT0gXCJhY3RpdmVcIiAmJiBwYXVzZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIHNlY29uZHMgKiAxMDAwKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIGNsZWFySW50ZXJ2YWwodCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBwYXVzZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gcGF1c2VkID0gdHJ1ZTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHJlc3VtZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gcGF1c2VkID0gZmFsc2U7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBjb2RlOiB0LFxuICAgICAgICAgIGNhbGxiYWNrOiBjYWxsYmFja1xuICAgICAgICB9O1xuICAgICAgfSxcbiAgICAgIG5vdzogZnVuY3Rpb24oY2hlY2spIHtcbiAgICAgICAgaW5pdCgpO1xuICAgICAgICByZXR1cm4gc3RhdHVzID09PSAoY2hlY2sgfHwgXCJhY3RpdmVcIik7XG4gICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gaWZ2aXNpYmxlO1xuICB9KTtcblxufSkuY2FsbCh0aGlzKTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aWZ2aXNpYmxlLmpzLm1hcFxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2lmdmlzaWJsZS5qcy9zcmMvaWZ2aXNpYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSA2NjBcbi8vIG1vZHVsZSBjaHVua3MgPSAzIl0sInNvdXJjZVJvb3QiOiIifQ==