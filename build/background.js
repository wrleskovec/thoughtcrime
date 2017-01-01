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
	
	var _moment = __webpack_require__(314);
	
	var _moment2 = _interopRequireDefault(_moment);
	
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
	function checkSchedule() {
	  return _blockList2.default.getSchedule().then(function (schedule) {
	    var now = (0, _moment2.default)();
	    var dayOfWeek = now.day();
	    // moment.js starts with sunday as first day of week
	    var convertedDay = dayOfWeek === 6 ? 0 : dayOfWeek + 1;
	    var currentHour = now.get('hour');
	    var currentMinute = now.get('minute');
	    var currentQuarter = currentHour * 4 + Math.ceil(currentMinute / 15);
	    return schedule.items[convertedDay][currentQuarter].event;
	  });
	}
	function handleAction(action, details) {
	  return checkSchedule().then(function (event) {
	    switch (event) {
	      case 'Block All':
	        {
	          if (action === 'block') {
	            loadFilteredPage(details.tabId, BLOCKED_PAGE);
	          } else if (action === 'limit') {
	            loadFilteredPage(details.tabId, BLOCKED_PAGE);
	          }
	          break;
	        }
	      case 'Accept All':
	        break;
	      default:
	        {
	          if (action === 'block') {
	            loadFilteredPage(details.tabId, BLOCKED_PAGE);
	          } else if (action === 'limit') {
	            loadFilteredPage(details.tabId, BLOCKED_PAGE);
	          }
	          break;
	        }
	    }
	  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGltZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9tb21lbnQtZHVyYXRpb24tZm9ybWF0L2xpYi9tb21lbnQtZHVyYXRpb24tZm9ybWF0LmpzIl0sIm5hbWVzIjpbImluaXQiLCJ0aGVuIiwiQkxPQ0tFRF9QQUdFIiwibG9hZEZpbHRlcmVkUGFnZSIsInRhYklkIiwidXJsIiwic2V0VGltZW91dCIsImNocm9tZSIsInRhYnMiLCJ1cGRhdGUiLCJjaGVja1NjaGVkdWxlIiwiZ2V0U2NoZWR1bGUiLCJzY2hlZHVsZSIsIm5vdyIsImRheU9mV2VlayIsImRheSIsImNvbnZlcnRlZERheSIsImN1cnJlbnRIb3VyIiwiZ2V0IiwiY3VycmVudE1pbnV0ZSIsImN1cnJlbnRRdWFydGVyIiwiTWF0aCIsImNlaWwiLCJpdGVtcyIsImV2ZW50IiwiaGFuZGxlQWN0aW9uIiwiYWN0aW9uIiwiZGV0YWlscyIsIm1hdGNoUGF0dGVybnMiLCJnZXRSZWdleFBhdHRlcm5zIiwicGF0dGVybnMiLCJ1bmRlZmluZWQiLCJsZW5ndGgiLCJmaW5kIiwicmVnIiwiUmVnRXhwIiwicmVnZXgiLCJ0ZXN0IiwidXJsQ2hlY2siLCJwcm90b2NvbCIsInNpdGUiLCJnZXRSZWNvcmQiLCJhY2xNYXRjaCIsInJlY29yZCIsImFkdkFjdGlvbiIsInBhdHRlcm5NYXRjaCIsImNhdGNoIiwid2ViUmVxdWVzdCIsIm9uQmVmb3JlUmVxdWVzdCIsImFkZExpc3RlbmVyIiwidXJscyIsInR5cGVzIiwiVGltZXIiLCJjdXJyZW50U2l0ZSIsImN1cnJlbnRUYWIiLCJwb3B1cCIsInN0YXJ0VGltZSIsIm5ld0RheVRpbWVyIiwic2V0TmV3RGF5VGltZXIiLCJ3aW5kb3dzIiwiZ2V0QWxsIiwicG9wdWxhdGUiLCJmb3JFYWNoIiwid2luIiwidGFiIiwiaXNWYWxpZFByb3RvY29sIiwiZXhlY3V0ZVNjcmlwdCIsImlkIiwiZmlsZSIsInJ1bnRpbWUiLCJvbk1lc3NhZ2UiLCJyZXF1ZXN0Iiwic2VuZGVyIiwic2VuZFJlc3BvbnNlIiwiZm9jdXMiLCJzZW5kZXJTaXRlIiwic2F2ZVJlY29yZHMiLCJ0aW1lciIsInNlY29uZHMiLCJnZXREdXJhdGlvbiIsIm9uVXBkYXRlZCIsImNoYW5nZUluZm8iLCJ0YWJTaXRlIiwiY29uc29sZSIsImxvZyIsInZhbGlkVXJsIiwidG9tb3Jyb3ciLCJhZGQiLCJzdGFydE9mIiwiaW5pdE5ld0RhdGUiLCJkaWZmIiwiZHVyYXRpb24iLCJhc1NlY29uZHMiLCJyZWNvbmNpbGVSZWNvcmRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLHFCQUFHQSxJQUFILEdBQVVDLElBQVYsQ0FBZSxZQUFNO0FBQ25CLG1CQUFNRCxJQUFOO0FBQ0QsRUFGRDs7QUFJQSxLQUFNRSxlQUFlLG1DQUFyQjs7QUFFQSxVQUFTQyxnQkFBVCxDQUEwQkMsS0FBMUIsRUFBaUNDLEdBQWpDLEVBQXNDO0FBQ3BDQyxjQUFXLFlBQU07QUFDZkMsWUFBT0MsSUFBUCxDQUFZQyxNQUFaLENBQW1CTCxLQUFuQixFQUEwQixFQUFFQyxRQUFGLEVBQTFCO0FBQ0QsSUFGRCxFQUVHLEdBRkg7QUFHRDtBQUNELFVBQVNLLGFBQVQsR0FBeUI7QUFDdkIsVUFBTyxvQkFBR0MsV0FBSCxHQUNKVixJQURJLENBQ0MsVUFBQ1csUUFBRCxFQUFjO0FBQ2xCLFNBQU1DLE1BQU0sdUJBQVo7QUFDQSxTQUFNQyxZQUFZRCxJQUFJRSxHQUFKLEVBQWxCO0FBQ0E7QUFDQSxTQUFNQyxlQUFnQkYsY0FBYyxDQUFmLEdBQW9CLENBQXBCLEdBQXdCQSxZQUFZLENBQXpEO0FBQ0EsU0FBTUcsY0FBY0osSUFBSUssR0FBSixDQUFRLE1BQVIsQ0FBcEI7QUFDQSxTQUFNQyxnQkFBZ0JOLElBQUlLLEdBQUosQ0FBUSxRQUFSLENBQXRCO0FBQ0EsU0FBTUUsaUJBQWlCSCxjQUFjLENBQWQsR0FB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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4RjtBQUNBOztBQUVBO0FBQ0Esa0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEVBQUMiLCJmaWxlIjoiYmFja2dyb3VuZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3dXJsIGZyb20gJ3d1cmwnO1xuaW1wb3J0IEJMIGZyb20gJy4vYmxvY2tMaXN0LmpzJztcbmltcG9ydCBUaW1lciBmcm9tICcuL3RpbWVyLmpzJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcblxuQkwuaW5pdCgpLnRoZW4oKCkgPT4ge1xuICBUaW1lci5pbml0KCk7XG59KTtcblxuY29uc3QgQkxPQ0tFRF9QQUdFID0gJ2h0dHBzOi8vd3d3LmdpdGh1Yi5jb20vd3JsZXNrb3ZlYyc7XG5cbmZ1bmN0aW9uIGxvYWRGaWx0ZXJlZFBhZ2UodGFiSWQsIHVybCkge1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBjaHJvbWUudGFicy51cGRhdGUodGFiSWQsIHsgdXJsIH0pO1xuICB9LCA1MDApO1xufVxuZnVuY3Rpb24gY2hlY2tTY2hlZHVsZSgpIHtcbiAgcmV0dXJuIEJMLmdldFNjaGVkdWxlKClcbiAgICAudGhlbigoc2NoZWR1bGUpID0+IHtcbiAgICAgIGNvbnN0IG5vdyA9IG1vbWVudCgpO1xuICAgICAgY29uc3QgZGF5T2ZXZWVrID0gbm93LmRheSgpO1xuICAgICAgLy8gbW9tZW50LmpzIHN0YXJ0cyB3aXRoIHN1bmRheSBhcyBmaXJzdCBkYXkgb2Ygd2Vla1xuICAgICAgY29uc3QgY29udmVydGVkRGF5ID0gKGRheU9mV2VlayA9PT0gNikgPyAwIDogZGF5T2ZXZWVrICsgMTtcbiAgICAgIGNvbnN0IGN1cnJlbnRIb3VyID0gbm93LmdldCgnaG91cicpO1xuICAgICAgY29uc3QgY3VycmVudE1pbnV0ZSA9IG5vdy5nZXQoJ21pbnV0ZScpO1xuICAgICAgY29uc3QgY3VycmVudFF1YXJ0ZXIgPSBjdXJyZW50SG91ciAqIDQgKyBNYXRoLmNlaWwoY3VycmVudE1pbnV0ZSAvIDE1KTtcbiAgICAgIHJldHVybiBzY2hlZHVsZS5pdGVtc1tjb252ZXJ0ZWREYXldW2N1cnJlbnRRdWFydGVyXS5ldmVudDtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGhhbmRsZUFjdGlvbihhY3Rpb24sIGRldGFpbHMpIHtcbiAgcmV0dXJuIGNoZWNrU2NoZWR1bGUoKVxuICAgIC50aGVuKChldmVudCkgPT4ge1xuICAgICAgc3dpdGNoIChldmVudCkge1xuICAgICAgICBjYXNlICdCbG9jayBBbGwnOiB7XG4gICAgICAgICAgaWYgKGFjdGlvbiA9PT0gJ2Jsb2NrJykge1xuICAgICAgICAgICAgbG9hZEZpbHRlcmVkUGFnZShkZXRhaWxzLnRhYklkLCBCTE9DS0VEX1BBR0UpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoYWN0aW9uID09PSAnbGltaXQnKSB7XG4gICAgICAgICAgICBsb2FkRmlsdGVyZWRQYWdlKGRldGFpbHMudGFiSWQsIEJMT0NLRURfUEFHRSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgJ0FjY2VwdCBBbGwnOlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgaWYgKGFjdGlvbiA9PT0gJ2Jsb2NrJykge1xuICAgICAgICAgICAgbG9hZEZpbHRlcmVkUGFnZShkZXRhaWxzLnRhYklkLCBCTE9DS0VEX1BBR0UpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoYWN0aW9uID09PSAnbGltaXQnKSB7XG4gICAgICAgICAgICBsb2FkRmlsdGVyZWRQYWdlKGRldGFpbHMudGFiSWQsIEJMT0NLRURfUEFHRSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG59XG5mdW5jdGlvbiBtYXRjaFBhdHRlcm5zKGRldGFpbHMpIHtcbiAgcmV0dXJuIEJMLmdldFJlZ2V4UGF0dGVybnMoKVxuICAgIC50aGVuKHBhdHRlcm5zID0+IHtcbiAgICAgIGlmIChwYXR0ZXJucyAhPT0gdW5kZWZpbmVkICYmIHBhdHRlcm5zLml0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuIHBhdHRlcm5zLml0ZW1zLmZpbmQoYWN0aW9uID0+IHtcbiAgICAgICAgICBjb25zdCByZWcgPSBuZXcgUmVnRXhwKGFjdGlvbi5yZWdleCwgJ2knKTtcbiAgICAgICAgICByZXR1cm4gcmVnLnRlc3QoZGV0YWlscy51cmwpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfSk7XG59XG5cblxuZnVuY3Rpb24gdXJsQ2hlY2soZGV0YWlscykge1xuICBjb25zdCBwcm90b2NvbCA9IHd1cmwoJ3Byb3RvY29sJywgZGV0YWlscy51cmwpO1xuICBpZiAocHJvdG9jb2wgIT09ICdjaHJvbWUnICYmIHByb3RvY29sICE9PSAnY2hyb21lLWV4dGVuc2lvbicpIHtcbiAgICBjb25zdCBzaXRlID0gd3VybCgnZG9tYWluJywgZGV0YWlscy51cmwpO1xuICAgIEJMLmdldFJlY29yZChzaXRlKVxuICAgICAgLnRoZW4ocmVjb3JkID0+IHtcbiAgICAgICAgY29uc3QgYWNsTWF0Y2ggPSByZWNvcmQuYWR2QWN0aW9uLmZpbmQoYWN0aW9uID0+IHtcbiAgICAgICAgICBjb25zdCByZWcgPSBuZXcgUmVnRXhwKGFjdGlvbi5yZWdleCwgJ2knKTtcbiAgICAgICAgICByZXR1cm4gcmVnLnRlc3QoZGV0YWlscy51cmwpO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGFjbE1hdGNoKSB7XG4gICAgICAgICAgaGFuZGxlQWN0aW9uKGFjbE1hdGNoLmFjdGlvbiwgZGV0YWlscyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbWF0Y2hQYXR0ZXJucyhkZXRhaWxzKVxuICAgICAgICAgICAgLnRoZW4ocGF0dGVybk1hdGNoID0+IHtcbiAgICAgICAgICAgICAgaWYgKHBhdHRlcm5NYXRjaCkge1xuICAgICAgICAgICAgICAgIGhhbmRsZUFjdGlvbihwYXR0ZXJuTWF0Y2guYWN0aW9uLCBkZXRhaWxzKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVBY3Rpb24ocmVjb3JkLmFjdGlvbiwgZGV0YWlscyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgbWF0Y2hQYXR0ZXJucyhkZXRhaWxzKVxuICAgICAgICAgIC50aGVuKHBhdHRlcm5NYXRjaCA9PiB7XG4gICAgICAgICAgICBpZiAocGF0dGVybk1hdGNoKSBoYW5kbGVBY3Rpb24ocGF0dGVybk1hdGNoLmFjdGlvbiwgZGV0YWlscyk7XG4gICAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfVxuICByZXR1cm4ge307XG59XG5cbmNocm9tZS53ZWJSZXF1ZXN0Lm9uQmVmb3JlUmVxdWVzdC5hZGRMaXN0ZW5lcih1cmxDaGVjaywge1xuICB1cmxzOiBbJzxhbGxfdXJscz4nXSxcbiAgdHlwZXM6IFsnbWFpbl9mcmFtZSddXG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9iYWNrZ3JvdW5kLmpzIiwiaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0ICdtb21lbnQtZHVyYXRpb24tZm9ybWF0JztcbmltcG9ydCBCTCBmcm9tICcuL2Jsb2NrTGlzdC5qcyc7XG5pbXBvcnQgd3VybCBmcm9tICd3dXJsJztcblxuY2xhc3MgVGltZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmN1cnJlbnRTaXRlID0gbnVsbDtcbiAgICB0aGlzLmN1cnJlbnRUYWIgPSBudWxsO1xuICAgIHRoaXMucG9wdXAgPSBmYWxzZTtcbiAgICB0aGlzLnN0YXJ0VGltZSA9IG51bGw7XG4gICAgdGhpcy5uZXdEYXlUaW1lciA9IHRoaXMuc2V0TmV3RGF5VGltZXIoKTtcbiAgfVxuICBpbml0KCkge1xuICAgIGNocm9tZS53aW5kb3dzLmdldEFsbCh7IHBvcHVsYXRlOiB0cnVlIH0sICh3aW5kb3dzKSA9PiB7XG4gICAgICB3aW5kb3dzLmZvckVhY2goKHdpbikgPT4ge1xuICAgICAgICB3aW4udGFicy5mb3JFYWNoKCh0YWIpID0+IHtcbiAgICAgICAgICBpZiAodGhpcy5pc1ZhbGlkUHJvdG9jb2wodGFiLnVybCkpIHtcbiAgICAgICAgICAgIGNocm9tZS50YWJzLmV4ZWN1dGVTY3JpcHQodGFiLmlkLCB7IGZpbGU6ICdjb250ZW50LmpzJyB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKChyZXF1ZXN0LCBzZW5kZXIsIHNlbmRSZXNwb25zZSkgPT4ge1xuICAgICAgaWYgKHJlcXVlc3QuZm9jdXMpIHtcbiAgICAgICAgY29uc3Qgc2VuZGVyU2l0ZSA9IHd1cmwoJ2RvbWFpbicsIHNlbmRlci50YWIudXJsKTtcbiAgICAgICAgaWYgKHJlcXVlc3QuZm9jdXMgPT09ICdmb2N1cycgJiYgc2VuZGVyU2l0ZSAhPT0gdGhpcy5jdXJyZW50U2l0ZSAmJiBzZW5kZXJTaXRlXG4gICAgICAgICAmJiBzZW5kZXIudGFiLmlkICE9PSB0aGlzLmN1cnJlbnRUYWIgJiYgdGhpcy5pc1ZhbGlkUHJvdG9jb2woc2VuZGVyU2l0ZSkpIHtcbiAgICAgICAgICB0aGlzLnBvcHVwID0gZmFsc2U7XG4gICAgICAgICAgaWYgKHRoaXMuY3VycmVudFNpdGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuc2F2ZVJlY29yZHMoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5jdXJyZW50VGFiID0gc2VuZGVyLnRhYi5pZDtcbiAgICAgICAgICB0aGlzLmN1cnJlbnRTaXRlID0gc2VuZGVyU2l0ZTtcbiAgICAgICAgICB0aGlzLnN0YXJ0VGltZSA9IG1vbWVudCgpO1xuICAgICAgICB9IGVsc2UgaWYgKHJlcXVlc3QuZm9jdXMgPT09ICdibHVyJykge1xuICAgICAgICAgIGlmIChzZW5kZXIudGFiLmlkID09PSB0aGlzLmN1cnJlbnRUYWIgJiYgc2VuZGVyU2l0ZSAmJiAhdGhpcy5wb3B1cCkge1xuICAgICAgICAgICAgdGhpcy5zYXZlUmVjb3JkcygpO1xuICAgICAgICAgICAgdGhpcy5zdGFydFRpbWUgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50U2l0ZSA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRUYWIgPSBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHJlcXVlc3QudGltZXIgPT09ICdwb3B1cCcpIHtcbiAgICAgICAgdGhpcy5wb3B1cCA9IHRydWU7XG4gICAgICAgIHNlbmRSZXNwb25zZSh7IHNlY29uZHM6IHRoaXMuZ2V0RHVyYXRpb24oKSB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBjaHJvbWUudGFicy5vblVwZGF0ZWQuYWRkTGlzdGVuZXIoKHRhYklkLCBjaGFuZ2VJbmZvLCB0YWIpID0+IHtcbiAgICAgIGNvbnN0IHRhYlNpdGUgPSB3dXJsKCdkb21haW4nLCB0YWIudXJsKTtcbiAgICAgIGNvbnNvbGUubG9nKGBjdXJyZW50U2l0ZTogJHt0aGlzLmN1cnJlbnRTaXRlfSwgdGFiOiAke3RhYlNpdGV9YCk7XG4gICAgICBjb25zdCB2YWxpZFVybCA9IHRhYlNpdGUgIT09IHRoaXMuY3VycmVudFNpdGUgJiYgdGhpcy5pc1ZhbGlkUHJvdG9jb2wodGFiLnVybCk7XG4gICAgICBpZiAodmFsaWRVcmwpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50U2l0ZSA9IHRhYlNpdGU7XG4gICAgICAgIHRoaXMuY3VycmVudFRhYiA9IHRhYi5pZDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBzZXROZXdEYXlUaW1lcigpIHtcbiAgICBjb25zdCB0b21vcnJvdyA9IG1vbWVudCgpLmFkZCgxLCAnZGF5cycpLnN0YXJ0T2YoJ2RheScpO1xuICAgIHJldHVybiBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuc2F2ZVJlY29yZHMoKVxuICAgICAgICAudGhlbigoKSA9PiBCTC5pbml0TmV3RGF0ZSgpKTtcbiAgICB9LCB0b21vcnJvdy5kaWZmKG1vbWVudCgpKSk7XG4gIH1cbiAgaXNWYWxpZFByb3RvY29sKHVybCkge1xuICAgIGNvbnN0IHByb3RvY29sID0gd3VybCgncHJvdG9jb2wnLCB1cmwpO1xuICAgIHJldHVybiAoXG4gICAgICBwcm90b2NvbCA9PT0gJ2h0dHAnIHx8IHByb3RvY29sID09PSAnaHR0cHMnIHx8IHByb3RvY29sID09PSAnZnRwJ1xuICAgICk7XG4gIH1cbiAgZ2V0RHVyYXRpb24oKSB7XG4gICAgcmV0dXJuIG1vbWVudC5kdXJhdGlvbihtb21lbnQoKS5kaWZmKHRoaXMuc3RhcnRUaW1lKSkuYXNTZWNvbmRzKCk7XG4gIH1cbiAgc2F2ZVJlY29yZHMoKSB7XG4gICAgcmV0dXJuIEJMLnJlY29uY2lsZVJlY29yZHModGhpcy5jdXJyZW50U2l0ZSwgdGhpcy5nZXREdXJhdGlvbigpLCAxKVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLnN0YXJ0VGltZSA9IG1vbWVudCgpO1xuICAgICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFRpbWVyKCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdGltZXIuanMiLCIvKiEgTW9tZW50IER1cmF0aW9uIEZvcm1hdCB2MS4zLjBcbiAqICBodHRwczovL2dpdGh1Yi5jb20vanNtcmVlc2UvbW9tZW50LWR1cmF0aW9uLWZvcm1hdCBcbiAqICBEYXRlOiAyMDE0LTA3LTE1XG4gKlxuICogIER1cmF0aW9uIGZvcm1hdCBwbHVnaW4gZnVuY3Rpb24gZm9yIHRoZSBNb21lbnQuanMgbGlicmFyeVxuICogIGh0dHA6Ly9tb21lbnRqcy5jb20vXG4gKlxuICogIENvcHlyaWdodCAyMDE0IEpvaG4gTWFkaGF2YW4tUmVlc2VcbiAqICBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiAqL1xuXG4oZnVuY3Rpb24gKHJvb3QsIHVuZGVmaW5lZCkge1xuXG5cdC8vIHJlcGVhdFplcm8ocXR5KVxuXHQvLyByZXR1cm5zIFwiMFwiIHJlcGVhdGVkIHF0eSB0aW1lc1xuXHRmdW5jdGlvbiByZXBlYXRaZXJvKHF0eSkge1xuXHRcdHZhciByZXN1bHQgPSBcIlwiO1xuXHRcdFxuXHRcdC8vIGV4aXQgZWFybHlcblx0XHQvLyBpZiBxdHkgaXMgMCBvciBhIG5lZ2F0aXZlIG51bWJlclxuXHRcdC8vIG9yIGRvZXNuJ3QgY29lcmNlIHRvIGFuIGludGVnZXJcblx0XHRxdHkgPSBwYXJzZUludChxdHksIDEwKTtcblx0XHRpZiAoIXF0eSB8fCBxdHkgPCAxKSB7IHJldHVybiByZXN1bHQ7IH1cblx0XHRcblx0XHR3aGlsZSAocXR5KSB7XG5cdFx0XHRyZXN1bHQgKz0gXCIwXCI7XG5cdFx0XHRxdHkgLT0gMTtcblx0XHR9XG5cdFx0XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXHRcblx0Ly8gcGFkWmVybyhzdHIsIGxlbiBbLCBpc1JpZ2h0XSlcblx0Ly8gcGFkcyBhIHN0cmluZyB3aXRoIHplcm9zIHVwIHRvIGEgc3BlY2lmaWVkIGxlbmd0aFxuXHQvLyB3aWxsIG5vdCBwYWQgYSBzdHJpbmcgaWYgaXRzIGxlbmd0aCBpcyBhcmVhZHlcblx0Ly8gZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvIHRoZSBzcGVjaWZpZWQgbGVuZ3RoXG5cdC8vIGRlZmF1bHQgb3V0cHV0IHBhZHMgd2l0aCB6ZXJvcyBvbiB0aGUgbGVmdFxuXHQvLyBzZXQgaXNSaWdodCB0byBgdHJ1ZWAgdG8gcGFkIHdpdGggemVyb3Mgb24gdGhlIHJpZ2h0XG5cdGZ1bmN0aW9uIHBhZFplcm8oc3RyLCBsZW4sIGlzUmlnaHQpIHtcblx0XHRpZiAoc3RyID09IG51bGwpIHsgc3RyID0gXCJcIjsgfVxuXHRcdHN0ciA9IFwiXCIgKyBzdHI7XG5cdFx0XG5cdFx0cmV0dXJuIChpc1JpZ2h0ID8gc3RyIDogXCJcIikgKyByZXBlYXRaZXJvKGxlbiAtIHN0ci5sZW5ndGgpICsgKGlzUmlnaHQgPyBcIlwiIDogc3RyKTtcblx0fVxuXHRcblx0Ly8gaXNBcnJheVxuXHRmdW5jdGlvbiBpc0FycmF5KGFycmF5KSB7XG5cdFx0cmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcnJheSkgPT09IFwiW29iamVjdCBBcnJheV1cIjtcblx0fVxuXHRcblx0Ly8gaXNPYmplY3Rcblx0ZnVuY3Rpb24gaXNPYmplY3Qob2JqKSB7XG5cdFx0cmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopID09PSBcIltvYmplY3QgT2JqZWN0XVwiO1xuXHR9XG5cdFxuXHQvLyBmaW5kTGFzdFxuXHRmdW5jdGlvbiBmaW5kTGFzdChhcnJheSwgY2FsbGJhY2spIHtcblx0XHR2YXIgaW5kZXggPSBhcnJheS5sZW5ndGg7XG5cblx0XHR3aGlsZSAoaW5kZXggLT0gMSkge1xuXHRcdFx0aWYgKGNhbGxiYWNrKGFycmF5W2luZGV4XSkpIHsgcmV0dXJuIGFycmF5W2luZGV4XTsgfVxuXHRcdH1cblx0fVxuXG5cdC8vIGZpbmRcblx0ZnVuY3Rpb24gZmluZChhcnJheSwgY2FsbGJhY2spIHtcblx0XHR2YXIgaW5kZXggPSAwLFxuXHRcdFx0bWF4ID0gYXJyYXkubGVuZ3RoLFxuXHRcdFx0bWF0Y2g7XG5cdFx0XHRcblx0XHRpZiAodHlwZW9mIGNhbGxiYWNrICE9PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdG1hdGNoID0gY2FsbGJhY2s7XG5cdFx0XHRjYWxsYmFjayA9IGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHRcdHJldHVybiBpdGVtID09PSBtYXRjaDtcblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0d2hpbGUgKGluZGV4IDwgbWF4KSB7XG5cdFx0XHRpZiAoY2FsbGJhY2soYXJyYXlbaW5kZXhdKSkgeyByZXR1cm4gYXJyYXlbaW5kZXhdOyB9XG5cdFx0XHRpbmRleCArPSAxO1xuXHRcdH1cblx0fVxuXHRcblx0Ly8gZWFjaFxuXHRmdW5jdGlvbiBlYWNoKGFycmF5LCBjYWxsYmFjaykge1xuXHRcdHZhciBpbmRleCA9IDAsXG5cdFx0XHRtYXggPSBhcnJheS5sZW5ndGg7XG5cdFx0XHRcblx0XHRpZiAoIWFycmF5IHx8ICFtYXgpIHsgcmV0dXJuOyB9XG5cblx0XHR3aGlsZSAoaW5kZXggPCBtYXgpIHtcblx0XHRcdGlmIChjYWxsYmFjayhhcnJheVtpbmRleF0sIGluZGV4KSA9PT0gZmFsc2UpIHsgcmV0dXJuOyB9XG5cdFx0XHRpbmRleCArPSAxO1xuXHRcdH1cblx0fVxuXHRcblx0Ly8gbWFwXG5cdGZ1bmN0aW9uIG1hcChhcnJheSwgY2FsbGJhY2spIHtcblx0XHR2YXIgaW5kZXggPSAwLFxuXHRcdFx0bWF4ID0gYXJyYXkubGVuZ3RoLFxuXHRcdFx0cmV0ID0gW107XG5cblx0XHRpZiAoIWFycmF5IHx8ICFtYXgpIHsgcmV0dXJuIHJldDsgfVxuXHRcdFx0XHRcblx0XHR3aGlsZSAoaW5kZXggPCBtYXgpIHtcblx0XHRcdHJldFtpbmRleF0gPSBjYWxsYmFjayhhcnJheVtpbmRleF0sIGluZGV4KTtcblx0XHRcdGluZGV4ICs9IDE7XG5cdFx0fVxuXHRcdFxuXHRcdHJldHVybiByZXQ7XG5cdH1cblx0XG5cdC8vIHBsdWNrXG5cdGZ1bmN0aW9uIHBsdWNrKGFycmF5LCBwcm9wKSB7XG5cdFx0cmV0dXJuIG1hcChhcnJheSwgZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdHJldHVybiBpdGVtW3Byb3BdO1xuXHRcdH0pO1xuXHR9XG5cdFxuXHQvLyBjb21wYWN0XG5cdGZ1bmN0aW9uIGNvbXBhY3QoYXJyYXkpIHtcblx0XHR2YXIgcmV0ID0gW107XG5cdFx0XG5cdFx0ZWFjaChhcnJheSwgZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdGlmIChpdGVtKSB7IHJldC5wdXNoKGl0ZW0pOyB9XG5cdFx0fSk7XG5cdFx0XG5cdFx0cmV0dXJuIHJldDtcblx0fVxuXHRcblx0Ly8gdW5pcXVlXG5cdGZ1bmN0aW9uIHVuaXF1ZShhcnJheSkge1xuXHRcdHZhciByZXQgPSBbXTtcblx0XHRcblx0XHRlYWNoKGFycmF5LCBmdW5jdGlvbiAoX2EpIHtcblx0XHRcdGlmICghZmluZChyZXQsIF9hKSkgeyByZXQucHVzaChfYSk7IH1cblx0XHR9KTtcblx0XHRcblx0XHRyZXR1cm4gcmV0O1xuXHR9XG5cdFxuXHQvLyBpbnRlcnNlY3Rpb25cblx0ZnVuY3Rpb24gaW50ZXJzZWN0aW9uKGEsIGIpIHtcblx0XHR2YXIgcmV0ID0gW107XG5cdFx0XG5cdFx0ZWFjaChhLCBmdW5jdGlvbiAoX2EpIHtcblx0XHRcdGVhY2goYiwgZnVuY3Rpb24gKF9iKSB7XG5cdFx0XHRcdGlmIChfYSA9PT0gX2IpIHsgcmV0LnB1c2goX2EpOyB9XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0XHRcblx0XHRyZXR1cm4gdW5pcXVlKHJldCk7XG5cdH1cblx0XG5cdC8vIHJlc3Rcblx0ZnVuY3Rpb24gcmVzdChhcnJheSwgY2FsbGJhY2spIHtcblx0XHR2YXIgcmV0ID0gW107XG5cdFx0XG5cdFx0ZWFjaChhcnJheSwgZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG5cdFx0XHRpZiAoIWNhbGxiYWNrKGl0ZW0pKSB7XG5cdFx0XHRcdHJldCA9IGFycmF5LnNsaWNlKGluZGV4KTtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdFxuXHRcdHJldHVybiByZXQ7XG5cdH1cblxuXHQvLyBpbml0aWFsXG5cdGZ1bmN0aW9uIGluaXRpYWwoYXJyYXksIGNhbGxiYWNrKSB7XG5cdFx0dmFyIHJldmVyc2VkID0gYXJyYXkuc2xpY2UoKS5yZXZlcnNlKCk7XG5cdFx0XG5cdFx0cmV0dXJuIHJlc3QocmV2ZXJzZWQsIGNhbGxiYWNrKS5yZXZlcnNlKCk7XG5cdH1cblx0XG5cdC8vIGV4dGVuZFxuXHRmdW5jdGlvbiBleHRlbmQoYSwgYikge1xuXHRcdGZvciAodmFyIGtleSBpbiBiKSB7XG5cdFx0XHRpZiAoYi5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7IGFba2V5XSA9IGJba2V5XTsgfVxuXHRcdH1cblx0XHRcblx0XHRyZXR1cm4gYTtcblx0fVxuXHRcdFx0XG5cdC8vIGRlZmluZSBpbnRlcm5hbCBtb21lbnQgcmVmZXJlbmNlXG5cdHZhciBtb21lbnQ7XG5cblx0aWYgKHR5cGVvZiByZXF1aXJlID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHR0cnkgeyBtb21lbnQgPSByZXF1aXJlKCdtb21lbnQnKTsgfSBcblx0XHRjYXRjaCAoZSkge31cblx0fSBcblx0XG5cdGlmICghbW9tZW50ICYmIHJvb3QubW9tZW50KSB7XG5cdFx0bW9tZW50ID0gcm9vdC5tb21lbnQ7XG5cdH1cblx0XG5cdGlmICghbW9tZW50KSB7XG5cdFx0dGhyb3cgXCJNb21lbnQgRHVyYXRpb24gRm9ybWF0IGNhbm5vdCBmaW5kIE1vbWVudC5qc1wiO1xuXHR9XG5cdFxuXHQvLyBtb21lbnQuZHVyYXRpb24uZm9ybWF0KFt0ZW1wbGF0ZV0gWywgcHJlY2lzaW9uXSBbLCBzZXR0aW5nc10pXG5cdG1vbWVudC5kdXJhdGlvbi5mbi5mb3JtYXQgPSBmdW5jdGlvbiAoKSB7XG5cblx0XHR2YXIgdG9rZW5pemVyLCB0b2tlbnMsIHR5cGVzLCB0eXBlTWFwLCBtb21lbnRUeXBlcywgZm91bmRGaXJzdCwgdHJpbUluZGV4LFxuXHRcdFx0YXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKSxcblx0XHRcdHNldHRpbmdzID0gZXh0ZW5kKHt9LCB0aGlzLmZvcm1hdC5kZWZhdWx0cyksXG5cdFx0XHQvLyBrZWVwIGEgc2hhZG93IGNvcHkgb2YgdGhpcyBtb21lbnQgZm9yIGNhbGN1bGF0aW5nIHJlbWFpbmRlcnNcblx0XHRcdHJlbWFpbmRlciA9IG1vbWVudC5kdXJhdGlvbih0aGlzKTtcblxuXHRcdC8vIGFkZCBhIHJlZmVyZW5jZSB0byB0aGlzIGR1cmF0aW9uIG9iamVjdCB0byB0aGUgc2V0dGluZ3MgZm9yIHVzZVxuXHRcdC8vIGluIGEgdGVtcGxhdGUgZnVuY3Rpb25cblx0XHRzZXR0aW5ncy5kdXJhdGlvbiA9IHRoaXM7XG5cblx0XHQvLyBwYXJzZSBhcmd1bWVudHNcblx0XHRlYWNoKGFyZ3MsIGZ1bmN0aW9uIChhcmcpIHtcblx0XHRcdGlmICh0eXBlb2YgYXJnID09PSBcInN0cmluZ1wiIHx8IHR5cGVvZiBhcmcgPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHRzZXR0aW5ncy50ZW1wbGF0ZSA9IGFyZztcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodHlwZW9mIGFyZyA9PT0gXCJudW1iZXJcIikge1xuXHRcdFx0XHRzZXR0aW5ncy5wcmVjaXNpb24gPSBhcmc7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGlzT2JqZWN0KGFyZykpIHtcblx0XHRcdFx0ZXh0ZW5kKHNldHRpbmdzLCBhcmcpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0Ly8gdHlwZXNcblx0XHR0eXBlcyA9IHNldHRpbmdzLnR5cGVzID0gKGlzQXJyYXkoc2V0dGluZ3MudHlwZXMpID8gc2V0dGluZ3MudHlwZXMgOiBzZXR0aW5ncy50eXBlcy5zcGxpdChcIiBcIikpO1xuXG5cdFx0Ly8gdGVtcGxhdGVcblx0XHRpZiAodHlwZW9mIHNldHRpbmdzLnRlbXBsYXRlID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdHNldHRpbmdzLnRlbXBsYXRlID0gc2V0dGluZ3MudGVtcGxhdGUuYXBwbHkoc2V0dGluZ3MpO1xuXHRcdH1cblxuXHRcdC8vIHRva2VuaXplciByZWdleHBcblx0XHR0b2tlbml6ZXIgPSBuZXcgUmVnRXhwKG1hcCh0eXBlcywgZnVuY3Rpb24gKHR5cGUpIHtcblx0XHRcdHJldHVybiBzZXR0aW5nc1t0eXBlXS5zb3VyY2U7XG5cdFx0fSkuam9pbihcInxcIiksIFwiZ1wiKTtcblxuXHRcdC8vIHRva2VuIHR5cGUgbWFwIGZ1bmN0aW9uXG5cdFx0dHlwZU1hcCA9IGZ1bmN0aW9uICh0b2tlbikge1xuXHRcdFx0cmV0dXJuIGZpbmQodHlwZXMsIGZ1bmN0aW9uICh0eXBlKSB7XG5cdFx0XHRcdHJldHVybiBzZXR0aW5nc1t0eXBlXS50ZXN0KHRva2VuKTtcblx0XHRcdH0pO1xuXHRcdH07XG5cblx0XHQvLyB0b2tlbnMgYXJyYXlcblx0XHR0b2tlbnMgPSBtYXAoc2V0dGluZ3MudGVtcGxhdGUubWF0Y2godG9rZW5pemVyKSwgZnVuY3Rpb24gKHRva2VuLCBpbmRleCkge1xuXHRcdFx0dmFyIHR5cGUgPSB0eXBlTWFwKHRva2VuKSxcblx0XHRcdFx0bGVuZ3RoID0gdG9rZW4ubGVuZ3RoO1xuXG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRpbmRleDogaW5kZXgsXG5cdFx0XHRcdGxlbmd0aDogbGVuZ3RoLFxuXG5cdFx0XHRcdC8vIHJlcGxhY2UgZXNjYXBlZCB0b2tlbnMgd2l0aCB0aGUgbm9uLWVzY2FwZWQgdG9rZW4gdGV4dFxuXHRcdFx0XHR0b2tlbjogKHR5cGUgPT09IFwiZXNjYXBlXCIgPyB0b2tlbi5yZXBsYWNlKHNldHRpbmdzLmVzY2FwZSwgXCIkMVwiKSA6IHRva2VuKSxcblxuXHRcdFx0XHQvLyBpZ25vcmUgdHlwZSBvbiBub24tbW9tZW50IHRva2Vuc1xuXHRcdFx0XHR0eXBlOiAoKHR5cGUgPT09IFwiZXNjYXBlXCIgfHwgdHlwZSA9PT0gXCJnZW5lcmFsXCIpID8gbnVsbCA6IHR5cGUpXG5cblx0XHRcdFx0Ly8gY2FsY3VsYXRlIGJhc2UgdmFsdWUgZm9yIGFsbCBtb21lbnQgdG9rZW5zXG5cdFx0XHRcdC8vYmFzZVZhbHVlOiAoKHR5cGUgPT09IFwiZXNjYXBlXCIgfHwgdHlwZSA9PT0gXCJnZW5lcmFsXCIpID8gbnVsbCA6IHRoaXMuYXModHlwZSkpXG5cdFx0XHR9O1xuXHRcdH0sIHRoaXMpO1xuXG5cdFx0Ly8gdW5pcXVlIG1vbWVudCB0b2tlbiB0eXBlcyBpbiB0aGUgdGVtcGxhdGUgKGluIG9yZGVyIG9mIGRlc2NlbmRpbmcgbWFnbml0dWRlKVxuXHRcdG1vbWVudFR5cGVzID0gaW50ZXJzZWN0aW9uKHR5cGVzLCB1bmlxdWUoY29tcGFjdChwbHVjayh0b2tlbnMsIFwidHlwZVwiKSkpKTtcblxuXHRcdC8vIGV4aXQgZWFybHkgaWYgdGhlcmUgYXJlIG5vIG1vbWVudFR5cGVzXG5cdFx0aWYgKCFtb21lbnRUeXBlcy5sZW5ndGgpIHtcblx0XHRcdHJldHVybiBwbHVjayh0b2tlbnMsIFwidG9rZW5cIikuam9pbihcIlwiKTtcblx0XHR9XG5cblx0XHQvLyBjYWxjdWxhdGUgdmFsdWVzIGZvciBlYWNoIHRva2VuIHR5cGUgaW4gdGhlIHRlbXBsYXRlXG5cdFx0ZWFjaChtb21lbnRUeXBlcywgZnVuY3Rpb24gKG1vbWVudFR5cGUsIGluZGV4KSB7XG5cdFx0XHR2YXIgdmFsdWUsIHdob2xlVmFsdWUsIGRlY2ltYWxWYWx1ZSwgaXNMZWFzdCwgaXNNb3N0O1xuXG5cdFx0XHQvLyBjYWxjdWxhdGUgaW50ZWdlciBhbmQgZGVjaW1hbCB2YWx1ZSBwb3J0aW9uc1xuXHRcdFx0dmFsdWUgPSByZW1haW5kZXIuYXMobW9tZW50VHlwZSk7XG5cdFx0XHR3aG9sZVZhbHVlID0gKHZhbHVlID4gMCA/IE1hdGguZmxvb3IodmFsdWUpIDogTWF0aC5jZWlsKHZhbHVlKSk7XG5cdFx0XHRkZWNpbWFsVmFsdWUgPSB2YWx1ZSAtIHdob2xlVmFsdWU7XG5cblx0XHRcdC8vIGlzIHRoaXMgdGhlIGxlYXN0LXNpZ25pZmljYW50IG1vbWVudCB0b2tlbiBmb3VuZD9cblx0XHRcdGlzTGVhc3QgPSAoKGluZGV4ICsgMSkgPT09IG1vbWVudFR5cGVzLmxlbmd0aCk7XG5cblx0XHRcdC8vIGlzIHRoaXMgdGhlIG1vc3Qtc2lnbmlmaWNhbnQgbW9tZW50IHRva2VuIGZvdW5kP1xuXHRcdFx0aXNNb3N0ID0gKCFpbmRleCk7XG5cblx0XHRcdC8vIHVwZGF0ZSB0b2tlbnMgYXJyYXlcblx0XHRcdC8vIHVzaW5nIHRoaXMgYWxnb3JpdGhtIHRvIG5vdCBhc3N1bWUgYW55dGhpbmcgYWJvdXRcblx0XHRcdC8vIHRoZSBvcmRlciBvciBmcmVxdWVuY3kgb2YgYW55IHRva2Vuc1xuXHRcdFx0ZWFjaCh0b2tlbnMsIGZ1bmN0aW9uICh0b2tlbikge1xuXHRcdFx0XHRpZiAodG9rZW4udHlwZSA9PT0gbW9tZW50VHlwZSkge1xuXHRcdFx0XHRcdGV4dGVuZCh0b2tlbiwge1xuXHRcdFx0XHRcdFx0dmFsdWU6IHZhbHVlLFxuXHRcdFx0XHRcdFx0d2hvbGVWYWx1ZTogd2hvbGVWYWx1ZSxcblx0XHRcdFx0XHRcdGRlY2ltYWxWYWx1ZTogZGVjaW1hbFZhbHVlLFxuXHRcdFx0XHRcdFx0aXNMZWFzdDogaXNMZWFzdCxcblx0XHRcdFx0XHRcdGlzTW9zdDogaXNNb3N0XG5cdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHRpZiAoaXNNb3N0KSB7XG5cdFx0XHRcdFx0XHQvLyBub3RlIHRoZSBsZW5ndGggb2YgdGhlIG1vc3Qtc2lnbmlmaWNhbnQgbW9tZW50IHRva2VuOlxuXHRcdFx0XHRcdFx0Ly8gaWYgaXQgaXMgZ3JlYXRlciB0aGFuIG9uZSBhbmQgZm9yY2VMZW5ndGggaXMgbm90IHNldCwgZGVmYXVsdCBmb3JjZUxlbmd0aCB0byBgdHJ1ZWBcblx0XHRcdFx0XHRcdGlmIChzZXR0aW5ncy5mb3JjZUxlbmd0aCA9PSBudWxsICYmIHRva2VuLmxlbmd0aCA+IDEpIHtcblx0XHRcdFx0XHRcdFx0c2V0dGluZ3MuZm9yY2VMZW5ndGggPSB0cnVlO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQvLyByYXRpb25hbGUgaXMgdGhpczpcblx0XHRcdFx0XHRcdC8vIGlmIHRoZSB0ZW1wbGF0ZSBpcyBcImg6bW06c3NcIiBhbmQgdGhlIG1vbWVudCB2YWx1ZSBpcyA1IG1pbnV0ZXMsIHRoZSB1c2VyLWZyaWVuZGx5IG91dHB1dCBpcyBcIjU6MDBcIiwgbm90IFwiMDU6MDBcIlxuXHRcdFx0XHRcdFx0Ly8gc2hvdWxkbid0IHBhZCB0aGUgYG1pbnV0ZXNgIHRva2VuIGV2ZW4gdGhvdWdoIGl0IGhhcyBsZW5ndGggb2YgdHdvXG5cdFx0XHRcdFx0XHQvLyBpZiB0aGUgdGVtcGxhdGUgaXMgXCJoaDptbTpzc1wiLCB0aGUgdXNlciBjbGVhcmx5IHdhbnRlZCBldmVyeXRoaW5nIHBhZGRlZCBzbyB3ZSBzaG91bGQgb3V0cHV0IFwiMDU6MDBcIlxuXHRcdFx0XHRcdFx0Ly8gaWYgdGhlIHVzZXIgd2FudGVkIHRoZSBmdWxsIHBhZGRlZCBvdXRwdXQsIHRoZXkgY2FuIHNldCBgeyB0cmltOiBmYWxzZSB9YCB0byBnZXQgXCIwMDowNTowMFwiXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0Ly8gdXBkYXRlIHJlbWFpbmRlclxuXHRcdFx0cmVtYWluZGVyLnN1YnRyYWN0KHdob2xlVmFsdWUsIG1vbWVudFR5cGUpO1xuXHRcdH0pO1xuXHRcblx0XHQvLyB0cmltIHRva2VucyBhcnJheVxuXHRcdGlmIChzZXR0aW5ncy50cmltKSB7XG5cdFx0XHR0b2tlbnMgPSAoc2V0dGluZ3MudHJpbSA9PT0gXCJsZWZ0XCIgPyByZXN0IDogaW5pdGlhbCkodG9rZW5zLCBmdW5jdGlvbiAodG9rZW4pIHtcblx0XHRcdFx0Ly8gcmV0dXJuIGB0cnVlYCBpZjpcblx0XHRcdFx0Ly8gdGhlIHRva2VuIGlzIG5vdCB0aGUgbGVhc3QgbW9tZW50IHRva2VuIChkb24ndCB0cmltIHRoZSBsZWFzdCBtb21lbnQgdG9rZW4pXG5cdFx0XHRcdC8vIHRoZSB0b2tlbiBpcyBhIG1vbWVudCB0b2tlbiB0aGF0IGRvZXMgbm90IGhhdmUgYSB2YWx1ZSAoZG9uJ3QgdHJpbSBtb21lbnQgdG9rZW5zIHRoYXQgaGF2ZSBhIHdob2xlIHZhbHVlKVxuXHRcdFx0XHRyZXR1cm4gISh0b2tlbi5pc0xlYXN0IHx8ICh0b2tlbi50eXBlICE9IG51bGwgJiYgdG9rZW4ud2hvbGVWYWx1ZSkpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdFxuXHRcdFxuXHRcdC8vIGJ1aWxkIG91dHB1dFxuXG5cdFx0Ly8gdGhlIGZpcnN0IG1vbWVudCB0b2tlbiBjYW4gaGF2ZSBzcGVjaWFsIGhhbmRsaW5nXG5cdFx0Zm91bmRGaXJzdCA9IGZhbHNlO1xuXG5cdFx0Ly8gcnVuIHRoZSBtYXAgaW4gcmV2ZXJzZSBvcmRlciBpZiB0cmltbWluZyBmcm9tIHRoZSByaWdodFxuXHRcdGlmIChzZXR0aW5ncy50cmltID09PSBcInJpZ2h0XCIpIHtcblx0XHRcdHRva2Vucy5yZXZlcnNlKCk7XG5cdFx0fVxuXG5cdFx0dG9rZW5zID0gbWFwKHRva2VucywgZnVuY3Rpb24gKHRva2VuKSB7XG5cdFx0XHR2YXIgdmFsLFxuXHRcdFx0XHRkZWNWYWw7XG5cblx0XHRcdGlmICghdG9rZW4udHlwZSkge1xuXHRcdFx0XHQvLyBpZiBpdCBpcyBub3QgYSBtb21lbnQgdG9rZW4sIHVzZSB0aGUgdG9rZW4gYXMgaXRzIG93biB2YWx1ZVxuXHRcdFx0XHRyZXR1cm4gdG9rZW4udG9rZW47XG5cdFx0XHR9XG5cblx0XHRcdC8vIGFwcGx5IG5lZ2F0aXZlIHByZWNpc2lvbiBmb3JtYXR0aW5nIHRvIHRoZSBsZWFzdC1zaWduaWZpY2FudCBtb21lbnQgdG9rZW5cblx0XHRcdGlmICh0b2tlbi5pc0xlYXN0ICYmIChzZXR0aW5ncy5wcmVjaXNpb24gPCAwKSkge1xuXHRcdFx0XHR2YWwgPSAoTWF0aC5mbG9vcih0b2tlbi53aG9sZVZhbHVlICogTWF0aC5wb3coMTAsIHNldHRpbmdzLnByZWNpc2lvbikpICogTWF0aC5wb3coMTAsIC1zZXR0aW5ncy5wcmVjaXNpb24pKS50b1N0cmluZygpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFsID0gdG9rZW4ud2hvbGVWYWx1ZS50b1N0cmluZygpO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHQvLyByZW1vdmUgbmVnYXRpdmUgc2lnbiBmcm9tIHRoZSBiZWdpbm5pbmdcblx0XHRcdHZhbCA9IHZhbC5yZXBsYWNlKC9eXFwtLywgXCJcIik7XG5cblx0XHRcdC8vIGFwcGx5IHRva2VuIGxlbmd0aCBmb3JtYXR0aW5nXG5cdFx0XHQvLyBzcGVjaWFsIGhhbmRsaW5nIGZvciB0aGUgZmlyc3QgbW9tZW50IHRva2VuIHRoYXQgaXMgbm90IHRoZSBtb3N0IHNpZ25pZmljYW50IGluIGEgdHJpbW1lZCB0ZW1wbGF0ZVxuXHRcdFx0aWYgKHRva2VuLmxlbmd0aCA+IDEgJiYgKGZvdW5kRmlyc3QgfHwgdG9rZW4uaXNNb3N0IHx8IHNldHRpbmdzLmZvcmNlTGVuZ3RoKSkge1xuXHRcdFx0XHR2YWwgPSBwYWRaZXJvKHZhbCwgdG9rZW4ubGVuZ3RoKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gYWRkIGRlY2ltYWwgdmFsdWUgaWYgcHJlY2lzaW9uID4gMFxuXHRcdFx0aWYgKHRva2VuLmlzTGVhc3QgJiYgKHNldHRpbmdzLnByZWNpc2lvbiA+IDApKSB7XG5cdFx0XHRcdGRlY1ZhbCA9IHRva2VuLmRlY2ltYWxWYWx1ZS50b1N0cmluZygpLnJlcGxhY2UoL15cXC0vLCBcIlwiKS5zcGxpdCgvXFwufGVcXC0vKTtcblx0XHRcdFx0c3dpdGNoIChkZWNWYWwubGVuZ3RoKSB7XG5cdFx0XHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRcdFx0dmFsICs9IFwiLlwiICsgcGFkWmVybyhkZWNWYWxbMF0sIHNldHRpbmdzLnByZWNpc2lvbiwgdHJ1ZSkuc2xpY2UoMCwgc2V0dGluZ3MucHJlY2lzaW9uKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0Y2FzZSAyOlxuXHRcdFx0XHRcdFx0dmFsICs9IFwiLlwiICsgcGFkWmVybyhkZWNWYWxbMV0sIHNldHRpbmdzLnByZWNpc2lvbiwgdHJ1ZSkuc2xpY2UoMCwgc2V0dGluZ3MucHJlY2lzaW9uKTtcdFx0XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdGNhc2UgMzpcblx0XHRcdFx0XHRcdHZhbCArPSBcIi5cIiArIHBhZFplcm8ocmVwZWF0WmVybygoK2RlY1ZhbFsyXSkgLSAxKSArIChkZWNWYWxbMF0gfHwgXCIwXCIpICsgZGVjVmFsWzFdLCBzZXR0aW5ncy5wcmVjaXNpb24sIHRydWUpLnNsaWNlKDAsIHNldHRpbmdzLnByZWNpc2lvbik7XHRcdFxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdHRocm93IFwiTW9tZW50IER1cmF0aW9uIEZvcm1hdDogdW5hYmxlIHRvIHBhcnNlIHRva2VuIGRlY2ltYWwgdmFsdWUuXCI7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0Ly8gYWRkIGEgbmVnYXRpdmUgc2lnbiBpZiB0aGUgdmFsdWUgaXMgbmVnYXRpdmUgYW5kIHRva2VuIGlzIG1vc3Qgc2lnbmlmaWNhbnRcblx0XHRcdGlmICh0b2tlbi5pc01vc3QgJiYgdG9rZW4udmFsdWUgPCAwKSB7XG5cdFx0XHRcdHZhbCA9IFwiLVwiICsgdmFsO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3VuZEZpcnN0ID0gdHJ1ZTtcblxuXHRcdFx0cmV0dXJuIHZhbDtcblx0XHR9KTtcblxuXHRcdC8vIHVuZG8gdGhlIHJldmVyc2UgaWYgdHJpbW1pbmcgZnJvbSB0aGUgcmlnaHRcblx0XHRpZiAoc2V0dGluZ3MudHJpbSA9PT0gXCJyaWdodFwiKSB7XG5cdFx0XHR0b2tlbnMucmV2ZXJzZSgpO1xuXHRcdH1cblxuXHRcdHJldHVybiB0b2tlbnMuam9pbihcIlwiKTtcblx0fTtcblxuXHRtb21lbnQuZHVyYXRpb24uZm4uZm9ybWF0LmRlZmF1bHRzID0ge1xuXHRcdC8vIHRva2VuIGRlZmluaXRpb25zXG5cdFx0ZXNjYXBlOiAvXFxbKC4rPylcXF0vLFxuXHRcdHllYXJzOiAvW1l5XSsvLFxuXHRcdG1vbnRoczogL00rLyxcblx0XHR3ZWVrczogL1tXd10rLyxcblx0XHRkYXlzOiAvW0RkXSsvLFxuXHRcdGhvdXJzOiAvW0hoXSsvLFxuXHRcdG1pbnV0ZXM6IC9tKy8sXG5cdFx0c2Vjb25kczogL3MrLyxcblx0XHRtaWxsaXNlY29uZHM6IC9TKy8sXG5cdFx0Z2VuZXJhbDogLy4rPy8sXG5cblx0XHQvLyB0b2tlbiB0eXBlIG5hbWVzXG5cdFx0Ly8gaW4gb3JkZXIgb2YgZGVzY2VuZGluZyBtYWduaXR1ZGVcblx0XHQvLyBjYW4gYmUgYSBzcGFjZS1zZXBhcmF0ZWQgdG9rZW4gbmFtZSBsaXN0IG9yIGFuIGFycmF5IG9mIHRva2VuIG5hbWVzXG5cdFx0dHlwZXM6IFwiZXNjYXBlIHllYXJzIG1vbnRocyB3ZWVrcyBkYXlzIGhvdXJzIG1pbnV0ZXMgc2Vjb25kcyBtaWxsaXNlY29uZHMgZ2VuZXJhbFwiLFxuXG5cdFx0Ly8gZm9ybWF0IG9wdGlvbnNcblxuXHRcdC8vIHRyaW1cblx0XHQvLyBcImxlZnRcIiAtIHRlbXBsYXRlIHRva2VucyBhcmUgdHJpbW1lZCBmcm9tIHRoZSBsZWZ0IHVudGlsIHRoZSBmaXJzdCBtb21lbnQgdG9rZW4gdGhhdCBoYXMgYSB2YWx1ZSA+PSAxXG5cdFx0Ly8gXCJyaWdodFwiIC0gdGVtcGxhdGUgdG9rZW5zIGFyZSB0cmltbWVkIGZyb20gdGhlIHJpZ2h0IHVudGlsIHRoZSBmaXJzdCBtb21lbnQgdG9rZW4gdGhhdCBoYXMgYSB2YWx1ZSA+PSAxXG5cdFx0Ly8gKHRoZSBmaW5hbCBtb21lbnQgdG9rZW4gaXMgbm90IHRyaW1tZWQsIHJlZ2FyZGxlc3Mgb2YgdmFsdWUpXG5cdFx0Ly8gYGZhbHNlYCAtIHRlbXBsYXRlIHRva2VucyBhcmUgbm90IHRyaW1tZWRcblx0XHR0cmltOiBcImxlZnRcIixcblxuXHRcdC8vIHByZWNpc2lvblxuXHRcdC8vIG51bWJlciBvZiBkZWNpbWFsIGRpZ2l0cyB0byBpbmNsdWRlIGFmdGVyICh0byB0aGUgcmlnaHQgb2YpIHRoZSBkZWNpbWFsIHBvaW50IChwb3NpdGl2ZSBpbnRlZ2VyKVxuXHRcdC8vIG9yIHRoZSBudW1iZXIgb2YgZGlnaXRzIHRvIHRydW5jYXRlIHRvIDAgYmVmb3JlICh0byB0aGUgbGVmdCBvZikgdGhlIGRlY2ltYWwgcG9pbnQgKG5lZ2F0aXZlIGludGVnZXIpXG5cdFx0cHJlY2lzaW9uOiAwLFxuXG5cdFx0Ly8gZm9yY2UgZmlyc3QgbW9tZW50IHRva2VuIHdpdGggYSB2YWx1ZSB0byByZW5kZXIgYXQgZnVsbCBsZW5ndGggZXZlbiB3aGVuIHRlbXBsYXRlIGlzIHRyaW1tZWQgYW5kIGZpcnN0IG1vbWVudCB0b2tlbiBoYXMgbGVuZ3RoIG9mIDFcblx0XHRmb3JjZUxlbmd0aDogbnVsbCxcblxuXHRcdC8vIHRlbXBsYXRlIHVzZWQgdG8gZm9ybWF0IGR1cmF0aW9uXG5cdFx0Ly8gbWF5IGJlIGEgZnVuY3Rpb24gb3IgYSBzdHJpbmdcblx0XHQvLyB0ZW1wbGF0ZSBmdW5jdGlvbnMgYXJlIGV4ZWN1dGVkIHdpdGggdGhlIGB0aGlzYCBiaW5kaW5nIG9mIHRoZSBzZXR0aW5ncyBvYmplY3Rcblx0XHQvLyBzbyB0aGF0IHRlbXBsYXRlIHN0cmluZ3MgbWF5IGJlIGR5bmFtaWNhbGx5IGdlbmVyYXRlZCBiYXNlZCBvbiB0aGUgZHVyYXRpb24gb2JqZWN0XG5cdFx0Ly8gKGFjY2Vzc2libGUgdmlhIGB0aGlzLmR1cmF0aW9uYClcblx0XHQvLyBvciBhbnkgb2YgdGhlIG90aGVyIHNldHRpbmdzXG5cdFx0dGVtcGxhdGU6IGZ1bmN0aW9uICgpIHtcblx0XHRcdHZhciB0eXBlcyA9IHRoaXMudHlwZXMsXG5cdFx0XHRcdGR1ciA9IHRoaXMuZHVyYXRpb24sXG5cdFx0XHRcdGxhc3RUeXBlID0gZmluZExhc3QodHlwZXMsIGZ1bmN0aW9uICh0eXBlKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGR1ci5fZGF0YVt0eXBlXTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdC8vIGRlZmF1bHQgdGVtcGxhdGUgc3RyaW5ncyBmb3IgZWFjaCBkdXJhdGlvbiBkaW1lbnNpb24gdHlwZVxuXHRcdFx0c3dpdGNoIChsYXN0VHlwZSkge1xuXHRcdFx0XHRjYXNlIFwic2Vjb25kc1wiOlxuXHRcdFx0XHRcdHJldHVybiBcImg6bW06c3NcIjtcblx0XHRcdFx0Y2FzZSBcIm1pbnV0ZXNcIjpcblx0XHRcdFx0XHRyZXR1cm4gXCJkW2RdIGg6bW1cIjtcblx0XHRcdFx0Y2FzZSBcImhvdXJzXCI6XG5cdFx0XHRcdFx0cmV0dXJuIFwiZFtkXSBoW2hdXCI7XG5cdFx0XHRcdGNhc2UgXCJkYXlzXCI6XG5cdFx0XHRcdFx0cmV0dXJuIFwiTVttXSBkW2RdXCI7XG5cdFx0XHRcdGNhc2UgXCJ3ZWVrc1wiOlxuXHRcdFx0XHRcdHJldHVybiBcInlbeV0gd1t3XVwiO1xuXHRcdFx0XHRjYXNlIFwibW9udGhzXCI6XG5cdFx0XHRcdFx0cmV0dXJuIFwieVt5XSBNW21dXCI7XG5cdFx0XHRcdGNhc2UgXCJ5ZWFyc1wiOlxuXHRcdFx0XHRcdHJldHVybiBcInlbeV1cIjtcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRyZXR1cm4gXCJ5W3ldIE1bbV0gZFtkXSBoOm1tOnNzXCI7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXG59KSh0aGlzKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9tb21lbnQtZHVyYXRpb24tZm9ybWF0L2xpYi9tb21lbnQtZHVyYXRpb24tZm9ybWF0LmpzXG4vLyBtb2R1bGUgaWQgPSA2NTlcbi8vIG1vZHVsZSBjaHVua3MgPSAyIl0sInNvdXJjZVJvb3QiOiIifQ==