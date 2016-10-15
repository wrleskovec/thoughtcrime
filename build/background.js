webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _wurl = __webpack_require__(440);
	
	var _wurl2 = _interopRequireDefault(_wurl);
	
	var _blockList = __webpack_require__(301);
	
	var _blockList2 = _interopRequireDefault(_blockList);
	
	var _timer = __webpack_require__(443);
	
	var _timer2 = _interopRequireDefault(_timer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_blockList2.default.init().then(function () {
	  _timer2.default.init();
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

/***/ 443:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _classCallCheck2 = __webpack_require__(233);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(234);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _moment = __webpack_require__(319);
	
	var _moment2 = _interopRequireDefault(_moment);
	
	var _blockList = __webpack_require__(301);
	
	var _blockList2 = _interopRequireDefault(_blockList);
	
	var _wurl = __webpack_require__(440);
	
	var _wurl2 = _interopRequireDefault(_wurl);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Timer = function () {
	  function Timer() {
	    (0, _classCallCheck3.default)(this, Timer);
	
	    this.currentSite = null;
	    this.currentTab = null;
	    this.popup = false;
	    //    this.windowFocus = true;
	    this.counter = 1;
	    this.dbCounter = 1;
	    this.intervalId = null;
	    this.currentDate = (0, _moment2.default)().format('DD-MM-YYYY');
	  }
	
	  (0, _createClass3.default)(Timer, [{
	    key: 'init',
	    value: function init() {
	      var _this = this;
	
	      // chrome.windows.onFocusChanged.addListener(() => {
	      //   if (chrome.windows.WINDOW_ID_NONE) {
	      //     this.windowFocus = false;
	      //     if (this.currentSite !== null) {
	      //       this.stopInterval();
	      //       BL.reconcileRecords(this.currentSite, this.counter);
	      //     }
	      //     this.currentSite = null;
	      //   } else {
	      //     this.windowFocus = true;
	      //     console.log('kill me google');
	      //   }
	      // });
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
	          if (request.focus === 'focus' && senderSite !== _this.currentSite && senderSite != null && sender.tab.id !== _this.currentTab && _this.isValidProtocol(senderSite)) {
	            _this.popup = false;
	            if (_this.currentSite !== null) {
	              _this.saveRecords();
	            }
	            _this.currentTab = sender.tab.id;
	            _this.currentSite = senderSite;
	            _this.startInterval();
	          } else if (request.focus === 'blur' && sender.tab.id === _this.currentTab && senderSite != null && !_this.popup) {
	            console.log('wow');
	            _this.saveRecords();
	            _this.currentSite = null;
	            _this.currentTab = null;
	          }
	        }
	        if (request.timer === 'popup') {
	          _this.popup = true;
	          console.log('background response');
	          console.log(sender);
	          sendResponse({ seconds: _this.counter });
	        }
	      });
	      chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
	        var tabSite = (0, _wurl2.default)('domain', tab.url);
	        var validUrl = tabSite !== _this.currentSite && _this.isValidProtocol(tab.url);
	        console.log(tabSite + ': ' + validUrl);
	        if (validUrl) {
	          _this.currentSite = tabSite;
	          _this.currentTab = tab.id;
	          _this.startInterval();
	        }
	      });
	    }
	    //   chrome.windows.onRemoved.addListener(() => {
	    //     //
	    //   });
	    //   chrome.tabs.onActivated.addListener(activeInfo => {
	    //     chrome.tabs.get(activeInfo.tabId, tab => {
	    //       const protocol = wurl('protocol', tab.url);
	    //       if (protocol === 'chrome' || protocol === 'chrome-extension') {
	    //         console.log('NOICE');
	    //       } else if (wurl('domain', tab.url) === this.currentSite) {
	    //         console.log('SAME SITE');
	    //       } else {
	    //         if (this.currentSite !== null) {
	    //           this.stopInterval();
	    //           BL.reconcileRecords(this.currentSite, this.counter);
	    //         }
	    //         console.log('DIFF SITE');
	    //         this.currentSite = wurl('domain', tab.url);
	    //         this.startInterval();
	    //       }
	    //     });
	    //   });
	
	  }, {
	    key: 'isValidProtocol',
	    value: function isValidProtocol(url) {
	      var protocol = (0, _wurl2.default)('protocol', url);
	      return protocol === 'http' || protocol === 'https' || protocol === 'ftp';
	    }
	  }, {
	    key: 'saveRecords',
	    value: function saveRecords() {
	      clearInterval(this.intervalId);
	      this.intervalId = null;
	      _blockList2.default.reconcileRecords(this.currentSite, this.dbCounter);
	    }
	  }, {
	    key: 'startInterval',
	    value: function startInterval() {
	      var _this2 = this;
	
	      clearInterval(this.intervalId);
	      this.counter = 1;
	      this.dbCounter = 1;
	      this.intervalId = setInterval(function () {
	        var now = (0, _moment2.default)().format('DD-MM-YYYY');
	        if (now !== _this2.currentDate) {
	          if (_this2.intervalId !== null) {
	            _this2.saveRecords();
	          }
	          // Whatever its not like this needs to be precise
	          _this2.currentDate = now;
	          _this2.startInterval();
	        } else {
	          _this2.counter = _this2.counter += 1;
	          _this2.dbCounter = _this2.dbCounter += 1;
	          if (_this2.dbCounter % 60 === 0) {
	            _blockList2.default.reconcileRecords(_this2.currentSite, _this2.dbCounter);
	            _this2.dbCounter = 0;
	          }
	        }
	      }, 1000);
	    }
	  }]);
	  return Timer;
	}();
	
	var proxyTimer = new Proxy(new Timer(), {
	  set: function set(target, key, value) {
	    console.log(key + ': ' + value);
	    target[key] = value;
	    return true;
	  }
	});
	exports.default = proxyTimer;

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGltZXIuanMiXSwibmFtZXMiOlsiaW5pdCIsInRoZW4iLCJCTE9DS0VEX1BBR0UiLCJsb2FkRmlsdGVyZWRQYWdlIiwidGFiSWQiLCJ1cmwiLCJjaHJvbWUiLCJ0YWJzIiwidXBkYXRlIiwidXJsQ2hlY2siLCJkZXRhaWxzIiwicHJvdG9jb2wiLCJzaXRlIiwiZ2V0UmVjb3JkIiwicmVjb3JkIiwiYWN0aW9uIiwiY2F0Y2giLCJjb25zb2xlIiwibG9nIiwiZXJyIiwid2ViUmVxdWVzdCIsIm9uQmVmb3JlUmVxdWVzdCIsImFkZExpc3RlbmVyIiwidXJscyIsInR5cGVzIiwiVGltZXIiLCJjdXJyZW50U2l0ZSIsImN1cnJlbnRUYWIiLCJwb3B1cCIsImNvdW50ZXIiLCJkYkNvdW50ZXIiLCJpbnRlcnZhbElkIiwiY3VycmVudERhdGUiLCJmb3JtYXQiLCJ3aW5kb3dzIiwiZ2V0QWxsIiwicG9wdWxhdGUiLCJmb3JFYWNoIiwid2luIiwidGFiIiwiaXNWYWxpZFByb3RvY29sIiwiZXhlY3V0ZVNjcmlwdCIsImlkIiwiZmlsZSIsInJ1bnRpbWUiLCJvbk1lc3NhZ2UiLCJyZXF1ZXN0Iiwic2VuZGVyIiwic2VuZFJlc3BvbnNlIiwiZm9jdXMiLCJzZW5kZXJTaXRlIiwic2F2ZVJlY29yZHMiLCJzdGFydEludGVydmFsIiwidGltZXIiLCJzZWNvbmRzIiwib25VcGRhdGVkIiwiY2hhbmdlSW5mbyIsInRhYlNpdGUiLCJ2YWxpZFVybCIsImNsZWFySW50ZXJ2YWwiLCJyZWNvbmNpbGVSZWNvcmRzIiwic2V0SW50ZXJ2YWwiLCJub3ciLCJwcm94eVRpbWVyIiwiUHJveHkiLCJzZXQiLCJ0YXJnZXQiLCJrZXkiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEscUJBQUdBLElBQUgsR0FBVUMsSUFBVixDQUFlLFlBQU07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QixDQUFuQztBQUNBLGVBQUksT0FBS0EsU0FBTCxHQUFpQixFQUFqQixLQUF3QixDQUE1QixFQUErQjtBQUM3QixpQ0FBRzhCLGdCQUFILENBQW9CLE9BQUtsQyxXQUF6QixFQUFzQyxPQUFLSSxTQUEzQztBQUNBLG9CQUFLQSxTQUFMLEdBQWlCLENBQWpCO0FBQ0Q7QUFDRjtBQUNGLFFBakJpQixFQWlCZixJQWpCZSxDQUFsQjtBQWtCRDs7Ozs7QUFFSCxLQUFNaUMsYUFBYSxJQUFJQyxLQUFKLENBQVUsSUFBSXZDLEtBQUosRUFBVixFQUF1QjtBQUN4Q3dDLE1BRHdDLGVBQ3BDQyxNQURvQyxFQUM1QkMsR0FENEIsRUFDdkJDLEtBRHVCLEVBQ2hCO0FBQ3RCbkQsYUFBUUMsR0FBUixDQUFlaUQsR0FBZixVQUF1QkMsS0FBdkI7QUFDQUYsWUFBT0MsR0FBUCxJQUFjQyxLQUFkO0FBQ0EsWUFBTyxJQUFQO0FBQ0Q7QUFMdUMsRUFBdkIsQ0FBbkI7bUJBT2VMLFUiLCJmaWxlIjoiYmFja2dyb3VuZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3dXJsIGZyb20gJ3d1cmwnO1xuaW1wb3J0IEJMIGZyb20gJy4vYmxvY2tMaXN0LmpzJztcbmltcG9ydCBUaW1lciBmcm9tICcuL3RpbWVyLmpzJztcblxuQkwuaW5pdCgpLnRoZW4oKCkgPT4ge1xuICBUaW1lci5pbml0KCk7XG59KTtcblxuY29uc3QgQkxPQ0tFRF9QQUdFID0gJ2h0dHBzOi8vd3d3LmdpdGh1Yi5jb20vd3JsZXNrb3ZlYyc7XG5cbmZ1bmN0aW9uIGxvYWRGaWx0ZXJlZFBhZ2UodGFiSWQsIHVybCkge1xuICBjaHJvbWUudGFicy51cGRhdGUodGFiSWQsIHtcbiAgICB1cmxcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHVybENoZWNrKGRldGFpbHMpIHtcbiAgY29uc3QgcHJvdG9jb2wgPSB3dXJsKCdwcm90b2NvbCcsIGRldGFpbHMudXJsKTtcbiAgaWYgKHByb3RvY29sICE9PSAnY2hyb21lJyAmJiBwcm90b2NvbCAhPT0gJ2Nocm9tZS1leHRlbnNpb24nKSB7XG4gICAgY29uc3Qgc2l0ZSA9IHd1cmwoJ2RvbWFpbicsIGRldGFpbHMudXJsKTtcbiAgICBCTC5nZXRSZWNvcmQoc2l0ZSlcbiAgICAgIC50aGVuKHJlY29yZCA9PiB7XG4gICAgICAgIGlmIChyZWNvcmQuYWN0aW9uID09PSAnYmxvY2snKSB7XG4gICAgICAgICAgbG9hZEZpbHRlcmVkUGFnZShkZXRhaWxzLnRhYklkLCBCTE9DS0VEX1BBR0UpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9KTtcbiAgfVxuICByZXR1cm4ge307XG59XG5cbmNocm9tZS53ZWJSZXF1ZXN0Lm9uQmVmb3JlUmVxdWVzdC5hZGRMaXN0ZW5lcih1cmxDaGVjaywge1xuICB1cmxzOiBbJzxhbGxfdXJscz4nXSxcbiAgdHlwZXM6IFsnbWFpbl9mcmFtZSddXG59KTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2JhY2tncm91bmQuanNcbiAqKi8iLCJpbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgQkwgZnJvbSAnLi9ibG9ja0xpc3QuanMnO1xuaW1wb3J0IHd1cmwgZnJvbSAnd3VybCc7XG5cbmNsYXNzIFRpbWVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jdXJyZW50U2l0ZSA9IG51bGw7XG4gICAgdGhpcy5jdXJyZW50VGFiID0gbnVsbDtcbiAgICB0aGlzLnBvcHVwID0gZmFsc2U7XG4vLyAgICB0aGlzLndpbmRvd0ZvY3VzID0gdHJ1ZTtcbiAgICB0aGlzLmNvdW50ZXIgPSAxO1xuICAgIHRoaXMuZGJDb3VudGVyID0gMTtcbiAgICB0aGlzLmludGVydmFsSWQgPSBudWxsO1xuICAgIHRoaXMuY3VycmVudERhdGUgPSBtb21lbnQoKS5mb3JtYXQoJ0RELU1NLVlZWVknKTtcbiAgfVxuICBpbml0KCkge1xuICAgIC8vIGNocm9tZS53aW5kb3dzLm9uRm9jdXNDaGFuZ2VkLmFkZExpc3RlbmVyKCgpID0+IHtcbiAgICAvLyAgIGlmIChjaHJvbWUud2luZG93cy5XSU5ET1dfSURfTk9ORSkge1xuICAgIC8vICAgICB0aGlzLndpbmRvd0ZvY3VzID0gZmFsc2U7XG4gICAgLy8gICAgIGlmICh0aGlzLmN1cnJlbnRTaXRlICE9PSBudWxsKSB7XG4gICAgLy8gICAgICAgdGhpcy5zdG9wSW50ZXJ2YWwoKTtcbiAgICAvLyAgICAgICBCTC5yZWNvbmNpbGVSZWNvcmRzKHRoaXMuY3VycmVudFNpdGUsIHRoaXMuY291bnRlcik7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgdGhpcy5jdXJyZW50U2l0ZSA9IG51bGw7XG4gICAgLy8gICB9IGVsc2Uge1xuICAgIC8vICAgICB0aGlzLndpbmRvd0ZvY3VzID0gdHJ1ZTtcbiAgICAvLyAgICAgY29uc29sZS5sb2coJ2tpbGwgbWUgZ29vZ2xlJyk7XG4gICAgLy8gICB9XG4gICAgLy8gfSk7XG4gICAgY2hyb21lLndpbmRvd3MuZ2V0QWxsKHsgcG9wdWxhdGU6IHRydWUgfSwgKHdpbmRvd3MpID0+IHtcbiAgICAgIHdpbmRvd3MuZm9yRWFjaCgod2luKSA9PiB7XG4gICAgICAgIHdpbi50YWJzLmZvckVhY2goKHRhYikgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLmlzVmFsaWRQcm90b2NvbCh0YWIudXJsKSkge1xuICAgICAgICAgICAgY2hyb21lLnRhYnMuZXhlY3V0ZVNjcmlwdCh0YWIuaWQsIHsgZmlsZTogJ2NvbnRlbnQuanMnIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBjaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKHJlcXVlc3QsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSA9PiB7XG4gICAgICBpZiAocmVxdWVzdC5mb2N1cykge1xuICAgICAgICBjb25zdCBzZW5kZXJTaXRlID0gd3VybCgnZG9tYWluJywgc2VuZGVyLnRhYi51cmwpO1xuICAgICAgICBpZiAocmVxdWVzdC5mb2N1cyA9PT0gJ2ZvY3VzJyAmJiBzZW5kZXJTaXRlICE9PSB0aGlzLmN1cnJlbnRTaXRlICYmIHNlbmRlclNpdGUgIT0gbnVsbFxuICAgICAgICAgJiYgc2VuZGVyLnRhYi5pZCAhPT0gdGhpcy5jdXJyZW50VGFiICYmIHRoaXMuaXNWYWxpZFByb3RvY29sKHNlbmRlclNpdGUpKSB7XG4gICAgICAgICAgdGhpcy5wb3B1cCA9IGZhbHNlO1xuICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRTaXRlICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnNhdmVSZWNvcmRzKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuY3VycmVudFRhYiA9IHNlbmRlci50YWIuaWQ7XG4gICAgICAgICAgdGhpcy5jdXJyZW50U2l0ZSA9IHNlbmRlclNpdGU7XG4gICAgICAgICAgdGhpcy5zdGFydEludGVydmFsKCk7XG4gICAgICAgIH0gZWxzZSBpZiAocmVxdWVzdC5mb2N1cyA9PT0gJ2JsdXInICYmIHNlbmRlci50YWIuaWQgPT09IHRoaXMuY3VycmVudFRhYiAmJiBzZW5kZXJTaXRlICE9IG51bGxcbiAgICAgICAgICAmJiAhdGhpcy5wb3B1cCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCd3b3cnKTtcbiAgICAgICAgICB0aGlzLnNhdmVSZWNvcmRzKCk7XG4gICAgICAgICAgdGhpcy5jdXJyZW50U2l0ZSA9IG51bGw7XG4gICAgICAgICAgdGhpcy5jdXJyZW50VGFiID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHJlcXVlc3QudGltZXIgPT09ICdwb3B1cCcpIHtcbiAgICAgICAgdGhpcy5wb3B1cCA9IHRydWU7XG4gICAgICAgIGNvbnNvbGUubG9nKCdiYWNrZ3JvdW5kIHJlc3BvbnNlJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHNlbmRlcik7XG4gICAgICAgIHNlbmRSZXNwb25zZSh7IHNlY29uZHM6IHRoaXMuY291bnRlciB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBjaHJvbWUudGFicy5vblVwZGF0ZWQuYWRkTGlzdGVuZXIoKHRhYklkLCBjaGFuZ2VJbmZvLCB0YWIpID0+IHtcbiAgICAgIGNvbnN0IHRhYlNpdGUgPSB3dXJsKCdkb21haW4nLCB0YWIudXJsKTtcbiAgICAgIGNvbnN0IHZhbGlkVXJsID0gdGFiU2l0ZSAhPT0gdGhpcy5jdXJyZW50U2l0ZSAmJiB0aGlzLmlzVmFsaWRQcm90b2NvbCh0YWIudXJsKTtcbiAgICAgIGNvbnNvbGUubG9nKGAke3RhYlNpdGV9OiAke3ZhbGlkVXJsfWApO1xuICAgICAgaWYgKHZhbGlkVXJsKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFNpdGUgPSB0YWJTaXRlO1xuICAgICAgICB0aGlzLmN1cnJlbnRUYWIgPSB0YWIuaWQ7XG4gICAgICAgIHRoaXMuc3RhcnRJbnRlcnZhbCgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIC8vICAgY2hyb21lLndpbmRvd3Mub25SZW1vdmVkLmFkZExpc3RlbmVyKCgpID0+IHtcbiAgLy8gICAgIC8vXG4gIC8vICAgfSk7XG4gIC8vICAgY2hyb21lLnRhYnMub25BY3RpdmF0ZWQuYWRkTGlzdGVuZXIoYWN0aXZlSW5mbyA9PiB7XG4gIC8vICAgICBjaHJvbWUudGFicy5nZXQoYWN0aXZlSW5mby50YWJJZCwgdGFiID0+IHtcbiAgLy8gICAgICAgY29uc3QgcHJvdG9jb2wgPSB3dXJsKCdwcm90b2NvbCcsIHRhYi51cmwpO1xuICAvLyAgICAgICBpZiAocHJvdG9jb2wgPT09ICdjaHJvbWUnIHx8IHByb3RvY29sID09PSAnY2hyb21lLWV4dGVuc2lvbicpIHtcbiAgLy8gICAgICAgICBjb25zb2xlLmxvZygnTk9JQ0UnKTtcbiAgLy8gICAgICAgfSBlbHNlIGlmICh3dXJsKCdkb21haW4nLCB0YWIudXJsKSA9PT0gdGhpcy5jdXJyZW50U2l0ZSkge1xuICAvLyAgICAgICAgIGNvbnNvbGUubG9nKCdTQU1FIFNJVEUnKTtcbiAgLy8gICAgICAgfSBlbHNlIHtcbiAgLy8gICAgICAgICBpZiAodGhpcy5jdXJyZW50U2l0ZSAhPT0gbnVsbCkge1xuICAvLyAgICAgICAgICAgdGhpcy5zdG9wSW50ZXJ2YWwoKTtcbiAgLy8gICAgICAgICAgIEJMLnJlY29uY2lsZVJlY29yZHModGhpcy5jdXJyZW50U2l0ZSwgdGhpcy5jb3VudGVyKTtcbiAgLy8gICAgICAgICB9XG4gIC8vICAgICAgICAgY29uc29sZS5sb2coJ0RJRkYgU0lURScpO1xuICAvLyAgICAgICAgIHRoaXMuY3VycmVudFNpdGUgPSB3dXJsKCdkb21haW4nLCB0YWIudXJsKTtcbiAgLy8gICAgICAgICB0aGlzLnN0YXJ0SW50ZXJ2YWwoKTtcbiAgLy8gICAgICAgfVxuICAvLyAgICAgfSk7XG4gIC8vICAgfSk7XG5cbiAgaXNWYWxpZFByb3RvY29sKHVybCkge1xuICAgIGNvbnN0IHByb3RvY29sID0gd3VybCgncHJvdG9jb2wnLCB1cmwpO1xuICAgIHJldHVybiAoXG4gICAgICBwcm90b2NvbCA9PT0gJ2h0dHAnIHx8IHByb3RvY29sID09PSAnaHR0cHMnIHx8IHByb3RvY29sID09PSAnZnRwJ1xuICAgICk7XG4gIH1cbiAgc2F2ZVJlY29yZHMoKSB7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsSWQpO1xuICAgIHRoaXMuaW50ZXJ2YWxJZCA9IG51bGw7XG4gICAgQkwucmVjb25jaWxlUmVjb3Jkcyh0aGlzLmN1cnJlbnRTaXRlLCB0aGlzLmRiQ291bnRlcik7XG4gIH1cbiAgc3RhcnRJbnRlcnZhbCgpIHtcbiAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWxJZCk7XG4gICAgdGhpcy5jb3VudGVyID0gMTtcbiAgICB0aGlzLmRiQ291bnRlciA9IDE7XG4gICAgdGhpcy5pbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgY29uc3Qgbm93ID0gbW9tZW50KCkuZm9ybWF0KCdERC1NTS1ZWVlZJyk7XG4gICAgICBpZiAobm93ICE9PSB0aGlzLmN1cnJlbnREYXRlKSB7XG4gICAgICAgIGlmICh0aGlzLmludGVydmFsSWQgIT09IG51bGwpIHtcbiAgICAgICAgICB0aGlzLnNhdmVSZWNvcmRzKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gV2hhdGV2ZXIgaXRzIG5vdCBsaWtlIHRoaXMgbmVlZHMgdG8gYmUgcHJlY2lzZVxuICAgICAgICB0aGlzLmN1cnJlbnREYXRlID0gbm93O1xuICAgICAgICB0aGlzLnN0YXJ0SW50ZXJ2YWwoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY291bnRlciA9IHRoaXMuY291bnRlciArPSAxO1xuICAgICAgICB0aGlzLmRiQ291bnRlciA9IHRoaXMuZGJDb3VudGVyICs9IDE7XG4gICAgICAgIGlmICh0aGlzLmRiQ291bnRlciAlIDYwID09PSAwKSB7XG4gICAgICAgICAgQkwucmVjb25jaWxlUmVjb3Jkcyh0aGlzLmN1cnJlbnRTaXRlLCB0aGlzLmRiQ291bnRlcik7XG4gICAgICAgICAgdGhpcy5kYkNvdW50ZXIgPSAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgMTAwMCk7XG4gIH1cbn1cbmNvbnN0IHByb3h5VGltZXIgPSBuZXcgUHJveHkobmV3IFRpbWVyKCksIHtcbiAgc2V0KHRhcmdldCwga2V5LCB2YWx1ZSkge1xuICAgIGNvbnNvbGUubG9nKGAke2tleX06ICR7dmFsdWV9YCk7XG4gICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufSk7XG5leHBvcnQgZGVmYXVsdCBwcm94eVRpbWVyO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdGltZXIuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9