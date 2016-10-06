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
	
	var _optionsSagas = __webpack_require__(295);
	
	var _optionsSagas2 = _interopRequireDefault(_optionsSagas);
	
	__webpack_require__(319);
	
	__webpack_require__(328);
	
	__webpack_require__(330);
	
	var _blockList = __webpack_require__(301);
	
	var _blockList2 = _interopRequireDefault(_blockList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var sagaMiddleware = (0, _reduxSaga2.default)();
	var store = (0, _redux.createStore)(_Options2.default, (0, _redux.applyMiddleware)(sagaMiddleware));
	_blockList2.default.init().then(function () {
	  sagaMiddleware.run(_optionsSagas2.default);
	});
	
	(0, _reactDom.render)(_react2.default.createElement(
	  _reactRedux.Provider,
	  { store: store },
	  _react2.default.createElement(_Options4.default, null)
	), document.getElementById('OptionsApp'));

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
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function reducer() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? { sites: [], message: '' } : arguments[0];
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
	
	var _PatternList = __webpack_require__(293);
	
	var _PatternList2 = _interopRequireDefault(_PatternList);
	
	var _common = __webpack_require__(294);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var OptionsApp = function (_React$Component) {
	  (0, _inherits3.default)(OptionsApp, _React$Component);
	
	  function OptionsApp(props) {
	    (0, _classCallCheck3.default)(this, OptionsApp);
	
	    var _this = (0, _possibleConstructorReturn3.default)(this, (OptionsApp.__proto__ || (0, _getPrototypeOf2.default)(OptionsApp)).call(this, props));
	
	    _this.onSubmitPattern = _this.onSubmitPattern.bind(_this);
	    return _this;
	  }
	
	  (0, _createClass3.default)(OptionsApp, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var fetchSites = this.props.fetchSites;
	
	      fetchSites();
	    }
	  }, {
	    key: 'onSubmitPattern',
	    value: function onSubmitPattern(e) {
	      var addSite = this.props.addSite;
	
	      e.preventDefault();
	      addSite(this.refs.patternInput.value.trim());
	      this.refs.patternInput.value = '';
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var listOfPatterns = void 0;
	      if (this.props.sites) {
	        listOfPatterns = _react2.default.createElement(_PatternList2.default, { sites: this.props.sites });
	      } else {
	        listOfPatterns = {};
	      }
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
	              _react2.default.createElement(
	                'form',
	                { onSubmit: this.onSubmitPattern },
	                _react2.default.createElement(
	                  'div',
	                  { className: 'input-group' },
	                  _react2.default.createElement('input', {
	                    type: 'text', className: 'form-control', name: 'patternInput', ref: 'patternInput'
	                  }),
	                  _react2.default.createElement(
	                    'span',
	                    { className: 'input-group-btn' },
	                    _react2.default.createElement('input', { type: 'submit', className: 'btn btn-default', value: 'Add' })
	                  )
	                )
	              ),
	              _react2.default.createElement('div', { className: 'alert alert-warning', role: 'alert' })
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'col-md-6' },
	              listOfPatterns
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

/***/ 293:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = PatternList;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function PatternList(_ref) {
	  var sites = _ref.sites;
	
	  var count = 0;
	  console.log(sites);
	  return _react2.default.createElement(
	    "ul",
	    { className: "list-group" },
	    sites.map(function (p) {
	      return _react2.default.createElement(
	        "li",
	        { className: "list-group-item", key: count++ },
	        p.site
	      );
	    })
	  );
	}

/***/ },

/***/ 295:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _regenerator = __webpack_require__(296);
	
	var _regenerator2 = _interopRequireDefault(_regenerator);
	
	exports.default = optionsSaga;
	
	var _effects = __webpack_require__(299);
	
	var _sagasDB = __webpack_require__(300);
	
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvT3B0aW9uc0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvT3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9PcHRpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1BhdHRlcm5MaXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9zYWdhcy9vcHRpb25zU2FnYXMuanMiXSwibmFtZXMiOlsic2FnYU1pZGRsZXdhcmUiLCJzdG9yZSIsImluaXQiLCJ0aGVuIiwicnVuIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJlZHVjZXIiLCJzdGF0ZSIsInNpdGVzIiwibWVzc2FnZSIsImFjdGlvbiIsInR5cGUiLCIkc2V0IiwiZSIsIk9wdGlvbnNBcHAiLCJwcm9wcyIsIm9uU3VibWl0UGF0dGVybiIsImJpbmQiLCJmZXRjaFNpdGVzIiwiYWRkU2l0ZSIsInByZXZlbnREZWZhdWx0IiwicmVmcyIsInBhdHRlcm5JbnB1dCIsInZhbHVlIiwidHJpbSIsImxpc3RPZlBhdHRlcm5zIiwiQ29tcG9uZW50IiwiZGlzcGF0Y2giLCJzaXRlIiwiUGF0dGVybkxpc3QiLCJjb3VudCIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJwIiwib3B0aW9uc1NhZ2EiLCJzYWdhcyIsImZldGNoU2l0ZXNTYWdhIiwiYWRkU2l0ZVNhZ2EiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBLEtBQU1BLGlCQUFpQiwwQkFBdkI7QUFDQSxLQUFNQyxRQUFRLDJDQUFxQiw0QkFBZ0JELGNBQWhCLENBQXJCLENBQWQ7QUFDQSxxQkFBR0UsSUFBSCxHQUFVQyxJQUFWLENBQWUsWUFBTTtBQUNuQkgsa0JBQWVJLEdBQWY7QUFDRCxFQUZEOztBQUlBLHVCQUNFO0FB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QUNFbEIsWUFBT0QsTUFBTUMsS0FEZjtBQUVFQyxjQUFTRixNQUFNRTtBQUZqQixJQURGO0FBQUEsRUFEYSxFQU9iO0FBQUEsVUFDRTtBQUNFVSxjQUFTO0FBQUEsY0FBUVEsU0FBUyxxQkFBUUMsSUFBUixDQUFULENBQVI7QUFBQSxNQURYO0FBRUVWLGlCQUFZO0FBQUEsY0FBTVMsU0FBUyx5QkFBVCxDQUFOO0FBQUE7QUFGZCxJQURGO0FBQUEsRUFQYSxFQWFiYixVQWJhLEM7Ozs7Ozs7Ozs7OzttQkN6RFNlLFc7O0FBRnhCOzs7Ozs7QUFFZSxVQUFTQSxXQUFULE9BQWdDO0FBQUEsT0FBVHJCLEtBQVMsUUFBVEEsS0FBUzs7QUFDN0MsT0FBSXNCLFFBQVEsQ0FBWjtBQUNBQyxXQUFRQyxHQUFSLENBQVl4QixLQUFaO0FBQ0EsVUFDRTtBQUFBO0FBQUEsT0FBSSxXQUFVLFlBQWQ7QUFDR0EsV0FBTXlCLEdBQU4sQ0FBVTtBQUFBLGNBQ1Q7QUFBQTtBQUFBLFdBQUksV0FBVSxpQkFBZCxFQUFnQyxLQUFLSCxPQUFyQztBQUErQ0ksV0FBRU47QUFBakQsUUFEUztBQUFBLE1BQVY7QUFESCxJQURGO0FBT0QsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7bUJDVHdCTyxXOztBQUh6Qjs7QUFDQTs7S0FBWUMsSzs7Ozs7O2dCQUVhRCxXOztBQUFWLFVBQVVBLFdBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQ1AsbUJBQUtDLE1BQU1DLGNBQVgsQ0FETzs7QUFBQTtBQUViTixtQkFBUUMsR0FBUixDQUFZLElBQVo7QUFGYTtBQUFBLGtCQUdQLG1CQUFLSSxNQUFNRSxXQUFYLENBSE87O0FBQUE7QUFJYlAsbUJBQVFDLEdBQVIsQ0FBWSxVQUFaOztBQUphO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEUiLCJmaWxlIjoiT3B0aW9uc0FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXNhZ2EnO1xuaW1wb3J0IHJlZHVjZXIgZnJvbSAnLi9yZWR1Y2Vycy9PcHRpb25zLmpzJztcbmltcG9ydCBPcHRpb25zQXBwIGZyb20gJy4vY29udGFpbmVycy9PcHRpb25zLmpzJztcbmltcG9ydCBvcHRpb25zU2FnYXMgZnJvbSAnLi9zYWdhcy9vcHRpb25zU2FnYXMuanMnO1xuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xuaW1wb3J0ICdqcXVlcnkvanF1ZXJ5Lm1pbi5qcyc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2pzL2Jvb3RzdHJhcC5taW4uanMnO1xuaW1wb3J0IEJMIGZyb20gJy4vYmxvY2tMaXN0LmpzJztcblxuY29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpO1xuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyLCBhcHBseU1pZGRsZXdhcmUoc2FnYU1pZGRsZXdhcmUpKTtcbkJMLmluaXQoKS50aGVuKCgpID0+IHtcbiAgc2FnYU1pZGRsZXdhcmUucnVuKG9wdGlvbnNTYWdhcyk7XG59KTtcblxucmVuZGVyKFxuICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICA8T3B0aW9uc0FwcCAvPlxuICA8L1Byb3ZpZGVyPixcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ09wdGlvbnNBcHAnKVxuKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL09wdGlvbnNBcHAuanNcbiAqKi8iLCJpbXBvcnQgdXBkYXRlIGZyb20gJ3JlYWN0L2xpYi91cGRhdGUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0geyBzaXRlczogW10sIG1lc3NhZ2U6ICcnIH0sIGFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSAnQUREX1NJVEVfU1VDQ0VFREVEJzpcbiAgICAgIHJldHVybiB1cGRhdGUoc3RhdGUsIHtcbiAgICAgICAgbWVzc2FnZTogeyAkc2V0OiBhY3Rpb24ubWVzc2FnZSB9XG4gICAgICB9KTtcbiAgICBjYXNlICdBRERfU0lURV9GQUlMRUQnOlxuICAgICAgcmV0dXJuIHVwZGF0ZShzdGF0ZSwge1xuICAgICAgICBtZXNzYWdlOiB7ICRzZXQ6IGFjdGlvbi5lIH1cbiAgICAgIH0pO1xuICAgIGNhc2UgJ1NJVEVfRkVUQ0hfVU5TVUNDRVNTRlVMJzpcbiAgICAgIHJldHVybiB1cGRhdGUoc3RhdGUsIHtcbiAgICAgICAgbWVzc2FnZTogeyAkc2V0OiBhY3Rpb24uZSB9XG4gICAgICB9KTtcbiAgICBjYXNlICdTSVRFX0ZFVENIX1NVQ0NFU1NGVUwnOlxuICAgICAgcmV0dXJuIHVwZGF0ZShzdGF0ZSwge1xuICAgICAgICBzaXRlczogeyAkc2V0OiBhY3Rpb24uc2l0ZXMgfVxuICAgICAgfSk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcmVkdWNlcnMvT3B0aW9ucy5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IFBhdHRlcm5MaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvUGF0dGVybkxpc3QuanMnO1xuXG5pbXBvcnQgeyBhZGRTaXRlLCBmZXRjaFNpdGVzIH0gZnJvbSAnLi4vYWN0aW9ucy9jb21tb24uanMnO1xuXG5jbGFzcyBPcHRpb25zQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5vblN1Ym1pdFBhdHRlcm4gPSB0aGlzLm9uU3VibWl0UGF0dGVybi5iaW5kKHRoaXMpO1xuICB9XG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICBjb25zdCB7IGZldGNoU2l0ZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgZmV0Y2hTaXRlcygpO1xuICB9XG4gIG9uU3VibWl0UGF0dGVybihlKSB7XG4gICAgY29uc3QgeyBhZGRTaXRlIH0gPSB0aGlzLnByb3BzO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBhZGRTaXRlKHRoaXMucmVmcy5wYXR0ZXJuSW5wdXQudmFsdWUudHJpbSgpKTtcbiAgICB0aGlzLnJlZnMucGF0dGVybklucHV0LnZhbHVlID0gJyc7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGxpc3RPZlBhdHRlcm5zO1xuICAgIGlmICh0aGlzLnByb3BzLnNpdGVzKSB7XG4gICAgICBsaXN0T2ZQYXR0ZXJucyA9IDxQYXR0ZXJuTGlzdCBzaXRlcz17dGhpcy5wcm9wcy5zaXRlc30gLz47XG4gICAgfSBlbHNlIHtcbiAgICAgIGxpc3RPZlBhdHRlcm5zID0ge307XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGlkPVwiT3B0aW9uc0FwcFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XG4gICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLm9uU3VibWl0UGF0dGVybn0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cInBhdHRlcm5JbnB1dFwiIHJlZj1cInBhdHRlcm5JbnB1dFwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtYnRuXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWZhdWx0XCIgdmFsdWU9XCJBZGRcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LXdhcm5pbmdcIiByb2xlPVwiYWxlcnRcIj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAge2xpc3RPZlBhdHRlcm5zfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBzdGF0ZSA9PiAoXG4gICAge1xuICAgICAgc2l0ZXM6IHN0YXRlLnNpdGVzLFxuICAgICAgbWVzc2FnZTogc3RhdGUubWVzc2FnZVxuICAgIH1cbiAgKSxcbiAgZGlzcGF0Y2ggPT4gKFxuICAgIHtcbiAgICAgIGFkZFNpdGU6IHNpdGUgPT4gZGlzcGF0Y2goYWRkU2l0ZShzaXRlKSksXG4gICAgICBmZXRjaFNpdGVzOiAoKSA9PiBkaXNwYXRjaChmZXRjaFNpdGVzKCkpXG4gICAgfVxuICApXG4pKE9wdGlvbnNBcHApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29udGFpbmVycy9PcHRpb25zLmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGF0dGVybkxpc3QoeyBzaXRlcyB9KSB7XG4gIGxldCBjb3VudCA9IDA7XG4gIGNvbnNvbGUubG9nKHNpdGVzKTtcbiAgcmV0dXJuIChcbiAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1ncm91cFwiPlxuICAgICAge3NpdGVzLm1hcChwID0+IChcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbVwiIGtleT17Y291bnQrK30+e3Auc2l0ZX08L2xpPlxuICAgICAgKSl9XG4gICAgPC91bD5cbiAgKTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvUGF0dGVybkxpc3QuanNcbiAqKi8iLCJpbXBvcnQgeyBmb3JrIH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcbmltcG9ydCAqIGFzIHNhZ2FzIGZyb20gJy4vc2FnYXNEQi5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBvcHRpb25zU2FnYSgpIHtcbiAgeWllbGQgZm9yayhzYWdhcy5mZXRjaFNpdGVzU2FnYSk7XG4gIGNvbnNvbGUubG9nKCdoaScpO1xuICB5aWVsZCBmb3JrKHNhZ2FzLmFkZFNpdGVTYWdhKTtcbiAgY29uc29sZS5sb2coJ2hpIGFnYWluJyk7XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9zYWdhcy9vcHRpb25zU2FnYXMuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9