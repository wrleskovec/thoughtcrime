webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(33);
	
	var _redux = __webpack_require__(170);
	
	var _reactRedux = __webpack_require__(183);
	
	var _reduxPersist = __webpack_require__(192);
	
	var _reducer = __webpack_require__(307);
	
	var _reducer2 = _interopRequireDefault(_reducer);
	
	var _container = __webpack_require__(309);
	
	__webpack_require__(313);
	
	__webpack_require__(322);
	
	__webpack_require__(324);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var store = (0, _redux.createStore)(_reducer2.default, undefined, (0, _reduxPersist.autoRehydrate)());
	(0, _reduxPersist.persistStore)(store);
	
	(0, _reactDom.render)(_react2.default.createElement(
	  _reactRedux.Provider,
	  { store: store },
	  _react2.default.createElement(_container.OptionsApp, null)
	), document.getElementById('OptionsApp'));

/***/ },

/***/ 307:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = reducer;
	
	var _update = __webpack_require__(308);
	
	var _update2 = _interopRequireDefault(_update);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function reducer() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? { block: [] } : arguments[0];
	  var action = arguments[1];
	
	  switch (action.type) {
	    case 'ADD_PATTERN':
	      return (0, _update2.default)(state, {
	        block: { $push: [action.pattern] }
	      });
	    default:
	      return state;
	  }
	}

/***/ },

/***/ 309:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.OptionsApp = undefined;
	
	var _reactRedux = __webpack_require__(183);
	
	var _Root = __webpack_require__(310);
	
	var _Root2 = _interopRequireDefault(_Root);
	
	var _actions = __webpack_require__(312);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var OptionsApp = exports.OptionsApp = (0, _reactRedux.connect)(function (state) {
	  return { patterns: state.block };
	}, function (dispatch) {
	  return {
	    addPattern: function addPattern(pattern) {
	      return dispatch((0, _actions.addPattern)(pattern));
	    }
	  };
	})(_Root2.default);

/***/ },

