webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(33);
	
	var _redux = __webpack_require__(170);
	
	var _reactRedux = __webpack_require__(183);
	
	var _reduxSaga = __webpack_require__(192);
	
	var _reduxSaga2 = _interopRequireDefault(_reduxSaga);
	
	var _Options = __webpack_require__(204);
	
	var _Options2 = _interopRequireDefault(_Options);
	
	var _Options3 = __webpack_require__(206);
	
	var _Options4 = _interopRequireDefault(_Options3);
	
	var _optionsSagas = __webpack_require__(345);
	
	var _optionsSagas2 = _interopRequireDefault(_optionsSagas);
	
	__webpack_require__(476);
	
	__webpack_require__(485);
	
	__webpack_require__(487);
	
	var _blockList = __webpack_require__(351);
	
	var _blockList2 = _interopRequireDefault(_blockList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_blockList2.default.init().then(function () {
	  var sagaMiddleware = (0, _reduxSaga2.default)();
	  var store = (0, _redux.createStore)(_Options2.default, (0, _redux.applyMiddleware)(sagaMiddleware));
	  sagaMiddleware.run(_optionsSagas2.default);
	  (0, _reactDom.render)(_react2.default.createElement(
	    _reactRedux.Provider,
	    { store: store },
	    _react2.default.createElement(_Options4.default, null)
	  ), document.getElementById('OptionsApp'));
	});

/***/ },

/***/ 204:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = reducer;
	
	var _update = __webpack_require__(205);
	
	var _update2 = _interopRequireDefault(_update);
	
	var _blockList = __webpack_require__(351);
	
	var _blockList2 = _interopRequireDefault(_blockList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function reducer() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? { sites: _blockList2.default.fetchTodayStats(), message: '' } : arguments[0];
	  var action = arguments[1];
	
	  switch (action.type) {
	    case 'ADD_SITE_SUCCEEDED':
	      return (0, _update2.default)(state, {
	        message: { $set: action.message }
	      });
	    case 'ADD_SITE_FAILED':
	      return (0, _update2.default)(state, {
	        message: { $set: action.e }
	      });
	    case 'SITE_FETCH_UNSUCCESSFUL':
	      return (0, _update2.default)(state, {
	        message: { $set: action.e }
	      });
	    case 'SITE_FETCH_SUCCESSFUL':
	      return (0, _update2.default)(state, {
	        sites: { $set: action.sites }
	      });
	    default:
	      return state;
	  }
	}

/***/ },

/***/ 206:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getPrototypeOf = __webpack_require__(207);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(233);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(234);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(238);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(285);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(183);
	
	var _SiteTable = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../components/SiteTable.js\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _SiteTable2 = _interopRequireDefault(_SiteTable);
	
	var _InputBar = __webpack_require__(501);
	
	var _InputBar2 = _interopRequireDefault(_InputBar);
	
	var _common = __webpack_require__(344);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var OptionsApp = function (_React$Component) {
	  (0, _inherits3.default)(OptionsApp, _React$Component);
	
	  function OptionsApp(props) {
	    (0, _classCallCheck3.default)(this, OptionsApp);
	    return (0, _possibleConstructorReturn3.default)(this, (OptionsApp.__proto__ || (0, _getPrototypeOf2.default)(OptionsApp)).call(this, props));
	  }
	
	  (0, _createClass3.default)(OptionsApp, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {}
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { id: 'OptionsApp' },
	        _react2.default.createElement(
	          'div',
	          { className: 'container' },
	          _react2.default.createElement(
	            'div',
	            { className: 'row' },
	            _react2.default.createElement(
	              'div',
	              { className: 'col-md-4' },
	              _react2.default.createElement(_InputBar2.default, { addSite: this.props.addSite })
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'col-md-6' },
	              _react2.default.createElement(_SiteTable2.default, { sites: this.props.sites, maxEntry: 10 })
	            )
	          )
	        )
	      );
	    }
	  }]);
	  return OptionsApp;
	}(_react2.default.Component);
	
	exports.default = (0, _reactRedux.connect)(function (state) {
	  return {
	    sites: state.sites,
	    message: state.message
	  };
	}, function (dispatch) {
	  return {
	    addSite: function addSite(site) {
	      return dispatch((0, _common.addSite)(site));
	    },
	    fetchSites: function fetchSites() {
	      return dispatch((0, _common.fetchSites)());
	    }
	  };
	})(OptionsApp);

/***/ },

