webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _wurl = __webpack_require__(335);
	
	var _wurl2 = _interopRequireDefault(_wurl);
	
	var _blockList = __webpack_require__(301);
	
	var _blockList2 = _interopRequireDefault(_blockList);
	
	var _timer = __webpack_require__(336);
	
	var _timer2 = _interopRequireDefault(_timer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var siteTimer = new _timer2.default();
	_blockList2.default.init().then(function () {
	  siteTimer.init();
	});
	
	var BLOCKED_PAGE = 'https://www.github.com/wrleskovec';
	
	function loadFilteredPage(tabId, url) {
	  chrome.tabs.update(tabId, {
	    url: url
	  });
	}
	
	function urlCheck(details) {
	  var protocol = (0, _wurl2.default)('protocol', details.url);
	  if (protocol !== 'chrome' && protocol !== 'chrome-extension') {
	    var site = (0, _wurl2.default)('domain', details.url);
	    _blockList2.default.getRecord(site).then(function (record) {
	      if (record.action === 'block') {
	        loadFilteredPage(details.tabId, BLOCKED_PAGE);
	      }
	    }).catch(function (err) {
	      console.log(err);
	    });
	  }
	  return {};
	}
	
	chrome.webRequest.onBeforeRequest.addListener(urlCheck, {
	  urls: ['<all_urls>'],
	  types: ['main_frame']
	});

/***/ },