/***/ 310:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _PatternList = __webpack_require__(311);
	
	var _PatternList2 = _interopRequireDefault(_PatternList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var OptionsApp = function (_React$Component) {
	  _inherits(OptionsApp, _React$Component);
	
	  function OptionsApp(props) {
	    _classCallCheck(this, OptionsApp);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(OptionsApp).call(this, props));
	
	    _this.onSubmitPattern = _this.onSubmitPattern.bind(_this);
	    return _this;
	  }
	
	  _createClass(OptionsApp, [{
	    key: 'onSubmitPattern',
	    value: function onSubmitPattern(e) {
	      var addPattern = this.props.addPattern;
	
	      e.preventDefault();
	      addPattern(this.refs.patternInput.value.trim());
	      this.refs.patternInput.value = '';
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var listOfPatterns = void 0;
	      if (this.props.patterns) {
	        listOfPatterns = _react2.default.createElement(_PatternList2.default, { patterns: this.props.patterns });
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
	              )
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
	
	exports.default = OptionsApp;

/***/ },

/***/ 311:
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
	  var patterns = _ref.patterns;
	
	  var count = 0;
	  return _react2.default.createElement(
	    "ul",
	    { className: "list-group" },
	    patterns.map(function (p) {
	      return _react2.default.createElement(
	        "li",
	        { className: "list-group-item", key: count++ },
	        p
	      );
	    })
	  );
	}

/***/ },

/***/ 312:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.addPattern = addPattern;
	function addPattern(pattern) {
	  return {
	    type: 'ADD_PATTERN',
	    pattern: pattern
	  };
	}

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvT3B0aW9uc0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvT3B0aW9uc0FwcC9yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9PcHRpb25zQXBwL2NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvT3B0aW9uc0FwcC9jb21wb25lbnRzL1Jvb3QuanN4Iiwid2VicGFjazovLy8uL3NyYy9PcHRpb25zQXBwL2NvbXBvbmVudHMvUGF0dGVybkxpc3QuanN4Iiwid2VicGFjazovLy8uL3NyYy9PcHRpb25zQXBwL2FjdGlvbnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUVBLEtBQU0sUUFBUSwyQ0FBcUIsU0FBckIsRUFBZ0Msa0NBQWhDLENBQWQ7QUFDQSxpQ0FBYSxLQUFiOztBQUVBLHVCQUNFO0FBQUE7QUFBQSxLQUFVLE9BQU8sS0FBakI7QUFDRTtBQURGLEVBREYsRUFJRSxTQUFTLGNBQVQsQ0FBd0IsWUFBeEIsQ0FKRixFOzs7Ozs7Ozs7Ozs7bUJDWndCLE87O0FBRnhCOzs7Ozs7QUFFZSxVQUFTLE9BQVQsR0FBZ0Q7QUFBQSxPQUEvQixLQUErQix5REFBdkIsRUFBRSxPQUFPLEVBQVQsRUFBdUI7QUFBQSxPQUFSLE1BQVE7O0FBQzdELFdBQVEsT0FBTyxJQUFmO0FBQ0UsVUFBSyxhQUFMO0FBQ0UsY0FBTyxzQkFBTyxLQUFQLEVBQWM7QUFDbkIsZ0JBQU8sRUFBRSxPQUFPLENBQUMsT0FBTyxPQUFSLENBQVQ7QUFEWSxRQUFkLENBQVA7QUFHRjtBQUNFLGNBQU8sS0FBUDtBQU5KO0FBUUQsRTs7Ozs7Ozs7Ozs7Ozs7QUNYRDs7QUFDQTs7OztBQUNBOzs7O0FBRU8sS0FBTSxrQ0FBYSx5QkFDeEI7QUFBQSxVQUNFLEVBQUUsVUFBVSxNQUFNLEtBQWxCLEVBREY7QUFBQSxFQUR3QixFQUl4QjtBQUFBLFVBQ0U7QUFDRSxpQkFBWTtBQUFBLGNBQVcsU0FBUyx5QkFBVyxPQUFYLENBQVQsQ0FBWDtBQUFBO0FBRGQsSUFERjtBQUFBLEVBSndCLGlCQUFuQixDOzs7Ozs7Ozs7Ozs7Ozs7QUNKUDs7OztBQUNBOzs7Ozs7Ozs7Ozs7S0FFcUIsVTs7O0FBQ25CLHVCQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwrRkFDWCxLQURXOztBQUVqQixXQUFLLGVBQUwsR0FBdUIsTUFBSyxlQUFMLENBQXFCLElBQXJCLE9BQXZCO0FBRmlCO0FBR2xCOzs7O3FDQUNlLEMsRUFBRztBQUFBLFdBQ1QsVUFEUyxHQUNNLEtBQUssS0FEWCxDQUNULFVBRFM7O0FBRWpCLFNBQUUsY0FBRjtBQUNBLGtCQUFXLEtBQUssSUFBTCxDQUFVLFlBQVYsQ0FBdUIsS0FBdkIsQ0FBNkIsSUFBN0IsRUFBWDtBQUNBLFlBQUssSUFBTCxDQUFVLFlBQVYsQ0FBdUIsS0FBdkIsR0FBK0IsRUFBL0I7QUFDRDs7OzhCQUNRO0FBQ1AsV0FBSSx1QkFBSjtBQUNBLFdBQUksS0FBSyxLQUFMLENBQVcsUUFBZixFQUF5QjtBQUN2QiwwQkFBaUIsdURBQWEsVUFBVSxLQUFLLEtBQUwsQ0FBVyxRQUFsQyxHQUFqQjtBQUNELFFBRkQsTUFFTztBQUNMLDBCQUFpQixFQUFqQjtBQUNEO0FBQ0QsY0FDRTtBQUFBO0FBQUEsV0FBSyxJQUFHLFlBQVI7QUFDRTtBQUFBO0FBQUEsYUFBSyxXQUFVLFdBQWY7QUFDRTtBQUFBO0FBQUEsZUFBSyxXQUFVLEtBQWY7QUFDRTtBQUFBO0FBQUEsaUJBQUssV0FBVSxVQUFmO0FBQ0U7QUFBQTtBQUFBLG1CQUFNLFVBQVUsS0FBSyxlQUFyQjtBQUNFO0FBQUE7QUFBQSxxQkFBSyxXQUFVLGFBQWY7QUFDRTtBQUNFLDJCQUFLLE1BRFAsRUFDYyxXQUFVLGNBRHhCLEVBQ3VDLE1BQUssY0FENUMsRUFDMkQsS0FBSTtBQUQvRCxxQkFERjtBQUlFO0FBQUE7QUFBQSx1QkFBTSxXQUFVLGlCQUFoQjtBQUNFLDhEQUFPLE1BQUssUUFBWixFQUFxQixXQUFVLGlCQUEvQixFQUFpRCxPQUFNLEtBQXZEO0FBREY7QUFKRjtBQURGO0FBREYsY0FERjtBQWVFO0FBQUE7QUFBQSxpQkFBSyxXQUFVLFVBQWY7QUFDRztBQURIO0FBZkY7QUFERjtBQURGLFFBREY7QUF5QkQ7Ozs7R0EzQ3FDLGdCQUFNLFM7O21CQUF6QixVOzs7Ozs7Ozs7Ozs7bUJDREcsVzs7QUFGeEI7Ozs7OztBQUVlLFVBQVMsV0FBVCxPQUFtQztBQUFBLE9BQVosUUFBWSxRQUFaLFFBQVk7O0FBQ2hELE9BQUksUUFBUSxDQUFaO0FBQ0EsVUFDRTtBQUFBO0FBQUEsT0FBSSxXQUFVLFlBQWQ7QUFDRyxjQUFTLEdBQVQsQ0FBYTtBQUFBLGNBQ1o7QUFBQTtBQUFBLFdBQUksV0FBVSxpQkFBZCxFQUFnQyxLQUFLLE9BQXJDO0FBQStDO0FBQS9DLFFBRFk7QUFBQSxNQUFiO0FBREgsSUFERjtBQU9ELEU7Ozs7Ozs7Ozs7OztTQ1hlLFUsR0FBQSxVO0FBQVQsVUFBUyxVQUFULENBQW9CLE9BQXBCLEVBQTZCO0FBQ2xDLFVBQU87QUFDTCxXQUFNLGFBREQ7QUFFTDtBQUZLLElBQVA7QUFJRCxFIiwiZmlsZSI6Ik9wdGlvbnNBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IGNyZWF0ZVN0b3JlIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBwZXJzaXN0U3RvcmUsIGF1dG9SZWh5ZHJhdGUgfSBmcm9tICdyZWR1eC1wZXJzaXN0JztcbmltcG9ydCByZWR1Y2VyIGZyb20gJy4vT3B0aW9uc0FwcC9yZWR1Y2VyLmpzJztcbmltcG9ydCB7IE9wdGlvbnNBcHAgfSBmcm9tICcuL09wdGlvbnNBcHAvY29udGFpbmVyLmpzJztcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJztcbmltcG9ydCAnanF1ZXJ5L2pxdWVyeS5taW4uanMnO1xuaW1wb3J0ICdib290c3RyYXAvZGlzdC9qcy9ib290c3RyYXAubWluLmpzJztcblxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyLCB1bmRlZmluZWQsIGF1dG9SZWh5ZHJhdGUoKSk7XG5wZXJzaXN0U3RvcmUoc3RvcmUpO1xuXG5yZW5kZXIoXG4gIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgIDxPcHRpb25zQXBwIC8+XG4gIDwvUHJvdmlkZXI+LFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnT3B0aW9uc0FwcCcpXG4pO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvT3B0aW9uc0FwcC5qc1xuICoqLyIsImltcG9ydCB1cGRhdGUgZnJvbSAncmVhY3QvbGliL3VwZGF0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSB7IGJsb2NrOiBbXSB9LCBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ0FERF9QQVRURVJOJzpcbiAgICAgIHJldHVybiB1cGRhdGUoc3RhdGUsIHtcbiAgICAgICAgYmxvY2s6IHsgJHB1c2g6IFthY3Rpb24ucGF0dGVybl0gfVxuICAgICAgfSk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvT3B0aW9uc0FwcC9yZWR1Y2VyLmpzXG4gKiovIiwiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBSb290IGZyb20gJy4vY29tcG9uZW50cy9Sb290LmpzeCc7XG5pbXBvcnQgeyBhZGRQYXR0ZXJuIH0gZnJvbSAnLi9hY3Rpb25zLmpzJztcblxuZXhwb3J0IGNvbnN0IE9wdGlvbnNBcHAgPSBjb25uZWN0KFxuICBzdGF0ZSA9PiAoXG4gICAgeyBwYXR0ZXJuczogc3RhdGUuYmxvY2sgfVxuICApLFxuICBkaXNwYXRjaCA9PiAoXG4gICAge1xuICAgICAgYWRkUGF0dGVybjogcGF0dGVybiA9PiBkaXNwYXRjaChhZGRQYXR0ZXJuKHBhdHRlcm4pKVxuICAgIH1cbiAgKVxuKShSb290KTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL09wdGlvbnNBcHAvY29udGFpbmVyLmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQYXR0ZXJuTGlzdCBmcm9tICcuL1BhdHRlcm5MaXN0LmpzeCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9wdGlvbnNBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLm9uU3VibWl0UGF0dGVybiA9IHRoaXMub25TdWJtaXRQYXR0ZXJuLmJpbmQodGhpcyk7XG4gIH1cbiAgb25TdWJtaXRQYXR0ZXJuKGUpIHtcbiAgICBjb25zdCB7IGFkZFBhdHRlcm4gfSA9IHRoaXMucHJvcHM7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGFkZFBhdHRlcm4odGhpcy5yZWZzLnBhdHRlcm5JbnB1dC52YWx1ZS50cmltKCkpO1xuICAgIHRoaXMucmVmcy5wYXR0ZXJuSW5wdXQudmFsdWUgPSAnJztcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgbGV0IGxpc3RPZlBhdHRlcm5zO1xuICAgIGlmICh0aGlzLnByb3BzLnBhdHRlcm5zKSB7XG4gICAgICBsaXN0T2ZQYXR0ZXJucyA9IDxQYXR0ZXJuTGlzdCBwYXR0ZXJucz17dGhpcy5wcm9wcy5wYXR0ZXJuc30gLz47XG4gICAgfSBlbHNlIHtcbiAgICAgIGxpc3RPZlBhdHRlcm5zID0ge307XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGlkPVwiT3B0aW9uc0FwcFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XG4gICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLm9uU3VibWl0UGF0dGVybn0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cInBhdHRlcm5JbnB1dFwiIHJlZj1cInBhdHRlcm5JbnB1dFwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtYnRuXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWZhdWx0XCIgdmFsdWU9XCJBZGRcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XG4gICAgICAgICAgICAgIHtsaXN0T2ZQYXR0ZXJuc31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL09wdGlvbnNBcHAvY29tcG9uZW50cy9Sb290LmpzeFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhdHRlcm5MaXN0KHsgcGF0dGVybnMgfSkge1xuICBsZXQgY291bnQgPSAwO1xuICByZXR1cm4gKFxuICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWdyb3VwXCI+XG4gICAgICB7cGF0dGVybnMubWFwKHAgPT4gKFxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtXCIga2V5PXtjb3VudCsrfT57cH08L2xpPlxuICAgICAgKSl9XG4gICAgPC91bD5cbiAgKTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL09wdGlvbnNBcHAvY29tcG9uZW50cy9QYXR0ZXJuTGlzdC5qc3hcbiAqKi8iLCJleHBvcnQgZnVuY3Rpb24gYWRkUGF0dGVybihwYXR0ZXJuKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ0FERF9QQVRURVJOJyxcbiAgICBwYXR0ZXJuXG4gIH07XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9PcHRpb25zQXBwL2FjdGlvbnMuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9