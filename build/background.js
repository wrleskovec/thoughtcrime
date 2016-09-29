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
	          if (tabSite !== _this.currentSite) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGltZXIuanMiXSwibmFtZXMiOlsic2l0ZVRpbWVyIiwiaW5pdCIsInRoZW4iLCJCTE9DS0VEX1BBR0UiLCJsb2FkRmlsdGVyZWRQYWdlIiwidGFiSWQiLCJ1cmwiLCJjaHJvbWUiLCJ0YWJzIiwidXBkYXRlIiwidXJsQ2hlY2siLCJkZXRhaWxzIiwicHJvdG9jb2wiLCJzaXRlIiwiY2hlY2tTaXRlIiwicmVjb3JkIiwiYWN0aW9uIiwid2ViUmVxdWVzdCIsIm9uQmVmb3JlUmVxdWVzdCIsImFkZExpc3RlbmVyIiwidXJscyIsInR5cGVzIiwiVGltZXIiLCJjdXJyZW50U2l0ZSIsIndpbmRvd0ZvY3VzIiwiY291bnRlciIsImRiQ291bnRlciIsImludGVydmFsSWQiLCJjdXJyZW50RGF0ZSIsImZvcm1hdCIsIndpbmRvd3MiLCJvbkZvY3VzQ2hhbmdlZCIsIldJTkRPV19JRF9OT05FIiwic3RvcEludGVydmFsIiwicmVjb25jaWxlUmVjb3JkcyIsIm9uUmVtb3ZlZCIsIm9uQWN0aXZhdGVkIiwiZ2V0IiwiYWN0aXZlSW5mbyIsInRhYiIsImNvbnNvbGUiLCJsb2ciLCJzdGFydEludGVydmFsIiwib25VcGRhdGVkIiwiY2hhbmdlSW5mbyIsInRhYlNpdGUiLCJjbGVhckludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJzZWNvbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLEtBQU1BLFlBQVkscUJBQWxCO0FBQ0EscUJBQUdDLElBQUgsR0FBVUMsSUFBVixDQUFlLFlBQU07QUFDbkJGLGFBQVVDLElBQVY7QUFDRCxFQUZEOztBQUlBLEtBQU1FLGVBQWUsbUNBQXJCOztBQUVBLFVBQVNDLGdCQUFULENBQTBCQyxLQUExQixFQUFpQ0MsR0FBakMsRUFBc0M7QUFDcENDLFVBQU9DLElBQVAsQ0FBWUMsTUFBWixDQUFtQkosS0FB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QUFMO0FBQ0Q7QUFDRixVQWZEO0FBZ0JELFFBakJEO0FBa0JBbkMsY0FBT0MsSUFBUCxDQUFZbUMsU0FBWixDQUFzQnhCLFdBQXRCLENBQWtDLFVBQUNkLEtBQUQsRUFBUXVDLFVBQVIsRUFBb0JMLEdBQXBCLEVBQTRCO0FBQzVELGFBQUksQ0FBQ0EsSUFBSWpDLEdBQVQsRUFBYztBQUNaa0MsbUJBQVFDLEdBQVIsQ0FBWSxpQkFBWjtBQUNELFVBRkQsTUFFTztBQUNMLGVBQU1JLFVBQVUsb0JBQUssUUFBTCxFQUFlTixJQUFJakMsR0FBbkIsQ0FBaEI7QUFDQSxlQUFJdUMsWUFBWSxNQUFLdEIsV0FBckIsRUFBa0M7QUFDaEMsbUJBQUtBLFdBQUwsR0FBbUJzQixPQUFuQjtBQUNBTCxxQkFBUUMsR0FBUixDQUFZLE1BQUtsQixXQUFqQjtBQUNBLG1CQUFLbUIsYUFBTDtBQUNEO0FBQ0Y7QUFDRixRQVhEO0FBWUQ7OztvQ0FFYztBQUNiSSxxQkFBYyxLQUFLbkIsVUFBbkI7QUFDRDs7O3FDQUNlO0FBQUE7O0FBQ2QsWUFBS0YsT0FBTCxHQUFlLENBQWY7QUFDQSxXQUFJLEVBQUUsS0FBS0UsVUFBTCxLQUFvQixJQUF0QixDQUFKLEVBQWlDbUIsY0FBYyxLQUFLbkIsVUFBbkI7QUFDakMsWUFBS0EsVUFBTCxHQUFrQm9CLFlBQVksWUFBTTtBQUNsQyxnQkFBS3RCLE9BQUwsR0FBZSxPQUFLQSxPQUFMLElBQWdCLENBQS9CO0FBQ0FlLGlCQUFRQyxHQUFSLENBQVksd0JBQVNPLE1BQVQsQ0FBZ0IsT0FBS3ZCLE9BQXJCLEVBQThCSSxNQUE5QixDQUFxQyxjQUFyQyxDQUFaO0FBQ0QsUUFIaUIsRUFHZixJQUhlLENBQWxCO0FBSUQ7Ozs7O21CQXJFa0JQLEsiLCJmaWxlIjoiYmFja2dyb3VuZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3dXJsIGZyb20gJ3d1cmwnO1xuaW1wb3J0IEJMIGZyb20gJy4vYmxvY2tMaXN0LmpzJztcbmltcG9ydCBUaW1lciBmcm9tICcuL3RpbWVyLmpzJztcblxuY29uc3Qgc2l0ZVRpbWVyID0gbmV3IFRpbWVyKCk7XG5CTC5pbml0KCkudGhlbigoKSA9PiB7XG4gIHNpdGVUaW1lci5pbml0KCk7XG59KTtcblxuY29uc3QgQkxPQ0tFRF9QQUdFID0gJ2h0dHBzOi8vd3d3LmdpdGh1Yi5jb20vd3JsZXNrb3ZlYyc7XG5cbmZ1bmN0aW9uIGxvYWRGaWx0ZXJlZFBhZ2UodGFiSWQsIHVybCkge1xuICBjaHJvbWUudGFicy51cGRhdGUodGFiSWQsIHtcbiAgICB1cmxcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHVybENoZWNrKGRldGFpbHMpIHtcbiAgY29uc3QgcHJvdG9jb2wgPSB3dXJsKCdwcm90b2NvbCcsIGRldGFpbHMudXJsKTtcbiAgaWYgKHByb3RvY29sICE9PSAnY2hyb21lJyAmJiBwcm90b2NvbCAhPT0gJ2Nocm9tZS1leHRlbnNpb24nKSB7XG4gICAgY29uc3Qgc2l0ZSA9IHd1cmwoJ2RvbWFpbicsIGRldGFpbHMudXJsKTtcbiAgICBCTC5jaGVja1NpdGUoc2l0ZSlcbiAgICAgIC50aGVuKHJlY29yZCA9PiB7XG4gICAgICAgIGlmIChyZWNvcmQuYWN0aW9uID09PSAnYmxvY2snKSB7XG4gICAgICAgICAgbG9hZEZpbHRlcmVkUGFnZShkZXRhaWxzLnRhYklkLCBCTE9DS0VEX1BBR0UpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuICByZXR1cm4ge307XG59XG5cbmNocm9tZS53ZWJSZXF1ZXN0Lm9uQmVmb3JlUmVxdWVzdC5hZGRMaXN0ZW5lcih1cmxDaGVjaywge1xuICB1cmxzOiBbJzxhbGxfdXJscz4nXSxcbiAgdHlwZXM6IFsnbWFpbl9mcmFtZSddXG59KTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2JhY2tncm91bmQuanNcbiAqKi8iLCJpbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgQkwgZnJvbSAnLi9ibG9ja0xpc3QuanMnO1xuaW1wb3J0IHd1cmwgZnJvbSAnd3VybCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbWVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jdXJyZW50U2l0ZSA9IG51bGw7XG4gICAgdGhpcy53aW5kb3dGb2N1cyA9IHRydWU7XG4gICAgdGhpcy5jb3VudGVyID0gMDtcbiAgICB0aGlzLmRiQ291bnRlciA9IDA7XG4gICAgdGhpcy5pbnRlcnZhbElkID0gbnVsbDtcbiAgICB0aGlzLmN1cnJlbnREYXRlID0gbW9tZW50KCkuZm9ybWF0KCdERC1NTS1ZWVlZJyk7XG4gIH1cbiAgaW5pdCgpIHtcbiAgICAgIC8vIGNoZWNraW5nIGlmIHdpbmRvdyBpcyB1bmZvY3VzZWRcbiAgICBjaHJvbWUud2luZG93cy5vbkZvY3VzQ2hhbmdlZC5hZGRMaXN0ZW5lcigoKSA9PiB7XG4gICAgICBpZiAoY2hyb21lLndpbmRvd3MuV0lORE9XX0lEX05PTkUpIHtcbiAgICAgICAgdGhpcy53aW5kb3dGb2N1cyA9IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50U2l0ZSAhPT0gbnVsbCkge1xuICAgICAgICAgIHRoaXMuc3RvcEludGVydmFsKCk7XG4gICAgICAgICAgQkwucmVjb25jaWxlUmVjb3Jkcyh0aGlzLmN1cnJlbnRTaXRlLCB0aGlzLmNvdW50ZXIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3VycmVudFNpdGUgPSBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy53aW5kb3dGb2N1cyA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gICAgLy8gY2hlY2tpbmcgaWYgd2luZG93IGNsb3NlZFxuICAgIGNocm9tZS53aW5kb3dzLm9uUmVtb3ZlZC5hZGRMaXN0ZW5lcigoKSA9PiB7XG4gICAgICAvL1xuICAgIH0pO1xuICAgIGNocm9tZS50YWJzLm9uQWN0aXZhdGVkLmFkZExpc3RlbmVyKGFjdGl2ZUluZm8gPT4ge1xuICAgICAgY2hyb21lLnRhYnMuZ2V0KGFjdGl2ZUluZm8udGFiSWQsIHRhYiA9PiB7XG4gICAgICAgIGNvbnN0IHByb3RvY29sID0gd3VybCgncHJvdG9jb2wnLCB0YWIudXJsKTtcbiAgICAgICAgaWYgKHByb3RvY29sID09PSAnY2hyb21lJyB8fCBwcm90b2NvbCA9PT0gJ2Nocm9tZS1leHRlbnNpb24nKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ05PSUNFJyk7XG4gICAgICAgIH0gZWxzZSBpZiAod3VybCgnZG9tYWluJywgdGFiLnVybCkgPT09IHRoaXMuY3VycmVudFNpdGUpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnU0FNRSBTSVRFJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHRoaXMuY3VycmVudFNpdGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcEludGVydmFsKCk7XG4gICAgICAgICAgICBCTC5yZWNvbmNpbGVSZWNvcmRzKHRoaXMuY3VycmVudFNpdGUsIHRoaXMuY291bnRlcik7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnNvbGUubG9nKCdESUZGIFNJVEUnKTtcbiAgICAgICAgICB0aGlzLmN1cnJlbnRTaXRlID0gd3VybCgnZG9tYWluJywgdGFiLnVybCk7XG4gICAgICAgICAgdGhpcy5zdGFydEludGVydmFsKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGNocm9tZS50YWJzLm9uVXBkYXRlZC5hZGRMaXN0ZW5lcigodGFiSWQsIGNoYW5nZUluZm8sIHRhYikgPT4ge1xuICAgICAgaWYgKCF0YWIudXJsKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdOb3QgYSB2YWxpZCB1cmwnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHRhYlNpdGUgPSB3dXJsKCdkb21haW4nLCB0YWIudXJsKTtcbiAgICAgICAgaWYgKHRhYlNpdGUgIT09IHRoaXMuY3VycmVudFNpdGUpIHtcbiAgICAgICAgICB0aGlzLmN1cnJlbnRTaXRlID0gdGFiU2l0ZTtcbiAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmN1cnJlbnRTaXRlKTtcbiAgICAgICAgICB0aGlzLnN0YXJ0SW50ZXJ2YWwoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc3RvcEludGVydmFsKCkge1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbElkKTtcbiAgfVxuICBzdGFydEludGVydmFsKCkge1xuICAgIHRoaXMuY291bnRlciA9IDA7XG4gICAgaWYgKCEodGhpcy5pbnRlcnZhbElkID09PSBudWxsKSkgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsSWQpO1xuICAgIHRoaXMuaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHRoaXMuY291bnRlciA9IHRoaXMuY291bnRlciArPSAxO1xuICAgICAgY29uc29sZS5sb2cobW9tZW50KCkuc2Vjb25kKHRoaXMuY291bnRlcikuZm9ybWF0KCdISCA6IG1tIDogc3MnKSk7XG4gICAgfSwgMTAwMCk7XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3RpbWVyLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==