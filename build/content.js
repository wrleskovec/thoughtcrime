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
	
	var _ifvisible = __webpack_require__(707);
	
	var _ifvisible2 = _interopRequireDefault(_ifvisible);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function sendFocus(focus) {
	  chrome.runtime.sendMessage({ focus: focus });
	}
	sendFocus('focus');
	
	_ifvisible2.default.on('focus', function () {
	  return sendFocus('focus');
	});
	// some websites load intermediate state that triggers blur
	setTimeout(function () {
	  _ifvisible2.default.on('blur', function () {
	    return setTimeout(function () {
	      sendFocus('blur');
	    }, 55);
	  });
	}, 50);

/***/ },

/***/ 707:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNjc0M2Y3NDNjNTBiNTNjZDI4ZGI/ZTQwNSIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9+L2lmdmlzaWJsZS5qcy9zcmMvaWZ2aXNpYmxlLmpzIl0sIm5hbWVzIjpbInNlbmRGb2N1cyIsImZvY3VzIiwiY2hyb21lIiwicnVudGltZSIsInNlbmRNZXNzYWdlIiwib24iLCJzZXRUaW1lb3V0Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ3RDQTs7Ozs7O0FBRUEsVUFBU0EsU0FBVCxDQUFtQkMsS0FBbkIsRUFBMEI7QUFDeEJDLFVBQU9DLE9BQVAsQ0FBZUMsV0FBZixDQUEyQixFQUFFSCxZQUFGLEVBQTNCO0FBQ0Q7QUFDREQsV0FBVSxPQUFWOztBQUVBLHFCQUFVSyxFQUFWLENBQWEsT0FBYixFQUFzQjtBQUFBLFVBQU1MLFVBQVUsT0FBVixDQUFOO0FBQUEsRUFBdEI7QUFDQTtBQUNBTSxZQUFXLFlBQU07QUFDZix1QkFBVUQsRUFBVixDQUFhLE1BQWIsRUFBcUI7QUFBQSxZQUFNQyxXQUFXLFlBQU07QUFBRU4saUJBQVUsTUFBVjtBQUFvQixNQUF2QyxFQUF5QyxFQUF6QyxDQUFOO0FBQUEsSUFBckI7QUFDRCxFQUZELEVBRUcsRUFGSCxFOzs7Ozs7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUCxNQUFLO0FBQ0w7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXVDLFNBQVM7QUFDaEQ7QUFDQSx1Q0FBc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQTZDLFNBQVM7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFlBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsVUFBUztBQUNULFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxZQUFXO0FBQ1g7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXO0FBQ1g7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVc7QUFDWDtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVc7QUFDWDtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVc7QUFDWDtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVc7QUFDWDtBQUNBO0FBQ0EsWUFBVztBQUNYO0FBQ0E7QUFDQSxZQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUgsRUFBQzs7QUFFRCIsImZpbGUiOiJjb250ZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNjc0M2Y3NDNjNTBiNTNjZDI4ZGIiLCJpbXBvcnQgaWZ2aXNpYmxlIGZyb20gJ2lmdmlzaWJsZS5qcyc7XG5cbmZ1bmN0aW9uIHNlbmRGb2N1cyhmb2N1cykge1xuICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7IGZvY3VzIH0pO1xufVxuc2VuZEZvY3VzKCdmb2N1cycpO1xuXG5pZnZpc2libGUub24oJ2ZvY3VzJywgKCkgPT4gc2VuZEZvY3VzKCdmb2N1cycpKTtcbi8vIHNvbWUgd2Vic2l0ZXMgbG9hZCBpbnRlcm1lZGlhdGUgc3RhdGUgdGhhdCB0cmlnZ2VycyBibHVyXG5zZXRUaW1lb3V0KCgpID0+IHtcbiAgaWZ2aXNpYmxlLm9uKCdibHVyJywgKCkgPT4gc2V0VGltZW91dCgoKSA9PiB7IHNlbmRGb2N1cygnYmx1cicpOyB9LCA1NSkpO1xufSwgNTApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbnRlbnQuanMiLCIoZnVuY3Rpb24oKSB7XG4gIChmdW5jdGlvbihyb290LCBmYWN0b3J5KSB7XG4gICAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgICAgcmV0dXJuIGRlZmluZShmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGZhY3RvcnkoKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiByb290LmlmdmlzaWJsZSA9IGZhY3RvcnkoKTtcbiAgICB9XG4gIH0pKHRoaXMsIGZ1bmN0aW9uKCkge1xuICAgIHZhciBhZGRFdmVudCwgY3VzdG9tRXZlbnQsIGRvYywgZmlyZUV2ZW50LCBoaWRkZW4sIGlkbGVTdGFydGVkVGltZSwgaWRsZVRpbWUsIGllLCBpZnZpc2libGUsIGluaXQsIGluaXRpYWxpemVkLCBzdGF0dXMsIHRyYWNrSWRsZVN0YXR1cywgdmlzaWJpbGl0eUNoYW5nZTtcbiAgICBpZnZpc2libGUgPSB7fTtcbiAgICBkb2MgPSBkb2N1bWVudDtcbiAgICBpbml0aWFsaXplZCA9IGZhbHNlO1xuICAgIHN0YXR1cyA9IFwiYWN0aXZlXCI7XG4gICAgaWRsZVRpbWUgPSA2MDAwMDtcbiAgICBpZGxlU3RhcnRlZFRpbWUgPSBmYWxzZTtcbiAgICBjdXN0b21FdmVudCA9IChmdW5jdGlvbigpIHtcbiAgICAgIHZhciBTNCwgYWRkQ3VzdG9tRXZlbnQsIGNnaWQsIGZpcmVDdXN0b21FdmVudCwgZ3VpZCwgbGlzdGVuZXJzLCByZW1vdmVDdXN0b21FdmVudDtcbiAgICAgIFM0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAoKCgxICsgTWF0aC5yYW5kb20oKSkgKiAweDEwMDAwKSB8IDApLnRvU3RyaW5nKDE2KS5zdWJzdHJpbmcoMSk7XG4gICAgICB9O1xuICAgICAgZ3VpZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gUzQoKSArIFM0KCkgKyBcIi1cIiArIFM0KCkgKyBcIi1cIiArIFM0KCkgKyBcIi1cIiArIFM0KCkgKyBcIi1cIiArIFM0KCkgKyBTNCgpICsgUzQoKTtcbiAgICAgIH07XG4gICAgICBsaXN0ZW5lcnMgPSB7fTtcbiAgICAgIGNnaWQgPSAnX19jZUdVSUQnO1xuICAgICAgYWRkQ3VzdG9tRXZlbnQgPSBmdW5jdGlvbihvYmosIGV2ZW50LCBjYWxsYmFjaykge1xuICAgICAgICBvYmpbY2dpZF0gPSB1bmRlZmluZWQ7XG4gICAgICAgIGlmICghb2JqW2NnaWRdKSB7XG4gICAgICAgICAgb2JqW2NnaWRdID0gXCJpZnZpc2libGUub2JqZWN0LmV2ZW50LmlkZW50aWZpZXJcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWxpc3RlbmVyc1tvYmpbY2dpZF1dKSB7XG4gICAgICAgICAgbGlzdGVuZXJzW29ialtjZ2lkXV0gPSB7fTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWxpc3RlbmVyc1tvYmpbY2dpZF1dW2V2ZW50XSkge1xuICAgICAgICAgIGxpc3RlbmVyc1tvYmpbY2dpZF1dW2V2ZW50XSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsaXN0ZW5lcnNbb2JqW2NnaWRdXVtldmVudF0ucHVzaChjYWxsYmFjayk7XG4gICAgICB9O1xuICAgICAgZmlyZUN1c3RvbUV2ZW50ID0gZnVuY3Rpb24ob2JqLCBldmVudCwgbWVtbykge1xuICAgICAgICB2YXIgZXYsIGosIGxlbiwgcmVmLCByZXN1bHRzO1xuICAgICAgICBpZiAob2JqW2NnaWRdICYmIGxpc3RlbmVyc1tvYmpbY2dpZF1dICYmIGxpc3RlbmVyc1tvYmpbY2dpZF1dW2V2ZW50XSkge1xuICAgICAgICAgIHJlZiA9IGxpc3RlbmVyc1tvYmpbY2dpZF1dW2V2ZW50XTtcbiAgICAgICAgICByZXN1bHRzID0gW107XG4gICAgICAgICAgZm9yIChqID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaiA8IGxlbjsgaisrKSB7XG4gICAgICAgICAgICBldiA9IHJlZltqXTtcbiAgICAgICAgICAgIHJlc3VsdHMucHVzaChldihtZW1vIHx8IHt9KSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgcmVtb3ZlQ3VzdG9tRXZlbnQgPSBmdW5jdGlvbihvYmosIGV2ZW50LCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgY2wsIGksIGosIGxlbiwgcmVmO1xuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICBpZiAob2JqW2NnaWRdICYmIGxpc3RlbmVyc1tvYmpbY2dpZF1dICYmIGxpc3RlbmVyc1tvYmpbY2dpZF1dW2V2ZW50XSkge1xuICAgICAgICAgICAgcmVmID0gbGlzdGVuZXJzW29ialtjZ2lkXV1bZXZlbnRdO1xuICAgICAgICAgICAgZm9yIChpID0gaiA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGogPCBsZW47IGkgPSArK2opIHtcbiAgICAgICAgICAgICAgY2wgPSByZWZbaV07XG4gICAgICAgICAgICAgIGlmIChjbCA9PT0gY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcnNbb2JqW2NnaWRdXVtldmVudF0uc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgIHJldHVybiBjbDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAob2JqW2NnaWRdICYmIGxpc3RlbmVyc1tvYmpbY2dpZF1dICYmIGxpc3RlbmVyc1tvYmpbY2dpZF1dW2V2ZW50XSkge1xuICAgICAgICAgICAgcmV0dXJuIGRlbGV0ZSBsaXN0ZW5lcnNbb2JqW2NnaWRdXVtldmVudF07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYWRkOiBhZGRDdXN0b21FdmVudCxcbiAgICAgICAgcmVtb3ZlOiByZW1vdmVDdXN0b21FdmVudCxcbiAgICAgICAgZmlyZTogZmlyZUN1c3RvbUV2ZW50XG4gICAgICB9O1xuICAgIH0pKCk7XG4gICAgYWRkRXZlbnQgPSAoZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc2V0TGlzdGVuZXI7XG4gICAgICBzZXRMaXN0ZW5lciA9IGZhbHNlO1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGVsLCBldiwgZm4pIHtcbiAgICAgICAgaWYgKCFzZXRMaXN0ZW5lcikge1xuICAgICAgICAgIGlmIChlbC5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICAgICAgICBzZXRMaXN0ZW5lciA9IGZ1bmN0aW9uKGVsLCBldiwgZm4pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGVsLmFkZEV2ZW50TGlzdGVuZXIoZXYsIGZuLCBmYWxzZSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0gZWxzZSBpZiAoZWwuYXR0YWNoRXZlbnQpIHtcbiAgICAgICAgICAgIHNldExpc3RlbmVyID0gZnVuY3Rpb24oZWwsIGV2LCBmbikge1xuICAgICAgICAgICAgICByZXR1cm4gZWwuYXR0YWNoRXZlbnQoJ29uJyArIGV2LCBmbiwgZmFsc2UpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0TGlzdGVuZXIgPSBmdW5jdGlvbihlbCwgZXYsIGZuKSB7XG4gICAgICAgICAgICAgIHJldHVybiBlbFsnb24nICsgZXZdID0gZm47XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2V0TGlzdGVuZXIoZWwsIGV2LCBmbik7XG4gICAgICB9O1xuICAgIH0pKCk7XG4gICAgZmlyZUV2ZW50ID0gZnVuY3Rpb24oZWxlbWVudCwgZXZlbnQpIHtcbiAgICAgIHZhciBldnQ7XG4gICAgICBpZiAoZG9jLmNyZWF0ZUV2ZW50T2JqZWN0KSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50LmZpcmVFdmVudCgnb24nICsgZXZlbnQsIGV2dCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBldnQgPSBkb2MuY3JlYXRlRXZlbnQoJ0hUTUxFdmVudHMnKTtcbiAgICAgICAgZXZ0LmluaXRFdmVudChldmVudCwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgIHJldHVybiAhZWxlbWVudC5kaXNwYXRjaEV2ZW50KGV2dCk7XG4gICAgICB9XG4gICAgfTtcbiAgICBpZSA9IChmdW5jdGlvbigpIHtcbiAgICAgIHZhciBhbGwsIGNoZWNrLCBkaXYsIHVuZGVmLCB2O1xuICAgICAgdW5kZWYgPSB2b2lkIDA7XG4gICAgICB2ID0gMztcbiAgICAgIGRpdiA9IGRvYy5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgYWxsID0gZGl2LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaVwiKTtcbiAgICAgIGNoZWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAoZGl2LmlubmVySFRNTCA9IFwiPCEtLVtpZiBndCBJRSBcIiArICgrK3YpICsgXCJdPjxpPjwvaT48IVtlbmRpZl0tLT5cIiwgYWxsWzBdKTtcbiAgICAgIH07XG4gICAgICB3aGlsZSAoY2hlY2soKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh2ID4gNCkge1xuICAgICAgICByZXR1cm4gdjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB1bmRlZjtcbiAgICAgIH1cbiAgICB9KSgpO1xuICAgIGhpZGRlbiA9IGZhbHNlO1xuICAgIHZpc2liaWxpdHlDaGFuZ2UgPSB2b2lkIDA7XG4gICAgaWYgKHR5cGVvZiBkb2MuaGlkZGVuICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICBoaWRkZW4gPSBcImhpZGRlblwiO1xuICAgICAgdmlzaWJpbGl0eUNoYW5nZSA9IFwidmlzaWJpbGl0eWNoYW5nZVwiO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGRvYy5tb3pIaWRkZW4gIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIGhpZGRlbiA9IFwibW96SGlkZGVuXCI7XG4gICAgICB2aXNpYmlsaXR5Q2hhbmdlID0gXCJtb3p2aXNpYmlsaXR5Y2hhbmdlXCI7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZG9jLm1zSGlkZGVuICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICBoaWRkZW4gPSBcIm1zSGlkZGVuXCI7XG4gICAgICB2aXNpYmlsaXR5Q2hhbmdlID0gXCJtc3Zpc2liaWxpdHljaGFuZ2VcIjtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBkb2Mud2Via2l0SGlkZGVuICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICBoaWRkZW4gPSBcIndlYmtpdEhpZGRlblwiO1xuICAgICAgdmlzaWJpbGl0eUNoYW5nZSA9IFwid2Via2l0dmlzaWJpbGl0eWNoYW5nZVwiO1xuICAgIH1cbiAgICB0cmFja0lkbGVTdGF0dXMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciB0aW1lciwgd2FrZVVwO1xuICAgICAgdGltZXIgPSBmYWxzZTtcbiAgICAgIHdha2VVcCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgICBpZiAoc3RhdHVzICE9PSBcImFjdGl2ZVwiKSB7XG4gICAgICAgICAgaWZ2aXNpYmxlLndha2V1cCgpO1xuICAgICAgICB9XG4gICAgICAgIGlkbGVTdGFydGVkVGltZSA9ICsobmV3IERhdGUoKSk7XG4gICAgICAgIHJldHVybiB0aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgaWYgKHN0YXR1cyA9PT0gXCJhY3RpdmVcIikge1xuICAgICAgICAgICAgcmV0dXJuIGlmdmlzaWJsZS5pZGxlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCBpZGxlVGltZSk7XG4gICAgICB9O1xuICAgICAgd2FrZVVwKCk7XG4gICAgICBhZGRFdmVudChkb2MsIFwibW91c2Vtb3ZlXCIsIHdha2VVcCk7XG4gICAgICBhZGRFdmVudChkb2MsIFwia2V5dXBcIiwgd2FrZVVwKTtcbiAgICAgIGFkZEV2ZW50KGRvYywgXCJ0b3VjaHN0YXJ0XCIsIHdha2VVcCk7XG4gICAgICBhZGRFdmVudCh3aW5kb3csIFwic2Nyb2xsXCIsIHdha2VVcCk7XG4gICAgICBpZnZpc2libGUuZm9jdXMod2FrZVVwKTtcbiAgICAgIHJldHVybiBpZnZpc2libGUud2FrZXVwKHdha2VVcCk7XG4gICAgfTtcbiAgICBpbml0ID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgYmx1cjtcbiAgICAgIGlmIChpbml0aWFsaXplZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmIChoaWRkZW4gPT09IGZhbHNlKSB7XG4gICAgICAgIGJsdXIgPSBcImJsdXJcIjtcbiAgICAgICAgaWYgKGllIDwgOSkge1xuICAgICAgICAgIGJsdXIgPSBcImZvY3Vzb3V0XCI7XG4gICAgICAgIH1cbiAgICAgICAgYWRkRXZlbnQod2luZG93LCBibHVyLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gaWZ2aXNpYmxlLmJsdXIoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGFkZEV2ZW50KHdpbmRvdywgXCJmb2N1c1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gaWZ2aXNpYmxlLmZvY3VzKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWRkRXZlbnQoZG9jLCB2aXNpYmlsaXR5Q2hhbmdlLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICBpZiAoZG9jW2hpZGRlbl0pIHtcbiAgICAgICAgICAgIHJldHVybiBpZnZpc2libGUuYmx1cigpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gaWZ2aXNpYmxlLmZvY3VzKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCBmYWxzZSk7XG4gICAgICB9XG4gICAgICBpbml0aWFsaXplZCA9IHRydWU7XG4gICAgICByZXR1cm4gdHJhY2tJZGxlU3RhdHVzKCk7XG4gICAgfTtcbiAgICBpZnZpc2libGUgPSB7XG4gICAgICBzZXRJZGxlRHVyYXRpb246IGZ1bmN0aW9uKHNlY29uZHMpIHtcbiAgICAgICAgcmV0dXJuIGlkbGVUaW1lID0gc2Vjb25kcyAqIDEwMDA7XG4gICAgICB9LFxuICAgICAgZ2V0SWRsZUR1cmF0aW9uOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGlkbGVUaW1lO1xuICAgICAgfSxcbiAgICAgIGdldElkbGVJbmZvOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIG5vdywgcmVzO1xuICAgICAgICBub3cgPSArKG5ldyBEYXRlKCkpO1xuICAgICAgICByZXMgPSB7fTtcbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gXCJpZGxlXCIpIHtcbiAgICAgICAgICByZXMuaXNJZGxlID0gdHJ1ZTtcbiAgICAgICAgICByZXMuaWRsZUZvciA9IG5vdyAtIGlkbGVTdGFydGVkVGltZTtcbiAgICAgICAgICByZXMudGltZUxlZnQgPSAwO1xuICAgICAgICAgIHJlcy50aW1lTGVmdFBlciA9IDEwMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXMuaXNJZGxlID0gZmFsc2U7XG4gICAgICAgICAgcmVzLmlkbGVGb3IgPSBub3cgLSBpZGxlU3RhcnRlZFRpbWU7XG4gICAgICAgICAgcmVzLnRpbWVMZWZ0ID0gKGlkbGVTdGFydGVkVGltZSArIGlkbGVUaW1lKSAtIG5vdztcbiAgICAgICAgICByZXMudGltZUxlZnRQZXIgPSAoMTAwIC0gKHJlcy50aW1lTGVmdCAqIDEwMCAvIGlkbGVUaW1lKSkudG9GaXhlZCgyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgfSxcbiAgICAgIGZvY3VzOiBmdW5jdGlvbihjYWxsYmFjaykge1xuICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICB0aGlzLm9uKFwiZm9jdXNcIiwgY2FsbGJhY2spO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN0YXR1cyA9IFwiYWN0aXZlXCI7XG4gICAgICAgICAgY3VzdG9tRXZlbnQuZmlyZSh0aGlzLCBcImZvY3VzXCIpO1xuICAgICAgICAgIGN1c3RvbUV2ZW50LmZpcmUodGhpcywgXCJ3YWtldXBcIik7XG4gICAgICAgICAgY3VzdG9tRXZlbnQuZmlyZSh0aGlzLCBcInN0YXR1c0NoYW5nZWRcIiwge1xuICAgICAgICAgICAgc3RhdHVzOiBzdGF0dXNcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH0sXG4gICAgICBibHVyOiBmdW5jdGlvbihjYWxsYmFjaykge1xuICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICB0aGlzLm9uKFwiYmx1clwiLCBjYWxsYmFjayk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3RhdHVzID0gXCJoaWRkZW5cIjtcbiAgICAgICAgICBjdXN0b21FdmVudC5maXJlKHRoaXMsIFwiYmx1clwiKTtcbiAgICAgICAgICBjdXN0b21FdmVudC5maXJlKHRoaXMsIFwiaWRsZVwiKTtcbiAgICAgICAgICBjdXN0b21FdmVudC5maXJlKHRoaXMsIFwic3RhdHVzQ2hhbmdlZFwiLCB7XG4gICAgICAgICAgICBzdGF0dXM6IHN0YXR1c1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfSxcbiAgICAgIGlkbGU6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgIHRoaXMub24oXCJpZGxlXCIsIGNhbGxiYWNrKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdGF0dXMgPSBcImlkbGVcIjtcbiAgICAgICAgICBjdXN0b21FdmVudC5maXJlKHRoaXMsIFwiaWRsZVwiKTtcbiAgICAgICAgICBjdXN0b21FdmVudC5maXJlKHRoaXMsIFwic3RhdHVzQ2hhbmdlZFwiLCB7XG4gICAgICAgICAgICBzdGF0dXM6IHN0YXR1c1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfSxcbiAgICAgIHdha2V1cDogZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgdGhpcy5vbihcIndha2V1cFwiLCBjYWxsYmFjayk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3RhdHVzID0gXCJhY3RpdmVcIjtcbiAgICAgICAgICBjdXN0b21FdmVudC5maXJlKHRoaXMsIFwid2FrZXVwXCIpO1xuICAgICAgICAgIGN1c3RvbUV2ZW50LmZpcmUodGhpcywgXCJzdGF0dXNDaGFuZ2VkXCIsIHtcbiAgICAgICAgICAgIHN0YXR1czogc3RhdHVzXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9LFxuICAgICAgb246IGZ1bmN0aW9uKG5hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAgIGluaXQoKTtcbiAgICAgICAgY3VzdG9tRXZlbnQuYWRkKHRoaXMsIG5hbWUsIGNhbGxiYWNrKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9LFxuICAgICAgb2ZmOiBmdW5jdGlvbihuYW1lLCBjYWxsYmFjaykge1xuICAgICAgICBpbml0KCk7XG4gICAgICAgIGN1c3RvbUV2ZW50LnJlbW92ZSh0aGlzLCBuYW1lLCBjYWxsYmFjayk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfSxcbiAgICAgIG9uRXZlcnk6IGZ1bmN0aW9uKHNlY29uZHMsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBwYXVzZWQsIHQ7XG4gICAgICAgIGluaXQoKTtcbiAgICAgICAgcGF1c2VkID0gZmFsc2U7XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgIHQgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmIChzdGF0dXMgPT09IFwiYWN0aXZlXCIgJiYgcGF1c2VkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCBzZWNvbmRzICogMTAwMCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBjbGVhckludGVydmFsKHQpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgcGF1c2U6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHBhdXNlZCA9IHRydWU7XG4gICAgICAgICAgfSxcbiAgICAgICAgICByZXN1bWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHBhdXNlZCA9IGZhbHNlO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgY29kZTogdCxcbiAgICAgICAgICBjYWxsYmFjazogY2FsbGJhY2tcbiAgICAgICAgfTtcbiAgICAgIH0sXG4gICAgICBub3c6IGZ1bmN0aW9uKGNoZWNrKSB7XG4gICAgICAgIGluaXQoKTtcbiAgICAgICAgcmV0dXJuIHN0YXR1cyA9PT0gKGNoZWNrIHx8IFwiYWN0aXZlXCIpO1xuICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIGlmdmlzaWJsZTtcbiAgfSk7XG5cbn0pLmNhbGwodGhpcyk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlmdmlzaWJsZS5qcy5tYXBcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9pZnZpc2libGUuanMvc3JjL2lmdmlzaWJsZS5qc1xuLy8gbW9kdWxlIGlkID0gNzA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMyJdLCJzb3VyY2VSb290IjoiIn0=