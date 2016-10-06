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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvT3B0aW9uc0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvT3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9PcHRpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1BhdHRlcm5MaXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9zYWdhcy9vcHRpb25zU2FnYXMuanMiXSwibmFtZXMiOlsic2FnYU1pZGRsZXdhcmUiLCJzdG9yZSIsImluaXQiLCJ0aGVuIiwicnVuIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJlZHVjZXIiLCJzdGF0ZSIsInNpdGVzIiwibWVzc2FnZSIsImFjdGlvbiIsInR5cGUiLCIkc2V0IiwiZSIsIk9wdGlvbnNBcHAiLCJwcm9wcyIsIm9uU3VibWl0UGF0dGVybiIsImJpbmQiLCJmZXRjaFNpdGVzIiwiYWRkU2l0ZSIsInByZXZlbnREZWZhdWx0IiwicmVmcyIsInBhdHRlcm5JbnB1dCIsInZhbHVlIiwidHJpbSIsImxpc3RPZlBhdHRlcm5zIiwiQ29tcG9uZW50IiwiZGlzcGF0Y2giLCJzaXRlIiwiUGF0dGVybkxpc3QiLCJjb3VudCIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJwIiwib3B0aW9uc1NhZ2EiLCJzYWdhcyIsImZldGNoU2l0ZXNTYWdhIiwiYWRkU2l0ZVNhZ2EiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBLEtBQU1BLGlCQUFpQiwwQkFBdkI7QUFDQSxLQUFNQyxRQUFRLDJDQUFxQiw0QkFBZ0JELGNBQWhCLENBQXJCLENBQWQ7QUFDQSxxQkFBR0UsSUFBSCxHQUFVQyxJQUFWLENBQWUsWUFBTTtBQUNuQkgsa0JBQWVJLEdBQWY7QUFDQSx5QkFDRTtBQUFBO0FBQUEsT0FB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RWxCLFlBQU9ELE1BQU1DLEtBRGY7QUFFRUMsY0FBU0YsTUFBTUU7QUFGakIsSUFERjtBQUFBLEVBRGEsRUFPYjtBQUFBLFVBQ0U7QUFDRVUsY0FBUztBQUFBLGNBQVFRLFNBQVMscUJBQVFDLElBQVIsQ0FBVCxDQUFSO0FBQUEsTUFEWDtBQUVFVixpQkFBWTtBQUFBLGNBQU1TLFNBQVMseUJBQVQsQ0FBTjtBQUFBO0FBRmQsSUFERjtBQUFBLEVBUGEsRUFhYmIsVUFiYSxDOzs7Ozs7Ozs7Ozs7bUJDekRTZSxXOztBQUZ4Qjs7Ozs7O0FBRWUsVUFBU0EsV0FBVCxPQUFnQztBQUFBLE9BQVRyQixLQUFTLFFBQVRBLEtBQVM7O0FBQzdDLE9BQUlzQixRQUFRLENBQVo7QUFDQUMsV0FBUUMsR0FBUixDQUFZeEIsS0FBWjtBQUNBLFVBQ0U7QUFBQTtBQUFBLE9BQUksV0FBVSxZQUFkO0FBQ0dBLFdBQU15QixHQUFOLENBQVU7QUFBQSxjQUNUO0FBQUE7QUFBQSxXQUFJLFdBQVUsaUJBQWQsRUFBZ0MsS0FBS0gsT0FBckM7QUFBK0NJLFdBQUVOO0FBQWpELFFBRFM7QUFBQSxNQUFWO0FBREgsSUFERjtBQU9ELEU7Ozs7Ozs7Ozs7Ozs7Ozs7O21CQ1R3Qk8sVzs7QUFIekI7O0FBQ0E7O0tBQVlDLEs7Ozs7OztnQkFFYUQsVzs7QUFBVixVQUFVQSxXQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUNQLG1CQUFLQyxNQUFNQyxjQUFYLENBRE87O0FBQUE7QUFFYk4sbUJBQVFDLEdBQVIsQ0FBWSxJQUFaO0FBRmE7QUFBQSxrQkFHUCxtQkFBS0ksTUFBTUUsV0FBWCxDQUhPOztBQUFBO0FBSWJQLG1CQUFRQyxHQUFSLENBQVksVUFBWjs7QUFKYTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFIiwiZmlsZSI6Ik9wdGlvbnNBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSBmcm9tICdyZWR1eC1zYWdhJztcbmltcG9ydCByZWR1Y2VyIGZyb20gJy4vcmVkdWNlcnMvT3B0aW9ucy5qcyc7XG5pbXBvcnQgT3B0aW9uc0FwcCBmcm9tICcuL2NvbnRhaW5lcnMvT3B0aW9ucy5qcyc7XG5pbXBvcnQgb3B0aW9uc1NhZ2FzIGZyb20gJy4vc2FnYXMvb3B0aW9uc1NhZ2FzLmpzJztcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJztcbmltcG9ydCAnanF1ZXJ5L2pxdWVyeS5taW4uanMnO1xuaW1wb3J0ICdib290c3RyYXAvZGlzdC9qcy9ib290c3RyYXAubWluLmpzJztcbmltcG9ydCBCTCBmcm9tICcuL2Jsb2NrTGlzdC5qcyc7XG5cbmNvbnN0IHNhZ2FNaWRkbGV3YXJlID0gY3JlYXRlU2FnYU1pZGRsZXdhcmUoKTtcbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlciwgYXBwbHlNaWRkbGV3YXJlKHNhZ2FNaWRkbGV3YXJlKSk7XG5CTC5pbml0KCkudGhlbigoKSA9PiB7XG4gIHNhZ2FNaWRkbGV3YXJlLnJ1bihvcHRpb25zU2FnYXMpO1xuICByZW5kZXIoXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICA8T3B0aW9uc0FwcCAvPlxuICAgIDwvUHJvdmlkZXI+LFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdPcHRpb25zQXBwJylcbiAgKTtcbn0pO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvT3B0aW9uc0FwcC5qc1xuICoqLyIsImltcG9ydCB1cGRhdGUgZnJvbSAncmVhY3QvbGliL3VwZGF0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSB7IHNpdGVzOiBbXSwgbWVzc2FnZTogJycgfSwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdBRERfU0lURV9TVUNDRUVERUQnOlxuICAgICAgcmV0dXJuIHVwZGF0ZShzdGF0ZSwge1xuICAgICAgICBtZXNzYWdlOiB7ICRzZXQ6IGFjdGlvbi5tZXNzYWdlIH1cbiAgICAgIH0pO1xuICAgIGNhc2UgJ0FERF9TSVRFX0ZBSUxFRCc6XG4gICAgICByZXR1cm4gdXBkYXRlKHN0YXRlLCB7XG4gICAgICAgIG1lc3NhZ2U6IHsgJHNldDogYWN0aW9uLmUgfVxuICAgICAgfSk7XG4gICAgY2FzZSAnU0lURV9GRVRDSF9VTlNVQ0NFU1NGVUwnOlxuICAgICAgcmV0dXJuIHVwZGF0ZShzdGF0ZSwge1xuICAgICAgICBtZXNzYWdlOiB7ICRzZXQ6IGFjdGlvbi5lIH1cbiAgICAgIH0pO1xuICAgIGNhc2UgJ1NJVEVfRkVUQ0hfU1VDQ0VTU0ZVTCc6XG4gICAgICByZXR1cm4gdXBkYXRlKHN0YXRlLCB7XG4gICAgICAgIHNpdGVzOiB7ICRzZXQ6IGFjdGlvbi5zaXRlcyB9XG4gICAgICB9KTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9yZWR1Y2Vycy9PcHRpb25zLmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgUGF0dGVybkxpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9QYXR0ZXJuTGlzdC5qcyc7XG5cbmltcG9ydCB7IGFkZFNpdGUsIGZldGNoU2l0ZXMgfSBmcm9tICcuLi9hY3Rpb25zL2NvbW1vbi5qcyc7XG5cbmNsYXNzIE9wdGlvbnNBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLm9uU3VibWl0UGF0dGVybiA9IHRoaXMub25TdWJtaXRQYXR0ZXJuLmJpbmQodGhpcyk7XG4gIH1cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIGNvbnN0IHsgZmV0Y2hTaXRlcyB9ID0gdGhpcy5wcm9wcztcbiAgICBmZXRjaFNpdGVzKCk7XG4gIH1cbiAgb25TdWJtaXRQYXR0ZXJuKGUpIHtcbiAgICBjb25zdCB7IGFkZFNpdGUgfSA9IHRoaXMucHJvcHM7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGFkZFNpdGUodGhpcy5yZWZzLnBhdHRlcm5JbnB1dC52YWx1ZS50cmltKCkpO1xuICAgIHRoaXMucmVmcy5wYXR0ZXJuSW5wdXQudmFsdWUgPSAnJztcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgbGlzdE9mUGF0dGVybnM7XG4gICAgaWYgKHRoaXMucHJvcHMuc2l0ZXMpIHtcbiAgICAgIGxpc3RPZlBhdHRlcm5zID0gPFBhdHRlcm5MaXN0IHNpdGVzPXt0aGlzLnByb3BzLnNpdGVzfSAvPjtcbiAgICB9IGVsc2Uge1xuICAgICAgbGlzdE9mUGF0dGVybnMgPSB7fTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgaWQ9XCJPcHRpb25zQXBwXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTRcIj5cbiAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMub25TdWJtaXRQYXR0ZXJufT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwicGF0dGVybklucHV0XCIgcmVmPVwicGF0dGVybklucHV0XCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1idG5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHRcIiB2YWx1ZT1cIkFkZFwiIC8+XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtd2FybmluZ1wiIHJvbGU9XCJhbGVydFwiPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxuICAgICAgICAgICAgICB7bGlzdE9mUGF0dGVybnN9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIHN0YXRlID0+IChcbiAgICB7XG4gICAgICBzaXRlczogc3RhdGUuc2l0ZXMsXG4gICAgICBtZXNzYWdlOiBzdGF0ZS5tZXNzYWdlXG4gICAgfVxuICApLFxuICBkaXNwYXRjaCA9PiAoXG4gICAge1xuICAgICAgYWRkU2l0ZTogc2l0ZSA9PiBkaXNwYXRjaChhZGRTaXRlKHNpdGUpKSxcbiAgICAgIGZldGNoU2l0ZXM6ICgpID0+IGRpc3BhdGNoKGZldGNoU2l0ZXMoKSlcbiAgICB9XG4gIClcbikoT3B0aW9uc0FwcCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb250YWluZXJzL09wdGlvbnMuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYXR0ZXJuTGlzdCh7IHNpdGVzIH0pIHtcbiAgbGV0IGNvdW50ID0gMDtcbiAgY29uc29sZS5sb2coc2l0ZXMpO1xuICByZXR1cm4gKFxuICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWdyb3VwXCI+XG4gICAgICB7c2l0ZXMubWFwKHAgPT4gKFxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtXCIga2V5PXtjb3VudCsrfT57cC5zaXRlfTwvbGk+XG4gICAgICApKX1cbiAgICA8L3VsPlxuICApO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29tcG9uZW50cy9QYXR0ZXJuTGlzdC5qc1xuICoqLyIsImltcG9ydCB7IGZvcmsgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xuaW1wb3J0ICogYXMgc2FnYXMgZnJvbSAnLi9zYWdhc0RCLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIG9wdGlvbnNTYWdhKCkge1xuICB5aWVsZCBmb3JrKHNhZ2FzLmZldGNoU2l0ZXNTYWdhKTtcbiAgY29uc29sZS5sb2coJ2hpJyk7XG4gIHlpZWxkIGZvcmsoc2FnYXMuYWRkU2l0ZVNhZ2EpO1xuICBjb25zb2xlLmxvZygnaGkgYWdhaW4nKTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3NhZ2FzL29wdGlvbnNTYWdhcy5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=