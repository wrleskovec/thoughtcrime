webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(33);
	
	var _redux = __webpack_require__(170);
	
	var _reactRedux = __webpack_require__(183);
	
	var _reduxPersist = __webpack_require__(192);
	
	var _reducer = __webpack_require__(325);
	
	var _reducer2 = _interopRequireDefault(_reducer);
	
	var _container = __webpack_require__(326);
	
	__webpack_require__(313);
	
	__webpack_require__(322);
	
	__webpack_require__(324);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var store = (0, _redux.createStore)(_reducer2.default, undefined, (0, _reduxPersist.autoRehydrate)());
	(0, _reduxPersist.persistStore)(store);
	
	(0, _reactDom.render)(_react2.default.createElement(
	  _reactRedux.Provider,
	  { store: store },
	  _react2.default.createElement(_container.PopupApp, null)
	), document.getElementById('PopupApp'));

/***/ },

/***/ 325:
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

/***/ 326:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PopupApp = undefined;
	
	var _reactRedux = __webpack_require__(183);
	
	var _Root = __webpack_require__(327);
	
	var _Root2 = _interopRequireDefault(_Root);
	
	var _actions = __webpack_require__(329);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var PopupApp = exports.PopupApp = (0, _reactRedux.connect)(function (state) {
	  return { patterns: state.block };
	}, function (dispatch) {
	  return {
	    addPattern: function addPattern(pattern) {
	      return dispatch((0, _actions.addPattern)(pattern));
	    }
	  };
	})(_Root2.default);

/***/ },

/***/ 327:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _tc = __webpack_require__(328);
	
	var _tc2 = _interopRequireDefault(_tc);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var styleHeading = { padding: '0px' };
	var styleTitle = { padding: '10px 15px 10px 15px' };
	var styleLogo = { padding: '3px 15px 4px 5px' };
	
	var PopupApp = function (_React$Component) {
	  _inherits(PopupApp, _React$Component);
	
	  function PopupApp(props) {
	    _classCallCheck(this, PopupApp);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(PopupApp).call(this, props));
	
	    _this.onSubmitPattern = _this.onSubmitPattern.bind(_this);
	    _this.goToOptions = _this.goToOptions.bind(_this);
	    _this.currentDN = '';
	    return _this;
	  }
	
	  _createClass(PopupApp, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var _this2 = this;
	
	      chrome.tabs.getSelected(null, function (tab) {
	        _this2.currentDN = tab.url.split('/')[2];
	      });
	    }
	  }, {
	    key: 'onSubmitPattern',
	    value: function onSubmitPattern(e) {
	      var addPattern = this.props.addPattern;
	
	      e.preventDefault();
	      addPattern(this.refs.patternInput.value.trim());
	      this.refs.patternInput.value = '';
	    }
	  }, {
	    key: 'goToOptions',
	    value: function goToOptions(e) {
	      e.preventDefault();
	      chrome.tabs.create({ url: chrome.extension.getURL('options.html') });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { id: 'PopupApp', className: 'panel panel-default', style: { width: '400px' } },
	        _react2.default.createElement(
	          'div',
	          { className: 'panel-heading', style: styleHeading },
	          _react2.default.createElement('img', { src: _tc2.default, className: 'img-responsive pull-left', style: styleLogo, alt: '' }),
	          _react2.default.createElement(
	            'h3',
	            { className: 'panel-title', style: styleTitle },
	            'Thought Crime'
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'panel-body' },
	          _react2.default.createElement(
	            'form',
	            { onSubmit: this.onSubmitPattern },
	            _react2.default.createElement(
	              'div',
	              { className: 'input-group' },
	              _react2.default.createElement('input', {
	                type: 'text', className: 'form-control', name: 'patternInput', ref: 'patternInput',
	                value: this.currentDN
	              }),
	              _react2.default.createElement(
	                'span',
	                { className: 'input-group-btn' },
	                _react2.default.createElement('input', { type: 'submit', className: 'btn btn-default', value: 'Add' })
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'button',
	            { type: 'button', className: 'btn btn-default pull-right', onClick: this.goToOptions },
	            'Options'
	          )
	        )
	      );
	    }
	  }]);
	
	  return PopupApp;
	}(_react2.default.Component);
	
	exports.default = PopupApp;

