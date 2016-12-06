webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _wurl = __webpack_require__(670);
	
	var _wurl2 = _interopRequireDefault(_wurl);
	
	var _blockList = __webpack_require__(264);
	
	var _blockList2 = _interopRequireDefault(_blockList);
	
	var _timer = __webpack_require__(679);
	
	var _timer2 = _interopRequireDefault(_timer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_blockList2.default.init().then(function () {
	  _timer2.default.init();
	});
	
	var BLOCKED_PAGE = 'https://www.github.com/wrleskovec';
	
	function loadFilteredPage(tabId, url) {
	  setTimeout(function () {
	    chrome.tabs.update(tabId, { url: url });
	  }, 500);
	}
	function handleAction(action, details) {
	  if (action === 'block') {
	    loadFilteredPage(details.tabId, BLOCKED_PAGE);
	  } else if (action === 'limit') {
	    loadFilteredPage(details.tabId, BLOCKED_PAGE);
	  }
	}
	function matchPatterns(details) {
	  return _blockList2.default.getRegexPatterns().then(function (patterns) {
	    if (patterns !== undefined && patterns.items.length > 0) {
	      return patterns.items.find(function (action) {
	        var reg = new RegExp(action.regex, 'i');
	        return reg.test(details.url);
	      });
	    }
	    return undefined;
	  });
	}
	
	function urlCheck(details) {
	  var protocol = (0, _wurl2.default)('protocol', details.url);
	  if (protocol !== 'chrome' && protocol !== 'chrome-extension') {
	    var site = (0, _wurl2.default)('domain', details.url);
	    _blockList2.default.getRecord(site).then(function (record) {
	      var aclMatch = record.advAction.find(function (action) {
	        var reg = new RegExp(action.regex, 'i');
	        return reg.test(details.url);
	      });
	      if (aclMatch) {
	        handleAction(aclMatch.action, details);
	      } else {
	        matchPatterns(details).then(function (patternMatch) {
	          if (patternMatch) {
	            handleAction(patternMatch.action, details);
	          } else {
	            handleAction(record.action, details);
	          }
	        });
	      }
	    }).catch(function () {
	      matchPatterns(details).then(function (patternMatch) {
	        if (patternMatch) handleAction(patternMatch.action, details);
	      });
	    });
	  }
	  return {};
	}
	
	chrome.webRequest.onBeforeRequest.addListener(urlCheck, {
	  urls: ['<all_urls>'],
	  types: ['main_frame']
	});

/***/ },

/***/ 679:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _classCallCheck2 = __webpack_require__(293);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(294);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _moment = __webpack_require__(299);
	
	var _moment2 = _interopRequireDefault(_moment);
	
	__webpack_require__(706);
	
	var _blockList = __webpack_require__(264);
	
	var _blockList2 = _interopRequireDefault(_blockList);
	
	var _wurl = __webpack_require__(670);
	
	var _wurl2 = _interopRequireDefault(_wurl);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Timer = function () {
	  function Timer() {
	    (0, _classCallCheck3.default)(this, Timer);
	
	    this.currentSite = null;
	    this.currentTab = null;
	    this.popup = false;
	    this.counter = 1;
	    this.dbCounter = 1;
	    this.intervalId = null;
	    this.currentDate = (0, _moment2.default)().format('DD-MM-YYYY');
	    this.startTime = null;
	    this.newDayTimer = this.setNewDayTimer();
	  }
	
	  (0, _createClass3.default)(Timer, [{
	    key: 'init',
	    value: function init() {
	      var _this = this;
	
	      chrome.windows.getAll({ populate: true }, function (windows) {
	        windows.forEach(function (win) {
	          win.tabs.forEach(function (tab) {
	            if (_this.isValidProtocol(tab.url)) {
	              chrome.tabs.executeScript(tab.id, { file: 'content.js' });
	            }
	          });
	        });
	      });
	      chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	        if (request.focus) {
	          var senderSite = (0, _wurl2.default)('domain', sender.tab.url);
	          if (request.focus === 'focus' && senderSite !== _this.currentSite && senderSite && sender.tab.id !== _this.currentTab && _this.isValidProtocol(senderSite)) {
	            _this.popup = false;
	            if (_this.currentSite !== null) {
	              _this.saveRecords();
	            }
	            _this.currentTab = sender.tab.id;
	            _this.currentSite = senderSite;
	            _this.startTime = (0, _moment2.default)();
	          } else if (request.focus === 'blur') {
	            if (sender.tab.id === _this.currentTab && senderSite && !_this.popup) {
	              _this.saveRecords();
	              _this.startTime = null;
	              _this.currentSite = null;
	              _this.currentTab = null;
	            }
	          }
	        }
	        if (request.timer === 'popup') {
	          _this.popup = true;
	          sendResponse({ seconds: _moment2.default.duration((0, _moment2.default)().diff(_this.startTime)).asSeconds() });
	        }
	      });
	      chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
	        var tabSite = (0, _wurl2.default)('domain', tab.url);
	        console.log('currentSite: ' + _this.currentSite + ', tab: ' + tabSite);
	        var validUrl = tabSite !== _this.currentSite && _this.isValidProtocol(tab.url);
	        if (validUrl) {
	          _this.currentSite = tabSite;
	          _this.currentTab = tab.id;
	        }
	      });
	    }
	  }, {
	    key: 'setNewDayTimer',
	    value: function setNewDayTimer() {
	      var _this2 = this;
	
	      var tomorrow = (0, _moment2.default)().add(1, 'days').startOf('day');
	      return setTimeout(function () {
	        var now = (0, _moment2.default)();
	        _this2.saveRecords();
	        _this2.currentDate = _this2.currentDate = now.format('DD-MM-YYYY');
	        _this2.startTime = now;
	      }, tomorrow.diff((0, _moment2.default)()));
	    }
	  }, {
	    key: 'isValidProtocol',
	    value: function isValidProtocol(url) {
	      var protocol = (0, _wurl2.default)('protocol', url);
	      return protocol === 'http' || protocol === 'https' || protocol === 'ftp';
	    }
	  }, {
	    key: 'getDuration',
	    value: function getDuration() {
	      return _moment2.default.duration((0, _moment2.default)().diff(this.startTime)).asSeconds();
	    }
	  }, {
	    key: 'saveRecords',
	    value: function saveRecords() {
	      _blockList2.default.reconcileRecords(this.currentSite, this.getDuration(), 1);
	      this.startTime = (0, _moment2.default)();
	    }
	  }]);
	  return Timer;
	}();
	
	var proxyTimer = new Proxy(new Timer(), {
	  set: function set(target, key, value) {
	    // console.log(`${key}: ${value}`);
	    target[key] = value;
	    return true;
	  }
	});
	exports.default = proxyTimer;

/***/ },

