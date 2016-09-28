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
	    _blockList2.default.checkSite(site).then(function (record) {
	      if (record.action === 'block') {
	        loadFilteredPage(details.tabId, BLOCKED_PAGE);
	      }
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
	    this.counter = 0;
	    this.dbCounter = 0;
	    this.intervalId = null;
	    this.currentDate = (0, _moment2.default)().format('DD-MM-YYYY');
	    this.dailyRecord = null;
	  }
	
	  (0, _createClass3.default)(Timer, [{
	    key: 'init',
	    value: function init() {
	      var _this = this;
	
	      // retrieving daily record cache
	      _blockList2.default.fetchDaily(this.currentDate).then(function (today) {
	        _this.dailyRecord = today || {};
	      });
	      // checking if window is unfocused
	      chrome.windows.onFocusChanged.addListener(function () {
	        if (chrome.windows.WINDOW_ID_NONE) {
	          _this.windowFocus = false;
	          _this.addCounter();
	          _this.currentSite = null;
	          _this.stopInterval();
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
	            _this.addCounter();
	            _this.currentSite = (0, _wurl2.default)('domain', tab.url);
	            console.log('DIFF SITE');
	            _this.startInterval();
	          }
	        });
	      });
	      chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
	        if (!tab.url) {
	          console.log('Not a valid url');
	        } else {
	          _this.currentSite = (0, _wurl2.default)('domain', tab.url);
	          console.log(_this.currentSite);
	          _this.startInterval();
	        }
	      });
	    }
	  }, {
	    key: 'addCounter',
	    value: function addCounter() {
	      if (this.counter > 0) {
	        if (this.dailyRecord[this.currentSite]) {
	          this.dailyRecord[this.currentSite].timeSpent += this.counter;
	        } else {
	          this.dailyRecord[this.currentSite] = { timeSpent: this.counter, visits: 1 };
	        }
	        this.counter = 0;
	      }
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
	
	      this.counter = 0;
	      if (!(this.intervalId === null)) clearInterval(this.intervalId);
	      this.intervalId = setInterval(function () {
	        _this2.counter = _this2.counter += 1;
	        console.log((0, _moment2.default)().second(_this2.counter).format('HH : mm : ss'));
	      }, 1000);
	    }
	  }]);
	  return Timer;
	}();
	
	exports.default = Timer;

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGltZXIuanMiXSwibmFtZXMiOlsic2l0ZVRpbWVyIiwiaW5pdCIsInRoZW4iLCJCTE9DS0VEX1BBR0UiLCJsb2FkRmlsdGVyZWRQYWdlIiwidGFiSWQiLCJ1cmwiLCJjaHJvbWUiLCJ0YWJzIiwidXBkYXRlIiwidXJsQ2hlY2siLCJkZXRhaWxzIiwicHJvdG9jb2wiLCJzaXRlIiwiY2hlY2tTaXRlIiwicmVjb3JkIiwiYWN0aW9uIiwid2ViUmVxdWVzdCIsIm9uQmVmb3JlUmVxdWVzdCIsImFkZExpc3RlbmVyIiwidXJscyIsInR5cGVzIiwiVGltZXIiLCJjdXJyZW50U2l0ZSIsIndpbmRvd0ZvY3VzIiwiY291bnRlciIsImRiQ291bnRlciIsImludGVydmFsSWQiLCJjdXJyZW50RGF0ZSIsImZvcm1hdCIsImRhaWx5UmVjb3JkIiwiZmV0Y2hEYWlseSIsInRvZGF5Iiwid2luZG93cyIsIm9uRm9jdXNDaGFuZ2VkIiwiV0lORE9XX0lEX05PTkUiLCJhZGRDb3VudGVyIiwic3RvcEludGVydmFsIiwib25SZW1vdmVkIiwib25BY3RpdmF0ZWQiLCJnZXQiLCJhY3RpdmVJbmZvIiwidGFiIiwiY29uc29sZSIsImxvZyIsInN0YXJ0SW50ZXJ2YWwiLCJvblVwZGF0ZWQiLCJjaGFuZ2VJbmZvIiwidGltZVNwZW50IiwidmlzaXRzIiwiY2xlYXJJbnRlcnZhbCIsInNldEludGVydmFsIiwic2Vjb25kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxLQUFNQSxZQUFZLHFCQUFsQjtBQUNBLHFCQUFHQyxJQUFILEdBQVVDLElBQVYsQ0FBZSxZQUFNO0FBQ25CRixhQUFVQyxJQUFWO0FBQ0QsRUFGRDs7QUFJQSxLQUFNRSxlQUFlLG1DQUFyQjs7QUFFQSxVQUFTQyxnQkFBVCxDQUEwQkMsS0FBMUIsRUFBaUNDLEdBQWpDLEVBQXND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U1EsTUFBVCxDQUFnQixPQUFLM0IsT0FBckIsRUFBOEJJLE1BQTlCLENBQXFDLGNBQXJDLENBQVo7QUFDRCxRQUhpQixFQUdmLElBSGUsQ0FBbEI7QUFJRDs7Ozs7bUJBN0VrQlAsSyIsImZpbGUiOiJiYWNrZ3JvdW5kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHd1cmwgZnJvbSAnd3VybCc7XG5pbXBvcnQgQkwgZnJvbSAnLi9ibG9ja0xpc3QuanMnO1xuaW1wb3J0IFRpbWVyIGZyb20gJy4vdGltZXIuanMnO1xuXG5jb25zdCBzaXRlVGltZXIgPSBuZXcgVGltZXIoKTtcbkJMLmluaXQoKS50aGVuKCgpID0+IHtcbiAgc2l0ZVRpbWVyLmluaXQoKTtcbn0pO1xuXG5jb25zdCBCTE9DS0VEX1BBR0UgPSAnaHR0cHM6Ly93d3cuZ2l0aHViLmNvbS93cmxlc2tvdmVjJztcblxuZnVuY3Rpb24gbG9hZEZpbHRlcmVkUGFnZSh0YWJJZCwgdXJsKSB7XG4gIGNocm9tZS50YWJzLnVwZGF0ZSh0YWJJZCwge1xuICAgIHVybFxuICB9KTtcbn1cblxuZnVuY3Rpb24gdXJsQ2hlY2soZGV0YWlscykge1xuICBjb25zdCBwcm90b2NvbCA9IHd1cmwoJ3Byb3RvY29sJywgZGV0YWlscy51cmwpO1xuICBpZiAocHJvdG9jb2wgIT09ICdjaHJvbWUnICYmIHByb3RvY29sICE9PSAnY2hyb21lLWV4dGVuc2lvbicpIHtcbiAgICBjb25zdCBzaXRlID0gd3VybCgnZG9tYWluJywgZGV0YWlscy51cmwpO1xuICAgIEJMLmNoZWNrU2l0ZShzaXRlKVxuICAgICAgLnRoZW4ocmVjb3JkID0+IHtcbiAgICAgICAgaWYgKHJlY29yZC5hY3Rpb24gPT09ICdibG9jaycpIHtcbiAgICAgICAgICBsb2FkRmlsdGVyZWRQYWdlKGRldGFpbHMudGFiSWQsIEJMT0NLRURfUEFHRSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG4gIHJldHVybiB7fTtcbn1cblxuY2hyb21lLndlYlJlcXVlc3Qub25CZWZvcmVSZXF1ZXN0LmFkZExpc3RlbmVyKHVybENoZWNrLCB7XG4gIHVybHM6IFsnPGFsbF91cmxzPiddLFxuICB0eXBlczogWydtYWluX2ZyYW1lJ11cbn0pO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYmFja2dyb3VuZC5qc1xuICoqLyIsImltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCBCTCBmcm9tICcuL2Jsb2NrTGlzdC5qcyc7XG5pbXBvcnQgd3VybCBmcm9tICd3dXJsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGltZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmN1cnJlbnRTaXRlID0gbnVsbDtcbiAgICB0aGlzLndpbmRvd0ZvY3VzID0gdHJ1ZTtcbiAgICB0aGlzLmNvdW50ZXIgPSAwO1xuICAgIHRoaXMuZGJDb3VudGVyID0gMDtcbiAgICB0aGlzLmludGVydmFsSWQgPSBudWxsO1xuICAgIHRoaXMuY3VycmVudERhdGUgPSBtb21lbnQoKS5mb3JtYXQoJ0RELU1NLVlZWVknKTtcbiAgICB0aGlzLmRhaWx5UmVjb3JkID0gbnVsbDtcbiAgfVxuICBpbml0KCkge1xuICAvLyByZXRyaWV2aW5nIGRhaWx5IHJlY29yZCBjYWNoZVxuICAgIEJMLmZldGNoRGFpbHkodGhpcy5jdXJyZW50RGF0ZSlcbiAgICAgIC50aGVuKHRvZGF5ID0+IHtcbiAgICAgICAgdGhpcy5kYWlseVJlY29yZCA9IHRvZGF5IHx8IHt9O1xuICAgICAgfSk7XG4gICAgICAvLyBjaGVja2luZyBpZiB3aW5kb3cgaXMgdW5mb2N1c2VkXG4gICAgY2hyb21lLndpbmRvd3Mub25Gb2N1c0NoYW5nZWQuYWRkTGlzdGVuZXIoKCkgPT4ge1xuICAgICAgaWYgKGNocm9tZS53aW5kb3dzLldJTkRPV19JRF9OT05FKSB7XG4gICAgICAgIHRoaXMud2luZG93Rm9jdXMgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hZGRDb3VudGVyKCk7XG4gICAgICAgIHRoaXMuY3VycmVudFNpdGUgPSBudWxsO1xuICAgICAgICB0aGlzLnN0b3BJbnRlcnZhbCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy53aW5kb3dGb2N1cyA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gICAgLy8gY2hlY2tpbmcgaWYgd2luZG93IGNsb3NlZFxuICAgIGNocm9tZS53aW5kb3dzLm9uUmVtb3ZlZC5hZGRMaXN0ZW5lcigoKSA9PiB7XG4gICAgICAvL1xuICAgIH0pO1xuICAgIGNocm9tZS50YWJzLm9uQWN0aXZhdGVkLmFkZExpc3RlbmVyKGFjdGl2ZUluZm8gPT4ge1xuICAgICAgY2hyb21lLnRhYnMuZ2V0KGFjdGl2ZUluZm8udGFiSWQsIHRhYiA9PiB7XG4gICAgICAgIGNvbnN0IHByb3RvY29sID0gd3VybCgncHJvdG9jb2wnLCB0YWIudXJsKTtcbiAgICAgICAgaWYgKHByb3RvY29sID09PSAnY2hyb21lJyB8fCBwcm90b2NvbCA9PT0gJ2Nocm9tZS1leHRlbnNpb24nKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ05PSUNFJyk7XG4gICAgICAgIH0gZWxzZSBpZiAod3VybCgnZG9tYWluJywgdGFiLnVybCkgPT09IHRoaXMuY3VycmVudFNpdGUpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnU0FNRSBTSVRFJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5hZGRDb3VudGVyKCk7XG4gICAgICAgICAgdGhpcy5jdXJyZW50U2l0ZSA9IHd1cmwoJ2RvbWFpbicsIHRhYi51cmwpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdESUZGIFNJVEUnKTtcbiAgICAgICAgICB0aGlzLnN0YXJ0SW50ZXJ2YWwoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgY2hyb21lLnRhYnMub25VcGRhdGVkLmFkZExpc3RlbmVyKCh0YWJJZCwgY2hhbmdlSW5mbywgdGFiKSA9PiB7XG4gICAgICBpZiAoIXRhYi51cmwpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ05vdCBhIHZhbGlkIHVybCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jdXJyZW50U2l0ZSA9IHd1cmwoJ2RvbWFpbicsIHRhYi51cmwpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmN1cnJlbnRTaXRlKTtcbiAgICAgICAgdGhpcy5zdGFydEludGVydmFsKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBhZGRDb3VudGVyKCkge1xuICAgIGlmICh0aGlzLmNvdW50ZXIgPiAwKSB7XG4gICAgICBpZiAodGhpcy5kYWlseVJlY29yZFt0aGlzLmN1cnJlbnRTaXRlXSkge1xuICAgICAgICB0aGlzLmRhaWx5UmVjb3JkW3RoaXMuY3VycmVudFNpdGVdLnRpbWVTcGVudCArPSB0aGlzLmNvdW50ZXI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRhaWx5UmVjb3JkW3RoaXMuY3VycmVudFNpdGVdID0geyB0aW1lU3BlbnQ6IHRoaXMuY291bnRlciwgdmlzaXRzOiAxIH07XG4gICAgICB9XG4gICAgICB0aGlzLmNvdW50ZXIgPSAwO1xuICAgIH1cbiAgfVxuICBzdG9wSW50ZXJ2YWwoKSB7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsSWQpO1xuICB9XG4gIHN0YXJ0SW50ZXJ2YWwoKSB7XG4gICAgdGhpcy5jb3VudGVyID0gMDtcbiAgICBpZiAoISh0aGlzLmludGVydmFsSWQgPT09IG51bGwpKSBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWxJZCk7XG4gICAgdGhpcy5pbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgdGhpcy5jb3VudGVyID0gdGhpcy5jb3VudGVyICs9IDE7XG4gICAgICBjb25zb2xlLmxvZyhtb21lbnQoKS5zZWNvbmQodGhpcy5jb3VudGVyKS5mb3JtYXQoJ0hIIDogbW0gOiBzcycpKTtcbiAgICB9LCAxMDAwKTtcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdGltZXIuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9