/***/ },

/***/ 328:
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAPwAAAD8BR5eJ4AAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAJdSURBVFiF3dZJa1RBEAfwnxsYETdcEUNUcF9wSaLgUa+KN8Eoggt6UlTwA+jBL+BJBEE8ePGo4EkP4nIQggsuKIpB3C4RY1Ticug32Bnfe9NvJl78QzFM1VT/a6qrqot0bMM7PMAejMN0nMJ73MOCCudVwgJ8xq9IvmCoTncXo/9FABfriMqkZ6TJZ+J7hQBujXQAxyuQ12RVq6RzcAxX/H33KfJGuLadaKtKvhEDTZAWyTNMKCLLq9g+9FaNugBDuIGvzTgvx2F/t1qKPMYuzGpEMiohkEE8xwH0C10xD+3CLOjLpD/TXcEl7Ej5lyl4hJ9CRmLsw7o63VEhA6dTD8/LwBocjL5vFibhuYwUpuGp0PNbM9I23MdCXM/sMtsRFepgopDOvLu9hvN4Genu4KyQqTyf66nEMc4UHNaM7G0mgGXCvbdKPogpZURFL9dkYRi1ij6Mreq0Tf7jc1K46zzbB5zA1Rzba6Ftk9CuuADPZL/pFFJb0z/EpMz2osD3lrSZU1p8t6PfHcp0A/7Mh2nK62Z7I/LReFtywKCwhtXQa/jA2VLi+wuXi0hr6FQ+u8cL3VHza0dHZK+fivXY1CiAtQ0OiEkWC+3VHdnWN/CdgbllASyqEEBX9tnhT9ZS/kD9ezIsgNkVAtgQ6bqEAuxI8J9ar4iHROHWEmG1UIhx6rvxTVqbTapXxAH8TDhgvJCFFZGuS9gbm0IcwJNEn/2Gt2MnPiX6Pi4zLpG2/+ctrClL7AOMaRRhj7A4jNRTXJNXWJpHmFc487EbK4VXsVn8wEfcxAUt1Mn/jd8g4D9wyurm7gAAAABJRU5ErkJggg=="

/***/ },

