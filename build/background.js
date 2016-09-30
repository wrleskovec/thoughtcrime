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
	        console.log((0, _moment2.default)(0).second(_this2.counter).format('HH : mm : ss'));
	      }, 1000);
	    }
	  }]);
	  return Timer;
	}();
	
	exports.default = Timer;

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGltZXIuanMiXSwibmFtZXMiOlsic2l0ZVRpbWVyIiwiaW5pdCIsInRoZW4iLCJCTE9DS0VEX1BBR0UiLCJsb2FkRmlsdGVyZWRQYWdlIiwidGFiSWQiLCJ1cmwiLCJjaHJvbWUiLCJ0YWJzIiwidXBkYXRlIiwidXJsQ2hlY2siLCJkZXRhaWxzIiwicHJvdG9jb2wiLCJzaXRlIiwiZ2V0UmVjb3JkIiwicmVjb3JkIiwiYWN0aW9uIiwiY2F0Y2giLCJjb25zb2xlIiwibG9nIiwiZXJyIiwid2ViUmVxdWVzdCIsIm9uQmVmb3JlUmVxdWVzdCIsImFkZExpc3RlbmVyIiwidXJscyIsInR5cGVzIiwiVGltZXIiLCJjdXJyZW50U2l0ZSIsIndpbmRvd0ZvY3VzIiwiY291bnRlciIsImRiQ291bnRlciIsImludGVydmFsSWQiLCJjdXJyZW50RGF0ZSIsImZvcm1hdCIsIndpbmRvd3MiLCJvbkZvY3VzQ2hhbmdlZCIsIldJTkRPV19JRF9OT05FIiwic3RvcEludGVydmFsIiwicmVjb25jaWxlUmVjb3JkcyIsIm9uUmVtb3ZlZCIsIm9uQWN0aXZhdGVkIiwiZ2V0IiwiYWN0aXZlSW5mbyIsInRhYiIsInN0YXJ0SW50ZXJ2YWwiLCJvblVwZGF0ZWQiLCJjaGFuZ2VJbmZvIiwidGFiU2l0ZSIsInZhbGlkVXJsIiwidW5kZWZpbmVkIiwiY2xlYXJJbnRlcnZhbCIsInNldEludGVydmFsIiwic2Vjb25kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxLQUFNQSxZQUFZLHFCQUFsQjtBQUNBLHFCQUFHQyxJQUFILEdBQVVDLElBQVYsQ0FBZSxZQUFNO0FBQ25CRixhQUFVQyxJQUFWO0FBQ0QsRUFGRDs7QUFJQSxLQUFNRSxlQUFlLG1DQUFyQjs7QUFFQSxVQUFTQyxnQkFBVCxDQUEwQkMsS0FBMUIsRUFBaUNDLEdBQWpDLEVBQXNDO0FB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QUFMLEdBQWlCLE9BQUtBLFNBQUwsSUFBa0IsQ0FBbkM7QUFDQVosaUJBQVFDLEdBQVIsQ0FBWSxzQkFBTyxDQUFQLEVBQVVpQyxNQUFWLENBQWlCLE9BQUt2QixPQUF0QixFQUErQkksTUFBL0IsQ0FBc0MsY0FBdEMsQ0FBWjtBQUNELFFBSmlCLEVBSWYsSUFKZSxDQUFsQjtBQUtEOzs7OzttQkExRWtCUCxLIiwiZmlsZSI6ImJhY2tncm91bmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd3VybCBmcm9tICd3dXJsJztcbmltcG9ydCBCTCBmcm9tICcuL2Jsb2NrTGlzdC5qcyc7XG5pbXBvcnQgVGltZXIgZnJvbSAnLi90aW1lci5qcyc7XG5cbmNvbnN0IHNpdGVUaW1lciA9IG5ldyBUaW1lcigpO1xuQkwuaW5pdCgpLnRoZW4oKCkgPT4ge1xuICBzaXRlVGltZXIuaW5pdCgpO1xufSk7XG5cbmNvbnN0IEJMT0NLRURfUEFHRSA9ICdodHRwczovL3d3dy5naXRodWIuY29tL3dybGVza292ZWMnO1xuXG5mdW5jdGlvbiBsb2FkRmlsdGVyZWRQYWdlKHRhYklkLCB1cmwpIHtcbiAgY2hyb21lLnRhYnMudXBkYXRlKHRhYklkLCB7XG4gICAgdXJsXG4gIH0pO1xufVxuXG5mdW5jdGlvbiB1cmxDaGVjayhkZXRhaWxzKSB7XG4gIGNvbnN0IHByb3RvY29sID0gd3VybCgncHJvdG9jb2wnLCBkZXRhaWxzLnVybCk7XG4gIGlmIChwcm90b2NvbCAhPT0gJ2Nocm9tZScgJiYgcHJvdG9jb2wgIT09ICdjaHJvbWUtZXh0ZW5zaW9uJykge1xuICAgIGNvbnN0IHNpdGUgPSB3dXJsKCdkb21haW4nLCBkZXRhaWxzLnVybCk7XG4gICAgQkwuZ2V0UmVjb3JkKHNpdGUpXG4gICAgICAudGhlbihyZWNvcmQgPT4ge1xuICAgICAgICBpZiAocmVjb3JkLmFjdGlvbiA9PT0gJ2Jsb2NrJykge1xuICAgICAgICAgIGxvYWRGaWx0ZXJlZFBhZ2UoZGV0YWlscy50YWJJZCwgQkxPQ0tFRF9QQUdFKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfSk7XG4gIH1cbiAgcmV0dXJuIHt9O1xufVxuXG5jaHJvbWUud2ViUmVxdWVzdC5vbkJlZm9yZVJlcXVlc3QuYWRkTGlzdGVuZXIodXJsQ2hlY2ssIHtcbiAgdXJsczogWyc8YWxsX3VybHM+J10sXG4gIHR5cGVzOiBbJ21haW5fZnJhbWUnXVxufSk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9iYWNrZ3JvdW5kLmpzXG4gKiovIiwiaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IEJMIGZyb20gJy4vYmxvY2tMaXN0LmpzJztcbmltcG9ydCB3dXJsIGZyb20gJ3d1cmwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaW1lciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY3VycmVudFNpdGUgPSBudWxsO1xuICAgIHRoaXMud2luZG93Rm9jdXMgPSB0cnVlO1xuICAgIHRoaXMuY291bnRlciA9IDE7XG4gICAgdGhpcy5kYkNvdW50ZXIgPSAxO1xuICAgIHRoaXMuaW50ZXJ2YWxJZCA9IG51bGw7XG4gICAgdGhpcy5jdXJyZW50RGF0ZSA9IG1vbWVudCgpLmZvcm1hdCgnREQtTU0tWVlZWScpO1xuICB9XG4gIGluaXQoKSB7XG4gICAgICAvLyBjaGVja2luZyBpZiB3aW5kb3cgaXMgdW5mb2N1c2VkXG4gICAgY2hyb21lLndpbmRvd3Mub25Gb2N1c0NoYW5nZWQuYWRkTGlzdGVuZXIoKCkgPT4ge1xuICAgICAgaWYgKGNocm9tZS53aW5kb3dzLldJTkRPV19JRF9OT05FKSB7XG4gICAgICAgIHRoaXMud2luZG93Rm9jdXMgPSBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFNpdGUgIT09IG51bGwpIHtcbiAgICAgICAgICB0aGlzLnN0b3BJbnRlcnZhbCgpO1xuICAgICAgICAgIEJMLnJlY29uY2lsZVJlY29yZHModGhpcy5jdXJyZW50U2l0ZSwgdGhpcy5jb3VudGVyKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN1cnJlbnRTaXRlID0gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMud2luZG93Rm9jdXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIC8vIGNoZWNraW5nIGlmIHdpbmRvdyBjbG9zZWRcbiAgICBjaHJvbWUud2luZG93cy5vblJlbW92ZWQuYWRkTGlzdGVuZXIoKCkgPT4ge1xuICAgICAgLy9cbiAgICB9KTtcbiAgICBjaHJvbWUudGFicy5vbkFjdGl2YXRlZC5hZGRMaXN0ZW5lcihhY3RpdmVJbmZvID0+IHtcbiAgICAgIGNocm9tZS50YWJzLmdldChhY3RpdmVJbmZvLnRhYklkLCB0YWIgPT4ge1xuICAgICAgICBjb25zdCBwcm90b2NvbCA9IHd1cmwoJ3Byb3RvY29sJywgdGFiLnVybCk7XG4gICAgICAgIGlmIChwcm90b2NvbCA9PT0gJ2Nocm9tZScgfHwgcHJvdG9jb2wgPT09ICdjaHJvbWUtZXh0ZW5zaW9uJykge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdOT0lDRScpO1xuICAgICAgICB9IGVsc2UgaWYgKHd1cmwoJ2RvbWFpbicsIHRhYi51cmwpID09PSB0aGlzLmN1cnJlbnRTaXRlKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ1NBTUUgU0lURScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRTaXRlICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnN0b3BJbnRlcnZhbCgpO1xuICAgICAgICAgICAgQkwucmVjb25jaWxlUmVjb3Jkcyh0aGlzLmN1cnJlbnRTaXRlLCB0aGlzLmNvdW50ZXIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zb2xlLmxvZygnRElGRiBTSVRFJyk7XG4gICAgICAgICAgdGhpcy5jdXJyZW50U2l0ZSA9IHd1cmwoJ2RvbWFpbicsIHRhYi51cmwpO1xuICAgICAgICAgIHRoaXMuc3RhcnRJbnRlcnZhbCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBjaHJvbWUudGFicy5vblVwZGF0ZWQuYWRkTGlzdGVuZXIoKHRhYklkLCBjaGFuZ2VJbmZvLCB0YWIpID0+IHtcbiAgICAgIGlmICghdGFiLnVybCkge1xuICAgICAgICBjb25zb2xlLmxvZygnTm90IGEgdmFsaWQgdXJsJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB0YWJTaXRlID0gd3VybCgnZG9tYWluJywgdGFiLnVybCk7XG4gICAgICAgIGNvbnN0IHByb3RvY29sID0gd3VybCgncHJvdG9jb2wnLCB0YWIudXJsKTtcbiAgICAgICAgY29uc3QgdmFsaWRVcmwgPSB0YWJTaXRlICE9PSB0aGlzLmN1cnJlbnRTaXRlICYmIHRhYlNpdGUgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgIHByb3RvY29sICE9PSAnY2hyb21lJyAmJiBwcm90b2NvbCAhPT0gJ2Nocm9tZS1leHRlbnNpb24nO1xuICAgICAgICBpZiAodmFsaWRVcmwpIHtcbiAgICAgICAgICB0aGlzLmN1cnJlbnRTaXRlID0gdGFiU2l0ZTtcbiAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmN1cnJlbnRTaXRlKTtcbiAgICAgICAgICB0aGlzLnN0YXJ0SW50ZXJ2YWwoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc3RvcEludGVydmFsKCkge1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbElkKTtcbiAgfVxuICBzdGFydEludGVydmFsKCkge1xuICAgIHRoaXMuY291bnRlciA9IDE7XG4gICAgdGhpcy5kYkNvdW50ZXIgPSAxO1xuICAgIGlmICghKHRoaXMuaW50ZXJ2YWxJZCA9PT0gbnVsbCkpIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbElkKTtcbiAgICB0aGlzLmludGVydmFsSWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICB0aGlzLmNvdW50ZXIgPSB0aGlzLmNvdW50ZXIgKz0gMTtcbiAgICAgIHRoaXMuZGJDb3VudGVyID0gdGhpcy5kYkNvdW50ZXIgKz0gMTtcbiAgICAgIGNvbnNvbGUubG9nKG1vbWVudCgwKS5zZWNvbmQodGhpcy5jb3VudGVyKS5mb3JtYXQoJ0hIIDogbW0gOiBzcycpKTtcbiAgICB9LCAxMDAwKTtcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdGltZXIuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9