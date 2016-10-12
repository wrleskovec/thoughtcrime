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
	      chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
	        var tabSite = (0, _wurl2.default)('domain', tab.url);
	        var validUrl = tabSite !== _this.currentSite && _this.isValidProtocol(tab.url);
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
	          console.log(_this2.currentSite);
	          console.log(_this2.dbCounter);
	        }
	      }, 1000);
	    }
	  }]);
	  return Timer;
	}();
	
	exports.default = Timer;

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGltZXIuanMiXSwibmFtZXMiOlsic2l0ZVRpbWVyIiwiaW5pdCIsInRoZW4iLCJCTE9DS0VEX1BBR0UiLCJsb2FkRmlsdGVyZWRQYWdlIiwidGFiSWQiLCJ1cmwiLCJjaHJvbWUiLCJ0YWJzIiwidXBkYXRlIiwidXJsQ2hlY2siLCJkZXRhaWxzIiwicHJvdG9jb2wiLCJzaXRlIiwiZ2V0UmVjb3JkIiwicmVjb3JkIiwiYWN0aW9uIiwiY2F0Y2giLCJjb25zb2xlIiwibG9nIiwiZXJyIiwid2ViUmVxdWVzdCIsIm9uQmVmb3JlUmVxdWVzdCIsImFkZExpc3RlbmVyIiwidXJscyIsInR5cGVzIiwiVGltZXIiLCJjdXJyZW50U2l0ZSIsImN1cnJlbnRUYWIiLCJjb3VudGVyIiwiZGJDb3VudGVyIiwiaW50ZXJ2YWxJZCIsImN1cnJlbnREYXRlIiwiZm9ybWF0Iiwid2luZG93cyIsImdldEFsbCIsInBvcHVsYXRlIiwiZm9yRWFjaCIsIndpbiIsInRhYiIsImlzVmFsaWRQcm90b2NvbCIsImV4ZWN1dGVTY3JpcHQiLCJpZCIsImZpbGUiLCJydW50aW1lIiwib25NZXNzYWdlIiwicmVxdWVzdCIsInNlbmRlciIsInNlbmRlclNpdGUiLCJmb2N1cyIsInNhdmVSZWNvcmRzIiwic3RhcnRJbnRlcnZhbCIsIm9uVXBkYXRlZCIsImNoYW5nZUluZm8iLCJ0YWJTaXRlIiwidmFsaWRVcmwiLCJjbGVhckludGVydmFsIiwicmVjb25jaWxlUmVjb3JkcyIsInNldEludGVydmFsIiwibm93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxLQUFNQSxZQUFZLHFCQUFsQjtBQUNBLHFCQUFHQyxJQUFILEdBQVVDLElBQVYsQ0FBZSxZQUFNO0FBQ25CRixhQUFVQyxJQUFWO0FBQ0QsRUFGRDs7QUFJQSxLQUFNRSxlQUFlLG1DQUFyQjs7QUFF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M0M7QUFDRDs7O3FDQUNlO0FBQUE7O0FBQ2QsWUFBS0QsT0FBTCxHQUFlLENBQWY7QUFDQSxZQUFLQyxTQUFMLEdBQWlCLENBQWpCO0FBQ0EsWUFBS0MsVUFBTCxHQUFrQjJCLFlBQVksWUFBTTtBQUNsQyxhQUFNQyxNQUFNLHdCQUFTMUIsTUFBVCxDQUFnQixZQUFoQixDQUFaO0FBQ0EsYUFBSTBCLFFBQVEsT0FBSzNCLFdBQWpCLEVBQThCO0FBQzVCLGVBQUksT0FBS0QsVUFBTCxLQUFvQixJQUF4QixFQUE4QjtBQUM1QixvQkFBS21CLFdBQUw7QUFDRDtBQUNEO0FBQ0Esa0JBQUtsQixXQUFMLEdBQW1CMkIsR0FBbkI7QUFDQSxrQkFBS1IsYUFBTDtBQUNELFVBUEQsTUFPTztBQUNMLGtCQUFLdEIsT0FBTCxHQUFlLE9BQUtBLE9BQUwsSUFBZ0IsQ0FBL0I7QUFDQSxrQkFBS0MsU0FBTCxHQUFpQixPQUFLQSxTQUFMLElBQWtCLENBQW5DO0FBQ0EsZUFBSSxPQUFLQSxTQUFMLEdBQWlCLEVBQWpCLEtBQXdCLENBQTVCLEVBQStCO0FBQzdCLGlDQUFHMkIsZ0JBQUgsQ0FBb0IsT0FBSzlCLFdBQXpCLEVBQXNDLE9BQUtHLFNBQTNDO0FBQ0Esb0JBQUtBLFNBQUwsR0FBaUIsQ0FBakI7QUFDRDtBQUNEWixtQkFBUUMsR0FBUixDQUFZLE9BQUtRLFdBQWpCO0FBQ0FULG1CQUFRQyxHQUFSLENBQVksT0FBS1csU0FBakI7QUFDRDtBQUNGLFFBbkJpQixFQW1CZixJQW5CZSxDQUFsQjtBQW9CRDs7Ozs7bUJBbkhrQkosSyIsImZpbGUiOiJiYWNrZ3JvdW5kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHd1cmwgZnJvbSAnd3VybCc7XG5pbXBvcnQgQkwgZnJvbSAnLi9ibG9ja0xpc3QuanMnO1xuaW1wb3J0IFRpbWVyIGZyb20gJy4vdGltZXIuanMnO1xuXG5jb25zdCBzaXRlVGltZXIgPSBuZXcgVGltZXIoKTtcbkJMLmluaXQoKS50aGVuKCgpID0+IHtcbiAgc2l0ZVRpbWVyLmluaXQoKTtcbn0pO1xuXG5jb25zdCBCTE9DS0VEX1BBR0UgPSAnaHR0cHM6Ly93d3cuZ2l0aHViLmNvbS93cmxlc2tvdmVjJztcblxuZnVuY3Rpb24gbG9hZEZpbHRlcmVkUGFnZSh0YWJJZCwgdXJsKSB7XG4gIGNocm9tZS50YWJzLnVwZGF0ZSh0YWJJZCwge1xuICAgIHVybFxuICB9KTtcbn1cblxuZnVuY3Rpb24gdXJsQ2hlY2soZGV0YWlscykge1xuICBjb25zdCBwcm90b2NvbCA9IHd1cmwoJ3Byb3RvY29sJywgZGV0YWlscy51cmwpO1xuICBpZiAocHJvdG9jb2wgIT09ICdjaHJvbWUnICYmIHByb3RvY29sICE9PSAnY2hyb21lLWV4dGVuc2lvbicpIHtcbiAgICBjb25zdCBzaXRlID0gd3VybCgnZG9tYWluJywgZGV0YWlscy51cmwpO1xuICAgIEJMLmdldFJlY29yZChzaXRlKVxuICAgICAgLnRoZW4ocmVjb3JkID0+IHtcbiAgICAgICAgaWYgKHJlY29yZC5hY3Rpb24gPT09ICdibG9jaycpIHtcbiAgICAgICAgICBsb2FkRmlsdGVyZWRQYWdlKGRldGFpbHMudGFiSWQsIEJMT0NLRURfUEFHRSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH0pO1xuICB9XG4gIHJldHVybiB7fTtcbn1cblxuY2hyb21lLndlYlJlcXVlc3Qub25CZWZvcmVSZXF1ZXN0LmFkZExpc3RlbmVyKHVybENoZWNrLCB7XG4gIHVybHM6IFsnPGFsbF91cmxzPiddLFxuICB0eXBlczogWydtYWluX2ZyYW1lJ11cbn0pO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYmFja2dyb3VuZC5qc1xuICoqLyIsImltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCBCTCBmcm9tICcuL2Jsb2NrTGlzdC5qcyc7XG5pbXBvcnQgd3VybCBmcm9tICd3dXJsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGltZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmN1cnJlbnRTaXRlID0gbnVsbDtcbiAgICB0aGlzLmN1cnJlbnRUYWIgPSBudWxsO1xuLy8gICAgdGhpcy53aW5kb3dGb2N1cyA9IHRydWU7XG4gICAgdGhpcy5jb3VudGVyID0gMTtcbiAgICB0aGlzLmRiQ291bnRlciA9IDE7XG4gICAgdGhpcy5pbnRlcnZhbElkID0gbnVsbDtcbiAgICB0aGlzLmN1cnJlbnREYXRlID0gbW9tZW50KCkuZm9ybWF0KCdERC1NTS1ZWVlZJyk7XG4gIH1cbiAgaW5pdCgpIHtcbiAgICAvLyBjaHJvbWUud2luZG93cy5vbkZvY3VzQ2hhbmdlZC5hZGRMaXN0ZW5lcigoKSA9PiB7XG4gICAgLy8gICBpZiAoY2hyb21lLndpbmRvd3MuV0lORE9XX0lEX05PTkUpIHtcbiAgICAvLyAgICAgdGhpcy53aW5kb3dGb2N1cyA9IGZhbHNlO1xuICAgIC8vICAgICBpZiAodGhpcy5jdXJyZW50U2l0ZSAhPT0gbnVsbCkge1xuICAgIC8vICAgICAgIHRoaXMuc3RvcEludGVydmFsKCk7XG4gICAgLy8gICAgICAgQkwucmVjb25jaWxlUmVjb3Jkcyh0aGlzLmN1cnJlbnRTaXRlLCB0aGlzLmNvdW50ZXIpO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIHRoaXMuY3VycmVudFNpdGUgPSBudWxsO1xuICAgIC8vICAgfSBlbHNlIHtcbiAgICAvLyAgICAgdGhpcy53aW5kb3dGb2N1cyA9IHRydWU7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKCdraWxsIG1lIGdvb2dsZScpO1xuICAgIC8vICAgfVxuICAgIC8vIH0pO1xuICAgIGNocm9tZS53aW5kb3dzLmdldEFsbCh7IHBvcHVsYXRlOiB0cnVlIH0sICh3aW5kb3dzKSA9PiB7XG4gICAgICB3aW5kb3dzLmZvckVhY2goKHdpbikgPT4ge1xuICAgICAgICB3aW4udGFicy5mb3JFYWNoKCh0YWIpID0+IHtcbiAgICAgICAgICBpZiAodGhpcy5pc1ZhbGlkUHJvdG9jb2wodGFiLnVybCkpIHtcbiAgICAgICAgICAgIGNocm9tZS50YWJzLmV4ZWN1dGVTY3JpcHQodGFiLmlkLCB7IGZpbGU6ICdjb250ZW50LmpzJyB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKChyZXF1ZXN0LCBzZW5kZXIpID0+IHtcbiAgICAgIGNvbnN0IHNlbmRlclNpdGUgPSB3dXJsKCdkb21haW4nLCBzZW5kZXIudGFiLnVybCk7XG4gICAgICBpZiAoc2VuZGVyU2l0ZSAhPT0gbnVsbCkge1xuICAgICAgICBpZiAocmVxdWVzdC5mb2N1cyA9PT0gJ2ZvY3VzJyAmJiBzZW5kZXJTaXRlICE9PSB0aGlzLmN1cnJlbnRTaXRlXG4gICAgICAgICAmJiBzZW5kZXIudGFiLmlkICE9PSB0aGlzLmN1cnJlbnRUYWIpIHtcbiAgICAgICAgICBpZiAodGhpcy5jdXJyZW50U2l0ZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5zYXZlUmVjb3JkcygpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmN1cnJlbnRUYWIgPSBzZW5kZXIudGFiLmlkO1xuICAgICAgICAgIHRoaXMuY3VycmVudFNpdGUgPSBzZW5kZXJTaXRlO1xuICAgICAgICAgIHRoaXMuc3RhcnRJbnRlcnZhbCgpO1xuICAgICAgICB9IGVsc2UgaWYgKHJlcXVlc3QuZm9jdXMgPT09ICdibHVyJyAmJiBzZW5kZXIudGFiLmlkID09PSB0aGlzLmN1cnJlbnRUYWIpIHtcbiAgICAgICAgICB0aGlzLnNhdmVSZWNvcmRzKCk7XG4gICAgICAgICAgdGhpcy5jdXJyZW50U2l0ZSA9IG51bGw7XG4gICAgICAgICAgdGhpcy5jdXJyZW50VGFiID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIGNocm9tZS50YWJzLm9uVXBkYXRlZC5hZGRMaXN0ZW5lcigodGFiSWQsIGNoYW5nZUluZm8sIHRhYikgPT4ge1xuICAgICAgY29uc3QgdGFiU2l0ZSA9IHd1cmwoJ2RvbWFpbicsIHRhYi51cmwpO1xuICAgICAgY29uc3QgdmFsaWRVcmwgPSB0YWJTaXRlICE9PSB0aGlzLmN1cnJlbnRTaXRlICYmIHRoaXMuaXNWYWxpZFByb3RvY29sKHRhYi51cmwpO1xuICAgICAgaWYgKHZhbGlkVXJsKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFNpdGUgPSB0YWJTaXRlO1xuICAgICAgICB0aGlzLmN1cnJlbnRUYWIgPSB0YWIuaWQ7XG4gICAgICAgIHRoaXMuc3RhcnRJbnRlcnZhbCgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIC8vICAgY2hyb21lLndpbmRvd3Mub25SZW1vdmVkLmFkZExpc3RlbmVyKCgpID0+IHtcbiAgLy8gICAgIC8vXG4gIC8vICAgfSk7XG4gIC8vICAgY2hyb21lLnRhYnMub25BY3RpdmF0ZWQuYWRkTGlzdGVuZXIoYWN0aXZlSW5mbyA9PiB7XG4gIC8vICAgICBjaHJvbWUudGFicy5nZXQoYWN0aXZlSW5mby50YWJJZCwgdGFiID0+IHtcbiAgLy8gICAgICAgY29uc3QgcHJvdG9jb2wgPSB3dXJsKCdwcm90b2NvbCcsIHRhYi51cmwpO1xuICAvLyAgICAgICBpZiAocHJvdG9jb2wgPT09ICdjaHJvbWUnIHx8IHByb3RvY29sID09PSAnY2hyb21lLWV4dGVuc2lvbicpIHtcbiAgLy8gICAgICAgICBjb25zb2xlLmxvZygnTk9JQ0UnKTtcbiAgLy8gICAgICAgfSBlbHNlIGlmICh3dXJsKCdkb21haW4nLCB0YWIudXJsKSA9PT0gdGhpcy5jdXJyZW50U2l0ZSkge1xuICAvLyAgICAgICAgIGNvbnNvbGUubG9nKCdTQU1FIFNJVEUnKTtcbiAgLy8gICAgICAgfSBlbHNlIHtcbiAgLy8gICAgICAgICBpZiAodGhpcy5jdXJyZW50U2l0ZSAhPT0gbnVsbCkge1xuICAvLyAgICAgICAgICAgdGhpcy5zdG9wSW50ZXJ2YWwoKTtcbiAgLy8gICAgICAgICAgIEJMLnJlY29uY2lsZVJlY29yZHModGhpcy5jdXJyZW50U2l0ZSwgdGhpcy5jb3VudGVyKTtcbiAgLy8gICAgICAgICB9XG4gIC8vICAgICAgICAgY29uc29sZS5sb2coJ0RJRkYgU0lURScpO1xuICAvLyAgICAgICAgIHRoaXMuY3VycmVudFNpdGUgPSB3dXJsKCdkb21haW4nLCB0YWIudXJsKTtcbiAgLy8gICAgICAgICB0aGlzLnN0YXJ0SW50ZXJ2YWwoKTtcbiAgLy8gICAgICAgfVxuICAvLyAgICAgfSk7XG4gIC8vICAgfSk7XG5cbiAgaXNWYWxpZFByb3RvY29sKHVybCkge1xuICAgIGNvbnN0IHByb3RvY29sID0gd3VybCgncHJvdG9jb2wnLCB1cmwpO1xuICAgIHJldHVybiBwcm90b2NvbCA9PT0gJ2h0dHAnIHx8IHByb3RvY29sID09PSAnaHR0cHMnIHx8IHByb3RvY29sID09PSAnZnRwJztcbiAgfVxuICBzYXZlUmVjb3JkcygpIHtcbiAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWxJZCk7XG4gICAgdGhpcy5pbnRlcnZhbElkID0gbnVsbDtcbiAgICBCTC5yZWNvbmNpbGVSZWNvcmRzKHRoaXMuY3VycmVudFNpdGUsIHRoaXMuZGJDb3VudGVyKTtcbiAgfVxuICBzdGFydEludGVydmFsKCkge1xuICAgIHRoaXMuY291bnRlciA9IDE7XG4gICAgdGhpcy5kYkNvdW50ZXIgPSAxO1xuICAgIHRoaXMuaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGNvbnN0IG5vdyA9IG1vbWVudCgpLmZvcm1hdCgnREQtTU0tWVlZWScpO1xuICAgICAgaWYgKG5vdyAhPT0gdGhpcy5jdXJyZW50RGF0ZSkge1xuICAgICAgICBpZiAodGhpcy5pbnRlcnZhbElkICE9PSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5zYXZlUmVjb3JkcygpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFdoYXRldmVyIGl0cyBub3QgbGlrZSB0aGlzIG5lZWRzIHRvIGJlIHByZWNpc2VcbiAgICAgICAgdGhpcy5jdXJyZW50RGF0ZSA9IG5vdztcbiAgICAgICAgdGhpcy5zdGFydEludGVydmFsKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvdW50ZXIgPSB0aGlzLmNvdW50ZXIgKz0gMTtcbiAgICAgICAgdGhpcy5kYkNvdW50ZXIgPSB0aGlzLmRiQ291bnRlciArPSAxO1xuICAgICAgICBpZiAodGhpcy5kYkNvdW50ZXIgJSA2MCA9PT0gMCkge1xuICAgICAgICAgIEJMLnJlY29uY2lsZVJlY29yZHModGhpcy5jdXJyZW50U2l0ZSwgdGhpcy5kYkNvdW50ZXIpO1xuICAgICAgICAgIHRoaXMuZGJDb3VudGVyID0gMDtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmN1cnJlbnRTaXRlKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5kYkNvdW50ZXIpO1xuICAgICAgfVxuICAgIH0sIDEwMDApO1xuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy90aW1lci5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=