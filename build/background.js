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
	          if (request.focus === 'focus' && senderSite !== _this.currentSite && sender.tab.id !== _this.currentTab) {
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
	    //   chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
	    //     if (!tab.url) {
	    //       console.log('Not a valid url');
	    //     } else {
	    //       const tabSite = wurl('domain', tab.url);
	    //       const protocol = wurl('protocol', tab.url);
	    //       const validUrl = tabSite !== this.currentSite && tabSite !== undefined &&
	    //         protocol !== 'chrome' && protocol !== 'chrome-extension';
	    //       if (validUrl) {
	    //         this.currentSite = tabSite;
	    //         console.log(this.currentSite);
	    //         this.startInterval();
	    //       }
	    //     }
	    //   });
	    // }
	
	  }, {
	    key: 'isValidProtocol',
	    value: function isValidProtocol(url) {
	      var protocol = (0, _wurl2.default)('protocol', url);
	      return protocol !== 'chrome' && protocol !== 'chrome-extension';
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
	          if (_this2.dbCounter % 60) {
	            _blockList2.default.reconcileRecords(_this2.currentSite, _this2.dbCounter);
	            _this2.dbCounter = 0;
	          }
	          console.log((0, _moment2.default)().second(_this2.counter).format('HH : mm : ss'));
	        }
	      }, 1000);
	    }
	  }]);
	  return Timer;
	}();
	
	exports.default = Timer;

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGltZXIuanMiXSwibmFtZXMiOlsic2l0ZVRpbWVyIiwiaW5pdCIsInRoZW4iLCJCTE9DS0VEX1BBR0UiLCJsb2FkRmlsdGVyZWRQYWdlIiwidGFiSWQiLCJ1cmwiLCJjaHJvbWUiLCJ0YWJzIiwidXBkYXRlIiwidXJsQ2hlY2siLCJkZXRhaWxzIiwicHJvdG9jb2wiLCJzaXRlIiwiZ2V0UmVjb3JkIiwicmVjb3JkIiwiYWN0aW9uIiwiY2F0Y2giLCJjb25zb2xlIiwibG9nIiwiZXJyIiwid2ViUmVxdWVzdCIsIm9uQmVmb3JlUmVxdWVzdCIsImFkZExpc3RlbmVyIiwidXJscyIsInR5cGVzIiwiVGltZXIiLCJjdXJyZW50U2l0ZSIsImN1cnJlbnRUYWIiLCJjb3VudGVyIiwiZGJDb3VudGVyIiwiaW50ZXJ2YWxJZCIsImN1cnJlbnREYXRlIiwiZm9ybWF0Iiwid2luZG93cyIsImdldEFsbCIsInBvcHVsYXRlIiwiZm9yRWFjaCIsIndpbiIsInRhYiIsImlzVmFsaWRQcm90b2NvbCIsImV4ZWN1dGVTY3JpcHQiLCJpZCIsImZpbGUiLCJydW50aW1lIiwib25NZXNzYWdlIiwicmVxdWVzdCIsInNlbmRlciIsInNlbmRlclNpdGUiLCJmb2N1cyIsInNhdmVSZWNvcmRzIiwic3RhcnRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJyZWNvbmNpbGVSZWNvcmRzIiwic2V0SW50ZXJ2YWwiLCJub3ciLCJzZWNvbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLEtBQU1BLFlBQVkscUJBQWxCO0FBQ0EscUJBQUdDLElBQUgsR0FBVUMsSUFBVixDQUFlLFlBQU07QUFDbkJGLGFBQVVDLElBQVY7QUFDRCxFQUZEOztBQUlBLEtBQU1FLGVBQWUsbUNBQXJCOztBQUVBLFVBQVNDLGdCQUFULENBQTBCQyxLQUExQixFQUFpQ0MsR0FB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QU9PO0FBQ0wsa0JBQUt0QixPQUFMLEdBQWUsT0FBS0EsT0FBTCxJQUFnQixDQUEvQjtBQUNBLGtCQUFLQyxTQUFMLEdBQWlCLE9BQUtBLFNBQUwsSUFBa0IsQ0FBbkM7QUFDQSxlQUFJLE9BQUtBLFNBQUwsR0FBaUIsRUFBckIsRUFBeUI7QUFDdkIsaUNBQUd1QixnQkFBSCxDQUFvQixPQUFLMUIsV0FBekIsRUFBc0MsT0FBS0csU0FBM0M7QUFDQSxvQkFBS0EsU0FBTCxHQUFpQixDQUFqQjtBQUNEO0FBQ0RaLG1CQUFRQyxHQUFSLENBQVksd0JBQVNxQyxNQUFULENBQWdCLE9BQUszQixPQUFyQixFQUE4QkksTUFBOUIsQ0FBcUMsY0FBckMsQ0FBWjtBQUNEO0FBQ0YsUUFsQmlCLEVBa0JmLElBbEJlLENBQWxCO0FBbUJEOzs7OzttQkF4SGtCUCxLIiwiZmlsZSI6ImJhY2tncm91bmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd3VybCBmcm9tICd3dXJsJztcbmltcG9ydCBCTCBmcm9tICcuL2Jsb2NrTGlzdC5qcyc7XG5pbXBvcnQgVGltZXIgZnJvbSAnLi90aW1lci5qcyc7XG5cbmNvbnN0IHNpdGVUaW1lciA9IG5ldyBUaW1lcigpO1xuQkwuaW5pdCgpLnRoZW4oKCkgPT4ge1xuICBzaXRlVGltZXIuaW5pdCgpO1xufSk7XG5cbmNvbnN0IEJMT0NLRURfUEFHRSA9ICdodHRwczovL3d3dy5naXRodWIuY29tL3dybGVza292ZWMnO1xuXG5mdW5jdGlvbiBsb2FkRmlsdGVyZWRQYWdlKHRhYklkLCB1cmwpIHtcbiAgY2hyb21lLnRhYnMudXBkYXRlKHRhYklkLCB7XG4gICAgdXJsXG4gIH0pO1xufVxuXG5mdW5jdGlvbiB1cmxDaGVjayhkZXRhaWxzKSB7XG4gIGNvbnN0IHByb3RvY29sID0gd3VybCgncHJvdG9jb2wnLCBkZXRhaWxzLnVybCk7XG4gIGlmIChwcm90b2NvbCAhPT0gJ2Nocm9tZScgJiYgcHJvdG9jb2wgIT09ICdjaHJvbWUtZXh0ZW5zaW9uJykge1xuICAgIGNvbnN0IHNpdGUgPSB3dXJsKCdkb21haW4nLCBkZXRhaWxzLnVybCk7XG4gICAgQkwuZ2V0UmVjb3JkKHNpdGUpXG4gICAgICAudGhlbihyZWNvcmQgPT4ge1xuICAgICAgICBpZiAocmVjb3JkLmFjdGlvbiA9PT0gJ2Jsb2NrJykge1xuICAgICAgICAgIGxvYWRGaWx0ZXJlZFBhZ2UoZGV0YWlscy50YWJJZCwgQkxPQ0tFRF9QQUdFKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfSk7XG4gIH1cbiAgcmV0dXJuIHt9O1xufVxuXG5jaHJvbWUud2ViUmVxdWVzdC5vbkJlZm9yZVJlcXVlc3QuYWRkTGlzdGVuZXIodXJsQ2hlY2ssIHtcbiAgdXJsczogWyc8YWxsX3VybHM+J10sXG4gIHR5cGVzOiBbJ21haW5fZnJhbWUnXVxufSk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9iYWNrZ3JvdW5kLmpzXG4gKiovIiwiaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IEJMIGZyb20gJy4vYmxvY2tMaXN0LmpzJztcbmltcG9ydCB3dXJsIGZyb20gJ3d1cmwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaW1lciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY3VycmVudFNpdGUgPSBudWxsO1xuICAgIHRoaXMuY3VycmVudFRhYiA9IG51bGw7XG4vLyAgICB0aGlzLndpbmRvd0ZvY3VzID0gdHJ1ZTtcbiAgICB0aGlzLmNvdW50ZXIgPSAxO1xuICAgIHRoaXMuZGJDb3VudGVyID0gMTtcbiAgICB0aGlzLmludGVydmFsSWQgPSBudWxsO1xuICAgIHRoaXMuY3VycmVudERhdGUgPSBtb21lbnQoKS5mb3JtYXQoJ0RELU1NLVlZWVknKTtcbiAgfVxuICBpbml0KCkge1xuICAgIC8vIGNocm9tZS53aW5kb3dzLm9uRm9jdXNDaGFuZ2VkLmFkZExpc3RlbmVyKCgpID0+IHtcbiAgICAvLyAgIGlmIChjaHJvbWUud2luZG93cy5XSU5ET1dfSURfTk9ORSkge1xuICAgIC8vICAgICB0aGlzLndpbmRvd0ZvY3VzID0gZmFsc2U7XG4gICAgLy8gICAgIGlmICh0aGlzLmN1cnJlbnRTaXRlICE9PSBudWxsKSB7XG4gICAgLy8gICAgICAgdGhpcy5zdG9wSW50ZXJ2YWwoKTtcbiAgICAvLyAgICAgICBCTC5yZWNvbmNpbGVSZWNvcmRzKHRoaXMuY3VycmVudFNpdGUsIHRoaXMuY291bnRlcik7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgdGhpcy5jdXJyZW50U2l0ZSA9IG51bGw7XG4gICAgLy8gICB9IGVsc2Uge1xuICAgIC8vICAgICB0aGlzLndpbmRvd0ZvY3VzID0gdHJ1ZTtcbiAgICAvLyAgICAgY29uc29sZS5sb2coJ2tpbGwgbWUgZ29vZ2xlJyk7XG4gICAgLy8gICB9XG4gICAgLy8gfSk7XG4gICAgY2hyb21lLndpbmRvd3MuZ2V0QWxsKHsgcG9wdWxhdGU6IHRydWUgfSwgKHdpbmRvd3MpID0+IHtcbiAgICAgIHdpbmRvd3MuZm9yRWFjaCgod2luKSA9PiB7XG4gICAgICAgIHdpbi50YWJzLmZvckVhY2goKHRhYikgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLmlzVmFsaWRQcm90b2NvbCh0YWIudXJsKSkge1xuICAgICAgICAgICAgY2hyb21lLnRhYnMuZXhlY3V0ZVNjcmlwdCh0YWIuaWQsIHsgZmlsZTogJ2NvbnRlbnQuanMnIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBjaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKHJlcXVlc3QsIHNlbmRlcikgPT4ge1xuICAgICAgY29uc3Qgc2VuZGVyU2l0ZSA9IHd1cmwoJ2RvbWFpbicsIHNlbmRlci50YWIudXJsKTtcbiAgICAgIGlmIChzZW5kZXJTaXRlICE9PSBudWxsKSB7XG4gICAgICAgIGlmIChyZXF1ZXN0LmZvY3VzID09PSAnZm9jdXMnICYmIHNlbmRlclNpdGUgIT09IHRoaXMuY3VycmVudFNpdGVcbiAgICAgICAgICYmIHNlbmRlci50YWIuaWQgIT09IHRoaXMuY3VycmVudFRhYikge1xuICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRTaXRlICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnNhdmVSZWNvcmRzKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuY3VycmVudFRhYiA9IHNlbmRlci50YWIuaWQ7XG4gICAgICAgICAgdGhpcy5jdXJyZW50U2l0ZSA9IHNlbmRlclNpdGU7XG4gICAgICAgICAgdGhpcy5zdGFydEludGVydmFsKCk7XG4gICAgICAgIH0gZWxzZSBpZiAocmVxdWVzdC5mb2N1cyA9PT0gJ2JsdXInICYmIHNlbmRlci50YWIuaWQgPT09IHRoaXMuY3VycmVudFRhYikge1xuICAgICAgICAgIHRoaXMuc2F2ZVJlY29yZHMoKTtcbiAgICAgICAgICB0aGlzLmN1cnJlbnRTaXRlID0gbnVsbDtcbiAgICAgICAgICB0aGlzLmN1cnJlbnRUYWIgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgLy8gICBjaHJvbWUud2luZG93cy5vblJlbW92ZWQuYWRkTGlzdGVuZXIoKCkgPT4ge1xuICAvLyAgICAgLy9cbiAgLy8gICB9KTtcbiAgLy8gICBjaHJvbWUudGFicy5vbkFjdGl2YXRlZC5hZGRMaXN0ZW5lcihhY3RpdmVJbmZvID0+IHtcbiAgLy8gICAgIGNocm9tZS50YWJzLmdldChhY3RpdmVJbmZvLnRhYklkLCB0YWIgPT4ge1xuICAvLyAgICAgICBjb25zdCBwcm90b2NvbCA9IHd1cmwoJ3Byb3RvY29sJywgdGFiLnVybCk7XG4gIC8vICAgICAgIGlmIChwcm90b2NvbCA9PT0gJ2Nocm9tZScgfHwgcHJvdG9jb2wgPT09ICdjaHJvbWUtZXh0ZW5zaW9uJykge1xuICAvLyAgICAgICAgIGNvbnNvbGUubG9nKCdOT0lDRScpO1xuICAvLyAgICAgICB9IGVsc2UgaWYgKHd1cmwoJ2RvbWFpbicsIHRhYi51cmwpID09PSB0aGlzLmN1cnJlbnRTaXRlKSB7XG4gIC8vICAgICAgICAgY29uc29sZS5sb2coJ1NBTUUgU0lURScpO1xuICAvLyAgICAgICB9IGVsc2Uge1xuICAvLyAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRTaXRlICE9PSBudWxsKSB7XG4gIC8vICAgICAgICAgICB0aGlzLnN0b3BJbnRlcnZhbCgpO1xuICAvLyAgICAgICAgICAgQkwucmVjb25jaWxlUmVjb3Jkcyh0aGlzLmN1cnJlbnRTaXRlLCB0aGlzLmNvdW50ZXIpO1xuICAvLyAgICAgICAgIH1cbiAgLy8gICAgICAgICBjb25zb2xlLmxvZygnRElGRiBTSVRFJyk7XG4gIC8vICAgICAgICAgdGhpcy5jdXJyZW50U2l0ZSA9IHd1cmwoJ2RvbWFpbicsIHRhYi51cmwpO1xuICAvLyAgICAgICAgIHRoaXMuc3RhcnRJbnRlcnZhbCgpO1xuICAvLyAgICAgICB9XG4gIC8vICAgICB9KTtcbiAgLy8gICB9KTtcbiAgLy8gICBjaHJvbWUudGFicy5vblVwZGF0ZWQuYWRkTGlzdGVuZXIoKHRhYklkLCBjaGFuZ2VJbmZvLCB0YWIpID0+IHtcbiAgLy8gICAgIGlmICghdGFiLnVybCkge1xuICAvLyAgICAgICBjb25zb2xlLmxvZygnTm90IGEgdmFsaWQgdXJsJyk7XG4gIC8vICAgICB9IGVsc2Uge1xuICAvLyAgICAgICBjb25zdCB0YWJTaXRlID0gd3VybCgnZG9tYWluJywgdGFiLnVybCk7XG4gIC8vICAgICAgIGNvbnN0IHByb3RvY29sID0gd3VybCgncHJvdG9jb2wnLCB0YWIudXJsKTtcbiAgLy8gICAgICAgY29uc3QgdmFsaWRVcmwgPSB0YWJTaXRlICE9PSB0aGlzLmN1cnJlbnRTaXRlICYmIHRhYlNpdGUgIT09IHVuZGVmaW5lZCAmJlxuICAvLyAgICAgICAgIHByb3RvY29sICE9PSAnY2hyb21lJyAmJiBwcm90b2NvbCAhPT0gJ2Nocm9tZS1leHRlbnNpb24nO1xuICAvLyAgICAgICBpZiAodmFsaWRVcmwpIHtcbiAgLy8gICAgICAgICB0aGlzLmN1cnJlbnRTaXRlID0gdGFiU2l0ZTtcbiAgLy8gICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmN1cnJlbnRTaXRlKTtcbiAgLy8gICAgICAgICB0aGlzLnN0YXJ0SW50ZXJ2YWwoKTtcbiAgLy8gICAgICAgfVxuICAvLyAgICAgfVxuICAvLyAgIH0pO1xuICAvLyB9XG4gIGlzVmFsaWRQcm90b2NvbCh1cmwpIHtcbiAgICBjb25zdCBwcm90b2NvbCA9IHd1cmwoJ3Byb3RvY29sJywgdXJsKTtcbiAgICByZXR1cm4gcHJvdG9jb2wgIT09ICdjaHJvbWUnICYmIHByb3RvY29sICE9PSAnY2hyb21lLWV4dGVuc2lvbic7XG4gIH1cbiAgc2F2ZVJlY29yZHMoKSB7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsSWQpO1xuICAgIHRoaXMuaW50ZXJ2YWxJZCA9IG51bGw7XG4gICAgQkwucmVjb25jaWxlUmVjb3Jkcyh0aGlzLmN1cnJlbnRTaXRlLCB0aGlzLmRiQ291bnRlcik7XG4gIH1cbiAgc3RhcnRJbnRlcnZhbCgpIHtcbiAgICB0aGlzLmNvdW50ZXIgPSAxO1xuICAgIHRoaXMuZGJDb3VudGVyID0gMTtcbiAgICB0aGlzLmludGVydmFsSWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBjb25zdCBub3cgPSBtb21lbnQoKS5mb3JtYXQoJ0RELU1NLVlZWVknKTtcbiAgICAgIGlmIChub3cgIT09IHRoaXMuY3VycmVudERhdGUpIHtcbiAgICAgICAgaWYgKHRoaXMuaW50ZXJ2YWxJZCAhPT0gbnVsbCkge1xuICAgICAgICAgIHRoaXMuc2F2ZVJlY29yZHMoKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBXaGF0ZXZlciBpdHMgbm90IGxpa2UgdGhpcyBuZWVkcyB0byBiZSBwcmVjaXNlXG4gICAgICAgIHRoaXMuY3VycmVudERhdGUgPSBub3c7XG4gICAgICAgIHRoaXMuc3RhcnRJbnRlcnZhbCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jb3VudGVyID0gdGhpcy5jb3VudGVyICs9IDE7XG4gICAgICAgIHRoaXMuZGJDb3VudGVyID0gdGhpcy5kYkNvdW50ZXIgKz0gMTtcbiAgICAgICAgaWYgKHRoaXMuZGJDb3VudGVyICUgNjApIHtcbiAgICAgICAgICBCTC5yZWNvbmNpbGVSZWNvcmRzKHRoaXMuY3VycmVudFNpdGUsIHRoaXMuZGJDb3VudGVyKTtcbiAgICAgICAgICB0aGlzLmRiQ291bnRlciA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2cobW9tZW50KCkuc2Vjb25kKHRoaXMuY291bnRlcikuZm9ybWF0KCdISCA6IG1tIDogc3MnKSk7XG4gICAgICB9XG4gICAgfSwgMTAwMCk7XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3RpbWVyLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==