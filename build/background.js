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
	      chrome.windows.getAll({ populate: true }, function (windows) {
	        windows.forEach(function (win) {
	          win.tabs.forEach(function (tab) {
	            chrome.tabs.executeScript(tab.id, { file: 'content.js' });
	          });
	        });
	      });
	      chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	        console.log('I dunno');
	        console.log(request.focus);
	        console.log(sender.tab.url);
	        sendResponse('you suck');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGltZXIuanMiXSwibmFtZXMiOlsic2l0ZVRpbWVyIiwiaW5pdCIsInRoZW4iLCJCTE9DS0VEX1BBR0UiLCJsb2FkRmlsdGVyZWRQYWdlIiwidGFiSWQiLCJ1cmwiLCJjaHJvbWUiLCJ0YWJzIiwidXBkYXRlIiwidXJsQ2hlY2siLCJkZXRhaWxzIiwicHJvdG9jb2wiLCJzaXRlIiwiZ2V0UmVjb3JkIiwicmVjb3JkIiwiYWN0aW9uIiwiY2F0Y2giLCJjb25zb2xlIiwibG9nIiwiZXJyIiwid2ViUmVxdWVzdCIsIm9uQmVmb3JlUmVxdWVzdCIsImFkZExpc3RlbmVyIiwidXJscyIsInR5cGVzIiwiVGltZXIiLCJjdXJyZW50U2l0ZSIsIndpbmRvd0ZvY3VzIiwiY291bnRlciIsImRiQ291bnRlciIsImludGVydmFsSWQiLCJjdXJyZW50RGF0ZSIsImZvcm1hdCIsIndpbmRvd3MiLCJvbkZvY3VzQ2hhbmdlZCIsIldJTkRPV19JRF9OT05FIiwic3RvcEludGVydmFsIiwicmVjb25jaWxlUmVjb3JkcyIsImdldEFsbCIsInBvcHVsYXRlIiwiZm9yRWFjaCIsIndpbiIsInRhYiIsImV4ZWN1dGVTY3JpcHQiLCJpZCIsImZpbGUiLCJydW50aW1lIiwib25NZXNzYWdlIiwicmVxdWVzdCIsInNlbmRlciIsInNlbmRSZXNwb25zZSIsImZvY3VzIiwib25SZW1vdmVkIiwib25BY3RpdmF0ZWQiLCJnZXQiLCJhY3RpdmVJbmZvIiwic3RhcnRJbnRlcnZhbCIsIm9uVXBkYXRlZCIsImNoYW5nZUluZm8iLCJ0YWJTaXRlIiwidmFsaWRVcmwiLCJ1bmRlZmluZWQiLCJjbGVhckludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJzZWNvbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLEtBQU1BLFlBQVkscUJBQWxCO0FBQ0EscUJBQUdDLElB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cm9tICd3dXJsJztcbmltcG9ydCBCTCBmcm9tICcuL2Jsb2NrTGlzdC5qcyc7XG5pbXBvcnQgVGltZXIgZnJvbSAnLi90aW1lci5qcyc7XG5cbmNvbnN0IHNpdGVUaW1lciA9IG5ldyBUaW1lcigpO1xuQkwuaW5pdCgpLnRoZW4oKCkgPT4ge1xuICBzaXRlVGltZXIuaW5pdCgpO1xufSk7XG5cbmNvbnN0IEJMT0NLRURfUEFHRSA9ICdodHRwczovL3d3dy5naXRodWIuY29tL3dybGVza292ZWMnO1xuXG5mdW5jdGlvbiBsb2FkRmlsdGVyZWRQYWdlKHRhYklkLCB1cmwpIHtcbiAgY2hyb21lLnRhYnMudXBkYXRlKHRhYklkLCB7XG4gICAgdXJsXG4gIH0pO1xufVxuXG5mdW5jdGlvbiB1cmxDaGVjayhkZXRhaWxzKSB7XG4gIGNvbnN0IHByb3RvY29sID0gd3VybCgncHJvdG9jb2wnLCBkZXRhaWxzLnVybCk7XG4gIGlmIChwcm90b2NvbCAhPT0gJ2Nocm9tZScgJiYgcHJvdG9jb2wgIT09ICdjaHJvbWUtZXh0ZW5zaW9uJykge1xuICAgIGNvbnN0IHNpdGUgPSB3dXJsKCdkb21haW4nLCBkZXRhaWxzLnVybCk7XG4gICAgQkwuZ2V0UmVjb3JkKHNpdGUpXG4gICAgICAudGhlbihyZWNvcmQgPT4ge1xuICAgICAgICBpZiAocmVjb3JkLmFjdGlvbiA9PT0gJ2Jsb2NrJykge1xuICAgICAgICAgIGxvYWRGaWx0ZXJlZFBhZ2UoZGV0YWlscy50YWJJZCwgQkxPQ0tFRF9QQUdFKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfSk7XG4gIH1cbiAgcmV0dXJuIHt9O1xufVxuXG5jaHJvbWUud2ViUmVxdWVzdC5vbkJlZm9yZVJlcXVlc3QuYWRkTGlzdGVuZXIodXJsQ2hlY2ssIHtcbiAgdXJsczogWyc8YWxsX3VybHM+J10sXG4gIHR5cGVzOiBbJ21haW5fZnJhbWUnXVxufSk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9iYWNrZ3JvdW5kLmpzXG4gKiovIiwiaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IEJMIGZyb20gJy4vYmxvY2tMaXN0LmpzJztcbmltcG9ydCB3dXJsIGZyb20gJ3d1cmwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaW1lciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY3VycmVudFNpdGUgPSBudWxsO1xuICAgIHRoaXMud2luZG93Rm9jdXMgPSB0cnVlO1xuICAgIHRoaXMuY291bnRlciA9IDE7XG4gICAgdGhpcy5kYkNvdW50ZXIgPSAxO1xuICAgIHRoaXMuaW50ZXJ2YWxJZCA9IG51bGw7XG4gICAgdGhpcy5jdXJyZW50RGF0ZSA9IG1vbWVudCgpLmZvcm1hdCgnREQtTU0tWVlZWScpO1xuICB9XG4gIGluaXQoKSB7XG4gICAgICAvLyBjaGVja2luZyBpZiB3aW5kb3cgaXMgdW5mb2N1c2VkXG4gICAgY2hyb21lLndpbmRvd3Mub25Gb2N1c0NoYW5nZWQuYWRkTGlzdGVuZXIoKCkgPT4ge1xuICAgICAgaWYgKGNocm9tZS53aW5kb3dzLldJTkRPV19JRF9OT05FKSB7XG4gICAgICAgIHRoaXMud2luZG93Rm9jdXMgPSBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFNpdGUgIT09IG51bGwpIHtcbiAgICAgICAgICB0aGlzLnN0b3BJbnRlcnZhbCgpO1xuICAgICAgICAgIEJMLnJlY29uY2lsZVJlY29yZHModGhpcy5jdXJyZW50U2l0ZSwgdGhpcy5jb3VudGVyKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN1cnJlbnRTaXRlID0gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMud2luZG93Rm9jdXMgPSB0cnVlO1xuICAgICAgICBjb25zb2xlLmxvZygna2lsbCBtZSBnb29nbGUnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBjaHJvbWUud2luZG93cy5nZXRBbGwoeyBwb3B1bGF0ZTogdHJ1ZSB9LCAod2luZG93cykgPT4ge1xuICAgICAgd2luZG93cy5mb3JFYWNoKCh3aW4pID0+IHtcbiAgICAgICAgd2luLnRhYnMuZm9yRWFjaCgodGFiKSA9PiB7XG4gICAgICAgICAgY2hyb21lLnRhYnMuZXhlY3V0ZVNjcmlwdCh0YWIuaWQsIHsgZmlsZTogJ2NvbnRlbnQuanMnIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigocmVxdWVzdCwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdJIGR1bm5vJyk7XG4gICAgICBjb25zb2xlLmxvZyhyZXF1ZXN0LmZvY3VzKTtcbiAgICAgIGNvbnNvbGUubG9nKHNlbmRlci50YWIudXJsKTtcbiAgICAgIHNlbmRSZXNwb25zZSgneW91IHN1Y2snKTtcbiAgICB9KTtcbiAgICAvLyBjaGVja2luZyBpZiB3aW5kb3cgY2xvc2VkXG4gICAgY2hyb21lLndpbmRvd3Mub25SZW1vdmVkLmFkZExpc3RlbmVyKCgpID0+IHtcbiAgICAgIC8vXG4gICAgfSk7XG4gICAgY2hyb21lLnRhYnMub25BY3RpdmF0ZWQuYWRkTGlzdGVuZXIoYWN0aXZlSW5mbyA9PiB7XG4gICAgICBjaHJvbWUudGFicy5nZXQoYWN0aXZlSW5mby50YWJJZCwgdGFiID0+IHtcbiAgICAgICAgY29uc3QgcHJvdG9jb2wgPSB3dXJsKCdwcm90b2NvbCcsIHRhYi51cmwpO1xuICAgICAgICBpZiAocHJvdG9jb2wgPT09ICdjaHJvbWUnIHx8IHByb3RvY29sID09PSAnY2hyb21lLWV4dGVuc2lvbicpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnTk9JQ0UnKTtcbiAgICAgICAgfSBlbHNlIGlmICh3dXJsKCdkb21haW4nLCB0YWIudXJsKSA9PT0gdGhpcy5jdXJyZW50U2l0ZSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdTQU1FIFNJVEUnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAodGhpcy5jdXJyZW50U2l0ZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5zdG9wSW50ZXJ2YWwoKTtcbiAgICAgICAgICAgIEJMLnJlY29uY2lsZVJlY29yZHModGhpcy5jdXJyZW50U2l0ZSwgdGhpcy5jb3VudGVyKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc29sZS5sb2coJ0RJRkYgU0lURScpO1xuICAgICAgICAgIHRoaXMuY3VycmVudFNpdGUgPSB3dXJsKCdkb21haW4nLCB0YWIudXJsKTtcbiAgICAgICAgICB0aGlzLnN0YXJ0SW50ZXJ2YWwoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgY2hyb21lLnRhYnMub25VcGRhdGVkLmFkZExpc3RlbmVyKCh0YWJJZCwgY2hhbmdlSW5mbywgdGFiKSA9PiB7XG4gICAgICBpZiAoIXRhYi51cmwpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ05vdCBhIHZhbGlkIHVybCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgdGFiU2l0ZSA9IHd1cmwoJ2RvbWFpbicsIHRhYi51cmwpO1xuICAgICAgICBjb25zdCBwcm90b2NvbCA9IHd1cmwoJ3Byb3RvY29sJywgdGFiLnVybCk7XG4gICAgICAgIGNvbnN0IHZhbGlkVXJsID0gdGFiU2l0ZSAhPT0gdGhpcy5jdXJyZW50U2l0ZSAmJiB0YWJTaXRlICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICBwcm90b2NvbCAhPT0gJ2Nocm9tZScgJiYgcHJvdG9jb2wgIT09ICdjaHJvbWUtZXh0ZW5zaW9uJztcbiAgICAgICAgaWYgKHZhbGlkVXJsKSB7XG4gICAgICAgICAgdGhpcy5jdXJyZW50U2l0ZSA9IHRhYlNpdGU7XG4gICAgICAgICAgY29uc29sZS5sb2codGhpcy5jdXJyZW50U2l0ZSk7XG4gICAgICAgICAgdGhpcy5zdGFydEludGVydmFsKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHN0b3BJbnRlcnZhbCgpIHtcbiAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWxJZCk7XG4gIH1cbiAgc3RhcnRJbnRlcnZhbCgpIHtcbiAgICB0aGlzLmNvdW50ZXIgPSAxO1xuICAgIHRoaXMuZGJDb3VudGVyID0gMTtcbiAgICBpZiAoISh0aGlzLmludGVydmFsSWQgPT09IG51bGwpKSBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWxJZCk7XG4gICAgdGhpcy5pbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgdGhpcy5jb3VudGVyID0gdGhpcy5jb3VudGVyICs9IDE7XG4gICAgICB0aGlzLmRiQ291bnRlciA9IHRoaXMuZGJDb3VudGVyICs9IDE7XG4gICAgICBjb25zb2xlLmxvZyhtb21lbnQoKS5zZWNvbmQodGhpcy5jb3VudGVyKS5mb3JtYXQoJ0hIIDogbW0gOiBzcycpKTtcbiAgICB9LCAxMDAwKTtcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdGltZXIuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9