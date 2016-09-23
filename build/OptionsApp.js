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
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var sagaMiddleware = (0, _reduxSaga2.default)();
	var store = (0, _redux.createStore)(_Options2.default, (0, _redux.applyMiddleware)(sagaMiddleware));
	sagaMiddleware.run(_optionsSagas2.default);
	
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvT3B0aW9uc0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvT3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9PcHRpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1BhdHRlcm5MaXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9zYWdhcy9vcHRpb25zU2FnYXMuanMiXSwibmFtZXMiOlsic2FnYU1pZGRsZXdhcmUiLCJzdG9yZSIsInJ1biIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyZWR1Y2VyIiwic3RhdGUiLCJzaXRlcyIsIm1lc3NhZ2UiLCJhY3Rpb24iLCJ0eXBlIiwiJHNldCIsImUiLCJPcHRpb25zQXBwIiwicHJvcHMiLCJvblN1Ym1pdFBhdHRlcm4iLCJiaW5kIiwiZmV0Y2hTaXRlcyIsImFkZFNpdGUiLCJwcmV2ZW50RGVmYXVsdCIsInJlZnMiLCJwYXR0ZXJuSW5wdXQiLCJ2YWx1ZSIsInRyaW0iLCJsaXN0T2ZQYXR0ZXJucyIsIkNvbXBvbmVudCIsImRpc3BhdGNoIiwic2l0ZSIsIlBhdHRlcm5MaXN0IiwiY291bnQiLCJjb25zb2xlIiwibG9nIiwibWFwIiwicCIsIm9wdGlvbnNTYWdhIiwic2FnYXMiLCJmZXRjaFNpdGVzU2FnYSIsImFkZFNpdGVTYWdhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBRUEsS0FBTUEsaUJBQWlCLDBCQUF2QjtBQUNBLEtBQU1DLFFBQVEsMkNBQXFCLDRCQUFnQkQsY0FBaEIsQ0FBckIsQ0FBZDtBQUNBQSxnQkFBZUUsR0FBZjs7QUFFQSx1QkFDRTtBQUFBO0FBQUEsS0FBVSxPQUFPRCxLQUFqQjtBQUNFO0FBREYsRUFERixFQUlFRSxTQUFTQyxjQUFULENBQXdCLFlBQXhCLENB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VUFDRTtBQUNFVSxjQUFTO0FBQUEsY0FBUVEsU0FBUyxxQkFBUUMsSUFBUixDQUFULENBQVI7QUFBQSxNQURYO0FBRUVWLGlCQUFZO0FBQUEsY0FBTVMsU0FBUyx5QkFBVCxDQUFOO0FBQUE7QUFGZCxJQURGO0FBQUEsRUFQYSxFQWFiYixVQWJhLEM7Ozs7Ozs7Ozs7OzttQkN6RFNlLFc7O0FBRnhCOzs7Ozs7QUFFZSxVQUFTQSxXQUFULE9BQWdDO0FBQUEsT0FBVHJCLEtBQVMsUUFBVEEsS0FBUzs7QUFDN0MsT0FBSXNCLFFBQVEsQ0FBWjtBQUNBQyxXQUFRQyxHQUFSLENBQVl4QixLQUFaO0FBQ0EsVUFDRTtBQUFBO0FBQUEsT0FBSSxXQUFVLFlBQWQ7QUFDR0EsV0FBTXlCLEdBQU4sQ0FBVTtBQUFBLGNBQ1Q7QUFBQTtBQUFBLFdBQUksV0FBVSxpQkFBZCxFQUFnQyxLQUFLSCxPQUFyQztBQUErQ0ksV0FBRU47QUFBakQsUUFEUztBQUFBLE1BQVY7QUFESCxJQURGO0FBT0QsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7bUJDVHdCTyxXOztBQUh6Qjs7QUFDQTs7S0FBWUMsSzs7Ozs7O2dCQUVhRCxXOztBQUFWLFVBQVVBLFdBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQ1AsbUJBQUtDLE1BQU1DLGNBQVgsQ0FETzs7QUFBQTtBQUViTixtQkFBUUMsR0FBUixDQUFZLElBQVo7QUFGYTtBQUFBLGtCQUdQLG1CQUFLSSxNQUFNRSxXQUFYLENBSE87O0FBQUE7QUFJYlAsbUJBQVFDLEdBQVIsQ0FBWSxVQUFaOztBQUphO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEUiLCJmaWxlIjoiT3B0aW9uc0FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXNhZ2EnO1xuaW1wb3J0IHJlZHVjZXIgZnJvbSAnLi9yZWR1Y2Vycy9PcHRpb25zLmpzJztcbmltcG9ydCBPcHRpb25zQXBwIGZyb20gJy4vY29udGFpbmVycy9PcHRpb25zLmpzJztcbmltcG9ydCBvcHRpb25zU2FnYXMgZnJvbSAnLi9zYWdhcy9vcHRpb25zU2FnYXMuanMnO1xuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xuaW1wb3J0ICdqcXVlcnkvanF1ZXJ5Lm1pbi5qcyc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2pzL2Jvb3RzdHJhcC5taW4uanMnO1xuXG5jb25zdCBzYWdhTWlkZGxld2FyZSA9IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlKCk7XG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGFwcGx5TWlkZGxld2FyZShzYWdhTWlkZGxld2FyZSkpO1xuc2FnYU1pZGRsZXdhcmUucnVuKG9wdGlvbnNTYWdhcyk7XG5cbnJlbmRlcihcbiAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgPE9wdGlvbnNBcHAgLz5cbiAgPC9Qcm92aWRlcj4sXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdPcHRpb25zQXBwJylcbik7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9PcHRpb25zQXBwLmpzXG4gKiovIiwiaW1wb3J0IHVwZGF0ZSBmcm9tICdyZWFjdC9saWIvdXBkYXRlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IHsgc2l0ZXM6IFtdLCBtZXNzYWdlOiAnJyB9LCBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ0FERF9TSVRFX1NVQ0NFRURFRCc6XG4gICAgICByZXR1cm4gdXBkYXRlKHN0YXRlLCB7XG4gICAgICAgIG1lc3NhZ2U6IHsgJHNldDogYWN0aW9uLm1lc3NhZ2UgfVxuICAgICAgfSk7XG4gICAgY2FzZSAnQUREX1NJVEVfRkFJTEVEJzpcbiAgICAgIHJldHVybiB1cGRhdGUoc3RhdGUsIHtcbiAgICAgICAgbWVzc2FnZTogeyAkc2V0OiBhY3Rpb24uZSB9XG4gICAgICB9KTtcbiAgICBjYXNlICdTSVRFX0ZFVENIX1VOU1VDQ0VTU0ZVTCc6XG4gICAgICByZXR1cm4gdXBkYXRlKHN0YXRlLCB7XG4gICAgICAgIG1lc3NhZ2U6IHsgJHNldDogYWN0aW9uLmUgfVxuICAgICAgfSk7XG4gICAgY2FzZSAnU0lURV9GRVRDSF9TVUNDRVNTRlVMJzpcbiAgICAgIHJldHVybiB1cGRhdGUoc3RhdGUsIHtcbiAgICAgICAgc2l0ZXM6IHsgJHNldDogYWN0aW9uLnNpdGVzIH1cbiAgICAgIH0pO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3JlZHVjZXJzL09wdGlvbnMuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBQYXR0ZXJuTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL1BhdHRlcm5MaXN0LmpzJztcblxuaW1wb3J0IHsgYWRkU2l0ZSwgZmV0Y2hTaXRlcyB9IGZyb20gJy4uL2FjdGlvbnMvY29tbW9uLmpzJztcblxuY2xhc3MgT3B0aW9uc0FwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMub25TdWJtaXRQYXR0ZXJuID0gdGhpcy5vblN1Ym1pdFBhdHRlcm4uYmluZCh0aGlzKTtcbiAgfVxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgY29uc3QgeyBmZXRjaFNpdGVzIH0gPSB0aGlzLnByb3BzO1xuICAgIGZldGNoU2l0ZXMoKTtcbiAgfVxuICBvblN1Ym1pdFBhdHRlcm4oZSkge1xuICAgIGNvbnN0IHsgYWRkU2l0ZSB9ID0gdGhpcy5wcm9wcztcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgYWRkU2l0ZSh0aGlzLnJlZnMucGF0dGVybklucHV0LnZhbHVlLnRyaW0oKSk7XG4gICAgdGhpcy5yZWZzLnBhdHRlcm5JbnB1dC52YWx1ZSA9ICcnO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBsaXN0T2ZQYXR0ZXJucztcbiAgICBpZiAodGhpcy5wcm9wcy5zaXRlcykge1xuICAgICAgbGlzdE9mUGF0dGVybnMgPSA8UGF0dGVybkxpc3Qgc2l0ZXM9e3RoaXMucHJvcHMuc2l0ZXN9IC8+O1xuICAgIH0gZWxzZSB7XG4gICAgICBsaXN0T2ZQYXR0ZXJucyA9IHt9O1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBpZD1cIk9wdGlvbnNBcHBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxuICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5vblN1Ym1pdFBhdHRlcm59PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJwYXR0ZXJuSW5wdXRcIiByZWY9XCJwYXR0ZXJuSW5wdXRcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLWJ0blwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tZGVmYXVsdFwiIHZhbHVlPVwiQWRkXCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC13YXJuaW5nXCIgcm9sZT1cImFsZXJ0XCI+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XG4gICAgICAgICAgICAgIHtsaXN0T2ZQYXR0ZXJuc31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgc3RhdGUgPT4gKFxuICAgIHtcbiAgICAgIHNpdGVzOiBzdGF0ZS5zaXRlcyxcbiAgICAgIG1lc3NhZ2U6IHN0YXRlLm1lc3NhZ2VcbiAgICB9XG4gICksXG4gIGRpc3BhdGNoID0+IChcbiAgICB7XG4gICAgICBhZGRTaXRlOiBzaXRlID0+IGRpc3BhdGNoKGFkZFNpdGUoc2l0ZSkpLFxuICAgICAgZmV0Y2hTaXRlczogKCkgPT4gZGlzcGF0Y2goZmV0Y2hTaXRlcygpKVxuICAgIH1cbiAgKVxuKShPcHRpb25zQXBwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbnRhaW5lcnMvT3B0aW9ucy5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhdHRlcm5MaXN0KHsgc2l0ZXMgfSkge1xuICBsZXQgY291bnQgPSAwO1xuICBjb25zb2xlLmxvZyhzaXRlcyk7XG4gIHJldHVybiAoXG4gICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXBcIj5cbiAgICAgIHtzaXRlcy5tYXAocCA9PiAoXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIiBrZXk9e2NvdW50Kyt9PntwLnNpdGV9PC9saT5cbiAgICAgICkpfVxuICAgIDwvdWw+XG4gICk7XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb21wb25lbnRzL1BhdHRlcm5MaXN0LmpzXG4gKiovIiwiaW1wb3J0IHsgZm9yayB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XG5pbXBvcnQgKiBhcyBzYWdhcyBmcm9tICcuL3NhZ2FzREIuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogb3B0aW9uc1NhZ2EoKSB7XG4gIHlpZWxkIGZvcmsoc2FnYXMuZmV0Y2hTaXRlc1NhZ2EpO1xuICBjb25zb2xlLmxvZygnaGknKTtcbiAgeWllbGQgZm9yayhzYWdhcy5hZGRTaXRlU2FnYSk7XG4gIGNvbnNvbGUubG9nKCdoaSBhZ2FpbicpO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvc2FnYXMvb3B0aW9uc1NhZ2FzLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==