/***/ 706:
/***/ function(module, exports, __webpack_require__) {

	/*! Moment Duration Format v1.3.0
	 *  https://github.com/jsmreese/moment-duration-format 
	 *  Date: 2014-07-15
	 *
	 *  Duration format plugin function for the Moment.js library
	 *  http://momentjs.com/
	 *
	 *  Copyright 2014 John Madhavan-Reese
	 *  Released under the MIT license
	 */
	
	(function (root, undefined) {
	
		// repeatZero(qty)
		// returns "0" repeated qty times
		function repeatZero(qty) {
			var result = "";
			
			// exit early
			// if qty is 0 or a negative number
			// or doesn't coerce to an integer
			qty = parseInt(qty, 10);
			if (!qty || qty < 1) { return result; }
			
			while (qty) {
				result += "0";
				qty -= 1;
			}
			
			return result;
		}
		
		// padZero(str, len [, isRight])
		// pads a string with zeros up to a specified length
		// will not pad a string if its length is aready
		// greater than or equal to the specified length
		// default output pads with zeros on the left
		// set isRight to `true` to pad with zeros on the right
		function padZero(str, len, isRight) {
			if (str == null) { str = ""; }
			str = "" + str;
			
			return (isRight ? str : "") + repeatZero(len - str.length) + (isRight ? "" : str);
		}
		
		// isArray
		function isArray(array) {
			return Object.prototype.toString.call(array) === "[object Array]";
		}
		
		// isObject
		function isObject(obj) {
			return Object.prototype.toString.call(obj) === "[object Object]";
		}
		
		// findLast
		function findLast(array, callback) {
			var index = array.length;
	
			while (index -= 1) {
				if (callback(array[index])) { return array[index]; }
			}
		}
	
		// find
		function find(array, callback) {
			var index = 0,
				max = array.length,
				match;
				
			if (typeof callback !== "function") {
				match = callback;
				callback = function (item) {
					return item === match;
				};
			}
	
			while (index < max) {
				if (callback(array[index])) { return array[index]; }
				index += 1;
			}
		}
		
		// each
		function each(array, callback) {
			var index = 0,
				max = array.length;
				
			if (!array || !max) { return; }
	
			while (index < max) {
				if (callback(array[index], index) === false) { return; }
				index += 1;
			}
		}
		
		// map
		function map(array, callback) {
			var index = 0,
				max = array.length,
				ret = [];
	
			if (!array || !max) { return ret; }
					
			while (index < max) {
				ret[index] = callback(array[index], index);
				index += 1;
			}
			
			return ret;
		}
		
		// pluck
		function pluck(array, prop) {
			return map(array, function (item) {
				return item[prop];
			});
		}
		
		// compact
		function compact(array) {
			var ret = [];
			
			each(array, function (item) {
				if (item) { ret.push(item); }
			});
			
			return ret;
		}
		
		// unique
		function unique(array) {
			var ret = [];
			
			each(array, function (_a) {
				if (!find(ret, _a)) { ret.push(_a); }
			});
			
			return ret;
		}
		
		// intersection
		function intersection(a, b) {
			var ret = [];
			
			each(a, function (_a) {
				each(b, function (_b) {
					if (_a === _b) { ret.push(_a); }
				});
			});
			
			return unique(ret);
		}
		
		// rest
		function rest(array, callback) {
			var ret = [];
			
			each(array, function (item, index) {
				if (!callback(item)) {
					ret = array.slice(index);
					return false;
				}
			});
			
			return ret;
		}
	
		// initial
		function initial(array, callback) {
			var reversed = array.slice().reverse();
			
			return rest(reversed, callback).reverse();
		}
		
		// extend
		function extend(a, b) {
			for (var key in b) {
				if (b.hasOwnProperty(key)) { a[key] = b[key]; }
			}
			
			return a;
		}
				
		// define internal moment reference
		var moment;
	
		if (true) {
			try { moment = __webpack_require__(299); } 
			catch (e) {}
		} 
		
		if (!moment && root.moment) {
			moment = root.moment;
		}
		
		if (!moment) {
			throw "Moment Duration Format cannot find Moment.js";
		}
		
		// moment.duration.format([template] [, precision] [, settings])
		moment.duration.fn.format = function () {
	
			var tokenizer, tokens, types, typeMap, momentTypes, foundFirst, trimIndex,
				args = [].slice.call(arguments),
				settings = extend({}, this.format.defaults),
				// keep a shadow copy of this moment for calculating remainders
				remainder = moment.duration(this);
	
			// add a reference to this duration object to the settings for use
			// in a template function
			settings.duration = this;
	
			// parse arguments
			each(args, function (arg) {
				if (typeof arg === "string" || typeof arg === "function") {
					settings.template = arg;
					return;
				}
	
				if (typeof arg === "number") {
					settings.precision = arg;
					return;
				}
	
				if (isObject(arg)) {
					extend(settings, arg);
				}
			});
	
			// types
			types = settings.types = (isArray(settings.types) ? settings.types : settings.types.split(" "));
	
			// template
			if (typeof settings.template === "function") {
				settings.template = settings.template.apply(settings);
			}
	
			// tokenizer regexp
			tokenizer = new RegExp(map(types, function (type) {
				return settings[type].source;
			}).join("|"), "g");
	
			// token type map function
			typeMap = function (token) {
				return find(types, function (type) {
					return settings[type].test(token);
				});
			};
	
			// tokens array
			tokens = map(settings.template.match(tokenizer), function (token, index) {
				var type = typeMap(token),
					length = token.length;
	
				return {
					index: index,
					length: length,
	
					// replace escaped tokens with the non-escaped token text
					token: (type === "escape" ? token.replace(settings.escape, "$1") : token),
	
					// ignore type on non-moment tokens
					type: ((type === "escape" || type === "general") ? null : type)
	
					// calculate base value for all moment tokens
					//baseValue: ((type === "escape" || type === "general") ? null : this.as(type))
				};
			}, this);
	
			// unique moment token types in the template (in order of descending magnitude)
			momentTypes = intersection(types, unique(compact(pluck(tokens, "type"))));
	
			// exit early if there are no momentTypes
			if (!momentTypes.length) {
				return pluck(tokens, "token").join("");
			}
	
			// calculate values for each token type in the template
			each(momentTypes, function (momentType, index) {
				var value, wholeValue, decimalValue, isLeast, isMost;
	
				// calculate integer and decimal value portions
				value = remainder.as(momentType);
				wholeValue = (value > 0 ? Math.floor(value) : Math.ceil(value));
				decimalValue = value - wholeValue;
	
				// is this the least-significant moment token found?
				isLeast = ((index + 1) === momentTypes.length);
	
				// is this the most-significant moment token found?
				isMost = (!index);
	
				// update tokens array
				// using this algorithm to not assume anything about
				// the order or frequency of any tokens
				each(tokens, function (token) {
					if (token.type === momentType) {
						extend(token, {
							value: value,
							wholeValue: wholeValue,
							decimalValue: decimalValue,
							isLeast: isLeast,
							isMost: isMost
						});
	
						if (isMost) {
							// note the length of the most-significant moment token:
							// if it is greater than one and forceLength is not set, default forceLength to `true`
							if (settings.forceLength == null && token.length > 1) {
								settings.forceLength = true;
							}
	
							// rationale is this:
							// if the template is "h:mm:ss" and the moment value is 5 minutes, the user-friendly output is "5:00", not "05:00"
							// shouldn't pad the `minutes` token even though it has length of two
							// if the template is "hh:mm:ss", the user clearly wanted everything padded so we should output "05:00"
							// if the user wanted the full padded output, they can set `{ trim: false }` to get "00:05:00"
						}
					}
				});
	
				// update remainder
				remainder.subtract(wholeValue, momentType);
			});
		
			// trim tokens array
			if (settings.trim) {
				tokens = (settings.trim === "left" ? rest : initial)(tokens, function (token) {
					// return `true` if:
					// the token is not the least moment token (don't trim the least moment token)
					// the token is a moment token that does not have a value (don't trim moment tokens that have a whole value)
					return !(token.isLeast || (token.type != null && token.wholeValue));
				});
			}
			
			
			// build output
	
			// the first moment token can have special handling
			foundFirst = false;
	
			// run the map in reverse order if trimming from the right
			if (settings.trim === "right") {
				tokens.reverse();
			}
	
			tokens = map(tokens, function (token) {
				var val,
					decVal;
	
				if (!token.type) {
					// if it is not a moment token, use the token as its own value
					return token.token;
				}
	
				// apply negative precision formatting to the least-significant moment token
				if (token.isLeast && (settings.precision < 0)) {
					val = (Math.floor(token.wholeValue * Math.pow(10, settings.precision)) * Math.pow(10, -settings.precision)).toString();
				} else {
					val = token.wholeValue.toString();
				}
				
				// remove negative sign from the beginning
				val = val.replace(/^\-/, "");
	
				// apply token length formatting
				// special handling for the first moment token that is not the most significant in a trimmed template
				if (token.length > 1 && (foundFirst || token.isMost || settings.forceLength)) {
					val = padZero(val, token.length);
				}
	
				// add decimal value if precision > 0
				if (token.isLeast && (settings.precision > 0)) {
					decVal = token.decimalValue.toString().replace(/^\-/, "").split(/\.|e\-/);
					switch (decVal.length) {
						case 1:
							val += "." + padZero(decVal[0], settings.precision, true).slice(0, settings.precision);
							break;
							
						case 2:
							val += "." + padZero(decVal[1], settings.precision, true).slice(0, settings.precision);		
							break;
							
						case 3:
							val += "." + padZero(repeatZero((+decVal[2]) - 1) + (decVal[0] || "0") + decVal[1], settings.precision, true).slice(0, settings.precision);		
							break;
						
						default:
							throw "Moment Duration Format: unable to parse token decimal value.";
					}
				}
				
				// add a negative sign if the value is negative and token is most significant
				if (token.isMost && token.value < 0) {
					val = "-" + val;
				}
	
				foundFirst = true;
	
				return val;
			});
	
			// undo the reverse if trimming from the right
			if (settings.trim === "right") {
				tokens.reverse();
			}
	
			return tokens.join("");
		};
	
		moment.duration.fn.format.defaults = {
			// token definitions
			escape: /\[(.+?)\]/,
			years: /[Yy]+/,
			months: /M+/,
			weeks: /[Ww]+/,
			days: /[Dd]+/,
			hours: /[Hh]+/,
			minutes: /m+/,
			seconds: /s+/,
			milliseconds: /S+/,
			general: /.+?/,
	
			// token type names
			// in order of descending magnitude
			// can be a space-separated token name list or an array of token names
			types: "escape years months weeks days hours minutes seconds milliseconds general",
	
			// format options
	
			// trim
			// "left" - template tokens are trimmed from the left until the first moment token that has a value >= 1
			// "right" - template tokens are trimmed from the right until the first moment token that has a value >= 1
			// (the final moment token is not trimmed, regardless of value)
			// `false` - template tokens are not trimmed
			trim: "left",
	
			// precision
			// number of decimal digits to include after (to the right of) the decimal point (positive integer)
			// or the number of digits to truncate to 0 before (to the left of) the decimal point (negative integer)
			precision: 0,
	
			// force first moment token with a value to render at full length even when template is trimmed and first moment token has length of 1
			forceLength: null,
	
			// template used to format duration
			// may be a function or a string
			// template functions are executed with the `this` binding of the settings object
			// so that template strings may be dynamically generated based on the duration object
			// (accessible via `this.duration`)
			// or any of the other settings
			template: function () {
				var types = this.types,
					dur = this.duration,
					lastType = findLast(types, function (type) {
						return dur._data[type];
					});
	
				// default template strings for each duration dimension type
				switch (lastType) {
					case "seconds":
						return "h:mm:ss";
					case "minutes":
						return "d[d] h:mm";
					case "hours":
						return "d[d] h[h]";
					case "days":
						return "M[m] d[d]";
					case "weeks":
						return "y[y] w[w]";
					case "months":
						return "y[y] M[m]";
					case "years":
						return "y[y]";
					default:
						return "y[y] M[m] d[d] h:mm:ss";
				}
			}
		};
	
	})(this);


/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGltZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9tb21lbnQtZHVyYXRpb24tZm9ybWF0L2xpYi9tb21lbnQtZHVyYXRpb24tZm9ybWF0LmpzIl0sIm5hbWVzIjpbImluaXQiLCJ0aGVuIiwiQkxPQ0tFRF9QQUdFIiwibG9hZEZpbHRlcmVkUGFnZSIsInRhYklkIiwidXJsIiwic2V0VGltZW91dCIsImNocm9tZSIsInRhYnMiLCJ1cGRhdGUiLCJoYW5kbGVBY3Rpb24iLCJhY3Rpb24iLCJkZXRhaWxzIiwibWF0Y2hQYXR0ZXJucyIsImdldFJlZ2V4UGF0dGVybnMiLCJwYXR0ZXJucyIsInVuZGVmaW5lZCIsIml0ZW1zIiwibGVuZ3RoIiwiZmluZCIsInJlZyIsIlJlZ0V4cCIsInJlZ2V4IiwidGVzdCIsInVybENoZWNrIiwicHJvdG9jb2wiLCJzaXRlIiwiZ2V0UmVjb3JkIiwiYWNsTWF0Y2giLCJyZWNvcmQiLCJhZHZBY3Rpb24iLCJwYXR0ZXJuTWF0Y2giLCJjYXRjaCIsIndlYlJlcXVlc3QiLCJvbkJlZm9yZVJlcXVlc3QiLCJhZGRMaXN0ZW5lciIsInVybHMiLCJ0eXBlcyIsIlRpbWVyIiwiY3VycmVudFNpdGUiLCJjdXJyZW50VGFiIiwicG9wdXAiLCJjb3VudGVyIiwiZGJDb3VudGVyIiwiaW50ZXJ2YWxJZCIsImN1cnJlbnREYXRlIiwiZm9ybWF0Iiwic3RhcnRUaW1lIiwibmV3RGF5VGltZXIiLCJzZXROZXdEYXlUaW1lciIsIndpbmRvd3MiLCJnZXRBbGwiLCJwb3B1bGF0ZSIsImZvckVhY2giLCJ3aW4iLCJ0YWIiLCJpc1ZhbGlkUHJvdG9jb2wiLCJleGVjdXRlU2NyaXB0IiwiaWQiLCJmaWxlIiwicnVudGltZSIsIm9uTWVzc2FnZSIsInJlcXVlc3QiLCJzZW5kZXIiLCJzZW5kUmVzcG9uc2UiLCJmb2N1cyIsInNlbmRlclNpdGUiLCJzYXZlUmVjb3JkcyIsInRpbWVyIiwic2Vjb25kcyIsImR1cmF0aW9uIiwiZGlmZiIsImFzU2Vjb25kcyIsIm9uVXBkYXRlZCIsImNoYW5nZUluZm8iLCJ0YWJTaXRlIiwiY29uc29sZSIsImxvZyIsInZhbGlkVXJsIiwidG9tb3Jyb3ciLCJhZGQiLCJzdGFydE9mIiwibm93IiwicmVjb25jaWxlUmVjb3JkcyIsImdldER1cmF0aW9uIiwicHJveHlUaW1lciIsIlByb3h5Iiwic2V0IiwidGFyZ2V0Iiwia2V5IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLHFCQUFHQSxJQUFILEdBQVVDLElBQVYsQ0FBZSxZQUFNO0FBQ25CLG1CQUFNRCxJQUFOO0FBQ0QsRUFGRDs7QUFJQSxLQUFNRSxlQUFlLG1DQUFyQjs7QUFFQSxVQUFTQyxnQkFBVCxDQUEwQkMsS0FBMUIsRUFBaUNDLEdBQWpDLEVBQXNDO0FBQ3BDQyxjQUFXLFlBQU07QUFDZkMsWUFBT0MsSUFBUCxDQUFZQyxNQUFaLENBQW1CTCxLQUFuQixFQUEwQixFQUFFQyxRQUFGLEVBQTFCO0FBQ0QsSUFGRCxFQUVHLEdBRkg7QUFHRDtBQUNELFVBQVNLLFlBQVQsQ0FBc0JDLE1BQXRCLEVBQThCQyxPQUE5QixFQUF1QztBQUNyQyxPQUFJRCxXQUFXLE9BQWYsRUFBd0I7QUFDdEJSLHNCQUFpQlMsUUFBUVIsS0FBekIsRUFBZ0NGLFlBQWhDO0FBQ0QsSUFGRCxNQUVPLElBQUlTLFdBQVcsT0FBZixFQUF3QjtBQUM3QlIsc0JBQWlCUyxRQUFRUixLQUF6QixFQUFnQ0YsWUFBaEM7QUFDRDtBQUNGO0FBQ0QsVUFBU1csYUFBVCxDQUF1QkQsT0FBdkIsRUFBZ0M7QUFDOUIsVUFBTyxvQkFBR0UsZ0JBQUgsR0FDSmIsSUFESSxDQUNDLG9CQUFZO0FBQ2hCLFNBQUljLGFBQWFDLFNBQWIsSUFBMEJELFNBQVNFLEtBQVQsQ0FBZUMsTUFBZixHQUF3QixDQUF0RCxFQUF5RDtBQUN2RCxjQUFPSCxTQUFTRSxLQUFULENBQWVF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QTtBQUNBO0FBQ0EsS0FBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU07O0FBRU47QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0VBQW1FLGNBQWM7QUFDakY7QUFDQTtBQUNBLEtBQUk7O0FBRUo7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7OztBQUdBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhGO0FBQ0E7O0FBRUE7QUFDQSxrSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRUFBQyIsImZpbGUiOiJiYWNrZ3JvdW5kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHd1cmwgZnJvbSAnd3VybCc7XG5pbXBvcnQgQkwgZnJvbSAnLi9ibG9ja0xpc3QuanMnO1xuaW1wb3J0IFRpbWVyIGZyb20gJy4vdGltZXIuanMnO1xuXG5CTC5pbml0KCkudGhlbigoKSA9PiB7XG4gIFRpbWVyLmluaXQoKTtcbn0pO1xuXG5jb25zdCBCTE9DS0VEX1BBR0UgPSAnaHR0cHM6Ly93d3cuZ2l0aHViLmNvbS93cmxlc2tvdmVjJztcblxuZnVuY3Rpb24gbG9hZEZpbHRlcmVkUGFnZSh0YWJJZCwgdXJsKSB7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGNocm9tZS50YWJzLnVwZGF0ZSh0YWJJZCwgeyB1cmwgfSk7XG4gIH0sIDUwMCk7XG59XG5mdW5jdGlvbiBoYW5kbGVBY3Rpb24oYWN0aW9uLCBkZXRhaWxzKSB7XG4gIGlmIChhY3Rpb24gPT09ICdibG9jaycpIHtcbiAgICBsb2FkRmlsdGVyZWRQYWdlKGRldGFpbHMudGFiSWQsIEJMT0NLRURfUEFHRSk7XG4gIH0gZWxzZSBpZiAoYWN0aW9uID09PSAnbGltaXQnKSB7XG4gICAgbG9hZEZpbHRlcmVkUGFnZShkZXRhaWxzLnRhYklkLCBCTE9DS0VEX1BBR0UpO1xuICB9XG59XG5mdW5jdGlvbiBtYXRjaFBhdHRlcm5zKGRldGFpbHMpIHtcbiAgcmV0dXJuIEJMLmdldFJlZ2V4UGF0dGVybnMoKVxuICAgIC50aGVuKHBhdHRlcm5zID0+IHtcbiAgICAgIGlmIChwYXR0ZXJucyAhPT0gdW5kZWZpbmVkICYmIHBhdHRlcm5zLml0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuIHBhdHRlcm5zLml0ZW1zLmZpbmQoYWN0aW9uID0+IHtcbiAgICAgICAgICBjb25zdCByZWcgPSBuZXcgUmVnRXhwKGFjdGlvbi5yZWdleCwgJ2knKTtcbiAgICAgICAgICByZXR1cm4gcmVnLnRlc3QoZGV0YWlscy51cmwpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHVybENoZWNrKGRldGFpbHMpIHtcbiAgY29uc3QgcHJvdG9jb2wgPSB3dXJsKCdwcm90b2NvbCcsIGRldGFpbHMudXJsKTtcbiAgaWYgKHByb3RvY29sICE9PSAnY2hyb21lJyAmJiBwcm90b2NvbCAhPT0gJ2Nocm9tZS1leHRlbnNpb24nKSB7XG4gICAgY29uc3Qgc2l0ZSA9IHd1cmwoJ2RvbWFpbicsIGRldGFpbHMudXJsKTtcbiAgICBCTC5nZXRSZWNvcmQoc2l0ZSlcbiAgICAgIC50aGVuKHJlY29yZCA9PiB7XG4gICAgICAgIGNvbnN0IGFjbE1hdGNoID0gcmVjb3JkLmFkdkFjdGlvbi5maW5kKGFjdGlvbiA9PiB7XG4gICAgICAgICAgY29uc3QgcmVnID0gbmV3IFJlZ0V4cChhY3Rpb24ucmVnZXgsICdpJyk7XG4gICAgICAgICAgcmV0dXJuIHJlZy50ZXN0KGRldGFpbHMudXJsKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChhY2xNYXRjaCkge1xuICAgICAgICAgIGhhbmRsZUFjdGlvbihhY2xNYXRjaC5hY3Rpb24sIGRldGFpbHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1hdGNoUGF0dGVybnMoZGV0YWlscylcbiAgICAgICAgICAgIC50aGVuKHBhdHRlcm5NYXRjaCA9PiB7XG4gICAgICAgICAgICAgIGlmIChwYXR0ZXJuTWF0Y2gpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVBY3Rpb24ocGF0dGVybk1hdGNoLmFjdGlvbiwgZGV0YWlscyk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlQWN0aW9uKHJlY29yZC5hY3Rpb24sIGRldGFpbHMpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgIG1hdGNoUGF0dGVybnMoZGV0YWlscylcbiAgICAgICAgICAudGhlbihwYXR0ZXJuTWF0Y2ggPT4ge1xuICAgICAgICAgICAgaWYgKHBhdHRlcm5NYXRjaCkgaGFuZGxlQWN0aW9uKHBhdHRlcm5NYXRjaC5hY3Rpb24sIGRldGFpbHMpO1xuICAgICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH1cbiAgcmV0dXJuIHt9O1xufVxuXG5jaHJvbWUud2ViUmVxdWVzdC5vbkJlZm9yZVJlcXVlc3QuYWRkTGlzdGVuZXIodXJsQ2hlY2ssIHtcbiAgdXJsczogWyc8YWxsX3VybHM+J10sXG4gIHR5cGVzOiBbJ21haW5fZnJhbWUnXVxufSk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9iYWNrZ3JvdW5kLmpzXG4gKiovIiwiaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0ICdtb21lbnQtZHVyYXRpb24tZm9ybWF0JztcbmltcG9ydCBCTCBmcm9tICcuL2Jsb2NrTGlzdC5qcyc7XG5pbXBvcnQgd3VybCBmcm9tICd3dXJsJztcblxuY2xhc3MgVGltZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmN1cnJlbnRTaXRlID0gbnVsbDtcbiAgICB0aGlzLmN1cnJlbnRUYWIgPSBudWxsO1xuICAgIHRoaXMucG9wdXAgPSBmYWxzZTtcbiAgICB0aGlzLmNvdW50ZXIgPSAxO1xuICAgIHRoaXMuZGJDb3VudGVyID0gMTtcbiAgICB0aGlzLmludGVydmFsSWQgPSBudWxsO1xuICAgIHRoaXMuY3VycmVudERhdGUgPSBtb21lbnQoKS5mb3JtYXQoJ0RELU1NLVlZWVknKTtcbiAgICB0aGlzLnN0YXJ0VGltZSA9IG51bGw7XG4gICAgdGhpcy5uZXdEYXlUaW1lciA9IHRoaXMuc2V0TmV3RGF5VGltZXIoKTtcbiAgfVxuICBpbml0KCkge1xuICAgIGNocm9tZS53aW5kb3dzLmdldEFsbCh7IHBvcHVsYXRlOiB0cnVlIH0sICh3aW5kb3dzKSA9PiB7XG4gICAgICB3aW5kb3dzLmZvckVhY2goKHdpbikgPT4ge1xuICAgICAgICB3aW4udGFicy5mb3JFYWNoKCh0YWIpID0+IHtcbiAgICAgICAgICBpZiAodGhpcy5pc1ZhbGlkUHJvdG9jb2wodGFiLnVybCkpIHtcbiAgICAgICAgICAgIGNocm9tZS50YWJzLmV4ZWN1dGVTY3JpcHQodGFiLmlkLCB7IGZpbGU6ICdjb250ZW50LmpzJyB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKChyZXF1ZXN0LCBzZW5kZXIsIHNlbmRSZXNwb25zZSkgPT4ge1xuICAgICAgaWYgKHJlcXVlc3QuZm9jdXMpIHtcbiAgICAgICAgY29uc3Qgc2VuZGVyU2l0ZSA9IHd1cmwoJ2RvbWFpbicsIHNlbmRlci50YWIudXJsKTtcbiAgICAgICAgaWYgKHJlcXVlc3QuZm9jdXMgPT09ICdmb2N1cycgJiYgc2VuZGVyU2l0ZSAhPT0gdGhpcy5jdXJyZW50U2l0ZSAmJiBzZW5kZXJTaXRlXG4gICAgICAgICAmJiBzZW5kZXIudGFiLmlkICE9PSB0aGlzLmN1cnJlbnRUYWIgJiYgdGhpcy5pc1ZhbGlkUHJvdG9jb2woc2VuZGVyU2l0ZSkpIHtcbiAgICAgICAgICB0aGlzLnBvcHVwID0gZmFsc2U7XG4gICAgICAgICAgaWYgKHRoaXMuY3VycmVudFNpdGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuc2F2ZVJlY29yZHMoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5jdXJyZW50VGFiID0gc2VuZGVyLnRhYi5pZDtcbiAgICAgICAgICB0aGlzLmN1cnJlbnRTaXRlID0gc2VuZGVyU2l0ZTtcbiAgICAgICAgICB0aGlzLnN0YXJ0VGltZSA9IG1vbWVudCgpO1xuICAgICAgICB9IGVsc2UgaWYgKHJlcXVlc3QuZm9jdXMgPT09ICdibHVyJykge1xuICAgICAgICAgIGlmIChzZW5kZXIudGFiLmlkID09PSB0aGlzLmN1cnJlbnRUYWIgJiYgc2VuZGVyU2l0ZSAmJiAhdGhpcy5wb3B1cCkge1xuICAgICAgICAgICAgdGhpcy5zYXZlUmVjb3JkcygpO1xuICAgICAgICAgICAgdGhpcy5zdGFydFRpbWUgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50U2l0ZSA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRUYWIgPSBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHJlcXVlc3QudGltZXIgPT09ICdwb3B1cCcpIHtcbiAgICAgICAgdGhpcy5wb3B1cCA9IHRydWU7XG4gICAgICAgIHNlbmRSZXNwb25zZSh7IHNlY29uZHM6IG1vbWVudC5kdXJhdGlvbihtb21lbnQoKS5kaWZmKHRoaXMuc3RhcnRUaW1lKSkuYXNTZWNvbmRzKCkgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgY2hyb21lLnRhYnMub25VcGRhdGVkLmFkZExpc3RlbmVyKCh0YWJJZCwgY2hhbmdlSW5mbywgdGFiKSA9PiB7XG4gICAgICBjb25zdCB0YWJTaXRlID0gd3VybCgnZG9tYWluJywgdGFiLnVybCk7XG4gICAgICBjb25zb2xlLmxvZyhgY3VycmVudFNpdGU6ICR7dGhpcy5jdXJyZW50U2l0ZX0sIHRhYjogJHt0YWJTaXRlfWApO1xuICAgICAgY29uc3QgdmFsaWRVcmwgPSB0YWJTaXRlICE9PSB0aGlzLmN1cnJlbnRTaXRlICYmIHRoaXMuaXNWYWxpZFByb3RvY29sKHRhYi51cmwpO1xuICAgICAgaWYgKHZhbGlkVXJsKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFNpdGUgPSB0YWJTaXRlO1xuICAgICAgICB0aGlzLmN1cnJlbnRUYWIgPSB0YWIuaWQ7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgc2V0TmV3RGF5VGltZXIoKSB7XG4gICAgY29uc3QgdG9tb3Jyb3cgPSBtb21lbnQoKS5hZGQoMSwgJ2RheXMnKS5zdGFydE9mKCdkYXknKTtcbiAgICByZXR1cm4gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zdCBub3cgPSBtb21lbnQoKTtcbiAgICAgIHRoaXMuc2F2ZVJlY29yZHMoKTtcbiAgICAgIHRoaXMuY3VycmVudERhdGUgPSB0aGlzLmN1cnJlbnREYXRlID0gbm93LmZvcm1hdCgnREQtTU0tWVlZWScpO1xuICAgICAgdGhpcy5zdGFydFRpbWUgPSBub3c7XG4gICAgfSwgdG9tb3Jyb3cuZGlmZihtb21lbnQoKSkpO1xuICB9XG4gIGlzVmFsaWRQcm90b2NvbCh1cmwpIHtcbiAgICBjb25zdCBwcm90b2NvbCA9IHd1cmwoJ3Byb3RvY29sJywgdXJsKTtcbiAgICByZXR1cm4gKFxuICAgICAgcHJvdG9jb2wgPT09ICdodHRwJyB8fCBwcm90b2NvbCA9PT0gJ2h0dHBzJyB8fCBwcm90b2NvbCA9PT0gJ2Z0cCdcbiAgICApO1xuICB9XG4gIGdldER1cmF0aW9uKCkge1xuICAgIHJldHVybiBtb21lbnQuZHVyYXRpb24obW9tZW50KCkuZGlmZih0aGlzLnN0YXJ0VGltZSkpLmFzU2Vjb25kcygpO1xuICB9XG4gIHNhdmVSZWNvcmRzKCkge1xuICAgIEJMLnJlY29uY2lsZVJlY29yZHModGhpcy5jdXJyZW50U2l0ZSwgdGhpcy5nZXREdXJhdGlvbigpLCAxKTtcbiAgICB0aGlzLnN0YXJ0VGltZSA9IG1vbWVudCgpO1xuICB9XG59XG5cbmNvbnN0IHByb3h5VGltZXIgPSBuZXcgUHJveHkobmV3IFRpbWVyKCksIHtcbiAgc2V0KHRhcmdldCwga2V5LCB2YWx1ZSkge1xuICAgIC8vIGNvbnNvbGUubG9nKGAke2tleX06ICR7dmFsdWV9YCk7XG4gICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufSk7XG5leHBvcnQgZGVmYXVsdCBwcm94eVRpbWVyO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdGltZXIuanNcbiAqKi8iLCIvKiEgTW9tZW50IER1cmF0aW9uIEZvcm1hdCB2MS4zLjBcbiAqICBodHRwczovL2dpdGh1Yi5jb20vanNtcmVlc2UvbW9tZW50LWR1cmF0aW9uLWZvcm1hdCBcbiAqICBEYXRlOiAyMDE0LTA3LTE1XG4gKlxuICogIER1cmF0aW9uIGZvcm1hdCBwbHVnaW4gZnVuY3Rpb24gZm9yIHRoZSBNb21lbnQuanMgbGlicmFyeVxuICogIGh0dHA6Ly9tb21lbnRqcy5jb20vXG4gKlxuICogIENvcHlyaWdodCAyMDE0IEpvaG4gTWFkaGF2YW4tUmVlc2VcbiAqICBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiAqL1xuXG4oZnVuY3Rpb24gKHJvb3QsIHVuZGVmaW5lZCkge1xuXG5cdC8vIHJlcGVhdFplcm8ocXR5KVxuXHQvLyByZXR1cm5zIFwiMFwiIHJlcGVhdGVkIHF0eSB0aW1lc1xuXHRmdW5jdGlvbiByZXBlYXRaZXJvKHF0eSkge1xuXHRcdHZhciByZXN1bHQgPSBcIlwiO1xuXHRcdFxuXHRcdC8vIGV4aXQgZWFybHlcblx0XHQvLyBpZiBxdHkgaXMgMCBvciBhIG5lZ2F0aXZlIG51bWJlclxuXHRcdC8vIG9yIGRvZXNuJ3QgY29lcmNlIHRvIGFuIGludGVnZXJcblx0XHRxdHkgPSBwYXJzZUludChxdHksIDEwKTtcblx0XHRpZiAoIXF0eSB8fCBxdHkgPCAxKSB7IHJldHVybiByZXN1bHQ7IH1cblx0XHRcblx0XHR3aGlsZSAocXR5KSB7XG5cdFx0XHRyZXN1bHQgKz0gXCIwXCI7XG5cdFx0XHRxdHkgLT0gMTtcblx0XHR9XG5cdFx0XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXHRcblx0Ly8gcGFkWmVybyhzdHIsIGxlbiBbLCBpc1JpZ2h0XSlcblx0Ly8gcGFkcyBhIHN0cmluZyB3aXRoIHplcm9zIHVwIHRvIGEgc3BlY2lmaWVkIGxlbmd0aFxuXHQvLyB3aWxsIG5vdCBwYWQgYSBzdHJpbmcgaWYgaXRzIGxlbmd0aCBpcyBhcmVhZHlcblx0Ly8gZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvIHRoZSBzcGVjaWZpZWQgbGVuZ3RoXG5cdC8vIGRlZmF1bHQgb3V0cHV0IHBhZHMgd2l0aCB6ZXJvcyBvbiB0aGUgbGVmdFxuXHQvLyBzZXQgaXNSaWdodCB0byBgdHJ1ZWAgdG8gcGFkIHdpdGggemVyb3Mgb24gdGhlIHJpZ2h0XG5cdGZ1bmN0aW9uIHBhZFplcm8oc3RyLCBsZW4sIGlzUmlnaHQpIHtcblx0XHRpZiAoc3RyID09IG51bGwpIHsgc3RyID0gXCJcIjsgfVxuXHRcdHN0ciA9IFwiXCIgKyBzdHI7XG5cdFx0XG5cdFx0cmV0dXJuIChpc1JpZ2h0ID8gc3RyIDogXCJcIikgKyByZXBlYXRaZXJvKGxlbiAtIHN0ci5sZW5ndGgpICsgKGlzUmlnaHQgPyBcIlwiIDogc3RyKTtcblx0fVxuXHRcblx0Ly8gaXNBcnJheVxuXHRmdW5jdGlvbiBpc0FycmF5KGFycmF5KSB7XG5cdFx0cmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcnJheSkgPT09IFwiW29iamVjdCBBcnJheV1cIjtcblx0fVxuXHRcblx0Ly8gaXNPYmplY3Rcblx0ZnVuY3Rpb24gaXNPYmplY3Qob2JqKSB7XG5cdFx0cmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopID09PSBcIltvYmplY3QgT2JqZWN0XVwiO1xuXHR9XG5cdFxuXHQvLyBmaW5kTGFzdFxuXHRmdW5jdGlvbiBmaW5kTGFzdChhcnJheSwgY2FsbGJhY2spIHtcblx0XHR2YXIgaW5kZXggPSBhcnJheS5sZW5ndGg7XG5cblx0XHR3aGlsZSAoaW5kZXggLT0gMSkge1xuXHRcdFx0aWYgKGNhbGxiYWNrKGFycmF5W2luZGV4XSkpIHsgcmV0dXJuIGFycmF5W2luZGV4XTsgfVxuXHRcdH1cblx0fVxuXG5cdC8vIGZpbmRcblx0ZnVuY3Rpb24gZmluZChhcnJheSwgY2FsbGJhY2spIHtcblx0XHR2YXIgaW5kZXggPSAwLFxuXHRcdFx0bWF4ID0gYXJyYXkubGVuZ3RoLFxuXHRcdFx0bWF0Y2g7XG5cdFx0XHRcblx0XHRpZiAodHlwZW9mIGNhbGxiYWNrICE9PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdG1hdGNoID0gY2FsbGJhY2s7XG5cdFx0XHRjYWxsYmFjayA9IGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHRcdHJldHVybiBpdGVtID09PSBtYXRjaDtcblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0d2hpbGUgKGluZGV4IDwgbWF4KSB7XG5cdFx0XHRpZiAoY2FsbGJhY2soYXJyYXlbaW5kZXhdKSkgeyByZXR1cm4gYXJyYXlbaW5kZXhdOyB9XG5cdFx0XHRpbmRleCArPSAxO1xuXHRcdH1cblx0fVxuXHRcblx0Ly8gZWFjaFxuXHRmdW5jdGlvbiBlYWNoKGFycmF5LCBjYWxsYmFjaykge1xuXHRcdHZhciBpbmRleCA9IDAsXG5cdFx0XHRtYXggPSBhcnJheS5sZW5ndGg7XG5cdFx0XHRcblx0XHRpZiAoIWFycmF5IHx8ICFtYXgpIHsgcmV0dXJuOyB9XG5cblx0XHR3aGlsZSAoaW5kZXggPCBtYXgpIHtcblx0XHRcdGlmIChjYWxsYmFjayhhcnJheVtpbmRleF0sIGluZGV4KSA9PT0gZmFsc2UpIHsgcmV0dXJuOyB9XG5cdFx0XHRpbmRleCArPSAxO1xuXHRcdH1cblx0fVxuXHRcblx0Ly8gbWFwXG5cdGZ1bmN0aW9uIG1hcChhcnJheSwgY2FsbGJhY2spIHtcblx0XHR2YXIgaW5kZXggPSAwLFxuXHRcdFx0bWF4ID0gYXJyYXkubGVuZ3RoLFxuXHRcdFx0cmV0ID0gW107XG5cblx0XHRpZiAoIWFycmF5IHx8ICFtYXgpIHsgcmV0dXJuIHJldDsgfVxuXHRcdFx0XHRcblx0XHR3aGlsZSAoaW5kZXggPCBtYXgpIHtcblx0XHRcdHJldFtpbmRleF0gPSBjYWxsYmFjayhhcnJheVtpbmRleF0sIGluZGV4KTtcblx0XHRcdGluZGV4ICs9IDE7XG5cdFx0fVxuXHRcdFxuXHRcdHJldHVybiByZXQ7XG5cdH1cblx0XG5cdC8vIHBsdWNrXG5cdGZ1bmN0aW9uIHBsdWNrKGFycmF5LCBwcm9wKSB7XG5cdFx0cmV0dXJuIG1hcChhcnJheSwgZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdHJldHVybiBpdGVtW3Byb3BdO1xuXHRcdH0pO1xuXHR9XG5cdFxuXHQvLyBjb21wYWN0XG5cdGZ1bmN0aW9uIGNvbXBhY3QoYXJyYXkpIHtcblx0XHR2YXIgcmV0ID0gW107XG5cdFx0XG5cdFx0ZWFjaChhcnJheSwgZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdGlmIChpdGVtKSB7IHJldC5wdXNoKGl0ZW0pOyB9XG5cdFx0fSk7XG5cdFx0XG5cdFx0cmV0dXJuIHJldDtcblx0fVxuXHRcblx0Ly8gdW5pcXVlXG5cdGZ1bmN0aW9uIHVuaXF1ZShhcnJheSkge1xuXHRcdHZhciByZXQgPSBbXTtcblx0XHRcblx0XHRlYWNoKGFycmF5LCBmdW5jdGlvbiAoX2EpIHtcblx0XHRcdGlmICghZmluZChyZXQsIF9hKSkgeyByZXQucHVzaChfYSk7IH1cblx0XHR9KTtcblx0XHRcblx0XHRyZXR1cm4gcmV0O1xuXHR9XG5cdFxuXHQvLyBpbnRlcnNlY3Rpb25cblx0ZnVuY3Rpb24gaW50ZXJzZWN0aW9uKGEsIGIpIHtcblx0XHR2YXIgcmV0ID0gW107XG5cdFx0XG5cdFx0ZWFjaChhLCBmdW5jdGlvbiAoX2EpIHtcblx0XHRcdGVhY2goYiwgZnVuY3Rpb24gKF9iKSB7XG5cdFx0XHRcdGlmIChfYSA9PT0gX2IpIHsgcmV0LnB1c2goX2EpOyB9XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0XHRcblx0XHRyZXR1cm4gdW5pcXVlKHJldCk7XG5cdH1cblx0XG5cdC8vIHJlc3Rcblx0ZnVuY3Rpb24gcmVzdChhcnJheSwgY2FsbGJhY2spIHtcblx0XHR2YXIgcmV0ID0gW107XG5cdFx0XG5cdFx0ZWFjaChhcnJheSwgZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG5cdFx0XHRpZiAoIWNhbGxiYWNrKGl0ZW0pKSB7XG5cdFx0XHRcdHJldCA9IGFycmF5LnNsaWNlKGluZGV4KTtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdFxuXHRcdHJldHVybiByZXQ7XG5cdH1cblxuXHQvLyBpbml0aWFsXG5cdGZ1bmN0aW9uIGluaXRpYWwoYXJyYXksIGNhbGxiYWNrKSB7XG5cdFx0dmFyIHJldmVyc2VkID0gYXJyYXkuc2xpY2UoKS5yZXZlcnNlKCk7XG5cdFx0XG5cdFx0cmV0dXJuIHJlc3QocmV2ZXJzZWQsIGNhbGxiYWNrKS5yZXZlcnNlKCk7XG5cdH1cblx0XG5cdC8vIGV4dGVuZFxuXHRmdW5jdGlvbiBleHRlbmQoYSwgYikge1xuXHRcdGZvciAodmFyIGtleSBpbiBiKSB7XG5cdFx0XHRpZiAoYi5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7IGFba2V5XSA9IGJba2V5XTsgfVxuXHRcdH1cblx0XHRcblx0XHRyZXR1cm4gYTtcblx0fVxuXHRcdFx0XG5cdC8vIGRlZmluZSBpbnRlcm5hbCBtb21lbnQgcmVmZXJlbmNlXG5cdHZhciBtb21lbnQ7XG5cblx0aWYgKHR5cGVvZiByZXF1aXJlID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHR0cnkgeyBtb21lbnQgPSByZXF1aXJlKCdtb21lbnQnKTsgfSBcblx0XHRjYXRjaCAoZSkge31cblx0fSBcblx0XG5cdGlmICghbW9tZW50ICYmIHJvb3QubW9tZW50KSB7XG5cdFx0bW9tZW50ID0gcm9vdC5tb21lbnQ7XG5cdH1cblx0XG5cdGlmICghbW9tZW50KSB7XG5cdFx0dGhyb3cgXCJNb21lbnQgRHVyYXRpb24gRm9ybWF0IGNhbm5vdCBmaW5kIE1vbWVudC5qc1wiO1xuXHR9XG5cdFxuXHQvLyBtb21lbnQuZHVyYXRpb24uZm9ybWF0KFt0ZW1wbGF0ZV0gWywgcHJlY2lzaW9uXSBbLCBzZXR0aW5nc10pXG5cdG1vbWVudC5kdXJhdGlvbi5mbi5mb3JtYXQgPSBmdW5jdGlvbiAoKSB7XG5cblx0XHR2YXIgdG9rZW5pemVyLCB0b2tlbnMsIHR5cGVzLCB0eXBlTWFwLCBtb21lbnRUeXBlcywgZm91bmRGaXJzdCwgdHJpbUluZGV4LFxuXHRcdFx0YXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKSxcblx0XHRcdHNldHRpbmdzID0gZXh0ZW5kKHt9LCB0aGlzLmZvcm1hdC5kZWZhdWx0cyksXG5cdFx0XHQvLyBrZWVwIGEgc2hhZG93IGNvcHkgb2YgdGhpcyBtb21lbnQgZm9yIGNhbGN1bGF0aW5nIHJlbWFpbmRlcnNcblx0XHRcdHJlbWFpbmRlciA9IG1vbWVudC5kdXJhdGlvbih0aGlzKTtcblxuXHRcdC8vIGFkZCBhIHJlZmVyZW5jZSB0byB0aGlzIGR1cmF0aW9uIG9iamVjdCB0byB0aGUgc2V0dGluZ3MgZm9yIHVzZVxuXHRcdC8vIGluIGEgdGVtcGxhdGUgZnVuY3Rpb25cblx0XHRzZXR0aW5ncy5kdXJhdGlvbiA9IHRoaXM7XG5cblx0XHQvLyBwYXJzZSBhcmd1bWVudHNcblx0XHRlYWNoKGFyZ3MsIGZ1bmN0aW9uIChhcmcpIHtcblx0XHRcdGlmICh0eXBlb2YgYXJnID09PSBcInN0cmluZ1wiIHx8IHR5cGVvZiBhcmcgPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHRzZXR0aW5ncy50ZW1wbGF0ZSA9IGFyZztcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodHlwZW9mIGFyZyA9PT0gXCJudW1iZXJcIikge1xuXHRcdFx0XHRzZXR0aW5ncy5wcmVjaXNpb24gPSBhcmc7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGlzT2JqZWN0KGFyZykpIHtcblx0XHRcdFx0ZXh0ZW5kKHNldHRpbmdzLCBhcmcpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0Ly8gdHlwZXNcblx0XHR0eXBlcyA9IHNldHRpbmdzLnR5cGVzID0gKGlzQXJyYXkoc2V0dGluZ3MudHlwZXMpID8gc2V0dGluZ3MudHlwZXMgOiBzZXR0aW5ncy50eXBlcy5zcGxpdChcIiBcIikpO1xuXG5cdFx0Ly8gdGVtcGxhdGVcblx0XHRpZiAodHlwZW9mIHNldHRpbmdzLnRlbXBsYXRlID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdHNldHRpbmdzLnRlbXBsYXRlID0gc2V0dGluZ3MudGVtcGxhdGUuYXBwbHkoc2V0dGluZ3MpO1xuXHRcdH1cblxuXHRcdC8vIHRva2VuaXplciByZWdleHBcblx0XHR0b2tlbml6ZXIgPSBuZXcgUmVnRXhwKG1hcCh0eXBlcywgZnVuY3Rpb24gKHR5cGUpIHtcblx0XHRcdHJldHVybiBzZXR0aW5nc1t0eXBlXS5zb3VyY2U7XG5cdFx0fSkuam9pbihcInxcIiksIFwiZ1wiKTtcblxuXHRcdC8vIHRva2VuIHR5cGUgbWFwIGZ1bmN0aW9uXG5cdFx0dHlwZU1hcCA9IGZ1bmN0aW9uICh0b2tlbikge1xuXHRcdFx0cmV0dXJuIGZpbmQodHlwZXMsIGZ1bmN0aW9uICh0eXBlKSB7XG5cdFx0XHRcdHJldHVybiBzZXR0aW5nc1t0eXBlXS50ZXN0KHRva2VuKTtcblx0XHRcdH0pO1xuXHRcdH07XG5cblx0XHQvLyB0b2tlbnMgYXJyYXlcblx0XHR0b2tlbnMgPSBtYXAoc2V0dGluZ3MudGVtcGxhdGUubWF0Y2godG9rZW5pemVyKSwgZnVuY3Rpb24gKHRva2VuLCBpbmRleCkge1xuXHRcdFx0dmFyIHR5cGUgPSB0eXBlTWFwKHRva2VuKSxcblx0XHRcdFx0bGVuZ3RoID0gdG9rZW4ubGVuZ3RoO1xuXG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRpbmRleDogaW5kZXgsXG5cdFx0XHRcdGxlbmd0aDogbGVuZ3RoLFxuXG5cdFx0XHRcdC8vIHJlcGxhY2UgZXNjYXBlZCB0b2tlbnMgd2l0aCB0aGUgbm9uLWVzY2FwZWQgdG9rZW4gdGV4dFxuXHRcdFx0XHR0b2tlbjogKHR5cGUgPT09IFwiZXNjYXBlXCIgPyB0b2tlbi5yZXBsYWNlKHNldHRpbmdzLmVzY2FwZSwgXCIkMVwiKSA6IHRva2VuKSxcblxuXHRcdFx0XHQvLyBpZ25vcmUgdHlwZSBvbiBub24tbW9tZW50IHRva2Vuc1xuXHRcdFx0XHR0eXBlOiAoKHR5cGUgPT09IFwiZXNjYXBlXCIgfHwgdHlwZSA9PT0gXCJnZW5lcmFsXCIpID8gbnVsbCA6IHR5cGUpXG5cblx0XHRcdFx0Ly8gY2FsY3VsYXRlIGJhc2UgdmFsdWUgZm9yIGFsbCBtb21lbnQgdG9rZW5zXG5cdFx0XHRcdC8vYmFzZVZhbHVlOiAoKHR5cGUgPT09IFwiZXNjYXBlXCIgfHwgdHlwZSA9PT0gXCJnZW5lcmFsXCIpID8gbnVsbCA6IHRoaXMuYXModHlwZSkpXG5cdFx0XHR9O1xuXHRcdH0sIHRoaXMpO1xuXG5cdFx0Ly8gdW5pcXVlIG1vbWVudCB0b2tlbiB0eXBlcyBpbiB0aGUgdGVtcGxhdGUgKGluIG9yZGVyIG9mIGRlc2NlbmRpbmcgbWFnbml0dWRlKVxuXHRcdG1vbWVudFR5cGVzID0gaW50ZXJzZWN0aW9uKHR5cGVzLCB1bmlxdWUoY29tcGFjdChwbHVjayh0b2tlbnMsIFwidHlwZVwiKSkpKTtcblxuXHRcdC8vIGV4aXQgZWFybHkgaWYgdGhlcmUgYXJlIG5vIG1vbWVudFR5cGVzXG5cdFx0aWYgKCFtb21lbnRUeXBlcy5sZW5ndGgpIHtcblx0XHRcdHJldHVybiBwbHVjayh0b2tlbnMsIFwidG9rZW5cIikuam9pbihcIlwiKTtcblx0XHR9XG5cblx0XHQvLyBjYWxjdWxhdGUgdmFsdWVzIGZvciBlYWNoIHRva2VuIHR5cGUgaW4gdGhlIHRlbXBsYXRlXG5cdFx0ZWFjaChtb21lbnRUeXBlcywgZnVuY3Rpb24gKG1vbWVudFR5cGUsIGluZGV4KSB7XG5cdFx0XHR2YXIgdmFsdWUsIHdob2xlVmFsdWUsIGRlY2ltYWxWYWx1ZSwgaXNMZWFzdCwgaXNNb3N0O1xuXG5cdFx0XHQvLyBjYWxjdWxhdGUgaW50ZWdlciBhbmQgZGVjaW1hbCB2YWx1ZSBwb3J0aW9uc1xuXHRcdFx0dmFsdWUgPSByZW1haW5kZXIuYXMobW9tZW50VHlwZSk7XG5cdFx0XHR3aG9sZVZhbHVlID0gKHZhbHVlID4gMCA/IE1hdGguZmxvb3IodmFsdWUpIDogTWF0aC5jZWlsKHZhbHVlKSk7XG5cdFx0XHRkZWNpbWFsVmFsdWUgPSB2YWx1ZSAtIHdob2xlVmFsdWU7XG5cblx0XHRcdC8vIGlzIHRoaXMgdGhlIGxlYXN0LXNpZ25pZmljYW50IG1vbWVudCB0b2tlbiBmb3VuZD9cblx0XHRcdGlzTGVhc3QgPSAoKGluZGV4ICsgMSkgPT09IG1vbWVudFR5cGVzLmxlbmd0aCk7XG5cblx0XHRcdC8vIGlzIHRoaXMgdGhlIG1vc3Qtc2lnbmlmaWNhbnQgbW9tZW50IHRva2VuIGZvdW5kP1xuXHRcdFx0aXNNb3N0ID0gKCFpbmRleCk7XG5cblx0XHRcdC8vIHVwZGF0ZSB0b2tlbnMgYXJyYXlcblx0XHRcdC8vIHVzaW5nIHRoaXMgYWxnb3JpdGhtIHRvIG5vdCBhc3N1bWUgYW55dGhpbmcgYWJvdXRcblx0XHRcdC8vIHRoZSBvcmRlciBvciBmcmVxdWVuY3kgb2YgYW55IHRva2Vuc1xuXHRcdFx0ZWFjaCh0b2tlbnMsIGZ1bmN0aW9uICh0b2tlbikge1xuXHRcdFx0XHRpZiAodG9rZW4udHlwZSA9PT0gbW9tZW50VHlwZSkge1xuXHRcdFx0XHRcdGV4dGVuZCh0b2tlbiwge1xuXHRcdFx0XHRcdFx0dmFsdWU6IHZhbHVlLFxuXHRcdFx0XHRcdFx0d2hvbGVWYWx1ZTogd2hvbGVWYWx1ZSxcblx0XHRcdFx0XHRcdGRlY2ltYWxWYWx1ZTogZGVjaW1hbFZhbHVlLFxuXHRcdFx0XHRcdFx0aXNMZWFzdDogaXNMZWFzdCxcblx0XHRcdFx0XHRcdGlzTW9zdDogaXNNb3N0XG5cdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHRpZiAoaXNNb3N0KSB7XG5cdFx0XHRcdFx0XHQvLyBub3RlIHRoZSBsZW5ndGggb2YgdGhlIG1vc3Qtc2lnbmlmaWNhbnQgbW9tZW50IHRva2VuOlxuXHRcdFx0XHRcdFx0Ly8gaWYgaXQgaXMgZ3JlYXRlciB0aGFuIG9uZSBhbmQgZm9yY2VMZW5ndGggaXMgbm90IHNldCwgZGVmYXVsdCBmb3JjZUxlbmd0aCB0byBgdHJ1ZWBcblx0XHRcdFx0XHRcdGlmIChzZXR0aW5ncy5mb3JjZUxlbmd0aCA9PSBudWxsICYmIHRva2VuLmxlbmd0aCA+IDEpIHtcblx0XHRcdFx0XHRcdFx0c2V0dGluZ3MuZm9yY2VMZW5ndGggPSB0cnVlO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQvLyByYXRpb25hbGUgaXMgdGhpczpcblx0XHRcdFx0XHRcdC8vIGlmIHRoZSB0ZW1wbGF0ZSBpcyBcImg6bW06c3NcIiBhbmQgdGhlIG1vbWVudCB2YWx1ZSBpcyA1IG1pbnV0ZXMsIHRoZSB1c2VyLWZyaWVuZGx5IG91dHB1dCBpcyBcIjU6MDBcIiwgbm90IFwiMDU6MDBcIlxuXHRcdFx0XHRcdFx0Ly8gc2hvdWxkbid0IHBhZCB0aGUgYG1pbnV0ZXNgIHRva2VuIGV2ZW4gdGhvdWdoIGl0IGhhcyBsZW5ndGggb2YgdHdvXG5cdFx0XHRcdFx0XHQvLyBpZiB0aGUgdGVtcGxhdGUgaXMgXCJoaDptbTpzc1wiLCB0aGUgdXNlciBjbGVhcmx5IHdhbnRlZCBldmVyeXRoaW5nIHBhZGRlZCBzbyB3ZSBzaG91bGQgb3V0cHV0IFwiMDU6MDBcIlxuXHRcdFx0XHRcdFx0Ly8gaWYgdGhlIHVzZXIgd2FudGVkIHRoZSBmdWxsIHBhZGRlZCBvdXRwdXQsIHRoZXkgY2FuIHNldCBgeyB0cmltOiBmYWxzZSB9YCB0byBnZXQgXCIwMDowNTowMFwiXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0Ly8gdXBkYXRlIHJlbWFpbmRlclxuXHRcdFx0cmVtYWluZGVyLnN1YnRyYWN0KHdob2xlVmFsdWUsIG1vbWVudFR5cGUpO1xuXHRcdH0pO1xuXHRcblx0XHQvLyB0cmltIHRva2VucyBhcnJheVxuXHRcdGlmIChzZXR0aW5ncy50cmltKSB7XG5cdFx0XHR0b2tlbnMgPSAoc2V0dGluZ3MudHJpbSA9PT0gXCJsZWZ0XCIgPyByZXN0IDogaW5pdGlhbCkodG9rZW5zLCBmdW5jdGlvbiAodG9rZW4pIHtcblx0XHRcdFx0Ly8gcmV0dXJuIGB0cnVlYCBpZjpcblx0XHRcdFx0Ly8gdGhlIHRva2VuIGlzIG5vdCB0aGUgbGVhc3QgbW9tZW50IHRva2VuIChkb24ndCB0cmltIHRoZSBsZWFzdCBtb21lbnQgdG9rZW4pXG5cdFx0XHRcdC8vIHRoZSB0b2tlbiBpcyBhIG1vbWVudCB0b2tlbiB0aGF0IGRvZXMgbm90IGhhdmUgYSB2YWx1ZSAoZG9uJ3QgdHJpbSBtb21lbnQgdG9rZW5zIHRoYXQgaGF2ZSBhIHdob2xlIHZhbHVlKVxuXHRcdFx0XHRyZXR1cm4gISh0b2tlbi5pc0xlYXN0IHx8ICh0b2tlbi50eXBlICE9IG51bGwgJiYgdG9rZW4ud2hvbGVWYWx1ZSkpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdFxuXHRcdFxuXHRcdC8vIGJ1aWxkIG91dHB1dFxuXG5cdFx0Ly8gdGhlIGZpcnN0IG1vbWVudCB0b2tlbiBjYW4gaGF2ZSBzcGVjaWFsIGhhbmRsaW5nXG5cdFx0Zm91bmRGaXJzdCA9IGZhbHNlO1xuXG5cdFx0Ly8gcnVuIHRoZSBtYXAgaW4gcmV2ZXJzZSBvcmRlciBpZiB0cmltbWluZyBmcm9tIHRoZSByaWdodFxuXHRcdGlmIChzZXR0aW5ncy50cmltID09PSBcInJpZ2h0XCIpIHtcblx0XHRcdHRva2Vucy5yZXZlcnNlKCk7XG5cdFx0fVxuXG5cdFx0dG9rZW5zID0gbWFwKHRva2VucywgZnVuY3Rpb24gKHRva2VuKSB7XG5cdFx0XHR2YXIgdmFsLFxuXHRcdFx0XHRkZWNWYWw7XG5cblx0XHRcdGlmICghdG9rZW4udHlwZSkge1xuXHRcdFx0XHQvLyBpZiBpdCBpcyBub3QgYSBtb21lbnQgdG9rZW4sIHVzZSB0aGUgdG9rZW4gYXMgaXRzIG93biB2YWx1ZVxuXHRcdFx0XHRyZXR1cm4gdG9rZW4udG9rZW47XG5cdFx0XHR9XG5cblx0XHRcdC8vIGFwcGx5IG5lZ2F0aXZlIHByZWNpc2lvbiBmb3JtYXR0aW5nIHRvIHRoZSBsZWFzdC1zaWduaWZpY2FudCBtb21lbnQgdG9rZW5cblx0XHRcdGlmICh0b2tlbi5pc0xlYXN0ICYmIChzZXR0aW5ncy5wcmVjaXNpb24gPCAwKSkge1xuXHRcdFx0XHR2YWwgPSAoTWF0aC5mbG9vcih0b2tlbi53aG9sZVZhbHVlICogTWF0aC5wb3coMTAsIHNldHRpbmdzLnByZWNpc2lvbikpICogTWF0aC5wb3coMTAsIC1zZXR0aW5ncy5wcmVjaXNpb24pKS50b1N0cmluZygpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFsID0gdG9rZW4ud2hvbGVWYWx1ZS50b1N0cmluZygpO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHQvLyByZW1vdmUgbmVnYXRpdmUgc2lnbiBmcm9tIHRoZSBiZWdpbm5pbmdcblx0XHRcdHZhbCA9IHZhbC5yZXBsYWNlKC9eXFwtLywgXCJcIik7XG5cblx0XHRcdC8vIGFwcGx5IHRva2VuIGxlbmd0aCBmb3JtYXR0aW5nXG5cdFx0XHQvLyBzcGVjaWFsIGhhbmRsaW5nIGZvciB0aGUgZmlyc3QgbW9tZW50IHRva2VuIHRoYXQgaXMgbm90IHRoZSBtb3N0IHNpZ25pZmljYW50IGluIGEgdHJpbW1lZCB0ZW1wbGF0ZVxuXHRcdFx0aWYgKHRva2VuLmxlbmd0aCA+IDEgJiYgKGZvdW5kRmlyc3QgfHwgdG9rZW4uaXNNb3N0IHx8IHNldHRpbmdzLmZvcmNlTGVuZ3RoKSkge1xuXHRcdFx0XHR2YWwgPSBwYWRaZXJvKHZhbCwgdG9rZW4ubGVuZ3RoKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gYWRkIGRlY2ltYWwgdmFsdWUgaWYgcHJlY2lzaW9uID4gMFxuXHRcdFx0aWYgKHRva2VuLmlzTGVhc3QgJiYgKHNldHRpbmdzLnByZWNpc2lvbiA+IDApKSB7XG5cdFx0XHRcdGRlY1ZhbCA9IHRva2VuLmRlY2ltYWxWYWx1ZS50b1N0cmluZygpLnJlcGxhY2UoL15cXC0vLCBcIlwiKS5zcGxpdCgvXFwufGVcXC0vKTtcblx0XHRcdFx0c3dpdGNoIChkZWNWYWwubGVuZ3RoKSB7XG5cdFx0XHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRcdFx0dmFsICs9IFwiLlwiICsgcGFkWmVybyhkZWNWYWxbMF0sIHNldHRpbmdzLnByZWNpc2lvbiwgdHJ1ZSkuc2xpY2UoMCwgc2V0dGluZ3MucHJlY2lzaW9uKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0Y2FzZSAyOlxuXHRcdFx0XHRcdFx0dmFsICs9IFwiLlwiICsgcGFkWmVybyhkZWNWYWxbMV0sIHNldHRpbmdzLnByZWNpc2lvbiwgdHJ1ZSkuc2xpY2UoMCwgc2V0dGluZ3MucHJlY2lzaW9uKTtcdFx0XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdGNhc2UgMzpcblx0XHRcdFx0XHRcdHZhbCArPSBcIi5cIiArIHBhZFplcm8ocmVwZWF0WmVybygoK2RlY1ZhbFsyXSkgLSAxKSArIChkZWNWYWxbMF0gfHwgXCIwXCIpICsgZGVjVmFsWzFdLCBzZXR0aW5ncy5wcmVjaXNpb24sIHRydWUpLnNsaWNlKDAsIHNldHRpbmdzLnByZWNpc2lvbik7XHRcdFxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdHRocm93IFwiTW9tZW50IER1cmF0aW9uIEZvcm1hdDogdW5hYmxlIHRvIHBhcnNlIHRva2VuIGRlY2ltYWwgdmFsdWUuXCI7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0Ly8gYWRkIGEgbmVnYXRpdmUgc2lnbiBpZiB0aGUgdmFsdWUgaXMgbmVnYXRpdmUgYW5kIHRva2VuIGlzIG1vc3Qgc2lnbmlmaWNhbnRcblx0XHRcdGlmICh0b2tlbi5pc01vc3QgJiYgdG9rZW4udmFsdWUgPCAwKSB7XG5cdFx0XHRcdHZhbCA9IFwiLVwiICsgdmFsO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3VuZEZpcnN0ID0gdHJ1ZTtcblxuXHRcdFx0cmV0dXJuIHZhbDtcblx0XHR9KTtcblxuXHRcdC8vIHVuZG8gdGhlIHJldmVyc2UgaWYgdHJpbW1pbmcgZnJvbSB0aGUgcmlnaHRcblx0XHRpZiAoc2V0dGluZ3MudHJpbSA9PT0gXCJyaWdodFwiKSB7XG5cdFx0XHR0b2tlbnMucmV2ZXJzZSgpO1xuXHRcdH1cblxuXHRcdHJldHVybiB0b2tlbnMuam9pbihcIlwiKTtcblx0fTtcblxuXHRtb21lbnQuZHVyYXRpb24uZm4uZm9ybWF0LmRlZmF1bHRzID0ge1xuXHRcdC8vIHRva2VuIGRlZmluaXRpb25zXG5cdFx0ZXNjYXBlOiAvXFxbKC4rPylcXF0vLFxuXHRcdHllYXJzOiAvW1l5XSsvLFxuXHRcdG1vbnRoczogL00rLyxcblx0XHR3ZWVrczogL1tXd10rLyxcblx0XHRkYXlzOiAvW0RkXSsvLFxuXHRcdGhvdXJzOiAvW0hoXSsvLFxuXHRcdG1pbnV0ZXM6IC9tKy8sXG5cdFx0c2Vjb25kczogL3MrLyxcblx0XHRtaWxsaXNlY29uZHM6IC9TKy8sXG5cdFx0Z2VuZXJhbDogLy4rPy8sXG5cblx0XHQvLyB0b2tlbiB0eXBlIG5hbWVzXG5cdFx0Ly8gaW4gb3JkZXIgb2YgZGVzY2VuZGluZyBtYWduaXR1ZGVcblx0XHQvLyBjYW4gYmUgYSBzcGFjZS1zZXBhcmF0ZWQgdG9rZW4gbmFtZSBsaXN0IG9yIGFuIGFycmF5IG9mIHRva2VuIG5hbWVzXG5cdFx0dHlwZXM6IFwiZXNjYXBlIHllYXJzIG1vbnRocyB3ZWVrcyBkYXlzIGhvdXJzIG1pbnV0ZXMgc2Vjb25kcyBtaWxsaXNlY29uZHMgZ2VuZXJhbFwiLFxuXG5cdFx0Ly8gZm9ybWF0IG9wdGlvbnNcblxuXHRcdC8vIHRyaW1cblx0XHQvLyBcImxlZnRcIiAtIHRlbXBsYXRlIHRva2VucyBhcmUgdHJpbW1lZCBmcm9tIHRoZSBsZWZ0IHVudGlsIHRoZSBmaXJzdCBtb21lbnQgdG9rZW4gdGhhdCBoYXMgYSB2YWx1ZSA+PSAxXG5cdFx0Ly8gXCJyaWdodFwiIC0gdGVtcGxhdGUgdG9rZW5zIGFyZSB0cmltbWVkIGZyb20gdGhlIHJpZ2h0IHVudGlsIHRoZSBmaXJzdCBtb21lbnQgdG9rZW4gdGhhdCBoYXMgYSB2YWx1ZSA+PSAxXG5cdFx0Ly8gKHRoZSBmaW5hbCBtb21lbnQgdG9rZW4gaXMgbm90IHRyaW1tZWQsIHJlZ2FyZGxlc3Mgb2YgdmFsdWUpXG5cdFx0Ly8gYGZhbHNlYCAtIHRlbXBsYXRlIHRva2VucyBhcmUgbm90IHRyaW1tZWRcblx0XHR0cmltOiBcImxlZnRcIixcblxuXHRcdC8vIHByZWNpc2lvblxuXHRcdC8vIG51bWJlciBvZiBkZWNpbWFsIGRpZ2l0cyB0byBpbmNsdWRlIGFmdGVyICh0byB0aGUgcmlnaHQgb2YpIHRoZSBkZWNpbWFsIHBvaW50IChwb3NpdGl2ZSBpbnRlZ2VyKVxuXHRcdC8vIG9yIHRoZSBudW1iZXIgb2YgZGlnaXRzIHRvIHRydW5jYXRlIHRvIDAgYmVmb3JlICh0byB0aGUgbGVmdCBvZikgdGhlIGRlY2ltYWwgcG9pbnQgKG5lZ2F0aXZlIGludGVnZXIpXG5cdFx0cHJlY2lzaW9uOiAwLFxuXG5cdFx0Ly8gZm9yY2UgZmlyc3QgbW9tZW50IHRva2VuIHdpdGggYSB2YWx1ZSB0byByZW5kZXIgYXQgZnVsbCBsZW5ndGggZXZlbiB3aGVuIHRlbXBsYXRlIGlzIHRyaW1tZWQgYW5kIGZpcnN0IG1vbWVudCB0b2tlbiBoYXMgbGVuZ3RoIG9mIDFcblx0XHRmb3JjZUxlbmd0aDogbnVsbCxcblxuXHRcdC8vIHRlbXBsYXRlIHVzZWQgdG8gZm9ybWF0IGR1cmF0aW9uXG5cdFx0Ly8gbWF5IGJlIGEgZnVuY3Rpb24gb3IgYSBzdHJpbmdcblx0XHQvLyB0ZW1wbGF0ZSBmdW5jdGlvbnMgYXJlIGV4ZWN1dGVkIHdpdGggdGhlIGB0aGlzYCBiaW5kaW5nIG9mIHRoZSBzZXR0aW5ncyBvYmplY3Rcblx0XHQvLyBzbyB0aGF0IHRlbXBsYXRlIHN0cmluZ3MgbWF5IGJlIGR5bmFtaWNhbGx5IGdlbmVyYXRlZCBiYXNlZCBvbiB0aGUgZHVyYXRpb24gb2JqZWN0XG5cdFx0Ly8gKGFjY2Vzc2libGUgdmlhIGB0aGlzLmR1cmF0aW9uYClcblx0XHQvLyBvciBhbnkgb2YgdGhlIG90aGVyIHNldHRpbmdzXG5cdFx0dGVtcGxhdGU6IGZ1bmN0aW9uICgpIHtcblx0XHRcdHZhciB0eXBlcyA9IHRoaXMudHlwZXMsXG5cdFx0XHRcdGR1ciA9IHRoaXMuZHVyYXRpb24sXG5cdFx0XHRcdGxhc3RUeXBlID0gZmluZExhc3QodHlwZXMsIGZ1bmN0aW9uICh0eXBlKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGR1ci5fZGF0YVt0eXBlXTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdC8vIGRlZmF1bHQgdGVtcGxhdGUgc3RyaW5ncyBmb3IgZWFjaCBkdXJhdGlvbiBkaW1lbnNpb24gdHlwZVxuXHRcdFx0c3dpdGNoIChsYXN0VHlwZSkge1xuXHRcdFx0XHRjYXNlIFwic2Vjb25kc1wiOlxuXHRcdFx0XHRcdHJldHVybiBcImg6bW06c3NcIjtcblx0XHRcdFx0Y2FzZSBcIm1pbnV0ZXNcIjpcblx0XHRcdFx0XHRyZXR1cm4gXCJkW2RdIGg6bW1cIjtcblx0XHRcdFx0Y2FzZSBcImhvdXJzXCI6XG5cdFx0XHRcdFx0cmV0dXJuIFwiZFtkXSBoW2hdXCI7XG5cdFx0XHRcdGNhc2UgXCJkYXlzXCI6XG5cdFx0XHRcdFx0cmV0dXJuIFwiTVttXSBkW2RdXCI7XG5cdFx0XHRcdGNhc2UgXCJ3ZWVrc1wiOlxuXHRcdFx0XHRcdHJldHVybiBcInlbeV0gd1t3XVwiO1xuXHRcdFx0XHRjYXNlIFwibW9udGhzXCI6XG5cdFx0XHRcdFx0cmV0dXJuIFwieVt5XSBNW21dXCI7XG5cdFx0XHRcdGNhc2UgXCJ5ZWFyc1wiOlxuXHRcdFx0XHRcdHJldHVybiBcInlbeV1cIjtcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRyZXR1cm4gXCJ5W3ldIE1bbV0gZFtkXSBoOm1tOnNzXCI7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXG59KSh0aGlzKTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L21vbWVudC1kdXJhdGlvbi1mb3JtYXQvbGliL21vbWVudC1kdXJhdGlvbi1mb3JtYXQuanNcbiAqKiBtb2R1bGUgaWQgPSA3MDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMlxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=