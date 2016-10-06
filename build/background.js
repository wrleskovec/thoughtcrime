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
	          console.log('kill me google');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGltZXIuanMiXSwibmFtZXMiOlsic2l0ZVRpbWVyIiwiaW5pdCIsInRoZW4iLCJCTE9DS0VEX1BBR0UiLCJsb2FkRmlsdGVyZWRQYWdlIiwidGFiSWQiLCJ1cmwiLCJjaHJvbWUiLCJ0YWJzIiwidXBkYXRlIiwidXJsQ2hlY2siLCJkZXRhaWxzIiwicHJvdG9jb2wiLCJzaXRlIiwiZ2V0UmVjb3JkIiwicmVjb3JkIiwiYWN0aW9uIiwiY2F0Y2giLCJjb25zb2xlIiwibG9nIiwiZXJyIiwid2ViUmVxdWVzdCIsIm9uQmVmb3JlUmVxdWVzdCIsImFkZExpc3RlbmVyIiwidXJscyIsInR5cGVzIiwiVGltZXIiLCJjdXJyZW50U2l0ZSIsIndpbmRvd0ZvY3VzIiwiY291bnRlciIsImRiQ291bnRlciIsImludGVydmFsSWQiLCJjdXJyZW50RGF0ZSIsImZvcm1hdCIsIndpbmRvd3MiLCJvbkZvY3VzQ2hhbmdlZCIsIldJTkRPV19JRF9OT05FIiwic3RvcEludGVydmFsIiwicmVjb25jaWxlUmVjb3JkcyIsIm9uUmVtb3ZlZCIsIm9uQWN0aXZhdGVkIiwiZ2V0IiwiYWN0aXZlSW5mbyIsInRhYiIsInN0YXJ0SW50ZXJ2YWwiLCJvblVwZGF0ZWQiLCJjaGFuZ2VJbmZvIiwidGFiU2l0ZSIsInZhbGlkVXJsIiwidW5kZWZpbmVkIiwiY2xlYXJJbnRlcnZhbCIsInNldEludGVydmFsIiwic2Vjb25kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxLQUFNQSxZQUFZLHFCQUFsQjtBQUNBLHFCQUFHQyxJQUFILEdBQVVDLElBQVYsQ0FBZSxZQUFNO0FBQ25CRixhQUFVQyxJQUFWO0FBQ0QsRUFGRDs7QUFJQSxLQUFNRSxlQUFlLG1DQUFyQjs7QUFFQSxVQUFTQyxnQkFBVCxDQUEwQkMsS0FBMUIsRUFBaUNDLEdBQWpDLEVBQXNDO0FB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QUwsSUFBZ0IsQ0FBL0I7QUFDQSxnQkFBS0MsU0FBTCxHQUFpQixPQUFLQSxTQUFMLElBQWtCLENBQW5DO0FBQ0FaLGlCQUFRQyxHQUFSLENBQVksd0JBQVNpQyxNQUFULENBQWdCLE9BQUt2QixPQUFyQixFQUE4QkksTUFBOUIsQ0FBcUMsY0FBckMsQ0FBWjtBQUNELFFBSmlCLEVBSWYsSUFKZSxDQUFsQjtBQUtEOzs7OzttQkEzRWtCUCxLIiwiZmlsZSI6ImJhY2tncm91bmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd3VybCBmcm9tICd3dXJsJztcbmltcG9ydCBCTCBmcm9tICcuL2Jsb2NrTGlzdC5qcyc7XG5pbXBvcnQgVGltZXIgZnJvbSAnLi90aW1lci5qcyc7XG5cbmNvbnN0IHNpdGVUaW1lciA9IG5ldyBUaW1lcigpO1xuQkwuaW5pdCgpLnRoZW4oKCkgPT4ge1xuICBzaXRlVGltZXIuaW5pdCgpO1xufSk7XG5cbmNvbnN0IEJMT0NLRURfUEFHRSA9ICdodHRwczovL3d3dy5naXRodWIuY29tL3dybGVza292ZWMnO1xuXG5mdW5jdGlvbiBsb2FkRmlsdGVyZWRQYWdlKHRhYklkLCB1cmwpIHtcbiAgY2hyb21lLnRhYnMudXBkYXRlKHRhYklkLCB7XG4gICAgdXJsXG4gIH0pO1xufVxuXG5mdW5jdGlvbiB1cmxDaGVjayhkZXRhaWxzKSB7XG4gIGNvbnN0IHByb3RvY29sID0gd3VybCgncHJvdG9jb2wnLCBkZXRhaWxzLnVybCk7XG4gIGlmIChwcm90b2NvbCAhPT0gJ2Nocm9tZScgJiYgcHJvdG9jb2wgIT09ICdjaHJvbWUtZXh0ZW5zaW9uJykge1xuICAgIGNvbnN0IHNpdGUgPSB3dXJsKCdkb21haW4nLCBkZXRhaWxzLnVybCk7XG4gICAgQkwuZ2V0UmVjb3JkKHNpdGUpXG4gICAgICAudGhlbihyZWNvcmQgPT4ge1xuICAgICAgICBpZiAocmVjb3JkLmFjdGlvbiA9PT0gJ2Jsb2NrJykge1xuICAgICAgICAgIGxvYWRGaWx0ZXJlZFBhZ2UoZGV0YWlscy50YWJJZCwgQkxPQ0tFRF9QQUdFKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfSk7XG4gIH1cbiAgcmV0dXJuIHt9O1xufVxuXG5jaHJvbWUud2ViUmVxdWVzdC5vbkJlZm9yZVJlcXVlc3QuYWRkTGlzdGVuZXIodXJsQ2hlY2ssIHtcbiAgdXJsczogWyc8YWxsX3VybHM+J10sXG4gIHR5cGVzOiBbJ21haW5fZnJhbWUnXVxufSk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9iYWNrZ3JvdW5kLmpzXG4gKiovIiwiaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IEJMIGZyb20gJy4vYmxvY2tMaXN0LmpzJztcbmltcG9ydCB3dXJsIGZyb20gJ3d1cmwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaW1lciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY3VycmVudFNpdGUgPSBudWxsO1xuICAgIHRoaXMud2luZG93Rm9jdXMgPSB0cnVlO1xuICAgIHRoaXMuY291bnRlciA9IDE7XG4gICAgdGhpcy5kYkNvdW50ZXIgPSAxO1xuICAgIHRoaXMuaW50ZXJ2YWxJZCA9IG51bGw7XG4gICAgdGhpcy5jdXJyZW50RGF0ZSA9IG1vbWVudCgpLmZvcm1hdCgnREQtTU0tWVlZWScpO1xuICB9XG4gIGluaXQoKSB7XG4gICAgICAvLyBjaGVja2luZyBpZiB3aW5kb3cgaXMgdW5mb2N1c2VkXG4gICAgY2hyb21lLndpbmRvd3Mub25Gb2N1c0NoYW5nZWQuYWRkTGlzdGVuZXIoKCkgPT4ge1xuICAgICAgaWYgKGNocm9tZS53aW5kb3dzLldJTkRPV19JRF9OT05FKSB7XG4gICAgICAgIHRoaXMud2luZG93Rm9jdXMgPSBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFNpdGUgIT09IG51bGwpIHtcbiAgICAgICAgICB0aGlzLnN0b3BJbnRlcnZhbCgpO1xuICAgICAgICAgIEJMLnJlY29uY2lsZVJlY29yZHModGhpcy5jdXJyZW50U2l0ZSwgdGhpcy5jb3VudGVyKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN1cnJlbnRTaXRlID0gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMud2luZG93Rm9jdXMgPSB0cnVlO1xuICAgICAgICBjb25zb2xlLmxvZygna2lsbCBtZSBnb29nbGUnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBjaGVja2luZyBpZiB3aW5kb3cgY2xvc2VkXG4gICAgY2hyb21lLndpbmRvd3Mub25SZW1vdmVkLmFkZExpc3RlbmVyKCgpID0+IHtcbiAgICAgIC8vXG4gICAgfSk7XG4gICAgY2hyb21lLnRhYnMub25BY3RpdmF0ZWQuYWRkTGlzdGVuZXIoYWN0aXZlSW5mbyA9PiB7XG4gICAgICBjaHJvbWUudGFicy5nZXQoYWN0aXZlSW5mby50YWJJZCwgdGFiID0+IHtcbiAgICAgICAgY29uc3QgcHJvdG9jb2wgPSB3dXJsKCdwcm90b2NvbCcsIHRhYi51cmwpO1xuICAgICAgICBpZiAocHJvdG9jb2wgPT09ICdjaHJvbWUnIHx8IHByb3RvY29sID09PSAnY2hyb21lLWV4dGVuc2lvbicpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnTk9JQ0UnKTtcbiAgICAgICAgfSBlbHNlIGlmICh3dXJsKCdkb21haW4nLCB0YWIudXJsKSA9PT0gdGhpcy5jdXJyZW50U2l0ZSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdTQU1FIFNJVEUnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAodGhpcy5jdXJyZW50U2l0ZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5zdG9wSW50ZXJ2YWwoKTtcbiAgICAgICAgICAgIEJMLnJlY29uY2lsZVJlY29yZHModGhpcy5jdXJyZW50U2l0ZSwgdGhpcy5jb3VudGVyKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc29sZS5sb2coJ0RJRkYgU0lURScpO1xuICAgICAgICAgIHRoaXMuY3VycmVudFNpdGUgPSB3dXJsKCdkb21haW4nLCB0YWIudXJsKTtcbiAgICAgICAgICB0aGlzLnN0YXJ0SW50ZXJ2YWwoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgY2hyb21lLnRhYnMub25VcGRhdGVkLmFkZExpc3RlbmVyKCh0YWJJZCwgY2hhbmdlSW5mbywgdGFiKSA9PiB7XG4gICAgICBpZiAoIXRhYi51cmwpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ05vdCBhIHZhbGlkIHVybCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgdGFiU2l0ZSA9IHd1cmwoJ2RvbWFpbicsIHRhYi51cmwpO1xuICAgICAgICBjb25zdCBwcm90b2NvbCA9IHd1cmwoJ3Byb3RvY29sJywgdGFiLnVybCk7XG4gICAgICAgIGNvbnN0IHZhbGlkVXJsID0gdGFiU2l0ZSAhPT0gdGhpcy5jdXJyZW50U2l0ZSAmJiB0YWJTaXRlICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICBwcm90b2NvbCAhPT0gJ2Nocm9tZScgJiYgcHJvdG9jb2wgIT09ICdjaHJvbWUtZXh0ZW5zaW9uJztcbiAgICAgICAgaWYgKHZhbGlkVXJsKSB7XG4gICAgICAgICAgdGhpcy5jdXJyZW50U2l0ZSA9IHRhYlNpdGU7XG4gICAgICAgICAgY29uc29sZS5sb2codGhpcy5jdXJyZW50U2l0ZSk7XG4gICAgICAgICAgdGhpcy5zdGFydEludGVydmFsKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHN0b3BJbnRlcnZhbCgpIHtcbiAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWxJZCk7XG4gIH1cbiAgc3RhcnRJbnRlcnZhbCgpIHtcbiAgICB0aGlzLmNvdW50ZXIgPSAxO1xuICAgIHRoaXMuZGJDb3VudGVyID0gMTtcbiAgICBpZiAoISh0aGlzLmludGVydmFsSWQgPT09IG51bGwpKSBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWxJZCk7XG4gICAgdGhpcy5pbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgdGhpcy5jb3VudGVyID0gdGhpcy5jb3VudGVyICs9IDE7XG4gICAgICB0aGlzLmRiQ291bnRlciA9IHRoaXMuZGJDb3VudGVyICs9IDE7XG4gICAgICBjb25zb2xlLmxvZyhtb21lbnQoKS5zZWNvbmQodGhpcy5jb3VudGVyKS5mb3JtYXQoJ0hIIDogbW0gOiBzcycpKTtcbiAgICB9LCAxMDAwKTtcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdGltZXIuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9