/***/ 329:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvUG9wdXBBcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BvcHVwQXBwL3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1BvcHVwQXBwL2NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUG9wdXBBcHAvY29tcG9uZW50cy9Sb290LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2ljb25zL3RjLTMyLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvUG9wdXBBcHAvYWN0aW9ucy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBRUEsS0FBTSxRQUFRLDJDQUFxQixTQUFyQixFQUFnQyxrQ0FBaEMsQ0FBZDtBQUNBLGlDQUFhLEtBQWI7O0FBRUEsdUJBQ0U7QUFBQTtBQUFBLEtBQVUsT0FBTyxLQUFqQjtBQUNFO0FBREYsRUFERixFQUlFLFNBQVMsY0FBVCxDQUF3QixVQUF4QixDQUpGLEU7Ozs7Ozs7Ozs7OzttQkNad0IsTzs7QUFGeEI7Ozs7OztBQUVlLFVBQVMsT0FBVCxHQUFnRDtBQUFBLE9BQS9CLEtBQStCLHlEQUF2QixFQUFFLE9BQU8sRUFBVCxFQUF1QjtBQUFBLE9BQVIsTUFBUTs7QUFDN0QsV0FBUSxPQUFPLElBQWY7QUFDRSxVQUFLLGFBQUw7QUFDRSxjQUFPLHNCQUFPLEtBQVAsRUFBYztBQUNuQixnQkFBTyxFQUFFLE9BQU8sQ0FBQyxPQUFPLE9BQVIsQ0FBVDtBQURZLFFBQWQsQ0FBUDtBQUdGO0FBQ0UsY0FBTyxLQUFQO0FBTko7QUFRRCxFOzs7Ozs7Ozs7Ozs7OztBQ1hEOztBQUNBOzs7O0FBQ0E7Ozs7QUFFTyxLQUFNLDhCQUFXLHlCQUN0QjtBQUFBLFVBQ0UsRUFBRSxVQUFVLE1BQU0sS0FBbEIsRUFERjtBQUFBLEVBRHNCLEVBSXRCO0FBQUEsVUFDRTtBQUNFLGlCQUFZO0FBQUEsY0FBVyxTQUFTLHlCQUFXLE9BQVgsQ0FBVCxDQUFYO0FBQUE7QUFEZCxJQURGO0FBQUEsRUFKc0IsaUJBQWpCLEM7Ozs7Ozs7Ozs7Ozs7OztBQ0pQOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUNBLEtBQU0sZUFBZSxFQUFFLFNBQVMsS0FBWCxFQUFyQjtBQUNBLEtBQU0sYUFBYSxFQUFFLFNBQVMscUJBQVgsRUFBbkI7QUFDQSxLQUFNLFlBQVksRUFBRSxTQUFTLGtCQUFYLEVBQWxCOztLQUVxQixROzs7QUFDbkIscUJBQVksS0FBWixFQUFtQjtBQUFBOztBQUFBLDZGQUNYLEtBRFc7O0FBRWpCLFdBQUssZUFBTCxHQUF1QixNQUFLLGVBQUwsQ0FBcUIsSUFBckIsT0FBdkI7QUFDQSxXQUFLLFdBQUwsR0FBbUIsTUFBSyxXQUFMLENBQWlCLElBQWpCLE9BQW5CO0FBQ0EsV0FBSyxTQUFMLEdBQWlCLEVBQWpCO0FBSmlCO0FBS2xCOzs7OzBDQUNvQjtBQUFBOztBQUNuQixjQUFPLElBQVAsQ0FBWSxXQUFaLENBQXdCLElBQXhCLEVBQThCLGVBQU87QUFDbkMsZ0JBQUssU0FBTCxHQUFpQixJQUFJLEdBQUosQ0FBUSxLQUFSLENBQWMsR0FBZCxFQUFtQixDQUFuQixDQUFqQjtBQUNELFFBRkQ7QUFHRDs7O3FDQUNlLEMsRUFBRztBQUFBLFdBQ1QsVUFEUyxHQUNNLEtBQUssS0FEWCxDQUNULFVBRFM7O0FBRWpCLFNBQUUsY0FBRjtBQUNBLGtCQUFXLEtBQUssSUFBTCxDQUFVLFlBQVYsQ0FBdUIsS0FBdkIsQ0FBNkIsSUFBN0IsRUFBWDtBQUNBLFlBQUssSUFBTCxDQUFVLFlBQVYsQ0FBdUIsS0FBdkIsR0FBK0IsRUFBL0I7QUFDRDs7O2lDQUNXLEMsRUFBRztBQUNiLFNBQUUsY0FBRjtBQUNBLGNBQU8sSUFBUCxDQUFZLE1BQVosQ0FBbUIsRUFBRSxLQUFLLE9BQU8sU0FBUCxDQUFpQixNQUFqQixDQUF3QixjQUF4QixDQUFQLEVBQW5CO0FBQ0Q7Ozs4QkFDUTtBQUNQLGNBQ0U7QUFBQTtBQUFBLFdBQUssSUFBRyxVQUFSLEVBQW1CLFdBQVUscUJBQTdCLEVBQW1ELE9BQU8sRUFBRSxPQUFPLE9BQVQsRUFBMUQ7QUFDRTtBQUFBO0FBQUEsYUFBSyxXQUFVLGVBQWYsRUFBK0IsT0FBTyxZQUF0QztBQUNFLGtEQUFLLGlCQUFMLEVBQWdCLFdBQVUsMEJBQTFCLEVBQXFELE9BQU8sU0FBNUQsRUFBdUUsS0FBSSxFQUEzRSxHQURGO0FBR0U7QUFBQTtBQUFBLGVBQUksV0FBVSxhQUFkLEVBQTRCLE9BQU8sVUFBbkM7QUFBQTtBQUFBO0FBSEYsVUFERjtBQU9FO0FBQUE7QUFBQSxhQUFLLFdBQVUsWUFBZjtBQUNFO0FBQUE7QUFBQSxlQUFNLFVBQVUsS0FBSyxlQUFyQjtBQUNFO0FBQUE7QUFBQSxpQkFBSyxXQUFVLGFBQWY7QUFDRTtBQUNFLHVCQUFLLE1BRFAsRUFDYyxXQUFVLGNBRHhCLEVBQ3VDLE1BQUssY0FENUMsRUFDMkQsS0FBSSxjQUQvRDtBQUVFLHdCQUFPLEtBQUs7QUFGZCxpQkFERjtBQUtFO0FBQUE7QUFBQSxtQkFBTSxXQUFVLGlCQUFoQjtBQUNFLDBEQUFPLE1BQUssUUFBWixFQUFxQixXQUFVLGlCQUEvQixFQUFpRCxPQUFNLEtBQXZEO0FBREY7QUFMRjtBQURGLFlBREY7QUFjRTtBQUFBO0FBQUEsZUFBUSxNQUFLLFFBQWIsRUFBc0IsV0FBVSw0QkFBaEMsRUFBNkQsU0FBUyxLQUFLLFdBQTNFO0FBQUE7QUFBQTtBQWRGO0FBUEYsUUFERjtBQTRCRDs7OztHQW5EbUMsZ0JBQU0sUzs7bUJBQXZCLFE7Ozs7Ozs7QUNOckIsa0NBQWlDLGcrQjs7Ozs7Ozs7Ozs7O1NDQWpCLFUsR0FBQSxVO0FBQVQsVUFBUyxVQUFULENBQW9CLE9BQXBCLEVBQTZCO0FBQ2xDLFVBQU87QUFDTCxXQUFNLGFBREQ7QUFFTDtBQUZLLElBQVA7QUFJRCxFIiwiZmlsZSI6IlBvcHVwQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBjcmVhdGVTdG9yZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgcGVyc2lzdFN0b3JlLCBhdXRvUmVoeWRyYXRlIH0gZnJvbSAncmVkdXgtcGVyc2lzdCc7XG5pbXBvcnQgcmVkdWNlciBmcm9tICcuL1BvcHVwQXBwL3JlZHVjZXIuanMnO1xuaW1wb3J0IHsgUG9wdXBBcHAgfSBmcm9tICcuL1BvcHVwQXBwL2NvbnRhaW5lci5qcyc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcyc7XG5pbXBvcnQgJ2pxdWVyeS9qcXVlcnkubWluLmpzJztcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvanMvYm9vdHN0cmFwLm1pbi5qcyc7XG5cbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlciwgdW5kZWZpbmVkLCBhdXRvUmVoeWRyYXRlKCkpO1xucGVyc2lzdFN0b3JlKHN0b3JlKTtcblxucmVuZGVyKFxuICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICA8UG9wdXBBcHAgLz5cbiAgPC9Qcm92aWRlcj4sXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdQb3B1cEFwcCcpXG4pO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvUG9wdXBBcHAuanNcbiAqKi8iLCJpbXBvcnQgdXBkYXRlIGZyb20gJ3JlYWN0L2xpYi91cGRhdGUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0geyBibG9jazogW10gfSwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdBRERfUEFUVEVSTic6XG4gICAgICByZXR1cm4gdXBkYXRlKHN0YXRlLCB7XG4gICAgICAgIGJsb2NrOiB7ICRwdXNoOiBbYWN0aW9uLnBhdHRlcm5dIH1cbiAgICAgIH0pO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL1BvcHVwQXBwL3JlZHVjZXIuanNcbiAqKi8iLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IFJvb3QgZnJvbSAnLi9jb21wb25lbnRzL1Jvb3QuanN4JztcbmltcG9ydCB7IGFkZFBhdHRlcm4gfSBmcm9tICcuL2FjdGlvbnMuanMnO1xuXG5leHBvcnQgY29uc3QgUG9wdXBBcHAgPSBjb25uZWN0KFxuICBzdGF0ZSA9PiAoXG4gICAgeyBwYXR0ZXJuczogc3RhdGUuYmxvY2sgfVxuICApLFxuICBkaXNwYXRjaCA9PiAoXG4gICAge1xuICAgICAgYWRkUGF0dGVybjogcGF0dGVybiA9PiBkaXNwYXRjaChhZGRQYXR0ZXJuKHBhdHRlcm4pKVxuICAgIH1cbiAgKVxuKShSb290KTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL1BvcHVwQXBwL2NvbnRhaW5lci5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgbG9nbyBmcm9tICcuLi8uLi9jb21tb24vaWNvbnMvdGMtMzIucG5nJztcbmNvbnN0IHN0eWxlSGVhZGluZyA9IHsgcGFkZGluZzogJzBweCcgfTtcbmNvbnN0IHN0eWxlVGl0bGUgPSB7IHBhZGRpbmc6ICcxMHB4IDE1cHggMTBweCAxNXB4JyB9O1xuY29uc3Qgc3R5bGVMb2dvID0geyBwYWRkaW5nOiAnM3B4IDE1cHggNHB4IDVweCcgfTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLm9uU3VibWl0UGF0dGVybiA9IHRoaXMub25TdWJtaXRQYXR0ZXJuLmJpbmQodGhpcyk7XG4gICAgdGhpcy5nb1RvT3B0aW9ucyA9IHRoaXMuZ29Ub09wdGlvbnMuYmluZCh0aGlzKTtcbiAgICB0aGlzLmN1cnJlbnRETiA9ICcnO1xuICB9XG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICBjaHJvbWUudGFicy5nZXRTZWxlY3RlZChudWxsLCB0YWIgPT4ge1xuICAgICAgdGhpcy5jdXJyZW50RE4gPSB0YWIudXJsLnNwbGl0KCcvJylbMl07XG4gICAgfSk7XG4gIH1cbiAgb25TdWJtaXRQYXR0ZXJuKGUpIHtcbiAgICBjb25zdCB7IGFkZFBhdHRlcm4gfSA9IHRoaXMucHJvcHM7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGFkZFBhdHRlcm4odGhpcy5yZWZzLnBhdHRlcm5JbnB1dC52YWx1ZS50cmltKCkpO1xuICAgIHRoaXMucmVmcy5wYXR0ZXJuSW5wdXQudmFsdWUgPSAnJztcbiAgfVxuICBnb1RvT3B0aW9ucyhlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNocm9tZS50YWJzLmNyZWF0ZSh7IHVybDogY2hyb21lLmV4dGVuc2lvbi5nZXRVUkwoJ29wdGlvbnMuaHRtbCcpIH0pO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBpZD1cIlBvcHVwQXBwXCIgY2xhc3NOYW1lPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiIHN0eWxlPXt7IHdpZHRoOiAnNDAwcHgnIH19PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLWhlYWRpbmdcIiBzdHlsZT17c3R5bGVIZWFkaW5nfT5cbiAgICAgICAgICA8aW1nIHNyYz17bG9nb30gY2xhc3NOYW1lPVwiaW1nLXJlc3BvbnNpdmUgcHVsbC1sZWZ0XCIgc3R5bGU9e3N0eWxlTG9nb30gYWx0PVwiXCIgLz5cblxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJwYW5lbC10aXRsZVwiIHN0eWxlPXtzdHlsZVRpdGxlfT5UaG91Z2h0IENyaW1lPC9oMz5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lbC1ib2R5XCI+XG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMub25TdWJtaXRQYXR0ZXJufT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwicGF0dGVybklucHV0XCIgcmVmPVwicGF0dGVybklucHV0XCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5jdXJyZW50RE59XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLWJ0blwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWZhdWx0XCIgdmFsdWU9XCJBZGRcIiAvPlxuICAgICAgICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tZGVmYXVsdCBwdWxsLXJpZ2h0XCIgb25DbGljaz17dGhpcy5nb1RvT3B0aW9uc30+XG4gICAgICAgICAgICBPcHRpb25zXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvUG9wdXBBcHAvY29tcG9uZW50cy9Sb290LmpzeFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUNBQUFBQWdDQVlBQUFCemVucjBBQUFBQkhOQ1NWUUlDQWdJZkFoa2lBQUFBQWx3U0ZsekFBQUFQd0FBQUQ4QlI1ZUo0QUFBQUJsMFJWaDBVMjltZEhkaGNtVUFkM2QzTG1sdWEzTmpZWEJsTG05eVo1dnVQQm9BQUFKZFNVUkJWRmlGM2RaSmExUkJFQWZ3bnhzWUVUZGNFVU5VY0Y5d1NhTGdVYStLTjhFb2dndDZVbFR3QStqQkwrQkpCRUU4ZVBHbzRFa1A0bklRZ2dzdUtJcEIzQzRSWTFUaWN1ZzMyQm5mZTlOdkpsNzhRekZNMVZUL2E2cXJxb3QwYk1NN1BNQWVqTU4wbk1KNzNNT0NDdWRWd2dKOHhxOUl2bUNvVG5jWG8vOUZBQmZyaU1xa1o2VEpaK0o3aFFCdWpYUUF4eXVRMTJSVnE2UnpjQXhYL0gzM0tmSkd1TGFkYUt0S3ZoRURUWkFXeVROTUtDTExxOWcrOUZhTnVnQkR1SUd2elRndngyRi90MXFLUE1ZdXpHcEVNaW9oa0VFOHh3SDBDMTB4RCszQ0xPakxwRC9UWGNFbDdFajVseWw0aEo5Q1JtTHN3N282M1ZFaEE2ZFREOC9Md0JvY2pMNXZGaWJodVl3VXB1R3AwUE5iTTlJMjNNZENYTS9zTXRzUkZlcGdvcERPdkx1OWh2TjRHZW51NEt5UXFUeWY2Nm5FTWM0VUhOYU03RzBtZ0dYQ3ZiZEtQb2dwWlVSRkw5ZGtZUmkxaWo2TXJlcTBUZjdqYzFLNDZ6emJCNXpBMVJ6YmE2RnRrOUN1dUFEUFpML3BGRkpiMHovRXBNejJvc0QzbHJTWlUxcDh0NlBmSGNwMEEvN01oMm5LNjJaN0kvTFJlRnR5d0tDd2h0WFFhL2pBMlZMaSt3dVhpMGhyNkZRK3U4Y0wzVkh6YTBkSFpLK2ZpdlhZMUNpQXRRME9pRWtXQyszVkhkbldOL0NkZ2JsbEFTeXFFRUJYOXRuaFQ5WlMva0Q5ZXpJc2dOa1ZBdGdRNmJxRUF1eEk4SjlhcjRpSFJPSFdFbUcxVUloeDZydnhUVnFiVGFwWHhBSDhURGhndkpDRkZaR3VTOWdibTBJY3dKTkVuLzJHdDJNblBpWDZQaTR6THBHMi8rY3RyQ2xMN0FPTWFSUmhqN0E0ak5SVFhKTlhXSnBIbUZjNDg3RWJLNFZYc1ZuOHdFZmN4QVV0MU1uL2pkOGc0RDl3eXVybTdnQUFBQUJKUlU1RXJrSmdnZz09XCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbW1vbi9pY29ucy90Yy0zMi5wbmdcbiAqKiBtb2R1bGUgaWQgPSAzMjhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMVxuICoqLyIsImV4cG9ydCBmdW5jdGlvbiBhZGRQYXR0ZXJuKHBhdHRlcm4pIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnQUREX1BBVFRFUk4nLFxuICAgIHBhdHRlcm5cbiAgfTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL1BvcHVwQXBwL2FjdGlvbnMuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9