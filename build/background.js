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
	          if (tabSite !== _this.currentSite && tabSite !== undefined) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGltZXIuanMiXSwibmFtZXMiOlsic2l0ZVRpbWVyIiwiaW5pdCIsInRoZW4iLCJCTE9DS0VEX1BBR0UiLCJsb2FkRmlsdGVyZWRQYWdlIiwidGFiSWQiLCJ1cmwiLCJjaHJvbWUiLCJ0YWJzIiwidXBkYXRlIiwidXJsQ2hlY2siLCJkZXRhaWxzIiwicHJvdG9jb2wiLCJzaXRlIiwiZ2V0UmVjb3JkIiwicmVjb3JkIiwiYWN0aW9uIiwiY2F0Y2giLCJjb25zb2xlIiwibG9nIiwiZXJyIiwid2ViUmVxdWVzdCIsIm9uQmVmb3JlUmVxdWVzdCIsImFkZExpc3RlbmVyIiwidXJscyIsInR5cGVzIiwiVGltZXIiLCJjdXJyZW50U2l0ZSIsIndpbmRvd0ZvY3VzIiwiY291bnRlciIsImRiQ291bnRlciIsImludGVydmFsSWQiLCJjdXJyZW50RGF0ZSIsImZvcm1hdCIsIndpbmRvd3MiLCJvbkZvY3VzQ2hhbmdlZCIsIldJTkRPV19JRF9OT05FIiwic3RvcEludGVydmFsIiwicmVjb25jaWxlUmVjb3JkcyIsIm9uUmVtb3ZlZCIsIm9uQWN0aXZhdGVkIiwiZ2V0IiwiYWN0aXZlSW5mbyIsInRhYiIsInN0YXJ0SW50ZXJ2YWwiLCJvblVwZGF0ZWQiLCJjaGFuZ2VJbmZvIiwidGFiU2l0ZSIsInVuZGVmaW5lZCIsImNsZWFySW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInNlY29uZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsS0FBTUEsWUFBWSxxQkFBbEI7QUFDQSxxQkFBR0MsSUFBSCxHQUFVQyxJQUFWLENBQWUsWUFBTTtBQUNuQkYsYUFBVUMsSUFBVjtBQUNELEVBRkQ7O0FBSUEsS0FBTUUsZUFBZSxtQ0FBckI7O0FBRUEsVUFBU0MsZ0JBQVQsQ0FBMEJDLEtBQTFCLEVBQWlDQyxHQUFqQyxFQUFzQztBQUNwQ0MsVUFBT0MsSUFBUCxDQUFZQyxNQUFaLENBQW1CSixLQUFuQixFQUEwQjtBQUN4QkM7QUFEd0IsSUFBMUI7QUFHRDs7QUFFRCxVQUFTSSxRQUFULENBQWtCQyxPQUFsQixFQUEyQjtBQUN6QixPQUFNQyxXQUFXLG9CQUFLLFVBQUwsRUFBaUJELFFBQVFMLEdBQXpCLENBQWpCO0FBQ0EsT0FBSU0sYUFBYSxRQUFiLElBQXlCQSxhQUFhLGtCQUExQyxFQUE4RDtBQUM1RCxTQUFNQyxPQUFPLG9CQUFLLFFBQUwsRUFBZUYsUUFBUUwsR0FBdkIsQ0FBYjtBQUNBLHlCQUFHUSxTQUFILENBQWFELElBQWIsRUFDR1gsSUFESCxDQUNRLGtCQUFVO0FBQ2QsV0FBSWEsT0FBT0MsTUFBUCxLQUFrQixPQUF0QixFQUErQjtBQUM3QlosMEJBQWlCTyxRQUFRTixLQUF6QixFQUFnQ0YsWUFBaEM7QUFDRDtBQUNGLE1BTEgsRUFNR2MsS0FOSCxDQU1TLGVBQU87QUFDWkMsZUFBUUMsR0FBUixDQUFZQyxHQUFaO0FBQ0QsTUFSSDtBQVNEO0FBQ0QsVUFBTyxFQUFQO0FBQ0Q7O0FBRURiLFFBQU9jLFVBQVAsQ0FBa0JDLGVBQWxCLENBQWtDQyxXQUFsQyxDQUE4Q2IsUUFBOUMsRUFBd0Q7QUFDdERjLFNBQU0sQ0FBQyxZQUFELENBRGdEO0FBRXREQyxVQUFPLENBQUMsWUFBRDtBQUYrQyxFQUF4RCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7S0FFcUJDLEs7QUFDbkIsb0JBQWM7QUFBQTs7QUFDWixVQUFLQyxXQUFMLEdBQW1CLElBQW5CO0FBQ0EsVUFBS0MsV0FBTCxHQUFtQixJQUFuQjtBQUNBLFVBQUtDLE9BQUwsR0FBZSxDQUFmO0FBQ0EsVUFBS0MsU0FBTCxHQUFpQixDQUFqQjtBQUNBLFVBQUtDLFVBQUwsR0FBa0IsSUFBbEI7QUFDQSxVQUFLQyxXQUFMLEdBQW1CLHdCQUFTQyxNQUFULENBQWdCLFlBQWhCLENBQW5CO0FBQ0Q7Ozs7NEJBQ007QUFBQTs7QUFDSDtBQUNGMUIsY0FBTzJCLE9BQVAsQ0FBZUMsY0FBZixDQUE4QlosV0FBOUIsQ0FBMEMsWUFBTTtBQUM5QyxhQUFJaEIsT0FBTzJCLE9BQVAsQ0FBZUUsY0FBbkIsRUFBbUM7QUFDakMsaUJBQUtSLFdBQUwsR0FBbUIsS0FBbkI7QUFDQSxlQUFJLE1BQUtELFdBQUwsS0FBcUIsSUFBekIsRUFBK0I7QUFDN0IsbUJBQUtVLFlBQUw7QUFDQSxpQ0FBR0MsZ0JBQUgsQ0FBb0IsTUFBS1gsV0FBekIsRUFBc0MsTUFBS0UsT0FBM0M7QUFDRDtBQUNELGlCQUFLRixXQUFMLEdBQW1CLElBQW5CO0FBQ0QsVUFQRCxNQU9PO0FBQ0wsaUJBQUtDLFdBQUwsR0FBbUIsSUFBbkI7QUFDRDtBQUNGLFFBWEQ7QUFZQTtBQUNBckIsY0FBTzJCLE9BQVAsQ0FBZUssU0FBZixDQUF5QmhCLFdBQXpCLENBQXFDLFlBQU07QUFDekM7QUFDRCxRQUZEO0FBR0FoQixjQUFPQyxJQUFQLENBQVlnQyxXQUFaLENBQXdCakIsV0FBeEIsQ0FBb0Msc0JBQWM7QUFDaERoQixnQkFBT0MsSUFBUCxDQUFZaUMsR0FBWixDQUFnQkMsV0FBV3JDLEtBQTNCLEVBQWtDLGVBQU87QUFDdkMsZUFBTU8sV0FBVyxvQkFBSyxVQUFMLEVBQWlCK0IsSUFBSXJDLEdBQXJCLENBQWpCO0FBQ0EsZUFBSU0sYUFBYSxRQUFiLElBQXlCQSxhQUFhLGtCQUExQyxFQUE4RDtBQUM1RE0scUJBQVFDLEdBQVIsQ0FBWSxPQUFaO0FBQ0QsWUFGRCxNQUVPLElBQUksb0JBQUssUUFBTCxFQUFld0IsSUFBSXJDLEdBQW5CLE1BQTRCLE1BQUtxQixXQUFyQyxFQUFrRDtBQUN2RFQscUJBQVFDLEdBQVIsQ0FBWSxXQUFaO0FBQ0QsWUFGTSxNQUVBO0FBQ0wsaUJBQUksTUFBS1EsV0FBTCxLQUFxQixJQUF6QixFQUErQjtBQUM3QixxQkFBS1UsWUFBTDtBQUNBLG1DQUFHQyxnQkFBSCxDQUFvQixNQUFLWCxXQUF6QixFQUFzQyxNQUFLRSxPQUEzQztBQUNEO0FBQ0RYLHFCQUFRQyxHQUFSLENBQVksV0FBWjtBQUNBLG1CQUFLUSxXQUFMLEdBQW1CLG9CQUFLLFFBQUwsRUFBZWdCLElBQUlyQyxHQUFuQixDQUFuQjtBQUNBLG1CQUFLc0MsYUFBTDtBQUNEO0FBQ0YsVUFmRDtBQWdCRCxRQWpCRDtBQWtCQXJDLGNBQU9DLElBQVAsQ0FBWXFDLFNBQVosQ0FBc0J0QixXQUF0QixDQUFrQyxVQUFDbEIsS0FBRCxFQUFReUMsVUFBUixFQUFvQkgsR0FBcEIsRUFBNEI7QUFDNUQsYUFBSSxDQUFDQSxJQUFJckMsR0FBVCxFQUFjO0FBQ1pZLG1CQUFRQyxHQUFSLENBQVksaUJBQVo7QUFDRCxVQUZELE1BRU87QUFDTCxlQUFNNEIsVUFBVSxvQkFBSyxRQUFMLEVBQWVKLElBQUlyQyxHQUFuQixDQUFoQjtBQUNBLGVBQUl5QyxZQUFZLE1BQUtwQixXQUFqQixJQUFnQ29CLFlBQVlDLFNBQWhELEVBQTJEO0FBQ3pELG1CQUFLckIsV0FBTCxHQUFtQm9CLE9BQW5CO0FBQ0E3QixxQkFBUUMsR0FBUixDQUFZLE1BQUtRLFdBQWpCO0FBQ0EsbUJBQUtpQixhQUFMO0FBQ0Q7QUFDRjtBQUNGLFFBWEQ7QUFZRDs7O29DQUVjO0FBQ2JLLHFCQUFjLEtBQUtsQixVQUFuQjtBQUNEOzs7cUNBQ2U7QUFBQTs7QUFDZCxZQUFLRixPQUFMLEdBQWUsQ0FBZjtBQUNBLFlBQUtDLFNBQUwsR0FBaUIsQ0FBakI7QUFDQSxXQUFJLEVBQUUsS0FBS0MsVUFBTCxLQUFvQixJQUF0QixDQUFKLEVBQWlDa0IsY0FBYyxLQUFLbEIsVUFBbkI7QUFDakMsWUFBS0EsVUFBTCxHQUFrQm1CLFlBQVksWUFBTTtBQUNsQyxnQkFBS3JCLE9BQUwsR0FBZSxPQUFLQSxPQUFMLElBQWdCLENBQS9CO0FBQ0EsZ0JBQUtDLFNBQUwsR0FBaUIsT0FBS0EsU0FBTCxJQUFrQixDQUFuQztBQUNBWixpQkFBUUMsR0FBUixDQUFZLHdCQUFTZ0MsTUFBVCxDQUFnQixPQUFLdEIsT0FBckIsRUFBOEJJLE1BQTlCLENBQXFDLGNBQXJDLENBQVo7QUFDRCxRQUppQixFQUlmLElBSmUsQ0FBbEI7QUFLRDs7Ozs7bUJBdkVrQlAsSyIsImZpbGUiOiJiYWNrZ3JvdW5kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHd1cmwgZnJvbSAnd3VybCc7XG5pbXBvcnQgQkwgZnJvbSAnLi9ibG9ja0xpc3QuanMnO1xuaW1wb3J0IFRpbWVyIGZyb20gJy4vdGltZXIuanMnO1xuXG5jb25zdCBzaXRlVGltZXIgPSBuZXcgVGltZXIoKTtcbkJMLmluaXQoKS50aGVuKCgpID0+IHtcbiAgc2l0ZVRpbWVyLmluaXQoKTtcbn0pO1xuXG5jb25zdCBCTE9DS0VEX1BBR0UgPSAnaHR0cHM6Ly93d3cuZ2l0aHViLmNvbS93cmxlc2tvdmVjJztcblxuZnVuY3Rpb24gbG9hZEZpbHRlcmVkUGFnZSh0YWJJZCwgdXJsKSB7XG4gIGNocm9tZS50YWJzLnVwZGF0ZSh0YWJJZCwge1xuICAgIHVybFxuICB9KTtcbn1cblxuZnVuY3Rpb24gdXJsQ2hlY2soZGV0YWlscykge1xuICBjb25zdCBwcm90b2NvbCA9IHd1cmwoJ3Byb3RvY29sJywgZGV0YWlscy51cmwpO1xuICBpZiAocHJvdG9jb2wgIT09ICdjaHJvbWUnICYmIHByb3RvY29sICE9PSAnY2hyb21lLWV4dGVuc2lvbicpIHtcbiAgICBjb25zdCBzaXRlID0gd3VybCgnZG9tYWluJywgZGV0YWlscy51cmwpO1xuICAgIEJMLmdldFJlY29yZChzaXRlKVxuICAgICAgLnRoZW4ocmVjb3JkID0+IHtcbiAgICAgICAgaWYgKHJlY29yZC5hY3Rpb24gPT09ICdibG9jaycpIHtcbiAgICAgICAgICBsb2FkRmlsdGVyZWRQYWdlKGRldGFpbHMudGFiSWQsIEJMT0NLRURfUEFHRSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH0pO1xuICB9XG4gIHJldHVybiB7fTtcbn1cblxuY2hyb21lLndlYlJlcXVlc3Qub25CZWZvcmVSZXF1ZXN0LmFkZExpc3RlbmVyKHVybENoZWNrLCB7XG4gIHVybHM6IFsnPGFsbF91cmxzPiddLFxuICB0eXBlczogWydtYWluX2ZyYW1lJ11cbn0pO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYmFja2dyb3VuZC5qc1xuICoqLyIsImltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCBCTCBmcm9tICcuL2Jsb2NrTGlzdC5qcyc7XG5pbXBvcnQgd3VybCBmcm9tICd3dXJsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGltZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmN1cnJlbnRTaXRlID0gbnVsbDtcbiAgICB0aGlzLndpbmRvd0ZvY3VzID0gdHJ1ZTtcbiAgICB0aGlzLmNvdW50ZXIgPSAxO1xuICAgIHRoaXMuZGJDb3VudGVyID0gMTtcbiAgICB0aGlzLmludGVydmFsSWQgPSBudWxsO1xuICAgIHRoaXMuY3VycmVudERhdGUgPSBtb21lbnQoKS5mb3JtYXQoJ0RELU1NLVlZWVknKTtcbiAgfVxuICBpbml0KCkge1xuICAgICAgLy8gY2hlY2tpbmcgaWYgd2luZG93IGlzIHVuZm9jdXNlZFxuICAgIGNocm9tZS53aW5kb3dzLm9uRm9jdXNDaGFuZ2VkLmFkZExpc3RlbmVyKCgpID0+IHtcbiAgICAgIGlmIChjaHJvbWUud2luZG93cy5XSU5ET1dfSURfTk9ORSkge1xuICAgICAgICB0aGlzLndpbmRvd0ZvY3VzID0gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRTaXRlICE9PSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5zdG9wSW50ZXJ2YWwoKTtcbiAgICAgICAgICBCTC5yZWNvbmNpbGVSZWNvcmRzKHRoaXMuY3VycmVudFNpdGUsIHRoaXMuY291bnRlcik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jdXJyZW50U2l0ZSA9IG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLndpbmRvd0ZvY3VzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBjaGVja2luZyBpZiB3aW5kb3cgY2xvc2VkXG4gICAgY2hyb21lLndpbmRvd3Mub25SZW1vdmVkLmFkZExpc3RlbmVyKCgpID0+IHtcbiAgICAgIC8vXG4gICAgfSk7XG4gICAgY2hyb21lLnRhYnMub25BY3RpdmF0ZWQuYWRkTGlzdGVuZXIoYWN0aXZlSW5mbyA9PiB7XG4gICAgICBjaHJvbWUudGFicy5nZXQoYWN0aXZlSW5mby50YWJJZCwgdGFiID0+IHtcbiAgICAgICAgY29uc3QgcHJvdG9jb2wgPSB3dXJsKCdwcm90b2NvbCcsIHRhYi51cmwpO1xuICAgICAgICBpZiAocHJvdG9jb2wgPT09ICdjaHJvbWUnIHx8IHByb3RvY29sID09PSAnY2hyb21lLWV4dGVuc2lvbicpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnTk9JQ0UnKTtcbiAgICAgICAgfSBlbHNlIGlmICh3dXJsKCdkb21haW4nLCB0YWIudXJsKSA9PT0gdGhpcy5jdXJyZW50U2l0ZSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdTQU1FIFNJVEUnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAodGhpcy5jdXJyZW50U2l0ZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5zdG9wSW50ZXJ2YWwoKTtcbiAgICAgICAgICAgIEJMLnJlY29uY2lsZVJlY29yZHModGhpcy5jdXJyZW50U2l0ZSwgdGhpcy5jb3VudGVyKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc29sZS5sb2coJ0RJRkYgU0lURScpO1xuICAgICAgICAgIHRoaXMuY3VycmVudFNpdGUgPSB3dXJsKCdkb21haW4nLCB0YWIudXJsKTtcbiAgICAgICAgICB0aGlzLnN0YXJ0SW50ZXJ2YWwoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgY2hyb21lLnRhYnMub25VcGRhdGVkLmFkZExpc3RlbmVyKCh0YWJJZCwgY2hhbmdlSW5mbywgdGFiKSA9PiB7XG4gICAgICBpZiAoIXRhYi51cmwpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ05vdCBhIHZhbGlkIHVybCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgdGFiU2l0ZSA9IHd1cmwoJ2RvbWFpbicsIHRhYi51cmwpO1xuICAgICAgICBpZiAodGFiU2l0ZSAhPT0gdGhpcy5jdXJyZW50U2l0ZSAmJiB0YWJTaXRlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmN1cnJlbnRTaXRlID0gdGFiU2l0ZTtcbiAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmN1cnJlbnRTaXRlKTtcbiAgICAgICAgICB0aGlzLnN0YXJ0SW50ZXJ2YWwoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc3RvcEludGVydmFsKCkge1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbElkKTtcbiAgfVxuICBzdGFydEludGVydmFsKCkge1xuICAgIHRoaXMuY291bnRlciA9IDE7XG4gICAgdGhpcy5kYkNvdW50ZXIgPSAxO1xuICAgIGlmICghKHRoaXMuaW50ZXJ2YWxJZCA9PT0gbnVsbCkpIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbElkKTtcbiAgICB0aGlzLmludGVydmFsSWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICB0aGlzLmNvdW50ZXIgPSB0aGlzLmNvdW50ZXIgKz0gMTtcbiAgICAgIHRoaXMuZGJDb3VudGVyID0gdGhpcy5kYkNvdW50ZXIgKz0gMTtcbiAgICAgIGNvbnNvbGUubG9nKG1vbWVudCgpLnNlY29uZCh0aGlzLmNvdW50ZXIpLmZvcm1hdCgnSEggOiBtbSA6IHNzJykpO1xuICAgIH0sIDEwMDApO1xuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy90aW1lci5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=