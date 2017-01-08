webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _blockList = __webpack_require__(280);
	
	var _blockList2 = _interopRequireDefault(_blockList);
	
	var _Filter = __webpack_require__(660);
	
	var _Filter2 = _interopRequireDefault(_Filter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_blockList2.default.init().then(function () {
	  _Filter2.default.init();
	});

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


/***/ },

/***/ 660:
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
	
	var _wurl = __webpack_require__(652);
	
	var _wurl2 = _interopRequireDefault(_wurl);
	
	var _lodash = __webpack_require__(463);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _blockList = __webpack_require__(280);
	
	var _blockList2 = _interopRequireDefault(_blockList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// This is possibly some of the worst code I have ever written and I really need better paradigm
	// for complicated concurrentcy
	
	var BLOCKED_PAGE = 'https://www.github.com/wrleskovec';
	
	var Filter = function () {
	  function Filter() {
	    (0, _classCallCheck3.default)(this, Filter);
	
	    this.currentSite = null;
	    this.currentTab = null;
	    this.popup = false;
	    this.startTime = null;
	    this.newDayTimer = this.setNewDayTimer();
	    this.limitCD = undefined;
	    // This is to deal with blur async weirdness
	    this.focusCount = 0;
	    // Need to bind since I'm calling it externally
	    this.webRequestHandler = this.webRequestHandler.bind(this);
	    this.messageHandler = this.messageHandler.bind(this);
	  }
	
	  (0, _createClass3.default)(Filter, [{
	    key: 'init',
	    value: function init() {
	      // chrome.windows.getAll({ populate: true }, (windows) => {
	      //   windows.forEach((win) => {
	      //     win.tabs.forEach((tab) => {
	      //       if (this.isValidProtocol(tab.url)) {
	      //         chrome.tabs.executeScript(tab.id, { file: 'content.js' });
	      //       }
	      //     });
	      //   });
	      // });
	      // interacting with popup for timer & content.js
	      chrome.runtime.onMessage.addListener(this.messageHandler);
	
	      chrome.webRequest.onBeforeRequest.addListener(_lodash2.default.debounce(this.webRequestHandler, 50), {
	        urls: ['<all_urls>'],
	        types: ['main_frame']
	      });
	    }
	  }, {
	    key: 'messageHandler',
	    value: function messageHandler(request, sender, sendResponse) {
	      var _this = this;
	
	      if (request.focus && this.isValidProtocol(sender.tab.url)) {
	        var senderSite = (0, _wurl2.default)('domain', sender.tab.url);
	        if (request.focus === 'focus' && senderSite) {
	          this.popup = false;
	          this.focusCount += 1;
	          console.log(this.focusCount);
	          if (!this.currentSite) {
	            this.urlCheck(sender.tab.url, sender.tab.id);
	          } else {
	            if (this.notDuplicateTabOrDomain(senderSite, sender.tab.id)) {
	              this.saveRecords().then(function () {
	                return _this.urlCheck(sender.tab.url, sender.tab.id);
	              });
	            } else {
	              this.currentTab = sender.tab.id;
	            }
	          }
	        } else if (request.focus === 'blur') {
	          console.log('BLUUUUUUUUUURRRRR');
	          this.focusCount -= 1;
	          console.log(this.focusCount);
	          console.log('blurTab: ' + sender.tab.id + ' tab: ' + this.currentTab + ' ' + senderSite + ' ');
	          if (sender.tab.id === this.currentTab && senderSite && !this.popup) {
	            this.saveRecords();
	
	            this.startTime = null;
	            this.currentSite = null;
	            this.currentTab = null;
	          }
	        }
	      }
	      if (request.timer === 'popup') {
	        this.popup = true;
	        sendResponse({ seconds: this.getDuration((0, _moment2.default)()) });
	      }
	    }
	  }, {
	    key: 'notDuplicateTabOrDomain',
	    value: function notDuplicateTabOrDomain(domain, tabId) {
	      return this.currentSite !== domain && this.currentTab !== tabId;
	    }
	  }, {
	    key: 'handleNewDomainFocus',
	    value: function handleNewDomainFocus() {
	      this.startTime = (0, _moment2.default)();
	      clearTimeout(this.limitCD);
	    }
	  }, {
	    key: 'setNewDayTimer',
	    value: function setNewDayTimer() {
	      var _this2 = this;
	
	      var tomorrow = (0, _moment2.default)().add(1, 'days').startOf('day');
	      return setTimeout(function () {
	        _this2.saveRecords().then(function () {
	          return _blockList2.default.initNewDate();
	        }).then(function () {
	          return _blockList2.default.getSchedule();
	        }).then(function (schedule) {
	          schedule.setting.currentTime = schedule.setting.dailyLimit * 60;
	          return _blockList2.default.saveChangesSchedule(schedule);
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
	    value: function getDuration(now) {
	      return _moment2.default.duration(now.diff(this.startTime)).asSeconds();
	    }
	  }, {
	    key: 'saveRecords',
	    value: function saveRecords() {
	      var _this3 = this;
	
	      console.log('saveRecords called: something must be working');
	      var timeElapsed = this.getDuration((0, _moment2.default)());
	      return _blockList2.default.reconcileRecords(this.currentSite, timeElapsed, 1).then(function () {
	        _blockList2.default.getSchedule().then(function (schedule) {
	          if (_this3.limitCD) {
	            schedule.setting.currentTime = schedule.setting.currentTime - timeElapsed;
	            _blockList2.default.saveChangesSchedule(schedule);
	          }
	        });
	      });
	    }
	  }, {
	    key: 'loadFilteredPage',
	    value: function loadFilteredPage(tabId, url) {
	      setTimeout(function () {
	        chrome.tabs.update(tabId, { url: url });
	      }, 500);
	    }
	  }, {
	    key: 'getScheduleEvent',
	    value: function getScheduleEvent(now, schedule) {
	      var dayOfWeek = now.day();
	      // moment.js starts with sunday as first day of week
	      var convertedDay = dayOfWeek === 6 ? 0 : dayOfWeek + 1;
	      var currentHour = now.get('hour');
	      var currentMinute = now.get('minute');
	      var currentQuarter = currentHour * 4 + Math.ceil(currentMinute / 15);
	      return schedule.items[convertedDay][currentQuarter].event;
	    }
	  }, {
	    key: 'handleAction',
	    value: function handleAction(site, action, tabId) {
	      var _this4 = this;
	
	      return _blockList2.default.getSchedule().then(function (schedule) {
	        var now = (0, _moment2.default)();
	        var event = _this4.getScheduleEvent(now, schedule);
	        switch (event) {
	          case 'Block All':
	            {
	              if (action === 'block') {
	                _this4.loadFilteredPage(tabId, BLOCKED_PAGE);
	              } else if (action === 'limit') {
	                _this4.loadFilteredPage(tabId, BLOCKED_PAGE);
	              } else {
	                _this4.handleNewDomainFocus();
	              }
	              break;
	            }
	          case 'Accept All':
	            _this4.handleNewDomainFocus();
	            break;
	          default:
	            {
	              if (action === 'block') {
	                _this4.loadFilteredPage(tabId, BLOCKED_PAGE);
	              } else if (action === 'limit') {
	                _this4.handleNewDomainFocus();
	                _this4.setLimitCD(tabId, schedule);
	              } else {
	                _this4.handleNewDomainFocus();
	              }
	              break;
	            }
	        }
	      });
	    }
	  }, {
	    key: 'setLimitCD',
	    value: function setLimitCD(tabId, schedule) {
	      var _this5 = this;
	
	      var currentTime = schedule.setting.currentTime;
	      console.log(currentTime);
	      if (currentTime > 0) {
	        this.limitCD = setTimeout(function () {
	          _this5.loadFilteredPage(tabId, BLOCKED_PAGE);
	        }, Math.round(currentTime * 1000));
	      } else {
	        this.loadFilteredPage(tabId, BLOCKED_PAGE);
	      }
	    }
	  }, {
	    key: 'matchPatterns',
	    value: function matchPatterns(url) {
	      return _blockList2.default.getRegexPatterns().then(function (patterns) {
	        if (patterns !== undefined && patterns.items.length > 0) {
	          return patterns.items.find(function (action) {
	            var reg = new RegExp(action.regex, 'i');
	            return reg.test(url);
	          });
	        }
	        return undefined;
	      });
	    }
	  }, {
	    key: 'webRequestHandler',
	    value: function webRequestHandler(details) {
	      if (this.isValidProtocol(details.url)) {
	        var site = (0, _wurl2.default)('domain', details.url);
	        this.urlCheck(site, details.tabId);
	      }
	      return {};
	    }
	  }, {
	    key: 'urlCheck',
	    value: function urlCheck(url, tabId) {
	      var _this6 = this;
	
	      console.log(url);
	      var site = (0, _wurl2.default)('domain', url);
	      this.currentSite = site;
	      this.currentTab = tabId;
	      console.log('urlCheck() runs');
	      _blockList2.default.getRecord(site).then(function (record) {
	        var aclMatch = record.advAction.find(function (action) {
	          var reg = new RegExp(action.regex, 'i');
	          return reg.test(url);
	        });
	        if (aclMatch) {
	          _this6.handleAction(site, aclMatch.action, tabId);
	        } else {
	          _this6.matchPatterns(url).then(function (patternMatch) {
	            if (patternMatch) {
	              _this6.handleAction(site, patternMatch.action, tabId);
	            } else {
	              _this6.handleAction(site, record.action, tabId);
	            }
	          });
	        }
	      }).catch(function () {
	        return _this6.matchPatterns(url).then(function (patternMatch) {
	          if (patternMatch) {
	            _this6.handleAction(site, patternMatch.action, tabId);
	          } else {
	            _this6.handleNewDomainFocus();
	          }
	        });
	      });
	    }
	  }]);
	  return Filter;
	}();
	
	exports.default = new Filter();

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi9+L21vbWVudC1kdXJhdGlvbi1mb3JtYXQvbGliL21vbWVudC1kdXJhdGlvbi1mb3JtYXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0ZpbHRlci5qcyJdLCJuYW1lcyI6WyJpbml0IiwidGhlbiIsIkJMT0NLRURfUEFHRSIsIkZpbHRlciIsImN1cnJlbnRTaXRlIiwiY3VycmVudFRhYiIsInBvcHVwIiwic3RhcnRUaW1lIiwibmV3RGF5VGltZXIiLCJzZXROZXdEYXlUaW1lciIsImxpbWl0Q0QiLCJ1bmRlZmluZWQiLCJmb2N1c0NvdW50Iiwid2ViUmVxdWVzdEhhbmRsZXIiLCJiaW5kIiwibWVzc2FnZUhhbmRsZXIiLCJjaHJvbWUiLCJydW50aW1lIiwib25NZXNzYWdlIiwiYWRkTGlzdGVuZXIiLCJ3ZWJSZXF1ZXN0Iiwib25CZWZvcmVSZXF1ZXN0IiwiZGVib3VuY2UiLCJ1cmxzIiwidHlwZXMiLCJyZXF1ZXN0Iiwic2VuZGVyIiwic2VuZFJlc3BvbnNlIiwiZm9jdXMiLCJpc1ZhbGlkUHJvdG9jb2wiLCJ0YWIiLCJ1cmwiLCJzZW5kZXJTaXRlIiwiY29uc29sZSIsImxvZyIsInVybENoZWNrIiwiaWQiLCJub3REdXBsaWNhdGVUYWJPckRvbWFpbiIsInNhdmVSZWNvcmRzIiwidGltZXIiLCJzZWNvbmRzIiwiZ2V0RHVyYXRpb24iLCJkb21haW4iLCJ0YWJJZCIsImNsZWFyVGltZW91dCIsInRvbW9ycm93IiwiYWRkIiwic3RhcnRPZiIsInNldFRpbWVvdXQiLCJpbml0TmV3RGF0ZSIsImdldFNjaGVkdWxlIiwic2NoZWR1bGUiLCJzZXR0aW5nIiwiY3VycmVudFRpbWUiLCJkYWlseUxpbWl0Iiwic2F2ZUNoYW5nZXNTY2hlZHVsZSIsImRpZmYiLCJwcm90b2NvbCIsIm5vdyIsImR1cmF0aW9uIiwiYXNTZWNvbmRzIiwidGltZUVsYXBzZWQiLCJyZWNvbmNpbGVSZWNvcmRzIiwidGFicyIsInVwZGF0ZSIsImRheU9mV2VlayIsImRheSIsImNvbnZlcnRlZERheSIsImN1cnJlbnRIb3VyIiwiZ2V0IiwiY3VycmVudE1pbnV0ZSIsImN1cnJlbnRRdWFydGVyIiwiTWF0aCIsImNlaWwiLCJpdGVtcyIsImV2ZW50Iiwic2l0ZSIsImFjdGlvbiIsImdldFNjaGVkdWxlRXZlbnQiLCJsb2FkRmlsdGVyZWRQYWdlIiwiaGFuZGxlTmV3RG9tYWluRm9jdXMiLCJzZXRMaW1pdENEIiwicm91bmQiLCJnZXRSZWdleFBhdHRlcm5zIiwicGF0dGVybnMiLCJsZW5ndGgiLCJmaW5kIiwicmVnIiwiUmVnRXhwIiwicmVnZXgiLCJ0ZXN0IiwiZGV0YWlscyIsImdldFJlY29yZCIsImFjbE1hdGNoIiwicmVjb3JkIiwiYWR2QWN0aW9uIiwiaGFuZGxlQWN0aW9uIiwibWF0Y2hQYXR0ZXJucyIsInBhdHRlcm5NYXRjaCIsImNhdGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0FBR0EscUJBQUdBLElBQUgsR0FBVUMsSUFBVixDQUFlLFlBQU07QUFDbkIsb0JBQU9ELElBQVA7QUFDRCxFQUZELEU7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF3QixlQUFlOztBQUV2QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQW9CLFVBQVU7QUFDOUI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQ0FBZ0MscUJBQXFCO0FBQ3JEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQ0FBZ0MscUJBQXFCO0FBQ3JEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBdUIsUUFBUTs7QUFFL0I7QUFDQSxrREFBaUQsUUFBUTtBQUN6RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBdUIsWUFBWTs7QUFFbkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFjLGdCQUFnQjtBQUM5QixJQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUJBQXdCLGNBQWM7QUFDdEMsSUFBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQW9CLGNBQWM7QUFDbEMsS0FBSTtBQUNKLElBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBK0IsaUJBQWlCO0FBQ2hEOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFFBQU8sbUNBQTRCLEU7QUFDbkM7QUFDQSxHOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXVCO0FBQ3ZCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFNOztBQUVOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9FQUFtRSxjQUFjO0FBQ2pGO0FBQ0E7QUFDQSxLQUFJOztBQUVKO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKOzs7QUFHQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4RjtBQUNBOztBQUVBO0FBQ0Esa0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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TCxzQkFBS3FELFlBQUwsQ0FBa0JwQixJQUFsQixFQUF3QmtCLE9BQU9qQixNQUEvQixFQUF1Q2xDLEtBQXZDO0FBQ0Q7QUFDRixZQVBIO0FBUUQ7QUFDRixRQWxCSCxFQW1CR3dELEtBbkJILENBbUJTO0FBQUEsZ0JBQU0sT0FBS0YsYUFBTCxDQUFtQmxFLEdBQW5CLEVBQ1Y5QixJQURVLENBQ0wsd0JBQWdCO0FBQ3BCLGVBQUlpRyxZQUFKLEVBQWtCO0FBQ2hCLG9CQUFLRixZQUFMLENBQWtCcEIsSUFBbEIsRUFBd0JzQixhQUFhckIsTUFBckMsRUFBNkNsQyxLQUE3QztBQUNELFlBRkQsTUFFTztBQUNMLG9CQUFLcUMsb0JBQUw7QUFDRDtBQUNGLFVBUFUsQ0FBTjtBQUFBLFFBbkJUO0FBMkJEOzs7OzttQkFHWSxJQUFJN0UsTUFBSixFIiwiZmlsZSI6ImJhY2tncm91bmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQkwgZnJvbSAnLi9ibG9ja0xpc3QuanMnO1xuaW1wb3J0IEZpbHRlciBmcm9tICcuL0ZpbHRlci5qcyc7XG5cblxuQkwuaW5pdCgpLnRoZW4oKCkgPT4ge1xuICBGaWx0ZXIuaW5pdCgpO1xufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYmFja2dyb3VuZC5qcyIsIi8qISBNb21lbnQgRHVyYXRpb24gRm9ybWF0IHYxLjMuMFxuICogIGh0dHBzOi8vZ2l0aHViLmNvbS9qc21yZWVzZS9tb21lbnQtZHVyYXRpb24tZm9ybWF0IFxuICogIERhdGU6IDIwMTQtMDctMTVcbiAqXG4gKiAgRHVyYXRpb24gZm9ybWF0IHBsdWdpbiBmdW5jdGlvbiBmb3IgdGhlIE1vbWVudC5qcyBsaWJyYXJ5XG4gKiAgaHR0cDovL21vbWVudGpzLmNvbS9cbiAqXG4gKiAgQ29weXJpZ2h0IDIwMTQgSm9obiBNYWRoYXZhbi1SZWVzZVxuICogIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuICovXG5cbihmdW5jdGlvbiAocm9vdCwgdW5kZWZpbmVkKSB7XG5cblx0Ly8gcmVwZWF0WmVybyhxdHkpXG5cdC8vIHJldHVybnMgXCIwXCIgcmVwZWF0ZWQgcXR5IHRpbWVzXG5cdGZ1bmN0aW9uIHJlcGVhdFplcm8ocXR5KSB7XG5cdFx0dmFyIHJlc3VsdCA9IFwiXCI7XG5cdFx0XG5cdFx0Ly8gZXhpdCBlYXJseVxuXHRcdC8vIGlmIHF0eSBpcyAwIG9yIGEgbmVnYXRpdmUgbnVtYmVyXG5cdFx0Ly8gb3IgZG9lc24ndCBjb2VyY2UgdG8gYW4gaW50ZWdlclxuXHRcdHF0eSA9IHBhcnNlSW50KHF0eSwgMTApO1xuXHRcdGlmICghcXR5IHx8IHF0eSA8IDEpIHsgcmV0dXJuIHJlc3VsdDsgfVxuXHRcdFxuXHRcdHdoaWxlIChxdHkpIHtcblx0XHRcdHJlc3VsdCArPSBcIjBcIjtcblx0XHRcdHF0eSAtPSAxO1xuXHRcdH1cblx0XHRcblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cdFxuXHQvLyBwYWRaZXJvKHN0ciwgbGVuIFssIGlzUmlnaHRdKVxuXHQvLyBwYWRzIGEgc3RyaW5nIHdpdGggemVyb3MgdXAgdG8gYSBzcGVjaWZpZWQgbGVuZ3RoXG5cdC8vIHdpbGwgbm90IHBhZCBhIHN0cmluZyBpZiBpdHMgbGVuZ3RoIGlzIGFyZWFkeVxuXHQvLyBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8gdGhlIHNwZWNpZmllZCBsZW5ndGhcblx0Ly8gZGVmYXVsdCBvdXRwdXQgcGFkcyB3aXRoIHplcm9zIG9uIHRoZSBsZWZ0XG5cdC8vIHNldCBpc1JpZ2h0IHRvIGB0cnVlYCB0byBwYWQgd2l0aCB6ZXJvcyBvbiB0aGUgcmlnaHRcblx0ZnVuY3Rpb24gcGFkWmVybyhzdHIsIGxlbiwgaXNSaWdodCkge1xuXHRcdGlmIChzdHIgPT0gbnVsbCkgeyBzdHIgPSBcIlwiOyB9XG5cdFx0c3RyID0gXCJcIiArIHN0cjtcblx0XHRcblx0XHRyZXR1cm4gKGlzUmlnaHQgPyBzdHIgOiBcIlwiKSArIHJlcGVhdFplcm8obGVuIC0gc3RyLmxlbmd0aCkgKyAoaXNSaWdodCA/IFwiXCIgOiBzdHIpO1xuXHR9XG5cdFxuXHQvLyBpc0FycmF5XG5cdGZ1bmN0aW9uIGlzQXJyYXkoYXJyYXkpIHtcblx0XHRyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFycmF5KSA9PT0gXCJbb2JqZWN0IEFycmF5XVwiO1xuXHR9XG5cdFxuXHQvLyBpc09iamVjdFxuXHRmdW5jdGlvbiBpc09iamVjdChvYmopIHtcblx0XHRyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikgPT09IFwiW29iamVjdCBPYmplY3RdXCI7XG5cdH1cblx0XG5cdC8vIGZpbmRMYXN0XG5cdGZ1bmN0aW9uIGZpbmRMYXN0KGFycmF5LCBjYWxsYmFjaykge1xuXHRcdHZhciBpbmRleCA9IGFycmF5Lmxlbmd0aDtcblxuXHRcdHdoaWxlIChpbmRleCAtPSAxKSB7XG5cdFx0XHRpZiAoY2FsbGJhY2soYXJyYXlbaW5kZXhdKSkgeyByZXR1cm4gYXJyYXlbaW5kZXhdOyB9XG5cdFx0fVxuXHR9XG5cblx0Ly8gZmluZFxuXHRmdW5jdGlvbiBmaW5kKGFycmF5LCBjYWxsYmFjaykge1xuXHRcdHZhciBpbmRleCA9IDAsXG5cdFx0XHRtYXggPSBhcnJheS5sZW5ndGgsXG5cdFx0XHRtYXRjaDtcblx0XHRcdFxuXHRcdGlmICh0eXBlb2YgY2FsbGJhY2sgIT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0bWF0Y2ggPSBjYWxsYmFjaztcblx0XHRcdGNhbGxiYWNrID0gZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdFx0cmV0dXJuIGl0ZW0gPT09IG1hdGNoO1xuXHRcdFx0fTtcblx0XHR9XG5cblx0XHR3aGlsZSAoaW5kZXggPCBtYXgpIHtcblx0XHRcdGlmIChjYWxsYmFjayhhcnJheVtpbmRleF0pKSB7IHJldHVybiBhcnJheVtpbmRleF07IH1cblx0XHRcdGluZGV4ICs9IDE7XG5cdFx0fVxuXHR9XG5cdFxuXHQvLyBlYWNoXG5cdGZ1bmN0aW9uIGVhY2goYXJyYXksIGNhbGxiYWNrKSB7XG5cdFx0dmFyIGluZGV4ID0gMCxcblx0XHRcdG1heCA9IGFycmF5Lmxlbmd0aDtcblx0XHRcdFxuXHRcdGlmICghYXJyYXkgfHwgIW1heCkgeyByZXR1cm47IH1cblxuXHRcdHdoaWxlIChpbmRleCA8IG1heCkge1xuXHRcdFx0aWYgKGNhbGxiYWNrKGFycmF5W2luZGV4XSwgaW5kZXgpID09PSBmYWxzZSkgeyByZXR1cm47IH1cblx0XHRcdGluZGV4ICs9IDE7XG5cdFx0fVxuXHR9XG5cdFxuXHQvLyBtYXBcblx0ZnVuY3Rpb24gbWFwKGFycmF5LCBjYWxsYmFjaykge1xuXHRcdHZhciBpbmRleCA9IDAsXG5cdFx0XHRtYXggPSBhcnJheS5sZW5ndGgsXG5cdFx0XHRyZXQgPSBbXTtcblxuXHRcdGlmICghYXJyYXkgfHwgIW1heCkgeyByZXR1cm4gcmV0OyB9XG5cdFx0XHRcdFxuXHRcdHdoaWxlIChpbmRleCA8IG1heCkge1xuXHRcdFx0cmV0W2luZGV4XSA9IGNhbGxiYWNrKGFycmF5W2luZGV4XSwgaW5kZXgpO1xuXHRcdFx0aW5kZXggKz0gMTtcblx0XHR9XG5cdFx0XG5cdFx0cmV0dXJuIHJldDtcblx0fVxuXHRcblx0Ly8gcGx1Y2tcblx0ZnVuY3Rpb24gcGx1Y2soYXJyYXksIHByb3ApIHtcblx0XHRyZXR1cm4gbWFwKGFycmF5LCBmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFx0cmV0dXJuIGl0ZW1bcHJvcF07XG5cdFx0fSk7XG5cdH1cblx0XG5cdC8vIGNvbXBhY3Rcblx0ZnVuY3Rpb24gY29tcGFjdChhcnJheSkge1xuXHRcdHZhciByZXQgPSBbXTtcblx0XHRcblx0XHRlYWNoKGFycmF5LCBmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFx0aWYgKGl0ZW0pIHsgcmV0LnB1c2goaXRlbSk7IH1cblx0XHR9KTtcblx0XHRcblx0XHRyZXR1cm4gcmV0O1xuXHR9XG5cdFxuXHQvLyB1bmlxdWVcblx0ZnVuY3Rpb24gdW5pcXVlKGFycmF5KSB7XG5cdFx0dmFyIHJldCA9IFtdO1xuXHRcdFxuXHRcdGVhY2goYXJyYXksIGZ1bmN0aW9uIChfYSkge1xuXHRcdFx0aWYgKCFmaW5kKHJldCwgX2EpKSB7IHJldC5wdXNoKF9hKTsgfVxuXHRcdH0pO1xuXHRcdFxuXHRcdHJldHVybiByZXQ7XG5cdH1cblx0XG5cdC8vIGludGVyc2VjdGlvblxuXHRmdW5jdGlvbiBpbnRlcnNlY3Rpb24oYSwgYikge1xuXHRcdHZhciByZXQgPSBbXTtcblx0XHRcblx0XHRlYWNoKGEsIGZ1bmN0aW9uIChfYSkge1xuXHRcdFx0ZWFjaChiLCBmdW5jdGlvbiAoX2IpIHtcblx0XHRcdFx0aWYgKF9hID09PSBfYikgeyByZXQucHVzaChfYSk7IH1cblx0XHRcdH0pO1xuXHRcdH0pO1xuXHRcdFxuXHRcdHJldHVybiB1bmlxdWUocmV0KTtcblx0fVxuXHRcblx0Ly8gcmVzdFxuXHRmdW5jdGlvbiByZXN0KGFycmF5LCBjYWxsYmFjaykge1xuXHRcdHZhciByZXQgPSBbXTtcblx0XHRcblx0XHRlYWNoKGFycmF5LCBmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcblx0XHRcdGlmICghY2FsbGJhY2soaXRlbSkpIHtcblx0XHRcdFx0cmV0ID0gYXJyYXkuc2xpY2UoaW5kZXgpO1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0XG5cdFx0cmV0dXJuIHJldDtcblx0fVxuXG5cdC8vIGluaXRpYWxcblx0ZnVuY3Rpb24gaW5pdGlhbChhcnJheSwgY2FsbGJhY2spIHtcblx0XHR2YXIgcmV2ZXJzZWQgPSBhcnJheS5zbGljZSgpLnJldmVyc2UoKTtcblx0XHRcblx0XHRyZXR1cm4gcmVzdChyZXZlcnNlZCwgY2FsbGJhY2spLnJldmVyc2UoKTtcblx0fVxuXHRcblx0Ly8gZXh0ZW5kXG5cdGZ1bmN0aW9uIGV4dGVuZChhLCBiKSB7XG5cdFx0Zm9yICh2YXIga2V5IGluIGIpIHtcblx0XHRcdGlmIChiLmhhc093blByb3BlcnR5KGtleSkpIHsgYVtrZXldID0gYltrZXldOyB9XG5cdFx0fVxuXHRcdFxuXHRcdHJldHVybiBhO1xuXHR9XG5cdFx0XHRcblx0Ly8gZGVmaW5lIGludGVybmFsIG1vbWVudCByZWZlcmVuY2Vcblx0dmFyIG1vbWVudDtcblxuXHRpZiAodHlwZW9mIHJlcXVpcmUgPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdHRyeSB7IG1vbWVudCA9IHJlcXVpcmUoJ21vbWVudCcpOyB9IFxuXHRcdGNhdGNoIChlKSB7fVxuXHR9IFxuXHRcblx0aWYgKCFtb21lbnQgJiYgcm9vdC5tb21lbnQpIHtcblx0XHRtb21lbnQgPSByb290Lm1vbWVudDtcblx0fVxuXHRcblx0aWYgKCFtb21lbnQpIHtcblx0XHR0aHJvdyBcIk1vbWVudCBEdXJhdGlvbiBGb3JtYXQgY2Fubm90IGZpbmQgTW9tZW50LmpzXCI7XG5cdH1cblx0XG5cdC8vIG1vbWVudC5kdXJhdGlvbi5mb3JtYXQoW3RlbXBsYXRlXSBbLCBwcmVjaXNpb25dIFssIHNldHRpbmdzXSlcblx0bW9tZW50LmR1cmF0aW9uLmZuLmZvcm1hdCA9IGZ1bmN0aW9uICgpIHtcblxuXHRcdHZhciB0b2tlbml6ZXIsIHRva2VucywgdHlwZXMsIHR5cGVNYXAsIG1vbWVudFR5cGVzLCBmb3VuZEZpcnN0LCB0cmltSW5kZXgsXG5cdFx0XHRhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpLFxuXHRcdFx0c2V0dGluZ3MgPSBleHRlbmQoe30sIHRoaXMuZm9ybWF0LmRlZmF1bHRzKSxcblx0XHRcdC8vIGtlZXAgYSBzaGFkb3cgY29weSBvZiB0aGlzIG1vbWVudCBmb3IgY2FsY3VsYXRpbmcgcmVtYWluZGVyc1xuXHRcdFx0cmVtYWluZGVyID0gbW9tZW50LmR1cmF0aW9uKHRoaXMpO1xuXG5cdFx0Ly8gYWRkIGEgcmVmZXJlbmNlIHRvIHRoaXMgZHVyYXRpb24gb2JqZWN0IHRvIHRoZSBzZXR0aW5ncyBmb3IgdXNlXG5cdFx0Ly8gaW4gYSB0ZW1wbGF0ZSBmdW5jdGlvblxuXHRcdHNldHRpbmdzLmR1cmF0aW9uID0gdGhpcztcblxuXHRcdC8vIHBhcnNlIGFyZ3VtZW50c1xuXHRcdGVhY2goYXJncywgZnVuY3Rpb24gKGFyZykge1xuXHRcdFx0aWYgKHR5cGVvZiBhcmcgPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIGFyZyA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdHNldHRpbmdzLnRlbXBsYXRlID0gYXJnO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0eXBlb2YgYXJnID09PSBcIm51bWJlclwiKSB7XG5cdFx0XHRcdHNldHRpbmdzLnByZWNpc2lvbiA9IGFyZztcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoaXNPYmplY3QoYXJnKSkge1xuXHRcdFx0XHRleHRlbmQoc2V0dGluZ3MsIGFyZyk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHQvLyB0eXBlc1xuXHRcdHR5cGVzID0gc2V0dGluZ3MudHlwZXMgPSAoaXNBcnJheShzZXR0aW5ncy50eXBlcykgPyBzZXR0aW5ncy50eXBlcyA6IHNldHRpbmdzLnR5cGVzLnNwbGl0KFwiIFwiKSk7XG5cblx0XHQvLyB0ZW1wbGF0ZVxuXHRcdGlmICh0eXBlb2Ygc2V0dGluZ3MudGVtcGxhdGUgPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0c2V0dGluZ3MudGVtcGxhdGUgPSBzZXR0aW5ncy50ZW1wbGF0ZS5hcHBseShzZXR0aW5ncyk7XG5cdFx0fVxuXG5cdFx0Ly8gdG9rZW5pemVyIHJlZ2V4cFxuXHRcdHRva2VuaXplciA9IG5ldyBSZWdFeHAobWFwKHR5cGVzLCBmdW5jdGlvbiAodHlwZSkge1xuXHRcdFx0cmV0dXJuIHNldHRpbmdzW3R5cGVdLnNvdXJjZTtcblx0XHR9KS5qb2luKFwifFwiKSwgXCJnXCIpO1xuXG5cdFx0Ly8gdG9rZW4gdHlwZSBtYXAgZnVuY3Rpb25cblx0XHR0eXBlTWFwID0gZnVuY3Rpb24gKHRva2VuKSB7XG5cdFx0XHRyZXR1cm4gZmluZCh0eXBlcywgZnVuY3Rpb24gKHR5cGUpIHtcblx0XHRcdFx0cmV0dXJuIHNldHRpbmdzW3R5cGVdLnRlc3QodG9rZW4pO1xuXHRcdFx0fSk7XG5cdFx0fTtcblxuXHRcdC8vIHRva2VucyBhcnJheVxuXHRcdHRva2VucyA9IG1hcChzZXR0aW5ncy50ZW1wbGF0ZS5tYXRjaCh0b2tlbml6ZXIpLCBmdW5jdGlvbiAodG9rZW4sIGluZGV4KSB7XG5cdFx0XHR2YXIgdHlwZSA9IHR5cGVNYXAodG9rZW4pLFxuXHRcdFx0XHRsZW5ndGggPSB0b2tlbi5sZW5ndGg7XG5cblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGluZGV4OiBpbmRleCxcblx0XHRcdFx0bGVuZ3RoOiBsZW5ndGgsXG5cblx0XHRcdFx0Ly8gcmVwbGFjZSBlc2NhcGVkIHRva2VucyB3aXRoIHRoZSBub24tZXNjYXBlZCB0b2tlbiB0ZXh0XG5cdFx0XHRcdHRva2VuOiAodHlwZSA9PT0gXCJlc2NhcGVcIiA/IHRva2VuLnJlcGxhY2Uoc2V0dGluZ3MuZXNjYXBlLCBcIiQxXCIpIDogdG9rZW4pLFxuXG5cdFx0XHRcdC8vIGlnbm9yZSB0eXBlIG9uIG5vbi1tb21lbnQgdG9rZW5zXG5cdFx0XHRcdHR5cGU6ICgodHlwZSA9PT0gXCJlc2NhcGVcIiB8fCB0eXBlID09PSBcImdlbmVyYWxcIikgPyBudWxsIDogdHlwZSlcblxuXHRcdFx0XHQvLyBjYWxjdWxhdGUgYmFzZSB2YWx1ZSBmb3IgYWxsIG1vbWVudCB0b2tlbnNcblx0XHRcdFx0Ly9iYXNlVmFsdWU6ICgodHlwZSA9PT0gXCJlc2NhcGVcIiB8fCB0eXBlID09PSBcImdlbmVyYWxcIikgPyBudWxsIDogdGhpcy5hcyh0eXBlKSlcblx0XHRcdH07XG5cdFx0fSwgdGhpcyk7XG5cblx0XHQvLyB1bmlxdWUgbW9tZW50IHRva2VuIHR5cGVzIGluIHRoZSB0ZW1wbGF0ZSAoaW4gb3JkZXIgb2YgZGVzY2VuZGluZyBtYWduaXR1ZGUpXG5cdFx0bW9tZW50VHlwZXMgPSBpbnRlcnNlY3Rpb24odHlwZXMsIHVuaXF1ZShjb21wYWN0KHBsdWNrKHRva2VucywgXCJ0eXBlXCIpKSkpO1xuXG5cdFx0Ly8gZXhpdCBlYXJseSBpZiB0aGVyZSBhcmUgbm8gbW9tZW50VHlwZXNcblx0XHRpZiAoIW1vbWVudFR5cGVzLmxlbmd0aCkge1xuXHRcdFx0cmV0dXJuIHBsdWNrKHRva2VucywgXCJ0b2tlblwiKS5qb2luKFwiXCIpO1xuXHRcdH1cblxuXHRcdC8vIGNhbGN1bGF0ZSB2YWx1ZXMgZm9yIGVhY2ggdG9rZW4gdHlwZSBpbiB0aGUgdGVtcGxhdGVcblx0XHRlYWNoKG1vbWVudFR5cGVzLCBmdW5jdGlvbiAobW9tZW50VHlwZSwgaW5kZXgpIHtcblx0XHRcdHZhciB2YWx1ZSwgd2hvbGVWYWx1ZSwgZGVjaW1hbFZhbHVlLCBpc0xlYXN0LCBpc01vc3Q7XG5cblx0XHRcdC8vIGNhbGN1bGF0ZSBpbnRlZ2VyIGFuZCBkZWNpbWFsIHZhbHVlIHBvcnRpb25zXG5cdFx0XHR2YWx1ZSA9IHJlbWFpbmRlci5hcyhtb21lbnRUeXBlKTtcblx0XHRcdHdob2xlVmFsdWUgPSAodmFsdWUgPiAwID8gTWF0aC5mbG9vcih2YWx1ZSkgOiBNYXRoLmNlaWwodmFsdWUpKTtcblx0XHRcdGRlY2ltYWxWYWx1ZSA9IHZhbHVlIC0gd2hvbGVWYWx1ZTtcblxuXHRcdFx0Ly8gaXMgdGhpcyB0aGUgbGVhc3Qtc2lnbmlmaWNhbnQgbW9tZW50IHRva2VuIGZvdW5kP1xuXHRcdFx0aXNMZWFzdCA9ICgoaW5kZXggKyAxKSA9PT0gbW9tZW50VHlwZXMubGVuZ3RoKTtcblxuXHRcdFx0Ly8gaXMgdGhpcyB0aGUgbW9zdC1zaWduaWZpY2FudCBtb21lbnQgdG9rZW4gZm91bmQ/XG5cdFx0XHRpc01vc3QgPSAoIWluZGV4KTtcblxuXHRcdFx0Ly8gdXBkYXRlIHRva2VucyBhcnJheVxuXHRcdFx0Ly8gdXNpbmcgdGhpcyBhbGdvcml0aG0gdG8gbm90IGFzc3VtZSBhbnl0aGluZyBhYm91dFxuXHRcdFx0Ly8gdGhlIG9yZGVyIG9yIGZyZXF1ZW5jeSBvZiBhbnkgdG9rZW5zXG5cdFx0XHRlYWNoKHRva2VucywgZnVuY3Rpb24gKHRva2VuKSB7XG5cdFx0XHRcdGlmICh0b2tlbi50eXBlID09PSBtb21lbnRUeXBlKSB7XG5cdFx0XHRcdFx0ZXh0ZW5kKHRva2VuLCB7XG5cdFx0XHRcdFx0XHR2YWx1ZTogdmFsdWUsXG5cdFx0XHRcdFx0XHR3aG9sZVZhbHVlOiB3aG9sZVZhbHVlLFxuXHRcdFx0XHRcdFx0ZGVjaW1hbFZhbHVlOiBkZWNpbWFsVmFsdWUsXG5cdFx0XHRcdFx0XHRpc0xlYXN0OiBpc0xlYXN0LFxuXHRcdFx0XHRcdFx0aXNNb3N0OiBpc01vc3Rcblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdGlmIChpc01vc3QpIHtcblx0XHRcdFx0XHRcdC8vIG5vdGUgdGhlIGxlbmd0aCBvZiB0aGUgbW9zdC1zaWduaWZpY2FudCBtb21lbnQgdG9rZW46XG5cdFx0XHRcdFx0XHQvLyBpZiBpdCBpcyBncmVhdGVyIHRoYW4gb25lIGFuZCBmb3JjZUxlbmd0aCBpcyBub3Qgc2V0LCBkZWZhdWx0IGZvcmNlTGVuZ3RoIHRvIGB0cnVlYFxuXHRcdFx0XHRcdFx0aWYgKHNldHRpbmdzLmZvcmNlTGVuZ3RoID09IG51bGwgJiYgdG9rZW4ubGVuZ3RoID4gMSkge1xuXHRcdFx0XHRcdFx0XHRzZXR0aW5ncy5mb3JjZUxlbmd0aCA9IHRydWU7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC8vIHJhdGlvbmFsZSBpcyB0aGlzOlxuXHRcdFx0XHRcdFx0Ly8gaWYgdGhlIHRlbXBsYXRlIGlzIFwiaDptbTpzc1wiIGFuZCB0aGUgbW9tZW50IHZhbHVlIGlzIDUgbWludXRlcywgdGhlIHVzZXItZnJpZW5kbHkgb3V0cHV0IGlzIFwiNTowMFwiLCBub3QgXCIwNTowMFwiXG5cdFx0XHRcdFx0XHQvLyBzaG91bGRuJ3QgcGFkIHRoZSBgbWludXRlc2AgdG9rZW4gZXZlbiB0aG91Z2ggaXQgaGFzIGxlbmd0aCBvZiB0d29cblx0XHRcdFx0XHRcdC8vIGlmIHRoZSB0ZW1wbGF0ZSBpcyBcImhoOm1tOnNzXCIsIHRoZSB1c2VyIGNsZWFybHkgd2FudGVkIGV2ZXJ5dGhpbmcgcGFkZGVkIHNvIHdlIHNob3VsZCBvdXRwdXQgXCIwNTowMFwiXG5cdFx0XHRcdFx0XHQvLyBpZiB0aGUgdXNlciB3YW50ZWQgdGhlIGZ1bGwgcGFkZGVkIG91dHB1dCwgdGhleSBjYW4gc2V0IGB7IHRyaW06IGZhbHNlIH1gIHRvIGdldCBcIjAwOjA1OjAwXCJcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHQvLyB1cGRhdGUgcmVtYWluZGVyXG5cdFx0XHRyZW1haW5kZXIuc3VidHJhY3Qod2hvbGVWYWx1ZSwgbW9tZW50VHlwZSk7XG5cdFx0fSk7XG5cdFxuXHRcdC8vIHRyaW0gdG9rZW5zIGFycmF5XG5cdFx0aWYgKHNldHRpbmdzLnRyaW0pIHtcblx0XHRcdHRva2VucyA9IChzZXR0aW5ncy50cmltID09PSBcImxlZnRcIiA/IHJlc3QgOiBpbml0aWFsKSh0b2tlbnMsIGZ1bmN0aW9uICh0b2tlbikge1xuXHRcdFx0XHQvLyByZXR1cm4gYHRydWVgIGlmOlxuXHRcdFx0XHQvLyB0aGUgdG9rZW4gaXMgbm90IHRoZSBsZWFzdCBtb21lbnQgdG9rZW4gKGRvbid0IHRyaW0gdGhlIGxlYXN0IG1vbWVudCB0b2tlbilcblx0XHRcdFx0Ly8gdGhlIHRva2VuIGlzIGEgbW9tZW50IHRva2VuIHRoYXQgZG9lcyBub3QgaGF2ZSBhIHZhbHVlIChkb24ndCB0cmltIG1vbWVudCB0b2tlbnMgdGhhdCBoYXZlIGEgd2hvbGUgdmFsdWUpXG5cdFx0XHRcdHJldHVybiAhKHRva2VuLmlzTGVhc3QgfHwgKHRva2VuLnR5cGUgIT0gbnVsbCAmJiB0b2tlbi53aG9sZVZhbHVlKSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0XG5cdFx0XG5cdFx0Ly8gYnVpbGQgb3V0cHV0XG5cblx0XHQvLyB0aGUgZmlyc3QgbW9tZW50IHRva2VuIGNhbiBoYXZlIHNwZWNpYWwgaGFuZGxpbmdcblx0XHRmb3VuZEZpcnN0ID0gZmFsc2U7XG5cblx0XHQvLyBydW4gdGhlIG1hcCBpbiByZXZlcnNlIG9yZGVyIGlmIHRyaW1taW5nIGZyb20gdGhlIHJpZ2h0XG5cdFx0aWYgKHNldHRpbmdzLnRyaW0gPT09IFwicmlnaHRcIikge1xuXHRcdFx0dG9rZW5zLnJldmVyc2UoKTtcblx0XHR9XG5cblx0XHR0b2tlbnMgPSBtYXAodG9rZW5zLCBmdW5jdGlvbiAodG9rZW4pIHtcblx0XHRcdHZhciB2YWwsXG5cdFx0XHRcdGRlY1ZhbDtcblxuXHRcdFx0aWYgKCF0b2tlbi50eXBlKSB7XG5cdFx0XHRcdC8vIGlmIGl0IGlzIG5vdCBhIG1vbWVudCB0b2tlbiwgdXNlIHRoZSB0b2tlbiBhcyBpdHMgb3duIHZhbHVlXG5cdFx0XHRcdHJldHVybiB0b2tlbi50b2tlbjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gYXBwbHkgbmVnYXRpdmUgcHJlY2lzaW9uIGZvcm1hdHRpbmcgdG8gdGhlIGxlYXN0LXNpZ25pZmljYW50IG1vbWVudCB0b2tlblxuXHRcdFx0aWYgKHRva2VuLmlzTGVhc3QgJiYgKHNldHRpbmdzLnByZWNpc2lvbiA8IDApKSB7XG5cdFx0XHRcdHZhbCA9IChNYXRoLmZsb29yKHRva2VuLndob2xlVmFsdWUgKiBNYXRoLnBvdygxMCwgc2V0dGluZ3MucHJlY2lzaW9uKSkgKiBNYXRoLnBvdygxMCwgLXNldHRpbmdzLnByZWNpc2lvbikpLnRvU3RyaW5nKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2YWwgPSB0b2tlbi53aG9sZVZhbHVlLnRvU3RyaW5nKCk7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdC8vIHJlbW92ZSBuZWdhdGl2ZSBzaWduIGZyb20gdGhlIGJlZ2lubmluZ1xuXHRcdFx0dmFsID0gdmFsLnJlcGxhY2UoL15cXC0vLCBcIlwiKTtcblxuXHRcdFx0Ly8gYXBwbHkgdG9rZW4gbGVuZ3RoIGZvcm1hdHRpbmdcblx0XHRcdC8vIHNwZWNpYWwgaGFuZGxpbmcgZm9yIHRoZSBmaXJzdCBtb21lbnQgdG9rZW4gdGhhdCBpcyBub3QgdGhlIG1vc3Qgc2lnbmlmaWNhbnQgaW4gYSB0cmltbWVkIHRlbXBsYXRlXG5cdFx0XHRpZiAodG9rZW4ubGVuZ3RoID4gMSAmJiAoZm91bmRGaXJzdCB8fCB0b2tlbi5pc01vc3QgfHwgc2V0dGluZ3MuZm9yY2VMZW5ndGgpKSB7XG5cdFx0XHRcdHZhbCA9IHBhZFplcm8odmFsLCB0b2tlbi5sZW5ndGgpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBhZGQgZGVjaW1hbCB2YWx1ZSBpZiBwcmVjaXNpb24gPiAwXG5cdFx0XHRpZiAodG9rZW4uaXNMZWFzdCAmJiAoc2V0dGluZ3MucHJlY2lzaW9uID4gMCkpIHtcblx0XHRcdFx0ZGVjVmFsID0gdG9rZW4uZGVjaW1hbFZhbHVlLnRvU3RyaW5nKCkucmVwbGFjZSgvXlxcLS8sIFwiXCIpLnNwbGl0KC9cXC58ZVxcLS8pO1xuXHRcdFx0XHRzd2l0Y2ggKGRlY1ZhbC5sZW5ndGgpIHtcblx0XHRcdFx0XHRjYXNlIDE6XG5cdFx0XHRcdFx0XHR2YWwgKz0gXCIuXCIgKyBwYWRaZXJvKGRlY1ZhbFswXSwgc2V0dGluZ3MucHJlY2lzaW9uLCB0cnVlKS5zbGljZSgwLCBzZXR0aW5ncy5wcmVjaXNpb24pO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRjYXNlIDI6XG5cdFx0XHRcdFx0XHR2YWwgKz0gXCIuXCIgKyBwYWRaZXJvKGRlY1ZhbFsxXSwgc2V0dGluZ3MucHJlY2lzaW9uLCB0cnVlKS5zbGljZSgwLCBzZXR0aW5ncy5wcmVjaXNpb24pO1x0XHRcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0Y2FzZSAzOlxuXHRcdFx0XHRcdFx0dmFsICs9IFwiLlwiICsgcGFkWmVybyhyZXBlYXRaZXJvKCgrZGVjVmFsWzJdKSAtIDEpICsgKGRlY1ZhbFswXSB8fCBcIjBcIikgKyBkZWNWYWxbMV0sIHNldHRpbmdzLnByZWNpc2lvbiwgdHJ1ZSkuc2xpY2UoMCwgc2V0dGluZ3MucHJlY2lzaW9uKTtcdFx0XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0dGhyb3cgXCJNb21lbnQgRHVyYXRpb24gRm9ybWF0OiB1bmFibGUgdG8gcGFyc2UgdG9rZW4gZGVjaW1hbCB2YWx1ZS5cIjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHQvLyBhZGQgYSBuZWdhdGl2ZSBzaWduIGlmIHRoZSB2YWx1ZSBpcyBuZWdhdGl2ZSBhbmQgdG9rZW4gaXMgbW9zdCBzaWduaWZpY2FudFxuXHRcdFx0aWYgKHRva2VuLmlzTW9zdCAmJiB0b2tlbi52YWx1ZSA8IDApIHtcblx0XHRcdFx0dmFsID0gXCItXCIgKyB2YWw7XG5cdFx0XHR9XG5cblx0XHRcdGZvdW5kRmlyc3QgPSB0cnVlO1xuXG5cdFx0XHRyZXR1cm4gdmFsO1xuXHRcdH0pO1xuXG5cdFx0Ly8gdW5kbyB0aGUgcmV2ZXJzZSBpZiB0cmltbWluZyBmcm9tIHRoZSByaWdodFxuXHRcdGlmIChzZXR0aW5ncy50cmltID09PSBcInJpZ2h0XCIpIHtcblx0XHRcdHRva2Vucy5yZXZlcnNlKCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRva2Vucy5qb2luKFwiXCIpO1xuXHR9O1xuXG5cdG1vbWVudC5kdXJhdGlvbi5mbi5mb3JtYXQuZGVmYXVsdHMgPSB7XG5cdFx0Ly8gdG9rZW4gZGVmaW5pdGlvbnNcblx0XHRlc2NhcGU6IC9cXFsoLis/KVxcXS8sXG5cdFx0eWVhcnM6IC9bWXldKy8sXG5cdFx0bW9udGhzOiAvTSsvLFxuXHRcdHdlZWtzOiAvW1d3XSsvLFxuXHRcdGRheXM6IC9bRGRdKy8sXG5cdFx0aG91cnM6IC9bSGhdKy8sXG5cdFx0bWludXRlczogL20rLyxcblx0XHRzZWNvbmRzOiAvcysvLFxuXHRcdG1pbGxpc2Vjb25kczogL1MrLyxcblx0XHRnZW5lcmFsOiAvLis/LyxcblxuXHRcdC8vIHRva2VuIHR5cGUgbmFtZXNcblx0XHQvLyBpbiBvcmRlciBvZiBkZXNjZW5kaW5nIG1hZ25pdHVkZVxuXHRcdC8vIGNhbiBiZSBhIHNwYWNlLXNlcGFyYXRlZCB0b2tlbiBuYW1lIGxpc3Qgb3IgYW4gYXJyYXkgb2YgdG9rZW4gbmFtZXNcblx0XHR0eXBlczogXCJlc2NhcGUgeWVhcnMgbW9udGhzIHdlZWtzIGRheXMgaG91cnMgbWludXRlcyBzZWNvbmRzIG1pbGxpc2Vjb25kcyBnZW5lcmFsXCIsXG5cblx0XHQvLyBmb3JtYXQgb3B0aW9uc1xuXG5cdFx0Ly8gdHJpbVxuXHRcdC8vIFwibGVmdFwiIC0gdGVtcGxhdGUgdG9rZW5zIGFyZSB0cmltbWVkIGZyb20gdGhlIGxlZnQgdW50aWwgdGhlIGZpcnN0IG1vbWVudCB0b2tlbiB0aGF0IGhhcyBhIHZhbHVlID49IDFcblx0XHQvLyBcInJpZ2h0XCIgLSB0ZW1wbGF0ZSB0b2tlbnMgYXJlIHRyaW1tZWQgZnJvbSB0aGUgcmlnaHQgdW50aWwgdGhlIGZpcnN0IG1vbWVudCB0b2tlbiB0aGF0IGhhcyBhIHZhbHVlID49IDFcblx0XHQvLyAodGhlIGZpbmFsIG1vbWVudCB0b2tlbiBpcyBub3QgdHJpbW1lZCwgcmVnYXJkbGVzcyBvZiB2YWx1ZSlcblx0XHQvLyBgZmFsc2VgIC0gdGVtcGxhdGUgdG9rZW5zIGFyZSBub3QgdHJpbW1lZFxuXHRcdHRyaW06IFwibGVmdFwiLFxuXG5cdFx0Ly8gcHJlY2lzaW9uXG5cdFx0Ly8gbnVtYmVyIG9mIGRlY2ltYWwgZGlnaXRzIHRvIGluY2x1ZGUgYWZ0ZXIgKHRvIHRoZSByaWdodCBvZikgdGhlIGRlY2ltYWwgcG9pbnQgKHBvc2l0aXZlIGludGVnZXIpXG5cdFx0Ly8gb3IgdGhlIG51bWJlciBvZiBkaWdpdHMgdG8gdHJ1bmNhdGUgdG8gMCBiZWZvcmUgKHRvIHRoZSBsZWZ0IG9mKSB0aGUgZGVjaW1hbCBwb2ludCAobmVnYXRpdmUgaW50ZWdlcilcblx0XHRwcmVjaXNpb246IDAsXG5cblx0XHQvLyBmb3JjZSBmaXJzdCBtb21lbnQgdG9rZW4gd2l0aCBhIHZhbHVlIHRvIHJlbmRlciBhdCBmdWxsIGxlbmd0aCBldmVuIHdoZW4gdGVtcGxhdGUgaXMgdHJpbW1lZCBhbmQgZmlyc3QgbW9tZW50IHRva2VuIGhhcyBsZW5ndGggb2YgMVxuXHRcdGZvcmNlTGVuZ3RoOiBudWxsLFxuXG5cdFx0Ly8gdGVtcGxhdGUgdXNlZCB0byBmb3JtYXQgZHVyYXRpb25cblx0XHQvLyBtYXkgYmUgYSBmdW5jdGlvbiBvciBhIHN0cmluZ1xuXHRcdC8vIHRlbXBsYXRlIGZ1bmN0aW9ucyBhcmUgZXhlY3V0ZWQgd2l0aCB0aGUgYHRoaXNgIGJpbmRpbmcgb2YgdGhlIHNldHRpbmdzIG9iamVjdFxuXHRcdC8vIHNvIHRoYXQgdGVtcGxhdGUgc3RyaW5ncyBtYXkgYmUgZHluYW1pY2FsbHkgZ2VuZXJhdGVkIGJhc2VkIG9uIHRoZSBkdXJhdGlvbiBvYmplY3Rcblx0XHQvLyAoYWNjZXNzaWJsZSB2aWEgYHRoaXMuZHVyYXRpb25gKVxuXHRcdC8vIG9yIGFueSBvZiB0aGUgb3RoZXIgc2V0dGluZ3Ncblx0XHR0ZW1wbGF0ZTogZnVuY3Rpb24gKCkge1xuXHRcdFx0dmFyIHR5cGVzID0gdGhpcy50eXBlcyxcblx0XHRcdFx0ZHVyID0gdGhpcy5kdXJhdGlvbixcblx0XHRcdFx0bGFzdFR5cGUgPSBmaW5kTGFzdCh0eXBlcywgZnVuY3Rpb24gKHR5cGUpIHtcblx0XHRcdFx0XHRyZXR1cm4gZHVyLl9kYXRhW3R5cGVdO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0Ly8gZGVmYXVsdCB0ZW1wbGF0ZSBzdHJpbmdzIGZvciBlYWNoIGR1cmF0aW9uIGRpbWVuc2lvbiB0eXBlXG5cdFx0XHRzd2l0Y2ggKGxhc3RUeXBlKSB7XG5cdFx0XHRcdGNhc2UgXCJzZWNvbmRzXCI6XG5cdFx0XHRcdFx0cmV0dXJuIFwiaDptbTpzc1wiO1xuXHRcdFx0XHRjYXNlIFwibWludXRlc1wiOlxuXHRcdFx0XHRcdHJldHVybiBcImRbZF0gaDptbVwiO1xuXHRcdFx0XHRjYXNlIFwiaG91cnNcIjpcblx0XHRcdFx0XHRyZXR1cm4gXCJkW2RdIGhbaF1cIjtcblx0XHRcdFx0Y2FzZSBcImRheXNcIjpcblx0XHRcdFx0XHRyZXR1cm4gXCJNW21dIGRbZF1cIjtcblx0XHRcdFx0Y2FzZSBcIndlZWtzXCI6XG5cdFx0XHRcdFx0cmV0dXJuIFwieVt5XSB3W3ddXCI7XG5cdFx0XHRcdGNhc2UgXCJtb250aHNcIjpcblx0XHRcdFx0XHRyZXR1cm4gXCJ5W3ldIE1bbV1cIjtcblx0XHRcdFx0Y2FzZSBcInllYXJzXCI6XG5cdFx0XHRcdFx0cmV0dXJuIFwieVt5XVwiO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdHJldHVybiBcInlbeV0gTVttXSBkW2RdIGg6bW06c3NcIjtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cbn0pKHRoaXMpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L21vbWVudC1kdXJhdGlvbi1mb3JtYXQvbGliL21vbWVudC1kdXJhdGlvbi1mb3JtYXQuanNcbi8vIG1vZHVsZSBpZCA9IDY1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJpbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgJ21vbWVudC1kdXJhdGlvbi1mb3JtYXQnO1xuaW1wb3J0IHd1cmwgZnJvbSAnd3VybCc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IEJMIGZyb20gJy4vYmxvY2tMaXN0LmpzJztcblxuLy8gVGhpcyBpcyBwb3NzaWJseSBzb21lIG9mIHRoZSB3b3JzdCBjb2RlIEkgaGF2ZSBldmVyIHdyaXR0ZW4gYW5kIEkgcmVhbGx5IG5lZWQgYmV0dGVyIHBhcmFkaWdtXG4vLyBmb3IgY29tcGxpY2F0ZWQgY29uY3VycmVudGN5XG5cbmNvbnN0IEJMT0NLRURfUEFHRSA9ICdodHRwczovL3d3dy5naXRodWIuY29tL3dybGVza292ZWMnO1xuXG5jbGFzcyBGaWx0ZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmN1cnJlbnRTaXRlID0gbnVsbDtcbiAgICB0aGlzLmN1cnJlbnRUYWIgPSBudWxsO1xuICAgIHRoaXMucG9wdXAgPSBmYWxzZTtcbiAgICB0aGlzLnN0YXJ0VGltZSA9IG51bGw7XG4gICAgdGhpcy5uZXdEYXlUaW1lciA9IHRoaXMuc2V0TmV3RGF5VGltZXIoKTtcbiAgICB0aGlzLmxpbWl0Q0QgPSB1bmRlZmluZWQ7XG4gICAgLy8gVGhpcyBpcyB0byBkZWFsIHdpdGggYmx1ciBhc3luYyB3ZWlyZG5lc3NcbiAgICB0aGlzLmZvY3VzQ291bnQgPSAwO1xuICAgIC8vIE5lZWQgdG8gYmluZCBzaW5jZSBJJ20gY2FsbGluZyBpdCBleHRlcm5hbGx5XG4gICAgdGhpcy53ZWJSZXF1ZXN0SGFuZGxlciA9IHRoaXMud2ViUmVxdWVzdEhhbmRsZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyID0gdGhpcy5tZXNzYWdlSGFuZGxlci5iaW5kKHRoaXMpO1xuICB9XG4gIGluaXQoKSB7XG4gICAgLy8gY2hyb21lLndpbmRvd3MuZ2V0QWxsKHsgcG9wdWxhdGU6IHRydWUgfSwgKHdpbmRvd3MpID0+IHtcbiAgICAvLyAgIHdpbmRvd3MuZm9yRWFjaCgod2luKSA9PiB7XG4gICAgLy8gICAgIHdpbi50YWJzLmZvckVhY2goKHRhYikgPT4ge1xuICAgIC8vICAgICAgIGlmICh0aGlzLmlzVmFsaWRQcm90b2NvbCh0YWIudXJsKSkge1xuICAgIC8vICAgICAgICAgY2hyb21lLnRhYnMuZXhlY3V0ZVNjcmlwdCh0YWIuaWQsIHsgZmlsZTogJ2NvbnRlbnQuanMnIH0pO1xuICAgIC8vICAgICAgIH1cbiAgICAvLyAgICAgfSk7XG4gICAgLy8gICB9KTtcbiAgICAvLyB9KTtcbiAgICAvLyBpbnRlcmFjdGluZyB3aXRoIHBvcHVwIGZvciB0aW1lciAmIGNvbnRlbnQuanNcbiAgICBjaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIodGhpcy5tZXNzYWdlSGFuZGxlcik7XG5cbiAgICBjaHJvbWUud2ViUmVxdWVzdC5vbkJlZm9yZVJlcXVlc3QuYWRkTGlzdGVuZXIoXy5kZWJvdW5jZSh0aGlzLndlYlJlcXVlc3RIYW5kbGVyLCA1MCksIHtcbiAgICAgIHVybHM6IFsnPGFsbF91cmxzPiddLFxuICAgICAgdHlwZXM6IFsnbWFpbl9mcmFtZSddXG4gICAgfSk7XG4gIH1cbiAgbWVzc2FnZUhhbmRsZXIocmVxdWVzdCwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpIHtcbiAgICBpZiAocmVxdWVzdC5mb2N1cyAmJiB0aGlzLmlzVmFsaWRQcm90b2NvbChzZW5kZXIudGFiLnVybCkpIHtcbiAgICAgIGNvbnN0IHNlbmRlclNpdGUgPSB3dXJsKCdkb21haW4nLCBzZW5kZXIudGFiLnVybCk7XG4gICAgICBpZiAocmVxdWVzdC5mb2N1cyA9PT0gJ2ZvY3VzJyAmJiBzZW5kZXJTaXRlKSB7XG4gICAgICAgIHRoaXMucG9wdXAgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5mb2N1c0NvdW50ICs9IDE7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZm9jdXNDb3VudCk7XG4gICAgICAgIGlmICghdGhpcy5jdXJyZW50U2l0ZSkge1xuICAgICAgICAgIHRoaXMudXJsQ2hlY2soc2VuZGVyLnRhYi51cmwsIHNlbmRlci50YWIuaWQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICh0aGlzLm5vdER1cGxpY2F0ZVRhYk9yRG9tYWluKHNlbmRlclNpdGUsIHNlbmRlci50YWIuaWQpKSB7XG4gICAgICAgICAgICB0aGlzLnNhdmVSZWNvcmRzKClcbiAgICAgICAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy51cmxDaGVjayhzZW5kZXIudGFiLnVybCwgc2VuZGVyLnRhYi5pZCkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRUYWIgPSBzZW5kZXIudGFiLmlkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChyZXF1ZXN0LmZvY3VzID09PSAnYmx1cicpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0JMVVVVVVVVVVVVVVJSUlJSJyk7XG4gICAgICAgIHRoaXMuZm9jdXNDb3VudCAtPSAxO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmZvY3VzQ291bnQpO1xuICAgICAgICBjb25zb2xlLmxvZyhgYmx1clRhYjogJHtzZW5kZXIudGFiLmlkfSB0YWI6ICR7dGhpcy5jdXJyZW50VGFifSAke3NlbmRlclNpdGV9IGApO1xuICAgICAgICBpZiAoc2VuZGVyLnRhYi5pZCA9PT0gdGhpcy5jdXJyZW50VGFiICYmIHNlbmRlclNpdGUgJiYgIXRoaXMucG9wdXApIHtcbiAgICAgICAgICB0aGlzLnNhdmVSZWNvcmRzKCk7XG5cbiAgICAgICAgICB0aGlzLnN0YXJ0VGltZSA9IG51bGw7XG4gICAgICAgICAgdGhpcy5jdXJyZW50U2l0ZSA9IG51bGw7XG4gICAgICAgICAgdGhpcy5jdXJyZW50VGFiID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAocmVxdWVzdC50aW1lciA9PT0gJ3BvcHVwJykge1xuICAgICAgdGhpcy5wb3B1cCA9IHRydWU7XG4gICAgICBzZW5kUmVzcG9uc2UoeyBzZWNvbmRzOiB0aGlzLmdldER1cmF0aW9uKG1vbWVudCgpKSB9KTtcbiAgICB9XG4gIH1cbiAgbm90RHVwbGljYXRlVGFiT3JEb21haW4oZG9tYWluLCB0YWJJZCkge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRTaXRlICE9PSBkb21haW4gJiYgdGhpcy5jdXJyZW50VGFiICE9PSB0YWJJZDtcbiAgfVxuICBoYW5kbGVOZXdEb21haW5Gb2N1cygpIHtcbiAgICB0aGlzLnN0YXJ0VGltZSA9IG1vbWVudCgpO1xuICAgIGNsZWFyVGltZW91dCh0aGlzLmxpbWl0Q0QpO1xuICB9XG4gIHNldE5ld0RheVRpbWVyKCkge1xuICAgIGNvbnN0IHRvbW9ycm93ID0gbW9tZW50KCkuYWRkKDEsICdkYXlzJykuc3RhcnRPZignZGF5Jyk7XG4gICAgcmV0dXJuIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5zYXZlUmVjb3JkcygpXG4gICAgICAgIC50aGVuKCgpID0+IEJMLmluaXROZXdEYXRlKCkpXG4gICAgICAgIC50aGVuKCgpID0+IEJMLmdldFNjaGVkdWxlKCkpXG4gICAgICAgIC50aGVuKChzY2hlZHVsZSkgPT4ge1xuICAgICAgICAgIHNjaGVkdWxlLnNldHRpbmcuY3VycmVudFRpbWUgPSBzY2hlZHVsZS5zZXR0aW5nLmRhaWx5TGltaXQgKiA2MDtcbiAgICAgICAgICByZXR1cm4gQkwuc2F2ZUNoYW5nZXNTY2hlZHVsZShzY2hlZHVsZSk7XG4gICAgICAgIH0pO1xuICAgIH0sIHRvbW9ycm93LmRpZmYobW9tZW50KCkpKTtcbiAgfVxuICBpc1ZhbGlkUHJvdG9jb2wodXJsKSB7XG4gICAgY29uc3QgcHJvdG9jb2wgPSB3dXJsKCdwcm90b2NvbCcsIHVybCk7XG4gICAgcmV0dXJuIChcbiAgICAgIHByb3RvY29sID09PSAnaHR0cCcgfHwgcHJvdG9jb2wgPT09ICdodHRwcycgfHwgcHJvdG9jb2wgPT09ICdmdHAnXG4gICAgKTtcbiAgfVxuICBnZXREdXJhdGlvbihub3cpIHtcbiAgICByZXR1cm4gbW9tZW50LmR1cmF0aW9uKG5vdy5kaWZmKHRoaXMuc3RhcnRUaW1lKSkuYXNTZWNvbmRzKCk7XG4gIH1cbiAgc2F2ZVJlY29yZHMoKSB7XG4gICAgY29uc29sZS5sb2coJ3NhdmVSZWNvcmRzIGNhbGxlZDogc29tZXRoaW5nIG11c3QgYmUgd29ya2luZycpO1xuICAgIGNvbnN0IHRpbWVFbGFwc2VkID0gdGhpcy5nZXREdXJhdGlvbihtb21lbnQoKSk7XG4gICAgcmV0dXJuIEJMLnJlY29uY2lsZVJlY29yZHModGhpcy5jdXJyZW50U2l0ZSwgdGltZUVsYXBzZWQsIDEpXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIEJMLmdldFNjaGVkdWxlKClcbiAgICAgICAgICAudGhlbigoc2NoZWR1bGUpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmxpbWl0Q0QpIHtcbiAgICAgICAgICAgICAgc2NoZWR1bGUuc2V0dGluZy5jdXJyZW50VGltZSA9IHNjaGVkdWxlLnNldHRpbmcuY3VycmVudFRpbWUgLSB0aW1lRWxhcHNlZDtcbiAgICAgICAgICAgICAgQkwuc2F2ZUNoYW5nZXNTY2hlZHVsZShzY2hlZHVsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIGxvYWRGaWx0ZXJlZFBhZ2UodGFiSWQsIHVybCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY2hyb21lLnRhYnMudXBkYXRlKHRhYklkLCB7IHVybCB9KTtcbiAgICB9LCA1MDApO1xuICB9XG4gIGdldFNjaGVkdWxlRXZlbnQobm93LCBzY2hlZHVsZSkge1xuICAgIGNvbnN0IGRheU9mV2VlayA9IG5vdy5kYXkoKTtcbiAgICAvLyBtb21lbnQuanMgc3RhcnRzIHdpdGggc3VuZGF5IGFzIGZpcnN0IGRheSBvZiB3ZWVrXG4gICAgY29uc3QgY29udmVydGVkRGF5ID0gKGRheU9mV2VlayA9PT0gNikgPyAwIDogZGF5T2ZXZWVrICsgMTtcbiAgICBjb25zdCBjdXJyZW50SG91ciA9IG5vdy5nZXQoJ2hvdXInKTtcbiAgICBjb25zdCBjdXJyZW50TWludXRlID0gbm93LmdldCgnbWludXRlJyk7XG4gICAgY29uc3QgY3VycmVudFF1YXJ0ZXIgPSBjdXJyZW50SG91ciAqIDQgKyBNYXRoLmNlaWwoY3VycmVudE1pbnV0ZSAvIDE1KTtcbiAgICByZXR1cm4gc2NoZWR1bGUuaXRlbXNbY29udmVydGVkRGF5XVtjdXJyZW50UXVhcnRlcl0uZXZlbnQ7XG4gIH1cbiAgaGFuZGxlQWN0aW9uKHNpdGUsIGFjdGlvbiwgdGFiSWQpIHtcbiAgICByZXR1cm4gQkwuZ2V0U2NoZWR1bGUoKVxuICAgICAgLnRoZW4oKHNjaGVkdWxlKSA9PiB7XG4gICAgICAgIGNvbnN0IG5vdyA9IG1vbWVudCgpO1xuICAgICAgICBjb25zdCBldmVudCA9IHRoaXMuZ2V0U2NoZWR1bGVFdmVudChub3csIHNjaGVkdWxlKTtcbiAgICAgICAgc3dpdGNoIChldmVudCkge1xuICAgICAgICAgIGNhc2UgJ0Jsb2NrIEFsbCc6IHtcbiAgICAgICAgICAgIGlmIChhY3Rpb24gPT09ICdibG9jaycpIHtcbiAgICAgICAgICAgICAgdGhpcy5sb2FkRmlsdGVyZWRQYWdlKHRhYklkLCBCTE9DS0VEX1BBR0UpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChhY3Rpb24gPT09ICdsaW1pdCcpIHtcbiAgICAgICAgICAgICAgdGhpcy5sb2FkRmlsdGVyZWRQYWdlKHRhYklkLCBCTE9DS0VEX1BBR0UpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5oYW5kbGVOZXdEb21haW5Gb2N1cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNhc2UgJ0FjY2VwdCBBbGwnOlxuICAgICAgICAgICAgdGhpcy5oYW5kbGVOZXdEb21haW5Gb2N1cygpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgaWYgKGFjdGlvbiA9PT0gJ2Jsb2NrJykge1xuICAgICAgICAgICAgICB0aGlzLmxvYWRGaWx0ZXJlZFBhZ2UodGFiSWQsIEJMT0NLRURfUEFHRSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGFjdGlvbiA9PT0gJ2xpbWl0Jykge1xuICAgICAgICAgICAgICB0aGlzLmhhbmRsZU5ld0RvbWFpbkZvY3VzKCk7XG4gICAgICAgICAgICAgIHRoaXMuc2V0TGltaXRDRCh0YWJJZCwgc2NoZWR1bGUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5oYW5kbGVOZXdEb21haW5Gb2N1cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuICBzZXRMaW1pdENEKHRhYklkLCBzY2hlZHVsZSkge1xuICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gc2NoZWR1bGUuc2V0dGluZy5jdXJyZW50VGltZTtcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50VGltZSk7XG4gICAgaWYgKGN1cnJlbnRUaW1lID4gMCkge1xuICAgICAgdGhpcy5saW1pdENEID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMubG9hZEZpbHRlcmVkUGFnZSh0YWJJZCwgQkxPQ0tFRF9QQUdFKTtcbiAgICAgIH0sIE1hdGgucm91bmQoY3VycmVudFRpbWUgKiAxMDAwKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubG9hZEZpbHRlcmVkUGFnZSh0YWJJZCwgQkxPQ0tFRF9QQUdFKTtcbiAgICB9XG4gIH1cbiAgbWF0Y2hQYXR0ZXJucyh1cmwpIHtcbiAgICByZXR1cm4gQkwuZ2V0UmVnZXhQYXR0ZXJucygpXG4gICAgICAudGhlbihwYXR0ZXJucyA9PiB7XG4gICAgICAgIGlmIChwYXR0ZXJucyAhPT0gdW5kZWZpbmVkICYmIHBhdHRlcm5zLml0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICByZXR1cm4gcGF0dGVybnMuaXRlbXMuZmluZChhY3Rpb24gPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVnID0gbmV3IFJlZ0V4cChhY3Rpb24ucmVnZXgsICdpJyk7XG4gICAgICAgICAgICByZXR1cm4gcmVnLnRlc3QodXJsKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfSk7XG4gIH1cblxuICB3ZWJSZXF1ZXN0SGFuZGxlcihkZXRhaWxzKSB7XG4gICAgaWYgKHRoaXMuaXNWYWxpZFByb3RvY29sKGRldGFpbHMudXJsKSkge1xuICAgICAgY29uc3Qgc2l0ZSA9IHd1cmwoJ2RvbWFpbicsIGRldGFpbHMudXJsKTtcbiAgICAgIHRoaXMudXJsQ2hlY2soc2l0ZSwgZGV0YWlscy50YWJJZCk7XG4gICAgfVxuICAgIHJldHVybiB7fTtcbiAgfVxuICB1cmxDaGVjayh1cmwsIHRhYklkKSB7XG4gICAgY29uc29sZS5sb2codXJsKTtcbiAgICBjb25zdCBzaXRlID0gd3VybCgnZG9tYWluJywgdXJsKTtcbiAgICB0aGlzLmN1cnJlbnRTaXRlID0gc2l0ZTtcbiAgICB0aGlzLmN1cnJlbnRUYWIgPSB0YWJJZDtcbiAgICBjb25zb2xlLmxvZygndXJsQ2hlY2soKSBydW5zJyk7XG4gICAgQkwuZ2V0UmVjb3JkKHNpdGUpXG4gICAgICAudGhlbihyZWNvcmQgPT4ge1xuICAgICAgICBjb25zdCBhY2xNYXRjaCA9IHJlY29yZC5hZHZBY3Rpb24uZmluZChhY3Rpb24gPT4ge1xuICAgICAgICAgIGNvbnN0IHJlZyA9IG5ldyBSZWdFeHAoYWN0aW9uLnJlZ2V4LCAnaScpO1xuICAgICAgICAgIHJldHVybiByZWcudGVzdCh1cmwpO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGFjbE1hdGNoKSB7XG4gICAgICAgICAgdGhpcy5oYW5kbGVBY3Rpb24oc2l0ZSwgYWNsTWF0Y2guYWN0aW9uLCB0YWJJZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5tYXRjaFBhdHRlcm5zKHVybClcbiAgICAgICAgICAgIC50aGVuKHBhdHRlcm5NYXRjaCA9PiB7XG4gICAgICAgICAgICAgIGlmIChwYXR0ZXJuTWF0Y2gpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUFjdGlvbihzaXRlLCBwYXR0ZXJuTWF0Y2guYWN0aW9uLCB0YWJJZCk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVBY3Rpb24oc2l0ZSwgcmVjb3JkLmFjdGlvbiwgdGFiSWQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoKSA9PiB0aGlzLm1hdGNoUGF0dGVybnModXJsKVxuICAgICAgICAudGhlbihwYXR0ZXJuTWF0Y2ggPT4ge1xuICAgICAgICAgIGlmIChwYXR0ZXJuTWF0Y2gpIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlQWN0aW9uKHNpdGUsIHBhdHRlcm5NYXRjaC5hY3Rpb24sIHRhYklkKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVOZXdEb21haW5Gb2N1cygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSkpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBGaWx0ZXIoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9GaWx0ZXIuanMiXSwic291cmNlUm9vdCI6IiJ9