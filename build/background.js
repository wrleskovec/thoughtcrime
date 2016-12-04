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
	        var reg = new RegExp(action.regex, 'i');
	        return reg.test(details.url);
	      });
	      if (aclMatch) {
	        handleAction(aclMatch.action, details);
	      } else {
	        var patternMatch = _blockList2.default.patterns.items.find(function (item) {
	          var reg = new RegExp(item.regex, 'i');
	          return reg.test(details.url);
	        });
	        if (patternMatch) {
	          handleAction(patternMatch.action, details);
	        } else {
	          handleAction(record.action, details);
	        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGltZXIuanMiXSwibmFtZXMiOlsiaW5pdCIsInRoZW4iLCJCTE9DS0VEX1BBR0UiLCJsb2FkRmlsdGVyZWRQYWdlIiwidGFiSWQiLCJ1cmwiLCJzZXRUaW1lb3V0IiwiY2hyb21lIiwidGFicyIsInVwZGF0ZSIsImhhbmRsZUFjdGlvbiIsImFjdGlvbiIsImRldGFpbHMiLCJ1cmxDaGVjayIsInByb3RvY29sIiwic2l0ZSIsImdldFJlY29yZCIsImFjbE1hdGNoIiwicmVjb3JkIiwiYWR2QWN0aW9uIiwiZmluZCIsInJlZyIsIlJlZ0V4cCIsInJlZ2V4IiwidGVzdCIsInBhdHRlcm5NYXRjaCIsInBhdHRlcm5zIiwiaXRlbXMiLCJpdGVtIiwiY2F0Y2giLCJjb25zb2xlIiwibG9nIiwiZXJyIiwid2ViUmVxdWVzdCIsIm9uQmVmb3JlUmVxdWVzdCIsImFkZExpc3RlbmVyIiwidXJscyIsInR5cGVzIiwiVGltZXIiLCJjdXJyZW50U2l0ZSIsImN1cnJlbnRUYWIiLCJwb3B1cCIsImNvdW50ZXIiLCJkYkNvdW50ZXIiLCJpbnRlcnZhbElkIiwiY3VycmVudERhdGUiLCJmb3JtYXQiLCJ3aW5kb3dzIiwiZ2V0QWxsIiwicG9wdWxhdGUiLCJmb3JFYWNoIiwid2luIiwidGFiIiwiaXNWYWxpZFByb3RvY29sIiwiZXhlY3V0ZVNjcmlwdCIsImlkIiwiZmlsZSIsInJ1bnRpbWUiLCJvbk1lc3NhZ2UiLCJyZXF1ZXN0Iiwic2VuZGVyIiwic2VuZFJlc3BvbnNlIiwiZm9jdXMiLCJzZW5kZXJTaXRlIiwic2F2ZVJlY29yZHMiLCJzdGFydEludGVydmFsIiwidGltZXIiLCJzZWNvbmRzIiwib25VcGRhdGVkIiwiY2hhbmdlSW5mbyIsInRhYlNpdGUiLCJ2YWxpZFVybCIsImNsZWFySW50ZXJ2YWwiLCJyZWNvbmNpbGVSZWNvcmRzIiwic2V0SW50ZXJ2YWwiLCJub3ciLCJwcm94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LE9BQUtBLFNBQUwsR0FBaUIsRUFBakIsS0FBd0IsQ0FBNUIsRUFBK0I7QUFDN0IsaUNBQUc4QixnQkFBSCxDQUFvQixPQUFLbEMsV0FBekIsRUFBc0MsT0FBS0ksU0FBM0MsRUFBc0QsQ0FBdEQ7QUFDQSxvQkFBS0EsU0FBTCxHQUFpQixDQUFqQjtBQUNEO0FBQ0Y7QUFDRixRQWpCaUIsRUFpQmYsSUFqQmUsQ0FBbEI7QUFrQkQ7Ozs7O0FBRUgsS0FBTWlDLGFBQWEsSUFBSUMsS0FBSixDQUFVLElBQUl2QyxLQUFKLEVBQVYsRUFBdUI7QUFDeEN3QyxNQUR3QyxlQUNwQ0MsTUFEb0MsRUFDNUJDLEdBRDRCLEVBQ3ZCQyxLQUR1QixFQUNoQjtBQUN0QjtBQUNBRixZQUFPQyxHQUFQLElBQWNDLEtBQWQ7QUFDQSxZQUFPLElBQVA7QUFDRDtBQUx1QyxFQUF2QixDQUFuQjttQkFPZUwsVSIsImZpbGUiOiJiYWNrZ3JvdW5kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHd1cmwgZnJvbSAnd3VybCc7XG5pbXBvcnQgQkwgZnJvbSAnLi9ibG9ja0xpc3QuanMnO1xuaW1wb3J0IFRpbWVyIGZyb20gJy4vdGltZXIuanMnO1xuXG5CTC5pbml0KCkudGhlbigoKSA9PiB7XG4gIFRpbWVyLmluaXQoKTtcbn0pO1xuXG5jb25zdCBCTE9DS0VEX1BBR0UgPSAnaHR0cHM6Ly93d3cuZ2l0aHViLmNvbS93cmxlc2tvdmVjJztcblxuZnVuY3Rpb24gbG9hZEZpbHRlcmVkUGFnZSh0YWJJZCwgdXJsKSB7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGNocm9tZS50YWJzLnVwZGF0ZSh0YWJJZCwgeyB1cmwgfSk7XG4gIH0sIDUwMCk7XG59XG5mdW5jdGlvbiBoYW5kbGVBY3Rpb24oYWN0aW9uLCBkZXRhaWxzKSB7XG4gIGlmIChhY3Rpb24gPT09ICdibG9jaycpIHtcbiAgICBsb2FkRmlsdGVyZWRQYWdlKGRldGFpbHMudGFiSWQsIEJMT0NLRURfUEFHRSk7XG4gIH0gZWxzZSBpZiAoYWN0aW9uID09PSAnbGltaXQnKSB7XG4gICAgbG9hZEZpbHRlcmVkUGFnZShkZXRhaWxzLnRhYklkLCBCTE9DS0VEX1BBR0UpO1xuICB9XG59XG5mdW5jdGlvbiB1cmxDaGVjayhkZXRhaWxzKSB7XG4gIGNvbnN0IHByb3RvY29sID0gd3VybCgncHJvdG9jb2wnLCBkZXRhaWxzLnVybCk7XG4gIGlmIChwcm90b2NvbCAhPT0gJ2Nocm9tZScgJiYgcHJvdG9jb2wgIT09ICdjaHJvbWUtZXh0ZW5zaW9uJykge1xuICAgIGNvbnN0IHNpdGUgPSB3dXJsKCdkb21haW4nLCBkZXRhaWxzLnVybCk7XG4gICAgQkwuZ2V0UmVjb3JkKHNpdGUpXG4gICAgICAudGhlbihyZWNvcmQgPT4ge1xuICAgICAgICBjb25zdCBhY2xNYXRjaCA9IHJlY29yZC5hZHZBY3Rpb24uZmluZChhY3Rpb24gPT4ge1xuICAgICAgICAgIGNvbnN0IHJlZyA9IG5ldyBSZWdFeHAoYWN0aW9uLnJlZ2V4LCAnaScpO1xuICAgICAgICAgIHJldHVybiByZWcudGVzdChkZXRhaWxzLnVybCk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoYWNsTWF0Y2gpIHtcbiAgICAgICAgICBoYW5kbGVBY3Rpb24oYWNsTWF0Y2guYWN0aW9uLCBkZXRhaWxzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBwYXR0ZXJuTWF0Y2ggPSBCTC5wYXR0ZXJucy5pdGVtcy5maW5kKGl0ZW0gPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVnID0gbmV3IFJlZ0V4cChpdGVtLnJlZ2V4LCAnaScpO1xuICAgICAgICAgICAgcmV0dXJuIHJlZy50ZXN0KGRldGFpbHMudXJsKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpZiAocGF0dGVybk1hdGNoKSB7XG4gICAgICAgICAgICBoYW5kbGVBY3Rpb24ocGF0dGVybk1hdGNoLmFjdGlvbiwgZGV0YWlscyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGhhbmRsZUFjdGlvbihyZWNvcmQuYWN0aW9uLCBkZXRhaWxzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH0pO1xuICB9XG4gIHJldHVybiB7fTtcbn1cblxuY2hyb21lLndlYlJlcXVlc3Qub25CZWZvcmVSZXF1ZXN0LmFkZExpc3RlbmVyKHVybENoZWNrLCB7XG4gIHVybHM6IFsnPGFsbF91cmxzPiddLFxuICB0eXBlczogWydtYWluX2ZyYW1lJ11cbn0pO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYmFja2dyb3VuZC5qc1xuICoqLyIsImltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCBCTCBmcm9tICcuL2Jsb2NrTGlzdC5qcyc7XG5pbXBvcnQgd3VybCBmcm9tICd3dXJsJztcblxuY2xhc3MgVGltZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmN1cnJlbnRTaXRlID0gbnVsbDtcbiAgICB0aGlzLmN1cnJlbnRUYWIgPSBudWxsO1xuICAgIHRoaXMucG9wdXAgPSBmYWxzZTtcbi8vICAgIHRoaXMud2luZG93Rm9jdXMgPSB0cnVlO1xuICAgIHRoaXMuY291bnRlciA9IDE7XG4gICAgdGhpcy5kYkNvdW50ZXIgPSAxO1xuICAgIHRoaXMuaW50ZXJ2YWxJZCA9IG51bGw7XG4gICAgdGhpcy5jdXJyZW50RGF0ZSA9IG1vbWVudCgpLmZvcm1hdCgnREQtTU0tWVlZWScpO1xuICB9XG4gIGluaXQoKSB7XG4gICAgLy8gY2hyb21lLndpbmRvd3Mub25Gb2N1c0NoYW5nZWQuYWRkTGlzdGVuZXIoKCkgPT4ge1xuICAgIC8vICAgaWYgKGNocm9tZS53aW5kb3dzLldJTkRPV19JRF9OT05FKSB7XG4gICAgLy8gICAgIHRoaXMud2luZG93Rm9jdXMgPSBmYWxzZTtcbiAgICAvLyAgICAgaWYgKHRoaXMuY3VycmVudFNpdGUgIT09IG51bGwpIHtcbiAgICAvLyAgICAgICB0aGlzLnN0b3BJbnRlcnZhbCgpO1xuICAgIC8vICAgICAgIEJMLnJlY29uY2lsZVJlY29yZHModGhpcy5jdXJyZW50U2l0ZSwgdGhpcy5jb3VudGVyKTtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICB0aGlzLmN1cnJlbnRTaXRlID0gbnVsbDtcbiAgICAvLyAgIH0gZWxzZSB7XG4gICAgLy8gICAgIHRoaXMud2luZG93Rm9jdXMgPSB0cnVlO1xuICAgIC8vICAgICBjb25zb2xlLmxvZygna2lsbCBtZSBnb29nbGUnKTtcbiAgICAvLyAgIH1cbiAgICAvLyB9KTtcbiAgICBjaHJvbWUud2luZG93cy5nZXRBbGwoeyBwb3B1bGF0ZTogdHJ1ZSB9LCAod2luZG93cykgPT4ge1xuICAgICAgd2luZG93cy5mb3JFYWNoKCh3aW4pID0+IHtcbiAgICAgICAgd2luLnRhYnMuZm9yRWFjaCgodGFiKSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMuaXNWYWxpZFByb3RvY29sKHRhYi51cmwpKSB7XG4gICAgICAgICAgICBjaHJvbWUudGFicy5leGVjdXRlU2NyaXB0KHRhYi5pZCwgeyBmaWxlOiAnY29udGVudC5qcycgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigocmVxdWVzdCwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpID0+IHtcbiAgICAgIGlmIChyZXF1ZXN0LmZvY3VzKSB7XG4gICAgICAgIGNvbnN0IHNlbmRlclNpdGUgPSB3dXJsKCdkb21haW4nLCBzZW5kZXIudGFiLnVybCk7XG4gICAgICAgIGlmIChyZXF1ZXN0LmZvY3VzID09PSAnZm9jdXMnICYmIHNlbmRlclNpdGUgIT09IHRoaXMuY3VycmVudFNpdGUgJiYgc2VuZGVyU2l0ZVxuICAgICAgICAgJiYgc2VuZGVyLnRhYi5pZCAhPT0gdGhpcy5jdXJyZW50VGFiICYmIHRoaXMuaXNWYWxpZFByb3RvY29sKHNlbmRlclNpdGUpKSB7XG4gICAgICAgICAgdGhpcy5wb3B1cCA9IGZhbHNlO1xuICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRTaXRlICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnNhdmVSZWNvcmRzKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuY3VycmVudFRhYiA9IHNlbmRlci50YWIuaWQ7XG4gICAgICAgICAgdGhpcy5jdXJyZW50U2l0ZSA9IHNlbmRlclNpdGU7XG4gICAgICAgICAgdGhpcy5zdGFydEludGVydmFsKCk7XG4gICAgICAgIH0gZWxzZSBpZiAocmVxdWVzdC5mb2N1cyA9PT0gJ2JsdXInKSB7XG4gICAgICAgICAgaWYgKHNlbmRlci50YWIuaWQgPT09IHRoaXMuY3VycmVudFRhYiAmJiBzZW5kZXJTaXRlICYmICF0aGlzLnBvcHVwKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnd293Jyk7XG4gICAgICAgICAgICB0aGlzLnNhdmVSZWNvcmRzKCk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTaXRlID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFRhYiA9IG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAocmVxdWVzdC50aW1lciA9PT0gJ3BvcHVwJykge1xuICAgICAgICB0aGlzLnBvcHVwID0gdHJ1ZTtcbiAgICAgICAgY29uc29sZS5sb2coJ2JhY2tncm91bmQgcmVzcG9uc2UnKTtcbiAgICAgICAgY29uc29sZS5sb2coc2VuZGVyKTtcbiAgICAgICAgc2VuZFJlc3BvbnNlKHsgc2Vjb25kczogdGhpcy5jb3VudGVyIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGNocm9tZS50YWJzLm9uVXBkYXRlZC5hZGRMaXN0ZW5lcigodGFiSWQsIGNoYW5nZUluZm8sIHRhYikgPT4ge1xuICAgICAgY29uc3QgdGFiU2l0ZSA9IHd1cmwoJ2RvbWFpbicsIHRhYi51cmwpO1xuICAgICAgY29uc3QgdmFsaWRVcmwgPSB0YWJTaXRlICE9PSB0aGlzLmN1cnJlbnRTaXRlICYmIHRoaXMuaXNWYWxpZFByb3RvY29sKHRhYi51cmwpO1xuICAgICAgY29uc29sZS5sb2coYCR7dGFiU2l0ZX06ICR7dmFsaWRVcmx9YCk7XG4gICAgICBpZiAodmFsaWRVcmwpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50U2l0ZSA9IHRhYlNpdGU7XG4gICAgICAgIHRoaXMuY3VycmVudFRhYiA9IHRhYi5pZDtcbiAgICAgICAgdGhpcy5zdGFydEludGVydmFsKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgLy8gICBjaHJvbWUud2luZG93cy5vblJlbW92ZWQuYWRkTGlzdGVuZXIoKCkgPT4ge1xuICAvLyAgICAgLy9cbiAgLy8gICB9KTtcbiAgLy8gICBjaHJvbWUudGFicy5vbkFjdGl2YXRlZC5hZGRMaXN0ZW5lcihhY3RpdmVJbmZvID0+IHtcbiAgLy8gICAgIGNocm9tZS50YWJzLmdldChhY3RpdmVJbmZvLnRhYklkLCB0YWIgPT4ge1xuICAvLyAgICAgICBjb25zdCBwcm90b2NvbCA9IHd1cmwoJ3Byb3RvY29sJywgdGFiLnVybCk7XG4gIC8vICAgICAgIGlmIChwcm90b2NvbCA9PT0gJ2Nocm9tZScgfHwgcHJvdG9jb2wgPT09ICdjaHJvbWUtZXh0ZW5zaW9uJykge1xuICAvLyAgICAgICAgIGNvbnNvbGUubG9nKCdOT0lDRScpO1xuICAvLyAgICAgICB9IGVsc2UgaWYgKHd1cmwoJ2RvbWFpbicsIHRhYi51cmwpID09PSB0aGlzLmN1cnJlbnRTaXRlKSB7XG4gIC8vICAgICAgICAgY29uc29sZS5sb2coJ1NBTUUgU0lURScpO1xuICAvLyAgICAgICB9IGVsc2Uge1xuICAvLyAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRTaXRlICE9PSBudWxsKSB7XG4gIC8vICAgICAgICAgICB0aGlzLnN0b3BJbnRlcnZhbCgpO1xuICAvLyAgICAgICAgICAgQkwucmVjb25jaWxlUmVjb3Jkcyh0aGlzLmN1cnJlbnRTaXRlLCB0aGlzLmNvdW50ZXIpO1xuICAvLyAgICAgICAgIH1cbiAgLy8gICAgICAgICBjb25zb2xlLmxvZygnRElGRiBTSVRFJyk7XG4gIC8vICAgICAgICAgdGhpcy5jdXJyZW50U2l0ZSA9IHd1cmwoJ2RvbWFpbicsIHRhYi51cmwpO1xuICAvLyAgICAgICAgIHRoaXMuc3RhcnRJbnRlcnZhbCgpO1xuICAvLyAgICAgICB9XG4gIC8vICAgICB9KTtcbiAgLy8gICB9KTtcblxuICBpc1ZhbGlkUHJvdG9jb2wodXJsKSB7XG4gICAgY29uc3QgcHJvdG9jb2wgPSB3dXJsKCdwcm90b2NvbCcsIHVybCk7XG4gICAgcmV0dXJuIChcbiAgICAgIHByb3RvY29sID09PSAnaHR0cCcgfHwgcHJvdG9jb2wgPT09ICdodHRwcycgfHwgcHJvdG9jb2wgPT09ICdmdHAnXG4gICAgKTtcbiAgfVxuICBzYXZlUmVjb3JkcygpIHtcbiAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWxJZCk7XG4gICAgdGhpcy5pbnRlcnZhbElkID0gbnVsbDtcbiAgICBCTC5yZWNvbmNpbGVSZWNvcmRzKHRoaXMuY3VycmVudFNpdGUsIHRoaXMuZGJDb3VudGVyLCAxKTtcbiAgfVxuICBzdGFydEludGVydmFsKCkge1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbElkKTtcbiAgICB0aGlzLmNvdW50ZXIgPSAxO1xuICAgIHRoaXMuZGJDb3VudGVyID0gMTtcbiAgICB0aGlzLmludGVydmFsSWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBjb25zdCBub3cgPSBtb21lbnQoKS5mb3JtYXQoJ0RELU1NLVlZWVknKTtcbiAgICAgIGlmIChub3cgIT09IHRoaXMuY3VycmVudERhdGUpIHtcbiAgICAgICAgaWYgKHRoaXMuaW50ZXJ2YWxJZCAhPT0gbnVsbCkge1xuICAgICAgICAgIHRoaXMuc2F2ZVJlY29yZHMoKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBXaGF0ZXZlciBpdHMgbm90IGxpa2UgdGhpcyBuZWVkcyB0byBiZSBwcmVjaXNlXG4gICAgICAgIHRoaXMuY3VycmVudERhdGUgPSBub3c7XG4gICAgICAgIHRoaXMuc3RhcnRJbnRlcnZhbCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jb3VudGVyID0gdGhpcy5jb3VudGVyICs9IDE7XG4gICAgICAgIHRoaXMuZGJDb3VudGVyID0gdGhpcy5kYkNvdW50ZXIgKz0gMTtcbiAgICAgICAgaWYgKHRoaXMuZGJDb3VudGVyICUgNjAgPT09IDApIHtcbiAgICAgICAgICBCTC5yZWNvbmNpbGVSZWNvcmRzKHRoaXMuY3VycmVudFNpdGUsIHRoaXMuZGJDb3VudGVyLCAwKTtcbiAgICAgICAgICB0aGlzLmRiQ291bnRlciA9IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCAxMDAwKTtcbiAgfVxufVxuY29uc3QgcHJveHlUaW1lciA9IG5ldyBQcm94eShuZXcgVGltZXIoKSwge1xuICBzZXQodGFyZ2V0LCBrZXksIHZhbHVlKSB7XG4gICAgLy8gY29uc29sZS5sb2coYCR7a2V5fTogJHt2YWx1ZX1gKTtcbiAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59KTtcbmV4cG9ydCBkZWZhdWx0IHByb3h5VGltZXI7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy90aW1lci5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=