webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _wurl = __webpack_require__(652);
	
	var _wurl2 = _interopRequireDefault(_wurl);
	
	var _blockList = __webpack_require__(280);
	
	var _blockList2 = _interopRequireDefault(_blockList);
	
	var _timer = __webpack_require__(658);
	
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

/***/ 658:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _classCallCheck2 = __webpack_require__(308);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(309);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _moment = __webpack_require__(314);
	
	var _moment2 = _interopRequireDefault(_moment);
	
	__webpack_require__(659);
	
	var _blockList = __webpack_require__(280);
	
	var _blockList2 = _interopRequireDefault(_blockList);
	
	var _wurl = __webpack_require__(652);
	
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

/***/ 659:
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
			try { moment = __webpack_require__(314); } 
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGltZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9tb21lbnQtZHVyYXRpb24tZm9ybWF0L2xpYi9tb21lbnQtZHVyYXRpb24tZm9ybWF0LmpzIl0sIm5hbWVzIjpbImluaXQiLCJ0aGVuIiwiQkxPQ0tFRF9QQUdFIiwibG9hZEZpbHRlcmVkUGFnZSIsInRhYklkIiwidXJsIiwic2V0VGltZW91dCIsImNocm9tZSIsInRhYnMiLCJ1cGRhdGUiLCJoYW5kbGVBY3Rpb24iLCJhY3Rpb24iLCJkZXRhaWxzIiwibWF0Y2hQYXR0ZXJucyIsImdldFJlZ2V4UGF0dGVybnMiLCJwYXR0ZXJucyIsInVuZGVmaW5lZCIsIml0ZW1zIiwibGVuZ3RoIiwiZmluZCIsInJlZyIsIlJlZ0V4cCIsInJlZ2V4IiwidGVzdCIsInVybENoZWNrIiwicHJvdG9jb2wiLCJzaXRlIiwiZ2V0UmVjb3JkIiwiYWNsTWF0Y2giLCJyZWNvcmQiLCJhZHZBY3Rpb24iLCJwYXR0ZXJuTWF0Y2giLCJjYXRjaCIsIndlYlJlcXVlc3QiLCJvbkJlZm9yZVJlcXVlc3QiLCJhZGRMaXN0ZW5lciIsInVybHMiLCJ0eXBlcyIsIlRpbWVyIiwiY3VycmVudFNpdGUiLCJjdXJyZW50VGFiIiwicG9wdXAiLCJzdGFydFRpbWUiLCJuZXdEYXlUaW1lciIsInNldE5ld0RheVRpbWVyIiwid2luZG93cyIsImdldEFsbCIsInBvcHVsYXRlIiwiZm9yRWFjaCIsIndpbiIsInRhYiIsImlzVmFsaWRQcm90b2NvbCIsImV4ZWN1dGVTY3JpcHQiLCJpZCIsImZpbGUiLCJydW50aW1lIiwib25NZXNzYWdlIiwicmVxdWVzdCIsInNlbmRlciIsInNlbmRSZXNwb25zZSIsImZvY3VzIiwic2VuZGVyU2l0ZSIsInNhdmVSZWNvcmRzIiwidGltZXIiLCJzZWNvbmRzIiwiZ2V0RHVyYXRpb24iLCJvblVwZGF0ZWQiLCJjaGFuZ2VJbmZvIiwidGFiU2l0ZSIsImNvbnNvbGUiLCJsb2ciLCJ2YWxpZFVybCIsInRvbW9ycm93IiwiYWRkIiwic3RhcnRPZiIsImluaXROZXdEYXRlIiwiZGlmZiIsImR1cmF0aW9uIiwiYXNTZWNvbmRzIiwicmVjb25jaWxlUmVjb3JkcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEscUJBQUdBLElBQUgsR0FBVUMsSUFBVixDQUFlLFlBQU07QUFDbkIsbUJBQU1ELElBQU47QUFDRCxFQUZEOztBQUlBLEtBQU1FLGVBQWUsbUNBQXJCOztBQUVBLFVBQVNDLGdCQUFULENBQTBCQyxLQUExQixFQUFpQ0MsR0FBakMsRUFBc0M7QUFDcENDLGNBQVcsWUFBTTtBQUNmQyxZQUFPQyxJQUFQLENBQVlDLE1BQVosQ0FBbUJMLEtBQW5CLEVBQTBCLEVBQUVDLFFBQUYsRUFBMUI7QUFDRCxJQUZELEVBRUcsR0FGSDtBQUdEO0FBQ0QsVUFBU0ssWUFBVCxDQUFzQkMsTUFBdEIsRUFBOEJDLE9BQTlCLEVBQXVDO0FBQ3JDLE9BQUlELFdBQVcsT0FBZixFQUF3QjtBQUN0QlIsc0JBQWlCUyxRQUFRUixLQUF6QixFQUFnQ0YsWUFBaEM7QUFDRCxJQUZELE1BRU8sSUFBSVMsV0FBVyxPQUFmLEVBQXdCO0FBQzdCUixzQkFBaUJTLFFBQVFSLEtBQXpCLEVBQWdDRixZQUFoQztBQUNEO0FBQ0Y7QUFDRCxVQUFTVyxhQUFULENBQXVCRCxPQUF2QixFQUFnQztBQUM5QixVQUFPLG9CQUFHRSxnQkFBSCxHQUNKYixJQURJLENBQ0Msb0JBQVk7QUFDaEIsU0FBSWMsYUFBYUMsU0FBYixJQUEwQkQsU0FBU0UsS0FBVCxDQUFlQyxNQUFmLEdBQXdCLENBQXRELEVBQXlEO0FBQ3ZELGNBQU9ILFNBQVNFLEtBQVQsQ0FBZUUsSUFBZixDQUFvQixrQkFBVTtBQUNuQyxhQUFNQyxNQUFNLElBQUlDLE1BQUosQ0FBV1YsT0FBT1csS0FBbEIsRUFBeUIsR0FBekIsQ0FBWjtBQUNBLGdCQUFPRixJQUFJRyxJ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QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhGO0FBQ0E7O0FBRUE7QUFDQSxrSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRUFBQyIsImZpbGUiOiJiYWNrZ3JvdW5kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHd1cmwgZnJvbSAnd3VybCc7XG5pbXBvcnQgQkwgZnJvbSAnLi9ibG9ja0xpc3QuanMnO1xuaW1wb3J0IFRpbWVyIGZyb20gJy4vdGltZXIuanMnO1xuXG5CTC5pbml0KCkudGhlbigoKSA9PiB7XG4gIFRpbWVyLmluaXQoKTtcbn0pO1xuXG5jb25zdCBCTE9DS0VEX1BBR0UgPSAnaHR0cHM6Ly93d3cuZ2l0aHViLmNvbS93cmxlc2tvdmVjJztcblxuZnVuY3Rpb24gbG9hZEZpbHRlcmVkUGFnZSh0YWJJZCwgdXJsKSB7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGNocm9tZS50YWJzLnVwZGF0ZSh0YWJJZCwgeyB1cmwgfSk7XG4gIH0sIDUwMCk7XG59XG5mdW5jdGlvbiBoYW5kbGVBY3Rpb24oYWN0aW9uLCBkZXRhaWxzKSB7XG4gIGlmIChhY3Rpb24gPT09ICdibG9jaycpIHtcbiAgICBsb2FkRmlsdGVyZWRQYWdlKGRldGFpbHMudGFiSWQsIEJMT0NLRURfUEFHRSk7XG4gIH0gZWxzZSBpZiAoYWN0aW9uID09PSAnbGltaXQnKSB7XG4gICAgbG9hZEZpbHRlcmVkUGFnZShkZXRhaWxzLnRhYklkLCBCTE9DS0VEX1BBR0UpO1xuICB9XG59XG5mdW5jdGlvbiBtYXRjaFBhdHRlcm5zKGRldGFpbHMpIHtcbiAgcmV0dXJuIEJMLmdldFJlZ2V4UGF0dGVybnMoKVxuICAgIC50aGVuKHBhdHRlcm5zID0+IHtcbiAgICAgIGlmIChwYXR0ZXJucyAhPT0gdW5kZWZpbmVkICYmIHBhdHRlcm5zLml0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuIHBhdHRlcm5zLml0ZW1zLmZpbmQoYWN0aW9uID0+IHtcbiAgICAgICAgICBjb25zdCByZWcgPSBuZXcgUmVnRXhwKGFjdGlvbi5yZWdleCwgJ2knKTtcbiAgICAgICAgICByZXR1cm4gcmVnLnRlc3QoZGV0YWlscy51cmwpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHVybENoZWNrKGRldGFpbHMpIHtcbiAgY29uc3QgcHJvdG9jb2wgPSB3dXJsKCdwcm90b2NvbCcsIGRldGFpbHMudXJsKTtcbiAgaWYgKHByb3RvY29sICE9PSAnY2hyb21lJyAmJiBwcm90b2NvbCAhPT0gJ2Nocm9tZS1leHRlbnNpb24nKSB7XG4gICAgY29uc3Qgc2l0ZSA9IHd1cmwoJ2RvbWFpbicsIGRldGFpbHMudXJsKTtcbiAgICBCTC5nZXRSZWNvcmQoc2l0ZSlcbiAgICAgIC50aGVuKHJlY29yZCA9PiB7XG4gICAgICAgIGNvbnN0IGFjbE1hdGNoID0gcmVjb3JkLmFkdkFjdGlvbi5maW5kKGFjdGlvbiA9PiB7XG4gICAgICAgICAgY29uc3QgcmVnID0gbmV3IFJlZ0V4cChhY3Rpb24ucmVnZXgsICdpJyk7XG4gICAgICAgICAgcmV0dXJuIHJlZy50ZXN0KGRldGFpbHMudXJsKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChhY2xNYXRjaCkge1xuICAgICAgICAgIGhhbmRsZUFjdGlvbihhY2xNYXRjaC5hY3Rpb24sIGRldGFpbHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1hdGNoUGF0dGVybnMoZGV0YWlscylcbiAgICAgICAgICAgIC50aGVuKHBhdHRlcm5NYXRjaCA9PiB7XG4gICAgICAgICAgICAgIGlmIChwYXR0ZXJuTWF0Y2gpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVBY3Rpb24ocGF0dGVybk1hdGNoLmFjdGlvbiwgZGV0YWlscyk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlQWN0aW9uKHJlY29yZC5hY3Rpb24sIGRldGFpbHMpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgIG1hdGNoUGF0dGVybnMoZGV0YWlscylcbiAgICAgICAgICAudGhlbihwYXR0ZXJuTWF0Y2ggPT4ge1xuICAgICAgICAgICAgaWYgKHBhdHRlcm5NYXRjaCkgaGFuZGxlQWN0aW9uKHBhdHRlcm5NYXRjaC5hY3Rpb24sIGRldGFpbHMpO1xuICAgICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH1cbiAgcmV0dXJuIHt9O1xufVxuXG5jaHJvbWUud2ViUmVxdWVzdC5vbkJlZm9yZVJlcXVlc3QuYWRkTGlzdGVuZXIodXJsQ2hlY2ssIHtcbiAgdXJsczogWyc8YWxsX3VybHM+J10sXG4gIHR5cGVzOiBbJ21haW5fZnJhbWUnXVxufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYmFja2dyb3VuZC5qcyIsImltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCAnbW9tZW50LWR1cmF0aW9uLWZvcm1hdCc7XG5pbXBvcnQgQkwgZnJvbSAnLi9ibG9ja0xpc3QuanMnO1xuaW1wb3J0IHd1cmwgZnJvbSAnd3VybCc7XG5cbmNsYXNzIFRpbWVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jdXJyZW50U2l0ZSA9IG51bGw7XG4gICAgdGhpcy5jdXJyZW50VGFiID0gbnVsbDtcbiAgICB0aGlzLnBvcHVwID0gZmFsc2U7XG4gICAgdGhpcy5zdGFydFRpbWUgPSBudWxsO1xuICAgIHRoaXMubmV3RGF5VGltZXIgPSB0aGlzLnNldE5ld0RheVRpbWVyKCk7XG4gIH1cbiAgaW5pdCgpIHtcbiAgICBjaHJvbWUud2luZG93cy5nZXRBbGwoeyBwb3B1bGF0ZTogdHJ1ZSB9LCAod2luZG93cykgPT4ge1xuICAgICAgd2luZG93cy5mb3JFYWNoKCh3aW4pID0+IHtcbiAgICAgICAgd2luLnRhYnMuZm9yRWFjaCgodGFiKSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMuaXNWYWxpZFByb3RvY29sKHRhYi51cmwpKSB7XG4gICAgICAgICAgICBjaHJvbWUudGFicy5leGVjdXRlU2NyaXB0KHRhYi5pZCwgeyBmaWxlOiAnY29udGVudC5qcycgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigocmVxdWVzdCwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpID0+IHtcbiAgICAgIGlmIChyZXF1ZXN0LmZvY3VzKSB7XG4gICAgICAgIGNvbnN0IHNlbmRlclNpdGUgPSB3dXJsKCdkb21haW4nLCBzZW5kZXIudGFiLnVybCk7XG4gICAgICAgIGlmIChyZXF1ZXN0LmZvY3VzID09PSAnZm9jdXMnICYmIHNlbmRlclNpdGUgIT09IHRoaXMuY3VycmVudFNpdGUgJiYgc2VuZGVyU2l0ZVxuICAgICAgICAgJiYgc2VuZGVyLnRhYi5pZCAhPT0gdGhpcy5jdXJyZW50VGFiICYmIHRoaXMuaXNWYWxpZFByb3RvY29sKHNlbmRlclNpdGUpKSB7XG4gICAgICAgICAgdGhpcy5wb3B1cCA9IGZhbHNlO1xuICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRTaXRlICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnNhdmVSZWNvcmRzKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuY3VycmVudFRhYiA9IHNlbmRlci50YWIuaWQ7XG4gICAgICAgICAgdGhpcy5jdXJyZW50U2l0ZSA9IHNlbmRlclNpdGU7XG4gICAgICAgICAgdGhpcy5zdGFydFRpbWUgPSBtb21lbnQoKTtcbiAgICAgICAgfSBlbHNlIGlmIChyZXF1ZXN0LmZvY3VzID09PSAnYmx1cicpIHtcbiAgICAgICAgICBpZiAoc2VuZGVyLnRhYi5pZCA9PT0gdGhpcy5jdXJyZW50VGFiICYmIHNlbmRlclNpdGUgJiYgIXRoaXMucG9wdXApIHtcbiAgICAgICAgICAgIHRoaXMuc2F2ZVJlY29yZHMoKTtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRUaW1lID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFNpdGUgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50VGFiID0gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChyZXF1ZXN0LnRpbWVyID09PSAncG9wdXAnKSB7XG4gICAgICAgIHRoaXMucG9wdXAgPSB0cnVlO1xuICAgICAgICBzZW5kUmVzcG9uc2UoeyBzZWNvbmRzOiB0aGlzLmdldER1cmF0aW9uKCkgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgY2hyb21lLnRhYnMub25VcGRhdGVkLmFkZExpc3RlbmVyKCh0YWJJZCwgY2hhbmdlSW5mbywgdGFiKSA9PiB7XG4gICAgICBjb25zdCB0YWJTaXRlID0gd3VybCgnZG9tYWluJywgdGFiLnVybCk7XG4gICAgICBjb25zb2xlLmxvZyhgY3VycmVudFNpdGU6ICR7dGhpcy5jdXJyZW50U2l0ZX0sIHRhYjogJHt0YWJTaXRlfWApO1xuICAgICAgY29uc3QgdmFsaWRVcmwgPSB0YWJTaXRlICE9PSB0aGlzLmN1cnJlbnRTaXRlICYmIHRoaXMuaXNWYWxpZFByb3RvY29sKHRhYi51cmwpO1xuICAgICAgaWYgKHZhbGlkVXJsKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFNpdGUgPSB0YWJTaXRlO1xuICAgICAgICB0aGlzLmN1cnJlbnRUYWIgPSB0YWIuaWQ7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgc2V0TmV3RGF5VGltZXIoKSB7XG4gICAgY29uc3QgdG9tb3Jyb3cgPSBtb21lbnQoKS5hZGQoMSwgJ2RheXMnKS5zdGFydE9mKCdkYXknKTtcbiAgICByZXR1cm4gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnNhdmVSZWNvcmRzKClcbiAgICAgICAgLnRoZW4oKCkgPT4gQkwuaW5pdE5ld0RhdGUoKSk7XG4gICAgfSwgdG9tb3Jyb3cuZGlmZihtb21lbnQoKSkpO1xuICB9XG4gIGlzVmFsaWRQcm90b2NvbCh1cmwpIHtcbiAgICBjb25zdCBwcm90b2NvbCA9IHd1cmwoJ3Byb3RvY29sJywgdXJsKTtcbiAgICByZXR1cm4gKFxuICAgICAgcHJvdG9jb2wgPT09ICdodHRwJyB8fCBwcm90b2NvbCA9PT0gJ2h0dHBzJyB8fCBwcm90b2NvbCA9PT0gJ2Z0cCdcbiAgICApO1xuICB9XG4gIGdldER1cmF0aW9uKCkge1xuICAgIHJldHVybiBtb21lbnQuZHVyYXRpb24obW9tZW50KCkuZGlmZih0aGlzLnN0YXJ0VGltZSkpLmFzU2Vjb25kcygpO1xuICB9XG4gIHNhdmVSZWNvcmRzKCkge1xuICAgIHJldHVybiBCTC5yZWNvbmNpbGVSZWNvcmRzKHRoaXMuY3VycmVudFNpdGUsIHRoaXMuZ2V0RHVyYXRpb24oKSwgMSlcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5zdGFydFRpbWUgPSBtb21lbnQoKTtcbiAgICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBUaW1lcigpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3RpbWVyLmpzIiwiLyohIE1vbWVudCBEdXJhdGlvbiBGb3JtYXQgdjEuMy4wXG4gKiAgaHR0cHM6Ly9naXRodWIuY29tL2pzbXJlZXNlL21vbWVudC1kdXJhdGlvbi1mb3JtYXQgXG4gKiAgRGF0ZTogMjAxNC0wNy0xNVxuICpcbiAqICBEdXJhdGlvbiBmb3JtYXQgcGx1Z2luIGZ1bmN0aW9uIGZvciB0aGUgTW9tZW50LmpzIGxpYnJhcnlcbiAqICBodHRwOi8vbW9tZW50anMuY29tL1xuICpcbiAqICBDb3B5cmlnaHQgMjAxNCBKb2huIE1hZGhhdmFuLVJlZXNlXG4gKiAgUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXG4gKi9cblxuKGZ1bmN0aW9uIChyb290LCB1bmRlZmluZWQpIHtcblxuXHQvLyByZXBlYXRaZXJvKHF0eSlcblx0Ly8gcmV0dXJucyBcIjBcIiByZXBlYXRlZCBxdHkgdGltZXNcblx0ZnVuY3Rpb24gcmVwZWF0WmVybyhxdHkpIHtcblx0XHR2YXIgcmVzdWx0ID0gXCJcIjtcblx0XHRcblx0XHQvLyBleGl0IGVhcmx5XG5cdFx0Ly8gaWYgcXR5IGlzIDAgb3IgYSBuZWdhdGl2ZSBudW1iZXJcblx0XHQvLyBvciBkb2Vzbid0IGNvZXJjZSB0byBhbiBpbnRlZ2VyXG5cdFx0cXR5ID0gcGFyc2VJbnQocXR5LCAxMCk7XG5cdFx0aWYgKCFxdHkgfHwgcXR5IDwgMSkgeyByZXR1cm4gcmVzdWx0OyB9XG5cdFx0XG5cdFx0d2hpbGUgKHF0eSkge1xuXHRcdFx0cmVzdWx0ICs9IFwiMFwiO1xuXHRcdFx0cXR5IC09IDE7XG5cdFx0fVxuXHRcdFxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cblx0XG5cdC8vIHBhZFplcm8oc3RyLCBsZW4gWywgaXNSaWdodF0pXG5cdC8vIHBhZHMgYSBzdHJpbmcgd2l0aCB6ZXJvcyB1cCB0byBhIHNwZWNpZmllZCBsZW5ndGhcblx0Ly8gd2lsbCBub3QgcGFkIGEgc3RyaW5nIGlmIGl0cyBsZW5ndGggaXMgYXJlYWR5XG5cdC8vIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byB0aGUgc3BlY2lmaWVkIGxlbmd0aFxuXHQvLyBkZWZhdWx0IG91dHB1dCBwYWRzIHdpdGggemVyb3Mgb24gdGhlIGxlZnRcblx0Ly8gc2V0IGlzUmlnaHQgdG8gYHRydWVgIHRvIHBhZCB3aXRoIHplcm9zIG9uIHRoZSByaWdodFxuXHRmdW5jdGlvbiBwYWRaZXJvKHN0ciwgbGVuLCBpc1JpZ2h0KSB7XG5cdFx0aWYgKHN0ciA9PSBudWxsKSB7IHN0ciA9IFwiXCI7IH1cblx0XHRzdHIgPSBcIlwiICsgc3RyO1xuXHRcdFxuXHRcdHJldHVybiAoaXNSaWdodCA/IHN0ciA6IFwiXCIpICsgcmVwZWF0WmVybyhsZW4gLSBzdHIubGVuZ3RoKSArIChpc1JpZ2h0ID8gXCJcIiA6IHN0cik7XG5cdH1cblx0XG5cdC8vIGlzQXJyYXlcblx0ZnVuY3Rpb24gaXNBcnJheShhcnJheSkge1xuXHRcdHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJyYXkpID09PSBcIltvYmplY3QgQXJyYXldXCI7XG5cdH1cblx0XG5cdC8vIGlzT2JqZWN0XG5cdGZ1bmN0aW9uIGlzT2JqZWN0KG9iaikge1xuXHRcdHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSA9PT0gXCJbb2JqZWN0IE9iamVjdF1cIjtcblx0fVxuXHRcblx0Ly8gZmluZExhc3Rcblx0ZnVuY3Rpb24gZmluZExhc3QoYXJyYXksIGNhbGxiYWNrKSB7XG5cdFx0dmFyIGluZGV4ID0gYXJyYXkubGVuZ3RoO1xuXG5cdFx0d2hpbGUgKGluZGV4IC09IDEpIHtcblx0XHRcdGlmIChjYWxsYmFjayhhcnJheVtpbmRleF0pKSB7IHJldHVybiBhcnJheVtpbmRleF07IH1cblx0XHR9XG5cdH1cblxuXHQvLyBmaW5kXG5cdGZ1bmN0aW9uIGZpbmQoYXJyYXksIGNhbGxiYWNrKSB7XG5cdFx0dmFyIGluZGV4ID0gMCxcblx0XHRcdG1heCA9IGFycmF5Lmxlbmd0aCxcblx0XHRcdG1hdGNoO1xuXHRcdFx0XG5cdFx0aWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRtYXRjaCA9IGNhbGxiYWNrO1xuXHRcdFx0Y2FsbGJhY2sgPSBmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFx0XHRyZXR1cm4gaXRlbSA9PT0gbWF0Y2g7XG5cdFx0XHR9O1xuXHRcdH1cblxuXHRcdHdoaWxlIChpbmRleCA8IG1heCkge1xuXHRcdFx0aWYgKGNhbGxiYWNrKGFycmF5W2luZGV4XSkpIHsgcmV0dXJuIGFycmF5W2luZGV4XTsgfVxuXHRcdFx0aW5kZXggKz0gMTtcblx0XHR9XG5cdH1cblx0XG5cdC8vIGVhY2hcblx0ZnVuY3Rpb24gZWFjaChhcnJheSwgY2FsbGJhY2spIHtcblx0XHR2YXIgaW5kZXggPSAwLFxuXHRcdFx0bWF4ID0gYXJyYXkubGVuZ3RoO1xuXHRcdFx0XG5cdFx0aWYgKCFhcnJheSB8fCAhbWF4KSB7IHJldHVybjsgfVxuXG5cdFx0d2hpbGUgKGluZGV4IDwgbWF4KSB7XG5cdFx0XHRpZiAoY2FsbGJhY2soYXJyYXlbaW5kZXhdLCBpbmRleCkgPT09IGZhbHNlKSB7IHJldHVybjsgfVxuXHRcdFx0aW5kZXggKz0gMTtcblx0XHR9XG5cdH1cblx0XG5cdC8vIG1hcFxuXHRmdW5jdGlvbiBtYXAoYXJyYXksIGNhbGxiYWNrKSB7XG5cdFx0dmFyIGluZGV4ID0gMCxcblx0XHRcdG1heCA9IGFycmF5Lmxlbmd0aCxcblx0XHRcdHJldCA9IFtdO1xuXG5cdFx0aWYgKCFhcnJheSB8fCAhbWF4KSB7IHJldHVybiByZXQ7IH1cblx0XHRcdFx0XG5cdFx0d2hpbGUgKGluZGV4IDwgbWF4KSB7XG5cdFx0XHRyZXRbaW5kZXhdID0gY2FsbGJhY2soYXJyYXlbaW5kZXhdLCBpbmRleCk7XG5cdFx0XHRpbmRleCArPSAxO1xuXHRcdH1cblx0XHRcblx0XHRyZXR1cm4gcmV0O1xuXHR9XG5cdFxuXHQvLyBwbHVja1xuXHRmdW5jdGlvbiBwbHVjayhhcnJheSwgcHJvcCkge1xuXHRcdHJldHVybiBtYXAoYXJyYXksIGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHRyZXR1cm4gaXRlbVtwcm9wXTtcblx0XHR9KTtcblx0fVxuXHRcblx0Ly8gY29tcGFjdFxuXHRmdW5jdGlvbiBjb21wYWN0KGFycmF5KSB7XG5cdFx0dmFyIHJldCA9IFtdO1xuXHRcdFxuXHRcdGVhY2goYXJyYXksIGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHRpZiAoaXRlbSkgeyByZXQucHVzaChpdGVtKTsgfVxuXHRcdH0pO1xuXHRcdFxuXHRcdHJldHVybiByZXQ7XG5cdH1cblx0XG5cdC8vIHVuaXF1ZVxuXHRmdW5jdGlvbiB1bmlxdWUoYXJyYXkpIHtcblx0XHR2YXIgcmV0ID0gW107XG5cdFx0XG5cdFx0ZWFjaChhcnJheSwgZnVuY3Rpb24gKF9hKSB7XG5cdFx0XHRpZiAoIWZpbmQocmV0LCBfYSkpIHsgcmV0LnB1c2goX2EpOyB9XG5cdFx0fSk7XG5cdFx0XG5cdFx0cmV0dXJuIHJldDtcblx0fVxuXHRcblx0Ly8gaW50ZXJzZWN0aW9uXG5cdGZ1bmN0aW9uIGludGVyc2VjdGlvbihhLCBiKSB7XG5cdFx0dmFyIHJldCA9IFtdO1xuXHRcdFxuXHRcdGVhY2goYSwgZnVuY3Rpb24gKF9hKSB7XG5cdFx0XHRlYWNoKGIsIGZ1bmN0aW9uIChfYikge1xuXHRcdFx0XHRpZiAoX2EgPT09IF9iKSB7IHJldC5wdXNoKF9hKTsgfVxuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdFx0XG5cdFx0cmV0dXJuIHVuaXF1ZShyZXQpO1xuXHR9XG5cdFxuXHQvLyByZXN0XG5cdGZ1bmN0aW9uIHJlc3QoYXJyYXksIGNhbGxiYWNrKSB7XG5cdFx0dmFyIHJldCA9IFtdO1xuXHRcdFxuXHRcdGVhY2goYXJyYXksIGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuXHRcdFx0aWYgKCFjYWxsYmFjayhpdGVtKSkge1xuXHRcdFx0XHRyZXQgPSBhcnJheS5zbGljZShpbmRleCk7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRcblx0XHRyZXR1cm4gcmV0O1xuXHR9XG5cblx0Ly8gaW5pdGlhbFxuXHRmdW5jdGlvbiBpbml0aWFsKGFycmF5LCBjYWxsYmFjaykge1xuXHRcdHZhciByZXZlcnNlZCA9IGFycmF5LnNsaWNlKCkucmV2ZXJzZSgpO1xuXHRcdFxuXHRcdHJldHVybiByZXN0KHJldmVyc2VkLCBjYWxsYmFjaykucmV2ZXJzZSgpO1xuXHR9XG5cdFxuXHQvLyBleHRlbmRcblx0ZnVuY3Rpb24gZXh0ZW5kKGEsIGIpIHtcblx0XHRmb3IgKHZhciBrZXkgaW4gYikge1xuXHRcdFx0aWYgKGIuaGFzT3duUHJvcGVydHkoa2V5KSkgeyBhW2tleV0gPSBiW2tleV07IH1cblx0XHR9XG5cdFx0XG5cdFx0cmV0dXJuIGE7XG5cdH1cblx0XHRcdFxuXHQvLyBkZWZpbmUgaW50ZXJuYWwgbW9tZW50IHJlZmVyZW5jZVxuXHR2YXIgbW9tZW50O1xuXG5cdGlmICh0eXBlb2YgcmVxdWlyZSA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0dHJ5IHsgbW9tZW50ID0gcmVxdWlyZSgnbW9tZW50Jyk7IH0gXG5cdFx0Y2F0Y2ggKGUpIHt9XG5cdH0gXG5cdFxuXHRpZiAoIW1vbWVudCAmJiByb290Lm1vbWVudCkge1xuXHRcdG1vbWVudCA9IHJvb3QubW9tZW50O1xuXHR9XG5cdFxuXHRpZiAoIW1vbWVudCkge1xuXHRcdHRocm93IFwiTW9tZW50IER1cmF0aW9uIEZvcm1hdCBjYW5ub3QgZmluZCBNb21lbnQuanNcIjtcblx0fVxuXHRcblx0Ly8gbW9tZW50LmR1cmF0aW9uLmZvcm1hdChbdGVtcGxhdGVdIFssIHByZWNpc2lvbl0gWywgc2V0dGluZ3NdKVxuXHRtb21lbnQuZHVyYXRpb24uZm4uZm9ybWF0ID0gZnVuY3Rpb24gKCkge1xuXG5cdFx0dmFyIHRva2VuaXplciwgdG9rZW5zLCB0eXBlcywgdHlwZU1hcCwgbW9tZW50VHlwZXMsIGZvdW5kRmlyc3QsIHRyaW1JbmRleCxcblx0XHRcdGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cyksXG5cdFx0XHRzZXR0aW5ncyA9IGV4dGVuZCh7fSwgdGhpcy5mb3JtYXQuZGVmYXVsdHMpLFxuXHRcdFx0Ly8ga2VlcCBhIHNoYWRvdyBjb3B5IG9mIHRoaXMgbW9tZW50IGZvciBjYWxjdWxhdGluZyByZW1haW5kZXJzXG5cdFx0XHRyZW1haW5kZXIgPSBtb21lbnQuZHVyYXRpb24odGhpcyk7XG5cblx0XHQvLyBhZGQgYSByZWZlcmVuY2UgdG8gdGhpcyBkdXJhdGlvbiBvYmplY3QgdG8gdGhlIHNldHRpbmdzIGZvciB1c2Vcblx0XHQvLyBpbiBhIHRlbXBsYXRlIGZ1bmN0aW9uXG5cdFx0c2V0dGluZ3MuZHVyYXRpb24gPSB0aGlzO1xuXG5cdFx0Ly8gcGFyc2UgYXJndW1lbnRzXG5cdFx0ZWFjaChhcmdzLCBmdW5jdGlvbiAoYXJnKSB7XG5cdFx0XHRpZiAodHlwZW9mIGFyZyA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgYXJnID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0c2V0dGluZ3MudGVtcGxhdGUgPSBhcmc7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHR5cGVvZiBhcmcgPT09IFwibnVtYmVyXCIpIHtcblx0XHRcdFx0c2V0dGluZ3MucHJlY2lzaW9uID0gYXJnO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGlmIChpc09iamVjdChhcmcpKSB7XG5cdFx0XHRcdGV4dGVuZChzZXR0aW5ncywgYXJnKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdC8vIHR5cGVzXG5cdFx0dHlwZXMgPSBzZXR0aW5ncy50eXBlcyA9IChpc0FycmF5KHNldHRpbmdzLnR5cGVzKSA/IHNldHRpbmdzLnR5cGVzIDogc2V0dGluZ3MudHlwZXMuc3BsaXQoXCIgXCIpKTtcblxuXHRcdC8vIHRlbXBsYXRlXG5cdFx0aWYgKHR5cGVvZiBzZXR0aW5ncy50ZW1wbGF0ZSA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRzZXR0aW5ncy50ZW1wbGF0ZSA9IHNldHRpbmdzLnRlbXBsYXRlLmFwcGx5KHNldHRpbmdzKTtcblx0XHR9XG5cblx0XHQvLyB0b2tlbml6ZXIgcmVnZXhwXG5cdFx0dG9rZW5pemVyID0gbmV3IFJlZ0V4cChtYXAodHlwZXMsIGZ1bmN0aW9uICh0eXBlKSB7XG5cdFx0XHRyZXR1cm4gc2V0dGluZ3NbdHlwZV0uc291cmNlO1xuXHRcdH0pLmpvaW4oXCJ8XCIpLCBcImdcIik7XG5cblx0XHQvLyB0b2tlbiB0eXBlIG1hcCBmdW5jdGlvblxuXHRcdHR5cGVNYXAgPSBmdW5jdGlvbiAodG9rZW4pIHtcblx0XHRcdHJldHVybiBmaW5kKHR5cGVzLCBmdW5jdGlvbiAodHlwZSkge1xuXHRcdFx0XHRyZXR1cm4gc2V0dGluZ3NbdHlwZV0udGVzdCh0b2tlbik7XG5cdFx0XHR9KTtcblx0XHR9O1xuXG5cdFx0Ly8gdG9rZW5zIGFycmF5XG5cdFx0dG9rZW5zID0gbWFwKHNldHRpbmdzLnRlbXBsYXRlLm1hdGNoKHRva2VuaXplciksIGZ1bmN0aW9uICh0b2tlbiwgaW5kZXgpIHtcblx0XHRcdHZhciB0eXBlID0gdHlwZU1hcCh0b2tlbiksXG5cdFx0XHRcdGxlbmd0aCA9IHRva2VuLmxlbmd0aDtcblxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0aW5kZXg6IGluZGV4LFxuXHRcdFx0XHRsZW5ndGg6IGxlbmd0aCxcblxuXHRcdFx0XHQvLyByZXBsYWNlIGVzY2FwZWQgdG9rZW5zIHdpdGggdGhlIG5vbi1lc2NhcGVkIHRva2VuIHRleHRcblx0XHRcdFx0dG9rZW46ICh0eXBlID09PSBcImVzY2FwZVwiID8gdG9rZW4ucmVwbGFjZShzZXR0aW5ncy5lc2NhcGUsIFwiJDFcIikgOiB0b2tlbiksXG5cblx0XHRcdFx0Ly8gaWdub3JlIHR5cGUgb24gbm9uLW1vbWVudCB0b2tlbnNcblx0XHRcdFx0dHlwZTogKCh0eXBlID09PSBcImVzY2FwZVwiIHx8IHR5cGUgPT09IFwiZ2VuZXJhbFwiKSA/IG51bGwgOiB0eXBlKVxuXG5cdFx0XHRcdC8vIGNhbGN1bGF0ZSBiYXNlIHZhbHVlIGZvciBhbGwgbW9tZW50IHRva2Vuc1xuXHRcdFx0XHQvL2Jhc2VWYWx1ZTogKCh0eXBlID09PSBcImVzY2FwZVwiIHx8IHR5cGUgPT09IFwiZ2VuZXJhbFwiKSA/IG51bGwgOiB0aGlzLmFzKHR5cGUpKVxuXHRcdFx0fTtcblx0XHR9LCB0aGlzKTtcblxuXHRcdC8vIHVuaXF1ZSBtb21lbnQgdG9rZW4gdHlwZXMgaW4gdGhlIHRlbXBsYXRlIChpbiBvcmRlciBvZiBkZXNjZW5kaW5nIG1hZ25pdHVkZSlcblx0XHRtb21lbnRUeXBlcyA9IGludGVyc2VjdGlvbih0eXBlcywgdW5pcXVlKGNvbXBhY3QocGx1Y2sodG9rZW5zLCBcInR5cGVcIikpKSk7XG5cblx0XHQvLyBleGl0IGVhcmx5IGlmIHRoZXJlIGFyZSBubyBtb21lbnRUeXBlc1xuXHRcdGlmICghbW9tZW50VHlwZXMubGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm4gcGx1Y2sodG9rZW5zLCBcInRva2VuXCIpLmpvaW4oXCJcIik7XG5cdFx0fVxuXG5cdFx0Ly8gY2FsY3VsYXRlIHZhbHVlcyBmb3IgZWFjaCB0b2tlbiB0eXBlIGluIHRoZSB0ZW1wbGF0ZVxuXHRcdGVhY2gobW9tZW50VHlwZXMsIGZ1bmN0aW9uIChtb21lbnRUeXBlLCBpbmRleCkge1xuXHRcdFx0dmFyIHZhbHVlLCB3aG9sZVZhbHVlLCBkZWNpbWFsVmFsdWUsIGlzTGVhc3QsIGlzTW9zdDtcblxuXHRcdFx0Ly8gY2FsY3VsYXRlIGludGVnZXIgYW5kIGRlY2ltYWwgdmFsdWUgcG9ydGlvbnNcblx0XHRcdHZhbHVlID0gcmVtYWluZGVyLmFzKG1vbWVudFR5cGUpO1xuXHRcdFx0d2hvbGVWYWx1ZSA9ICh2YWx1ZSA+IDAgPyBNYXRoLmZsb29yKHZhbHVlKSA6IE1hdGguY2VpbCh2YWx1ZSkpO1xuXHRcdFx0ZGVjaW1hbFZhbHVlID0gdmFsdWUgLSB3aG9sZVZhbHVlO1xuXG5cdFx0XHQvLyBpcyB0aGlzIHRoZSBsZWFzdC1zaWduaWZpY2FudCBtb21lbnQgdG9rZW4gZm91bmQ/XG5cdFx0XHRpc0xlYXN0ID0gKChpbmRleCArIDEpID09PSBtb21lbnRUeXBlcy5sZW5ndGgpO1xuXG5cdFx0XHQvLyBpcyB0aGlzIHRoZSBtb3N0LXNpZ25pZmljYW50IG1vbWVudCB0b2tlbiBmb3VuZD9cblx0XHRcdGlzTW9zdCA9ICghaW5kZXgpO1xuXG5cdFx0XHQvLyB1cGRhdGUgdG9rZW5zIGFycmF5XG5cdFx0XHQvLyB1c2luZyB0aGlzIGFsZ29yaXRobSB0byBub3QgYXNzdW1lIGFueXRoaW5nIGFib3V0XG5cdFx0XHQvLyB0aGUgb3JkZXIgb3IgZnJlcXVlbmN5IG9mIGFueSB0b2tlbnNcblx0XHRcdGVhY2godG9rZW5zLCBmdW5jdGlvbiAodG9rZW4pIHtcblx0XHRcdFx0aWYgKHRva2VuLnR5cGUgPT09IG1vbWVudFR5cGUpIHtcblx0XHRcdFx0XHRleHRlbmQodG9rZW4sIHtcblx0XHRcdFx0XHRcdHZhbHVlOiB2YWx1ZSxcblx0XHRcdFx0XHRcdHdob2xlVmFsdWU6IHdob2xlVmFsdWUsXG5cdFx0XHRcdFx0XHRkZWNpbWFsVmFsdWU6IGRlY2ltYWxWYWx1ZSxcblx0XHRcdFx0XHRcdGlzTGVhc3Q6IGlzTGVhc3QsXG5cdFx0XHRcdFx0XHRpc01vc3Q6IGlzTW9zdFxuXHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdFx0aWYgKGlzTW9zdCkge1xuXHRcdFx0XHRcdFx0Ly8gbm90ZSB0aGUgbGVuZ3RoIG9mIHRoZSBtb3N0LXNpZ25pZmljYW50IG1vbWVudCB0b2tlbjpcblx0XHRcdFx0XHRcdC8vIGlmIGl0IGlzIGdyZWF0ZXIgdGhhbiBvbmUgYW5kIGZvcmNlTGVuZ3RoIGlzIG5vdCBzZXQsIGRlZmF1bHQgZm9yY2VMZW5ndGggdG8gYHRydWVgXG5cdFx0XHRcdFx0XHRpZiAoc2V0dGluZ3MuZm9yY2VMZW5ndGggPT0gbnVsbCAmJiB0b2tlbi5sZW5ndGggPiAxKSB7XG5cdFx0XHRcdFx0XHRcdHNldHRpbmdzLmZvcmNlTGVuZ3RoID0gdHJ1ZTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Ly8gcmF0aW9uYWxlIGlzIHRoaXM6XG5cdFx0XHRcdFx0XHQvLyBpZiB0aGUgdGVtcGxhdGUgaXMgXCJoOm1tOnNzXCIgYW5kIHRoZSBtb21lbnQgdmFsdWUgaXMgNSBtaW51dGVzLCB0aGUgdXNlci1mcmllbmRseSBvdXRwdXQgaXMgXCI1OjAwXCIsIG5vdCBcIjA1OjAwXCJcblx0XHRcdFx0XHRcdC8vIHNob3VsZG4ndCBwYWQgdGhlIGBtaW51dGVzYCB0b2tlbiBldmVuIHRob3VnaCBpdCBoYXMgbGVuZ3RoIG9mIHR3b1xuXHRcdFx0XHRcdFx0Ly8gaWYgdGhlIHRlbXBsYXRlIGlzIFwiaGg6bW06c3NcIiwgdGhlIHVzZXIgY2xlYXJseSB3YW50ZWQgZXZlcnl0aGluZyBwYWRkZWQgc28gd2Ugc2hvdWxkIG91dHB1dCBcIjA1OjAwXCJcblx0XHRcdFx0XHRcdC8vIGlmIHRoZSB1c2VyIHdhbnRlZCB0aGUgZnVsbCBwYWRkZWQgb3V0cHV0LCB0aGV5IGNhbiBzZXQgYHsgdHJpbTogZmFsc2UgfWAgdG8gZ2V0IFwiMDA6MDU6MDBcIlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHRcdC8vIHVwZGF0ZSByZW1haW5kZXJcblx0XHRcdHJlbWFpbmRlci5zdWJ0cmFjdCh3aG9sZVZhbHVlLCBtb21lbnRUeXBlKTtcblx0XHR9KTtcblx0XG5cdFx0Ly8gdHJpbSB0b2tlbnMgYXJyYXlcblx0XHRpZiAoc2V0dGluZ3MudHJpbSkge1xuXHRcdFx0dG9rZW5zID0gKHNldHRpbmdzLnRyaW0gPT09IFwibGVmdFwiID8gcmVzdCA6IGluaXRpYWwpKHRva2VucywgZnVuY3Rpb24gKHRva2VuKSB7XG5cdFx0XHRcdC8vIHJldHVybiBgdHJ1ZWAgaWY6XG5cdFx0XHRcdC8vIHRoZSB0b2tlbiBpcyBub3QgdGhlIGxlYXN0IG1vbWVudCB0b2tlbiAoZG9uJ3QgdHJpbSB0aGUgbGVhc3QgbW9tZW50IHRva2VuKVxuXHRcdFx0XHQvLyB0aGUgdG9rZW4gaXMgYSBtb21lbnQgdG9rZW4gdGhhdCBkb2VzIG5vdCBoYXZlIGEgdmFsdWUgKGRvbid0IHRyaW0gbW9tZW50IHRva2VucyB0aGF0IGhhdmUgYSB3aG9sZSB2YWx1ZSlcblx0XHRcdFx0cmV0dXJuICEodG9rZW4uaXNMZWFzdCB8fCAodG9rZW4udHlwZSAhPSBudWxsICYmIHRva2VuLndob2xlVmFsdWUpKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0XHRcblx0XHRcblx0XHQvLyBidWlsZCBvdXRwdXRcblxuXHRcdC8vIHRoZSBmaXJzdCBtb21lbnQgdG9rZW4gY2FuIGhhdmUgc3BlY2lhbCBoYW5kbGluZ1xuXHRcdGZvdW5kRmlyc3QgPSBmYWxzZTtcblxuXHRcdC8vIHJ1biB0aGUgbWFwIGluIHJldmVyc2Ugb3JkZXIgaWYgdHJpbW1pbmcgZnJvbSB0aGUgcmlnaHRcblx0XHRpZiAoc2V0dGluZ3MudHJpbSA9PT0gXCJyaWdodFwiKSB7XG5cdFx0XHR0b2tlbnMucmV2ZXJzZSgpO1xuXHRcdH1cblxuXHRcdHRva2VucyA9IG1hcCh0b2tlbnMsIGZ1bmN0aW9uICh0b2tlbikge1xuXHRcdFx0dmFyIHZhbCxcblx0XHRcdFx0ZGVjVmFsO1xuXG5cdFx0XHRpZiAoIXRva2VuLnR5cGUpIHtcblx0XHRcdFx0Ly8gaWYgaXQgaXMgbm90IGEgbW9tZW50IHRva2VuLCB1c2UgdGhlIHRva2VuIGFzIGl0cyBvd24gdmFsdWVcblx0XHRcdFx0cmV0dXJuIHRva2VuLnRva2VuO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBhcHBseSBuZWdhdGl2ZSBwcmVjaXNpb24gZm9ybWF0dGluZyB0byB0aGUgbGVhc3Qtc2lnbmlmaWNhbnQgbW9tZW50IHRva2VuXG5cdFx0XHRpZiAodG9rZW4uaXNMZWFzdCAmJiAoc2V0dGluZ3MucHJlY2lzaW9uIDwgMCkpIHtcblx0XHRcdFx0dmFsID0gKE1hdGguZmxvb3IodG9rZW4ud2hvbGVWYWx1ZSAqIE1hdGgucG93KDEwLCBzZXR0aW5ncy5wcmVjaXNpb24pKSAqIE1hdGgucG93KDEwLCAtc2V0dGluZ3MucHJlY2lzaW9uKSkudG9TdHJpbmcoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhbCA9IHRva2VuLndob2xlVmFsdWUudG9TdHJpbmcoKTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0Ly8gcmVtb3ZlIG5lZ2F0aXZlIHNpZ24gZnJvbSB0aGUgYmVnaW5uaW5nXG5cdFx0XHR2YWwgPSB2YWwucmVwbGFjZSgvXlxcLS8sIFwiXCIpO1xuXG5cdFx0XHQvLyBhcHBseSB0b2tlbiBsZW5ndGggZm9ybWF0dGluZ1xuXHRcdFx0Ly8gc3BlY2lhbCBoYW5kbGluZyBmb3IgdGhlIGZpcnN0IG1vbWVudCB0b2tlbiB0aGF0IGlzIG5vdCB0aGUgbW9zdCBzaWduaWZpY2FudCBpbiBhIHRyaW1tZWQgdGVtcGxhdGVcblx0XHRcdGlmICh0b2tlbi5sZW5ndGggPiAxICYmIChmb3VuZEZpcnN0IHx8IHRva2VuLmlzTW9zdCB8fCBzZXR0aW5ncy5mb3JjZUxlbmd0aCkpIHtcblx0XHRcdFx0dmFsID0gcGFkWmVybyh2YWwsIHRva2VuLmxlbmd0aCk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIGFkZCBkZWNpbWFsIHZhbHVlIGlmIHByZWNpc2lvbiA+IDBcblx0XHRcdGlmICh0b2tlbi5pc0xlYXN0ICYmIChzZXR0aW5ncy5wcmVjaXNpb24gPiAwKSkge1xuXHRcdFx0XHRkZWNWYWwgPSB0b2tlbi5kZWNpbWFsVmFsdWUudG9TdHJpbmcoKS5yZXBsYWNlKC9eXFwtLywgXCJcIikuc3BsaXQoL1xcLnxlXFwtLyk7XG5cdFx0XHRcdHN3aXRjaCAoZGVjVmFsLmxlbmd0aCkge1xuXHRcdFx0XHRcdGNhc2UgMTpcblx0XHRcdFx0XHRcdHZhbCArPSBcIi5cIiArIHBhZFplcm8oZGVjVmFsWzBdLCBzZXR0aW5ncy5wcmVjaXNpb24sIHRydWUpLnNsaWNlKDAsIHNldHRpbmdzLnByZWNpc2lvbik7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdGNhc2UgMjpcblx0XHRcdFx0XHRcdHZhbCArPSBcIi5cIiArIHBhZFplcm8oZGVjVmFsWzFdLCBzZXR0aW5ncy5wcmVjaXNpb24sIHRydWUpLnNsaWNlKDAsIHNldHRpbmdzLnByZWNpc2lvbik7XHRcdFxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRjYXNlIDM6XG5cdFx0XHRcdFx0XHR2YWwgKz0gXCIuXCIgKyBwYWRaZXJvKHJlcGVhdFplcm8oKCtkZWNWYWxbMl0pIC0gMSkgKyAoZGVjVmFsWzBdIHx8IFwiMFwiKSArIGRlY1ZhbFsxXSwgc2V0dGluZ3MucHJlY2lzaW9uLCB0cnVlKS5zbGljZSgwLCBzZXR0aW5ncy5wcmVjaXNpb24pO1x0XHRcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHR0aHJvdyBcIk1vbWVudCBEdXJhdGlvbiBGb3JtYXQ6IHVuYWJsZSB0byBwYXJzZSB0b2tlbiBkZWNpbWFsIHZhbHVlLlwiO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdC8vIGFkZCBhIG5lZ2F0aXZlIHNpZ24gaWYgdGhlIHZhbHVlIGlzIG5lZ2F0aXZlIGFuZCB0b2tlbiBpcyBtb3N0IHNpZ25pZmljYW50XG5cdFx0XHRpZiAodG9rZW4uaXNNb3N0ICYmIHRva2VuLnZhbHVlIDwgMCkge1xuXHRcdFx0XHR2YWwgPSBcIi1cIiArIHZhbDtcblx0XHRcdH1cblxuXHRcdFx0Zm91bmRGaXJzdCA9IHRydWU7XG5cblx0XHRcdHJldHVybiB2YWw7XG5cdFx0fSk7XG5cblx0XHQvLyB1bmRvIHRoZSByZXZlcnNlIGlmIHRyaW1taW5nIGZyb20gdGhlIHJpZ2h0XG5cdFx0aWYgKHNldHRpbmdzLnRyaW0gPT09IFwicmlnaHRcIikge1xuXHRcdFx0dG9rZW5zLnJldmVyc2UoKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdG9rZW5zLmpvaW4oXCJcIik7XG5cdH07XG5cblx0bW9tZW50LmR1cmF0aW9uLmZuLmZvcm1hdC5kZWZhdWx0cyA9IHtcblx0XHQvLyB0b2tlbiBkZWZpbml0aW9uc1xuXHRcdGVzY2FwZTogL1xcWyguKz8pXFxdLyxcblx0XHR5ZWFyczogL1tZeV0rLyxcblx0XHRtb250aHM6IC9NKy8sXG5cdFx0d2Vla3M6IC9bV3ddKy8sXG5cdFx0ZGF5czogL1tEZF0rLyxcblx0XHRob3VyczogL1tIaF0rLyxcblx0XHRtaW51dGVzOiAvbSsvLFxuXHRcdHNlY29uZHM6IC9zKy8sXG5cdFx0bWlsbGlzZWNvbmRzOiAvUysvLFxuXHRcdGdlbmVyYWw6IC8uKz8vLFxuXG5cdFx0Ly8gdG9rZW4gdHlwZSBuYW1lc1xuXHRcdC8vIGluIG9yZGVyIG9mIGRlc2NlbmRpbmcgbWFnbml0dWRlXG5cdFx0Ly8gY2FuIGJlIGEgc3BhY2Utc2VwYXJhdGVkIHRva2VuIG5hbWUgbGlzdCBvciBhbiBhcnJheSBvZiB0b2tlbiBuYW1lc1xuXHRcdHR5cGVzOiBcImVzY2FwZSB5ZWFycyBtb250aHMgd2Vla3MgZGF5cyBob3VycyBtaW51dGVzIHNlY29uZHMgbWlsbGlzZWNvbmRzIGdlbmVyYWxcIixcblxuXHRcdC8vIGZvcm1hdCBvcHRpb25zXG5cblx0XHQvLyB0cmltXG5cdFx0Ly8gXCJsZWZ0XCIgLSB0ZW1wbGF0ZSB0b2tlbnMgYXJlIHRyaW1tZWQgZnJvbSB0aGUgbGVmdCB1bnRpbCB0aGUgZmlyc3QgbW9tZW50IHRva2VuIHRoYXQgaGFzIGEgdmFsdWUgPj0gMVxuXHRcdC8vIFwicmlnaHRcIiAtIHRlbXBsYXRlIHRva2VucyBhcmUgdHJpbW1lZCBmcm9tIHRoZSByaWdodCB1bnRpbCB0aGUgZmlyc3QgbW9tZW50IHRva2VuIHRoYXQgaGFzIGEgdmFsdWUgPj0gMVxuXHRcdC8vICh0aGUgZmluYWwgbW9tZW50IHRva2VuIGlzIG5vdCB0cmltbWVkLCByZWdhcmRsZXNzIG9mIHZhbHVlKVxuXHRcdC8vIGBmYWxzZWAgLSB0ZW1wbGF0ZSB0b2tlbnMgYXJlIG5vdCB0cmltbWVkXG5cdFx0dHJpbTogXCJsZWZ0XCIsXG5cblx0XHQvLyBwcmVjaXNpb25cblx0XHQvLyBudW1iZXIgb2YgZGVjaW1hbCBkaWdpdHMgdG8gaW5jbHVkZSBhZnRlciAodG8gdGhlIHJpZ2h0IG9mKSB0aGUgZGVjaW1hbCBwb2ludCAocG9zaXRpdmUgaW50ZWdlcilcblx0XHQvLyBvciB0aGUgbnVtYmVyIG9mIGRpZ2l0cyB0byB0cnVuY2F0ZSB0byAwIGJlZm9yZSAodG8gdGhlIGxlZnQgb2YpIHRoZSBkZWNpbWFsIHBvaW50IChuZWdhdGl2ZSBpbnRlZ2VyKVxuXHRcdHByZWNpc2lvbjogMCxcblxuXHRcdC8vIGZvcmNlIGZpcnN0IG1vbWVudCB0b2tlbiB3aXRoIGEgdmFsdWUgdG8gcmVuZGVyIGF0IGZ1bGwgbGVuZ3RoIGV2ZW4gd2hlbiB0ZW1wbGF0ZSBpcyB0cmltbWVkIGFuZCBmaXJzdCBtb21lbnQgdG9rZW4gaGFzIGxlbmd0aCBvZiAxXG5cdFx0Zm9yY2VMZW5ndGg6IG51bGwsXG5cblx0XHQvLyB0ZW1wbGF0ZSB1c2VkIHRvIGZvcm1hdCBkdXJhdGlvblxuXHRcdC8vIG1heSBiZSBhIGZ1bmN0aW9uIG9yIGEgc3RyaW5nXG5cdFx0Ly8gdGVtcGxhdGUgZnVuY3Rpb25zIGFyZSBleGVjdXRlZCB3aXRoIHRoZSBgdGhpc2AgYmluZGluZyBvZiB0aGUgc2V0dGluZ3Mgb2JqZWN0XG5cdFx0Ly8gc28gdGhhdCB0ZW1wbGF0ZSBzdHJpbmdzIG1heSBiZSBkeW5hbWljYWxseSBnZW5lcmF0ZWQgYmFzZWQgb24gdGhlIGR1cmF0aW9uIG9iamVjdFxuXHRcdC8vIChhY2Nlc3NpYmxlIHZpYSBgdGhpcy5kdXJhdGlvbmApXG5cdFx0Ly8gb3IgYW55IG9mIHRoZSBvdGhlciBzZXR0aW5nc1xuXHRcdHRlbXBsYXRlOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHR2YXIgdHlwZXMgPSB0aGlzLnR5cGVzLFxuXHRcdFx0XHRkdXIgPSB0aGlzLmR1cmF0aW9uLFxuXHRcdFx0XHRsYXN0VHlwZSA9IGZpbmRMYXN0KHR5cGVzLCBmdW5jdGlvbiAodHlwZSkge1xuXHRcdFx0XHRcdHJldHVybiBkdXIuX2RhdGFbdHlwZV07XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHQvLyBkZWZhdWx0IHRlbXBsYXRlIHN0cmluZ3MgZm9yIGVhY2ggZHVyYXRpb24gZGltZW5zaW9uIHR5cGVcblx0XHRcdHN3aXRjaCAobGFzdFR5cGUpIHtcblx0XHRcdFx0Y2FzZSBcInNlY29uZHNcIjpcblx0XHRcdFx0XHRyZXR1cm4gXCJoOm1tOnNzXCI7XG5cdFx0XHRcdGNhc2UgXCJtaW51dGVzXCI6XG5cdFx0XHRcdFx0cmV0dXJuIFwiZFtkXSBoOm1tXCI7XG5cdFx0XHRcdGNhc2UgXCJob3Vyc1wiOlxuXHRcdFx0XHRcdHJldHVybiBcImRbZF0gaFtoXVwiO1xuXHRcdFx0XHRjYXNlIFwiZGF5c1wiOlxuXHRcdFx0XHRcdHJldHVybiBcIk1bbV0gZFtkXVwiO1xuXHRcdFx0XHRjYXNlIFwid2Vla3NcIjpcblx0XHRcdFx0XHRyZXR1cm4gXCJ5W3ldIHdbd11cIjtcblx0XHRcdFx0Y2FzZSBcIm1vbnRoc1wiOlxuXHRcdFx0XHRcdHJldHVybiBcInlbeV0gTVttXVwiO1xuXHRcdFx0XHRjYXNlIFwieWVhcnNcIjpcblx0XHRcdFx0XHRyZXR1cm4gXCJ5W3ldXCI7XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0cmV0dXJuIFwieVt5XSBNW21dIGRbZF0gaDptbTpzc1wiO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblxufSkodGhpcyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbW9tZW50LWR1cmF0aW9uLWZvcm1hdC9saWIvbW9tZW50LWR1cmF0aW9uLWZvcm1hdC5qc1xuLy8gbW9kdWxlIGlkID0gNjU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMiJdLCJzb3VyY2VSb290IjoiIn0=