/***/ 345:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _regenerator = __webpack_require__(346);
	
	var _regenerator2 = _interopRequireDefault(_regenerator);
	
	exports.default = optionsSaga;
	
	var _effects = __webpack_require__(349);
	
	var _sagasDB = __webpack_require__(350);
	
	var sagas = _interopRequireWildcard(_sagasDB);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _marked = [optionsSaga].map(_regenerator2.default.mark);
	
	function optionsSaga() {
	  return _regenerator2.default.wrap(function optionsSaga$(_context) {
	    while (1) {
	      switch (_context.prev = _context.next) {
	        case 0:
	          _context.next = 2;
	          return (0, _effects.fork)(sagas.fetchSitesSaga);
	
	        case 2:
	          console.log('hi');
	          _context.next = 5;
	          return (0, _effects.fork)(sagas.addSiteSaga);
	
	        case 5:
	          console.log('hi again');
	
	        case 6:
	        case 'end':
	          return _context.stop();
	      }
	    }
	  }, _marked[0], this);
	}

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvT3B0aW9uc0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvT3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9PcHRpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9zYWdhcy9vcHRpb25zU2FnYXMuanMiXSwibmFtZXMiOlsiaW5pdCIsInRoZW4iLCJzYWdhTWlkZGxld2FyZSIsInN0b3JlIiwicnVuIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJlZHVjZXIiLCJzdGF0ZSIsInNpdGVzIiwiZmV0Y2hUb2RheVN0YXRzIiwibWVzc2FnZSIsImFjdGlvbiIsInR5cGUiLCIkc2V0IiwiZSIsIk9wdGlvbnNBcHAiLCJwcm9wcyIsImFkZFNpdGUiLCJDb21wb25lbnQiLCJkaXNwYXRjaCIsInNpdGUiLCJmZXRjaFNpdGVzIiwib3B0aW9uc1NhZ2EiLCJzYWdhcyIsImZldGNoU2l0ZXNTYWdhIiwiY29uc29sZSIsImxvZyIsImFkZFNpdGVTYWdhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7QUFHQSxxQkFBR0EsSUFBSCxHQUFVQyxJQUFWLENBQWUsWUFBTTtBQUNuQixPQUFNQyxpQkFBaUIsMEJBQXZCO0FBQ0EsT0FBTUMsUUFBUSwyQ0FBcUIsNEJBQWdCRCxjQUFoQixDQUFyQixDQUFkO0FBQ0FBLGtCQUFlRSxHQUFmO0FBQ0EseUJBQ0U7QUFBQTtBQUFBLE9BQVUsT0FBT0QsS0FBakI7QUFDRTtBQURGLElBREYsRUFJRUUsU0FBU0MsY0FBVCxDQUF3QixZQUF4QixDQUpGO0FBTUQsRUFWRCxFOzs7Ozs7Ozs7Ozs7bUJDWHdCQyxPOztBQUh4Qjs7OztBQUNBOzs7Ozs7QUFFZSxVQUFTQSxPQUFULEdBQStFO0FBQUEsT0FBOURDLEtBQThELHlEQUF0RCxFQUFFQyxPQUFPLG9CQUFHQyxlQUFILEVBQVQsRUFBK0JDLFNBQVMsRUFBeEMsRUFBc0Q7QUFBQSxPQUFSQyxNQUFROztBQUM1RixXQUFRQSxPQUFPQyxJQUFmO0FBQ0UsVUFBSyxvQkFBTDtBQUNFLGNBQU8sc0JBQU9MLEtBQVAsRUFBYztBQUNuQkcsa0JBQVMsRUFBRUcsTUFBTUYsT0FBT0QsT0FBZjtBQURVLFFBQWQsQ0FBUDtBQUdGLFVBQUssaUJBQUw7QUFDRSxjQUFPLHNCQUFPSCxLQUFQLEVBQWM7QUFDbkJHLGtCQUFTLEVBQUVHLE1BQU1GLE9BQU9HLENBQWY7QUFEVSxRQUFkLENBQVA7QUFHRixVQUFLLHlCQUFMO0FBQ0UsY0FBTyxzQkFBT1AsS0FBUCxFQUFjO0FBQ25CRyxrQkFBUyxFQUFFRyxNQUFNRixPQUFPRyxDQUFmO0FBRFUsUUFBZCxDQUFQO0FBR0YsVUFBSyx1QkFBTDtBQUNFLGNBQU8sc0JBQU9QLEtBQVAsRUFBYztBQUNuQkMsZ0JBQU8sRUFBRUssTUFBTUYsT0FBT0gsS0FBZjtBQURZLFFBQWQsQ0FBUDtBQUdGO0FBQ0UsY0FBT0QsS0FBUDtBQWxCSjtBQW9CRCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QkQ7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7S0FFTVEsVTs7O0FBQ0osdUJBQVlDLEtBQVosRUFBbUI7QUFBQTtBQUFBLDBJQUNYQSxLQURXO0FBRWxCOzs7OzBDQUNvQixDQUNwQjs7OzhCQUVRO0FBQ1AsY0FDRTtBQUFBO0FBQUEsV0FBSyxJQUFHLFlBQVI7QUFDRTtBQUFBO0FBQUEsYUFBSyxXQUFVLFdBQWY7QUFDRTtBQUFBO0FBQUEsZUFBSyxXQUFVLEtBQWY7QUFDRTtBQUFBO0FBQUEsaUJBQUssV0FBVSxVQUFmO0FBQ0UsbUVBQVUsU0FBUyxLQUFLQSxLQUFMLENBQVdDLE9BQTlCO0FBREYsY0FERjtBQUlFO0FBQUE7QUFBQSxpQkFBSyxXQUFVLFVBQWY7QUFDRSxvRUFBVyxPQUFPLEtBQUtELEtBQUwsQ0FBV1IsS0FBN0IsRUFBb0MsVUFBVSxFQUE5QztBQURGO0FBSkY7QUFERjtBQURGLFFBREY7QUFjRDs7O0dBdEJzQixnQkFBTVUsUzs7bUJBeUJoQix5QkFDYjtBQUFBLFVBQ0U7QUFDRVYsWUFBT0QsTUFBTUMsS0FEZjtBQUVFRSxjQUFTSCxNQUFNRztBQUZqQixJQURGO0FBQUEsRUFEYSxFQU9iO0FBQUEsVUFDRTtBQUNFTyxjQUFTO0FBQUEsY0FBUUUsU0FBUyxxQkFBUUMsSUFBUixDQUFULENBQVI7QUFBQSxNQURYO0FBRUVDLGlCQUFZO0FBQUEsY0FBTUYsU0FBUyx5QkFBVCxDQUFOO0FBQUE7QUFGZCxJQURGO0FBQUEsRUFQYSxFQWFiSixVQWJhLEM7Ozs7Ozs7Ozs7Ozs7Ozs7O21CQzdCVU8sVzs7QUFIekI7O0FBQ0E7O0tBQVlDLEs7Ozs7OztnQkFFYUQsVzs7QUFBVixVQUFVQSxXQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUNQLG1CQUFLQyxNQUFNQyxjQUFYLENBRE87O0FBQUE7QUFFYkMsbUJBQVFDLEdBQVIsQ0FBWSxJQUFaO0FBRmE7QUFBQSxrQkFHUCxtQkFBS0gsTUFBTUksV0FBWCxDQUhPOztBQUFBO0FBSWJGLG1CQUFRQyxHQUFSLENBQVksVUFBWjs7QUFKYTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFIiwiZmlsZSI6Ik9wdGlvbnNBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSBmcm9tICdyZWR1eC1zYWdhJztcbmltcG9ydCByZWR1Y2VyIGZyb20gJy4vcmVkdWNlcnMvT3B0aW9ucy5qcyc7XG5pbXBvcnQgT3B0aW9uc0FwcCBmcm9tICcuL2NvbnRhaW5lcnMvT3B0aW9ucy5qcyc7XG5pbXBvcnQgb3B0aW9uc1NhZ2FzIGZyb20gJy4vc2FnYXMvb3B0aW9uc1NhZ2FzLmpzJztcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJztcbmltcG9ydCAnanF1ZXJ5L2pxdWVyeS5taW4uanMnO1xuaW1wb3J0ICdib290c3RyYXAvZGlzdC9qcy9ib290c3RyYXAubWluLmpzJztcbmltcG9ydCBCTCBmcm9tICcuL2Jsb2NrTGlzdC5qcyc7XG5cblxuQkwuaW5pdCgpLnRoZW4oKCkgPT4ge1xuICBjb25zdCBzYWdhTWlkZGxld2FyZSA9IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlKCk7XG4gIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlciwgYXBwbHlNaWRkbGV3YXJlKHNhZ2FNaWRkbGV3YXJlKSk7XG4gIHNhZ2FNaWRkbGV3YXJlLnJ1bihvcHRpb25zU2FnYXMpO1xuICByZW5kZXIoXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICA8T3B0aW9uc0FwcCAvPlxuICAgIDwvUHJvdmlkZXI+LFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdPcHRpb25zQXBwJylcbiAgKTtcbn0pO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvT3B0aW9uc0FwcC5qc1xuICoqLyIsImltcG9ydCB1cGRhdGUgZnJvbSAncmVhY3QvbGliL3VwZGF0ZSc7XG5pbXBvcnQgQkwgZnJvbSAnLi4vYmxvY2tMaXN0LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IHsgc2l0ZXM6IEJMLmZldGNoVG9kYXlTdGF0cygpLCBtZXNzYWdlOiAnJyB9LCBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ0FERF9TSVRFX1NVQ0NFRURFRCc6XG4gICAgICByZXR1cm4gdXBkYXRlKHN0YXRlLCB7XG4gICAgICAgIG1lc3NhZ2U6IHsgJHNldDogYWN0aW9uLm1lc3NhZ2UgfVxuICAgICAgfSk7XG4gICAgY2FzZSAnQUREX1NJVEVfRkFJTEVEJzpcbiAgICAgIHJldHVybiB1cGRhdGUoc3RhdGUsIHtcbiAgICAgICAgbWVzc2FnZTogeyAkc2V0OiBhY3Rpb24uZSB9XG4gICAgICB9KTtcbiAgICBjYXNlICdTSVRFX0ZFVENIX1VOU1VDQ0VTU0ZVTCc6XG4gICAgICByZXR1cm4gdXBkYXRlKHN0YXRlLCB7XG4gICAgICAgIG1lc3NhZ2U6IHsgJHNldDogYWN0aW9uLmUgfVxuICAgICAgfSk7XG4gICAgY2FzZSAnU0lURV9GRVRDSF9TVUNDRVNTRlVMJzpcbiAgICAgIHJldHVybiB1cGRhdGUoc3RhdGUsIHtcbiAgICAgICAgc2l0ZXM6IHsgJHNldDogYWN0aW9uLnNpdGVzIH1cbiAgICAgIH0pO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3JlZHVjZXJzL09wdGlvbnMuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBTaXRlVGFibGUgZnJvbSAnLi4vY29tcG9uZW50cy9TaXRlVGFibGUuanMnO1xuaW1wb3J0IElucHV0QmFyIGZyb20gJy4uL2NvbXBvbmVudHMvSW5wdXRCYXIuanMnO1xuXG5pbXBvcnQgeyBhZGRTaXRlLCBmZXRjaFNpdGVzIH0gZnJvbSAnLi4vYWN0aW9ucy9jb21tb24uanMnO1xuXG5jbGFzcyBPcHRpb25zQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGlkPVwiT3B0aW9uc0FwcFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XG4gICAgICAgICAgICAgIDxJbnB1dEJhciBhZGRTaXRlPXt0aGlzLnByb3BzLmFkZFNpdGV9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgPFNpdGVUYWJsZSBzaXRlcz17dGhpcy5wcm9wcy5zaXRlc30gbWF4RW50cnk9ezEwfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBzdGF0ZSA9PiAoXG4gICAge1xuICAgICAgc2l0ZXM6IHN0YXRlLnNpdGVzLFxuICAgICAgbWVzc2FnZTogc3RhdGUubWVzc2FnZVxuICAgIH1cbiAgKSxcbiAgZGlzcGF0Y2ggPT4gKFxuICAgIHtcbiAgICAgIGFkZFNpdGU6IHNpdGUgPT4gZGlzcGF0Y2goYWRkU2l0ZShzaXRlKSksXG4gICAgICBmZXRjaFNpdGVzOiAoKSA9PiBkaXNwYXRjaChmZXRjaFNpdGVzKCkpXG4gICAgfVxuICApXG4pKE9wdGlvbnNBcHApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29udGFpbmVycy9PcHRpb25zLmpzXG4gKiovIiwiaW1wb3J0IHsgZm9yayB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XG5pbXBvcnQgKiBhcyBzYWdhcyBmcm9tICcuL3NhZ2FzREIuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogb3B0aW9uc1NhZ2EoKSB7XG4gIHlpZWxkIGZvcmsoc2FnYXMuZmV0Y2hTaXRlc1NhZ2EpO1xuICBjb25zb2xlLmxvZygnaGknKTtcbiAgeWllbGQgZm9yayhzYWdhcy5hZGRTaXRlU2FnYSk7XG4gIGNvbnNvbGUubG9nKCdoaSBhZ2FpbicpO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc2FnYXMvb3B0aW9uc1NhZ2FzLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==