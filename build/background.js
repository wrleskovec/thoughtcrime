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
	      chrome.runtime.onMessage.addListener(function (request, sender) {
	        var senderSite = (0, _wurl2.default)('domain', sender.tab.url);
	        if (senderSite !== null) {
	          if (request.focus === 'focus' && senderSite !== _this.currentSite && sender.tab.id !== _this.currentTab && _this.isValidProtocol(senderSite)) {
	            if (_this.currentSite !== null) {
	              _this.saveRecords();
	            }
	            _this.currentTab = sender.tab.id;
	            _this.currentSite = senderSite;
	            _this.startInterval();
	          } else if (request.focus === 'blur' && sender.tab.id === _this.currentTab) {
	            _this.saveRecords();
	            _this.currentSite = null;
	            _this.currentTab = null;
	          }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGltZXIuanMiXSwibmFtZXMiOlsiaW5pdCIsInRoZW4iLCJCTE9DS0VEX1BBR0UiLCJsb2FkRmlsdGVyZWRQYWdlIiwidGFiSWQiLCJ1cmwiLCJjaHJvbWUiLCJ0YWJzIiwidXBkYXRlIiwidXJsQ2hlY2siLCJkZXRhaWxzIiwicHJvdG9jb2wiLCJzaXRlIiwiZ2V0UmVjb3JkIiwicmVjb3JkIiwiYWN0aW9uIiwiY2F0Y2giLCJjb25zb2xlIiwibG9nIiwiZXJyIiwid2ViUmVxdWVzdCIsIm9uQmVmb3JlUmVxdWVzdCIsImFkZExpc3RlbmVyIiwidXJscyIsInR5cGVzIiwiVGltZXIiLCJjdXJyZW50U2l0ZSIsImN1cnJlbnRUYWIiLCJjb3VudGVyIiwiZGJDb3VudGVyIiwiaW50ZXJ2YWxJZCIsImN1cnJlbnREYXRlIiwiZm9ybWF0Iiwid2luZG93cyIsImdldEFsbCIsInBvcHVsYXRlIiwiZm9yRWFjaCIsIndpbiIsInRhYiIsImlzVmFsaWRQcm90b2NvbCIsImV4ZWN1dGVTY3JpcHQiLCJpZCIsImZpbGUiLCJydW50aW1lIiwib25NZXNzYWdlIiwicmVxdWVzdCIsInNlbmRlciIsInNlbmRlclNpdGUiLCJmb2N1cyIsInNhdmVSZWNvcmRzIiwic3RhcnRJbnRlcnZhbCIsIm9uVXBkYXRlZCIsImNoYW5nZUluZm8iLCJ0YWJTaXRlIiwidmFsaWRVcmwiLCJjbGVhckludGVydmFsIiwicmVjb25jaWxlUmVjb3JkcyIsInNldEludGVydmFsIiwibm93IiwicHJveHlUaW1lciIsIlByb3h5Iiwic2V0IiwidGFyZ2V0Iiwia2V5IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLHFCQUFHQSxJQUFILEdBQVVDLElBQVYsQ0FBZSxZQUFNO0FBQ25CLG1CQUFNRCxJQUFOO0FBQ0QsRUFGRDs7QUFJQSxLQUFNRSxl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QUFjQyxLQUFkO0FBQ0EsWUFBTyxJQUFQO0FBQ0Q7QUFMdUMsRUFBdkIsQ0FBbkI7bUJBT2VMLFUiLCJmaWxlIjoiYmFja2dyb3VuZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3dXJsIGZyb20gJ3d1cmwnO1xuaW1wb3J0IEJMIGZyb20gJy4vYmxvY2tMaXN0LmpzJztcbmltcG9ydCBUaW1lciBmcm9tICcuL3RpbWVyLmpzJztcblxuQkwuaW5pdCgpLnRoZW4oKCkgPT4ge1xuICBUaW1lci5pbml0KCk7XG59KTtcblxuY29uc3QgQkxPQ0tFRF9QQUdFID0gJ2h0dHBzOi8vd3d3LmdpdGh1Yi5jb20vd3JsZXNrb3ZlYyc7XG5cbmZ1bmN0aW9uIGxvYWRGaWx0ZXJlZFBhZ2UodGFiSWQsIHVybCkge1xuICBjaHJvbWUudGFicy51cGRhdGUodGFiSWQsIHtcbiAgICB1cmxcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHVybENoZWNrKGRldGFpbHMpIHtcbiAgY29uc3QgcHJvdG9jb2wgPSB3dXJsKCdwcm90b2NvbCcsIGRldGFpbHMudXJsKTtcbiAgaWYgKHByb3RvY29sICE9PSAnY2hyb21lJyAmJiBwcm90b2NvbCAhPT0gJ2Nocm9tZS1leHRlbnNpb24nKSB7XG4gICAgY29uc3Qgc2l0ZSA9IHd1cmwoJ2RvbWFpbicsIGRldGFpbHMudXJsKTtcbiAgICBCTC5nZXRSZWNvcmQoc2l0ZSlcbiAgICAgIC50aGVuKHJlY29yZCA9PiB7XG4gICAgICAgIGlmIChyZWNvcmQuYWN0aW9uID09PSAnYmxvY2snKSB7XG4gICAgICAgICAgbG9hZEZpbHRlcmVkUGFnZShkZXRhaWxzLnRhYklkLCBCTE9DS0VEX1BBR0UpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9KTtcbiAgfVxuICByZXR1cm4ge307XG59XG5cbmNocm9tZS53ZWJSZXF1ZXN0Lm9uQmVmb3JlUmVxdWVzdC5hZGRMaXN0ZW5lcih1cmxDaGVjaywge1xuICB1cmxzOiBbJzxhbGxfdXJscz4nXSxcbiAgdHlwZXM6IFsnbWFpbl9mcmFtZSddXG59KTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2JhY2tncm91bmQuanNcbiAqKi8iLCJpbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgQkwgZnJvbSAnLi9ibG9ja0xpc3QuanMnO1xuaW1wb3J0IHd1cmwgZnJvbSAnd3VybCc7XG5cbmNsYXNzIFRpbWVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jdXJyZW50U2l0ZSA9IG51bGw7XG4gICAgdGhpcy5jdXJyZW50VGFiID0gbnVsbDtcbi8vICAgIHRoaXMud2luZG93Rm9jdXMgPSB0cnVlO1xuICAgIHRoaXMuY291bnRlciA9IDE7XG4gICAgdGhpcy5kYkNvdW50ZXIgPSAxO1xuICAgIHRoaXMuaW50ZXJ2YWxJZCA9IG51bGw7XG4gICAgdGhpcy5jdXJyZW50RGF0ZSA9IG1vbWVudCgpLmZvcm1hdCgnREQtTU0tWVlZWScpO1xuICB9XG4gIGluaXQoKSB7XG4gICAgLy8gY2hyb21lLndpbmRvd3Mub25Gb2N1c0NoYW5nZWQuYWRkTGlzdGVuZXIoKCkgPT4ge1xuICAgIC8vICAgaWYgKGNocm9tZS53aW5kb3dzLldJTkRPV19JRF9OT05FKSB7XG4gICAgLy8gICAgIHRoaXMud2luZG93Rm9jdXMgPSBmYWxzZTtcbiAgICAvLyAgICAgaWYgKHRoaXMuY3VycmVudFNpdGUgIT09IG51bGwpIHtcbiAgICAvLyAgICAgICB0aGlzLnN0b3BJbnRlcnZhbCgpO1xuICAgIC8vICAgICAgIEJMLnJlY29uY2lsZVJlY29yZHModGhpcy5jdXJyZW50U2l0ZSwgdGhpcy5jb3VudGVyKTtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICB0aGlzLmN1cnJlbnRTaXRlID0gbnVsbDtcbiAgICAvLyAgIH0gZWxzZSB7XG4gICAgLy8gICAgIHRoaXMud2luZG93Rm9jdXMgPSB0cnVlO1xuICAgIC8vICAgICBjb25zb2xlLmxvZygna2lsbCBtZSBnb29nbGUnKTtcbiAgICAvLyAgIH1cbiAgICAvLyB9KTtcbiAgICBjaHJvbWUud2luZG93cy5nZXRBbGwoeyBwb3B1bGF0ZTogdHJ1ZSB9LCAod2luZG93cykgPT4ge1xuICAgICAgd2luZG93cy5mb3JFYWNoKCh3aW4pID0+IHtcbiAgICAgICAgd2luLnRhYnMuZm9yRWFjaCgodGFiKSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMuaXNWYWxpZFByb3RvY29sKHRhYi51cmwpKSB7XG4gICAgICAgICAgICBjaHJvbWUudGFicy5leGVjdXRlU2NyaXB0KHRhYi5pZCwgeyBmaWxlOiAnY29udGVudC5qcycgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigocmVxdWVzdCwgc2VuZGVyKSA9PiB7XG4gICAgICBjb25zdCBzZW5kZXJTaXRlID0gd3VybCgnZG9tYWluJywgc2VuZGVyLnRhYi51cmwpO1xuICAgICAgaWYgKHNlbmRlclNpdGUgIT09IG51bGwpIHtcbiAgICAgICAgaWYgKHJlcXVlc3QuZm9jdXMgPT09ICdmb2N1cycgJiYgc2VuZGVyU2l0ZSAhPT0gdGhpcy5jdXJyZW50U2l0ZVxuICAgICAgICAgJiYgc2VuZGVyLnRhYi5pZCAhPT0gdGhpcy5jdXJyZW50VGFiICYmIHRoaXMuaXNWYWxpZFByb3RvY29sKHNlbmRlclNpdGUpKSB7XG4gICAgICAgICAgaWYgKHRoaXMuY3VycmVudFNpdGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuc2F2ZVJlY29yZHMoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5jdXJyZW50VGFiID0gc2VuZGVyLnRhYi5pZDtcbiAgICAgICAgICB0aGlzLmN1cnJlbnRTaXRlID0gc2VuZGVyU2l0ZTtcbiAgICAgICAgICB0aGlzLnN0YXJ0SW50ZXJ2YWwoKTtcbiAgICAgICAgfSBlbHNlIGlmIChyZXF1ZXN0LmZvY3VzID09PSAnYmx1cicgJiYgc2VuZGVyLnRhYi5pZCA9PT0gdGhpcy5jdXJyZW50VGFiKSB7XG4gICAgICAgICAgdGhpcy5zYXZlUmVjb3JkcygpO1xuICAgICAgICAgIHRoaXMuY3VycmVudFNpdGUgPSBudWxsO1xuICAgICAgICAgIHRoaXMuY3VycmVudFRhYiA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICBjaHJvbWUudGFicy5vblVwZGF0ZWQuYWRkTGlzdGVuZXIoKHRhYklkLCBjaGFuZ2VJbmZvLCB0YWIpID0+IHtcbiAgICAgIGNvbnN0IHRhYlNpdGUgPSB3dXJsKCdkb21haW4nLCB0YWIudXJsKTtcbiAgICAgIGNvbnN0IHZhbGlkVXJsID0gdGFiU2l0ZSAhPT0gdGhpcy5jdXJyZW50U2l0ZSAmJiB0aGlzLmlzVmFsaWRQcm90b2NvbCh0YWIudXJsKTtcbiAgICAgIGNvbnNvbGUubG9nKGAke3RhYlNpdGV9OiAke3ZhbGlkVXJsfWApO1xuICAgICAgaWYgKHZhbGlkVXJsKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFNpdGUgPSB0YWJTaXRlO1xuICAgICAgICB0aGlzLmN1cnJlbnRUYWIgPSB0YWIuaWQ7XG4gICAgICAgIHRoaXMuc3RhcnRJbnRlcnZhbCgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIC8vICAgY2hyb21lLndpbmRvd3Mub25SZW1vdmVkLmFkZExpc3RlbmVyKCgpID0+IHtcbiAgLy8gICAgIC8vXG4gIC8vICAgfSk7XG4gIC8vICAgY2hyb21lLnRhYnMub25BY3RpdmF0ZWQuYWRkTGlzdGVuZXIoYWN0aXZlSW5mbyA9PiB7XG4gIC8vICAgICBjaHJvbWUudGFicy5nZXQoYWN0aXZlSW5mby50YWJJZCwgdGFiID0+IHtcbiAgLy8gICAgICAgY29uc3QgcHJvdG9jb2wgPSB3dXJsKCdwcm90b2NvbCcsIHRhYi51cmwpO1xuICAvLyAgICAgICBpZiAocHJvdG9jb2wgPT09ICdjaHJvbWUnIHx8IHByb3RvY29sID09PSAnY2hyb21lLWV4dGVuc2lvbicpIHtcbiAgLy8gICAgICAgICBjb25zb2xlLmxvZygnTk9JQ0UnKTtcbiAgLy8gICAgICAgfSBlbHNlIGlmICh3dXJsKCdkb21haW4nLCB0YWIudXJsKSA9PT0gdGhpcy5jdXJyZW50U2l0ZSkge1xuICAvLyAgICAgICAgIGNvbnNvbGUubG9nKCdTQU1FIFNJVEUnKTtcbiAgLy8gICAgICAgfSBlbHNlIHtcbiAgLy8gICAgICAgICBpZiAodGhpcy5jdXJyZW50U2l0ZSAhPT0gbnVsbCkge1xuICAvLyAgICAgICAgICAgdGhpcy5zdG9wSW50ZXJ2YWwoKTtcbiAgLy8gICAgICAgICAgIEJMLnJlY29uY2lsZVJlY29yZHModGhpcy5jdXJyZW50U2l0ZSwgdGhpcy5jb3VudGVyKTtcbiAgLy8gICAgICAgICB9XG4gIC8vICAgICAgICAgY29uc29sZS5sb2coJ0RJRkYgU0lURScpO1xuICAvLyAgICAgICAgIHRoaXMuY3VycmVudFNpdGUgPSB3dXJsKCdkb21haW4nLCB0YWIudXJsKTtcbiAgLy8gICAgICAgICB0aGlzLnN0YXJ0SW50ZXJ2YWwoKTtcbiAgLy8gICAgICAgfVxuICAvLyAgICAgfSk7XG4gIC8vICAgfSk7XG5cbiAgaXNWYWxpZFByb3RvY29sKHVybCkge1xuICAgIGNvbnN0IHByb3RvY29sID0gd3VybCgncHJvdG9jb2wnLCB1cmwpO1xuICAgIHJldHVybiAoXG4gICAgICBwcm90b2NvbCA9PT0gJ2h0dHAnIHx8IHByb3RvY29sID09PSAnaHR0cHMnIHx8IHByb3RvY29sID09PSAnZnRwJ1xuICAgICk7XG4gIH1cbiAgc2F2ZVJlY29yZHMoKSB7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsSWQpO1xuICAgIHRoaXMuaW50ZXJ2YWxJZCA9IG51bGw7XG4gICAgQkwucmVjb25jaWxlUmVjb3Jkcyh0aGlzLmN1cnJlbnRTaXRlLCB0aGlzLmRiQ291bnRlcik7XG4gIH1cbiAgc3RhcnRJbnRlcnZhbCgpIHtcbiAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWxJZCk7XG4gICAgdGhpcy5jb3VudGVyID0gMTtcbiAgICB0aGlzLmRiQ291bnRlciA9IDE7XG4gICAgdGhpcy5pbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgY29uc3Qgbm93ID0gbW9tZW50KCkuZm9ybWF0KCdERC1NTS1ZWVlZJyk7XG4gICAgICBpZiAobm93ICE9PSB0aGlzLmN1cnJlbnREYXRlKSB7XG4gICAgICAgIGlmICh0aGlzLmludGVydmFsSWQgIT09IG51bGwpIHtcbiAgICAgICAgICB0aGlzLnNhdmVSZWNvcmRzKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gV2hhdGV2ZXIgaXRzIG5vdCBsaWtlIHRoaXMgbmVlZHMgdG8gYmUgcHJlY2lzZVxuICAgICAgICB0aGlzLmN1cnJlbnREYXRlID0gbm93O1xuICAgICAgICB0aGlzLnN0YXJ0SW50ZXJ2YWwoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY291bnRlciA9IHRoaXMuY291bnRlciArPSAxO1xuICAgICAgICB0aGlzLmRiQ291bnRlciA9IHRoaXMuZGJDb3VudGVyICs9IDE7XG4gICAgICAgIGlmICh0aGlzLmRiQ291bnRlciAlIDYwID09PSAwKSB7XG4gICAgICAgICAgQkwucmVjb25jaWxlUmVjb3Jkcyh0aGlzLmN1cnJlbnRTaXRlLCB0aGlzLmRiQ291bnRlcik7XG4gICAgICAgICAgdGhpcy5kYkNvdW50ZXIgPSAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgMTAwMCk7XG4gIH1cbn1cbmNvbnN0IHByb3h5VGltZXIgPSBuZXcgUHJveHkobmV3IFRpbWVyKCksIHtcbiAgc2V0KHRhcmdldCwga2V5LCB2YWx1ZSkge1xuICAgIGNvbnNvbGUubG9nKGAke2tleX06ICR7dmFsdWV9YCk7XG4gICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufSk7XG5leHBvcnQgZGVmYXVsdCBwcm94eVRpbWVyO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdGltZXIuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9