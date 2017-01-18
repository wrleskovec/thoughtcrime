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
	
	_ifvisible2.default.on('focus', function () {
	  return sendFocus('focus');
	});
	_ifvisible2.default.on('blur', function () {
	  return setTimeout(function () {
	    sendFocus('blur');
	  }, 55);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOWU0ODdiZjE2NmY5OWNhZTY2OTEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9pZnZpc2libGUuanMvc3JjL2lmdmlzaWJsZS5qcyJdLCJuYW1lcyI6WyJzZW5kRm9jdXMiLCJmb2N1cyIsImNvbnNvbGUiLCJsb2ciLCJjaHJvbWUiLCJydW50aW1lIiwic2VuZE1lc3NhZ2UiLCJvbiIsInNldFRpbWVvdXQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDdENBOzs7Ozs7QUFFQSxVQUFTQSxTQUFULENBQW1CQyxLQUFuQixFQUEwQjtBQUN4QkMsV0FBUUMsR0FBUixlQUF3QkYsS0FBeEI7QUFDQUcsVUFBT0MsT0FBUCxDQUFlQyxXQUFmLENBQTJCLEVBQUVMLFlBQUYsRUFBM0I7QUFDRDtBQUNERCxXQUFVLE9BQVY7O0FBRUEscUJBQVVPLEVBQVYsQ0FBYSxPQUFiLEVBQXNCO0FBQUEsVUFBTVAsVUFBVSxPQUFWLENBQU47QUFBQSxFQUF0QjtBQUNBLHFCQUFVTyxFQUFWLENBQWEsTUFBYixFQUFxQjtBQUFBLFVBQU1DLFdBQVcsWUFBTTtBQUFFUixlQUFVLE1BQVY7QUFBb0IsSUFBdkMsRUFBeUMsRUFBekMsQ0FBTjtBQUFBLEVBQXJCLEU7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQLE1BQUs7QUFDTDtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBdUMsU0FBUztBQUNoRDtBQUNBLHVDQUFzQztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBNkMsU0FBUztBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsWUFBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxVQUFTO0FBQ1QsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFlBQVc7QUFDWDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVc7QUFDWDtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVztBQUNYO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVztBQUNYO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVztBQUNYO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVztBQUNYO0FBQ0E7QUFDQSxZQUFXO0FBQ1g7QUFDQTtBQUNBLFlBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSCxFQUFDOztBQUVEIiwiZmlsZSI6ImNvbnRlbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA5ZTQ4N2JmMTY2Zjk5Y2FlNjY5MSIsImltcG9ydCBpZnZpc2libGUgZnJvbSAnaWZ2aXNpYmxlLmpzJztcblxuZnVuY3Rpb24gc2VuZEZvY3VzKGZvY3VzKSB7XG4gIGNvbnNvbGUubG9nKGBTZW5kaW5nOiAke2ZvY3VzfWApO1xuICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7IGZvY3VzIH0pO1xufVxuc2VuZEZvY3VzKCdmb2N1cycpO1xuXG5pZnZpc2libGUub24oJ2ZvY3VzJywgKCkgPT4gc2VuZEZvY3VzKCdmb2N1cycpKTtcbmlmdmlzaWJsZS5vbignYmx1cicsICgpID0+IHNldFRpbWVvdXQoKCkgPT4geyBzZW5kRm9jdXMoJ2JsdXInKTsgfSwgNTUpKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb250ZW50LmpzIiwiKGZ1bmN0aW9uKCkge1xuICAoZnVuY3Rpb24ocm9vdCwgZmFjdG9yeSkge1xuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAgIHJldHVybiBkZWZpbmUoZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBmYWN0b3J5KCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcm9vdC5pZnZpc2libGUgPSBmYWN0b3J5KCk7XG4gICAgfVxuICB9KSh0aGlzLCBmdW5jdGlvbigpIHtcbiAgICB2YXIgYWRkRXZlbnQsIGN1c3RvbUV2ZW50LCBkb2MsIGZpcmVFdmVudCwgaGlkZGVuLCBpZGxlU3RhcnRlZFRpbWUsIGlkbGVUaW1lLCBpZSwgaWZ2aXNpYmxlLCBpbml0LCBpbml0aWFsaXplZCwgc3RhdHVzLCB0cmFja0lkbGVTdGF0dXMsIHZpc2liaWxpdHlDaGFuZ2U7XG4gICAgaWZ2aXNpYmxlID0ge307XG4gICAgZG9jID0gZG9jdW1lbnQ7XG4gICAgaW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgICBzdGF0dXMgPSBcImFjdGl2ZVwiO1xuICAgIGlkbGVUaW1lID0gNjAwMDA7XG4gICAgaWRsZVN0YXJ0ZWRUaW1lID0gZmFsc2U7XG4gICAgY3VzdG9tRXZlbnQgPSAoZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgUzQsIGFkZEN1c3RvbUV2ZW50LCBjZ2lkLCBmaXJlQ3VzdG9tRXZlbnQsIGd1aWQsIGxpc3RlbmVycywgcmVtb3ZlQ3VzdG9tRXZlbnQ7XG4gICAgICBTNCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gKCgoMSArIE1hdGgucmFuZG9tKCkpICogMHgxMDAwMCkgfCAwKS50b1N0cmluZygxNikuc3Vic3RyaW5nKDEpO1xuICAgICAgfTtcbiAgICAgIGd1aWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIFM0KCkgKyBTNCgpICsgXCItXCIgKyBTNCgpICsgXCItXCIgKyBTNCgpICsgXCItXCIgKyBTNCgpICsgXCItXCIgKyBTNCgpICsgUzQoKSArIFM0KCk7XG4gICAgICB9O1xuICAgICAgbGlzdGVuZXJzID0ge307XG4gICAgICBjZ2lkID0gJ19fY2VHVUlEJztcbiAgICAgIGFkZEN1c3RvbUV2ZW50ID0gZnVuY3Rpb24ob2JqLCBldmVudCwgY2FsbGJhY2spIHtcbiAgICAgICAgb2JqW2NnaWRdID0gdW5kZWZpbmVkO1xuICAgICAgICBpZiAoIW9ialtjZ2lkXSkge1xuICAgICAgICAgIG9ialtjZ2lkXSA9IFwiaWZ2aXNpYmxlLm9iamVjdC5ldmVudC5pZGVudGlmaWVyXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFsaXN0ZW5lcnNbb2JqW2NnaWRdXSkge1xuICAgICAgICAgIGxpc3RlbmVyc1tvYmpbY2dpZF1dID0ge307XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFsaXN0ZW5lcnNbb2JqW2NnaWRdXVtldmVudF0pIHtcbiAgICAgICAgICBsaXN0ZW5lcnNbb2JqW2NnaWRdXVtldmVudF0gPSBbXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGlzdGVuZXJzW29ialtjZ2lkXV1bZXZlbnRdLnB1c2goY2FsbGJhY2spO1xuICAgICAgfTtcbiAgICAgIGZpcmVDdXN0b21FdmVudCA9IGZ1bmN0aW9uKG9iaiwgZXZlbnQsIG1lbW8pIHtcbiAgICAgICAgdmFyIGV2LCBqLCBsZW4sIHJlZiwgcmVzdWx0cztcbiAgICAgICAgaWYgKG9ialtjZ2lkXSAmJiBsaXN0ZW5lcnNbb2JqW2NnaWRdXSAmJiBsaXN0ZW5lcnNbb2JqW2NnaWRdXVtldmVudF0pIHtcbiAgICAgICAgICByZWYgPSBsaXN0ZW5lcnNbb2JqW2NnaWRdXVtldmVudF07XG4gICAgICAgICAgcmVzdWx0cyA9IFtdO1xuICAgICAgICAgIGZvciAoaiA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGogPCBsZW47IGorKykge1xuICAgICAgICAgICAgZXYgPSByZWZbal07XG4gICAgICAgICAgICByZXN1bHRzLnB1c2goZXYobWVtbyB8fCB7fSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHJlbW92ZUN1c3RvbUV2ZW50ID0gZnVuY3Rpb24ob2JqLCBldmVudCwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIGNsLCBpLCBqLCBsZW4sIHJlZjtcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgaWYgKG9ialtjZ2lkXSAmJiBsaXN0ZW5lcnNbb2JqW2NnaWRdXSAmJiBsaXN0ZW5lcnNbb2JqW2NnaWRdXVtldmVudF0pIHtcbiAgICAgICAgICAgIHJlZiA9IGxpc3RlbmVyc1tvYmpbY2dpZF1dW2V2ZW50XTtcbiAgICAgICAgICAgIGZvciAoaSA9IGogPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBqIDwgbGVuOyBpID0gKytqKSB7XG4gICAgICAgICAgICAgIGNsID0gcmVmW2ldO1xuICAgICAgICAgICAgICBpZiAoY2wgPT09IGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzW29ialtjZ2lkXV1bZXZlbnRdLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2w7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKG9ialtjZ2lkXSAmJiBsaXN0ZW5lcnNbb2JqW2NnaWRdXSAmJiBsaXN0ZW5lcnNbb2JqW2NnaWRdXVtldmVudF0pIHtcbiAgICAgICAgICAgIHJldHVybiBkZWxldGUgbGlzdGVuZXJzW29ialtjZ2lkXV1bZXZlbnRdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGFkZDogYWRkQ3VzdG9tRXZlbnQsXG4gICAgICAgIHJlbW92ZTogcmVtb3ZlQ3VzdG9tRXZlbnQsXG4gICAgICAgIGZpcmU6IGZpcmVDdXN0b21FdmVudFxuICAgICAgfTtcbiAgICB9KSgpO1xuICAgIGFkZEV2ZW50ID0gKGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHNldExpc3RlbmVyO1xuICAgICAgc2V0TGlzdGVuZXIgPSBmYWxzZTtcbiAgICAgIHJldHVybiBmdW5jdGlvbihlbCwgZXYsIGZuKSB7XG4gICAgICAgIGlmICghc2V0TGlzdGVuZXIpIHtcbiAgICAgICAgICBpZiAoZWwuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICAgICAgc2V0TGlzdGVuZXIgPSBmdW5jdGlvbihlbCwgZXYsIGZuKSB7XG4gICAgICAgICAgICAgIHJldHVybiBlbC5hZGRFdmVudExpc3RlbmVyKGV2LCBmbiwgZmFsc2UpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGVsLmF0dGFjaEV2ZW50KSB7XG4gICAgICAgICAgICBzZXRMaXN0ZW5lciA9IGZ1bmN0aW9uKGVsLCBldiwgZm4pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGVsLmF0dGFjaEV2ZW50KCdvbicgKyBldiwgZm4sIGZhbHNlKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldExpc3RlbmVyID0gZnVuY3Rpb24oZWwsIGV2LCBmbikge1xuICAgICAgICAgICAgICByZXR1cm4gZWxbJ29uJyArIGV2XSA9IGZuO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNldExpc3RlbmVyKGVsLCBldiwgZm4pO1xuICAgICAgfTtcbiAgICB9KSgpO1xuICAgIGZpcmVFdmVudCA9IGZ1bmN0aW9uKGVsZW1lbnQsIGV2ZW50KSB7XG4gICAgICB2YXIgZXZ0O1xuICAgICAgaWYgKGRvYy5jcmVhdGVFdmVudE9iamVjdCkge1xuICAgICAgICByZXR1cm4gZWxlbWVudC5maXJlRXZlbnQoJ29uJyArIGV2ZW50LCBldnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXZ0ID0gZG9jLmNyZWF0ZUV2ZW50KCdIVE1MRXZlbnRzJyk7XG4gICAgICAgIGV2dC5pbml0RXZlbnQoZXZlbnQsIHRydWUsIHRydWUpO1xuICAgICAgICByZXR1cm4gIWVsZW1lbnQuZGlzcGF0Y2hFdmVudChldnQpO1xuICAgICAgfVxuICAgIH07XG4gICAgaWUgPSAoZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgYWxsLCBjaGVjaywgZGl2LCB1bmRlZiwgdjtcbiAgICAgIHVuZGVmID0gdm9pZCAwO1xuICAgICAgdiA9IDM7XG4gICAgICBkaXYgPSBkb2MuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGFsbCA9IGRpdi5nZXRFbGVtZW50c0J5VGFnTmFtZShcImlcIik7XG4gICAgICBjaGVjayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gKGRpdi5pbm5lckhUTUwgPSBcIjwhLS1baWYgZ3QgSUUgXCIgKyAoKyt2KSArIFwiXT48aT48L2k+PCFbZW5kaWZdLS0+XCIsIGFsbFswXSk7XG4gICAgICB9O1xuICAgICAgd2hpbGUgKGNoZWNrKCkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodiA+IDQpIHtcbiAgICAgICAgcmV0dXJuIHY7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdW5kZWY7XG4gICAgICB9XG4gICAgfSkoKTtcbiAgICBoaWRkZW4gPSBmYWxzZTtcbiAgICB2aXNpYmlsaXR5Q2hhbmdlID0gdm9pZCAwO1xuICAgIGlmICh0eXBlb2YgZG9jLmhpZGRlbiAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgaGlkZGVuID0gXCJoaWRkZW5cIjtcbiAgICAgIHZpc2liaWxpdHlDaGFuZ2UgPSBcInZpc2liaWxpdHljaGFuZ2VcIjtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBkb2MubW96SGlkZGVuICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICBoaWRkZW4gPSBcIm1vekhpZGRlblwiO1xuICAgICAgdmlzaWJpbGl0eUNoYW5nZSA9IFwibW96dmlzaWJpbGl0eWNoYW5nZVwiO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGRvYy5tc0hpZGRlbiAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgaGlkZGVuID0gXCJtc0hpZGRlblwiO1xuICAgICAgdmlzaWJpbGl0eUNoYW5nZSA9IFwibXN2aXNpYmlsaXR5Y2hhbmdlXCI7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZG9jLndlYmtpdEhpZGRlbiAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgaGlkZGVuID0gXCJ3ZWJraXRIaWRkZW5cIjtcbiAgICAgIHZpc2liaWxpdHlDaGFuZ2UgPSBcIndlYmtpdHZpc2liaWxpdHljaGFuZ2VcIjtcbiAgICB9XG4gICAgdHJhY2tJZGxlU3RhdHVzID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgdGltZXIsIHdha2VVcDtcbiAgICAgIHRpbWVyID0gZmFsc2U7XG4gICAgICB3YWtlVXAgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgICAgaWYgKHN0YXR1cyAhPT0gXCJhY3RpdmVcIikge1xuICAgICAgICAgIGlmdmlzaWJsZS53YWtldXAoKTtcbiAgICAgICAgfVxuICAgICAgICBpZGxlU3RhcnRlZFRpbWUgPSArKG5ldyBEYXRlKCkpO1xuICAgICAgICByZXR1cm4gdGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGlmIChzdGF0dXMgPT09IFwiYWN0aXZlXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBpZnZpc2libGUuaWRsZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgaWRsZVRpbWUpO1xuICAgICAgfTtcbiAgICAgIHdha2VVcCgpO1xuICAgICAgYWRkRXZlbnQoZG9jLCBcIm1vdXNlbW92ZVwiLCB3YWtlVXApO1xuICAgICAgYWRkRXZlbnQoZG9jLCBcImtleXVwXCIsIHdha2VVcCk7XG4gICAgICBhZGRFdmVudChkb2MsIFwidG91Y2hzdGFydFwiLCB3YWtlVXApO1xuICAgICAgYWRkRXZlbnQod2luZG93LCBcInNjcm9sbFwiLCB3YWtlVXApO1xuICAgICAgaWZ2aXNpYmxlLmZvY3VzKHdha2VVcCk7XG4gICAgICByZXR1cm4gaWZ2aXNpYmxlLndha2V1cCh3YWtlVXApO1xuICAgIH07XG4gICAgaW5pdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGJsdXI7XG4gICAgICBpZiAoaW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICBpZiAoaGlkZGVuID09PSBmYWxzZSkge1xuICAgICAgICBibHVyID0gXCJibHVyXCI7XG4gICAgICAgIGlmIChpZSA8IDkpIHtcbiAgICAgICAgICBibHVyID0gXCJmb2N1c291dFwiO1xuICAgICAgICB9XG4gICAgICAgIGFkZEV2ZW50KHdpbmRvdywgYmx1ciwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIGlmdmlzaWJsZS5ibHVyKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBhZGRFdmVudCh3aW5kb3csIFwiZm9jdXNcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIGlmdmlzaWJsZS5mb2N1cygpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFkZEV2ZW50KGRvYywgdmlzaWJpbGl0eUNoYW5nZSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgaWYgKGRvY1toaWRkZW5dKSB7XG4gICAgICAgICAgICByZXR1cm4gaWZ2aXNpYmxlLmJsdXIoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGlmdmlzaWJsZS5mb2N1cygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgZmFsc2UpO1xuICAgICAgfVxuICAgICAgaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgcmV0dXJuIHRyYWNrSWRsZVN0YXR1cygpO1xuICAgIH07XG4gICAgaWZ2aXNpYmxlID0ge1xuICAgICAgc2V0SWRsZUR1cmF0aW9uOiBmdW5jdGlvbihzZWNvbmRzKSB7XG4gICAgICAgIHJldHVybiBpZGxlVGltZSA9IHNlY29uZHMgKiAxMDAwO1xuICAgICAgfSxcbiAgICAgIGdldElkbGVEdXJhdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBpZGxlVGltZTtcbiAgICAgIH0sXG4gICAgICBnZXRJZGxlSW5mbzogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBub3csIHJlcztcbiAgICAgICAgbm93ID0gKyhuZXcgRGF0ZSgpKTtcbiAgICAgICAgcmVzID0ge307XG4gICAgICAgIGlmIChzdGF0dXMgPT09IFwiaWRsZVwiKSB7XG4gICAgICAgICAgcmVzLmlzSWRsZSA9IHRydWU7XG4gICAgICAgICAgcmVzLmlkbGVGb3IgPSBub3cgLSBpZGxlU3RhcnRlZFRpbWU7XG4gICAgICAgICAgcmVzLnRpbWVMZWZ0ID0gMDtcbiAgICAgICAgICByZXMudGltZUxlZnRQZXIgPSAxMDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzLmlzSWRsZSA9IGZhbHNlO1xuICAgICAgICAgIHJlcy5pZGxlRm9yID0gbm93IC0gaWRsZVN0YXJ0ZWRUaW1lO1xuICAgICAgICAgIHJlcy50aW1lTGVmdCA9IChpZGxlU3RhcnRlZFRpbWUgKyBpZGxlVGltZSkgLSBub3c7XG4gICAgICAgICAgcmVzLnRpbWVMZWZ0UGVyID0gKDEwMCAtIChyZXMudGltZUxlZnQgKiAxMDAgLyBpZGxlVGltZSkpLnRvRml4ZWQoMik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgIH0sXG4gICAgICBmb2N1czogZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgdGhpcy5vbihcImZvY3VzXCIsIGNhbGxiYWNrKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdGF0dXMgPSBcImFjdGl2ZVwiO1xuICAgICAgICAgIGN1c3RvbUV2ZW50LmZpcmUodGhpcywgXCJmb2N1c1wiKTtcbiAgICAgICAgICBjdXN0b21FdmVudC5maXJlKHRoaXMsIFwid2FrZXVwXCIpO1xuICAgICAgICAgIGN1c3RvbUV2ZW50LmZpcmUodGhpcywgXCJzdGF0dXNDaGFuZ2VkXCIsIHtcbiAgICAgICAgICAgIHN0YXR1czogc3RhdHVzXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9LFxuICAgICAgYmx1cjogZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgdGhpcy5vbihcImJsdXJcIiwgY2FsbGJhY2spO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN0YXR1cyA9IFwiaGlkZGVuXCI7XG4gICAgICAgICAgY3VzdG9tRXZlbnQuZmlyZSh0aGlzLCBcImJsdXJcIik7XG4gICAgICAgICAgY3VzdG9tRXZlbnQuZmlyZSh0aGlzLCBcImlkbGVcIik7XG4gICAgICAgICAgY3VzdG9tRXZlbnQuZmlyZSh0aGlzLCBcInN0YXR1c0NoYW5nZWRcIiwge1xuICAgICAgICAgICAgc3RhdHVzOiBzdGF0dXNcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH0sXG4gICAgICBpZGxlOiBmdW5jdGlvbihjYWxsYmFjaykge1xuICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICB0aGlzLm9uKFwiaWRsZVwiLCBjYWxsYmFjayk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3RhdHVzID0gXCJpZGxlXCI7XG4gICAgICAgICAgY3VzdG9tRXZlbnQuZmlyZSh0aGlzLCBcImlkbGVcIik7XG4gICAgICAgICAgY3VzdG9tRXZlbnQuZmlyZSh0aGlzLCBcInN0YXR1c0NoYW5nZWRcIiwge1xuICAgICAgICAgICAgc3RhdHVzOiBzdGF0dXNcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH0sXG4gICAgICB3YWtldXA6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgIHRoaXMub24oXCJ3YWtldXBcIiwgY2FsbGJhY2spO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN0YXR1cyA9IFwiYWN0aXZlXCI7XG4gICAgICAgICAgY3VzdG9tRXZlbnQuZmlyZSh0aGlzLCBcIndha2V1cFwiKTtcbiAgICAgICAgICBjdXN0b21FdmVudC5maXJlKHRoaXMsIFwic3RhdHVzQ2hhbmdlZFwiLCB7XG4gICAgICAgICAgICBzdGF0dXM6IHN0YXR1c1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfSxcbiAgICAgIG9uOiBmdW5jdGlvbihuYW1lLCBjYWxsYmFjaykge1xuICAgICAgICBpbml0KCk7XG4gICAgICAgIGN1c3RvbUV2ZW50LmFkZCh0aGlzLCBuYW1lLCBjYWxsYmFjayk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfSxcbiAgICAgIG9mZjogZnVuY3Rpb24obmFtZSwgY2FsbGJhY2spIHtcbiAgICAgICAgaW5pdCgpO1xuICAgICAgICBjdXN0b21FdmVudC5yZW1vdmUodGhpcywgbmFtZSwgY2FsbGJhY2spO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH0sXG4gICAgICBvbkV2ZXJ5OiBmdW5jdGlvbihzZWNvbmRzLCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgcGF1c2VkLCB0O1xuICAgICAgICBpbml0KCk7XG4gICAgICAgIHBhdXNlZCA9IGZhbHNlO1xuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICB0ID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoc3RhdHVzID09PSBcImFjdGl2ZVwiICYmIHBhdXNlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgc2Vjb25kcyAqIDEwMDApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gY2xlYXJJbnRlcnZhbCh0KTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHBhdXNlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXVzZWQgPSB0cnVlO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgcmVzdW1lOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXVzZWQgPSBmYWxzZTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvZGU6IHQsXG4gICAgICAgICAgY2FsbGJhY2s6IGNhbGxiYWNrXG4gICAgICAgIH07XG4gICAgICB9LFxuICAgICAgbm93OiBmdW5jdGlvbihjaGVjaykge1xuICAgICAgICBpbml0KCk7XG4gICAgICAgIHJldHVybiBzdGF0dXMgPT09IChjaGVjayB8fCBcImFjdGl2ZVwiKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBpZnZpc2libGU7XG4gIH0pO1xuXG59KS5jYWxsKHRoaXMpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1pZnZpc2libGUuanMubWFwXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaWZ2aXNpYmxlLmpzL3NyYy9pZnZpc2libGUuanNcbi8vIG1vZHVsZSBpZCA9IDY2MFxuLy8gbW9kdWxlIGNodW5rcyA9IDMiXSwic291cmNlUm9vdCI6IiJ9