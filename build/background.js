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
	          sendResponse({ seconds: _this.getDuration() });
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
	        _this2.saveRecords().then(function () {
	          return _blockList2.default.initNewDate();
	        });
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
	      var _this3 = this;
	
	      return _blockList2.default.reconcileRecords(this.currentSite, this.getDuration(), 1).then(function () {
	        _this3.startTime = (0, _moment2.default)();
	      });
	    }
	  }]);
	  return Timer;
	}();
	
	exports.default = new Timer();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGltZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9tb21lbnQtZHVyYXRpb24tZm9ybWF0L2xpYi9tb21lbnQtZHVyYXRpb24tZm9ybWF0LmpzIl0sIm5hbWVzIjpbImluaXQiLCJ0aGVuIiwiQkxPQ0tFRF9QQUdFIiwibG9hZEZpbHRlcmVkUGFnZSIsInRhYklkIiwidXJsIiwic2V0VGltZW91dCIsImNocm9tZSIsInRhYnMiLCJ1cGRhdGUiLCJoYW5kbGVBY3Rpb24iLCJhY3Rpb24iLCJkZXRhaWxzIiwibWF0Y2hQYXR0ZXJucyIsImdldFJlZ2V4UGF0dGVybnMiLCJwYXR0ZXJucyIsInVuZGVmaW5lZCIsIml0ZW1zIiwibGVuZ3RoIiwiZmluZCIsInJlZyIsIlJlZ0V4cCIsInJlZ2V4IiwidGVzdCIsInVybENoZWNrIiwicHJvdG9jb2wiLCJzaXRlIiwiZ2V0UmVjb3JkIiwiYWNsTWF0Y2giLCJyZWNvcmQiLCJhZHZBY3Rpb24iLCJwYXR0ZXJuTWF0Y2giLCJjYXRjaCIsIndlYlJlcXVlc3QiLCJvbkJlZm9yZVJlcXVlc3QiLCJhZGRMaXN0ZW5lciIsInVybHMiLCJ0eXBlcyIsIlRpbWVyIiwiY3VycmVudFNpdGUiLCJjdXJyZW50VGFiIiwicG9wdXAiLCJzdGFydFRpbWUiLCJuZXdEYXlUaW1lciIsInNldE5ld0RheVRpbWVyIiwid2luZG93cyIsImdldEFsbCIsInBvcHVsYXRlIiwiZm9yRWFjaCIsIndpbiIsInRhYiIsImlzVmFsaWRQcm90b2NvbCIsImV4ZWN1dGVTY3JpcHQiLCJpZCIsImZpbGUiLCJydW50aW1lIiwib25NZXNzYWdlIiwicmVxdWVzdCIsInNlbmRlciIsInNlbmRSZXNwb25zZSIsImZvY3VzIiwic2VuZGVyU2l0ZSIsInNhdmVSZWNvcmRzIiwidGltZXIiLCJzZWNvbmRzIiwiZ2V0RHVyYXRpb24iLCJvblVwZGF0ZWQiLCJjaGFuZ2VJbmZvIiwidGFiU2l0ZSIsImNvbnNvbGUiLCJsb2ciLCJ2YWxpZFVybCIsInRvbW9ycm93IiwiYWRkIiwic3RhcnRPZiIsImluaXROZXdEYXRlIiwiZGlmZiIsImR1cmF0aW9uIiwiYXNTZWNvbmRzIiwicmVjb25jaWxlUmVjb3JkcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEscUJBQUdBLElBQUgsR0FBVUMsSUFBVixDQUFlLFlBQU07QUFDbkIsbUJBQU1ELElBQU47QUFDRCxFQUZEOztBQUlBLEtBQU1FLGVBQWUsbUNBQXJCOztBQUVBLFVBQVNDLGdCQUFULENBQTBCQyxLQUExQixFQUFpQ0MsR0FBakMsRUFBc0M7QUFDcENDLGNBQVcsWUFBTTtBQUNmQyxZQUFPQyxJQUFQLENBQVlDLE1BQVosQ0FBbUJMLEtBQW5CLEVBQTBCLEVBQUVDLFFBQUYsRUFBMUI7QUFDRCxJQUZELEVBRUcsR0FGSDtBQUdEO0FBQ0QsVUFBU0ssWUFBVCxDQUFzQkMsTUFBdEIsRUFBOEJDLE9BQTlCLEVBQXVDO0FBQ3JDLE9BQUlELFdBQVcsT0FBZixFQUF3QjtBQUN0QlIsc0JBQWlCUyxRQUFRUixLQUF6QixFQUFnQ0YsWUFBaEM7QUFDRCxJQUZELE1BRU8sSUFBSVMsV0FBVyxPQUFmLEVBQXdCO0FBQzdCUixzQkFBaUJTLFFBQVFSLEtBQXpCLEVBQWdDRixZQUFoQztBQUNEO0FBQ0Y7QUFDRCxVQUFTVyxhQUFULENBQXVCRCxPQUF2QixFQUFnQztBQUM5QixVQUFPLG9CQUFHRSxnQkFBSCxHQUNKYixJQURJLENBQ0Msb0JBQVk7QUFDaEIsU0FBSWMsYUFBYUMsU0FBYixJQUEwQkQsU0FBU0UsS0FBVCxDQUFlQyxNQUFmLEdBQXdCLENBQXRELEVBQXlEO0FBQ3ZELGNBQU9ILFNBQVNFLEtBQVQsQ0FBZUUsSUFBZixDQUFvQixrQkFBVTtBQUNuQyxhQUFNQyxNQUFNLElBQUlDLE1BQUosQ0FBV1YsT0FBT1csS0FBbEIsRUFBeUIsR0FBekIsQ0FBWjtBQUNBLGdCQUFPRixJQUFJRyxJ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QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhGO0FBQ0E7O0FBRUE7QUFDQSxrSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRUFBQyIsImZpbGUiOiJiYWNrZ3JvdW5kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHd1cmwgZnJvbSAnd3VybCc7XG5pbXBvcnQgQkwgZnJvbSAnLi9ibG9ja0xpc3QuanMnO1xuaW1wb3J0IFRpbWVyIGZyb20gJy4vdGltZXIuanMnO1xuXG5CTC5pbml0KCkudGhlbigoKSA9PiB7XG4gIFRpbWVyLmluaXQoKTtcbn0pO1xuXG5jb25zdCBCTE9DS0VEX1BBR0UgPSAnaHR0cHM6Ly93d3cuZ2l0aHViLmNvbS93cmxlc2tvdmVjJztcblxuZnVuY3Rpb24gbG9hZEZpbHRlcmVkUGFnZSh0YWJJZCwgdXJsKSB7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGNocm9tZS50YWJzLnVwZGF0ZSh0YWJJZCwgeyB1cmwgfSk7XG4gIH0sIDUwMCk7XG59XG5mdW5jdGlvbiBoYW5kbGVBY3Rpb24oYWN0aW9uLCBkZXRhaWxzKSB7XG4gIGlmIChhY3Rpb24gPT09ICdibG9jaycpIHtcbiAgICBsb2FkRmlsdGVyZWRQYWdlKGRldGFpbHMudGFiSWQsIEJMT0NLRURfUEFHRSk7XG4gIH0gZWxzZSBpZiAoYWN0aW9uID09PSAnbGltaXQnKSB7XG4gICAgbG9hZEZpbHRlcmVkUGFnZShkZXRhaWxzLnRhYklkLCBCTE9DS0VEX1BBR0UpO1xuICB9XG59XG5mdW5jdGlvbiBtYXRjaFBhdHRlcm5zKGRldGFpbHMpIHtcbiAgcmV0dXJuIEJMLmdldFJlZ2V4UGF0dGVybnMoKVxuICAgIC50aGVuKHBhdHRlcm5zID0+IHtcbiAgICAgIGlmIChwYXR0ZXJucyAhPT0gdW5kZWZpbmVkICYmIHBhdHRlcm5zLml0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuIHBhdHRlcm5zLml0ZW1zLmZpbmQoYWN0aW9uID0+IHtcbiAgICAgICAgICBjb25zdCByZWcgPSBuZXcgUmVnRXhwKGFjdGlvbi5yZWdleCwgJ2knKTtcbiAgICAgICAgICByZXR1cm4gcmVnLnRlc3QoZGV0YWlscy51cmwpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHVybENoZWNrKGRldGFpbHMpIHtcbiAgY29uc3QgcHJvdG9jb2wgPSB3dXJsKCdwcm90b2NvbCcsIGRldGFpbHMudXJsKTtcbiAgaWYgKHByb3RvY29sICE9PSAnY2hyb21lJyAmJiBwcm90b2NvbCAhPT0gJ2Nocm9tZS1leHRlbnNpb24nKSB7XG4gICAgY29uc3Qgc2l0ZSA9IHd1cmwoJ2RvbWFpbicsIGRldGFpbHMudXJsKTtcbiAgICBCTC5nZXRSZWNvcmQoc2l0ZSlcbiAgICAgIC50aGVuKHJlY29yZCA9PiB7XG4gICAgICAgIGNvbnN0IGFjbE1hdGNoID0gcmVjb3JkLmFkdkFjdGlvbi5maW5kKGFjdGlvbiA9PiB7XG4gICAgICAgICAgY29uc3QgcmVnID0gbmV3IFJlZ0V4cChhY3Rpb24ucmVnZXgsICdpJyk7XG4gICAgICAgICAgcmV0dXJuIHJlZy50ZXN0KGRldGFpbHMudXJsKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChhY2xNYXRjaCkge1xuICAgICAgICAgIGhhbmRsZUFjdGlvbihhY2xNYXRjaC5hY3Rpb24sIGRldGFpbHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1hdGNoUGF0dGVybnMoZGV0YWlscylcbiAgICAgICAgICAgIC50aGVuKHBhdHRlcm5NYXRjaCA9PiB7XG4gICAgICAgICAgICAgIGlmIChwYXR0ZXJuTWF0Y2gpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVBY3Rpb24ocGF0dGVybk1hdGNoLmFjdGlvbiwgZGV0YWlscyk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlQWN0aW9uKHJlY29yZC5hY3Rpb24sIGRldGFpbHMpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgIG1hdGNoUGF0dGVybnMoZGV0YWlscylcbiAgICAgICAgICAudGhlbihwYXR0ZXJuTWF0Y2ggPT4ge1xuICAgICAgICAgICAgaWYgKHBhdHRlcm5NYXRjaCkgaGFuZGxlQWN0aW9uKHBhdHRlcm5NYXRjaC5hY3Rpb24sIGRldGFpbHMpO1xuICAgICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH1cbiAgcmV0dXJuIHt9O1xufVxuXG5jaHJvbWUud2ViUmVxdWVzdC5vbkJlZm9yZVJlcXVlc3QuYWRkTGlzdGVuZXIodXJsQ2hlY2ssIHtcbiAgdXJsczogWyc8YWxsX3VybHM+J10sXG4gIHR5cGVzOiBbJ21haW5fZnJhbWUnXVxufSk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9iYWNrZ3JvdW5kLmpzXG4gKiovIiwiaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0ICdtb21lbnQtZHVyYXRpb24tZm9ybWF0JztcbmltcG9ydCBCTCBmcm9tICcuL2Jsb2NrTGlzdC5qcyc7XG5pbXBvcnQgd3VybCBmcm9tICd3dXJsJztcblxuY2xhc3MgVGltZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmN1cnJlbnRTaXRlID0gbnVsbDtcbiAgICB0aGlzLmN1cnJlbnRUYWIgPSBudWxsO1xuICAgIHRoaXMucG9wdXAgPSBmYWxzZTtcbiAgICB0aGlzLnN0YXJ0VGltZSA9IG51bGw7XG4gICAgdGhpcy5uZXdEYXlUaW1lciA9IHRoaXMuc2V0TmV3RGF5VGltZXIoKTtcbiAgfVxuICBpbml0KCkge1xuICAgIGNocm9tZS53aW5kb3dzLmdldEFsbCh7IHBvcHVsYXRlOiB0cnVlIH0sICh3aW5kb3dzKSA9PiB7XG4gICAgICB3aW5kb3dzLmZvckVhY2goKHdpbikgPT4ge1xuICAgICAgICB3aW4udGFicy5mb3JFYWNoKCh0YWIpID0+IHtcbiAgICAgICAgICBpZiAodGhpcy5pc1ZhbGlkUHJvdG9jb2wodGFiLnVybCkpIHtcbiAgICAgICAgICAgIGNocm9tZS50YWJzLmV4ZWN1dGVTY3JpcHQodGFiLmlkLCB7IGZpbGU6ICdjb250ZW50LmpzJyB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKChyZXF1ZXN0LCBzZW5kZXIsIHNlbmRSZXNwb25zZSkgPT4ge1xuICAgICAgaWYgKHJlcXVlc3QuZm9jdXMpIHtcbiAgICAgICAgY29uc3Qgc2VuZGVyU2l0ZSA9IHd1cmwoJ2RvbWFpbicsIHNlbmRlci50YWIudXJsKTtcbiAgICAgICAgaWYgKHJlcXVlc3QuZm9jdXMgPT09ICdmb2N1cycgJiYgc2VuZGVyU2l0ZSAhPT0gdGhpcy5jdXJyZW50U2l0ZSAmJiBzZW5kZXJTaXRlXG4gICAgICAgICAmJiBzZW5kZXIudGFiLmlkICE9PSB0aGlzLmN1cnJlbnRUYWIgJiYgdGhpcy5pc1ZhbGlkUHJvdG9jb2woc2VuZGVyU2l0ZSkpIHtcbiAgICAgICAgICB0aGlzLnBvcHVwID0gZmFsc2U7XG4gICAgICAgICAgaWYgKHRoaXMuY3VycmVudFNpdGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuc2F2ZVJlY29yZHMoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5jdXJyZW50VGFiID0gc2VuZGVyLnRhYi5pZDtcbiAgICAgICAgICB0aGlzLmN1cnJlbnRTaXRlID0gc2VuZGVyU2l0ZTtcbiAgICAgICAgICB0aGlzLnN0YXJ0VGltZSA9IG1vbWVudCgpO1xuICAgICAgICB9IGVsc2UgaWYgKHJlcXVlc3QuZm9jdXMgPT09ICdibHVyJykge1xuICAgICAgICAgIGlmIChzZW5kZXIudGFiLmlkID09PSB0aGlzLmN1cnJlbnRUYWIgJiYgc2VuZGVyU2l0ZSAmJiAhdGhpcy5wb3B1cCkge1xuICAgICAgICAgICAgdGhpcy5zYXZlUmVjb3JkcygpO1xuICAgICAgICAgICAgdGhpcy5zdGFydFRpbWUgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50U2l0ZSA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRUYWIgPSBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHJlcXVlc3QudGltZXIgPT09ICdwb3B1cCcpIHtcbiAgICAgICAgdGhpcy5wb3B1cCA9IHRydWU7XG4gICAgICAgIHNlbmRSZXNwb25zZSh7IHNlY29uZHM6IHRoaXMuZ2V0RHVyYXRpb24oKSB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBjaHJvbWUudGFicy5vblVwZGF0ZWQuYWRkTGlzdGVuZXIoKHRhYklkLCBjaGFuZ2VJbmZvLCB0YWIpID0+IHtcbiAgICAgIGNvbnN0IHRhYlNpdGUgPSB3dXJsKCdkb21haW4nLCB0YWIudXJsKTtcbiAgICAgIGNvbnNvbGUubG9nKGBjdXJyZW50U2l0ZTogJHt0aGlzLmN1cnJlbnRTaXRlfSwgdGFiOiAke3RhYlNpdGV9YCk7XG4gICAgICBjb25zdCB2YWxpZFVybCA9IHRhYlNpdGUgIT09IHRoaXMuY3VycmVudFNpdGUgJiYgdGhpcy5pc1ZhbGlkUHJvdG9jb2wodGFiLnVybCk7XG4gICAgICBpZiAodmFsaWRVcmwpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50U2l0ZSA9IHRhYlNpdGU7XG4gICAgICAgIHRoaXMuY3VycmVudFRhYiA9IHRhYi5pZDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBzZXROZXdEYXlUaW1lcigpIHtcbiAgICBjb25zdCB0b21vcnJvdyA9IG1vbWVudCgpLmFkZCgxLCAnZGF5cycpLnN0YXJ0T2YoJ2RheScpO1xuICAgIHJldHVybiBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuc2F2ZVJlY29yZHMoKVxuICAgICAgICAudGhlbigoKSA9PiBCTC5pbml0TmV3RGF0ZSgpKTtcbiAgICB9LCB0b21vcnJvdy5kaWZmKG1vbWVudCgpKSk7XG4gIH1cbiAgaXNWYWxpZFByb3RvY29sKHVybCkge1xuICAgIGNvbnN0IHByb3RvY29sID0gd3VybCgncHJvdG9jb2wnLCB1cmwpO1xuICAgIHJldHVybiAoXG4gICAgICBwcm90b2NvbCA9PT0gJ2h0dHAnIHx8IHByb3RvY29sID09PSAnaHR0cHMnIHx8IHByb3RvY29sID09PSAnZnRwJ1xuICAgICk7XG4gIH1cbiAgZ2V0RHVyYXRpb24oKSB7XG4gICAgcmV0dXJuIG1vbWVudC5kdXJhdGlvbihtb21lbnQoKS5kaWZmKHRoaXMuc3RhcnRUaW1lKSkuYXNTZWNvbmRzKCk7XG4gIH1cbiAgc2F2ZVJlY29yZHMoKSB7XG4gICAgcmV0dXJuIEJMLnJlY29uY2lsZVJlY29yZHModGhpcy5jdXJyZW50U2l0ZSwgdGhpcy5nZXREdXJhdGlvbigpLCAxKVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLnN0YXJ0VGltZSA9IG1vbWVudCgpO1xuICAgICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFRpbWVyKCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy90aW1lci5qc1xuICoqLyIsIi8qISBNb21lbnQgRHVyYXRpb24gRm9ybWF0IHYxLjMuMFxuICogIGh0dHBzOi8vZ2l0aHViLmNvbS9qc21yZWVzZS9tb21lbnQtZHVyYXRpb24tZm9ybWF0IFxuICogIERhdGU6IDIwMTQtMDctMTVcbiAqXG4gKiAgRHVyYXRpb24gZm9ybWF0IHBsdWdpbiBmdW5jdGlvbiBmb3IgdGhlIE1vbWVudC5qcyBsaWJyYXJ5XG4gKiAgaHR0cDovL21vbWVudGpzLmNvbS9cbiAqXG4gKiAgQ29weXJpZ2h0IDIwMTQgSm9obiBNYWRoYXZhbi1SZWVzZVxuICogIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuICovXG5cbihmdW5jdGlvbiAocm9vdCwgdW5kZWZpbmVkKSB7XG5cblx0Ly8gcmVwZWF0WmVybyhxdHkpXG5cdC8vIHJldHVybnMgXCIwXCIgcmVwZWF0ZWQgcXR5IHRpbWVzXG5cdGZ1bmN0aW9uIHJlcGVhdFplcm8ocXR5KSB7XG5cdFx0dmFyIHJlc3VsdCA9IFwiXCI7XG5cdFx0XG5cdFx0Ly8gZXhpdCBlYXJseVxuXHRcdC8vIGlmIHF0eSBpcyAwIG9yIGEgbmVnYXRpdmUgbnVtYmVyXG5cdFx0Ly8gb3IgZG9lc24ndCBjb2VyY2UgdG8gYW4gaW50ZWdlclxuXHRcdHF0eSA9IHBhcnNlSW50KHF0eSwgMTApO1xuXHRcdGlmICghcXR5IHx8IHF0eSA8IDEpIHsgcmV0dXJuIHJlc3VsdDsgfVxuXHRcdFxuXHRcdHdoaWxlIChxdHkpIHtcblx0XHRcdHJlc3VsdCArPSBcIjBcIjtcblx0XHRcdHF0eSAtPSAxO1xuXHRcdH1cblx0XHRcblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cdFxuXHQvLyBwYWRaZXJvKHN0ciwgbGVuIFssIGlzUmlnaHRdKVxuXHQvLyBwYWRzIGEgc3RyaW5nIHdpdGggemVyb3MgdXAgdG8gYSBzcGVjaWZpZWQgbGVuZ3RoXG5cdC8vIHdpbGwgbm90IHBhZCBhIHN0cmluZyBpZiBpdHMgbGVuZ3RoIGlzIGFyZWFkeVxuXHQvLyBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8gdGhlIHNwZWNpZmllZCBsZW5ndGhcblx0Ly8gZGVmYXVsdCBvdXRwdXQgcGFkcyB3aXRoIHplcm9zIG9uIHRoZSBsZWZ0XG5cdC8vIHNldCBpc1JpZ2h0IHRvIGB0cnVlYCB0byBwYWQgd2l0aCB6ZXJvcyBvbiB0aGUgcmlnaHRcblx0ZnVuY3Rpb24gcGFkWmVybyhzdHIsIGxlbiwgaXNSaWdodCkge1xuXHRcdGlmIChzdHIgPT0gbnVsbCkgeyBzdHIgPSBcIlwiOyB9XG5cdFx0c3RyID0gXCJcIiArIHN0cjtcblx0XHRcblx0XHRyZXR1cm4gKGlzUmlnaHQgPyBzdHIgOiBcIlwiKSArIHJlcGVhdFplcm8obGVuIC0gc3RyLmxlbmd0aCkgKyAoaXNSaWdodCA/IFwiXCIgOiBzdHIpO1xuXHR9XG5cdFxuXHQvLyBpc0FycmF5XG5cdGZ1bmN0aW9uIGlzQXJyYXkoYXJyYXkpIHtcblx0XHRyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFycmF5KSA9PT0gXCJbb2JqZWN0IEFycmF5XVwiO1xuXHR9XG5cdFxuXHQvLyBpc09iamVjdFxuXHRmdW5jdGlvbiBpc09iamVjdChvYmopIHtcblx0XHRyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikgPT09IFwiW29iamVjdCBPYmplY3RdXCI7XG5cdH1cblx0XG5cdC8vIGZpbmRMYXN0XG5cdGZ1bmN0aW9uIGZpbmRMYXN0KGFycmF5LCBjYWxsYmFjaykge1xuXHRcdHZhciBpbmRleCA9IGFycmF5Lmxlbmd0aDtcblxuXHRcdHdoaWxlIChpbmRleCAtPSAxKSB7XG5cdFx0XHRpZiAoY2FsbGJhY2soYXJyYXlbaW5kZXhdKSkgeyByZXR1cm4gYXJyYXlbaW5kZXhdOyB9XG5cdFx0fVxuXHR9XG5cblx0Ly8gZmluZFxuXHRmdW5jdGlvbiBmaW5kKGFycmF5LCBjYWxsYmFjaykge1xuXHRcdHZhciBpbmRleCA9IDAsXG5cdFx0XHRtYXggPSBhcnJheS5sZW5ndGgsXG5cdFx0XHRtYXRjaDtcblx0XHRcdFxuXHRcdGlmICh0eXBlb2YgY2FsbGJhY2sgIT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0bWF0Y2ggPSBjYWxsYmFjaztcblx0XHRcdGNhbGxiYWNrID0gZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdFx0cmV0dXJuIGl0ZW0gPT09IG1hdGNoO1xuXHRcdFx0fTtcblx0XHR9XG5cblx0XHR3aGlsZSAoaW5kZXggPCBtYXgpIHtcblx0XHRcdGlmIChjYWxsYmFjayhhcnJheVtpbmRleF0pKSB7IHJldHVybiBhcnJheVtpbmRleF07IH1cblx0XHRcdGluZGV4ICs9IDE7XG5cdFx0fVxuXHR9XG5cdFxuXHQvLyBlYWNoXG5cdGZ1bmN0aW9uIGVhY2goYXJyYXksIGNhbGxiYWNrKSB7XG5cdFx0dmFyIGluZGV4ID0gMCxcblx0XHRcdG1heCA9IGFycmF5Lmxlbmd0aDtcblx0XHRcdFxuXHRcdGlmICghYXJyYXkgfHwgIW1heCkgeyByZXR1cm47IH1cblxuXHRcdHdoaWxlIChpbmRleCA8IG1heCkge1xuXHRcdFx0aWYgKGNhbGxiYWNrKGFycmF5W2luZGV4XSwgaW5kZXgpID09PSBmYWxzZSkgeyByZXR1cm47IH1cblx0XHRcdGluZGV4ICs9IDE7XG5cdFx0fVxuXHR9XG5cdFxuXHQvLyBtYXBcblx0ZnVuY3Rpb24gbWFwKGFycmF5LCBjYWxsYmFjaykge1xuXHRcdHZhciBpbmRleCA9IDAsXG5cdFx0XHRtYXggPSBhcnJheS5sZW5ndGgsXG5cdFx0XHRyZXQgPSBbXTtcblxuXHRcdGlmICghYXJyYXkgfHwgIW1heCkgeyByZXR1cm4gcmV0OyB9XG5cdFx0XHRcdFxuXHRcdHdoaWxlIChpbmRleCA8IG1heCkge1xuXHRcdFx0cmV0W2luZGV4XSA9IGNhbGxiYWNrKGFycmF5W2luZGV4XSwgaW5kZXgpO1xuXHRcdFx0aW5kZXggKz0gMTtcblx0XHR9XG5cdFx0XG5cdFx0cmV0dXJuIHJldDtcblx0fVxuXHRcblx0Ly8gcGx1Y2tcblx0ZnVuY3Rpb24gcGx1Y2soYXJyYXksIHByb3ApIHtcblx0XHRyZXR1cm4gbWFwKGFycmF5LCBmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFx0cmV0dXJuIGl0ZW1bcHJvcF07XG5cdFx0fSk7XG5cdH1cblx0XG5cdC8vIGNvbXBhY3Rcblx0ZnVuY3Rpb24gY29tcGFjdChhcnJheSkge1xuXHRcdHZhciByZXQgPSBbXTtcblx0XHRcblx0XHRlYWNoKGFycmF5LCBmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFx0aWYgKGl0ZW0pIHsgcmV0LnB1c2goaXRlbSk7IH1cblx0XHR9KTtcblx0XHRcblx0XHRyZXR1cm4gcmV0O1xuXHR9XG5cdFxuXHQvLyB1bmlxdWVcblx0ZnVuY3Rpb24gdW5pcXVlKGFycmF5KSB7XG5cdFx0dmFyIHJldCA9IFtdO1xuXHRcdFxuXHRcdGVhY2goYXJyYXksIGZ1bmN0aW9uIChfYSkge1xuXHRcdFx0aWYgKCFmaW5kKHJldCwgX2EpKSB7IHJldC5wdXNoKF9hKTsgfVxuXHRcdH0pO1xuXHRcdFxuXHRcdHJldHVybiByZXQ7XG5cdH1cblx0XG5cdC8vIGludGVyc2VjdGlvblxuXHRmdW5jdGlvbiBpbnRlcnNlY3Rpb24oYSwgYikge1xuXHRcdHZhciByZXQgPSBbXTtcblx0XHRcblx0XHRlYWNoKGEsIGZ1bmN0aW9uIChfYSkge1xuXHRcdFx0ZWFjaChiLCBmdW5jdGlvbiAoX2IpIHtcblx0XHRcdFx0aWYgKF9hID09PSBfYikgeyByZXQucHVzaChfYSk7IH1cblx0XHRcdH0pO1xuXHRcdH0pO1xuXHRcdFxuXHRcdHJldHVybiB1bmlxdWUocmV0KTtcblx0fVxuXHRcblx0Ly8gcmVzdFxuXHRmdW5jdGlvbiByZXN0KGFycmF5LCBjYWxsYmFjaykge1xuXHRcdHZhciByZXQgPSBbXTtcblx0XHRcblx0XHRlYWNoKGFycmF5LCBmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcblx0XHRcdGlmICghY2FsbGJhY2soaXRlbSkpIHtcblx0XHRcdFx0cmV0ID0gYXJyYXkuc2xpY2UoaW5kZXgpO1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0XG5cdFx0cmV0dXJuIHJldDtcblx0fVxuXG5cdC8vIGluaXRpYWxcblx0ZnVuY3Rpb24gaW5pdGlhbChhcnJheSwgY2FsbGJhY2spIHtcblx0XHR2YXIgcmV2ZXJzZWQgPSBhcnJheS5zbGljZSgpLnJldmVyc2UoKTtcblx0XHRcblx0XHRyZXR1cm4gcmVzdChyZXZlcnNlZCwgY2FsbGJhY2spLnJldmVyc2UoKTtcblx0fVxuXHRcblx0Ly8gZXh0ZW5kXG5cdGZ1bmN0aW9uIGV4dGVuZChhLCBiKSB7XG5cdFx0Zm9yICh2YXIga2V5IGluIGIpIHtcblx0XHRcdGlmIChiLmhhc093blByb3BlcnR5KGtleSkpIHsgYVtrZXldID0gYltrZXldOyB9XG5cdFx0fVxuXHRcdFxuXHRcdHJldHVybiBhO1xuXHR9XG5cdFx0XHRcblx0Ly8gZGVmaW5lIGludGVybmFsIG1vbWVudCByZWZlcmVuY2Vcblx0dmFyIG1vbWVudDtcblxuXHRpZiAodHlwZW9mIHJlcXVpcmUgPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdHRyeSB7IG1vbWVudCA9IHJlcXVpcmUoJ21vbWVudCcpOyB9IFxuXHRcdGNhdGNoIChlKSB7fVxuXHR9IFxuXHRcblx0aWYgKCFtb21lbnQgJiYgcm9vdC5tb21lbnQpIHtcblx0XHRtb21lbnQgPSByb290Lm1vbWVudDtcblx0fVxuXHRcblx0aWYgKCFtb21lbnQpIHtcblx0XHR0aHJvdyBcIk1vbWVudCBEdXJhdGlvbiBGb3JtYXQgY2Fubm90IGZpbmQgTW9tZW50LmpzXCI7XG5cdH1cblx0XG5cdC8vIG1vbWVudC5kdXJhdGlvbi5mb3JtYXQoW3RlbXBsYXRlXSBbLCBwcmVjaXNpb25dIFssIHNldHRpbmdzXSlcblx0bW9tZW50LmR1cmF0aW9uLmZuLmZvcm1hdCA9IGZ1bmN0aW9uICgpIHtcblxuXHRcdHZhciB0b2tlbml6ZXIsIHRva2VucywgdHlwZXMsIHR5cGVNYXAsIG1vbWVudFR5cGVzLCBmb3VuZEZpcnN0LCB0cmltSW5kZXgsXG5cdFx0XHRhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpLFxuXHRcdFx0c2V0dGluZ3MgPSBleHRlbmQoe30sIHRoaXMuZm9ybWF0LmRlZmF1bHRzKSxcblx0XHRcdC8vIGtlZXAgYSBzaGFkb3cgY29weSBvZiB0aGlzIG1vbWVudCBmb3IgY2FsY3VsYXRpbmcgcmVtYWluZGVyc1xuXHRcdFx0cmVtYWluZGVyID0gbW9tZW50LmR1cmF0aW9uKHRoaXMpO1xuXG5cdFx0Ly8gYWRkIGEgcmVmZXJlbmNlIHRvIHRoaXMgZHVyYXRpb24gb2JqZWN0IHRvIHRoZSBzZXR0aW5ncyBmb3IgdXNlXG5cdFx0Ly8gaW4gYSB0ZW1wbGF0ZSBmdW5jdGlvblxuXHRcdHNldHRpbmdzLmR1cmF0aW9uID0gdGhpcztcblxuXHRcdC8vIHBhcnNlIGFyZ3VtZW50c1xuXHRcdGVhY2goYXJncywgZnVuY3Rpb24gKGFyZykge1xuXHRcdFx0aWYgKHR5cGVvZiBhcmcgPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIGFyZyA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdHNldHRpbmdzLnRlbXBsYXRlID0gYXJnO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0eXBlb2YgYXJnID09PSBcIm51bWJlclwiKSB7XG5cdFx0XHRcdHNldHRpbmdzLnByZWNpc2lvbiA9IGFyZztcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoaXNPYmplY3QoYXJnKSkge1xuXHRcdFx0XHRleHRlbmQoc2V0dGluZ3MsIGFyZyk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHQvLyB0eXBlc1xuXHRcdHR5cGVzID0gc2V0dGluZ3MudHlwZXMgPSAoaXNBcnJheShzZXR0aW5ncy50eXBlcykgPyBzZXR0aW5ncy50eXBlcyA6IHNldHRpbmdzLnR5cGVzLnNwbGl0KFwiIFwiKSk7XG5cblx0XHQvLyB0ZW1wbGF0ZVxuXHRcdGlmICh0eXBlb2Ygc2V0dGluZ3MudGVtcGxhdGUgPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0c2V0dGluZ3MudGVtcGxhdGUgPSBzZXR0aW5ncy50ZW1wbGF0ZS5hcHBseShzZXR0aW5ncyk7XG5cdFx0fVxuXG5cdFx0Ly8gdG9rZW5pemVyIHJlZ2V4cFxuXHRcdHRva2VuaXplciA9IG5ldyBSZWdFeHAobWFwKHR5cGVzLCBmdW5jdGlvbiAodHlwZSkge1xuXHRcdFx0cmV0dXJuIHNldHRpbmdzW3R5cGVdLnNvdXJjZTtcblx0XHR9KS5qb2luKFwifFwiKSwgXCJnXCIpO1xuXG5cdFx0Ly8gdG9rZW4gdHlwZSBtYXAgZnVuY3Rpb25cblx0XHR0eXBlTWFwID0gZnVuY3Rpb24gKHRva2VuKSB7XG5cdFx0XHRyZXR1cm4gZmluZCh0eXBlcywgZnVuY3Rpb24gKHR5cGUpIHtcblx0XHRcdFx0cmV0dXJuIHNldHRpbmdzW3R5cGVdLnRlc3QodG9rZW4pO1xuXHRcdFx0fSk7XG5cdFx0fTtcblxuXHRcdC8vIHRva2VucyBhcnJheVxuXHRcdHRva2VucyA9IG1hcChzZXR0aW5ncy50ZW1wbGF0ZS5tYXRjaCh0b2tlbml6ZXIpLCBmdW5jdGlvbiAodG9rZW4sIGluZGV4KSB7XG5cdFx0XHR2YXIgdHlwZSA9IHR5cGVNYXAodG9rZW4pLFxuXHRcdFx0XHRsZW5ndGggPSB0b2tlbi5sZW5ndGg7XG5cblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGluZGV4OiBpbmRleCxcblx0XHRcdFx0bGVuZ3RoOiBsZW5ndGgsXG5cblx0XHRcdFx0Ly8gcmVwbGFjZSBlc2NhcGVkIHRva2VucyB3aXRoIHRoZSBub24tZXNjYXBlZCB0b2tlbiB0ZXh0XG5cdFx0XHRcdHRva2VuOiAodHlwZSA9PT0gXCJlc2NhcGVcIiA/IHRva2VuLnJlcGxhY2Uoc2V0dGluZ3MuZXNjYXBlLCBcIiQxXCIpIDogdG9rZW4pLFxuXG5cdFx0XHRcdC8vIGlnbm9yZSB0eXBlIG9uIG5vbi1tb21lbnQgdG9rZW5zXG5cdFx0XHRcdHR5cGU6ICgodHlwZSA9PT0gXCJlc2NhcGVcIiB8fCB0eXBlID09PSBcImdlbmVyYWxcIikgPyBudWxsIDogdHlwZSlcblxuXHRcdFx0XHQvLyBjYWxjdWxhdGUgYmFzZSB2YWx1ZSBmb3IgYWxsIG1vbWVudCB0b2tlbnNcblx0XHRcdFx0Ly9iYXNlVmFsdWU6ICgodHlwZSA9PT0gXCJlc2NhcGVcIiB8fCB0eXBlID09PSBcImdlbmVyYWxcIikgPyBudWxsIDogdGhpcy5hcyh0eXBlKSlcblx0XHRcdH07XG5cdFx0fSwgdGhpcyk7XG5cblx0XHQvLyB1bmlxdWUgbW9tZW50IHRva2VuIHR5cGVzIGluIHRoZSB0ZW1wbGF0ZSAoaW4gb3JkZXIgb2YgZGVzY2VuZGluZyBtYWduaXR1ZGUpXG5cdFx0bW9tZW50VHlwZXMgPSBpbnRlcnNlY3Rpb24odHlwZXMsIHVuaXF1ZShjb21wYWN0KHBsdWNrKHRva2VucywgXCJ0eXBlXCIpKSkpO1xuXG5cdFx0Ly8gZXhpdCBlYXJseSBpZiB0aGVyZSBhcmUgbm8gbW9tZW50VHlwZXNcblx0XHRpZiAoIW1vbWVudFR5cGVzLmxlbmd0aCkge1xuXHRcdFx0cmV0dXJuIHBsdWNrKHRva2VucywgXCJ0b2tlblwiKS5qb2luKFwiXCIpO1xuXHRcdH1cblxuXHRcdC8vIGNhbGN1bGF0ZSB2YWx1ZXMgZm9yIGVhY2ggdG9rZW4gdHlwZSBpbiB0aGUgdGVtcGxhdGVcblx0XHRlYWNoKG1vbWVudFR5cGVzLCBmdW5jdGlvbiAobW9tZW50VHlwZSwgaW5kZXgpIHtcblx0XHRcdHZhciB2YWx1ZSwgd2hvbGVWYWx1ZSwgZGVjaW1hbFZhbHVlLCBpc0xlYXN0LCBpc01vc3Q7XG5cblx0XHRcdC8vIGNhbGN1bGF0ZSBpbnRlZ2VyIGFuZCBkZWNpbWFsIHZhbHVlIHBvcnRpb25zXG5cdFx0XHR2YWx1ZSA9IHJlbWFpbmRlci5hcyhtb21lbnRUeXBlKTtcblx0XHRcdHdob2xlVmFsdWUgPSAodmFsdWUgPiAwID8gTWF0aC5mbG9vcih2YWx1ZSkgOiBNYXRoLmNlaWwodmFsdWUpKTtcblx0XHRcdGRlY2ltYWxWYWx1ZSA9IHZhbHVlIC0gd2hvbGVWYWx1ZTtcblxuXHRcdFx0Ly8gaXMgdGhpcyB0aGUgbGVhc3Qtc2lnbmlmaWNhbnQgbW9tZW50IHRva2VuIGZvdW5kP1xuXHRcdFx0aXNMZWFzdCA9ICgoaW5kZXggKyAxKSA9PT0gbW9tZW50VHlwZXMubGVuZ3RoKTtcblxuXHRcdFx0Ly8gaXMgdGhpcyB0aGUgbW9zdC1zaWduaWZpY2FudCBtb21lbnQgdG9rZW4gZm91bmQ/XG5cdFx0XHRpc01vc3QgPSAoIWluZGV4KTtcblxuXHRcdFx0Ly8gdXBkYXRlIHRva2VucyBhcnJheVxuXHRcdFx0Ly8gdXNpbmcgdGhpcyBhbGdvcml0aG0gdG8gbm90IGFzc3VtZSBhbnl0aGluZyBhYm91dFxuXHRcdFx0Ly8gdGhlIG9yZGVyIG9yIGZyZXF1ZW5jeSBvZiBhbnkgdG9rZW5zXG5cdFx0XHRlYWNoKHRva2VucywgZnVuY3Rpb24gKHRva2VuKSB7XG5cdFx0XHRcdGlmICh0b2tlbi50eXBlID09PSBtb21lbnRUeXBlKSB7XG5cdFx0XHRcdFx0ZXh0ZW5kKHRva2VuLCB7XG5cdFx0XHRcdFx0XHR2YWx1ZTogdmFsdWUsXG5cdFx0XHRcdFx0XHR3aG9sZVZhbHVlOiB3aG9sZVZhbHVlLFxuXHRcdFx0XHRcdFx0ZGVjaW1hbFZhbHVlOiBkZWNpbWFsVmFsdWUsXG5cdFx0XHRcdFx0XHRpc0xlYXN0OiBpc0xlYXN0LFxuXHRcdFx0XHRcdFx0aXNNb3N0OiBpc01vc3Rcblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdGlmIChpc01vc3QpIHtcblx0XHRcdFx0XHRcdC8vIG5vdGUgdGhlIGxlbmd0aCBvZiB0aGUgbW9zdC1zaWduaWZpY2FudCBtb21lbnQgdG9rZW46XG5cdFx0XHRcdFx0XHQvLyBpZiBpdCBpcyBncmVhdGVyIHRoYW4gb25lIGFuZCBmb3JjZUxlbmd0aCBpcyBub3Qgc2V0LCBkZWZhdWx0IGZvcmNlTGVuZ3RoIHRvIGB0cnVlYFxuXHRcdFx0XHRcdFx0aWYgKHNldHRpbmdzLmZvcmNlTGVuZ3RoID09IG51bGwgJiYgdG9rZW4ubGVuZ3RoID4gMSkge1xuXHRcdFx0XHRcdFx0XHRzZXR0aW5ncy5mb3JjZUxlbmd0aCA9IHRydWU7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC8vIHJhdGlvbmFsZSBpcyB0aGlzOlxuXHRcdFx0XHRcdFx0Ly8gaWYgdGhlIHRlbXBsYXRlIGlzIFwiaDptbTpzc1wiIGFuZCB0aGUgbW9tZW50IHZhbHVlIGlzIDUgbWludXRlcywgdGhlIHVzZXItZnJpZW5kbHkgb3V0cHV0IGlzIFwiNTowMFwiLCBub3QgXCIwNTowMFwiXG5cdFx0XHRcdFx0XHQvLyBzaG91bGRuJ3QgcGFkIHRoZSBgbWludXRlc2AgdG9rZW4gZXZlbiB0aG91Z2ggaXQgaGFzIGxlbmd0aCBvZiB0d29cblx0XHRcdFx0XHRcdC8vIGlmIHRoZSB0ZW1wbGF0ZSBpcyBcImhoOm1tOnNzXCIsIHRoZSB1c2VyIGNsZWFybHkgd2FudGVkIGV2ZXJ5dGhpbmcgcGFkZGVkIHNvIHdlIHNob3VsZCBvdXRwdXQgXCIwNTowMFwiXG5cdFx0XHRcdFx0XHQvLyBpZiB0aGUgdXNlciB3YW50ZWQgdGhlIGZ1bGwgcGFkZGVkIG91dHB1dCwgdGhleSBjYW4gc2V0IGB7IHRyaW06IGZhbHNlIH1gIHRvIGdldCBcIjAwOjA1OjAwXCJcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHQvLyB1cGRhdGUgcmVtYWluZGVyXG5cdFx0XHRyZW1haW5kZXIuc3VidHJhY3Qod2hvbGVWYWx1ZSwgbW9tZW50VHlwZSk7XG5cdFx0fSk7XG5cdFxuXHRcdC8vIHRyaW0gdG9rZW5zIGFycmF5XG5cdFx0aWYgKHNldHRpbmdzLnRyaW0pIHtcblx0XHRcdHRva2VucyA9IChzZXR0aW5ncy50cmltID09PSBcImxlZnRcIiA/IHJlc3QgOiBpbml0aWFsKSh0b2tlbnMsIGZ1bmN0aW9uICh0b2tlbikge1xuXHRcdFx0XHQvLyByZXR1cm4gYHRydWVgIGlmOlxuXHRcdFx0XHQvLyB0aGUgdG9rZW4gaXMgbm90IHRoZSBsZWFzdCBtb21lbnQgdG9rZW4gKGRvbid0IHRyaW0gdGhlIGxlYXN0IG1vbWVudCB0b2tlbilcblx0XHRcdFx0Ly8gdGhlIHRva2VuIGlzIGEgbW9tZW50IHRva2VuIHRoYXQgZG9lcyBub3QgaGF2ZSBhIHZhbHVlIChkb24ndCB0cmltIG1vbWVudCB0b2tlbnMgdGhhdCBoYXZlIGEgd2hvbGUgdmFsdWUpXG5cdFx0XHRcdHJldHVybiAhKHRva2VuLmlzTGVhc3QgfHwgKHRva2VuLnR5cGUgIT0gbnVsbCAmJiB0b2tlbi53aG9sZVZhbHVlKSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0XG5cdFx0XG5cdFx0Ly8gYnVpbGQgb3V0cHV0XG5cblx0XHQvLyB0aGUgZmlyc3QgbW9tZW50IHRva2VuIGNhbiBoYXZlIHNwZWNpYWwgaGFuZGxpbmdcblx0XHRmb3VuZEZpcnN0ID0gZmFsc2U7XG5cblx0XHQvLyBydW4gdGhlIG1hcCBpbiByZXZlcnNlIG9yZGVyIGlmIHRyaW1taW5nIGZyb20gdGhlIHJpZ2h0XG5cdFx0aWYgKHNldHRpbmdzLnRyaW0gPT09IFwicmlnaHRcIikge1xuXHRcdFx0dG9rZW5zLnJldmVyc2UoKTtcblx0XHR9XG5cblx0XHR0b2tlbnMgPSBtYXAodG9rZW5zLCBmdW5jdGlvbiAodG9rZW4pIHtcblx0XHRcdHZhciB2YWwsXG5cdFx0XHRcdGRlY1ZhbDtcblxuXHRcdFx0aWYgKCF0b2tlbi50eXBlKSB7XG5cdFx0XHRcdC8vIGlmIGl0IGlzIG5vdCBhIG1vbWVudCB0b2tlbiwgdXNlIHRoZSB0b2tlbiBhcyBpdHMgb3duIHZhbHVlXG5cdFx0XHRcdHJldHVybiB0b2tlbi50b2tlbjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gYXBwbHkgbmVnYXRpdmUgcHJlY2lzaW9uIGZvcm1hdHRpbmcgdG8gdGhlIGxlYXN0LXNpZ25pZmljYW50IG1vbWVudCB0b2tlblxuXHRcdFx0aWYgKHRva2VuLmlzTGVhc3QgJiYgKHNldHRpbmdzLnByZWNpc2lvbiA8IDApKSB7XG5cdFx0XHRcdHZhbCA9IChNYXRoLmZsb29yKHRva2VuLndob2xlVmFsdWUgKiBNYXRoLnBvdygxMCwgc2V0dGluZ3MucHJlY2lzaW9uKSkgKiBNYXRoLnBvdygxMCwgLXNldHRpbmdzLnByZWNpc2lvbikpLnRvU3RyaW5nKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2YWwgPSB0b2tlbi53aG9sZVZhbHVlLnRvU3RyaW5nKCk7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdC8vIHJlbW92ZSBuZWdhdGl2ZSBzaWduIGZyb20gdGhlIGJlZ2lubmluZ1xuXHRcdFx0dmFsID0gdmFsLnJlcGxhY2UoL15cXC0vLCBcIlwiKTtcblxuXHRcdFx0Ly8gYXBwbHkgdG9rZW4gbGVuZ3RoIGZvcm1hdHRpbmdcblx0XHRcdC8vIHNwZWNpYWwgaGFuZGxpbmcgZm9yIHRoZSBmaXJzdCBtb21lbnQgdG9rZW4gdGhhdCBpcyBub3QgdGhlIG1vc3Qgc2lnbmlmaWNhbnQgaW4gYSB0cmltbWVkIHRlbXBsYXRlXG5cdFx0XHRpZiAodG9rZW4ubGVuZ3RoID4gMSAmJiAoZm91bmRGaXJzdCB8fCB0b2tlbi5pc01vc3QgfHwgc2V0dGluZ3MuZm9yY2VMZW5ndGgpKSB7XG5cdFx0XHRcdHZhbCA9IHBhZFplcm8odmFsLCB0b2tlbi5sZW5ndGgpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBhZGQgZGVjaW1hbCB2YWx1ZSBpZiBwcmVjaXNpb24gPiAwXG5cdFx0XHRpZiAodG9rZW4uaXNMZWFzdCAmJiAoc2V0dGluZ3MucHJlY2lzaW9uID4gMCkpIHtcblx0XHRcdFx0ZGVjVmFsID0gdG9rZW4uZGVjaW1hbFZhbHVlLnRvU3RyaW5nKCkucmVwbGFjZSgvXlxcLS8sIFwiXCIpLnNwbGl0KC9cXC58ZVxcLS8pO1xuXHRcdFx0XHRzd2l0Y2ggKGRlY1ZhbC5sZW5ndGgpIHtcblx0XHRcdFx0XHRjYXNlIDE6XG5cdFx0XHRcdFx0XHR2YWwgKz0gXCIuXCIgKyBwYWRaZXJvKGRlY1ZhbFswXSwgc2V0dGluZ3MucHJlY2lzaW9uLCB0cnVlKS5zbGljZSgwLCBzZXR0aW5ncy5wcmVjaXNpb24pO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRjYXNlIDI6XG5cdFx0XHRcdFx0XHR2YWwgKz0gXCIuXCIgKyBwYWRaZXJvKGRlY1ZhbFsxXSwgc2V0dGluZ3MucHJlY2lzaW9uLCB0cnVlKS5zbGljZSgwLCBzZXR0aW5ncy5wcmVjaXNpb24pO1x0XHRcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0Y2FzZSAzOlxuXHRcdFx0XHRcdFx0dmFsICs9IFwiLlwiICsgcGFkWmVybyhyZXBlYXRaZXJvKCgrZGVjVmFsWzJdKSAtIDEpICsgKGRlY1ZhbFswXSB8fCBcIjBcIikgKyBkZWNWYWxbMV0sIHNldHRpbmdzLnByZWNpc2lvbiwgdHJ1ZSkuc2xpY2UoMCwgc2V0dGluZ3MucHJlY2lzaW9uKTtcdFx0XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0dGhyb3cgXCJNb21lbnQgRHVyYXRpb24gRm9ybWF0OiB1bmFibGUgdG8gcGFyc2UgdG9rZW4gZGVjaW1hbCB2YWx1ZS5cIjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHQvLyBhZGQgYSBuZWdhdGl2ZSBzaWduIGlmIHRoZSB2YWx1ZSBpcyBuZWdhdGl2ZSBhbmQgdG9rZW4gaXMgbW9zdCBzaWduaWZpY2FudFxuXHRcdFx0aWYgKHRva2VuLmlzTW9zdCAmJiB0b2tlbi52YWx1ZSA8IDApIHtcblx0XHRcdFx0dmFsID0gXCItXCIgKyB2YWw7XG5cdFx0XHR9XG5cblx0XHRcdGZvdW5kRmlyc3QgPSB0cnVlO1xuXG5cdFx0XHRyZXR1cm4gdmFsO1xuXHRcdH0pO1xuXG5cdFx0Ly8gdW5kbyB0aGUgcmV2ZXJzZSBpZiB0cmltbWluZyBmcm9tIHRoZSByaWdodFxuXHRcdGlmIChzZXR0aW5ncy50cmltID09PSBcInJpZ2h0XCIpIHtcblx0XHRcdHRva2Vucy5yZXZlcnNlKCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRva2Vucy5qb2luKFwiXCIpO1xuXHR9O1xuXG5cdG1vbWVudC5kdXJhdGlvbi5mbi5mb3JtYXQuZGVmYXVsdHMgPSB7XG5cdFx0Ly8gdG9rZW4gZGVmaW5pdGlvbnNcblx0XHRlc2NhcGU6IC9cXFsoLis/KVxcXS8sXG5cdFx0eWVhcnM6IC9bWXldKy8sXG5cdFx0bW9udGhzOiAvTSsvLFxuXHRcdHdlZWtzOiAvW1d3XSsvLFxuXHRcdGRheXM6IC9bRGRdKy8sXG5cdFx0aG91cnM6IC9bSGhdKy8sXG5cdFx0bWludXRlczogL20rLyxcblx0XHRzZWNvbmRzOiAvcysvLFxuXHRcdG1pbGxpc2Vjb25kczogL1MrLyxcblx0XHRnZW5lcmFsOiAvLis/LyxcblxuXHRcdC8vIHRva2VuIHR5cGUgbmFtZXNcblx0XHQvLyBpbiBvcmRlciBvZiBkZXNjZW5kaW5nIG1hZ25pdHVkZVxuXHRcdC8vIGNhbiBiZSBhIHNwYWNlLXNlcGFyYXRlZCB0b2tlbiBuYW1lIGxpc3Qgb3IgYW4gYXJyYXkgb2YgdG9rZW4gbmFtZXNcblx0XHR0eXBlczogXCJlc2NhcGUgeWVhcnMgbW9udGhzIHdlZWtzIGRheXMgaG91cnMgbWludXRlcyBzZWNvbmRzIG1pbGxpc2Vjb25kcyBnZW5lcmFsXCIsXG5cblx0XHQvLyBmb3JtYXQgb3B0aW9uc1xuXG5cdFx0Ly8gdHJpbVxuXHRcdC8vIFwibGVmdFwiIC0gdGVtcGxhdGUgdG9rZW5zIGFyZSB0cmltbWVkIGZyb20gdGhlIGxlZnQgdW50aWwgdGhlIGZpcnN0IG1vbWVudCB0b2tlbiB0aGF0IGhhcyBhIHZhbHVlID49IDFcblx0XHQvLyBcInJpZ2h0XCIgLSB0ZW1wbGF0ZSB0b2tlbnMgYXJlIHRyaW1tZWQgZnJvbSB0aGUgcmlnaHQgdW50aWwgdGhlIGZpcnN0IG1vbWVudCB0b2tlbiB0aGF0IGhhcyBhIHZhbHVlID49IDFcblx0XHQvLyAodGhlIGZpbmFsIG1vbWVudCB0b2tlbiBpcyBub3QgdHJpbW1lZCwgcmVnYXJkbGVzcyBvZiB2YWx1ZSlcblx0XHQvLyBgZmFsc2VgIC0gdGVtcGxhdGUgdG9rZW5zIGFyZSBub3QgdHJpbW1lZFxuXHRcdHRyaW06IFwibGVmdFwiLFxuXG5cdFx0Ly8gcHJlY2lzaW9uXG5cdFx0Ly8gbnVtYmVyIG9mIGRlY2ltYWwgZGlnaXRzIHRvIGluY2x1ZGUgYWZ0ZXIgKHRvIHRoZSByaWdodCBvZikgdGhlIGRlY2ltYWwgcG9pbnQgKHBvc2l0aXZlIGludGVnZXIpXG5cdFx0Ly8gb3IgdGhlIG51bWJlciBvZiBkaWdpdHMgdG8gdHJ1bmNhdGUgdG8gMCBiZWZvcmUgKHRvIHRoZSBsZWZ0IG9mKSB0aGUgZGVjaW1hbCBwb2ludCAobmVnYXRpdmUgaW50ZWdlcilcblx0XHRwcmVjaXNpb246IDAsXG5cblx0XHQvLyBmb3JjZSBmaXJzdCBtb21lbnQgdG9rZW4gd2l0aCBhIHZhbHVlIHRvIHJlbmRlciBhdCBmdWxsIGxlbmd0aCBldmVuIHdoZW4gdGVtcGxhdGUgaXMgdHJpbW1lZCBhbmQgZmlyc3QgbW9tZW50IHRva2VuIGhhcyBsZW5ndGggb2YgMVxuXHRcdGZvcmNlTGVuZ3RoOiBudWxsLFxuXG5cdFx0Ly8gdGVtcGxhdGUgdXNlZCB0byBmb3JtYXQgZHVyYXRpb25cblx0XHQvLyBtYXkgYmUgYSBmdW5jdGlvbiBvciBhIHN0cmluZ1xuXHRcdC8vIHRlbXBsYXRlIGZ1bmN0aW9ucyBhcmUgZXhlY3V0ZWQgd2l0aCB0aGUgYHRoaXNgIGJpbmRpbmcgb2YgdGhlIHNldHRpbmdzIG9iamVjdFxuXHRcdC8vIHNvIHRoYXQgdGVtcGxhdGUgc3RyaW5ncyBtYXkgYmUgZHluYW1pY2FsbHkgZ2VuZXJhdGVkIGJhc2VkIG9uIHRoZSBkdXJhdGlvbiBvYmplY3Rcblx0XHQvLyAoYWNjZXNzaWJsZSB2aWEgYHRoaXMuZHVyYXRpb25gKVxuXHRcdC8vIG9yIGFueSBvZiB0aGUgb3RoZXIgc2V0dGluZ3Ncblx0XHR0ZW1wbGF0ZTogZnVuY3Rpb24gKCkge1xuXHRcdFx0dmFyIHR5cGVzID0gdGhpcy50eXBlcyxcblx0XHRcdFx0ZHVyID0gdGhpcy5kdXJhdGlvbixcblx0XHRcdFx0bGFzdFR5cGUgPSBmaW5kTGFzdCh0eXBlcywgZnVuY3Rpb24gKHR5cGUpIHtcblx0XHRcdFx0XHRyZXR1cm4gZHVyLl9kYXRhW3R5cGVdO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0Ly8gZGVmYXVsdCB0ZW1wbGF0ZSBzdHJpbmdzIGZvciBlYWNoIGR1cmF0aW9uIGRpbWVuc2lvbiB0eXBlXG5cdFx0XHRzd2l0Y2ggKGxhc3RUeXBlKSB7XG5cdFx0XHRcdGNhc2UgXCJzZWNvbmRzXCI6XG5cdFx0XHRcdFx0cmV0dXJuIFwiaDptbTpzc1wiO1xuXHRcdFx0XHRjYXNlIFwibWludXRlc1wiOlxuXHRcdFx0XHRcdHJldHVybiBcImRbZF0gaDptbVwiO1xuXHRcdFx0XHRjYXNlIFwiaG91cnNcIjpcblx0XHRcdFx0XHRyZXR1cm4gXCJkW2RdIGhbaF1cIjtcblx0XHRcdFx0Y2FzZSBcImRheXNcIjpcblx0XHRcdFx0XHRyZXR1cm4gXCJNW21dIGRbZF1cIjtcblx0XHRcdFx0Y2FzZSBcIndlZWtzXCI6XG5cdFx0XHRcdFx0cmV0dXJuIFwieVt5XSB3W3ddXCI7XG5cdFx0XHRcdGNhc2UgXCJtb250aHNcIjpcblx0XHRcdFx0XHRyZXR1cm4gXCJ5W3ldIE1bbV1cIjtcblx0XHRcdFx0Y2FzZSBcInllYXJzXCI6XG5cdFx0XHRcdFx0cmV0dXJuIFwieVt5XVwiO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdHJldHVybiBcInlbeV0gTVttXSBkW2RdIGg6bW06c3NcIjtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cbn0pKHRoaXMpO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbW9tZW50LWR1cmF0aW9uLWZvcm1hdC9saWIvbW9tZW50LWR1cmF0aW9uLWZvcm1hdC5qc1xuICoqIG1vZHVsZSBpZCA9IDcwNlxuICoqIG1vZHVsZSBjaHVua3MgPSAyXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==