/***/ 336:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _classCallCheck2 = __webpack_require__(233);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(234);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _moment = __webpack_require__(337);
	
	var _moment2 = _interopRequireDefault(_moment);
	
	var _blockList = __webpack_require__(301);
	
	var _blockList2 = _interopRequireDefault(_blockList);
	
	var _wurl = __webpack_require__(335);
	
	var _wurl2 = _interopRequireDefault(_wurl);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Timer = function () {
	  function Timer() {
	    (0, _classCallCheck3.default)(this, Timer);
	
	    this.currentSite = null;
	    this.windowFocus = true;
	    this.counter = 1;
	    this.dbCounter = 1;
	    this.intervalId = null;
	    this.currentDate = (0, _moment2.default)().format('DD-MM-YYYY');
	  }
	
	  (0, _createClass3.default)(Timer, [{
	    key: 'init',
	    value: function init() {
	      var _this = this;
	
	      // checking if window is unfocused
	      chrome.windows.onFocusChanged.addListener(function () {
	        if (chrome.windows.WINDOW_ID_NONE) {
	          _this.windowFocus = false;
	          if (_this.currentSite !== null) {
	            _this.stopInterval();
	            _blockList2.default.reconcileRecords(_this.currentSite, _this.counter);
	          }
	          _this.currentSite = null;
	        } else {
	          _this.windowFocus = true;
	        }
	      });
	      // checking if window closed
	      chrome.windows.onRemoved.addListener(function () {
	        //
	      });
	      chrome.tabs.onActivated.addListener(function (activeInfo) {
	        chrome.tabs.get(activeInfo.tabId, function (tab) {
	          var protocol = (0, _wurl2.default)('protocol', tab.url);
	          if (protocol === 'chrome' || protocol === 'chrome-extension') {
	            console.log('NOICE');
	          } else if ((0, _wurl2.default)('domain', tab.url) === _this.currentSite) {
	            console.log('SAME SITE');
	          } else {
	            if (_this.currentSite !== null) {
	              _this.stopInterval();
	              _blockList2.default.reconcileRecords(_this.currentSite, _this.counter);
	            }
	            console.log('DIFF SITE');
	            _this.currentSite = (0, _wurl2.default)('domain', tab.url);
	            _this.startInterval();
	          }
	        });
	      });
	      chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
	        if (!tab.url) {
	          console.log('Not a valid url');
	        } else {
	          var tabSite = (0, _wurl2.default)('domain', tab.url);
	          var protocol = (0, _wurl2.default)('protocol', tab.url);
	          var validUrl = tabSite !== _this.currentSite && tabSite !== undefined && protocol !== 'chrome' && protocol !== 'chrome-extension';
	          if (validUrl) {
	            _this.currentSite = tabSite;
	            console.log(_this.currentSite);
	            _this.startInterval();
	          }
	        }
	      });
	    }
	  }, {
	    key: 'stopInterval',
	    value: function stopInterval() {
	      clearInterval(this.intervalId);
	    }
	  }, {
	    key: 'startInterval',
	    value: function startInterval() {
	      var _this2 = this;
	
	      this.counter = 1;
	      this.dbCounter = 1;
	      if (!(this.intervalId === null)) clearInterval(this.intervalId);
	      this.intervalId = setInterval(function () {
	        _this2.counter = _this2.counter += 1;
	        _this2.dbCounter = _this2.dbCounter += 1;
	        console.log((0, _moment2.default)().second(_this2.counter).format('HH : mm : ss'));
	      }, 1000);
	    }
	  }]);
	  return Timer;
	}();
	
	exports.default = Timer;

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGltZXIuanMiXSwibmFtZXMiOlsic2l0ZVRpbWVyIiwiaW5pdCIsInRoZW4iLCJCTE9DS0VEX1BBR0UiLCJsb2FkRmlsdGVyZWRQYWdlIiwidGFiSWQiLCJ1cmwiLCJjaHJvbWUiLCJ0YWJzIiwidXBkYXRlIiwidXJsQ2hlY2siLCJkZXRhaWxzIiwicHJvdG9jb2wiLCJzaXRlIiwiZ2V0UmVjb3JkIiwicmVjb3JkIiwiYWN0aW9uIiwiY2F0Y2giLCJjb25zb2xlIiwibG9nIiwiZXJyIiwid2ViUmVxdWVzdCIsIm9uQmVmb3JlUmVxdWVzdCIsImFkZExpc3RlbmVyIiwidXJscyIsInR5cGVzIiwiVGltZXIiLCJjdXJyZW50U2l0ZSIsIndpbmRvd0ZvY3VzIiwiY291bnRlciIsImRiQ291bnRlciIsImludGVydmFsSWQiLCJjdXJyZW50RGF0ZSIsImZvcm1hdCIsIndpbmRvd3MiLCJvbkZvY3VzQ2hhbmdlZCIsIldJTkRPV19JRF9OT05FIiwic3RvcEludGVydmFsIiwicmVjb25jaWxlUmVjb3JkcyIsIm9uUmVtb3ZlZCIsIm9uQWN0aXZhdGVkIiwiZ2V0IiwiYWN0aXZlSW5mbyIsInRhYiIsInN0YXJ0SW50ZXJ2YWwiLCJvblVwZGF0ZWQiLCJjaGFuZ2VJbmZvIiwidGFiU2l0ZSIsInZhbGlkVXJsIiwidW5kZWZpbmVkIiwiY2xlYXJJbnRlcnZhbCIsInNldEludGVydmFsIiwic2Vjb25kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxLQUFNQSxZQUFZLHFCQUFsQjtBQUNBLHFCQUFHQyxJQUFILEdBQVVDLElBQVYsQ0FBZSxZQUFNO0FBQ25CRixhQUFVQyxJQUFWO0FBQ0QsRUFGRDs7QUFJQSxLQUFNRSxlQUFlLG1DQUFyQjs7QUFFQSxVQUFTQyxnQkFBVCxDQUEwQkMsS0FBMUIsRUFBaUNDLEdBQWpDLEVBQXNDO0FB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QUFMLEdBQWlCLE9BQUtBLFNBQUwsSUFBa0IsQ0FBbkM7QUFDQVosaUJBQVFDLEdBQVIsQ0FBWSx3QkFBU2lDLE1BQVQsQ0FBZ0IsT0FBS3ZCLE9BQXJCLEVBQThCSSxNQUE5QixDQUFxQyxjQUFyQyxDQUFaO0FBQ0QsUUFKaUIsRUFJZixJQUplLENBQWxCO0FBS0Q7Ozs7O21CQTFFa0JQLEsiLCJmaWxlIjoiYmFja2dyb3VuZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3dXJsIGZyb20gJ3d1cmwnO1xuaW1wb3J0IEJMIGZyb20gJy4vYmxvY2tMaXN0LmpzJztcbmltcG9ydCBUaW1lciBmcm9tICcuL3RpbWVyLmpzJztcblxuY29uc3Qgc2l0ZVRpbWVyID0gbmV3IFRpbWVyKCk7XG5CTC5pbml0KCkudGhlbigoKSA9PiB7XG4gIHNpdGVUaW1lci5pbml0KCk7XG59KTtcblxuY29uc3QgQkxPQ0tFRF9QQUdFID0gJ2h0dHBzOi8vd3d3LmdpdGh1Yi5jb20vd3JsZXNrb3ZlYyc7XG5cbmZ1bmN0aW9uIGxvYWRGaWx0ZXJlZFBhZ2UodGFiSWQsIHVybCkge1xuICBjaHJvbWUudGFicy51cGRhdGUodGFiSWQsIHtcbiAgICB1cmxcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHVybENoZWNrKGRldGFpbHMpIHtcbiAgY29uc3QgcHJvdG9jb2wgPSB3dXJsKCdwcm90b2NvbCcsIGRldGFpbHMudXJsKTtcbiAgaWYgKHByb3RvY29sICE9PSAnY2hyb21lJyAmJiBwcm90b2NvbCAhPT0gJ2Nocm9tZS1leHRlbnNpb24nKSB7XG4gICAgY29uc3Qgc2l0ZSA9IHd1cmwoJ2RvbWFpbicsIGRldGFpbHMudXJsKTtcbiAgICBCTC5nZXRSZWNvcmQoc2l0ZSlcbiAgICAgIC50aGVuKHJlY29yZCA9PiB7XG4gICAgICAgIGlmIChyZWNvcmQuYWN0aW9uID09PSAnYmxvY2snKSB7XG4gICAgICAgICAgbG9hZEZpbHRlcmVkUGFnZShkZXRhaWxzLnRhYklkLCBCTE9DS0VEX1BBR0UpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9KTtcbiAgfVxuICByZXR1cm4ge307XG59XG5cbmNocm9tZS53ZWJSZXF1ZXN0Lm9uQmVmb3JlUmVxdWVzdC5hZGRMaXN0ZW5lcih1cmxDaGVjaywge1xuICB1cmxzOiBbJzxhbGxfdXJscz4nXSxcbiAgdHlwZXM6IFsnbWFpbl9mcmFtZSddXG59KTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2JhY2tncm91bmQuanNcbiAqKi8iLCJpbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgQkwgZnJvbSAnLi9ibG9ja0xpc3QuanMnO1xuaW1wb3J0IHd1cmwgZnJvbSAnd3VybCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbWVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jdXJyZW50U2l0ZSA9IG51bGw7XG4gICAgdGhpcy53aW5kb3dGb2N1cyA9IHRydWU7XG4gICAgdGhpcy5jb3VudGVyID0gMTtcbiAgICB0aGlzLmRiQ291bnRlciA9IDE7XG4gICAgdGhpcy5pbnRlcnZhbElkID0gbnVsbDtcbiAgICB0aGlzLmN1cnJlbnREYXRlID0gbW9tZW50KCkuZm9ybWF0KCdERC1NTS1ZWVlZJyk7XG4gIH1cbiAgaW5pdCgpIHtcbiAgICAgIC8vIGNoZWNraW5nIGlmIHdpbmRvdyBpcyB1bmZvY3VzZWRcbiAgICBjaHJvbWUud2luZG93cy5vbkZvY3VzQ2hhbmdlZC5hZGRMaXN0ZW5lcigoKSA9PiB7XG4gICAgICBpZiAoY2hyb21lLndpbmRvd3MuV0lORE9XX0lEX05PTkUpIHtcbiAgICAgICAgdGhpcy53aW5kb3dGb2N1cyA9IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50U2l0ZSAhPT0gbnVsbCkge1xuICAgICAgICAgIHRoaXMuc3RvcEludGVydmFsKCk7XG4gICAgICAgICAgQkwucmVjb25jaWxlUmVjb3Jkcyh0aGlzLmN1cnJlbnRTaXRlLCB0aGlzLmNvdW50ZXIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3VycmVudFNpdGUgPSBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy53aW5kb3dGb2N1cyA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gICAgLy8gY2hlY2tpbmcgaWYgd2luZG93IGNsb3NlZFxuICAgIGNocm9tZS53aW5kb3dzLm9uUmVtb3ZlZC5hZGRMaXN0ZW5lcigoKSA9PiB7XG4gICAgICAvL1xuICAgIH0pO1xuICAgIGNocm9tZS50YWJzLm9uQWN0aXZhdGVkLmFkZExpc3RlbmVyKGFjdGl2ZUluZm8gPT4ge1xuICAgICAgY2hyb21lLnRhYnMuZ2V0KGFjdGl2ZUluZm8udGFiSWQsIHRhYiA9PiB7XG4gICAgICAgIGNvbnN0IHByb3RvY29sID0gd3VybCgncHJvdG9jb2wnLCB0YWIudXJsKTtcbiAgICAgICAgaWYgKHByb3RvY29sID09PSAnY2hyb21lJyB8fCBwcm90b2NvbCA9PT0gJ2Nocm9tZS1leHRlbnNpb24nKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ05PSUNFJyk7XG4gICAgICAgIH0gZWxzZSBpZiAod3VybCgnZG9tYWluJywgdGFiLnVybCkgPT09IHRoaXMuY3VycmVudFNpdGUpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnU0FNRSBTSVRFJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHRoaXMuY3VycmVudFNpdGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcEludGVydmFsKCk7XG4gICAgICAgICAgICBCTC5yZWNvbmNpbGVSZWNvcmRzKHRoaXMuY3VycmVudFNpdGUsIHRoaXMuY291bnRlcik7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnNvbGUubG9nKCdESUZGIFNJVEUnKTtcbiAgICAgICAgICB0aGlzLmN1cnJlbnRTaXRlID0gd3VybCgnZG9tYWluJywgdGFiLnVybCk7XG4gICAgICAgICAgdGhpcy5zdGFydEludGVydmFsKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGNocm9tZS50YWJzLm9uVXBkYXRlZC5hZGRMaXN0ZW5lcigodGFiSWQsIGNoYW5nZUluZm8sIHRhYikgPT4ge1xuICAgICAgaWYgKCF0YWIudXJsKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdOb3QgYSB2YWxpZCB1cmwnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHRhYlNpdGUgPSB3dXJsKCdkb21haW4nLCB0YWIudXJsKTtcbiAgICAgICAgY29uc3QgcHJvdG9jb2wgPSB3dXJsKCdwcm90b2NvbCcsIHRhYi51cmwpO1xuICAgICAgICBjb25zdCB2YWxpZFVybCA9IHRhYlNpdGUgIT09IHRoaXMuY3VycmVudFNpdGUgJiYgdGFiU2l0ZSAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgcHJvdG9jb2wgIT09ICdjaHJvbWUnICYmIHByb3RvY29sICE9PSAnY2hyb21lLWV4dGVuc2lvbic7XG4gICAgICAgIGlmICh2YWxpZFVybCkge1xuICAgICAgICAgIHRoaXMuY3VycmVudFNpdGUgPSB0YWJTaXRlO1xuICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY3VycmVudFNpdGUpO1xuICAgICAgICAgIHRoaXMuc3RhcnRJbnRlcnZhbCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzdG9wSW50ZXJ2YWwoKSB7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsSWQpO1xuICB9XG4gIHN0YXJ0SW50ZXJ2YWwoKSB7XG4gICAgdGhpcy5jb3VudGVyID0gMTtcbiAgICB0aGlzLmRiQ291bnRlciA9IDE7XG4gICAgaWYgKCEodGhpcy5pbnRlcnZhbElkID09PSBudWxsKSkgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsSWQpO1xuICAgIHRoaXMuaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHRoaXMuY291bnRlciA9IHRoaXMuY291bnRlciArPSAxO1xuICAgICAgdGhpcy5kYkNvdW50ZXIgPSB0aGlzLmRiQ291bnRlciArPSAxO1xuICAgICAgY29uc29sZS5sb2cobW9tZW50KCkuc2Vjb25kKHRoaXMuY291bnRlcikuZm9ybWF0KCdISCA6IG1tIDogc3MnKSk7XG4gICAgfSwgMTAwMCk7XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3RpbWVyLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==