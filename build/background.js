webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _wurl = __webpack_require__(497);
	
	var _wurl2 = _interopRequireDefault(_wurl);
	
	var _blockList = __webpack_require__(263);
	
	var _blockList2 = _interopRequireDefault(_blockList);
	
	var _timer = __webpack_require__(502);
	
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

/***/ 502:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _classCallCheck2 = __webpack_require__(292);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(293);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _moment = __webpack_require__(298);
	
	var _moment2 = _interopRequireDefault(_moment);
	
	var _blockList = __webpack_require__(263);
	
	var _blockList2 = _interopRequireDefault(_blockList);
	
	var _wurl = __webpack_require__(497);
	
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
	          } else if (request.focus === 'blur') {
	            if (sender.tab.id === _this.currentTab && senderSite != null && !_this.popup) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGltZXIuanMiXSwibmFtZXMiOlsiaW5pdCIsInRoZW4iLCJCTE9DS0VEX1BBR0UiLCJsb2FkRmlsdGVyZWRQYWdlIiwidGFiSWQiLCJ1cmwiLCJjaHJvbWUiLCJ0YWJzIiwidXBkYXRlIiwidXJsQ2hlY2siLCJkZXRhaWxzIiwicHJvdG9jb2wiLCJzaXRlIiwiZ2V0UmVjb3JkIiwicmVjb3JkIiwiYWN0aW9uIiwiY2F0Y2giLCJjb25zb2xlIiwibG9nIiwiZXJyIiwid2ViUmVxdWVzdCIsIm9uQmVmb3JlUmVxdWVzdCIsImFkZExpc3RlbmVyIiwidXJscyIsInR5cGVzIiwiVGltZXIiLCJjdXJyZW50U2l0ZSIsImN1cnJlbnRUYWIiLCJwb3B1cCIsImNvdW50ZXIiLCJkYkNvdW50ZXIiLCJpbnRlcnZhbElkIiwiY3VycmVudERhdGUiLCJmb3JtYXQiLCJ3aW5kb3dzIiwiZ2V0QWxsIiwicG9wdWxhdGUiLCJmb3JFYWNoIiwid2luIiwidGFiIiwiaXNWYWxpZFByb3RvY29sIiwiZXhlY3V0ZVNjcmlwdCIsImlkIiwiZmlsZSIsInJ1bnRpbWUiLCJvbk1lc3NhZ2UiLCJyZXF1ZXN0Iiwic2VuZGVyIiwic2VuZFJlc3BvbnNlIiwiZm9jdXMiLCJzZW5kZXJTaXRlIiwic2F2ZVJlY29yZHMiLCJzdGFydEludGVydmFsIiwidGltZXIiLCJzZWNvbmRzIiwib25VcGRhdGVkIiwiY2hhbmdlSW5mbyIsInRhYlNpdGUiLCJ2YWxpZFVybCIsImNsZWFySW50ZXJ2YWwiLCJyZWNvbmNpbGVSZWNvcmRzIiwic2V0SW50ZXJ2YWwiLCJub3ciLCJwcm94eVRpbWVyIiwiUHJveHkiLCJzZXQiLCJ0YXJnZXQiLCJrZXkiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEscUJBQUdBLElBQUgsR0FBVUMsSUFBVixDQUFlLFlBQU07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QUFpQixPQUFLQSxTQUFMLElBQWtCLENBQW5DO0FBQ0EsZUFBSSxPQUFLQSxTQUFMLEdBQWlCLEVBQWpCLEtBQXdCLENBQTVCLEVBQStCO0FBQzdCLGlDQUFHOEIsZ0JBQUgsQ0FBb0IsT0FBS2xDLFdBQXpCLEVBQXNDLE9BQUtJLFNBQTNDO0FBQ0Esb0JBQUtBLFNBQUwsR0FBaUIsQ0FBakI7QUFDRDtBQUNGO0FBQ0YsUUFqQmlCLEVBaUJmLElBakJlLENBQWxCO0FBa0JEOzs7OztBQUVILEtBQU1pQyxhQUFhLElBQUlDLEtBQUosQ0FBVSxJQUFJdkMsS0FBSixFQUFWLEVBQXVCO0FBQ3hDd0MsTUFEd0MsZUFDcENDLE1BRG9DLEVBQzVCQyxHQUQ0QixFQUN2QkMsS0FEdUIsRUFDaEI7QUFDdEJuRCxhQUFRQyxHQUFSLENBQWVpRCxHQUFmLFVBQXVCQyxLQUF2QjtBQUNBRixZQUFPQyxHQUFQLElBQWNDLEtBQWQ7QUFDQSxZQUFPLElBQVA7QUFDRDtBQUx1QyxFQUF2QixDQUFuQjttQkFPZUwsVSIsImZpbGUiOiJiYWNrZ3JvdW5kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHd1cmwgZnJvbSAnd3VybCc7XG5pbXBvcnQgQkwgZnJvbSAnLi9ibG9ja0xpc3QuanMnO1xuaW1wb3J0IFRpbWVyIGZyb20gJy4vdGltZXIuanMnO1xuXG5CTC5pbml0KCkudGhlbigoKSA9PiB7XG4gIFRpbWVyLmluaXQoKTtcbn0pO1xuXG5jb25zdCBCTE9DS0VEX1BBR0UgPSAnaHR0cHM6Ly93d3cuZ2l0aHViLmNvbS93cmxlc2tvdmVjJztcblxuZnVuY3Rpb24gbG9hZEZpbHRlcmVkUGFnZSh0YWJJZCwgdXJsKSB7XG4gIGNocm9tZS50YWJzLnVwZGF0ZSh0YWJJZCwge1xuICAgIHVybFxuICB9KTtcbn1cblxuZnVuY3Rpb24gdXJsQ2hlY2soZGV0YWlscykge1xuICBjb25zdCBwcm90b2NvbCA9IHd1cmwoJ3Byb3RvY29sJywgZGV0YWlscy51cmwpO1xuICBpZiAocHJvdG9jb2wgIT09ICdjaHJvbWUnICYmIHByb3RvY29sICE9PSAnY2hyb21lLWV4dGVuc2lvbicpIHtcbiAgICBjb25zdCBzaXRlID0gd3VybCgnZG9tYWluJywgZGV0YWlscy51cmwpO1xuICAgIEJMLmdldFJlY29yZChzaXRlKVxuICAgICAgLnRoZW4ocmVjb3JkID0+IHtcbiAgICAgICAgaWYgKHJlY29yZC5hY3Rpb24gPT09ICdibG9jaycpIHtcbiAgICAgICAgICBsb2FkRmlsdGVyZWRQYWdlKGRldGFpbHMudGFiSWQsIEJMT0NLRURfUEFHRSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH0pO1xuICB9XG4gIHJldHVybiB7fTtcbn1cblxuY2hyb21lLndlYlJlcXVlc3Qub25CZWZvcmVSZXF1ZXN0LmFkZExpc3RlbmVyKHVybENoZWNrLCB7XG4gIHVybHM6IFsnPGFsbF91cmxzPiddLFxuICB0eXBlczogWydtYWluX2ZyYW1lJ11cbn0pO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYmFja2dyb3VuZC5qc1xuICoqLyIsImltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCBCTCBmcm9tICcuL2Jsb2NrTGlzdC5qcyc7XG5pbXBvcnQgd3VybCBmcm9tICd3dXJsJztcblxuY2xhc3MgVGltZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmN1cnJlbnRTaXRlID0gbnVsbDtcbiAgICB0aGlzLmN1cnJlbnRUYWIgPSBudWxsO1xuICAgIHRoaXMucG9wdXAgPSBmYWxzZTtcbi8vICAgIHRoaXMud2luZG93Rm9jdXMgPSB0cnVlO1xuICAgIHRoaXMuY291bnRlciA9IDE7XG4gICAgdGhpcy5kYkNvdW50ZXIgPSAxO1xuICAgIHRoaXMuaW50ZXJ2YWxJZCA9IG51bGw7XG4gICAgdGhpcy5jdXJyZW50RGF0ZSA9IG1vbWVudCgpLmZvcm1hdCgnREQtTU0tWVlZWScpO1xuICB9XG4gIGluaXQoKSB7XG4gICAgLy8gY2hyb21lLndpbmRvd3Mub25Gb2N1c0NoYW5nZWQuYWRkTGlzdGVuZXIoKCkgPT4ge1xuICAgIC8vICAgaWYgKGNocm9tZS53aW5kb3dzLldJTkRPV19JRF9OT05FKSB7XG4gICAgLy8gICAgIHRoaXMud2luZG93Rm9jdXMgPSBmYWxzZTtcbiAgICAvLyAgICAgaWYgKHRoaXMuY3VycmVudFNpdGUgIT09IG51bGwpIHtcbiAgICAvLyAgICAgICB0aGlzLnN0b3BJbnRlcnZhbCgpO1xuICAgIC8vICAgICAgIEJMLnJlY29uY2lsZVJlY29yZHModGhpcy5jdXJyZW50U2l0ZSwgdGhpcy5jb3VudGVyKTtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICB0aGlzLmN1cnJlbnRTaXRlID0gbnVsbDtcbiAgICAvLyAgIH0gZWxzZSB7XG4gICAgLy8gICAgIHRoaXMud2luZG93Rm9jdXMgPSB0cnVlO1xuICAgIC8vICAgICBjb25zb2xlLmxvZygna2lsbCBtZSBnb29nbGUnKTtcbiAgICAvLyAgIH1cbiAgICAvLyB9KTtcbiAgICBjaHJvbWUud2luZG93cy5nZXRBbGwoeyBwb3B1bGF0ZTogdHJ1ZSB9LCAod2luZG93cykgPT4ge1xuICAgICAgd2luZG93cy5mb3JFYWNoKCh3aW4pID0+IHtcbiAgICAgICAgd2luLnRhYnMuZm9yRWFjaCgodGFiKSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMuaXNWYWxpZFByb3RvY29sKHRhYi51cmwpKSB7XG4gICAgICAgICAgICBjaHJvbWUudGFicy5leGVjdXRlU2NyaXB0KHRhYi5pZCwgeyBmaWxlOiAnY29udGVudC5qcycgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigocmVxdWVzdCwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpID0+IHtcbiAgICAgIGlmIChyZXF1ZXN0LmZvY3VzKSB7XG4gICAgICAgIGNvbnN0IHNlbmRlclNpdGUgPSB3dXJsKCdkb21haW4nLCBzZW5kZXIudGFiLnVybCk7XG4gICAgICAgIGlmIChyZXF1ZXN0LmZvY3VzID09PSAnZm9jdXMnICYmIHNlbmRlclNpdGUgIT09IHRoaXMuY3VycmVudFNpdGUgJiYgc2VuZGVyU2l0ZSAhPSBudWxsXG4gICAgICAgICAmJiBzZW5kZXIudGFiLmlkICE9PSB0aGlzLmN1cnJlbnRUYWIgJiYgdGhpcy5pc1ZhbGlkUHJvdG9jb2woc2VuZGVyU2l0ZSkpIHtcbiAgICAgICAgICB0aGlzLnBvcHVwID0gZmFsc2U7XG4gICAgICAgICAgaWYgKHRoaXMuY3VycmVudFNpdGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuc2F2ZVJlY29yZHMoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5jdXJyZW50VGFiID0gc2VuZGVyLnRhYi5pZDtcbiAgICAgICAgICB0aGlzLmN1cnJlbnRTaXRlID0gc2VuZGVyU2l0ZTtcbiAgICAgICAgICB0aGlzLnN0YXJ0SW50ZXJ2YWwoKTtcbiAgICAgICAgfSBlbHNlIGlmIChyZXF1ZXN0LmZvY3VzID09PSAnYmx1cicpIHtcbiAgICAgICAgICBpZiAoc2VuZGVyLnRhYi5pZCA9PT0gdGhpcy5jdXJyZW50VGFiICYmIHNlbmRlclNpdGUgIT0gbnVsbCAmJiAhdGhpcy5wb3B1cCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3dvdycpO1xuICAgICAgICAgICAgdGhpcy5zYXZlUmVjb3JkcygpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50U2l0ZSA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRUYWIgPSBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHJlcXVlc3QudGltZXIgPT09ICdwb3B1cCcpIHtcbiAgICAgICAgdGhpcy5wb3B1cCA9IHRydWU7XG4gICAgICAgIGNvbnNvbGUubG9nKCdiYWNrZ3JvdW5kIHJlc3BvbnNlJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHNlbmRlcik7XG4gICAgICAgIHNlbmRSZXNwb25zZSh7IHNlY29uZHM6IHRoaXMuY291bnRlciB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBjaHJvbWUudGFicy5vblVwZGF0ZWQuYWRkTGlzdGVuZXIoKHRhYklkLCBjaGFuZ2VJbmZvLCB0YWIpID0+IHtcbiAgICAgIGNvbnN0IHRhYlNpdGUgPSB3dXJsKCdkb21haW4nLCB0YWIudXJsKTtcbiAgICAgIGNvbnN0IHZhbGlkVXJsID0gdGFiU2l0ZSAhPT0gdGhpcy5jdXJyZW50U2l0ZSAmJiB0aGlzLmlzVmFsaWRQcm90b2NvbCh0YWIudXJsKTtcbiAgICAgIGNvbnNvbGUubG9nKGAke3RhYlNpdGV9OiAke3ZhbGlkVXJsfWApO1xuICAgICAgaWYgKHZhbGlkVXJsKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFNpdGUgPSB0YWJTaXRlO1xuICAgICAgICB0aGlzLmN1cnJlbnRUYWIgPSB0YWIuaWQ7XG4gICAgICAgIHRoaXMuc3RhcnRJbnRlcnZhbCgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIC8vICAgY2hyb21lLndpbmRvd3Mub25SZW1vdmVkLmFkZExpc3RlbmVyKCgpID0+IHtcbiAgLy8gICAgIC8vXG4gIC8vICAgfSk7XG4gIC8vICAgY2hyb21lLnRhYnMub25BY3RpdmF0ZWQuYWRkTGlzdGVuZXIoYWN0aXZlSW5mbyA9PiB7XG4gIC8vICAgICBjaHJvbWUudGFicy5nZXQoYWN0aXZlSW5mby50YWJJZCwgdGFiID0+IHtcbiAgLy8gICAgICAgY29uc3QgcHJvdG9jb2wgPSB3dXJsKCdwcm90b2NvbCcsIHRhYi51cmwpO1xuICAvLyAgICAgICBpZiAocHJvdG9jb2wgPT09ICdjaHJvbWUnIHx8IHByb3RvY29sID09PSAnY2hyb21lLWV4dGVuc2lvbicpIHtcbiAgLy8gICAgICAgICBjb25zb2xlLmxvZygnTk9JQ0UnKTtcbiAgLy8gICAgICAgfSBlbHNlIGlmICh3dXJsKCdkb21haW4nLCB0YWIudXJsKSA9PT0gdGhpcy5jdXJyZW50U2l0ZSkge1xuICAvLyAgICAgICAgIGNvbnNvbGUubG9nKCdTQU1FIFNJVEUnKTtcbiAgLy8gICAgICAgfSBlbHNlIHtcbiAgLy8gICAgICAgICBpZiAodGhpcy5jdXJyZW50U2l0ZSAhPT0gbnVsbCkge1xuICAvLyAgICAgICAgICAgdGhpcy5zdG9wSW50ZXJ2YWwoKTtcbiAgLy8gICAgICAgICAgIEJMLnJlY29uY2lsZVJlY29yZHModGhpcy5jdXJyZW50U2l0ZSwgdGhpcy5jb3VudGVyKTtcbiAgLy8gICAgICAgICB9XG4gIC8vICAgICAgICAgY29uc29sZS5sb2coJ0RJRkYgU0lURScpO1xuICAvLyAgICAgICAgIHRoaXMuY3VycmVudFNpdGUgPSB3dXJsKCdkb21haW4nLCB0YWIudXJsKTtcbiAgLy8gICAgICAgICB0aGlzLnN0YXJ0SW50ZXJ2YWwoKTtcbiAgLy8gICAgICAgfVxuICAvLyAgICAgfSk7XG4gIC8vICAgfSk7XG5cbiAgaXNWYWxpZFByb3RvY29sKHVybCkge1xuICAgIGNvbnN0IHByb3RvY29sID0gd3VybCgncHJvdG9jb2wnLCB1cmwpO1xuICAgIHJldHVybiAoXG4gICAgICBwcm90b2NvbCA9PT0gJ2h0dHAnIHx8IHByb3RvY29sID09PSAnaHR0cHMnIHx8IHByb3RvY29sID09PSAnZnRwJ1xuICAgICk7XG4gIH1cbiAgc2F2ZVJlY29yZHMoKSB7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsSWQpO1xuICAgIHRoaXMuaW50ZXJ2YWxJZCA9IG51bGw7XG4gICAgQkwucmVjb25jaWxlUmVjb3Jkcyh0aGlzLmN1cnJlbnRTaXRlLCB0aGlzLmRiQ291bnRlcik7XG4gIH1cbiAgc3RhcnRJbnRlcnZhbCgpIHtcbiAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWxJZCk7XG4gICAgdGhpcy5jb3VudGVyID0gMTtcbiAgICB0aGlzLmRiQ291bnRlciA9IDE7XG4gICAgdGhpcy5pbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgY29uc3Qgbm93ID0gbW9tZW50KCkuZm9ybWF0KCdERC1NTS1ZWVlZJyk7XG4gICAgICBpZiAobm93ICE9PSB0aGlzLmN1cnJlbnREYXRlKSB7XG4gICAgICAgIGlmICh0aGlzLmludGVydmFsSWQgIT09IG51bGwpIHtcbiAgICAgICAgICB0aGlzLnNhdmVSZWNvcmRzKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gV2hhdGV2ZXIgaXRzIG5vdCBsaWtlIHRoaXMgbmVlZHMgdG8gYmUgcHJlY2lzZVxuICAgICAgICB0aGlzLmN1cnJlbnREYXRlID0gbm93O1xuICAgICAgICB0aGlzLnN0YXJ0SW50ZXJ2YWwoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY291bnRlciA9IHRoaXMuY291bnRlciArPSAxO1xuICAgICAgICB0aGlzLmRiQ291bnRlciA9IHRoaXMuZGJDb3VudGVyICs9IDE7XG4gICAgICAgIGlmICh0aGlzLmRiQ291bnRlciAlIDYwID09PSAwKSB7XG4gICAgICAgICAgQkwucmVjb25jaWxlUmVjb3Jkcyh0aGlzLmN1cnJlbnRTaXRlLCB0aGlzLmRiQ291bnRlcik7XG4gICAgICAgICAgdGhpcy5kYkNvdW50ZXIgPSAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgMTAwMCk7XG4gIH1cbn1cbmNvbnN0IHByb3h5VGltZXIgPSBuZXcgUHJveHkobmV3IFRpbWVyKCksIHtcbiAgc2V0KHRhcmdldCwga2V5LCB2YWx1ZSkge1xuICAgIGNvbnNvbGUubG9nKGAke2tleX06ICR7dmFsdWV9YCk7XG4gICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufSk7XG5leHBvcnQgZGVmYXVsdCBwcm94eVRpbWVyO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdGltZXIuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9