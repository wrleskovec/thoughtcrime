webpackJsonp([2],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _wurl = __webpack_require__(335);
	
	var _wurl2 = _interopRequireDefault(_wurl);
	
	var _blockList = __webpack_require__(301);
	
	var _blockList2 = _interopRequireDefault(_blockList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var BL = new _blockList2.default();
	BL.init();
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
	    BL.checkSite(site).then(function (record) {
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

/***/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC5qcyJdLCJuYW1lcyI6WyJCTCIsImluaXQiLCJCTE9DS0VEX1BBR0UiLCJsb2FkRmlsdGVyZWRQYWdlIiwidGFiSWQiLCJ1cmwiLCJjaHJvbWUiLCJ0YWJzIiwidXBkYXRlIiwidXJsQ2hlY2siLCJkZXRhaWxzIiwicHJvdG9jb2wiLCJzaXRlIiwiY2hlY2tTaXRlIiwidGhlbiIsInJlY29yZCIsImFjdGlvbiIsIndlYlJlcXVlc3QiLCJvbkJlZm9yZVJlcXVlc3QiLCJhZGRMaXN0ZW5lciIsInVybHMiLCJ0eXBlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0FBRUEsS0FBTUEsS0FBSyx5QkFBWDtBQUNBQSxJQUFHQyxJQUFIO0FBQ0EsS0FBTUMsZUFBZSxtQ0FBckI7O0FBRUEsVUFBU0MsZ0JBQVQsQ0FBMEJDLEtBQTFCLEVBQWlDQyxHQUFqQyxFQUFzQztBQUNwQ0MsVUFBT0MsSUFBUCxDQUFZQyxNQUFaLENBQW1CSixLQUFuQixFQUEwQjtBQUN4QkM7QUFEd0IsSUFBMUI7QUFHRDs7QUFFRCxVQUFTSSxRQUFULENBQWtCQyxPQUFsQixFQUEyQjtBQUN6QixPQUFNQyxXQUFXLG9CQUFLLFVBQUwsRUFBaUJELFFBQVFMLEdBQXpCLENBQWpCO0FBQ0EsT0FBSU0sYUFBYSxRQUFiLElBQXlCQSxhQUFhLGtCQUExQyxFQUE4RDtBQUM1RCxTQUFNQyxPQUFPLG9CQUFLLFFBQUwsRUFBZUYsUUFBUUwsR0FBdkIsQ0FBYjtBQUNBTCxRQUFHYSxTQUFILENBQWFELElBQWIsRUFDR0UsSUFESCxDQUNRLGtCQUFVO0FBQ2QsV0FBSUMsT0FBT0MsTUFBUCxLQUFrQixPQUF0QixFQUErQjtBQUM3QmIsMEJBQWlCTyxRQUFRTixLQUF6QixFQUFnQ0YsWUFBaEM7QUFDRDtBQUNGLE1BTEg7QUFNRDtBQUNELFVBQU8sRUFBUDtBQUNEOztBQUVESSxRQUFPVyxVQUFQLENBQWtCQyxlQUFsQixDQUFrQ0MsV0FBbEMsQ0FBOENWLFFBQTlDLEVBQXdEO0FBQ3REVyxTQUFNLENBQUMsWUFBRCxDQURnRDtBQUV0REMsVUFBTyxDQUFDLFlBQUQ7QUFGK0MsRUFBeEQsRSIsImZpbGUiOiJiYWNrZ3JvdW5kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHd1cmwgZnJvbSAnd3VybCc7XG5pbXBvcnQgQmxvY2tMaXN0IGZyb20gJy4vYmxvY2tMaXN0LmpzJztcblxuY29uc3QgQkwgPSBuZXcgQmxvY2tMaXN0KCk7XG5CTC5pbml0KCk7XG5jb25zdCBCTE9DS0VEX1BBR0UgPSAnaHR0cHM6Ly93d3cuZ2l0aHViLmNvbS93cmxlc2tvdmVjJztcblxuZnVuY3Rpb24gbG9hZEZpbHRlcmVkUGFnZSh0YWJJZCwgdXJsKSB7XG4gIGNocm9tZS50YWJzLnVwZGF0ZSh0YWJJZCwge1xuICAgIHVybFxuICB9KTtcbn1cblxuZnVuY3Rpb24gdXJsQ2hlY2soZGV0YWlscykge1xuICBjb25zdCBwcm90b2NvbCA9IHd1cmwoJ3Byb3RvY29sJywgZGV0YWlscy51cmwpO1xuICBpZiAocHJvdG9jb2wgIT09ICdjaHJvbWUnICYmIHByb3RvY29sICE9PSAnY2hyb21lLWV4dGVuc2lvbicpIHtcbiAgICBjb25zdCBzaXRlID0gd3VybCgnZG9tYWluJywgZGV0YWlscy51cmwpO1xuICAgIEJMLmNoZWNrU2l0ZShzaXRlKVxuICAgICAgLnRoZW4ocmVjb3JkID0+IHtcbiAgICAgICAgaWYgKHJlY29yZC5hY3Rpb24gPT09ICdibG9jaycpIHtcbiAgICAgICAgICBsb2FkRmlsdGVyZWRQYWdlKGRldGFpbHMudGFiSWQsIEJMT0NLRURfUEFHRSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG4gIHJldHVybiB7fTtcbn1cblxuY2hyb21lLndlYlJlcXVlc3Qub25CZWZvcmVSZXF1ZXN0LmFkZExpc3RlbmVyKHVybENoZWNrLCB7XG4gIHVybHM6IFsnPGFsbF91cmxzPiddLFxuICB0eXBlczogWydtYWluX2ZyYW1lJ11cbn0pO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYmFja2dyb3VuZC5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=