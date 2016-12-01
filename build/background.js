webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _wurl = __webpack_require__(670);
	
	var _wurl2 = _interopRequireDefault(_wurl);
	
	var _blockList = __webpack_require__(264);
	
	var _blockList2 = _interopRequireDefault(_blockList);
	
	var _timer = __webpack_require__(679);
	
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
	function handleAction(action, details) {
	  if (action === 'block') {
	    loadFilteredPage(details.tabId, BLOCKED_PAGE);
	  } else if (action === 'limit') {
	    loadFilteredPage(details.tabId, BLOCKED_PAGE);
	  }
	}
	function urlCheck(details) {
	  var protocol = (0, _wurl2.default)('protocol', details.url);
	  if (protocol !== 'chrome' && protocol !== 'chrome-extension') {
	    var site = (0, _wurl2.default)('domain', details.url);
	    _blockList2.default.getRecord(site).then(function (record) {
	      var aclMatch = record.advAction.find(function (action) {
	        var reg = new RegExp(action.text, 'i');
	        return reg.test(details.url);
	      });
	      if (aclMatch) {
	        handleAction(aclMatch.action, details);
	      } else {
	        handleAction(record.action, details);
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

/***/ 679:
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
	
	var _wurl = __webpack_require__(670);
	
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGltZXIuanMiXSwibmFtZXMiOlsiaW5pdCIsInRoZW4iLCJCTE9DS0VEX1BBR0UiLCJsb2FkRmlsdGVyZWRQYWdlIiwidGFiSWQiLCJ1cmwiLCJzZXRUaW1lb3V0IiwiY2hyb21lIiwidGFicyIsInVwZGF0ZSIsImhhbmRsZUFjdGlvbiIsImFjdGlvbiIsImRldGFpbHMiLCJ1cmxDaGVjayIsInByb3RvY29sIiwic2l0ZSIsImdldFJlY29yZCIsImFjbE1hdGNoIiwicmVjb3JkIiwiYWR2QWN0aW9uIiwiZmluZCIsInJlZyIsIlJlZ0V4cCIsInRleHQiLCJ0ZXN0IiwiY2F0Y2giLCJjb25zb2xlIiwibG9nIiwiZXJyIiwid2ViUmVxdWVzdCIsIm9uQmVmb3JlUmVxdWVzdCIsImFkZExpc3RlbmVyIiwidXJscyIsInR5cGVzIiwiVGltZXIiLCJjdXJyZW50U2l0ZSIsImN1cnJlbnRUYWIiLCJwb3B1cCIsImNvdW50ZXIiLCJkYkNvdW50ZXIiLCJpbnRlcnZhbElkIiwiY3VycmVudERhdGUiLCJmb3JtYXQiLCJ3aW5kb3dzIiwiZ2V0QWxsIiwicG9wdWxhdGUiLCJmb3JFYWNoIiwid2luIiwidGFiIiwiaXNWYWxpZFByb3RvY29sIiwiZXhlY3V0ZVNjcmlwdCIsImlkIiwiZmlsZSIsInJ1bnRpbWUiLCJvbk1lc3NhZ2UiLCJyZXF1ZXN0Iiwic2VuZGVyIiwic2VuZFJlc3BvbnNlIiwiZm9jdXMiLCJzZW5kZXJTaXRlIiwic2F2ZVJlY29yZHMiLCJzdGFydEludGVydmFsIiwidGltZXIiLCJzZWNvbmRzIiwib25VcGRhdGVkIiwiY2hhbmdlSW5mbyIsInRhYlNpdGUiLCJ2YWxpZFVybCIsImNsZWFySW50ZXJ2YWwiLCJyZWNvbmNpbGVSZWNvcmRzIiwic2V0SW50ZXJ2YWwiLCJub3ciLCJwcm94eVRpbWVyIiwiUHJveHkiLCJzZXQiLCJ0YXJnZXQiLCJrZXkiLCJ2YWx1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QyxHQUFQLElBQWNDLEtBQWQ7QUFDQSxZQUFPLElBQVA7QUFDRDtBQUx1QyxFQUF2QixDQUFuQjttQkFPZUwsVSIsImZpbGUiOiJiYWNrZ3JvdW5kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHd1cmwgZnJvbSAnd3VybCc7XG5pbXBvcnQgQkwgZnJvbSAnLi9ibG9ja0xpc3QuanMnO1xuaW1wb3J0IFRpbWVyIGZyb20gJy4vdGltZXIuanMnO1xuXG5CTC5pbml0KCkudGhlbigoKSA9PiB7XG4gIFRpbWVyLmluaXQoKTtcbn0pO1xuXG5jb25zdCBCTE9DS0VEX1BBR0UgPSAnaHR0cHM6Ly93d3cuZ2l0aHViLmNvbS93cmxlc2tvdmVjJztcblxuZnVuY3Rpb24gbG9hZEZpbHRlcmVkUGFnZSh0YWJJZCwgdXJsKSB7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGNocm9tZS50YWJzLnVwZGF0ZSh0YWJJZCwgeyB1cmwgfSk7XG4gIH0sIDUwMCk7XG59XG5mdW5jdGlvbiBoYW5kbGVBY3Rpb24oYWN0aW9uLCBkZXRhaWxzKSB7XG4gIGlmIChhY3Rpb24gPT09ICdibG9jaycpIHtcbiAgICBsb2FkRmlsdGVyZWRQYWdlKGRldGFpbHMudGFiSWQsIEJMT0NLRURfUEFHRSk7XG4gIH0gZWxzZSBpZiAoYWN0aW9uID09PSAnbGltaXQnKSB7XG4gICAgbG9hZEZpbHRlcmVkUGFnZShkZXRhaWxzLnRhYklkLCBCTE9DS0VEX1BBR0UpO1xuICB9XG59XG5mdW5jdGlvbiB1cmxDaGVjayhkZXRhaWxzKSB7XG4gIGNvbnN0IHByb3RvY29sID0gd3VybCgncHJvdG9jb2wnLCBkZXRhaWxzLnVybCk7XG4gIGlmIChwcm90b2NvbCAhPT0gJ2Nocm9tZScgJiYgcHJvdG9jb2wgIT09ICdjaHJvbWUtZXh0ZW5zaW9uJykge1xuICAgIGNvbnN0IHNpdGUgPSB3dXJsKCdkb21haW4nLCBkZXRhaWxzLnVybCk7XG4gICAgQkwuZ2V0UmVjb3JkKHNpdGUpXG4gICAgICAudGhlbihyZWNvcmQgPT4ge1xuICAgICAgICBjb25zdCBhY2xNYXRjaCA9IHJlY29yZC5hZHZBY3Rpb24uZmluZChhY3Rpb24gPT4ge1xuICAgICAgICAgIGNvbnN0IHJlZyA9IG5ldyBSZWdFeHAoYWN0aW9uLnRleHQsICdpJyk7XG4gICAgICAgICAgcmV0dXJuIHJlZy50ZXN0KGRldGFpbHMudXJsKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChhY2xNYXRjaCkge1xuICAgICAgICAgIGhhbmRsZUFjdGlvbihhY2xNYXRjaC5hY3Rpb24sIGRldGFpbHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGhhbmRsZUFjdGlvbihyZWNvcmQuYWN0aW9uLCBkZXRhaWxzKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfSk7XG4gIH1cbiAgcmV0dXJuIHt9O1xufVxuXG5jaHJvbWUud2ViUmVxdWVzdC5vbkJlZm9yZVJlcXVlc3QuYWRkTGlzdGVuZXIodXJsQ2hlY2ssIHtcbiAgdXJsczogWyc8YWxsX3VybHM+J10sXG4gIHR5cGVzOiBbJ21haW5fZnJhbWUnXVxufSk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9iYWNrZ3JvdW5kLmpzXG4gKiovIiwiaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IEJMIGZyb20gJy4vYmxvY2tMaXN0LmpzJztcbmltcG9ydCB3dXJsIGZyb20gJ3d1cmwnO1xuXG5jbGFzcyBUaW1lciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY3VycmVudFNpdGUgPSBudWxsO1xuICAgIHRoaXMuY3VycmVudFRhYiA9IG51bGw7XG4gICAgdGhpcy5wb3B1cCA9IGZhbHNlO1xuLy8gICAgdGhpcy53aW5kb3dGb2N1cyA9IHRydWU7XG4gICAgdGhpcy5jb3VudGVyID0gMTtcbiAgICB0aGlzLmRiQ291bnRlciA9IDE7XG4gICAgdGhpcy5pbnRlcnZhbElkID0gbnVsbDtcbiAgICB0aGlzLmN1cnJlbnREYXRlID0gbW9tZW50KCkuZm9ybWF0KCdERC1NTS1ZWVlZJyk7XG4gIH1cbiAgaW5pdCgpIHtcbiAgICAvLyBjaHJvbWUud2luZG93cy5vbkZvY3VzQ2hhbmdlZC5hZGRMaXN0ZW5lcigoKSA9PiB7XG4gICAgLy8gICBpZiAoY2hyb21lLndpbmRvd3MuV0lORE9XX0lEX05PTkUpIHtcbiAgICAvLyAgICAgdGhpcy53aW5kb3dGb2N1cyA9IGZhbHNlO1xuICAgIC8vICAgICBpZiAodGhpcy5jdXJyZW50U2l0ZSAhPT0gbnVsbCkge1xuICAgIC8vICAgICAgIHRoaXMuc3RvcEludGVydmFsKCk7XG4gICAgLy8gICAgICAgQkwucmVjb25jaWxlUmVjb3Jkcyh0aGlzLmN1cnJlbnRTaXRlLCB0aGlzLmNvdW50ZXIpO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIHRoaXMuY3VycmVudFNpdGUgPSBudWxsO1xuICAgIC8vICAgfSBlbHNlIHtcbiAgICAvLyAgICAgdGhpcy53aW5kb3dGb2N1cyA9IHRydWU7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKCdraWxsIG1lIGdvb2dsZScpO1xuICAgIC8vICAgfVxuICAgIC8vIH0pO1xuICAgIGNocm9tZS53aW5kb3dzLmdldEFsbCh7IHBvcHVsYXRlOiB0cnVlIH0sICh3aW5kb3dzKSA9PiB7XG4gICAgICB3aW5kb3dzLmZvckVhY2goKHdpbikgPT4ge1xuICAgICAgICB3aW4udGFicy5mb3JFYWNoKCh0YWIpID0+IHtcbiAgICAgICAgICBpZiAodGhpcy5pc1ZhbGlkUHJvdG9jb2wodGFiLnVybCkpIHtcbiAgICAgICAgICAgIGNocm9tZS50YWJzLmV4ZWN1dGVTY3JpcHQodGFiLmlkLCB7IGZpbGU6ICdjb250ZW50LmpzJyB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKChyZXF1ZXN0LCBzZW5kZXIsIHNlbmRSZXNwb25zZSkgPT4ge1xuICAgICAgaWYgKHJlcXVlc3QuZm9jdXMpIHtcbiAgICAgICAgY29uc3Qgc2VuZGVyU2l0ZSA9IHd1cmwoJ2RvbWFpbicsIHNlbmRlci50YWIudXJsKTtcbiAgICAgICAgaWYgKHJlcXVlc3QuZm9jdXMgPT09ICdmb2N1cycgJiYgc2VuZGVyU2l0ZSAhPT0gdGhpcy5jdXJyZW50U2l0ZSAmJiBzZW5kZXJTaXRlXG4gICAgICAgICAmJiBzZW5kZXIudGFiLmlkICE9PSB0aGlzLmN1cnJlbnRUYWIgJiYgdGhpcy5pc1ZhbGlkUHJvdG9jb2woc2VuZGVyU2l0ZSkpIHtcbiAgICAgICAgICB0aGlzLnBvcHVwID0gZmFsc2U7XG4gICAgICAgICAgaWYgKHRoaXMuY3VycmVudFNpdGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuc2F2ZVJlY29yZHMoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5jdXJyZW50VGFiID0gc2VuZGVyLnRhYi5pZDtcbiAgICAgICAgICB0aGlzLmN1cnJlbnRTaXRlID0gc2VuZGVyU2l0ZTtcbiAgICAgICAgICB0aGlzLnN0YXJ0SW50ZXJ2YWwoKTtcbiAgICAgICAgfSBlbHNlIGlmIChyZXF1ZXN0LmZvY3VzID09PSAnYmx1cicpIHtcbiAgICAgICAgICBpZiAoc2VuZGVyLnRhYi5pZCA9PT0gdGhpcy5jdXJyZW50VGFiICYmIHNlbmRlclNpdGUgJiYgIXRoaXMucG9wdXApIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd3b3cnKTtcbiAgICAgICAgICAgIHRoaXMuc2F2ZVJlY29yZHMoKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFNpdGUgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50VGFiID0gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChyZXF1ZXN0LnRpbWVyID09PSAncG9wdXAnKSB7XG4gICAgICAgIHRoaXMucG9wdXAgPSB0cnVlO1xuICAgICAgICBjb25zb2xlLmxvZygnYmFja2dyb3VuZCByZXNwb25zZScpO1xuICAgICAgICBjb25zb2xlLmxvZyhzZW5kZXIpO1xuICAgICAgICBzZW5kUmVzcG9uc2UoeyBzZWNvbmRzOiB0aGlzLmNvdW50ZXIgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgY2hyb21lLnRhYnMub25VcGRhdGVkLmFkZExpc3RlbmVyKCh0YWJJZCwgY2hhbmdlSW5mbywgdGFiKSA9PiB7XG4gICAgICBjb25zdCB0YWJTaXRlID0gd3VybCgnZG9tYWluJywgdGFiLnVybCk7XG4gICAgICBjb25zdCB2YWxpZFVybCA9IHRhYlNpdGUgIT09IHRoaXMuY3VycmVudFNpdGUgJiYgdGhpcy5pc1ZhbGlkUHJvdG9jb2wodGFiLnVybCk7XG4gICAgICBjb25zb2xlLmxvZyhgJHt0YWJTaXRlfTogJHt2YWxpZFVybH1gKTtcbiAgICAgIGlmICh2YWxpZFVybCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRTaXRlID0gdGFiU2l0ZTtcbiAgICAgICAgdGhpcy5jdXJyZW50VGFiID0gdGFiLmlkO1xuICAgICAgICB0aGlzLnN0YXJ0SW50ZXJ2YWwoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICAvLyAgIGNocm9tZS53aW5kb3dzLm9uUmVtb3ZlZC5hZGRMaXN0ZW5lcigoKSA9PiB7XG4gIC8vICAgICAvL1xuICAvLyAgIH0pO1xuICAvLyAgIGNocm9tZS50YWJzLm9uQWN0aXZhdGVkLmFkZExpc3RlbmVyKGFjdGl2ZUluZm8gPT4ge1xuICAvLyAgICAgY2hyb21lLnRhYnMuZ2V0KGFjdGl2ZUluZm8udGFiSWQsIHRhYiA9PiB7XG4gIC8vICAgICAgIGNvbnN0IHByb3RvY29sID0gd3VybCgncHJvdG9jb2wnLCB0YWIudXJsKTtcbiAgLy8gICAgICAgaWYgKHByb3RvY29sID09PSAnY2hyb21lJyB8fCBwcm90b2NvbCA9PT0gJ2Nocm9tZS1leHRlbnNpb24nKSB7XG4gIC8vICAgICAgICAgY29uc29sZS5sb2coJ05PSUNFJyk7XG4gIC8vICAgICAgIH0gZWxzZSBpZiAod3VybCgnZG9tYWluJywgdGFiLnVybCkgPT09IHRoaXMuY3VycmVudFNpdGUpIHtcbiAgLy8gICAgICAgICBjb25zb2xlLmxvZygnU0FNRSBTSVRFJyk7XG4gIC8vICAgICAgIH0gZWxzZSB7XG4gIC8vICAgICAgICAgaWYgKHRoaXMuY3VycmVudFNpdGUgIT09IG51bGwpIHtcbiAgLy8gICAgICAgICAgIHRoaXMuc3RvcEludGVydmFsKCk7XG4gIC8vICAgICAgICAgICBCTC5yZWNvbmNpbGVSZWNvcmRzKHRoaXMuY3VycmVudFNpdGUsIHRoaXMuY291bnRlcik7XG4gIC8vICAgICAgICAgfVxuICAvLyAgICAgICAgIGNvbnNvbGUubG9nKCdESUZGIFNJVEUnKTtcbiAgLy8gICAgICAgICB0aGlzLmN1cnJlbnRTaXRlID0gd3VybCgnZG9tYWluJywgdGFiLnVybCk7XG4gIC8vICAgICAgICAgdGhpcy5zdGFydEludGVydmFsKCk7XG4gIC8vICAgICAgIH1cbiAgLy8gICAgIH0pO1xuICAvLyAgIH0pO1xuXG4gIGlzVmFsaWRQcm90b2NvbCh1cmwpIHtcbiAgICBjb25zdCBwcm90b2NvbCA9IHd1cmwoJ3Byb3RvY29sJywgdXJsKTtcbiAgICByZXR1cm4gKFxuICAgICAgcHJvdG9jb2wgPT09ICdodHRwJyB8fCBwcm90b2NvbCA9PT0gJ2h0dHBzJyB8fCBwcm90b2NvbCA9PT0gJ2Z0cCdcbiAgICApO1xuICB9XG4gIHNhdmVSZWNvcmRzKCkge1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbElkKTtcbiAgICB0aGlzLmludGVydmFsSWQgPSBudWxsO1xuICAgIEJMLnJlY29uY2lsZVJlY29yZHModGhpcy5jdXJyZW50U2l0ZSwgdGhpcy5kYkNvdW50ZXIsIDEpO1xuICB9XG4gIHN0YXJ0SW50ZXJ2YWwoKSB7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsSWQpO1xuICAgIHRoaXMuY291bnRlciA9IDE7XG4gICAgdGhpcy5kYkNvdW50ZXIgPSAxO1xuICAgIHRoaXMuaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGNvbnN0IG5vdyA9IG1vbWVudCgpLmZvcm1hdCgnREQtTU0tWVlZWScpO1xuICAgICAgaWYgKG5vdyAhPT0gdGhpcy5jdXJyZW50RGF0ZSkge1xuICAgICAgICBpZiAodGhpcy5pbnRlcnZhbElkICE9PSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5zYXZlUmVjb3JkcygpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFdoYXRldmVyIGl0cyBub3QgbGlrZSB0aGlzIG5lZWRzIHRvIGJlIHByZWNpc2VcbiAgICAgICAgdGhpcy5jdXJyZW50RGF0ZSA9IG5vdztcbiAgICAgICAgdGhpcy5zdGFydEludGVydmFsKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvdW50ZXIgPSB0aGlzLmNvdW50ZXIgKz0gMTtcbiAgICAgICAgdGhpcy5kYkNvdW50ZXIgPSB0aGlzLmRiQ291bnRlciArPSAxO1xuICAgICAgICBpZiAodGhpcy5kYkNvdW50ZXIgJSA2MCA9PT0gMCkge1xuICAgICAgICAgIEJMLnJlY29uY2lsZVJlY29yZHModGhpcy5jdXJyZW50U2l0ZSwgdGhpcy5kYkNvdW50ZXIsIDApO1xuICAgICAgICAgIHRoaXMuZGJDb3VudGVyID0gMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIDEwMDApO1xuICB9XG59XG5jb25zdCBwcm94eVRpbWVyID0gbmV3IFByb3h5KG5ldyBUaW1lcigpLCB7XG4gIHNldCh0YXJnZXQsIGtleSwgdmFsdWUpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhgJHtrZXl9OiAke3ZhbHVlfWApO1xuICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn0pO1xuZXhwb3J0IGRlZmF1bHQgcHJveHlUaW1lcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3RpbWVyLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==