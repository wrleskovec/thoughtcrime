webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _wurl = __webpack_require__(669);
	
	var _wurl2 = _interopRequireDefault(_wurl);
	
	var _blockList = __webpack_require__(264);
	
	var _blockList2 = _interopRequireDefault(_blockList);
	
	var _timer = __webpack_require__(678);
	
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
	
	function urlCheck(details) {
	  var protocol = (0, _wurl2.default)('protocol', details.url);
	  if (protocol !== 'chrome' && protocol !== 'chrome-extension') {
	    var site = (0, _wurl2.default)('domain', details.url);
	    _blockList2.default.getRecord(site).then(function (record) {
	      if (record.action === 'block') {
	        console.log('HMMMMMMMMM');
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

/***/ 678:
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
	
	var _blockList = __webpack_require__(264);
	
	var _blockList2 = _interopRequireDefault(_blockList);
	
	var _wurl = __webpack_require__(669);
	
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
	          if (request.focus === 'focus' && senderSite !== _this.currentSite && senderSite && sender.tab.id !== _this.currentTab && _this.isValidProtocol(senderSite)) {
	            _this.popup = false;
	            if (_this.currentSite !== null) {
	              _this.saveRecords();
	            }
	            _this.currentTab = sender.tab.id;
	            _this.currentSite = senderSite;
	            _this.startInterval();
	          } else if (request.focus === 'blur') {
	            if (sender.tab.id === _this.currentTab && senderSite && !_this.popup) {
	              console.log('wow');
	              _this.saveRecords();
	              _this.currentSite = null;
	              _this.currentTab = null;
	            }
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
	      _blockList2.default.reconcileRecords(this.currentSite, this.dbCounter, 1);
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
	            _blockList2.default.reconcileRecords(_this2.currentSite, _this2.dbCounter, 0);
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
	    // console.log(`${key}: ${value}`);
	    target[key] = value;
	    return true;
	  }
	});
	exports.default = proxyTimer;

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGltZXIuanMiXSwibmFtZXMiOlsiaW5pdCIsInRoZW4iLCJCTE9DS0VEX1BBR0UiLCJsb2FkRmlsdGVyZWRQYWdlIiwidGFiSWQiLCJ1cmwiLCJzZXRUaW1lb3V0IiwiY2hyb21lIiwidGFicyIsInVwZGF0ZSIsInVybENoZWNrIiwiZGV0YWlscyIsInByb3RvY29sIiwic2l0ZSIsImdldFJlY29yZCIsInJlY29yZCIsImFjdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCIsImVyciIsIndlYlJlcXVlc3QiLCJvbkJlZm9yZVJlcXVlc3QiLCJhZGRMaXN0ZW5lciIsInVybHMiLCJ0eXBlcyIsIlRpbWVyIiwiY3VycmVudFNpdGUiLCJjdXJyZW50VGFiIiwicG9wdXAiLCJjb3VudGVyIiwiZGJDb3VudGVyIiwiaW50ZXJ2YWxJZCIsImN1cnJlbnREYXRlIiwiZm9ybWF0Iiwid2luZG93cyIsImdldEFsbCIsInBvcHVsYXRlIiwiZm9yRWFjaCIsIndpbiIsInRhYiIsImlzVmFsaWRQcm90b2NvbCIsImV4ZWN1dGVTY3JpcHQiLCJpZCIsImZpbGUiLCJydW50aW1lIiwib25NZXNzYWdlIiwicmVxdWVzdCIsInNlbmRlciIsInNlbmRSZXNwb25zZSIsImZvY3VzIiwic2VuZGVyU2l0ZSIsInNhdmVSZWNvcmRzIiwic3RhcnRJbnRlcnZhbCIsInRpbWVyIiwic2Vjb25kcyIsIm9uVXBkYXRlZCIsImNoYW5nZUluZm8iLCJ0YWJTaXRlIiwidmFsaWRVcmwiLCJjbGVhckludGVydmFsIiwicmVjb25jaWxlUmVjb3JkcyIsInNldEludGVydmFsIiwibm93IiwicHJveHlUaW1lciIsIlByb3h5Iiwic2V0IiwidGFyZ2V0Iiwia2V5IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLHFCQUFHQSxJQUFILEdBQVVDLElB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QUNELFVBUEQsTUFPTztBQUNMLGtCQUFLdkIsT0FBTCxHQUFlLE9BQUtBLE9BQUwsSUFBZ0IsQ0FBL0I7QUFDQSxrQkFBS0MsU0FBTCxHQUFpQixPQUFLQSxTQUFMLElBQWtCLENBQW5DO0FBQ0EsZUFBSSxPQUFLQSxTQUFMLEdBQWlCLEVBQWpCLEtBQXdCLENBQTVCLEVBQStCO0FBQzdCLGlDQUFHOEIsZ0JBQUgsQ0FBb0IsT0FBS2xDLFdBQXpCLEVBQXNDLE9BQUtJLFNBQTNDLEVBQXNELENBQXREO0FBQ0Esb0JBQUtBLFNBQUwsR0FBaUIsQ0FBakI7QUFDRDtBQUNGO0FBQ0YsUUFqQmlCLEVBaUJmLElBakJlLENBQWxCO0FBa0JEOzs7OztBQUVILEtBQU1pQyxhQUFhLElBQUlDLEtBQUosQ0FBVSxJQUFJdkMsS0FBSixFQUFWLEVBQXVCO0FBQ3hDd0MsTUFEd0MsZUFDcENDLE1BRG9DLEVBQzVCQyxHQUQ0QixFQUN2QkMsS0FEdUIsRUFDaEI7QUFDdEI7QUFDQUYsWUFBT0MsR0FBUCxJQUFjQyxLQUFkO0FBQ0EsWUFBTyxJQUFQO0FBQ0Q7QUFMdUMsRUFBdkIsQ0FBbkI7bUJBT2VMLFUiLCJmaWxlIjoiYmFja2dyb3VuZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3dXJsIGZyb20gJ3d1cmwnO1xuaW1wb3J0IEJMIGZyb20gJy4vYmxvY2tMaXN0LmpzJztcbmltcG9ydCBUaW1lciBmcm9tICcuL3RpbWVyLmpzJztcblxuQkwuaW5pdCgpLnRoZW4oKCkgPT4ge1xuICBUaW1lci5pbml0KCk7XG59KTtcblxuY29uc3QgQkxPQ0tFRF9QQUdFID0gJ2h0dHBzOi8vd3d3LmdpdGh1Yi5jb20vd3JsZXNrb3ZlYyc7XG5cbmZ1bmN0aW9uIGxvYWRGaWx0ZXJlZFBhZ2UodGFiSWQsIHVybCkge1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBjaHJvbWUudGFicy51cGRhdGUodGFiSWQsIHsgdXJsIH0pO1xuICB9LCA1MDApO1xufVxuXG5mdW5jdGlvbiB1cmxDaGVjayhkZXRhaWxzKSB7XG4gIGNvbnN0IHByb3RvY29sID0gd3VybCgncHJvdG9jb2wnLCBkZXRhaWxzLnVybCk7XG4gIGlmIChwcm90b2NvbCAhPT0gJ2Nocm9tZScgJiYgcHJvdG9jb2wgIT09ICdjaHJvbWUtZXh0ZW5zaW9uJykge1xuICAgIGNvbnN0IHNpdGUgPSB3dXJsKCdkb21haW4nLCBkZXRhaWxzLnVybCk7XG4gICAgQkwuZ2V0UmVjb3JkKHNpdGUpXG4gICAgICAudGhlbihyZWNvcmQgPT4ge1xuICAgICAgICBpZiAocmVjb3JkLmFjdGlvbiA9PT0gJ2Jsb2NrJykge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdITU1NTU1NTU1NJyk7XG4gICAgICAgICAgbG9hZEZpbHRlcmVkUGFnZShkZXRhaWxzLnRhYklkLCBCTE9DS0VEX1BBR0UpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9KTtcbiAgfVxuICByZXR1cm4ge307XG59XG5cbmNocm9tZS53ZWJSZXF1ZXN0Lm9uQmVmb3JlUmVxdWVzdC5hZGRMaXN0ZW5lcih1cmxDaGVjaywge1xuICB1cmxzOiBbJzxhbGxfdXJscz4nXSxcbiAgdHlwZXM6IFsnbWFpbl9mcmFtZSddXG59KTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2JhY2tncm91bmQuanNcbiAqKi8iLCJpbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgQkwgZnJvbSAnLi9ibG9ja0xpc3QuanMnO1xuaW1wb3J0IHd1cmwgZnJvbSAnd3VybCc7XG5cbmNsYXNzIFRpbWVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jdXJyZW50U2l0ZSA9IG51bGw7XG4gICAgdGhpcy5jdXJyZW50VGFiID0gbnVsbDtcbiAgICB0aGlzLnBvcHVwID0gZmFsc2U7XG4vLyAgICB0aGlzLndpbmRvd0ZvY3VzID0gdHJ1ZTtcbiAgICB0aGlzLmNvdW50ZXIgPSAxO1xuICAgIHRoaXMuZGJDb3VudGVyID0gMTtcbiAgICB0aGlzLmludGVydmFsSWQgPSBudWxsO1xuICAgIHRoaXMuY3VycmVudERhdGUgPSBtb21lbnQoKS5mb3JtYXQoJ0RELU1NLVlZWVknKTtcbiAgfVxuICBpbml0KCkge1xuICAgIC8vIGNocm9tZS53aW5kb3dzLm9uRm9jdXNDaGFuZ2VkLmFkZExpc3RlbmVyKCgpID0+IHtcbiAgICAvLyAgIGlmIChjaHJvbWUud2luZG93cy5XSU5ET1dfSURfTk9ORSkge1xuICAgIC8vICAgICB0aGlzLndpbmRvd0ZvY3VzID0gZmFsc2U7XG4gICAgLy8gICAgIGlmICh0aGlzLmN1cnJlbnRTaXRlICE9PSBudWxsKSB7XG4gICAgLy8gICAgICAgdGhpcy5zdG9wSW50ZXJ2YWwoKTtcbiAgICAvLyAgICAgICBCTC5yZWNvbmNpbGVSZWNvcmRzKHRoaXMuY3VycmVudFNpdGUsIHRoaXMuY291bnRlcik7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgdGhpcy5jdXJyZW50U2l0ZSA9IG51bGw7XG4gICAgLy8gICB9IGVsc2Uge1xuICAgIC8vICAgICB0aGlzLndpbmRvd0ZvY3VzID0gdHJ1ZTtcbiAgICAvLyAgICAgY29uc29sZS5sb2coJ2tpbGwgbWUgZ29vZ2xlJyk7XG4gICAgLy8gICB9XG4gICAgLy8gfSk7XG4gICAgY2hyb21lLndpbmRvd3MuZ2V0QWxsKHsgcG9wdWxhdGU6IHRydWUgfSwgKHdpbmRvd3MpID0+IHtcbiAgICAgIHdpbmRvd3MuZm9yRWFjaCgod2luKSA9PiB7XG4gICAgICAgIHdpbi50YWJzLmZvckVhY2goKHRhYikgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLmlzVmFsaWRQcm90b2NvbCh0YWIudXJsKSkge1xuICAgICAgICAgICAgY2hyb21lLnRhYnMuZXhlY3V0ZVNjcmlwdCh0YWIuaWQsIHsgZmlsZTogJ2NvbnRlbnQuanMnIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBjaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKHJlcXVlc3QsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSA9PiB7XG4gICAgICBpZiAocmVxdWVzdC5mb2N1cykge1xuICAgICAgICBjb25zdCBzZW5kZXJTaXRlID0gd3VybCgnZG9tYWluJywgc2VuZGVyLnRhYi51cmwpO1xuICAgICAgICBpZiAocmVxdWVzdC5mb2N1cyA9PT0gJ2ZvY3VzJyAmJiBzZW5kZXJTaXRlICE9PSB0aGlzLmN1cnJlbnRTaXRlICYmIHNlbmRlclNpdGVcbiAgICAgICAgICYmIHNlbmRlci50YWIuaWQgIT09IHRoaXMuY3VycmVudFRhYiAmJiB0aGlzLmlzVmFsaWRQcm90b2NvbChzZW5kZXJTaXRlKSkge1xuICAgICAgICAgIHRoaXMucG9wdXAgPSBmYWxzZTtcbiAgICAgICAgICBpZiAodGhpcy5jdXJyZW50U2l0ZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5zYXZlUmVjb3JkcygpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmN1cnJlbnRUYWIgPSBzZW5kZXIudGFiLmlkO1xuICAgICAgICAgIHRoaXMuY3VycmVudFNpdGUgPSBzZW5kZXJTaXRlO1xuICAgICAgICAgIHRoaXMuc3RhcnRJbnRlcnZhbCgpO1xuICAgICAgICB9IGVsc2UgaWYgKHJlcXVlc3QuZm9jdXMgPT09ICdibHVyJykge1xuICAgICAgICAgIGlmIChzZW5kZXIudGFiLmlkID09PSB0aGlzLmN1cnJlbnRUYWIgJiYgc2VuZGVyU2l0ZSAmJiAhdGhpcy5wb3B1cCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3dvdycpO1xuICAgICAgICAgICAgdGhpcy5zYXZlUmVjb3JkcygpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50U2l0ZSA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRUYWIgPSBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHJlcXVlc3QudGltZXIgPT09ICdwb3B1cCcpIHtcbiAgICAgICAgdGhpcy5wb3B1cCA9IHRydWU7XG4gICAgICAgIGNvbnNvbGUubG9nKCdiYWNrZ3JvdW5kIHJlc3BvbnNlJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHNlbmRlcik7XG4gICAgICAgIHNlbmRSZXNwb25zZSh7IHNlY29uZHM6IHRoaXMuY291bnRlciB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBjaHJvbWUudGFicy5vblVwZGF0ZWQuYWRkTGlzdGVuZXIoKHRhYklkLCBjaGFuZ2VJbmZvLCB0YWIpID0+IHtcbiAgICAgIGNvbnN0IHRhYlNpdGUgPSB3dXJsKCdkb21haW4nLCB0YWIudXJsKTtcbiAgICAgIGNvbnN0IHZhbGlkVXJsID0gdGFiU2l0ZSAhPT0gdGhpcy5jdXJyZW50U2l0ZSAmJiB0aGlzLmlzVmFsaWRQcm90b2NvbCh0YWIudXJsKTtcbiAgICAgIGNvbnNvbGUubG9nKGAke3RhYlNpdGV9OiAke3ZhbGlkVXJsfWApO1xuICAgICAgaWYgKHZhbGlkVXJsKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFNpdGUgPSB0YWJTaXRlO1xuICAgICAgICB0aGlzLmN1cnJlbnRUYWIgPSB0YWIuaWQ7XG4gICAgICAgIHRoaXMuc3RhcnRJbnRlcnZhbCgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIC8vICAgY2hyb21lLndpbmRvd3Mub25SZW1vdmVkLmFkZExpc3RlbmVyKCgpID0+IHtcbiAgLy8gICAgIC8vXG4gIC8vICAgfSk7XG4gIC8vICAgY2hyb21lLnRhYnMub25BY3RpdmF0ZWQuYWRkTGlzdGVuZXIoYWN0aXZlSW5mbyA9PiB7XG4gIC8vICAgICBjaHJvbWUudGFicy5nZXQoYWN0aXZlSW5mby50YWJJZCwgdGFiID0+IHtcbiAgLy8gICAgICAgY29uc3QgcHJvdG9jb2wgPSB3dXJsKCdwcm90b2NvbCcsIHRhYi51cmwpO1xuICAvLyAgICAgICBpZiAocHJvdG9jb2wgPT09ICdjaHJvbWUnIHx8IHByb3RvY29sID09PSAnY2hyb21lLWV4dGVuc2lvbicpIHtcbiAgLy8gICAgICAgICBjb25zb2xlLmxvZygnTk9JQ0UnKTtcbiAgLy8gICAgICAgfSBlbHNlIGlmICh3dXJsKCdkb21haW4nLCB0YWIudXJsKSA9PT0gdGhpcy5jdXJyZW50U2l0ZSkge1xuICAvLyAgICAgICAgIGNvbnNvbGUubG9nKCdTQU1FIFNJVEUnKTtcbiAgLy8gICAgICAgfSBlbHNlIHtcbiAgLy8gICAgICAgICBpZiAodGhpcy5jdXJyZW50U2l0ZSAhPT0gbnVsbCkge1xuICAvLyAgICAgICAgICAgdGhpcy5zdG9wSW50ZXJ2YWwoKTtcbiAgLy8gICAgICAgICAgIEJMLnJlY29uY2lsZVJlY29yZHModGhpcy5jdXJyZW50U2l0ZSwgdGhpcy5jb3VudGVyKTtcbiAgLy8gICAgICAgICB9XG4gIC8vICAgICAgICAgY29uc29sZS5sb2coJ0RJRkYgU0lURScpO1xuICAvLyAgICAgICAgIHRoaXMuY3VycmVudFNpdGUgPSB3dXJsKCdkb21haW4nLCB0YWIudXJsKTtcbiAgLy8gICAgICAgICB0aGlzLnN0YXJ0SW50ZXJ2YWwoKTtcbiAgLy8gICAgICAgfVxuICAvLyAgICAgfSk7XG4gIC8vICAgfSk7XG5cbiAgaXNWYWxpZFByb3RvY29sKHVybCkge1xuICAgIGNvbnN0IHByb3RvY29sID0gd3VybCgncHJvdG9jb2wnLCB1cmwpO1xuICAgIHJldHVybiAoXG4gICAgICBwcm90b2NvbCA9PT0gJ2h0dHAnIHx8IHByb3RvY29sID09PSAnaHR0cHMnIHx8IHByb3RvY29sID09PSAnZnRwJ1xuICAgICk7XG4gIH1cbiAgc2F2ZVJlY29yZHMoKSB7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsSWQpO1xuICAgIHRoaXMuaW50ZXJ2YWxJZCA9IG51bGw7XG4gICAgQkwucmVjb25jaWxlUmVjb3Jkcyh0aGlzLmN1cnJlbnRTaXRlLCB0aGlzLmRiQ291bnRlciwgMSk7XG4gIH1cbiAgc3RhcnRJbnRlcnZhbCgpIHtcbiAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWxJZCk7XG4gICAgdGhpcy5jb3VudGVyID0gMTtcbiAgICB0aGlzLmRiQ291bnRlciA9IDE7XG4gICAgdGhpcy5pbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgY29uc3Qgbm93ID0gbW9tZW50KCkuZm9ybWF0KCdERC1NTS1ZWVlZJyk7XG4gICAgICBpZiAobm93ICE9PSB0aGlzLmN1cnJlbnREYXRlKSB7XG4gICAgICAgIGlmICh0aGlzLmludGVydmFsSWQgIT09IG51bGwpIHtcbiAgICAgICAgICB0aGlzLnNhdmVSZWNvcmRzKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gV2hhdGV2ZXIgaXRzIG5vdCBsaWtlIHRoaXMgbmVlZHMgdG8gYmUgcHJlY2lzZVxuICAgICAgICB0aGlzLmN1cnJlbnREYXRlID0gbm93O1xuICAgICAgICB0aGlzLnN0YXJ0SW50ZXJ2YWwoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY291bnRlciA9IHRoaXMuY291bnRlciArPSAxO1xuICAgICAgICB0aGlzLmRiQ291bnRlciA9IHRoaXMuZGJDb3VudGVyICs9IDE7XG4gICAgICAgIGlmICh0aGlzLmRiQ291bnRlciAlIDYwID09PSAwKSB7XG4gICAgICAgICAgQkwucmVjb25jaWxlUmVjb3Jkcyh0aGlzLmN1cnJlbnRTaXRlLCB0aGlzLmRiQ291bnRlciwgMCk7XG4gICAgICAgICAgdGhpcy5kYkNvdW50ZXIgPSAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgMTAwMCk7XG4gIH1cbn1cbmNvbnN0IHByb3h5VGltZXIgPSBuZXcgUHJveHkobmV3IFRpbWVyKCksIHtcbiAgc2V0KHRhcmdldCwga2V5LCB2YWx1ZSkge1xuICAgIC8vIGNvbnNvbGUubG9nKGAke2tleX06ICR7dmFsdWV9YCk7XG4gICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufSk7XG5leHBvcnQgZGVmYXVsdCBwcm94eVRpbWVyO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdGltZXIuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9